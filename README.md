# ACES Lab Website

**Advanced Computational Electricity Systems Laboratory**
Georgia Institute of Technology · School of ECE

---

## How to Open the Website

Just **double-click `index.html`** — it opens in any browser, no setup needed.

---

## Folder Structure

```
aces-lab/
│
├── index.html          ← Homepage (rarely needs editing)
├── research.html       ← Full publications list by theme
├── area.html           ← Deep-dive on each of the 4 research areas
│
├── data/               ← ✏️  EDIT THESE FILES to update content
│   ├── papers.js       ← All ~65+ research papers (add new ones here)
│   ├── themes.js       ← The 5 publication theme names/descriptions
│   ├── areas.js        ← The 4 main research area descriptions
│   ├── team.js         ← Current members + alumni
│   ├── news.js         ← News items (newest first)
│   ├── stats.js        ← The numbers in the hero (250+ publications, etc.)
│   └── sponsors.js     ← Research sponsors
│
├── assets/
│   ├── css/style.css   ← All visual styling (colors, layout)
│   ├── js/main.js      ← Page renderer — don't edit this
│   └── img/
│       ├── team/       ← Drop member photos here (e.g. grijalva.jpg)
│       ├── papers/     ← Paper thumbnail images (optional)
│       └── sponsors/   ← Sponsor logo images
│
└── README.md           ← This file
```

---

## The Data Folder — What to Edit

Open any file in the `data/` folder with a plain text editor (TextEdit on Mac,
Notepad on Windows, or VS Code). Each file has comments at the top explaining
exactly what to change.

---

### ➕ Add a New Paper (`data/papers.js`)

Find the right theme section (THEME_AI, THEME_PV, THEME_PROSUMERS,
THEME_CYBER, or THEME_OPT) and paste a new entry:

```js
{
  title:   "Full paper title here",
  authors: "Last A, Last B, Grijalva S",
  venue:   "IEEE Transactions on Power Systems",
  year:    2025,
  url:     "https://doi.org/...",   // paste the DOI link, or use "#" if not ready
  awards:  [],                      // or ["Best Paper"] to show a badge
},
```

---

### ➕ Add a News Item (`data/news.js`)

Paste at the **top** of the list (newest first):

```js
{ date: "2026 Jan", emoji: "🎉", text: "Your news text here with optional <a href='URL'>links</a>." },
```

---

### ➕ Add a Team Member (`data/team.js`)

Add to the `current` array:

```js
{
  initials: "AB",
  name:     "Alice Brown",
  role:     "PhD",           // must be: "Director", "Postdoc", "PhD", or "MS"
  detail:   "Research topic here",
  url:      "#",             // personal website or "#"
  photo:    "assets/img/team/alice.jpg",  // or "" if no photo yet
},
```

Then drop a square photo (at least 120×120 pixels) into `assets/img/team/`.

---

### ➕ Add a Sponsor (`data/sponsors.js`)

```js
{ name: "Sponsor Name", logo: "assets/img/sponsors/logo.png", url: "https://..." },
```

Drop the logo image (transparent PNG, ~150×50px) into `assets/img/sponsors/`.

---

### ✏️ Update the Hero Stats (`data/stats.js`)

Just change the numbers:

```js
{ number: "300+", label: "Publications" },
```

---

## Deploying to GitHub Pages (Free Hosting)

```bash
# 1. Create a public repo named 'aces-lab' on GitHub
# 2. In Terminal, navigate to this folder and run:
git init
git add .
git commit -m "ACES Lab website"
git remote add origin https://github.com/YOUR_ORG/aces-lab.git
git push -u origin main

# 3. On GitHub: Settings → Pages → Source: main branch → Save
# Your site will be live at: https://YOUR_ORG.github.io/aces-lab/
```

---

## Colors (for reference)

| Name     | Hex       | Used for                    |
|----------|-----------|-----------------------------|
| GT Navy  | `#003057` | Navbar, headings, cards     |
| GT Gold  | `#EAAA00` | Accents, badges, stats      |
| Link     | `#004a88` | Clickable links, role text  |
