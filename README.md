# 🎓 PHINMA Education Media Directory  
**A centralized hub for verified institutional links and digital resources across the PHINMA Education network**  

> *An independent, student-led initiative from Southwestern University PHINMA*  

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-brightgreen)](https://phinma-education-media-directory.vercel.app)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)  

---  

## 📖 Overview  

The **PHINMA Education Media Directory** is a lightweight, high-performance static web portal that aggregates **verified** websites, social media profiles, and contact channels for institutions within the PHINMA Education system. Serving 12 campuses across the Philippines and Indonesia, it acts as a digital bridge for students and the community.

Designed with a **mobile-first** approach, the directory features a premium UI utilizing glassmorphism, dynamic background animations (via `blob.css`), and a sophisticated grain overlay—all achieved without heavy external frameworks.

🔗 **Explore the Directory:** [phinma-education-media-directory.vercel.app](https://phinma-education-media-directory.vercel.app)  

---  

## ✨ Key Features  

- 🛡️ **Verified Directory** – Centralized collection of official URLs, social media handles, and institutional emails.
- 🎨 **Modern Aesthetic** – Sleek interface with glassmorphism cards, fluid blob animations, and interactive motion design.
- 📱 **Responsive Design** – Optimized for seamless access across mobile, tablet, and desktop resolutions.
- ⚡ **Lightweight Core** – Built with zero-dependency Vanilla JS, HTML5, and modern CSS (Flexbox & Grid).
- 📂 **Institutional Hierarchy** – Organized file structure in `/schools` for easy campus-specific discovery.
- 🌍 **International Scope** – Support for the full network across the Philippines and Indonesia.

---  

## 🛠️ Tech Stack  

| Category | Technology | Implementation Details |
| :--- | :--- | :--- |
| **Markup** | HTML5 | Semantic structure for SEO and accessibility |
| **Styling** | CSS3 (Flexbox, Grid, Nesting) | Custom properties, `css/blob.css` for animations |
| **Logic** | Vanilla JavaScript | DOM manipulation for carousels & navigation |
| **Deployment** | Vercel | Automated CI/CD from GitHub main branch |
| **Assets** | Optimized SVG & WebP | Low-latency media stored in `/assets` |

---  

## 🏗️ Architecture Overview  

### Directory Structure  

```
phinma-education-media-directory/
│
├── index.html                 # Main Landing Page
│
├── assets/                    # Optimized media storage
│   ├── icons/                 # UI components and brand logos
│   ├── images/                # Optimized campus and system photography
│   └── social-preview.png     # Open Graph preview image
│
├── css/                       # Global styling system
│   ├── blob.css               # Dynamic background animations
│   ├── developing.css         # "In Development" status styles
│   └── style.css              # Core layout and component tokens
│
├── js/                        # Client-side interactivity
│   ├── breadcrumb.js          # Dynamic navigation hierarchy generator
│   └── script.js              # Core UI logic and animations
│
├── schools/                   # Institutional-specific sub-directories
│   ├── swu/                   # Southwestern University PHINMA
│   ├── araullo/               # Araullo University PHINMA
│   ├── coc/                   # Cagayan de Oro College PHINMA
│   └── ...                    # Support for all 12 PHINMA institutions
│       ├── index.html         # School-specific landing page
│       ├── css/               # Modular styling overrides
│       ├── pages/             # Institutional resource pages
│       └── more/              # Additional school content
│
├── CONTRIBUTING.md            # Community contribution standards
├── LICENSE                    # MIT Open-Source Legal Terms
└── README.md                  # Project documentation
```

### Data Flow  

1. **User Request**: The browser loads `index.html` from Vercel's global CDN.
2. **Resource Loading**: Global styles and core scripts are executed immediately for a "fast boil" experience.
3. **Dynamic Interaction**: `js/script.js` manages quote rotations, hero image fades, and the interactive university carousel.
4. **Navigation**: Campus-specific pages are linked directly within the institutional cards for instant state transitions.

---  

## 🚀 Getting Started  

### Local Development  

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/resty-aldave/PHINMA-Education-Media-Directory.git
   cd PHINMA-Education-Media-Directory
   ```

2. **Launch Preview**  
   Because this is a static project, you can simply open `index.html` in your browser. For the best experience (including relative path resolution), use a local server:
   - **VS Code**: Use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
   - **Python**: Run `python -m http.server 8000` and visit `localhost:8000`.

---  

## 🗺️ Strategic Roadmap  

### Phase 1: MVP & Standardization (ACTIVE)  
Establish the core directory for SWU PHINMA and the primary network template.  

### Phase 2: Intelligent Navigation  
Implementation of a global fuzzy-search bar and tag-based filtering for departments.  

### Phase 3: Spatial UX Integration  
Introduction of low-poly 3D campus maps for physical office navigation.  

### Phase 4: Enterprise Refactor  
Migration to **Next.js (React)** and **Tailwind CSS** for advanced state management and scalability.  

---  

## 🛡️ Governance & Contribution  

This project is a collaborative effort. To ensure data integrity:
- **Link Audits**: Institutional links are periodically verified for accuracy.
- **Pull Requests**: All updates go through a code review process.
- **Guidelines**: See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed workflow instructions.

---  

## ⚠️ Disclaimer  

**Independent Student Initiative:**  
This platform is not an official website of the PHINMA Education network. It is a student-led project created for educational and community-building purposes. Institutional names, logos, and photography remain the intellectual property of their respective owners and are used here under **Fair Use** for identification and support.

---  

## ⚖️ License  

Distributed under the **MIT License**. See `LICENSE` for more information.  

*Built with 🎓 by students, for the PHINMA Education community.*