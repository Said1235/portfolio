(async () => {
  const data = window.PORTFOLIO || {};
  const $ = (selector) => document.querySelector(selector);
  const esc = (value = "") => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const identity = data.identity || {};
  const setText = (selector, value) => { const el = $(selector); if (el && value) el.textContent = value; };
  setText("#hero-eyebrow", identity.eyebrow);
  setText("#hero-description", identity.heroDescription);
  setText("#hero-note", identity.heroNote);
  setText("#about-description", identity.aboutDescription);
  if ($("#hero-title") && identity.heroTitle) $("#hero-title").innerHTML = identity.heroTitle;

  const grid = $("#project-grid");
  if (grid) grid.innerHTML = (data.projects || []).map((p, i) =>
    '<article class="project-card '+(i===0?'project-featured':'')+'"><div class="project-art '+esc(p.visual)+'">'+
    '<span class="project-art-index">PROJECT / '+esc(p.number)+'</span><span class="project-art-mark">'+esc(p.mark)+'</span><span class="project-art-line"></span><span class="project-art-caption">'+esc(p.category)+'</span></div>'+
    '<div class="project-info"><div class="project-meta"><span>'+esc(p.category)+'</span><span>'+esc(p.number)+'</span></div><h3>'+esc(p.name)+'</h3><p>'+esc(p.description)+'</p>'+
    '<div class="project-bottom"><span>'+esc(p.note)+'</span><a href="'+esc(p.repo)+'" target="_blank" rel="noreferrer">Ver proyecto <b>↗</b></a></div></div></article>'
  ).join("");

  const list = $("#article-list");
  if (list) {
    const articles = window.PORTFOLIO_POSTS_PROMISE
      ? await window.PORTFOLIO_POSTS_PROMISE
      : (data.articles || []);

    if (articles === null) {
      list.innerHTML = '<div class="empty-notes"><div class="empty-index">NOTEBOOK / OFFLINE</div><div><h3>No se pudo cargar la bitácora.</h3><p>La conexión con GitHub no respondió. Recarga la página para intentarlo de nuevo.</p></div><span class="empty-spark">↻</span></div>';
    } else if (!articles.length) {
      list.innerHTML = '<div class="empty-notes"><div class="empty-index">NOTEBOOK / 001</div><div><h3>La primera historia todavía está por escribirse.</h3><p>Abre el editor visual, crea una entrada y publícala. Aparecerá aquí automáticamente.</p><a class="text-link" href="https://pagescms.org/" target="_blank" rel="noreferrer">Abrir Pages CMS ↗</a></div><span class="empty-spark">✳</span></div>';
    } else {
      list.innerHTML = articles.slice(0,6).map((a,i)=>'<a class="article-row" href="article.html?slug='+encodeURIComponent(a.slug)+'"><span class="article-number">0'+(i+1)+'</span><span class="article-main"><span class="article-category">'+esc(a.category||"NOTA")+'</span><strong>'+esc(a.title)+'</strong><span class="article-excerpt">'+esc(a.excerpt||"")+'</span></span><span class="article-date">'+esc(a.date||"")+'</span><span class="article-arrow">↗</span></a>').join("");
    }
  }

  const year = $("#year"); if (year) year.textContent = new Date().getFullYear();
  const toggle = $("#menu-toggle"), nav = $("#site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => { const open = toggle.getAttribute("aria-expanded") !== "true"; toggle.setAttribute("aria-expanded", String(open)); nav.classList.toggle("nav-open",open); });
    nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{toggle.setAttribute("aria-expanded","false");nav.classList.remove("nav-open");}));
  }
})();