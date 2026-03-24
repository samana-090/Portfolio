const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const EMAILJS_PUBLIC_KEY = "PASTE_YOUR_PUBLIC_KEY_HERE";
const EMAILJS_SERVICE_ID = "PASTE_YOUR_SERVICE_ID_HERE";
const EMAILJS_TEMPLATE_ID = "PASTE_YOUR_TEMPLATE_ID_HERE";

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

function setupReveal() {
  const items = $$("[data-reveal]");
  if (items.length === 0) return;

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((el) => {
      el.classList.add("reveal--visible");
    });
    return;
  }

  items.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  items.forEach((el) => observer.observe(el));
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

function setupContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.querySelector("[data-form-status]");
  if (!form) return;

  if (window.emailjs && EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== "PASTE_YOUR_PUBLIC_KEY_HERE") {
    window.emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      if (status) status.textContent = "Please fill in all fields.";
      return;
    }

    if (window.emailjs && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID &&
        EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== "PASTE_YOUR_PUBLIC_KEY_HERE") {
      if (status) status.textContent = "Sending...";

      window.emailjs
        .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
          from_name: name,
          to_email: email,
          message,
        })
        .then(() => {
          form.reset();
          if (status) status.textContent = "Thank you! A confirmation email has been sent.";
          window.setTimeout(() => {
            if (status) status.textContent = "";
          }, 4000);
        })
        .catch(() => {
          if (status) status.textContent = "Sending failed. Please try again or email me directly.";
        });
    } else {
      form.reset();
      if (status) {
        status.textContent =
          "Form submitted locally. To send real emails, connect EmailJS in script.js.";
      }
      window.setTimeout(() => {
        if (status) status.textContent = "";
      }, 4000);
    }
  });
}

setYear();
setupMobileNav();
setupActiveNav();
setupCopyEmail();
setupReveal();
setupContactForm();

