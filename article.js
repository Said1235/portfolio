(async () => {
  const slug = new URLSearchParams(window.location.search).get("slug");
  const root = document.querySelector("#article-content");
  const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

  const articles = window.PORTFOLIO_POSTS_PROMISE
    ? await window.PORTFOLIO_POSTS_PROMISE
    : ((window.PORTFOLIO && window.PORTFOLIO.articles) || []);
  const article = Array.isArray(articles) ? articles.find(item => item.slug === slug) : null;

  if (article && root) {
    document.title = article.title + " — Said";
    const body = typeof window.renderPortfolioMarkdown === "function"
      ? window.renderPortfolioMarkdown(article.body || "")
      : "<p>" + esc(article.body || "") + "</p>";
    root.innerHTML = '<a class="back-link" href="index.html#notes">← Volver a la bitácora</a><article class="article-body"><div class="kicker">'+esc(article.category||"FIELD NOTES")+' / '+esc(article.readTime||"LECTURA")+'</div><h1>'+esc(article.title)+'</h1><div class="article-byline">SAID · '+esc(article.date||"")+'</div><p class="article-standfirst">'+esc(article.excerpt||"")+'</p><div class="article-prose">'+body+'</div></article>';
  } else if (root && articles === null) {
    root.innerHTML = '<a class="back-link" href="index.html#notes">← Volver a la bitácora</a><div class="article-not-found"><span class="kicker">FIELD NOTES / OFFLINE</span><h1>No se pudo cargar este artículo.</h1><p>La conexión con GitHub no respondió. Recarga la página para intentarlo de nuevo.</p></div>';
  }

  const year = document.querySelector("#year"); if (year) year.textContent = new Date().getFullYear();
})();