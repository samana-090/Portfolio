import {
  Menu,
  X,
  Github,
  Linkedin,
  ArrowUpRight,
  Mail,
  Phone,
  Award,
  GraduationCap,
  Code,
  Cpu,
  Home,
  User,
  FolderKanban,
  Braces,
  Database,
  GitBranch,
  Globe,
  Coffee,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Contact", href: "#contact", icon: Mail },
];

const education = [
  { degree: "B.E. Computer Science Engineering", institution: "Kishkinda University", year: "2023 – 2027", score: "CGPA: 8.89 / 10" },
  { degree: "Intermediate (PUC)", institution: "Nandi City PU College", year: "", score: "74.67%" },
  { degree: "SSLC", institution: "MGM School", year: "", score: "72.6%" },
];

const skills = [
  { label: "Java (OOP, Data Structures)", icon: Coffee },
  { label: "Python (File Handling, Libraries)", icon: Braces },
  { label: "HTML, CSS", icon: Globe },
  { label: "JavaScript (DOM Manipulation)", icon: Code },
  { label: "SQL (Joins, Subqueries, Aggregates)", icon: Database },
  { label: "Git, GitHub", icon: GitBranch },
];

const projects = [
  {
    title: "Urban Energy OS",
    description: "A system to analyze urban energy usage and carbon emissions with actionable recommendations.",
    points: ["Analyzed energy usage and carbon emissions data", "Generated energy-saving recommendations", "Worked on data processing and UI"],
    num: "01",
  },
  {
    title: "Intelligent Wind Site Selection",
    description: "A model to identify optimal locations for windmill installation using environmental data.",
    points: ["Built predictive model for best windmill locations", "Analyzed wind and environmental datasets", "Worked on backend logic and algorithms"],
    num: "02",
  },
  {
    title: "Virtual Ticketing System",
    description: "An online ticket booking platform with QR-based ticketing and real-time tracking.",
    points: ["Developed online ticket booking flow", "Implemented QR-based ticket generation", "Added real-time tracking features"],
    num: "03",
  },
];

const hackathons = [
  { name: "Hack Karnataka", detail: "Top 50 Teams" },
  { name: "Idetattva + Xcelerate", detail: "Participant" },
  { name: "SIH Internal Hackathon", detail: "Participant" },
];

const aboutHighlights = [
  "Problem-solving mindset",
  "Data + AI interest",
  "Practical project building",
  "Clean, scalable code",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const Index = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToSection = (href, closeMobile = false) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 76;
    window.scrollTo({ top: y, behavior: "smooth" });
    if (closeMobile) setMobileOpen(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://formsubmit.co/ajax/k.v.samana14@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New Portfolio Contact Form Submission",
          _template: "table",
        }),
      });

      const result = await response.json();
      if (result.success === "true" || response.ok) {
        setFormStatus({ type: "success", message: "Message sent. Check your inbox for new submission." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus({ type: "error", message: "Could not send message. Please try again." });
      }
    } catch {
      setFormStatus({ type: "error", message: "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.a href="#home" className="font-bold text-lg tracking-tight text-primary font-['Space_Grotesk']" whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            KVS<span className="text-foreground">.</span>
          </motion.a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => {
              const Icon = l.icon;
              return (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(l.href);
                  }}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.92, y: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Icon size={16} className="opacity-80" />
                  {l.label}
                </motion.a>
              );
            })}
            <div className="flex items-center gap-3 ml-4 border-l border-border pl-4">
              <motion.a href="https://github.com/samana-090" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub" whileTap={{ scale: 0.85 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <Github size={18} />
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/kvsamana/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn" whileTap={{ scale: 0.85 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <Linkedin size={18} />
              </motion.a>
            </div>
          </div>
          <motion.button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu" whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background px-6 pb-5 flex flex-col gap-4"
          >
            {navLinks.map((l) => {
              const Icon = l.icon;
              return (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(l.href, true);
                  }}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary py-2"
                  whileTap={{ scale: 0.97, x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Icon size={16} />
                  {l.label}
                </motion.a>
              );
            })}
            <div className="flex gap-4 pt-2 border-t border-border">
              <motion.a href="https://github.com/samana-090" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" whileTap={{ scale: 0.85 }}><Github size={18} /></motion.a>
              <motion.a href="https://www.linkedin.com/in/kvsamana/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" whileTap={{ scale: 0.85 }}><Linkedin size={18} /></motion.a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="pt-32 pb-20 md:pt-44 md:pb-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
              Computer Science Engineering Student
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              K V Samana
            </motion.h1>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg max-w-lg mb-10 leading-relaxed">
              Interested in building efficient software solutions using data and AI. Turning complex problems into clean, practical code.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                View Projects <ArrowUpRight size={16} />
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground text-sm font-medium hover:border-primary hover:text-primary transition-colors duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-2xl" />
              <img
                src="/profile.png"
                alt="K V Samana"
                className="relative w-64 h-64 rounded-2xl object-cover border border-border"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-28 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-6xl mx-auto grid md:grid-cols-[200px_1fr] gap-8"
        >
          <motion.h2 variants={fadeUp} className="text-sm font-medium text-primary tracking-widest uppercase flex items-center gap-2">
            <User size={18} /> About
          </motion.h2>
          <div className="space-y-6">
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              I am a Computer Science Engineering student focused on turning ideas into real, useful products. I enjoy
              combining software fundamentals with data-driven thinking to build solutions that are efficient, reliable,
              and easy to use.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {aboutHighlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/70 px-3 py-1.5 text-sm text-muted-foreground"
                >
                  <Sparkles size={14} className="text-primary" />
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="grid sm:grid-cols-3 gap-4">
              <motion.div
                className="rounded-xl border border-border bg-secondary/60 p-4"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
              >
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Code size={16} />
                  <span className="text-sm font-medium">Development</span>
                </div>
                <p className="text-sm text-muted-foreground">Building responsive interfaces and practical web solutions.</p>
              </motion.div>
              <motion.div
                className="rounded-xl border border-border bg-secondary/60 p-4"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
              >
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Cpu size={16} />
                  <span className="text-sm font-medium">Data Thinking</span>
                </div>
                <p className="text-sm text-muted-foreground">Using analysis to make systems smarter and more efficient.</p>
              </motion.div>
              <motion.div
                className="rounded-xl border border-border bg-secondary/60 p-4"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
              >
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Award size={16} />
                  <span className="text-sm font-medium">Growth</span>
                </div>
                <p className="text-sm text-muted-foreground">Actively learning through projects, hackathons, and teamwork.</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6"><div className="border-t border-border" /></div>

      {/* Education */}
      <section className="py-20 md:py-28 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-6xl mx-auto grid md:grid-cols-[200px_1fr] gap-8"
        >
          <motion.h2 variants={fadeUp} className="text-sm font-medium text-primary tracking-widest uppercase flex items-center gap-2">
            <GraduationCap size={18} /> Education
          </motion.h2>
          <div className="flex flex-col gap-6">
            {education.map((e, i) => (
              <motion.div key={i} variants={fadeUp} className="group border-l-2 border-border hover:border-primary pl-6 py-2 transition-colors duration-200 cursor-default" whileTap={{ x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <p className="font-medium text-foreground group-hover:text-primary transition-colors">{e.degree}</p>
                <p className="text-sm text-muted-foreground mt-1">{e.institution}{e.year ? ` · ${e.year}` : ""}</p>
                <p className="text-sm font-medium text-primary mt-1">{e.score}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-6"><div className="border-t border-border" /></div>

      {/* Skills */}
      <section className="py-20 md:py-28 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-6xl mx-auto grid md:grid-cols-[200px_1fr] gap-8"
        >
          <motion.h2 variants={fadeUp} className="text-sm font-medium text-primary tracking-widest uppercase flex items-center gap-2">
            <Code size={18} /> Skills
          </motion.h2>
          <motion.div variants={fadeUp} className="grid grid-cols-1 gap-4 max-w-2xl">
            {skills.map((s) => {
              const SkillIcon = s.icon;
              return (
              <motion.div key={s.label} className="group relative overflow-hidden rounded-xl border border-border bg-secondary p-5 hover:border-primary/60 transition-all duration-300 cursor-default" whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center gap-3">
                  <motion.div whileHover={{ rotate: 8, scale: 1.08 }} transition={{ type: "spring", stiffness: 300 }}>
                    <SkillIcon size={18} className="text-primary/85 group-hover:text-primary transition-colors duration-200" />
                  </motion.div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">{s.label}</span>
                </div>
                <Sparkles size={14} className="absolute top-3 right-3 text-primary/40 group-hover:text-primary/80 transition-colors duration-300" />
              </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-6"><div className="border-t border-border" /></div>

      {/* Projects */}
      <section id="projects" className="py-20 md:py-28 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 variants={fadeUp} className="text-sm font-medium text-primary tracking-widest uppercase flex items-center gap-2 mb-12">
            <Cpu size={18} /> Projects
          </motion.h2>
          <div className="flex flex-col gap-8">
            {projects.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="group grid md:grid-cols-[80px_1fr] gap-6 border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 cursor-default"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.99, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="text-4xl font-bold text-muted/50 group-hover:text-primary/30 transition-colors font-['Space_Grotesk']">{p.num}</span>
                <div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">{p.title}</h3>
                  <p className="text-muted-foreground mb-4">{p.description}</p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {p.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-6"><div className="border-t border-border" /></div>

      {/* Hackathons */}
      <section className="py-20 md:py-28 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-6xl mx-auto grid md:grid-cols-[200px_1fr] gap-8"
        >
          <motion.h2 variants={fadeUp} className="text-sm font-medium text-primary tracking-widest uppercase flex items-center gap-2">
            <Award size={18} /> Hackathons
          </motion.h2>
          <div className="flex flex-col gap-4">
            {hackathons.map((h) => (
              <motion.div key={h.name} variants={fadeUp} className="flex items-center justify-between border-l-2 border-border hover:border-primary pl-6 py-3 transition-colors duration-200 cursor-default" whileTap={{ x: 6 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <span className="font-medium text-foreground">{h.name}</span>
                <span className="text-sm text-primary font-medium">{h.detail}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-6"><div className="border-t border-border" /></div>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-28 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-6xl mx-auto grid md:grid-cols-[200px_1fr] gap-8"
        >
          <motion.h2 variants={fadeUp} className="text-sm font-medium text-primary tracking-widest uppercase">Contact</motion.h2>
          <motion.div variants={fadeUp} className="space-y-6">
            <p className="text-muted-foreground text-lg max-w-lg">Let's connect. I'm always open to discussing new opportunities and ideas.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a href="mailto:k.v.samana14@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <Mail size={16} /> k.v.samana14@gmail.com
              </motion.a>
              <div className="flex items-center gap-2 text-muted-foreground px-4 py-3">
                <Phone size={16} />
                <span className="text-sm">+91 8050344090</span>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <motion.a href="https://github.com/samana-090" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors" whileHover={{ x: 4 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <Github size={18} /> GitHub <ArrowUpRight size={14} />
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/kvsamana/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors" whileHover={{ x: 4 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <Linkedin size={18} /> LinkedIn <ArrowUpRight size={14} />
              </motion.a>
            </div>

            <motion.form
              onSubmit={handleFormSubmit}
              className="mt-8 rounded-xl border border-border bg-secondary/60 p-5 space-y-4"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm text-muted-foreground">Name</label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Your name"
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm text-muted-foreground">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="you@example.com"
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label htmlFor="message" className="text-sm text-muted-foreground">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Write your message..."
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary resize-y"
                  required
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium disabled:opacity-70"
              >
                <Mail size={16} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
              {formStatus.message ? (
                <p className={`text-sm ${formStatus.type === "success" ? "text-primary" : "text-red-400"}`}>
                  {formStatus.message}
                </p>
              ) : null}
            </motion.form>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} K V Samana</p>
          <div className="flex items-center gap-4">
            <motion.a href="https://github.com/samana-090" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" whileTap={{ scale: 0.85 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}><Github size={16} /></motion.a>
            <motion.a href="https://www.linkedin.com/in/kvsamana/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" whileTap={{ scale: 0.85 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}><Linkedin size={16} /></motion.a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
