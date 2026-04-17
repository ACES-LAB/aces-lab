/* ============================================================
   ACES Lab — assets/js/main.js (ENHANCED VERSION)
   Renders pages from data/ files with rich paper metadata
   ============================================================ */

// ── Paper card (research.html) — ENHANCED VERSION ─────────────
function paperCard(p, themeColor) {
  const color = themeColor || '#003057';
  const awards = (p.awards || []).map(a => `<span class="badge-award">★ ${a}</span>`).join('');
  
  // Build action buttons for available resources
  const actions = [];
  if (p.pdf && p.pdf !== '#') {
    actions.push(`<a href="${p.pdf}" target="_blank" class="paper-action" title="PDF">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
      PDF
    </a>`);
  }
  if (p.code) {
    actions.push(`<a href="${p.code}" target="_blank" class="paper-action" title="Code">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
      Code
    </a>`);
  }
  if (p.project) {
    actions.push(`<a href="${p.project}" target="_blank" class="paper-action" title="Project">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
      Project
    </a>`);
  }
  if (p.slides) {
    actions.push(`<a href="${p.slides}" target="_blank" class="paper-action" title="Slides">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
      Slides
    </a>`);
  }
  if (p.video) {
    actions.push(`<a href="${p.video}" target="_blank" class="paper-action" title="Video">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
      Video
    </a>`);
  }
  if (p.doi) {
    actions.push(`<a href="https://doi.org/${p.doi}" target="_blank" class="paper-action" title="DOI">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
      DOI
    </a>`);
  }
  
  const actionsHTML = actions.length > 0 
    ? `<div class="paper-actions">${actions.join('')}</div>`
    : '';

  // Build the card with or without image
  const imageHTML = p.image 
    ? `<div class="paper-thumb" style="background-color: ${color}">
         <img src="${p.image}" alt="${p.title}" onerror="this.style.display='none'">
         <span class="paper-year">${p.year || ''}</span>
       </div>`
    : `<div class="pthumb-bar" style="background:${color}">
         <span class="pthumb-year">${p.year || ''}</span>
       </div>`;

  return `<div class="pcard ${p.image ? 'pcard-with-image' : ''}">
    ${imageHTML}
    <div class="pbody">
      <div class="ptitle">${p.title}</div>
      ${awards}
      <div class="pdivider"><i></i><i></i><i></i><i></i></div>
      <div class="pbadges">
        <span class="badge-venue">${p.venue}</span>
        ${p.authors ? `<span class="badge-author">${p.authors}</span>` : ''}
      </div>
      ${actionsHTML}
    </div>
  </div>`;
}

// ── Homepage preview card (3 shown per theme + see-all tile) ──
function previewCard(p, themeColor) {
  const color = themeColor || '#003057';
  const awards = (p.awards || []).map(a => `<span class="badge-award">★ ${a}</span>`).join('');
  
  // Build action buttons for available resources
  const actions = [];
  if (p.pdf && p.pdf !== '#') {
    actions.push(`<a href="${p.pdf}" target="_blank" class="paper-action" title="PDF">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
      PDF
    </a>`);
  }
  if (p.code) {
    actions.push(`<a href="${p.code}" target="_blank" class="paper-action" title="Code">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
      Code
    </a>`);
  }
  if (p.project) {
    actions.push(`<a href="${p.project}" target="_blank" class="paper-action" title="Project">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
      Project
    </a>`);
  }
  if (p.slides) {
    actions.push(`<a href="${p.slides}" target="_blank" class="paper-action" title="Slides">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
      Slides
    </a>`);
  }
  if (p.video) {
    actions.push(`<a href="${p.video}" target="_blank" class="paper-action" title="Video">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
      Video
    </a>`);
  }
  if (p.doi) {
    actions.push(`<a href="https://doi.org/${p.doi}" target="_blank" class="paper-action" title="DOI">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
      DOI
    </a>`);
  }
  
  const actionsHTML = actions.length > 0 
    ? `<div class="paper-actions">${actions.join('')}</div>`
    : '';
  
  const imageHTML = p.image 
    ? `<div class="paper-thumb-preview" style="background-color: ${color}">
         <img src="${p.image}" alt="${p.title}" onerror="this.style.display='none'">
         <span class="paper-year">${p.year || ''}</span>
       </div>`
    : `<div class="pthumb-bar" style="background:${color}">
         <span class="pthumb-year">${p.year || ''}</span>
       </div>`;

  return `<div class="pcard ${p.image ? 'pcard-with-image' : ''}">
    ${imageHTML}
    <div class="pbody">
      <div class="ptitle">${p.title}</div>
      ${awards}
      <div class="pdivider"><i></i><i></i><i></i><i></i></div>
      <div class="pbadges">
        <span class="badge-venue">${p.venue}</span>
        ${p.authors ? `<span class="badge-author">${p.authors}</span>` : ''}
      </div>
      ${actionsHTML}
    </div>
  </div>`;
}

// ── Member bubble (strip) ─────────────────────────────────────
function memberBubble(m) {
  const av = m.photo
    ? `<img src="${m.photo}" alt="${m.name}" onerror="this.parentElement.textContent='${m.initials}'">`
    : m.initials;
  return `<a class="member" href="${m.url || '#'}"${m.url && m.url !== '#' ? ' target="_blank"' : ''} title="${m.name}">
    <div class="avatar${m.highlight ? ' pi' : ''}">${av}</div>
    <div class="m-name">${m.name.split(' ')[0]}</div>
    <div class="m-role">${m.role}</div>
  </a>`;
}

// ── Team full card ────────────────────────────────────────────
function teamCard(m) {
  const av = m.photo
    ? `<img src="${m.photo}" alt="${m.name}" onerror="this.parentElement.textContent='${m.initials}'">`
    : m.initials;
  return `<div class="tcard">
    <div class="tavatar${m.highlight ? ' pi' : ''}">${av}</div>
    <div class="tinfo">
      <div class="tname">${m.name}</div>
      <div class="trole">${m.role}</div>
      <div class="ttopic">${m.detail}</div>
    </div>
  </div>`;
}

// ══════════════════════════════════════════════════════════════
//  HOME PAGE RENDERERS
// ══════════════════════════════════════════════════════════════
function renderStats() {
  document.getElementById('stats-row').innerHTML =
    window.ACES_STATS.map(s =>
      `<div><div class="stat-num">${s.number}</div><div class="stat-lbl">${s.label}</div></div>`
    ).join('');
}

function renderNav() {
  // Research theme links go to research.html
  document.getElementById('nav-themes').innerHTML =
    window.ACES_THEMES.map(t =>
      `<a href="research.html#${t.id}">${t.navLabel}</a>`
    ).join('');
}

function renderTeamStrip() {
  document.getElementById('team-strip').innerHTML =
    window.ACES_TEAM.current.map(memberBubble).join('');
}

function renderNews() {
  document.getElementById('news-list').innerHTML =
    window.ACES_NEWS.slice(0, 8).map(n =>
      `<div class="news-row"><div class="nd">${n.date}</div><div class="nt">${n.emoji} ${n.text}</div></div>`
    ).join('');
}

// ── 4 Research Area tiles ─────────────────────────────────────
function renderAreas() {
  const el = document.getElementById('area-tiles');
  if (!el) return;
  el.innerHTML = window.ACES_AREAS.map(a => `
    <a class="area-tile" href="area.html#${a.id}" style="border-top:4px solid ${a.color}">
      <div class="area-emoji">${a.emoji}</div>
      <div class="area-title">${a.title}</div>
      <div class="area-tagline">${a.tagline}</div>
      <div class="area-pubs">${(window.ACES_PAPERS[a.themes[0]] || []).length}+ papers</div>
      <div class="area-arrow">Explore →</div>
    </a>`).join('');
}

// ── 5 Research theme preview (3 cards + see-all tile) ─────────
function renderResearch() {
  document.getElementById('research-sections').innerHTML =
    window.ACES_THEMES.map(theme => {
      const papers    = window.ACES_PAPERS[theme.key] || [];
      const preview   = papers.slice(0, 3).map(p => previewCard(p, theme.color)).join('');
      const remaining = papers.length - 3;
      const seeAll = remaining > 0 ? `
        <a class="pcard pcard-seemore" href="research.html#${theme.id}">
          <div class="seemore-thumb" style="background:${theme.color}">
            <div class="pthumb-grid"></div>
            <div class="seemore-count">+${remaining}</div>
            <div class="seemore-label">more papers</div>
          </div>
          <div class="pbody">
            <div class="ptitle seemore-title">See All ${papers.length} Papers</div>
            <div class="psub">View the complete ${theme.navLabel} publication list →</div>
          </div>
        </a>` : '';
      return `
        <section class="research" id="${theme.id}">
          <div class="wrap">
            <h2><span>${theme.emoji}</span> ${theme.title}</h2>
            <p class="desc">${theme.desc}</p>
            <div class="pgrid">${preview}${seeAll}</div>
          </div>
        </section>`;
    }).join('');
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
        <td class="aname">${a.name}</td>
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
    ).join('') + `<span class="stile stile-add">+ Add Sponsor</span>`;
}

// ══════════════════════════════════════════════════════════════
//  RESEARCH.HTML — full papers by theme
// ══════════════════════════════════════════════════════════════
function renderResearchPage() {
  const container = document.getElementById('research-page');
  if (!container) return;

  // Inject nav
  const navEl = document.getElementById('nav-themes');
  if (navEl) navEl.innerHTML = window.ACES_THEMES.map(t =>
    `<a href="research.html#${t.id}">${t.navLabel}</a>`).join('');

  const hash  = window.location.hash.slice(1);
  const theme = window.ACES_THEMES.find(t => t.id === hash) || window.ACES_THEMES[0];
  const papers = window.ACES_PAPERS[theme.key] || [];

  const sidebar = window.ACES_THEMES.map(t => {
    const count = (window.ACES_PAPERS[t.key] || []).length;
    return `<a class="theme-nav-item${t.id === theme.id ? ' active' : ''}"
               href="research.html#${t.id}">
      <span class="theme-dot" style="background:${t.color}"></span>
      <span>${t.emoji} ${t.navLabel}</span>
      <span class="theme-count">${count}</span>
    </a>`;
  }).join('');

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
            <p class="rpage-count">${papers.length} publications</p>
          </div>
        </div>
        <div class="pgrid rpage-grid">
          ${papers.map(p => paperCard(p, theme.color)).join('')}
        </div>
      </main>
    </div>`;

  window.removeEventListener('hashchange', renderResearchPage);
  window.addEventListener('hashchange', renderResearchPage);
}

// ══════════════════════════════════════════════════════════════
//  AREA.HTML — deep dive on one of the 4 main research areas
// ══════════════════════════════════════════════════════════════
function renderAreaPage() {
  const container = document.getElementById('area-page');
  if (!container) return;

  const navEl = document.getElementById('nav-themes');
  if (navEl) navEl.innerHTML = window.ACES_THEMES.map(t =>
    `<a href="research.html#${t.id}">${t.navLabel}</a>`).join('');

  const hash = window.location.hash.slice(1);
  const area = window.ACES_AREAS.find(a => a.id === hash) || window.ACES_AREAS[0];

  // Sidebar
  const sidebar = window.ACES_AREAS.map(a => `
    <a class="theme-nav-item${a.id === area.id ? ' active' : ''}" href="area.html#${a.id}">
      <span class="theme-dot" style="background:${a.color}"></span>
      <span>${a.emoji} ${a.title}</span>
    </a>`).join('');

  // Pull sample papers from linked themes
  const samplePapers = area.themes.flatMap(key => (window.ACES_PAPERS[key] || []).slice(0, 6));

  container.innerHTML = `
    <div class="rpage-layout">
      <aside class="rpage-sidebar">
        <div class="rpage-sidebar-title">Research Areas</div>
        ${sidebar}
        <a class="rpage-back" href="index.html">← Back to Home</a>
      </aside>
      <main class="rpage-main">
        <div class="rpage-header" style="border-left:4px solid ${area.color}">
          <div class="rpage-emoji">${area.emoji}</div>
          <div>
            <h1>${area.title}</h1>
            <p class="area-page-tagline">${area.tagline}</p>
          </div>
        </div>

        <div class="area-desc">${area.desc}</div>

        ${area.highlights ? `
        <div class="area-highlights">
          ${area.highlights.map(h => `<div class="area-hl-item">✓ ${h}</div>`).join('')}
        </div>` : ''}

        <h2 class="area-papers-heading">Selected Publications</h2>
        <div class="pgrid rpage-grid">
          ${samplePapers.map(p => paperCard(p, area.color)).join('')}
        </div>

        <div class="area-more-link">
          <a href="research.html#${area.themes[0].replace('THEME_', 'research-').toLowerCase()}">
            View all publications in this theme →
          </a>
        </div>
      </main>
    </div>`;

  window.removeEventListener('hashchange', renderAreaPage);
  window.addEventListener('hashchange', renderAreaPage);
}

// ══════════════════════════════════════════════════════════════
//  SHARED — scroll spy + mobile nav
// ══════════════════════════════════════════════════════════════
function initScrollSpy() {
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

// ══════════════════════════════════════════════════════════════
//  BOOT — detect which page we're on
// ══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();

  if (document.getElementById('research-page')) {
    renderResearchPage();
    return;
  }
  if (document.getElementById('area-page')) {
    renderAreaPage();
    return;
  }
  // Home page
  renderStats();
  renderNav();
  renderTeamStrip();
  renderNews();
  renderAreas();
  renderResearch();
  renderTeamFull();
  renderSponsors();
  initScrollSpy();
});
