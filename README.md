# ACES Lab Website

**Advanced Computational Electricity Systems Laboratory**  
Georgia Institute of Technology · School of ECE

---

## Folder Structure

```
aces-lab/
│
├── index.html                  ← Page shell (rarely needs editing)
│
├── assets/
│   ├── css/
│   │   └── style.css           ← All styles
│   ├── js/
│   │   ├── data.js             ← ✏️  EDIT THIS to update content
│   │   └── main.js             ← Renders the page from data.js
│   └── img/
│       ├── team/               ← Drop member photos here (60×60px+, square)
│       ├── papers/             ← Drop paper thumbnails here
│       └── sponsors/           ← Drop sponsor logos here (transparent PNG)
│
└── README.md
```

---

## How to Open

Just **double-click `index.html`** in any browser. No server needed.

---

## How to Update Content

**Everything lives in `assets/js/data.js`.**  
Open it in any text editor (VS Code, Notepad++, etc.) and follow the comments.

### Add a paper
Find the right theme in `window.ACES_THEMES`, add an object to its `papers` array:
```js
{
  thumbColor: '#003057',       // Background color of the placeholder tile
  thumbLabel: 'Short\nLabel', // Text shown on tile (use \n for line break)
  title:  'Paper Title',
  sub:    'One-sentence description of the contribution.',
  url:    'https://doi.org/...',   // Link to PDF or DOI — use '#' if not ready
  tags:   ['IEEE Trans. Power Systems 2025'],
  awards: ['Best Paper'],      // Optional — shows yellow badge
  authors: 'Author A, Grijalva',
}
```

### Add a team member
Add to `window.ACES_TEAM.current`:
```js
{ initials: 'AB', name: 'Alice Brown', role: 'PhD', detail: 'Research topic here',
  url: 'https://...', photo: 'assets/img/team/alice.jpg' }
```
`role` must be exactly: `'Postdoc'`, `'PhD'`, or `'MS'` (controls grouping).

### Add a news item
Prepend to `window.ACES_NEWS` (newest first):
```js
{ date: '2026 Jan', emoji: '🎉', text: 'News text with optional <a href="URL">links</a>.' }
```

### Add a stat
Edit `window.ACES_STATS` — any number/label pair.

### Add a sponsor
Add to `window.ACES_SPONSORS`:
```js
{ name: 'Sponsor Name', logo: 'assets/img/sponsors/logo.png', url: 'https://...' }
```

---

## Adding Photos

Drop image files into the right folder and reference them in `data.js`:
- **Team photos** → `assets/img/team/firstname.jpg` (square, 120×120px minimum)
- **Paper thumbnails** → `assets/img/papers/paper-id.png` (any size)
- **Sponsor logos** → `assets/img/sponsors/name.png` (transparent PNG, ~150×50px)

If an image is missing or fails to load, the site falls back gracefully (initials for team, colored tile for papers).

---

## Deploying to GitHub Pages

```bash
# 1. Create a public repo named 'aces-lab' on GitHub
# 2. Push this folder:
git init
git add .
git commit -m "ACES Lab website"
git remote add origin https://github.com/YOUR_ORG/aces-lab.git
git push -u origin main

# 3. Go to: Repo → Settings → Pages → Source: main branch / root → Save
# Live at: https://YOUR_ORG.github.io/aces-lab/
```

---

## Colors

| Variable  | Value     | Used for               |
|-----------|-----------|------------------------|
| `--navy`  | `#003057` | Navbar, headers, cards |
| `--gold`  | `#EAAA00` | Accents, badges, stats |
| `--navy2` | `#004a88` | Links, role labels     |
