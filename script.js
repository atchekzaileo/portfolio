// Helpers
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// Année dans le footer
const yearEl = $("#year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// Dictionnaire i18n
const dict = {
  fr: {
    "header.tagline": "L3 Informatique — Systèmes, Réseaux & Cybersécurité (Lyon 1 — La Doua)",
    "header.cta": "Me contacter",

    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.about": "À propos",
    "nav.contact": "Contact",

    "hero.kicker": "Portfolio",
    "hero.title": "Stage / Alternance — Systèmes, Réseaux & Cybersécurité",
    "hero.subtitle":
      "Étudiant en Licence 3 Informatique à Lyon 1 (La Doua), je me spécialise en systèmes, réseaux et cybersécurité. Cette page regroupe des projets réalisés en cours et en autonomie.",
    "hero.btnProjects": "Voir mes projets",
    "hero.btnContact": "Discuter d’une opportunité",

    "hero.card.title": "Profil",
    "hero.card.li1": "Licence 3 Informatique (UCBL — La Doua)",
    "hero.card.li2": "Bases réseaux solides (CCNA 1 + TP)",
    "hero.card.li3": "Linux au quotidien + scripting",
    "hero.card.li4": "Objectif : Master Systèmes, Réseaux & Sécurité",
    "hero.card.contact": "Disponible pour un stage / une alternance",

    "projects.title": "Projets",
    "projects.p1":
      "Site simple et bilingue pour regrouper mes projets, compétences et coordonnées. Pensé mobile-first, léger (sans framework) pour qu’il charge vite et reste lisible.",
    "projects.github": "Code / GitHub ↗",
    "projects.details": "Détails",

    "projects.portscanner.title": "Port Scanner TCP (Python)",
    "projects.portscanner.desc":
      "Projet personnel pour comprendre un scan de ports TCP : multithread, lecture de bannières (HTTP/SSH), sauvegarde des scans et petite visualisation web.",

    "projects.p3title": "NetCheck – Diagnostic réseau (Python)",
    "projects.p3":
      "Outil de diagnostic réseau développé après le CCNA 1 pour vérifier rapidement la connectivité (ping), les ports, DNS, HTTP/HTTPS et les certificats TLS.",

    "projects.maxflowink.title": "Encrage d’image par flot maximum (C++)",
    "projects.maxflowink.desc":
      "TP LIFAPC : binarisation d’une image PGM en modélisant les pixels et les contraintes de voisinage en graphe, puis en appliquant flot maximum / coupe minimale (Edmonds–Karp + parcours résiduel).",

    "projects.brontkd.title": "Site du club Bron Taekwondo",
    "projects.brontkd.desc":
      "Site vitrine pour le club Bron Taekwondo : présentation des cours, planning, informations pratiques et mise en avant des événements du club.",
    "projects.site": "Voir le site ↗",

    "skills.title": "Compétences",
    "skills.net.title": "Réseaux",
    "skills.net.li1": "Adressage IP, sous-réseaux",
    "skills.net.li2": "Routage statique, VLAN",
    "skills.net.li3": "Modèle OSI, TCP/IP",
    "skills.net.li4": "DHCP, DNS, NAT (notions)",
    "skills.net.li5": "TP CCNA 1 + labo Cisco",

    "skills.sys.title": "Systèmes",
    "skills.sys.li1": "Linux (Ubuntu/Debian) au quotidien",
    "skills.sys.li2": "Shell, scripts Bash simples",
    "skills.sys.li3": "Services réseau de base",
    "skills.sys.li4": "Notions d’administration Windows",
    "skills.sys.li5": "Utilisation Git/GitHub",

    "skills.sec.title": "Cybersécurité",
    "skills.sec.li1": "Sensibilisation aux bonnes pratiques",
    "skills.sec.li2": "Premières notions (pare-feu, DMZ)",
    "skills.sec.li3": "Scan de ports, services",
    "skills.sec.li4": "TP sécurité en L3 (en cours)",

    "skills.dev.title": "Développement",
    "skills.dev.li1": "Python (scripts, outils réseau)",
    "skills.dev.li2": "C/C++ (TP algo, graphes)",
    "skills.dev.li3": "HTML/CSS/JS (ce site)",
    "skills.dev.li4": "SQL (notions, TP BDD)",

    "about.title": "À propos",
    "about.p1":
      "Je m’appelle Leo Atchekzai, étudiant en L3 Informatique à l’Université Lyon 1 (La Doua), parcours Systèmes, Réseaux & Cybersécurité. Je m’intéresse surtout à l’infrastructure (réseaux, serveurs) et à la manière de la sécuriser.",
    "about.p3":
      "Je cherche un stage / une alternance où je peux progresser sur les sujets suivants : administration système, réseaux, sécurité, automatisation (scripts, outils internes).",
    "about.card.title": "Ce que je recherche",
    "about.card.li1": "Encadrement technique et bienveillance",
    "about.card.li2": "Projets concrets (même modestes)",
    "about.card.li3": "Environnement où je peux poser des questions",
    "about.card.li4": "Possibilité de documenter ce que je fais",

    "contact.title": "Contact",
    "contact.p1":
      "Si mon profil correspond à ce que vous recherchez, je serais ravi d’échanger.",
    "contact.p2":
      "N’hésitez pas à me contacter pour un stage, une alternance ou simplement discuter de vos besoins en systèmes, réseaux et cybersécurité.",
    "contact.card.title": "Coordonnées",
    "contact.cv": "CV",
    "contact.cvLink": "Télécharger le CV ↗",

    "footer.built": "Fait en HTML/CSS/JS — GitHub Pages",

    "modals.m1":
      "Portfolio simple et lisible : une page, quelques sections, et des liens directs vers GitHub/CV.",

    "modals.portscanner.title": "Port Scanner TCP – Python",
    "modals.portscanner.p1":
      "Projet personnel pour comprendre le scan TCP : sockets, timeouts, threads, et lecture de bannières (HTTP/SSH).",
    "modals.portscanner.p2":
      "Ajout de l’historique des scans (SQLite), d’une détection basique de services, et d’un mini-dashboard Flask pour parcourir les résultats.",
    "modals.portscanner.legal":
      "Projet pédagogique — scans réalisés uniquement sur des environnements locaux ou explicitement autorisés.",

    "modals.m3title": "NetCheck – Diagnostic réseau",
    "modals.m3":
      "Outil de diagnostic réseau développé après le CCNA 1, orienté supervision rapide : ping, ports, DNS, HTTP/HTTPS, certificats TLS.",

    "modals.maxflowink.p1":
      "TP LIFAPC : transformer une image en graphe (un sommet par pixel), ajouter des arêtes vers une source (noir) et un puits (blanc) avec des capacités basées sur l’intensité.",
    "modals.maxflowink.p2":
      "Application d’un algorithme de flot maximum (Edmonds–Karp) pour trouver une coupe minimale qui sépare les pixels en deux classes (noir/blanc).",
    "modals.maxflowink.p3":
      "Flot maximum avec Edmonds–Karp (BFS, graphe résiduel). Après convergence, un parcours depuis la source donne la coupure (noir/blanc).",

    "modals.brontkd.title": "Site Bron Taekwondo",
    "modals.brontkd.p1":
      "Site vitrine responsive pour le club Bron Taekwondo : présentation du club, des cours (enfants, ados, adultes), informations pratiques (tarifs, lieu, horaires) et mise en avant des événements (stages, compétitions, passages de grade).",
    "modals.brontkd.p2":
      "Objectif : offrir un point d’entrée clair pour les nouveaux adhérents, tout en restant simple à maintenir pour le club (mise à jour des infos et actualités sans complexité technique)."
  },

  en: {
    "header.tagline": "BSc Computer Science — Systems, Networks & Cybersecurity (Lyon 1 — La Doua)",
    "header.cta": "Contact me",

    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.about": "About",
    "nav.contact": "Contact",

    "hero.kicker": "Portfolio",
    "hero.title": "Internship / Apprenticeship — Systems, Networks & Cybersecurity",
    "hero.subtitle":
      "Third-year Computer Science student at Lyon 1 (La Doua), focusing on systems, networks and cybersecurity. This page gathers projects from coursework and personal practice.",
    "hero.btnProjects": "View my projects",
    "hero.btnContact": "Discuss an opportunity",

    "hero.card.title": "Profile",
    "hero.card.li1": "3rd year BSc Computer Science (Lyon 1 — La Doua)",
    "hero.card.li2": "Solid networking foundations (CCNA 1 + labs)",
    "hero.card.li3": "Daily Linux usage + scripting",
    "hero.card.li4": "Goal: MSc Systems, Networks & Security",
    "hero.card.contact": "Available for an internship / apprenticeship",

    "projects.title": "Projects",
    "projects.p1":
      "Simple bilingual website to showcase my projects, skills and contact details. Designed mobile-first, lightweight (no framework) so it loads fast and stays readable.",
    "projects.github": "Code / GitHub ↗",
    "projects.details": "Details",

    "projects.portscanner.title": "TCP Port Scanner (Python)",
    "projects.portscanner.desc":
      "Personal project to understand TCP port scanning: multithreading, banner grabbing (HTTP/SSH), scan history and a small web UI.",

    "projects.p3title": "NetCheck – Network diagnostics (Python)",
    "projects.p3":
      "Network diagnostic tool developed after CCNA 1 to quickly check connectivity (ping), ports, DNS, HTTP/HTTPS and TLS certificates.",

    "projects.maxflowink.title": "Image inking via max-flow (C++)",
    "projects.maxflowink.desc":
      "LIFAPC lab: binarizing a PGM image by modeling pixels and neighborhood constraints as a graph, then applying max-flow / min-cut (Edmonds–Karp + residual traversal).",

    "projects.brontkd.title": "Bron Taekwondo club website",
    "projects.brontkd.desc":
      "Showcase website for the Bron Taekwondo club: classes, timetable, practical information and highlighted club events.",
    "projects.site": "Open website ↗",

    "skills.title": "Skills",
    "skills.net.title": "Networking",
    "skills.net.li1": "IP addressing, subnetting",
    "skills.net.li2": "Static routing, VLAN",
    "skills.net.li3": "OSI model, TCP/IP",
    "skills.net.li4": "DHCP, DNS, NAT (basics)",
    "skills.net.li5": "CCNA 1 labs + Cisco lab",

    "skills.sys.title": "Systems",
    "skills.sys.li1": "Linux (Ubuntu/Debian) daily use",
    "skills.sys.li2": "Shell and basic Bash scripting",
    "skills.sys.li3": "Basic network services",
    "skills.sys.li4": "Intro to Windows administration",
    "skills.sys.li5": "Git/GitHub usage",

    "skills.sec.title": "Cybersecurity",
    "skills.sec.li1": "Awareness of best practices",
    "skills.sec.li2": "First concepts (firewall, DMZ)",
    "skills.sec.li3": "Port & service scanning",
    "skills.sec.li4": "Security labs in 3rd year (in progress)",

    "skills.dev.title": "Development",
    "skills.dev.li1": "Python (scripts, network tools)",
    "skills.dev.li2": "C/C++ (algorithms, graphs)",
    "skills.dev.li3": "HTML/CSS/JS (this website)",
    "skills.dev.li4": "SQL (basics, DB labs)",

    "about.title": "About",
    "about.p1":
      "I’m Leo Atchekzai, a 3rd-year Computer Science student at Lyon 1 (La Doua), Systems, Networks & Cybersecurity track. I’m mostly interested in infrastructure (networks, servers) and how to secure it.",
    "about.p3":
      "I’m looking for an internship / apprenticeship where I can progress on: system administration, networking, security and automation (internal scripts and tools).",
    "about.card.title": "What I’m looking for",
    "about.card.li1": "Technical guidance and a supportive environment",
    "about.card.li2": "Concrete projects (even small ones)",
    "about.card.li3": "A place where I can ask questions",
    "about.card.li4": "Opportunities to document what I do",

    "contact.title": "Contact",
    "contact.p1":
      "If my profile matches your needs, I’d be happy to talk.",
    "contact.p2":
      "Feel free to contact me for an internship, an apprenticeship or simply to discuss your systems, networks or cybersecurity needs.",
    "contact.card.title": "Details",
    "contact.cv": "Resume",
    "contact.cvLink": "Download resume ↗",

    "footer.built": "Built with HTML/CSS/JS — GitHub Pages",

    "modals.m1":
      "Simple and readable one-page portfolio with direct links to GitHub and resume.",

    "modals.portscanner.title": "TCP Port Scanner – Python",
    "modals.portscanner.p1":
      "Personal project to understand TCP scanning: sockets, timeouts, threads and banner grabbing (HTTP/SSH).",
    "modals.portscanner.p2":
      "Added scan history (SQLite), basic service detection and a small Flask dashboard to browse results.",
    "modals.portscanner.legal":
      "Educational project — scans run only on local or explicitly authorized environments.",

    "modals.m3title": "NetCheck – Network diagnostics",
    "modals.m3":
      "Network diagnostic tool developed after CCNA 1, focused on quick checks: ping, ports, DNS, HTTP/HTTPS, TLS certificates.",

    "modals.maxflowink.p1":
      "LIFAPC lab: turn the image into a graph (one vertex per pixel), add edges to a source (black) and a sink (white) with capacities based on intensity.",
    "modals.maxflowink.p2":
      "Apply a max-flow algorithm (Edmonds–Karp) to find a minimum cut that separates pixels into two classes (black/white).",
    "modals.maxflowink.p3":
      "Max-flow with Edmonds–Karp (BFS, residual graph). After convergence, reachability from the source gives the cut (black/white).",

    "modals.brontkd.title": "Bron Taekwondo website",
    "modals.brontkd.p1":
      "Responsive showcase website for the Bron Taekwondo club: presentation, classes (kids, teens, adults), practical information (fees, location, timetable) and events (seminars, competitions, belt tests).",
    "modals.brontkd.p2":
      "Goal: provide a clear entry point for new members while keeping content updates simple for the club (text and news changes without technical complexity)."
  }
};

// i18n helpers
function pickInitialLang() {
  const saved = localStorage.getItem("lang");
  if (saved === "fr" || saved === "en") return saved;

  const nav = (navigator.language || "").toLowerCase();
  return nav.startsWith("fr") ? "fr" : "en";
}

function translate(lang, key) {
  const pack = dict[lang] || dict.fr;
  return pack[key] ?? dict.fr[key] ?? null;
}

function applyI18n(lang) {
  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const value = translate(lang, key);
    if (typeof value === "string") {
      el.textContent = value;
    }
  });
}

function setLang(lang) {
  const safe = lang === "fr" || lang === "en" ? lang : "fr";
  document.documentElement.lang = safe;
  localStorage.setItem("lang", safe);

  const toggle = $("#langToggle");
  if (toggle) {
    toggle.textContent = safe === "fr" ? "FR / EN" : "EN / FR";
  }

  applyI18n(safe);
  return safe;
}

let currentLang = setLang(pickInitialLang());

const langToggle = $("#langToggle");
if (langToggle) {
  langToggle.addEventListener("click", () => {
    currentLang = setLang(currentLang === "fr" ? "en" : "fr");
  });
}

// Reveal on scroll
const revealEls = $$(".reveal");
if (revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  revealEls.forEach((el) => observer.observe(el));
}

// Modals
function openModal(id) {
  const dlg = document.getElementById(id);
  if (!dlg || typeof dlg.showModal !== "function") return;
  dlg.__returnFocus = document.activeElement;
  dlg.showModal();

  const closeBtn = dlg.querySelector("[data-modal-close]");
  if (closeBtn) closeBtn.focus();
}

function closeModal(dlg) {
  if (!dlg) return;
  dlg.close();
  const prev = dlg.__returnFocus;
  if (prev && typeof prev.focus === "function") prev.focus();
}

// Boutons d'ouverture
$$("[data-modal-open]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-modal-open");
    if (id) openModal(id);
  });
});

// Boutons de fermeture
$$("[data-modal-close]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const dlg = btn.closest("dialog");
    closeModal(dlg);
  });
});

// Fermer en cliquant sur l'arrière-plan + ESC
$$("dialog.modal, dialog").forEach((dlg) => {
  dlg.addEventListener("click", (e) => {
    if (e.target === dlg) {
      closeModal(dlg);
    }
  });

  dlg.addEventListener("cancel", (e) => {
    e.preventDefault();
    closeModal(dlg);
  });
});
