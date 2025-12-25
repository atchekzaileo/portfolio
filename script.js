const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const yearEl = $("#year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// ---------------- i18n ----------------
const dict = {
  fr: {
    "header.tagline": "L3 Informatique — Systèmes, Réseaux & Cybersécurité (Lyon 1 — La Doua)",
    "header.cta": "Me contacter",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.about": "À propos",
    "nav.contact": "Contact",

    "hero.kicker": "Portfolio",
    "hero.title": "Stage — Systèmes, Réseaux & Cybersécurité",
    "hero.subtitle": "Je présente ici mes projets académiques et personnels (réseaux, Linux, dev & automatisation).",
    "hero.btnProjects": "Voir mes projets",
    "hero.metric1.top": "Focus",
    "hero.metric1.bottom": "Réseaux • Linux • Sécurité",
    "hero.metric2.top": "Stack",
    "hero.metric2.bottom": "Python • Bash • C/C++ • Web",
    "hero.card.chip": "Disponible",
    "hero.card.chip2": "Stage fin d’année",
    "hero.card.title": "Profil en bref",
    "hero.card.li1": "Licence 3 Informatique (UCBL — La Doua)",
    "hero.card.li2": "CCNA 1 (bases réseaux solides)",
    "hero.card.li3": "Linux + TP réseau + scripting",
    "hero.card.li4": "Objectif : Master Systèmes, Réseaux & Sécurité",
    "hero.card.contact": "Contact",
    "hero.card.copy": "Copier le lien",

    "projects.title": "Projets",
    "projects.subtitle": "Une sélection de projets (avec liens GitHub). J’ajoute les repos au fur et à mesure.",
    "projects.p1": "Page bilingue moderne pour présenter mes projets, compétences et liens (CV, GitHub, contact).",

    "projects.portscanner.title": "Port Scanner TCP (Python)",
    "projects.portscanner.desc":
      "Scanner TCP multithread avec banner grabbing, fingerprint HTTP/SSH, historisation SQLite et dashboard Flask.",

    "projects.p3title": "Automation & Scripting",
    "projects.p3": "Scripts et mini-outils : automatisation de tâches, parsing, utilitaires (ex. réseau, logs, etc.).",

    "projects.maxflowink.title": "Encrage d’image par flot maximum (C++)",
    "projects.maxflowink.desc":
      "Binarisation d’une image PGM via modélisation graphe + coupe minimale : capacités gaussiennes entre voisins, termes source/puits, BFS résiduel et export P2.",

    "projects.github": "Code / GitHub ↗",
    "projects.details": "Détails",

    "skills.title": "Compétences",
    "skills.subtitle": "Concentrées sur l’objectif Systèmes / Réseaux / Sécurité.",
    "skills.net.title": "Réseaux",
    "skills.net.li1": "Adressage IP, sous-réseaux",
    "skills.net.li2": "VLAN, routage statique (notions)",
    "skills.sys.title": "Systèmes",
    "skills.sys.li1": "Commandes réseau : ip, ping, traceroute",
    "skills.sys.li2": "Notions DNS / DHCP / HTTP",
    "skills.sys.li3": "Bases administration",
    "skills.sec.title": "Sécurité",
    "skills.sec.li1": "Principes sécurité réseau",
    "skills.sec.li2": "Pare-feu (notions)",
    "skills.sec.li3": "Bonnes pratiques & durcissement (bases)",
    "skills.sec.li4": "Curiosité : SOC, pentest (découverte)",
    "skills.dev.title": "Scripting & Dev",
    "skills.dev.li1": "Web : HTML/CSS/JS, WordPress, React",

    "about.title": "À propos",
    "about.subtitle": "Quelques lignes pour contextualiser ton profil.",
    "about.p1":
      "Étudiant en Licence 3 Informatique à Lyon 1 (La Doua), je m’oriente vers l’infrastructure : systèmes Linux, réseaux et cybersécurité. J’aime comprendre “comment ça marche” (protocoles, services, diagnostic), et automatiser via scripting.",
    "about.p2": "Objectif : stage puis alternance en Master Systèmes, Réseaux & Sécurité.",

    "contact.title": "Contact",
    "contact.subtitle": "Un message et je réponds rapidement.",
    "contact.cvLabel": "Télécharger mon CV (PDF)",
    "contact.copy": "Copier le lien du portfolio",
    "contact.qr": "Générer un QR code",
    "contact.qrTitle": "QR Code",
    "contact.qrHint": "Clique sur “Générer un QR code” après mise en ligne.",

    "footer.built": "Fait en HTML/CSS/JS — GitHub Pages",

    "modals.m1":
      "Page unique, responsive, bilingue, avec animations légères et sections adaptées à un recrutement en infra/réseaux/sécurité.",

    "modals.portscanner.title": "Port Scanner TCP – Python",
    "modals.portscanner.p1":
      "Outil de port scanning TCP multithread développé en Python, intégrant banner grabbing, fingerprinting HTTP et analyse de banners SSH.",
    "modals.portscanner.p2":
      "Le projet inclut l’historisation des scans en base SQLite, la détection de changements entre scans (ports ouverts/fermés), l’export JSON/CSV, des tests automatisés (HTTP et SSH via Docker) et un mini-dashboard Flask.",
    "modals.portscanner.legal":
      "Projet pédagogique — scans réalisés uniquement sur des environnements locaux ou explicitement autorisés.",

    "modals.m3title": "Automation & Scripting",
    "modals.m3":
      "Scripts Python/Bash (utilitaires, automatisation, parsing). Mets ici 1-2 liens vers des repos bien documentés.",

    "modals.maxflowink.title": "Encrage d’une image par flot maximum (C++)",
    "modals.maxflowink.p1":
      "Projet LIFAPC : binarisation intelligente d’une image en niveaux de gris (PGM P2) via un modèle graphe et l’équivalence flot maximum / coupe minimale.",
    "modals.maxflowink.p2":
      "Chaque pixel est un nœud connecté à ses voisins (N/S/E/O) avec des capacités gaussiennes selon la différence d’intensité. Des arcs relient aussi chaque pixel à la source (noir) et au puits (blanc), pondérés par α.",
    "modals.maxflowink.p3":
      "Flot maximum calculé avec Edmonds–Karp (BFS sur graphe résiduel, mise à jour des arcs inverses). Les pixels atteignables depuis la source après blocage sont colorés en noir (0), les autres en blanc (255)."
  },

  en: {
    "header.tagline": "BSc 3rd year — Systems, Networks & Cybersecurity (Lyon 1 — La Doua)",
    "header.cta": "Contact me",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.about": "About",
    "nav.contact": "Contact",

    "hero.kicker": "Portfolio",
    "hero.title": "Internship — Systems, Networks & Cybersecurity",
    "hero.subtitle": "Here are my academic & personal projects (networking, Linux, dev & automation).",
    "hero.btnProjects": "See projects",
    "hero.metric1.top": "Focus",
    "hero.metric1.bottom": "Networking • Linux • Security",
    "hero.metric2.top": "Stack",
    "hero.metric2.bottom": "Python • Bash • C/C++ • Web",
    "hero.card.chip": "Available",
    "hero.card.chip2": "Internship (end of year)",
    "hero.card.title": "Quick summary",
    "hero.card.li1": "BSc in Computer Science (Lyon 1 — La Doua)",
    "hero.card.li2": "CCNA 1 (solid networking foundations)",
    "hero.card.li3": "Linux + networking labs + scripting",
    "hero.card.li4": "Goal: MSc Systems, Networks & Security",
    "hero.card.contact": "Contact",
    "hero.card.copy": "Copy link",

    "projects.title": "Projects",
    "projects.subtitle": "A small selection (with GitHub links). I add repositories regularly.",
    "projects.p1": "Modern bilingual single-page website to showcase projects, skills and links (CV, GitHub, contact).",

    "projects.portscanner.title": "TCP Port Scanner (Python)",
    "projects.portscanner.desc":
      "Multithreaded TCP port scanner with banner grabbing, HTTP/SSH fingerprinting, SQLite history and a Flask dashboard.",

    "projects.p3title": "Automation & Scripting",
    "projects.p3": "Scripts & small tools: automation, parsing, utilities (network, logs, etc.).",

    "projects.maxflowink.title": "Image inking via max-flow / min-cut (C++)",
    "projects.maxflowink.desc":
      "PGM image binarization using graph modeling + min-cut: Gaussian neighbor capacities, source/sink terms, residual BFS, and P2 export.",

    "projects.github": "Code / GitHub ↗",
    "projects.details": "Details",

    "skills.title": "Skills",
    "skills.subtitle": "Focused on Systems / Networks / Security.",
    "skills.net.title": "Networking",
    "skills.net.li1": "IP addressing, subnetting",
    "skills.net.li2": "VLAN, static routing (basics)",
    "skills.sys.title": "Systems",
    "skills.sys.li1": "Network commands: ip, ping, traceroute",
    "skills.sys.li2": "DNS / DHCP / HTTP basics",
    "skills.sys.li3": "Admin basics",
    "skills.sec.title": "Security",
    "skills.sec.li1": "Network security principles",
    "skills.sec.li2": "Firewall (basics)",
    "skills.sec.li3": "Hardening & best practices (basics)",
    "skills.sec.li4": "Curiosity: SOC, pentest (exploring)",
    "skills.dev.title": "Scripting & Dev",
    "skills.dev.li1": "Web: HTML/CSS/JS, WordPress, React",

    "about.title": "About",
    "about.subtitle": "A few lines to contextualize my profile.",
    "about.p1":
      "BSc 3rd-year student at Lyon 1 (La Doua), focusing on infrastructure: Linux systems, networking and cybersecurity. I enjoy understanding how things work (protocols, services, troubleshooting) and automating tasks with scripting.",
    "about.p2": "Goal: internship, then apprenticeship for the MSc Systems, Networks & Security.",

    "contact.title": "Contact",
    "contact.subtitle": "Send a message — I reply quickly.",
    "contact.cvLabel": "Download my resume (PDF)",
    "contact.copy": "Copy portfolio link",
    "contact.qr": "Generate QR code",
    "contact.qrTitle": "QR Code",
    "contact.qrHint": "Click “Generate QR code” after publishing the website.",

    "footer.built": "Built with HTML/CSS/JS — GitHub Pages",

    "modals.m1":
      "Responsive bilingual single-page portfolio with lightweight animations and infra/network/security-friendly sections.",

    "modals.portscanner.title": "TCP Port Scanner – Python",
    "modals.portscanner.p1":
      "Educational multithreaded TCP port scanner written in Python, featuring banner grabbing, HTTP fingerprinting and SSH banner parsing.",
    "modals.portscanner.p2":
      "The project includes scan history stored in SQLite, change detection between scans (opened/closed ports), JSON/CSV export, automated tests (local HTTP and SSH via Docker), and a lightweight Flask dashboard.",
    "modals.portscanner.legal":
      "Educational project — scans are performed only on local or explicitly authorized environments.",

    "modals.m3title": "Automation & Scripting",
    "modals.m3":
      "Python/Bash scripts (utilities, automation, parsing). Add 1–2 well-documented repos.",

    "modals.maxflowink.title": "Image inking via max-flow / min-cut (C++)",
    "modals.maxflowink.p1":
      "LIFAPC project: smart binarization of a grayscale image (PGM P2) using a graph model and the max-flow / min-cut equivalence.",
    "modals.maxflowink.p2":
      "Each pixel is a node connected to its 4-neighbors (N/S/E/W) with Gaussian capacities based on intensity differences. Pixels are also connected to a source (black) and a sink (white), weighted by α.",
    "modals.maxflowink.p3":
      "Max flow is computed with Edmonds–Karp (BFS on the residual graph, reverse-edge updates). Pixels reachable from the source after convergence become black (0); others become white (255)."
  }
};

function pickInitialLang() {
  const saved = localStorage.getItem("lang");
  if (saved === "fr" || saved === "en") return saved;

  const nav = (navigator.language || "").toLowerCase();
  return nav.startsWith("fr") ? "fr" : "en";
}

function t(lang, key) {
  const pack = dict[lang] || dict.en;
  return pack[key] ?? dict.en[key] ?? null;
}

function applyI18n(lang) {
  // text nodes
  $$("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = t(lang, key);
    if (typeof value === "string") el.textContent = value;
  });

  // optional attribute translations: data-i18n-attr="aria-label|title|placeholder"
  $$("[data-i18n-attr]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const attrs = (el.getAttribute("data-i18n-attr") || "")
      .split("|")
      .map(s => s.trim())
      .filter(Boolean);

    const value = key ? t(lang, key) : null;
    if (!value) return;

    attrs.forEach(attr => el.setAttribute(attr, value));
  });
}

function setLang(lang) {
  const safe = (lang === "fr" || lang === "en") ? lang : "en";
  document.documentElement.lang = safe;
  localStorage.setItem("lang", safe);

  const pill = $("#langPill");
  if (pill) pill.textContent = safe.toUpperCase();

  applyI18n(safe);
  return safe;
}

const langToggle = $("#langToggle");
let currentLang = setLang(pickInitialLang());

if (langToggle) {
  langToggle.addEventListener("click", () => {
    currentLang = setLang(currentLang === "fr" ? "en" : "fr");
  });
}

// ---------------- Reveal on scroll (more “human”) ----------------
const revealEls = $$(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        io.unobserve(e.target); // reveal once
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
);

revealEls.forEach(el => io.observe(el));

// ---------------- Modals (more robust) ----------------
function openModalById(id) {
  const dlg = document.getElementById(id);
  if (!dlg || typeof dlg.showModal !== "function") return;

  // store last focused element
  dlg.__returnFocusEl = document.activeElement;
  dlg.showModal();

  // focus close button if present (nice UX)
  const closeBtn = dlg.querySelector("[data-modal-close]");
  if (closeBtn) closeBtn.focus();
}

function closeModal(dlg) {
  if (!dlg) return;
  dlg.close();
  const prev = dlg.__returnFocusEl;
  if (prev && typeof prev.focus === "function") prev.focus();
}

$$("[data-modal-open]").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-modal-open");
    if (id) openModalById(id);
  });
});

$$("[data-modal-close]").forEach(btn => {
  btn.addEventListener("click", () => {
    const dlg = btn.closest("dialog");
    closeModal(dlg);
  });
});

// Close modal on backdrop click + ESC
$$("dialog.modal").forEach(dlg => {
  dlg.addEventListener("click", (e) => {
    // backdrop click: if click target is the dialog itself (not inside)
    if (e.target === dlg) closeModal(dlg);
  });

  dlg.addEventListener("cancel", (e) => {
    // ESC
    e.preventDefault();
    closeModal(dlg);
  });
});

// ---------------- Copy helpers (clipboard fallback) ----------------
async function copyText(text, noticeEl) {
  const okMsg = currentLang === "fr" ? "Copié ✅" : "Copied ✅";
  const warnMsg = currentLang === "fr"
    ? "Copie manuelle : "
    : "Manual copy: ";

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      // fallback (works on more browsers)
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      ta.style.top = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }

    if (noticeEl) {
      noticeEl.className = "notice ok";
      noticeEl.textContent = okMsg;
    }
  } catch {
    if (noticeEl) {
      noticeEl.className = "notice warn";
      noticeEl.textContent = warnMsg + text;
    }
  }
}

const copyLinkBtn = $("#copyLinkBtn");
const copyNotice = $("#copyNotice");
if (copyLinkBtn) {
  copyLinkBtn.addEventListener("click", () => {
    copyText(window.location.href, copyNotice);
  });
}

const copyPageBtn = $("#copyPageBtn");
const pageNotice = $("#pageNotice");
if (copyPageBtn) {
  copyPageBtn.addEventListener("click", () => {
    copyText(window.location.href, pageNotice);
  });
}

// ---------------- QR Code ----------------
const qrBtn = $("#qrBtn");
const qrImg = $("#qrImg");

if (qrBtn && qrImg) {
  qrBtn.addEventListener("click", () => {
    const url = window.location.href;

    // petit garde-fou (certaines pages locales / file://)
    if (!url.startsWith("http")) {
      if (pageNotice) {
        pageNotice.className = "notice warn";
        pageNotice.textContent = (currentLang === "fr")
          ? "Publie d’abord le site (GitHub Pages), puis génère le QR code."
          : "Publish the website first (GitHub Pages), then generate the QR code.";
      }
      return;
    }

    const encoded = encodeURIComponent(url);
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encoded}`;

    qrImg.src = qrUrl;
    qrImg.style.display = "block";

    if (pageNotice) {
      pageNotice.className = "notice ok";
      pageNotice.textContent = (currentLang === "fr")
        ? "QR code généré ✅"
        : "QR generated ✅";
    }
  });
}
