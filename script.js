const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const yearEl = $("#year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

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
    "hero.subtitle":
      "Étudiant en Licence 3 Informatique à Lyon 1 (La Doua), je m’oriente vers l’administration système, les réseaux et la cybersécurité. Cette page regroupe des projets réalisés en cours et en autonomie.",
    "hero.btnProjects": "Voir mes projets",
    "hero.card.title": "Profil",
    "hero.card.li1": "Licence 3 Informatique (UCBL — La Doua)",
    "hero.card.li2": "Bases réseaux solides (CCNA 1 + TP)",
    "hero.card.li3": "Linux au quotidien + scripting",
    "hero.card.li4": "Objectif : Master Systèmes, Réseaux & Sécurité",
    "hero.card.contact": "Contact",
    "hero.card.copy": "Copier le lien",

    "projects.title": "Projets",
    "projects.subtitle":
      "Quelques projets représentatifs (cours + perso). J’ajoute au fur et à mesure, en gardant seulement ceux que je peux expliquer clairement.",
    "projects.p1":
      "Site simple et bilingue pour regrouper mes projets, compétences et liens (CV, GitHub, contact). Je l’ai gardé volontairement léger (sans framework) pour qu’il charge vite et reste lisible.",
    "projects.portscanner.title": "Port Scanner TCP (Python)",
    "projects.portscanner.desc":
      "Projet personnel pour comprendre un scan de ports TCP : multithread, lecture de bannières (HTTP/SSH), sauvegarde de scans et visualisation web.",
    "projects.p3title": "Automation & Scripting",
    "projects.p3":
      "Petits scripts / outils : automatisation, parsing, utilitaires (souvent autour de Linux/réseau). Je garde surtout ceux qui sont documentés et réutilisables.",
    "projects.maxflowink.title": "Encrage d’image par flot maximum (C++)",
    "projects.maxflowink.desc":
      "TP LIFAPC : binarisation d’une image PGM en modélisant l’image comme un graphe, puis en appliquant flot maximum / coupe minimale (Edmonds–Karp + parcours résiduel).",
    "projects.github": "Code / GitHub ↗",
    "projects.details": "Détails",

    "skills.title": "Compétences",
    "skills.subtitle":
      "Je préfère rester factuel : ce qui est listé correspond à ce que j’ai déjà pratiqué (TP + projets).",
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
    "about.p1":
      "Je suis en Licence 3 Informatique à Lyon 1 (La Doua). J’ai découvert les systèmes et réseaux via les TP, puis j’ai continué en construisant mes propres projets.",
    "about.p2":
      "Ce qui me plaît le plus, c’est le côté concret : comprendre pourquoi ça ne marche pas, tester, corriger, et automatiser quand c’est utile. Je cherche un stage, puis une alternance, en lien avec un Master Systèmes, Réseaux & Sécurité.",

    "contact.title": "Contact",
    "contact.subtitle": "Un message suffit. Je réponds rapidement.",
    "contact.cvLabel": "CV",
    "contact.cvLink": "Télécharger mon CV (PDF)",
    "contact.copy": "Copier le lien du portfolio",
    "contact.qr": "Générer un QR code",
    "contact.qrTitle": "QR Code",
    "contact.qrHint": "Clique sur “Générer un QR code” après mise en ligne.",

    "footer.built": "Fait en HTML/CSS/JS — GitHub Pages",

    "modals.m1":
      "Portfolio simple et lisible : une page, quelques sections, et des liens directs vers GitHub/CV.",
    "modals.portscanner.title": "Port Scanner TCP – Python",
    "modals.portscanner.p1":
      "Projet personnel pour comprendre le scan TCP : sockets, timeouts, threads, et lecture de bannières (HTTP/SSH).",
    "modals.portscanner.p2":
      "Ajout de l’historique des scans (SQLite), d’une détection de changements entre scans, et d’un mini-dashboard Flask pour parcourir les résultats.",
    "modals.portscanner.legal":
      "Projet pédagogique — scans réalisés uniquement sur des environnements locaux ou explicitement autorisés.",
    "modals.m3title": "Automation & Scripting",
    "modals.m3":
      "Scripts Python/Bash : petites automatisations, parsing, utilitaires Linux. Je peux détailler un ou deux scripts selon le besoin.",
    "modals.maxflowink.title": "Encrage d’une image par flot maximum (C++)",
    "modals.maxflowink.p1":
      "Projet LIFAPC : binariser une image PGM en modélisant les pixels comme un graphe (source = noir, puits = blanc).",
    "modals.maxflowink.p2":
      "Les capacités entre voisins dépendent de la différence d’intensité (gaussienne). Les arcs vers source/puits sont pondérés pour favoriser clair/sombre.",
    "modals.maxflowink.p3":
      "Flot maximum avec Edmonds–Karp (BFS, graphe résiduel). Après convergence, un parcours depuis la source donne la coupure (noir/blanc)."
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
    "hero.subtitle":
      "BSc 3rd-year student at Lyon 1 (La Doua), focusing on systems administration, networking and cybersecurity. This page gathers projects from coursework and personal practice.",
    "hero.btnProjects": "See projects",
    "hero.card.title": "Profile",
    "hero.card.li1": "BSc in Computer Science (Lyon 1 — La Doua)",
    "hero.card.li2": "Solid networking foundations (CCNA 1 + labs)",
    "hero.card.li3": "Linux daily use + scripting",
    "hero.card.li4": "Goal: MSc Systems, Networks & Security",
    "hero.card.contact": "Contact",
    "hero.card.copy": "Copy link",

    "projects.title": "Projects",
    "projects.subtitle":
      "A few representative projects (coursework + personal). I add more over time, keeping only projects I can clearly explain.",
    "projects.p1":
      "Simple bilingual website to centralize my projects, skills and links (resume, GitHub, contact). I kept it lightweight (no framework) so it loads fast and stays easy to read.",
    "projects.portscanner.title": "TCP Port Scanner (Python)",
    "projects.portscanner.desc":
      "Personal project to understand TCP port scanning: multithreading, banner grabbing (HTTP/SSH), scan history and a small web view.",
    "projects.p3title": "Automation & Scripting",
    "projects.p3":
      "Small scripts/tools: automation, parsing, utilities (often around Linux/networking). I mostly keep the ones that are documented and reusable.",
    "projects.maxflowink.title": "Image inking via max-flow / min-cut (C++)",
    "projects.maxflowink.desc":
      "LIFAPC lab: binarize a PGM image by modeling pixels as a graph, then applying max-flow/min-cut (Edmonds–Karp + residual traversal).",
    "projects.github": "Code / GitHub ↗",
    "projects.details": "Details",

    "skills.title": "Skills",
    "skills.subtitle":
      "I try to stay factual: what’s listed here is what I’ve actually practiced (labs + projects).",
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
    "about.p1":
      "I’m a BSc 3rd-year Computer Science student at Lyon 1 (La Doua). I discovered systems and networking through labs, then went further by building my own projects.",
    "about.p2":
      "What I enjoy most is the practical side: understanding why something breaks, testing, fixing, and automating when it makes sense. I’m looking for an internship, then an apprenticeship aligned with an MSc in Systems, Networks & Security.",

    "contact.title": "Contact",
    "contact.subtitle": "A message is enough — I reply quickly.",
    "contact.cvLabel": "Resume",
    "contact.cvLink": "Download my resume (PDF)",
    "contact.copy": "Copy portfolio link",
    "contact.qr": "Generate QR code",
    "contact.qrTitle": "QR Code",
    "contact.qrHint": "Click “Generate QR code” after publishing the website.",

    "footer.built": "Built with HTML/CSS/JS — GitHub Pages",

    "modals.m1":
      "A simple, readable one-page portfolio with direct links to GitHub and the resume.",
    "modals.portscanner.title": "TCP Port Scanner – Python",
    "modals.portscanner.p1":
      "Personal project to understand TCP scanning: sockets, timeouts, threads, and banner grabbing (HTTP/SSH).",
    "modals.portscanner.p2":
      "Added scan history (SQLite), basic change detection between scans, and a small Flask dashboard to browse results.",
    "modals.portscanner.legal":
      "Educational project — scans are performed only on local or explicitly authorized environments.",
    "modals.m3title": "Automation & Scripting",
    "modals.m3":
      "Python/Bash scripts: small automation, parsing, Linux utilities. I can walk through one or two scripts if needed.",
    "modals.maxflowink.title": "Image inking via max-flow / min-cut (C++)",
    "modals.maxflowink.p1":
      "LIFAPC project: binarize a PGM image by modeling pixels as a graph (source=black, sink=white).",
    "modals.maxflowink.p2":
      "Neighbor capacities depend on intensity differences (Gaussian). Source/sink edges are weighted to encourage dark/light assignment.",
    "modals.maxflowink.p3":
      "Max flow with Edmonds–Karp (BFS, residual graph). After convergence, reachability from the source gives the cut (black/white)."
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
  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = t(lang, key);
    if (typeof value === "string") el.textContent = value;
  });

  $$("[data-i18n-attr]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = key ? t(lang, key) : null;
    if (!value) return;

    const attrs = (el.getAttribute("data-i18n-attr") || "")
      .split("|")
      .map((s) => s.trim())
      .filter(Boolean);

    attrs.forEach((attr) => el.setAttribute(attr, value));
  });
}

function setLang(lang) {
  const safe = lang === "fr" || lang === "en" ? lang : "en";
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

const revealEls = $$(".reveal");
if (revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("show");
        io.unobserve(e.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );

  revealEls.forEach((el) => io.observe(el));
}

function openModalById(id) {
  const dlg = document.getElementById(id);
  if (!dlg || typeof dlg.showModal !== "function") return;

  dlg.__returnFocusEl = document.activeElement;
  dlg.showModal();

  const closeBtn = dlg.querySelector("[data-modal-close]");
  if (closeBtn) closeBtn.focus();
}

function closeModal(dlg) {
  if (!dlg) return;
  dlg.close();

  const prev = dlg.__returnFocusEl;
  if (prev && typeof prev.focus === "function") prev.focus();
}

$$("[data-modal-open]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-modal-open");
    if (id) openModalById(id);
  });
});

$$("[data-modal-close]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const dlg = btn.closest("dialog");
    closeModal(dlg);
  });
});

$$("dialog.modal").forEach((dlg) => {
  dlg.addEventListener("click", (e) => {
    if (e.target === dlg) closeModal(dlg);
  });

  dlg.addEventListener("cancel", (e) => {
    e.preventDefault();
    closeModal(dlg);
  });
});

async function copyText(text, noticeEl) {
  const okMsg = currentLang === "fr" ? "Copié ✅" : "Copied ✅";
  const warnMsg = currentLang === "fr" ? "Copie manuelle : " : "Manual copy: ";

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
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

const qrBtn = $("#qrBtn");
const qrImg = $("#qrImg");

if (qrBtn && qrImg) {
  qrBtn.addEventListener("click", () => {
    const url = window.location.href;

    if (!url.startsWith("http")) {
      if (pageNotice) {
        pageNotice.className = "notice warn";
        pageNotice.textContent =
          currentLang === "fr"
            ? "Publie d’abord le site (GitHub Pages), puis génère le QR code."
            : "Publish the website first (GitHub Pages), then generate the QR code.";
      }
      return;
    }

    const encoded = encodeURIComponent(url);
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encoded}`;
    qrImg.style.display = "block";

    if (pageNotice) {
      pageNotice.className = "notice ok";
      pageNotice.textContent = currentLang === "fr" ? "QR code généré ✅" : "QR generated ✅";
    }
  });
}
