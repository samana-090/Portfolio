const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function setYear() {
  const el = $("#year");
  if (el) el.textContent = String(new Date().getFullYear());
}

function setupMobileNav() {
  const toggle = $(".nav-toggle");
  const nav = $("#site-nav");
  if (!toggle || !nav) return;

  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  };

  toggle.addEventListener("click", () => {
    const open = nav.classList.contains("is-open");
    setOpen(!open);
  });

  $$(".nav-link", nav).forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
}

function setupActiveNav() {
  const links = $$(".nav-link");
  const map = new Map();
  links.forEach((a) => {
    const id = a.getAttribute("href")?.slice(1);
    if (!id) return;
    const section = document.getElementById(id);
    if (section) map.set(section, a);
  });
  if (map.size === 0) return;

  const activate = (section) => {
    links.forEach((l) => l.classList.remove("is-active"));
    const link = map.get(section);
    if (link) link.classList.add("is-active");
  };

  const obs = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target) activate(visible.target);
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.2, 0.35, 0.5, 0.7] },
  );

  map.forEach((_, section) => obs.observe(section));
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

function setupCopyEmail() {
  const btn = $("[data-copy-email]");
  const status = $("[data-copy-status]");
  if (!btn) return;

  const email = "k.v.samana14@gmail.com";

  btn.addEventListener("click", async () => {
    const ok = await copyToClipboard(email);
    if (status) status.textContent = ok ? "Email copied." : "Copy failed. You can copy it manually.";
    if (ok) btn.blur();
    window.setTimeout(() => {
      if (status) status.textContent = "";
    }, 2500);
  });
}

setYear();
setupMobileNav();
setupActiveNav();
setupCopyEmail();

