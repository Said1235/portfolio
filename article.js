(() => {
  const slug = new URLSearchParams(window.location.search).get("slug");
  const articles = (window.PORTFOLIO && window.PORTFOLIO.articles) || [];
  const article = articles.find(item => item.slug === slug);
  const root = document.querySelector("#article-content");
  const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  if (article && root) {
    document.title = article.title + " — Said";
    const blocks = (article.body || []).map(block => {
      const text = esc(block.text || "");
      if (block.type === "heading") return "<h2>"+text+"</h2>";
      if (block.type === "quote") return "<blockquote>"+text+"</blockquote>";
      if (block.type === "list") return "<ul>"+(block.items||[]).map(item=>"<li>"+esc(item)+"</li>").join("")+"</ul>";
      return "<p>"+text+"</p>";
    }).join("");
    root.innerHTML = '<a class="back-link" href="index.html#notes">← Volver a la bitácora</a><article class="article-body"><div class="kicker">'+esc(article.category||"FIELD NOTES")+' / '+esc(article.readTime||"LECTURA")+'</div><h1>'+esc(article.title)+'</h1><div class="article-byline">SAID · '+esc(article.date||"")+'</div><p class="article-standfirst">'+esc(article.excerpt||"")+'</p><div class="article-prose">'+blocks+'</div></article>';
  }
  const year = document.querySelector("#year"); if (year) year.textContent = new Date().getFullYear();
})();