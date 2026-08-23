# Sanjeev Senapati — Digital Autobiography & Professional Portfolio

> **“My Life. My Journey. My Story.”**  
> A premium, mobile-first, static digital autobiography, professional technology portfolio, and family legacy website for **Sanjeev Senapati**.

---

## 🌟 Overview & Core Highlights

This website is designed as a personal digital storybook balancing two complementary identities:
1. **The Professional Builder**: 20+ years of high-scale enterprise engineering, Bank of America consulting, CBDC / Digital Rupee / eRupee rails, Kubernetes/OpenShift cloud architectures, and production reliability.
2. **The Personal Life Journey**: Coastal roots in Bhadrak, loving marriage of 13+ years with Swagatika Pradhan, joyful fatherhood with Aadvika & Aadhees, honoring his father’s 2009 memorial, places that shaped his life, and resilience through challenging seasons.

---

## 📂 File Architecture

```text
/
├── index.html                  # Main semantic HTML5 single-page narrative
├── css/
│   ├── style.css              # Editorial tokens, typography, dark/light themes, card layouts
│   └── responsive.css         # Mobile-first adaptive design (320px to 1920px+)
├── js/
│   ├── data.js                # Central data store (all personal details, milestones, placeholders)
│   ├── app.js                 # App controller, dynamic metric calculators, theme & navigation
│   ├── timeline.js            # Interactive chronological timeline & category filters
│   ├── gallery.js             # Lightbox modal viewer & placeholder guidance
│   └── animations.js          # IntersectionObserver scroll reveals & animated stat counters
├── assets/
│   └── images/                # Organized image directories for all life chapters
│       ├── childhood/         # Bhadrak childhood memories
│       ├── school/            # School years
│       ├── college/           # Independent engineering years
│       ├── career/            # Enterprise consulting & high-availability systems
│       ├── places/            # 6 key cities
│       ├── love/              # Hyderabad 2011 meeting
│       ├── marriage/          # 04 March 2013 Bhubaneswar wedding
│       ├── family/            # Family foundation
│       ├── children/          # Aadvika & Aadhees
│       ├── father/            # Sacred memorial for father (2009)
│       ├── mother/            # Mother's tribute (Age 74)
│       ├── siblings/          # Siblings cards
│       ├── today/             # 2026 Mumbai portrait & dashboard
│       └── future/            # Legacy & dreams
└── README.md
```

---

## 🛠️ How to Customize Your Information

All personal content, stories, dates, and placeholders are centralized in:
📁 [`js/data.js`](file:///Users/sanjeev/workspace/me/js/data.js)

### 1. Update Personal Stories or Dates
Open `js/data.js` and edit the corresponding section:
- **Childhood memories**: Update `childhood.aspects`
- **College Name / Degree**: Replace `[COLLEGE NAME / UNIVERSITY]` and `[DEGREE]` in `education.collegeDays`
- **Father's Name & Memories**: Update `familyRoots.father.name` and `memories`
- **Mother & Siblings**: Update `familyRoots.mother` and `familyRoots.siblings`
- **Children's Birthdates & Stories**: Update `family.children`
- **Career & CBDC Details**: Update `career.companies` and `career.skillsMatrix`

### 2. Replace Placeholder Images with Real Photos
Simply place your `.jpg` or `.png` images into the appropriate directory in `assets/images/` and update the file path in `js/data.js`.

For example:
```javascript
// In js/data.js:
photo: "assets/images/marriage/our-wedding-2013.jpg"
```

---

## ⚡ Key Features

- **Dynamic Age & Milestone Calculators**: Computes Sanjeev's age (44 in 2026) dynamically from DOB `1982-03-21`, marriage duration (13+ years) from `2013-03-04`, and career years.
- **Chronological Timeline**: Filters by *All*, *Roots & Life*, *Education*, *Technology Career*, and *Family & Fatherhood*.
- **Day & Night Themes**: Switch between *Editorial Warm Ivory* and *Deep Obsidian Bronze* with auto-saved preference.
- **Strict Privacy Compliance**: No private legal documents, sensitive financial data, or credentials exposed.
- **Zero Framework Dependency**: 100% pure HTML5, CSS3, Vanilla JS, and SVG. Runs instantaneously by double clicking `index.html`.

---

## 🚀 Running & Deploying Locally

### Local Preview
Open `index.html` in any modern web browser, or run a local HTTP server:
```bash
# Python 3
python3 -m http.server 8000

# or Node.js npx serve
npx serve .
```

### Free Deployment Options
- **GitHub Pages**: Push this repo to GitHub and enable Pages in repository settings.
- **Vercel / Netlify / Cloudflare Pages**: Connect the repo or drag-and-drop the directory for instant global CDN deployment.

---

© 2026 Sanjeev Senapati. Built with pride and craftsmanship.
