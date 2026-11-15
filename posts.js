(() => {
  const API_URL = "https://api.github.com/repos/Said1235/portfolio/contents/content/posts?ref=main&per_page=100";

  const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));

  function readScalar(value) {
    const text = String(value ?? "").trim();
    if (text.startsWith('"') && text.endsWith('"')) {
      try { return JSON.parse(text); } catch (_) { return text.slice(1, -1); }
    }
    if (text.startsWith("'") && text.endsWith("'")) return text.slice(1, -1).replace(/''/g, "'");
    if (text === "true") return true;
    if (text === "false") return false;
    return text;
  }

  function parsePost(source, filename) {
    const match = source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n|$)/);
    const fields = {};

    if (match) {
      match[1].split(/\r?\n/).forEach(line => {
        const field = line.match(/^([A-Za-z][\w-]*):\s*(.*)$/);
        if (field) fields[field[1]] = readScalar(field[2]);
      });
    }

    const body = match ? source.slice(match[0].length).trim() : source.trim();
    const slug = String(fields.slug || filename.replace(/\.md$/i, ""));
    const wordCount = body.split(/\s+/).filter(Boolean).length;
    const estimatedMinutes = Math.max(1, Math.ceil(wordCount / 200));
    const published = fields.published === undefined
      ? true
      : String(fields.published).toLowerCase() !== "false";

    return {
      slug,
      title: String(fields.title || slug.replace(/-/g, " ")),
      date: String(fields.date || ""),
      category: String(fields.category || "NOTA"),
      excerpt: String(fields.excerpt || ""),
      readTime: String(fields.readTime || (estimatedMinutes + " MIN")),
      published,
      body
    };
  }

  function renderInline(source) {
    let html = escapeHtml(source);
    html = html.replace(/!\[([^\]]*)\]\((https?:\/\/[^)\s]+|assets\/uploads\/[^)\s]+)\)/g,
      (_, alt, url) => '<img src="' + url + '" alt="' + alt + '" loading="lazy">');
    html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
      '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
    html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
    html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    return html;
  }

  function renderMarkdown(markdown = "") {
    const lines = String(markdown).replace(/\r/g, "").split("\n");
    const output = [];
    let index = 0;

    const isBlockStart = line =>
      /^#{1,4}\s/.test(line) || /^>\s?/.test(line) ||
      /^[-*+]\s+/.test(line) || /^\d+\.\s+/.test(line) ||
      /^```/.test(line) || /^---+$/.test(line);

    while (index < lines.length) {
      const line = lines[index].trim();
      if (!line) { index++; continue; }

      if (/^---+$/.test(line)) {
        output.push("<hr>");
        index++;
        continue;
      }

      if (/^```/.test(line)) {
        index++;
        const code = [];
        while (index < lines.length && !/^```/.test(lines[index].trim())) {
          code.push(lines[index]);
          index++;
        }
        if (index < lines.length) index++;
        output.push("<pre><code>" + escapeHtml(code.join("\n")) + "</code></pre>");
        continue;
      }

      const heading = line.match(/^(#{1,4})\s+(.*)$/);
      if (heading) {
        const level = Math.min(4, heading[1].length);
        output.push("<h" + level + ">" + renderInline(heading[2]) + "</h" + level + ">");
        index++;
        continue;
      }

      if (/^>\s?/.test(line)) {
        const quote = [];
        while (index < lines.length && /^>\s?/.test(lines[index].trim())) {
          quote.push(lines[index].trim().replace(/^>\s?/, ""));
          index++;
        }
        output.push("<blockquote>" + quote.map(renderInline).join("<br>") + "</blockquote>");
        continue;
      }

      if (/^[-*+]\s+/.test(line)) {
        const items = [];
        while (index < lines.length && /^[-*+]\s+/.test(lines[index].trim())) {
          items.push("<li>" + renderInline(lines[index].trim().replace(/^[-*+]\s+/, "")) + "</li>");
          index++;
        }
        output.push("<ul>" + items.join("") + "</ul>");
        continue;
      }

      if (/^\d+\.\s+/.test(line)) {
        const items = [];
        while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
          items.push("<li>" + renderInline(lines[index].trim().replace(/^\d+\.\s+/, "")) + "</li>");
          index++;
        }
        output.push("<ol>" + items.join("") + "</ol>");
        continue;
      }

      const paragraph = [line];
      index++;
      while (index < lines.length && lines[index].trim() && !isBlockStart(lines[index].trim())) {
        paragraph.push(lines[index].trim());
        index++;
      }
      output.push("<p>" + renderInline(paragraph.join(" ")) + "</p>");
    }

    return output.join("\n");
  }

  async function loadPosts() {
    const response = await fetch(API_URL, {
      headers: { Accept: "application/vnd.github+json" }
    });

    if (response.status === 404) return [];
    if (!response.ok) throw new Error("GitHub respondió " + response.status);

    const files = await response.json();
    if (!Array.isArray(files)) throw new Error("La respuesta de GitHub no contiene una lista de artículos.");

    const markdownFiles = files.filter(file =>
      file.type === "file" && typeof file.name === "string" && file.name.toLowerCase().endsWith(".md")
    );

    const posts = await Promise.all(markdownFiles.map(async file => {
      const raw = await fetch(file.download_url);
      if (!raw.ok) throw new Error("No se pudo leer " + file.name);
      return parsePost(await raw.text(), file.name);
    }));

    return posts.filter(post => post.published)
      .sort((a, b) => String(b.date).localeCompare(String(a.date)));
  }

  window.renderPortfolioMarkdown = renderMarkdown;
  window.PORTFOLIO_POSTS_PROMISE = loadPosts().catch(error => {
    console.error("No se pudo cargar la bitácora desde GitHub:", error);
    return null;
  });
})();