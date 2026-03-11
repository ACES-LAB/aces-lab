/* ============================================================
   ACES Lab — main.js
   Renders the page from window.ACES_* variables in data.js
   ============================================================ */

// ── Thumbnail placeholder (styled like Polo Club paper icons) ──
function thumbPlaceholder(color, label) {
  return `<div class="pthumb-placeholder" style="background:${color}">
    <div class="pthumb-grid"></div>
    <div class="pthumb-code">${label.replace(/\n/g,'<br>')}</div>
  </div>`;
}

// ── Paper card ──────────────────────────────────────────────
function paperCard(p) {
  const thumb = p.img
    ? `<img src="${p.img}" alt="${p.title}" loading="lazy" onerror="this.parentElement.innerHTML='${thumbPlaceholder(p.thumbColor,'').replace(/'/g,'&#39;')}'"/>`
    : thumbPlaceholder(p.thumbColor || '#003057', p.thumbLabel || '');

  const awards = (p.awards || []).map(a => `<span class="badge-award">★ ${a}</span>`).join('');
  const tags   = (p.tags   || []).map(t => `<span class="badge-venue">${t}</span>`).join('');

  return `<a class="pcard" href="${p.url||'#'}"${p.url && p.url!=='#'?' target="_blank"':''}>
    <div class="pthumb">${thumb}</div>
    <div class="pbody">
      <div class="ptitle">${p.title}</div>
      <div class="psub">${p.sub}</div>
      ${awards}
      <div class="pdivider"><i></i><i></i><i></i><i></i></div>
      <div class="pbadges">${tags}${p.authors?`<span class="badge-author">${p.authors}</span>`:''}</div>
    </div>
  </a>`;
}

// ── Member bubble (strip) ───────────────────────────────────
function memberBubble(m) {
  const avatar = m.photo
    ? `<img src="${m.photo}" alt="${m.name}" onerror="this.parentElement.textContent='${m.initials}'">`
    : m.initials;
  return `<a class="member" href="${m.url}"${m.url!=='#'?' target="_blank"':''} title="${m.name}">
    <div class="avatar${m.highlight?' pi':''}">${avatar}</div>
    <div class="m-name">${m.name.split(' ')[0]}</div>
    <div class="m-role">${m.role}</div>
  </a>`;
}

// ── Team full card ──────────────────────────────────────────
function teamCard(m) {
  const avatar = m.photo
    ? `<img src="${m.photo}" alt="${m.name}" onerror="this.parentElement.textContent='${m.initials}'">`
    : m.initials;
  return `<div class="tcard">
    <div class="tavatar${m.highlight?' pi':''}">${avatar}</div>
    <div class="tinfo">
      <div class="tname">${m.name}</div>
      <div class="trole">${m.role}</div>
      <div class="ttopic">${m.detail}</div>
    </div>
  </div>`;
}

// ── Render functions ────────────────────────────────────────
function renderStats() {
  document.getElementById('stats-row').innerHTML =
    window.ACES_STATS.map(s =>
      `<div><div class="stat-num">${s.number}</div><div class="stat-lbl">${s.label}</div></div>`
    ).join('');
}

function renderNav() {
  document.getElementById('nav-themes').innerHTML =
    window.ACES_THEMES.map(t =>
      `<a href="#${t.id}">${t.navLabel}</a>`
    ).join('');
}

function renderTeamStrip() {
  document.getElementById('team-strip').innerHTML =
    window.ACES_TEAM.current.map(memberBubble).join('');
}

function renderNews() {
  document.getElementById('news-list').innerHTML =
    window.ACES_NEWS.slice(0,8).map(n =>
      `<div class="news-row"><div class="nd">${n.date}</div><div class="nt">${n.emoji} ${n.text}</div></div>`
    ).join('');
}

function renderResearch() {
  document.getElementById('research-sections').innerHTML =
    window.ACES_THEMES.map(theme => {
      const preview = theme.papers.slice(0, 3).map(paperCard).join('');
      const remaining = theme.papers.length - 3;
      const seeAllTile = `
        <a class="pcard pcard-seemore" href="research.html#${theme.id}">
          <div class="pthumb seemore-thumb" style="background:${theme.color}">
            <div class="seemore-count">+${remaining}</div>
            <div class="seemore-label">more papers</div>
          </div>
          <div class="pbody">
            <div class="ptitle seemore-title">See All ${theme.papers.length} Papers</div>
            <div class="psub">View the complete ${theme.navLabel} publication list →</div>
            <div class="pdivider"><i></i><i></i><i></i><i></i></div>
            <div class="pbadges"><span class="badge-venue">${theme.navLabel}</span></div>
          </div>
        </a>`;
      return `
        <section class="research" id="${theme.id}">
          <div class="wrap">
            <h2><span>${theme.emoji}</span> ${theme.title}</h2>
            <p class="desc">${theme.desc}</p>
            <div class="pgrid">${preview}${remaining > 0 ? seeAllTile : ''}</div>
          </div>
        </section>`;
    }).join('');
}

// ── Research full page renderer ─────────────────────────────
function renderResearchPage() {
  const container = document.getElementById('research-page');
  if (!container) return;

  // Inject nav theme links
  const navEl = document.getElementById('nav-themes');
  if (navEl) {
    navEl.innerHTML = window.ACES_THEMES.map(t =>
      `<a href="research.html#${t.id}">${t.navLabel}</a>`
    ).join('');
  }

  // Read theme from URL hash
  const hash = window.location.hash.slice(1);
  const theme = window.ACES_THEMES.find(t => t.id === hash) || window.ACES_THEMES[0];

  // Build sidebar nav
  const sidebar = window.ACES_THEMES.map(t => `
    <a class="theme-nav-item${t.id === theme.id ? ' active' : ''}" href="research.html#${t.id}">
      <span class="theme-dot" style="background:${t.color}"></span>
      <span>${t.emoji} ${t.navLabel}</span>
      <span class="theme-count">${t.papers.length}</span>
    </a>`).join('');

  container.innerHTML = `
    <div class="rpage-layout">
      <aside class="rpage-sidebar">
        <div class="rpage-sidebar-title">Research Themes</div>
        ${sidebar}
        <a class="rpage-back" href="index.html">← Back to Home</a>
      </aside>
      <main class="rpage-main">
        <div class="rpage-header" style="border-left:4px solid ${theme.color}">
          <div class="rpage-emoji">${theme.emoji}</div>
          <div>
            <h1>${theme.title}</h1>
            <p>${theme.desc}</p>
          </div>
        </div>
        <div class="pgrid rpage-grid">${theme.papers.map(paperCard).join('')}</div>
      </main>
    </div>`;

  // Re-run if hash changes (sidebar links)
  window.addEventListener('hashchange', renderResearchPage);
}

function renderTeamFull() {
  const groups = [
    { label: 'Director',             filter: m => m.highlight },
    { label: 'Postdoctoral Fellows', filter: m => !m.highlight && m.role === 'Postdoc' },
    { label: 'Ph.D. Students',       filter: m => m.role === 'PhD' },
    { label: 'M.S. Students',        filter: m => m.role === 'MS' },
  ];
  document.getElementById('team-cards').innerHTML = groups.map(g => {
    const members = window.ACES_TEAM.current.filter(g.filter);
    if (!members.length) return '';
    return `<div class="tgroup-label">${g.label}</div>
            <div class="tgrid">${members.map(teamCard).join('')}</div>`;
  }).join('');

  document.getElementById('alumni-list').innerHTML =
    window.ACES_TEAM.alumni.map(a =>
      `<tr>
        <td><a href="${a.url}" class="aname">${a.name}</a></td>
        <td class="ayear">${a.year}</td>
        <td class="apos">${a.role}</td>
      </tr>`
    ).join('');
}

function renderSponsors() {
  document.getElementById('sponsor-grid').innerHTML =
    window.ACES_SPONSORS.map(s =>
      `<a class="stile" href="${s.url}" target="_blank">
        ${s.logo ? `<img src="${s.logo}" alt="${s.name}" onerror="this.style.display='none'">` : ''}
        ${s.name}
      </a>`
    ).join('') +
    `<span class="stile stile-add">+ Add Sponsor</span>`;
}

// ── Navbar scroll highlight ─────────────────────────────────
function initScrollSpy() {
  const links = document.querySelectorAll('#nav-themes a, .nav-static a');
  window.addEventListener('scroll', () => {
    const y = window.scrollY + 70;
    document.querySelectorAll('section[id]').forEach(s => {
      const link = document.querySelector(`a[href="#${s.id}"]`);
      if (!link) return;
      const active = y >= s.offsetTop && y < s.offsetTop + s.offsetHeight;
      link.style.color = active ? '#EAAA00' : '';
      link.style.borderBottomColor = active ? '#EAAA00' : '';
    });
  }, { passive: true });
}

// ── Mobile nav toggle ───────────────────────────────────────
function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('all-nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('open'))
    );
  }
}

// ── Boot ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Research full page (research.html)
  if (document.getElementById('research-page')) {
    renderResearchPage();
    initMobileNav();
    return;
  }
  // Home page (index.html)
  renderStats();
  renderNav();
  renderTeamStrip();
  renderNews();
  renderResearch();
  renderTeamFull();
  renderSponsors();
  initScrollSpy();
  initMobileNav();
});
