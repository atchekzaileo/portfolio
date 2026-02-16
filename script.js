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
    "projects.subtitle":
      "Quelques projets représentatifs (cours + perso). J’ajoute progressivement des projets en gardant seulement ceux que je peux expliquer clairement.",
    "projects.p1":
      "Site simple et bilingue pour regrouper mes projets, compétences et coordonnées. Pensé mobile-first, léger (sans framework) pour qu’il charge vite et reste lisible.",
    "projects.portscanner.title": "Port Scanner TCP (Python)",
    "projects.portscanner.desc":
      "Projet personnel pour comprendre un scan de ports TCP : multithread, timeouts, lecture de bannières (HTTP/SSH), sauvegarde des scans et petite visualisation web.",
    "projects.p3title": "NetCheck – Diagnostic réseau (Python)",
    "projects.p3":
      "Outil de diagnostic réseau développé après le CCNA 1 pour vérifier rapidement la connectivité (ping), quelques ports, DNS, HTTP/HTTPS et expiration des certificats TLS.",
    "projects.netprobe.title": "NetProbe – Inspecteur Réseau & Services (CLI)",
    "projects.netprobe.desc":
      "Outil CLI pédagogique pour diagnostiquer rapidement un hôte: résolution DNS, latence, ports TCP, vérifications HTTP/HTTPS et inspection de certificats TLS.",
    "projects.maxflowink.title": "Encrage d’image par flot maximum (C++)",
    "projects.maxflowink.desc":
      "TP LIFAPC : binarisation d’une image PGM en modélisant l’image en graphe, puis en appliquant flot maximum / coupe minimale (Edmonds–Karp + parcours résiduel).",
    
    "projects.brontkd.title": "Site du club Bron Taekwondo",
    "projects.brontkd.desc":
      "Site vitrine pour le club Bron Taekwondo : présentation des cours, planning, informations pratiques et mise en avant des événements du club.",
    "projects.site": "Voir le site ↗",
"projects.github": "Code / GitHub ↗",
    "projects.details": "Détails",

    "skills.title": "Compétences",
    "skills.subtitle":
      "Je préfère rester factuel : ce qui est listé correspond à ce que j’ai déjà pratiqué (TP + projets).",
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
    "about.p2":
      "Ce portfolio n’a pas pour but de tout lister, mais de mettre en avant quelques projets que je peux expliquer techniquement (choix, limites, pistes d’amélioration).",
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
    "modals.netprobe.title": "NetProbe – Inspecteur Réseau & Services",
    "modals.netprobe.p1":
      "Outil en ligne de commande pour explorer rapidement l’accessibilité et l’état de services réseau à partir d’un nom d’hôte ou d’une adresse IP.",
    "modals.netprobe.p2":
      "Couvre les bases réseau de bout en bout: DNS, latence (ping avec fallback TCP), ports TCP courants, détection de services, tests HTTP/HTTPS et inspection TLS (issuer, expiration).",

    "modals.maxflowink.p1":
      "TP LIFAPC : transformer une image PGM en graphe (un sommet par pixel), ajouter des arêtes vers une source (noir) et un puits (blanc) avec des capacités basées sur l’intensité.",
    "modals.maxflowink.p2":
      "Application d’un algorithme de flot maximum (Edmonds–Karp) pour trouver une coupe minimale qui sépare les pixels en deux classes (noir/blanc).",
    "modals.maxflowink.p3":
      "Flot maximum avec Edmonds–Karp (BFS, graphe résiduel). Après convergence, un parcours depuis la source donne la coupure (noir/blanc).",
    "modals.brontkd.title": "Site Bron Taekwondo",
    "modals.brontkd.p1":
      "Site vitrine responsive pour le club Bron Taekwondo : présentation du club, des cours (enfants, ados, adultes), informations pratiques (tarifs, lieu, horaires) et mise en avant des événements (stages, compétitions, passages de grade).",
    "modals.brontkd.p2":
      "Objectif : offrir un point d’entrée clair pour les nouveaux adhérents, tout en restant simple à maintenir pour le club (mise à jour des infos et actualités sans complexité technique).",
  },

  en: {
    "header.tagline": "BSc CS — Systems, Networks & Cybersecurity (Lyon 1 — La Doua)",
    "header.cta": "Contact me",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.about": "About",
    "nav.contact": "Contact",

    "hero.kicker": "Portfolio",
    "hero.title": "Internship / Apprenticeship — Systems, Networks & Cybersecurity",
    "hero.subtitle":
      "I’m a 3rd-year Computer Science student at Lyon 1 University (La Doua), focusing on systems, networks and cybersecurity. This page showcases course and personal projects.",
    "hero.btnProjects": "View my projects",
    "hero.btnContact": "Discuss an opportunity",
    "hero.card.title": "Profile",
    "hero.card.li1": "3rd year CS (UCBL — La Doua)",
    "hero.card.li2": "Solid networking basics (CCNA 1 + labs)",
    "hero.card.li3": "Linux for daily use + scripting",
    "hero.card.li4": "Goal: Master’s in Systems, Networks & Security",
    "hero.card.contact": "Open for an internship / apprenticeship",

    "projects.title": "Projects",
    "projects.subtitle":
      "A few representative projects (coursework + personal). I’m gradually adding more, keeping only those I can explain clearly.",
    "projects.p1":
      "Simple, bilingual website to present my projects, skills and contact details. Mobile-first and lightweight (no framework) so it loads fast and stays readable.",
    "projects.portscanner.title": "TCP Port Scanner (Python)",
    "projects.portscanner.desc":
      "Personal project to understand TCP port scanning: multithreading, timeouts, banner grabbing (HTTP/SSH), scan history and a small web dashboard.",
    "projects.p3title": "NetCheck – Network diagnostics (Python)",
    "projects.p3":
      "Network diagnostic tool built after CCNA 1, to quickly check connectivity (ping), a few ports, DNS, HTTP/HTTPS and TLS certificate expiry.",
    "projects.netprobe.title": "NetProbe – Network & Service Inspector (CLI)",
    "projects.netprobe.desc":
      "Educational CLI tool to quickly diagnose a host: DNS resolution, latency checks, TCP ports, HTTP/HTTPS checks and TLS certificate inspection.",
    "projects.maxflowink.title": "Image inking via max flow (C++)",
    "projects.maxflowink.desc":
      "LIFAPC lab: binarizing a PGM image by modeling the pixels and neighbourhood constraints as a graph, then applying max-flow/min-cut (Edmonds–Karp + residual graph).",
    "projects.brontkd.title": "Bron Taekwondo club website",
    "projects.brontkd.desc":
      "Showcase website for the Bron Taekwondo club: classes overview, schedule, practical information and highlighted club events.",
    "projects.site": "Visit website ↗",
"projects.github": "Code / GitHub ↗",
    "projects.details": "Details",

    "skills.title": "Skills",
    "skills.subtitle":
      "I try to stay factual: what’s listed here is what I’ve already practiced (labs + projects).",
    "skills.net.title": "Networking",
    "skills.net.li1": "IP addressing, subnets",
    "skills.net.li2": "Static routing, VLANs",
    "skills.net.li3": "OSI model, TCP/IP",
    "skills.net.li4": "DHCP, DNS, NAT (basics)",
    "skills.net.li5": "CCNA 1 labs + Cisco equipment",

    "skills.sys.title": "Systems",
    "skills.sys.li1": "Linux (Ubuntu/Debian) for daily use",
    "skills.sys.li2": "Shell, simple Bash scripts",
    "skills.sys.li3": "Basic network services",
    "skills.sys.li4": "Basic Windows administration",
    "skills.sys.li5": "Git/GitHub usage",

    "skills.sec.title": "Cybersecurity",
    "skills.sec.li1": "Awareness of security best practices",
    "skills.sec.li2": "First concepts (firewall, DMZ)",
    "skills.sec.li3": "Port / service scanning",
    "skills.sec.li4": "Security labs in 3rd year (ongoing)",

    "skills.dev.title": "Development",
    "skills.dev.li1": "Python (scripts, network tools)",
    "skills.dev.li2": "C/C++ (algo / graph labs)",
    "skills.dev.li3": "HTML/CSS/JS (this site)",
    "skills.dev.li4": "SQL (basics, DB labs)",

    "about.title": "About",
    "about.p1":
      "My name is Leo Atchekzai. I’m a 3rd-year CS student at Lyon 1 University (La Doua), majoring in Systems, Networks & Cybersecurity. I’m particularly interested in infrastructure (networks, servers) and how to secure it.",
    "about.p2":
      "This portfolio is not meant to list everything, but to highlight a few projects I can explain technically (choices, limitations, improvement ideas).",
    "about.p3":
      "I’m looking for an internship / apprenticeship where I can grow on the following topics: system administration, networking, security, automation (scripts, internal tools).",
    "about.card.title": "What I’m looking for",
    "about.card.li1": "Technical guidance and a supportive team",
    "about.card.li2": "Real-world projects (even small ones)",
    "about.card.li3": "An environment where I can ask questions",
    "about.card.li4": "Opportunities to document what I do",

    "contact.title": "Contact",
    "contact.p1":
      "If my profile matches what you are looking for, I’d be happy to talk.",
    "contact.p2":
      "Feel free to contact me for an internship, an apprenticeship or simply to discuss your systems, networking and cybersecurity needs.",
    "contact.card.title": "Details",
    "contact.cv": "Resume",
    "contact.cvLink": "Download resume ↗",

    "footer.built": "Built with HTML/CSS/JS — GitHub Pages",

    "modals.m1":
      "Simple and readable portfolio: one page, a few sections, and direct links to GitHub/resume.",
    "modals.portscanner.title": "TCP Port Scanner – Python",
    "modals.portscanner.p1":
      "Personal project to understand TCP scanning: sockets, timeouts, threads, and banner grabbing (HTTP/SSH).",
    "modals.portscanner.p2":
      "Added scan history (SQLite), basic service detection, and a tiny Flask dashboard to browse results.",
    "modals.portscanner.legal":
      "Educational project — scans are run only on local or explicitly authorized environments.",

    "modals.m3title": "NetCheck – Network diagnostics",
    "modals.m3":
      "Network diagnostic tool built after CCNA 1, focused on quick checks: ping, ports, DNS, HTTP/HTTPS, TLS certificates.",
    "modals.netprobe.title": "NetProbe – Network & Service Inspector",
    "modals.netprobe.p1":
      "Command-line tool to quickly inspect host accessibility and network service status from a hostname or an IP address.",
    "modals.netprobe.p2":
      "Covers networking fundamentals end to end: DNS, latency (ping with TCP fallback), common TCP ports, service detection, HTTP/HTTPS checks, and TLS inspection (issuer, expiration).",

    "modals.maxflowink.p1":
      "LIFAPC lab: turn a PGM image into a graph (one node per pixel), add edges to a source (black) and a sink (white) with capacities derived from intensity.",
    "modals.maxflowink.p2":
      "Apply a max-flow algorithm (Edmonds–Karp) to find a minimum cut that splits pixels into two classes (black/white).",
    "modals.maxflowink.p3":
      "Max flow with Edmonds–Karp (BFS, residual graph). After convergence, a traversal from the source gives the cut (black/white).",
    "modals.brontkd.title": "Bron Taekwondo website",
    "modals.brontkd.p1":
      "Responsive showcase website for the Bron Taekwondo club: club presentation, classes (kids, teens, adults), practical information (fees, location, timetable) and events (seminars, competitions, belt tests).",
    "modals.brontkd.p2":
      "Goal: provide a clear entry point for new members while keeping updates simple for the club (texts and news can be updated without technical complexity).",
  }
};

let currentLang = "fr";

function applyTranslations(lang) {
  const dictLang = dict[lang];
  if (!dictLang) return;

  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dictLang[key];
    if (!value) return;
    el.textContent = value;
  });
}

const langToggle = $("#langToggle");
if (langToggle) {
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "fr" ? "en" : "fr";
    applyTranslations(currentLang);
  });
}

// Apply default language on load
applyTranslations(currentLang);

// Reveal on scroll
const revealEls = $$(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("reveal-visible"));
}

// Modals
const modalOpenButtons = $$("[data-modal-open]");
const modalCloseButtons = $$("[data-modal-close]");

modalOpenButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-modal-open");
    const dialog = document.getElementById(id);
    if (dialog && typeof dialog.showModal === "function") {
      dialog.showModal();
    }
  });
});

modalCloseButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const dialog = btn.closest("dialog");
    if (dialog) dialog.close();
  });
});

$$("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (e) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;

    if (!isInDialog) dialog.close();
  });
});
