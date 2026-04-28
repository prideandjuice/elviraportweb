// CONFIG sudah ada di config.js — edit di sana!

// ── Dark mode ─────────────────────────────────────────────
const darkToggle = document.getElementById("dark-toggle");
const darkIcon = document.getElementById("dark-icon");
const html = document.documentElement;

function applyDark(on) {
  html.classList.toggle("dark", on);
  document.body.classList.toggle("dark", on);
  darkIcon.className = on ? "fas fa-sun" : "fas fa-moon";
  localStorage.setItem("dark", on ? "1" : "0");
}
applyDark(localStorage.getItem("dark") === "1");
darkToggle.addEventListener("click", () =>
  applyDark(!html.classList.contains("dark")),
);

// ── Static text ───────────────────────────────────────────
document.getElementById("hero-name").textContent = CONFIG.name;
document.getElementById("nav-logo").src = CONFIG.logo || "";
document.getElementById("hero-bio").textContent = CONFIG.bio;
document.getElementById("hero-photo").src = CONFIG.photo;
document.getElementById("footer-name").textContent = CONFIG.name;
document.getElementById("footer-year").textContent = new Date().getFullYear();
document.getElementById("about-text").textContent = CONFIG.biod;

// ── Typing effect ─────────────────────────────────────────
const typedEl = document.getElementById("typed-role");
let roleIdx = 0,
  charIdx = 0,
  deleting = false;
function typeRole() {
  const current = CONFIG.roles[roleIdx];
  typedEl.textContent = current.substring(0, deleting ? --charIdx : ++charIdx);
  if (!deleting && charIdx === current.length) {
    deleting = true;
    setTimeout(typeRole, 1500);
    return;
  }
  if (deleting && charIdx === 0) {
    deleting = false;
    roleIdx = (roleIdx + 1) % CONFIG.roles.length;
  }
  setTimeout(typeRole, deleting ? 60 : 100);
}
typeRole();

// ── Social links ──────────────────────────────────────────
const socialContainer = document.getElementById("social-links");
CONFIG.socials.forEach((s) => {
  const a = document.createElement("a");
  a.href = s.url;
  a.target = "_blank";
  a.title = s.label;
  a.className =
    "w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow flex items-center justify-center text-blue-400 hover:text-pink-400 hover:shadow-md transition text-lg";
  a.innerHTML = `<i class="${s.icon}"></i>`;
  socialContainer.appendChild(a);
});

// ── Live clock Medan (WIB UTC+7) ─────────────────────────
function updateClock() {
  const now = new Date().toLocaleTimeString("id-ID", {
    timeZone: "Asia/Jakarta",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  document.getElementById("live-clock").textContent = now;
}
updateClock();
setInterval(updateClock, 1000);

// ── About stats ───────────────────────────────────────────
const statsGrid = document.getElementById("about-stats");
CONFIG.stats.forEach((s) => {
  statsGrid.innerHTML += `
    <div class="bg-gradient-to-br from-blue-50 to-pink-50 dark:from-blue-900/20 dark:to-pink-900/20 rounded-xl p-4 text-center">
      <div class="text-2xl font-bold gradient-text">${s.value}</div>
      <div class="text-sm text-gray-500 dark:text-gray-400 mt-1">${s.label}</div>
    </div>`;
});

// ── Projects ──────────────────────────────────────────────
const grid = document.getElementById("projects-grid");
function renderProjects(filter = "all") {
  grid.innerHTML = "";
  CONFIG.projects
    .filter((p) => filter === "all" || p.category === filter)
    .forEach((p, i) => {
      const isIT = p.category === "it";
      const tagClass = isIT ? "tag-it" : "tag-nonit";
      const borderColor = isIT
        ? "border-blue-200 dark:border-blue-800"
        : "border-pink-200 dark:border-pink-800";
      const titleColor = isIT ? "text-blue-500" : "text-pink-500";
      // Cari index asli di CONFIG.projects
      const realIdx = CONFIG.projects.indexOf(p);
      const card = document.createElement("div");
      card.className = `bg-white dark:bg-gray-800 rounded-2xl p-6 shadow card-hover border ${borderColor} flex flex-col gap-3`;
      card.innerHTML = `
        <div class="flex items-start justify-between">
          <h3 class="font-bold ${titleColor} text-lg">${p.title}</h3>
          <span class="tag ${tagClass}">${isIT ? "IT" : "Non-IT"}</span>
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400 flex-1">${p.desc}</p>
        <div class="flex flex-wrap gap-1">${p.tags.map((t) => `<span class="tag ${tagClass}">${t}</span>`).join("")}</div>
        <a href="project.html?id=${realIdx}"
           class="text-sm font-semibold ${isIT ? "text-blue-400 hover:text-pink-400" : "text-pink-400 hover:text-blue-400"} transition mt-auto">
          View Project →
        </a>`;
      grid.appendChild(card);
    });
}
renderProjects();

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

// ── Skills ────────────────────────────────────────────────
const skillsGrid = document.getElementById("skills-grid");
CONFIG.skills.forEach((s) => {
  skillsGrid.innerHTML += `
    <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow card-hover">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-100 to-pink-100 dark:from-blue-900/40 dark:to-pink-900/40 flex items-center justify-center text-blue-500">
          <i class="${s.icon}"></i>
        </div>
        <span class="font-semibold text-gray-700 dark:text-gray-200">${s.name}</span>
        <span class="ml-auto text-sm font-bold gradient-text">${s.level}%</span>
      </div>
      <div class="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
        <div class="skill-bar-fill" data-level="${s.level}"></div>
      </div>
    </div>`;
});

// ── Experience / Timeline ─────────────────────────────────
const timeline = document.getElementById("timeline");
timeline.innerHTML = `<div class="timeline-line"></div>`;
CONFIG.experience.forEach((e, i) => {
  timeline.innerHTML += `
    <div class="flex gap-6 mb-10 pl-10 relative fade-in" style="transition-delay:${i * 0.15}s">
      <div class="timeline-dot absolute left-2.5 top-1.5"></div>
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow p-5 flex-1 card-hover">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-1">
          <h3 class="font-bold text-gray-800 dark:text-white text-lg">${e.role}</h3>
          <span class="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-500">${e.period}</span>
        </div>
        <p class="text-sm font-medium text-pink-400 mb-2">${e.company}</p>
        <p class="text-sm text-gray-500 dark:text-gray-400">${e.desc}</p>
      </div>
    </div>`;
});

// ── Scroll animations + skill bars ───────────────────────
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.querySelectorAll(".skill-bar-fill").forEach((bar) => {
          bar.style.width = bar.dataset.level + "%";
        });
      }
    });
  },
  { threshold: 0.15 },
);
document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

// ── Navbar active link on scroll ─────────────────────────
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach((link) =>
    link.classList.toggle("active-link", link.dataset.section === current),
  );
});

// ── Mobile menu ───────────────────────────────────────────
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle(
    "open",
    mobileMenu.classList.toggle("hidden") === false,
  );
});
document.querySelectorAll(".mobile-nav").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    hamburger.classList.remove("open");
  });
});

// ── Contact links ─────────────────────────────────────────
const contactLinks = document.getElementById("contact-links");
CONFIG.socials.forEach((s) => {
  contactLinks.innerHTML += `
    <a href="${s.url}" target="_blank"
      class="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 card-hover transition">
      <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-100 to-pink-100 dark:from-blue-900/40 dark:to-pink-900/40 flex items-center justify-center text-blue-400 text-lg">
        <i class="${s.icon}"></i>
      </div>
      <span class="font-medium text-gray-700 dark:text-gray-200">${s.label}</span>
      <i class="fas fa-arrow-right ml-auto text-gray-300 dark:text-gray-600"></i>
    </a>`;
});

// ── Trailing dots cursor ──────────────────────────────────
const TRAIL_COUNT = 8;
const dots = [];
const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const positions = Array.from({ length: TRAIL_COUNT }, () => ({
  x: mouse.x,
  y: mouse.y,
}));
const colors = [
  "#60a5fa",
  "#7cb9fb",
  "#93c5fd",
  "#a5cffd",
  "#c084fc",
  "#e879f9",
  "#f472b6",
  "#fb7185",
];
const container = document.getElementById("trail-container");

for (let i = 0; i < TRAIL_COUNT; i++) {
  const d = document.createElement("div");
  d.className = "trail-dot";
  const size = 10 - i * 0.8;
  d.style.cssText = `width:${size}px;height:${size}px;background:${colors[i]};opacity:${1 - i * 0.1}`;
  container.appendChild(d);
  dots.push(d);
}

document.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function animateTrail() {
  positions[0].x += (mouse.x - positions[0].x) * 0.35;
  positions[0].y += (mouse.y - positions[0].y) * 0.35;
  for (let i = 1; i < TRAIL_COUNT; i++) {
    positions[i].x += (positions[i - 1].x - positions[i].x) * 0.45;
    positions[i].y += (positions[i - 1].y - positions[i].y) * 0.45;
  }
  dots.forEach((d, i) => {
    d.style.left = positions[i].x + "px";
    d.style.top = positions[i].y + "px";
  });
  requestAnimationFrame(animateTrail);
}
animateTrail();

// ── Photo tilt effect ─────────────────────────────────────
const photoEl = document.getElementById("hero-photo");
photoEl.addEventListener("mousemove", (e) => {
  const rect = photoEl.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  photoEl.style.transform = `perspective(600px) rotateY(${x * 20}deg) rotateX(${-y * 20}deg) scale(1.05)`;
});
photoEl.addEventListener("mouseleave", () => {
  photoEl.style.transform =
    "perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)";
});

// ── Back to top ───────────────────────────────────────────
const backBtn = document.getElementById("back-to-top");
window.addEventListener("scroll", () =>
  backBtn.classList.toggle("show", window.scrollY > 400),
);
backBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" }),
);
