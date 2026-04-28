// CONFIG sudah ada di config.js — edit di sana!

// ── Trailing dots cursor ──────────────────────────────────
const TRAIL_COUNT = 8;
const dots = [];
const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const positions = Array.from({ length: TRAIL_COUNT }, () => ({ x: mouse.x, y: mouse.y }));
const colors = [
  "#60a5fa","#7cb9fb","#93c5fd","#a5cffd",
  "#c084fc","#e879f9","#f472b6","#fb7185"
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

document.addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });

function animateTrail() {
  positions[0].x += (mouse.x - positions[0].x) * 0.35;
  positions[0].y += (mouse.y - positions[0].y) * 0.35;
  for (let i = 1; i < TRAIL_COUNT; i++) {
    positions[i].x += (positions[i-1].x - positions[i].x) * 0.45;
    positions[i].y += (positions[i-1].y - positions[i].y) * 0.45;
  }
  dots.forEach((d, i) => {
    d.style.left = positions[i].x + "px";
    d.style.top  = positions[i].y + "px";
  });
  requestAnimationFrame(animateTrail);
}
animateTrail();
const html     = document.documentElement;
const darkIcon = document.getElementById("dark-icon");
function applyDark(on) {
  html.classList.toggle("dark", on);
  document.body.classList.toggle("dark", on);
  darkIcon.className = on ? "fas fa-sun" : "fas fa-moon";
  localStorage.setItem("dark", on ? "1" : "0");
}
applyDark(localStorage.getItem("dark") === "1");
document.getElementById("dark-toggle").addEventListener("click", () =>
  applyDark(!html.classList.contains("dark"))
);

// ── Footer ────────────────────────────────────────────────
document.getElementById("footer-name").textContent = CONFIG.name;
document.getElementById("footer-year").textContent = new Date().getFullYear();

// ── Ambil project dari URL ?id=N ─────────────────────────
const params = new URLSearchParams(window.location.search);
const idx    = parseInt(params.get("id") ?? "0");
const p      = CONFIG.projects[idx];

if (!p) {
  document.querySelector("main").innerHTML = `
    <div class="text-center py-32">
      <p class="text-2xl text-gray-400">Project tidak ditemukan.</p>
      <a href="index.html" class="mt-4 inline-block text-blue-400 hover:underline">← Kembali</a>
    </div>`;
} else {
  const isIT     = p.category === "it";
  const tagClass = isIT ? "tag-it" : "tag-nonit";

  // Title & page title
  document.title = `${p.title} — ${CONFIG.name}`;
  document.getElementById("project-title").textContent = p.title;

  // Cover image
  const cover = document.getElementById("project-cover");
  if (p.cover) {
    cover.innerHTML = `<img src="${p.cover}" alt="${p.title}" class="w-full h-full object-cover">`;
  } else {
    // Gradient placeholder berdasarkan kategori
    cover.className = cover.className.replace(
      "from-blue-100 to-pink-100 dark:from-blue-900/30 dark:to-pink-900/30",
      isIT
        ? "from-blue-200 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/30"
        : "from-pink-200 to-purple-100 dark:from-pink-900/50 dark:to-purple-900/30"
    );
    cover.innerHTML = `
      <div class="text-center">
        <i class="fas ${isIT ? "fa-code" : "fa-palette"} text-7xl ${isIT ? "text-blue-300" : "text-pink-300"} mb-3"></i>
        <p class="text-gray-400 font-medium">${p.title}</p>
      </div>`;
  }

  // Category badge
  document.getElementById("project-category-badge").className = `tag ${tagClass} mb-3 inline-block`;
  document.getElementById("project-category-badge").textContent = isIT ? "IT Project" : "Non-IT Project";

  // External link
  const linkEl = document.getElementById("project-link");
  if (p.link && p.link !== "#") {
    linkEl.href = p.link;
  } else {
    linkEl.classList.add("opacity-40", "pointer-events-none");
    linkEl.innerHTML = `<i class="fas fa-external-link-alt"></i> No Live Link`;
  }

  // Tags
  const tagsEl = document.getElementById("project-tags");
  p.tags.forEach(t => {
    tagsEl.innerHTML += `<span class="tag ${tagClass}">${t}</span>`;
  });

  // Meta info
  const meta = [
    { icon: "fas fa-calendar",   label: "Year",     value: p.year     || "—" },
    { icon: "fas fa-user",       label: "My Role",  value: p.role     || "—" },
    { icon: "fas fa-clock",      label: "Duration", value: p.duration || "—" },
    { icon: "fas fa-tag",        label: "Category", value: isIT ? "IT" : "Non-IT" },
  ];
  const metaEl = document.getElementById("project-meta");
  meta.forEach(m => {
    metaEl.innerHTML += `
      <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow text-center">
        <i class="${m.icon} text-blue-400 mb-2 text-lg"></i>
        <p class="text-xs text-gray-400 dark:text-gray-500 mb-1">${m.label}</p>
        <p class="font-semibold text-gray-700 dark:text-gray-200 text-sm">${m.value}</p>
      </div>`;
  });

  // Description
  document.getElementById("project-desc").textContent = p.desc;

  // Highlights
  const hlEl = document.getElementById("project-highlights");
  if (p.highlights && p.highlights.length) {
    p.highlights.forEach(h => {
      hlEl.innerHTML += `
        <li class="flex items-start gap-3 bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
          <span class="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-400 to-pink-400 flex items-center justify-center flex-shrink-0 mt-0.5">
            <i class="fas fa-check text-white text-xs"></i>
          </span>
          <span class="text-gray-600 dark:text-gray-300">${h}</span>
        </li>`;
    });
  } else {
    document.getElementById("section-highlights").classList.add("hidden");
  }

  // Gallery
  if (p.gallery && p.gallery.length) {
    document.getElementById("section-gallery").classList.remove("hidden");
    const galleryEl = document.getElementById("project-gallery");
    p.gallery.forEach(img => {
      galleryEl.innerHTML += `
        <div class="rounded-xl overflow-hidden shadow card-hover aspect-video bg-gray-100 dark:bg-gray-800">
          <img src="${img}" alt="Gallery" class="w-full h-full object-cover">
        </div>`;
    });
  }

  // Prev / Next navigation
  const prevEl = document.getElementById("prev-project");
  const nextEl = document.getElementById("next-project");
  if (idx > 0) {
    prevEl.href = `project.html?id=${idx - 1}`;
    prevEl.innerHTML = `<i class="fas fa-arrow-left"></i> ${CONFIG.projects[idx - 1].title}`;
  } else {
    prevEl.classList.add("invisible");
  }
  if (idx < CONFIG.projects.length - 1) {
    nextEl.href = `project.html?id=${idx + 1}`;
    nextEl.innerHTML = `${CONFIG.projects[idx + 1].title} <i class="fas fa-arrow-right"></i>`;
  } else {
    nextEl.classList.add("invisible");
  }
}
