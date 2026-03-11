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
    window.ACES_THEMES.map(theme => `
      <section class="research" id="${theme.id}">
        <div class="wrap">
          <h2><span>${theme.emoji}</span> ${theme.title}</h2>
          <p class="desc">${theme.desc}</p>
          <div class="pgrid">${theme.papers.map(paperCard).join('')}</div>
        </div>
      </section>`
    ).join('');
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
