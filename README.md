# Sanjeev Senapati — Digital Autobiography & Professional Portfolio

> **“My Life. My Journey. My Story.”**  
> A premium, mobile-first, dynamic digital autobiography, professional technology portfolio, and family legacy website for **Sanjeev Senapati**.

---

## 🌟 Overview & Core Highlights

This website is designed as a personal digital storybook balancing two complementary identities:
1. **The Professional Builder**: 20+ years of high-scale enterprise engineering, Bank of America consulting, CBDC / Digital Rupee / eRupee rails, Kubernetes/OpenShift cloud architectures, and production reliability.
2. **The Personal Life Journey**: Coastal roots in Bhadrak, loving marriage of 13+ years with Swagatika Pradhan, joyful fatherhood with Aadvika & Aadhees, honoring his father’s 2009 memorial, places that shaped his life, and resilience through challenging seasons.

---

## 📂 Project Architecture

```text
/
├── index.html                     # Main single-page narrative application
├── data/
│   └── timeline-data.json         # Single source of truth: all site content & timeline events
├── css/
│   ├── style.css                 # Design tokens, Rainbow/Dark/Light themes, card layouts
│   └── responsive.css            # Mobile-first adaptive design (320px to 1920px+)
├── js/
│   ├── data-loader.js            # Asynchronous JSON fetcher & inline Markdown parser
│   ├── app.js                    # Main controller, dynamic content population & theme cycle
│   ├── timeline.js               # Interactive chronological timeline & chapter popups
│   ├── gallery.js                # Lightbox viewer & image popups
│   └── animations.js             # Canvas particle animations & scroll reveal observers
├── assets/
│   └── images/                   # High-definition photography for all life chapters
│       ├── childhood/            # Bhadrak childhood memories
│       ├── school/               # School years & mathematics spark
│       ├── college/              # Engineering college years in Bhubaneswar
│       ├── career/               # Enterprise consulting & high-availability systems
│       ├── love/                 # Hyderabad 2011 meeting
      ├── marriage/             # 04 March 2013 Bhubaneswar wedding
│       ├── children/             # Aadvika & Aadhees
│       ├── father/               # Sacred memorial for father (2009)
│       ├── mother/               # Mother's tribute (Age 74)
│       ├── today/                # 2026 Mumbai portrait
│       └── future/               # Legacy & dreams
└── README.md
```

---

## 📝 How to Edit Content & Add New Timeline Events

All site data, personal stories, quotes, photos, and timeline milestones are stored in:
📁 [`data/timeline-data.json`](file:///Users/sanjeev/workspace/me/data/timeline-data.json)

### 1. Adding a New Milestone / Chapter to the Timeline
To add a new event, open `data/timeline-data.json` and append a new milestone object to the `"timelineEvents"` array:

```json
{
  "id": "new-milestone-2027",
  "year": "2027",
  "date": "15 June 2027",
  "title": "My New Milestone Title",
  "category": "career",
  "categoryLabel": "Career Milestone",
  "location": "Mumbai, India",
  "tag": "Milestone",
  "icon": "🚀",
  "thumbnail": "assets/images/career/new-milestone.jpg",
  "summary": "Brief summary of the milestone.",
  "quote": "“An inspiring quote with **markdown** formatting.”",
  "statsBadge": "2027 Milestone",
  "storyParagraphs": [
    "First paragraph with **bold text** and *italics*.",
    "Second narrative paragraph describing the chapter in detail."
  ],
  "takeaways": [
    "Key takeaway point 1",
    "Key takeaway point 2"
  ]
}
```

### 2. Markdown Formatting Support
Text fields in `data/timeline-data.json` (such as `storyParagraphs`, `takeaways`, `quote`, `heroBio`) support standard **Markdown** syntax:
- **Bold text**: `**your text**` or `__your text__`
- *Italic text*: `*your text*` or `_your text_`
- [Hyperlinks]: `[Link Text](https://example.com)`

The built-in loader ([`js/data-loader.js`](file:///Users/sanjeev/workspace/me/js/data-loader.js)) automatically converts Markdown syntax into clean HTML when rendering cards and chapter popups.

### 3. Adding & Updating Photos
Place your `.jpg` or `.png` images into the appropriate folder under `assets/images/` and update the `thumbnail` or `photo` path in `data/timeline-data.json`:

```json
"thumbnail": "assets/images/career/my-photo.jpg"
```

---

## 🎨 Themes & Customization

The site features dynamic theme cycling powered by CSS tokens and localStorage:
- **Rainbow Mode 🌈** (Default): Multi-color animated spectrum text gradients, glowing rainbow buttons, and HSL particle background.
- **Dark Obsidian ☀️**: Sleek dark luxury aesthetic with golden amber accents.
- **Light Ivory 🌙**: Warm cream light aesthetic with high contrast text.

To switch themes, click the **Theme Toggle Button (🌈)** in the top navigation bar.

---

## 🚀 Running & Deploying Locally

### Local Preview
Because content is loaded asynchronously via `fetch('./data/timeline-data.json')`, serve the site using any HTTP server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js npx serve
npx serve .
```

Open `http://localhost:8000` in your web browser.

### Free Deployment Options
- **GitHub Pages**: Push this repository to GitHub (`main` branch) and enable Pages in repository settings.
- **Vercel / Netlify / Cloudflare Pages**: Connect your GitHub repository for instant global CDN deployment.

---

© 2026 Sanjeev Senapati. Built with pride and craftsmanship.
