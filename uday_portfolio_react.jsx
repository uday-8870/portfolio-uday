import { useState, useEffect, useRef } from "react";

const data = {
  name: "Udayadithya Reddy Singireddy",
  title: "B.Tech CSE — Artificial Intelligence",
  subtitle: "Class of 2025",
  email: "udayadithyareddysingireddy@gmail.com",
  phone: "+91 91107 18345",
  location: "Tirupati, India",
  linkedin: "https://www.linkedin.com/in/uday-adithya-singireddy-678a8b26b",
  github: "https://github.com/uday-8870",
  leetcode: "https://leetcode.com/u/udayleetco/",
  about:
    "Final-year CS (AI) undergraduate with hands-on experience in machine learning, NLP, and full-stack development. I build practical ML systems, deployable web apps, and lightweight models for edge deployment.",
  education: [
    { degree: "B.Tech — Computer Science & Engineering (AI)", school: "Sree Vidyanikethan Engineering College, Tirupati", years: "2021 — 2025", cgpa: "8.8" },
    { degree: "Intermediate (MPC)", school: "Sree Chaitanya Junior College, Vijayawada", years: "2019 — 2021", cgpa: "8.6" },
    { degree: "Secondary School", school: "NDR KKR Gowtham School, Vijayawada", years: "2017 — 2019", cgpa: "9.8" },
  ],
  skills: {
    Languages: ["Python", "Java", "C"],
    Web: ["React.js", "Flask", "HTML", "CSS", "JavaScript"],
    Mobile: ["Flutter"],
    "ML / AI": ["PyTorch", "T5 NLP", "OpenCV", "Tesseract OCR"],
    Concepts: ["Machine Learning", "NLP", "DSA"],
  },
  projects: [
    { title: "DSA Viz-AI", stack: "React · Flask · T5 NLP", desc: "AI-driven tool that recommends optimal data structures from natural language problem descriptions. Multi-label prediction with session history.", link: "", accent: "#6EE7B7" },
    { title: "Forest Fire Detection", stack: "Keras · CNN · Attention", desc: "Lightweight MSA-Net with Squeeze-and-Excitation blocks for real-time forest fire detection — efficient enough for edge deployment.", link: "", accent: "#FCA5A5" },
    { title: "NLP Text Summarizer", stack: "Flask · PyTorch · T5", desc: "Web app using T5 transformer to generate concise summaries from arbitrary input text.", link: "https://github.com/uday-8870/nlp-text-summeriser", accent: "#A5B4FC" },
    { title: "PDF OCR Pipeline", stack: "Python · OpenCV · Tesseract", desc: "Extracts and converts scanned PDF images into editable text through a robust preprocessing and OCR pipeline.", link: "https://github.com/uday-8870/ocr", accent: "#FDE68A" },
    { title: "Ashok — Desktop Assistant", stack: "Flask · Python", desc: "Modular desktop assistant supporting commands, weather lookups, and system actions with future voice integration.", link: "https://github.com/uday-8870/Ashok-ur-assistant", accent: "#67E8F9" },
  ],
  internships: [
    { org: "Salesforce", role: "Developer Intern (Apex / LWC / Flows)", desc: "Configured enterprise apps, API integrations and process automation." },
    { org: "AICTE – Altair RapidMiner", role: "Data Science Intern", desc: "Data mining, RapidMiner pipelines, and predictive analytics." },
  ],
  certifications: [
    "Oracle Cloud Infrastructure 2024 — Generative AI Certified Professional",
    "Unsupervised & Reinforcement Learning — Coursera",
    "Data Science Master — Altair RapidMiner (AICTE)",
    "5★ Java on HackerRank · 180+ LeetCode problems solved",
  ],
};

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={className} style={{ transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)" }}>
      {children}
    </div>
  );
}

function Typewriter({ text, speed = 55 }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) { clearInterval(iv); setDone(true); }
    }, speed);
    return () => clearInterval(iv);
  }, [text, speed]);
  return <span>{displayed}{!done && <span style={{ animation: "blink 1s step-end infinite", borderRight: "2px solid #6EE7B7", marginLeft: 1 }}>&nbsp;</span>}</span>;
}

function SkillTag({ label, i }) {
  const colors = ["#6EE7B7", "#A5B4FC", "#FCA5A5", "#FDE68A", "#67E8F9", "#F9A8D4"];
  const color = colors[i % colors.length];
  return (
    <span style={{ display: "inline-block", margin: "3px", padding: "4px 12px", borderRadius: 999, border: `1px solid ${color}33`, background: `${color}12`, color, fontSize: 12, fontFamily: "'DM Mono', monospace", letterSpacing: "0.03em", transition: "background 0.2s, transform 0.2s", cursor: "default" }}
      onMouseEnter={e => { e.currentTarget.style.background = `${color}28`; e.currentTarget.style.transform = "scale(1.07)"; }}
      onMouseLeave={e => { e.currentTarget.style.background = `${color}12`; e.currentTarget.style.transform = "scale(1)"; }}>
      {label}
    </span>
  );
}

function ProjectCard({ p, idx }) {
  const [ref, visible] = useInView(0.1);
  const [hovered, setHovered] = useState(false);
  return (
    <div ref={ref} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ transition: `opacity 0.6s ease ${idx * 100}ms, transform 0.6s ease ${idx * 100}ms`, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)", background: hovered ? "#1a1f2e" : "#111623", border: `1px solid ${hovered ? p.accent + "55" : "#1e2436"}`, borderRadius: 14, padding: "22px 24px", cursor: "default", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: hovered ? p.accent : "transparent", transition: "background 0.3s", borderRadius: "14px 14px 0 0" }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
        <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "#e8eaf0", fontFamily: "'Sora', sans-serif" }}>{p.title}</h3>
        {p.link && <a href={p.link} target="_blank" rel="noreferrer" style={{ color: p.accent, fontSize: 12, fontFamily: "'DM Mono', monospace", textDecoration: "none", opacity: 0.8 }}>↗ source</a>}
      </div>
      <div style={{ fontSize: 11, color: p.accent, fontFamily: "'DM Mono', monospace", marginBottom: 10, opacity: 0.75 }}>{p.stack}</div>
      <p style={{ margin: 0, fontSize: 13, color: "#8b92a8", lineHeight: 1.65 }}>{p.desc}</p>
    </div>
  );
}

function StatPill({ label, value, color }) {
  return (
    <div style={{ textAlign: "center", padding: "14px 20px", background: "#111623", border: `1px solid ${color}22`, borderRadius: 10 }}>
      <div style={{ fontSize: 22, fontWeight: 700, color, fontFamily: "'Sora', sans-serif" }}>{value}</div>
      <div style={{ fontSize: 11, color: "#5a6080", fontFamily: "'DM Mono', monospace", marginTop: 2 }}>{label}</div>
    </div>
  );
}

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#0b0e1a", color: "#c9cdd9", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=DM+Sans:wght@400;500&family=DM+Mono:wght@400;500&display=swap');
        @keyframes blink { 50% { opacity: 0 } }
        @keyframes gradientShift { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes floatDot { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #0b0e1a; } ::-webkit-scrollbar-thumb { background: #1e2436; border-radius: 2px; }
        a { color: inherit; }
        .nav-link { font-size: 13px; color: #5a6080; font-family: 'DM Mono', monospace; text-decoration: none; transition: color 0.2s; }
        .nav-link:hover { color: #6EE7B7; }
        section { scroll-margin-top: 80px; }
      `}</style>

      {/* Ambient blobs */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
        <div style={{ position: "absolute", top: -120, left: -80, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, #6EE7B710 0%, transparent 70%)", animation: "floatDot 8s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: -100, right: -60, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, #A5B4FC08 0%, transparent 70%)", animation: "floatDot 10s ease-in-out infinite 2s" }} />
      </div>

      {/* Navbar */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "0 40px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between", background: scrolled ? "#0b0e1acc" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid #1e2436" : "1px solid transparent", transition: "all 0.4s" }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: "#6EE7B7", letterSpacing: "0.08em" }}>urs.dev</span>
        <div style={{ display: "flex", gap: 28 }}>
          {["projects", "skills", "experience", "contact"].map(s => (
            <a key={s} href={`#${s}`} className="nav-link">{s}</a>
          ))}
        </div>
      </nav>

      <main style={{ position: "relative", zIndex: 1, maxWidth: 860, margin: "0 auto", padding: "0 24px 80px" }}>

        {/* Hero */}
        <section style={{ minHeight: "90vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 80 }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#6EE7B7", letterSpacing: "0.15em", marginBottom: 20, opacity: 0.8 }}>AVAILABLE FOR HIRE · 2025</div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, fontFamily: "'Sora', sans-serif", lineHeight: 1.12, color: "#eef0f6", marginBottom: 16 }}>
            <Typewriter text={data.name} speed={45} />
          </h1>
          <div style={{ fontSize: "clamp(14px, 2vw, 18px)", color: "#5a7080", fontWeight: 400, marginBottom: 32, fontFamily: "'DM Mono', monospace" }}>
            {data.title} <span style={{ color: "#2a3555" }}>·</span> {data.subtitle}
          </div>
          <p style={{ fontSize: 15, color: "#7a8299", lineHeight: 1.75, maxWidth: 540, marginBottom: 40 }}>{data.about}</p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href={data.github} target="_blank" rel="noreferrer" style={{ padding: "10px 22px", borderRadius: 8, border: "1px solid #1e2d40", color: "#8b92a8", fontSize: 13, fontFamily: "'DM Mono', monospace", textDecoration: "none", transition: "border-color 0.2s, color 0.2s", background: "transparent" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#6EE7B755"; e.currentTarget.style.color = "#6EE7B7"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e2d40"; e.currentTarget.style.color = "#8b92a8"; }}>
              GitHub ↗
            </a>
            <a href={data.linkedin} target="_blank" rel="noreferrer" style={{ padding: "10px 22px", borderRadius: 8, background: "#6EE7B7", color: "#0b0e1a", fontSize: 13, fontFamily: "'DM Mono', monospace", fontWeight: 600, textDecoration: "none", transition: "opacity 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
              LinkedIn ↗
            </a>
          </div>

          {/* Stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginTop: 56 }}>
            <StatPill label="CGPA" value="8.8" color="#6EE7B7" />
            <StatPill label="LeetCode" value="180+" color="#A5B4FC" />
            <StatPill label="Projects" value="5" color="#FDE68A" />
            <StatPill label="Certs" value="3" color="#FCA5A5" />
          </div>
        </section>

        {/* Projects */}
        <section id="projects" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <FadeIn>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 40 }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#6EE7B7", letterSpacing: "0.15em" }}>01 /</span>
              <h2 style={{ fontSize: 26, fontWeight: 700, fontFamily: "'Sora', sans-serif", color: "#eef0f6" }}>Selected Projects</h2>
              <div style={{ flex: 1, height: 1, background: "#1e2436", marginLeft: 8 }} />
            </div>
          </FadeIn>
          <div style={{ display: "grid", gap: 14 }}>
            {data.projects.map((p, i) => <ProjectCard key={i} p={p} idx={i} />)}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" style={{ paddingBottom: 80 }}>
          <FadeIn>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 40 }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#6EE7B7", letterSpacing: "0.15em" }}>02 /</span>
              <h2 style={{ fontSize: 26, fontWeight: 700, fontFamily: "'Sora', sans-serif", color: "#eef0f6" }}>Skills</h2>
              <div style={{ flex: 1, height: 1, background: "#1e2436", marginLeft: 8 }} />
            </div>
          </FadeIn>
          <div style={{ display: "grid", gap: 20 }}>
            {Object.entries(data.skills).map(([cat, items], ci) => (
              <FadeIn key={cat} delay={ci * 80}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#3a4060", width: 80, paddingTop: 6, flexShrink: 0 }}>{cat}</span>
                  <div style={{ flex: 1 }}>
                    {items.map((s, i) => {
                      const allIdx = Object.values(data.skills).flat().indexOf(s);
                      return <SkillTag key={s} label={s} i={allIdx} />;
                    })}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" style={{ paddingBottom: 80 }}>
          <FadeIn>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 40 }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#6EE7B7", letterSpacing: "0.15em" }}>03 /</span>
              <h2 style={{ fontSize: 26, fontWeight: 700, fontFamily: "'Sora', sans-serif", color: "#eef0f6" }}>Experience</h2>
              <div style={{ flex: 1, height: 1, background: "#1e2436", marginLeft: 8 }} />
            </div>
          </FadeIn>
          <div style={{ display: "grid", gap: 14, marginBottom: 40 }}>
            {data.internships.map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div style={{ padding: "20px 24px", background: "#111623", border: "1px solid #1e2436", borderRadius: 12, borderLeft: "3px solid #6EE7B755" }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "#d8dce8", fontFamily: "'Sora', sans-serif", marginBottom: 3 }}>{item.org}</div>
                  <div style={{ fontSize: 12, color: "#6EE7B7", fontFamily: "'DM Mono', monospace", marginBottom: 8, opacity: 0.85 }}>{item.role}</div>
                  <p style={{ fontSize: 13, color: "#6a7080", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Education */}
          <FadeIn delay={100}>
            <div style={{ marginBottom: 20, fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#3a4060", letterSpacing: "0.1em" }}>EDUCATION</div>
          </FadeIn>
          <div style={{ display: "grid", gap: 10 }}>
            {data.education.map((e, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div style={{ padding: "16px 22px", background: "#111623", border: "1px solid #1e2436", borderRadius: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#c8ccda", fontFamily: "'Sora', sans-serif" }}>{e.degree}</div>
                    <div style={{ fontSize: 11, color: "#4a5070", fontFamily: "'DM Mono', monospace", marginTop: 3 }}>{e.school}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#6EE7B7", fontFamily: "'Sora', sans-serif" }}>{e.cgpa}</div>
                    <div style={{ fontSize: 10, color: "#3a4060", fontFamily: "'DM Mono', monospace" }}>{e.years}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Certifications */}
          <FadeIn delay={200}>
            <div style={{ marginTop: 36, marginBottom: 16, fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#3a4060", letterSpacing: "0.1em" }}>CERTIFICATIONS</div>
            <div style={{ display: "grid", gap: 8 }}>
              {data.certifications.map((c, i) => (
                <div key={i} style={{ padding: "12px 18px", background: "#111623", border: "1px solid #1e2436", borderRadius: 8, fontSize: 13, color: "#7a8299", display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: "#A5B4FC", fontSize: 10 }}>◆</span> {c}
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Contact */}
        <section id="contact" style={{ paddingBottom: 40 }}>
          <FadeIn>
            <div style={{ padding: "44px 40px", background: "linear-gradient(135deg, #111623 60%, #131825)", border: "1px solid #1e2436", borderRadius: 18, textAlign: "center", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, #6EE7B710, transparent 70%)" }} />
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#6EE7B7", letterSpacing: "0.15em", marginBottom: 14 }}>04 / GET IN TOUCH</div>
              <h2 style={{ fontSize: 28, fontWeight: 700, fontFamily: "'Sora', sans-serif", color: "#eef0f6", marginBottom: 10 }}>Let's build something together.</h2>
              <p style={{ fontSize: 14, color: "#5a6080", marginBottom: 28 }}>Open to full-time roles, internships, and interesting ML collaborations.</p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <a href={`mailto:${data.email}`} style={{ padding: "11px 24px", background: "#6EE7B7", color: "#0b0e1a", borderRadius: 8, fontSize: 13, fontFamily: "'DM Mono', monospace", fontWeight: 600, textDecoration: "none", transition: "opacity 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.85"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                  ✉ Email me
                </a>
                <a href={data.linkedin} target="_blank" rel="noreferrer" style={{ padding: "11px 24px", border: "1px solid #1e2d44", color: "#8b92a8", borderRadius: 8, fontSize: 13, fontFamily: "'DM Mono', monospace", textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#A5B4FC55"; e.currentTarget.style.color = "#A5B4FC"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e2d44"; e.currentTarget.style.color = "#8b92a8"; }}>
                  LinkedIn ↗
                </a>
              </div>
              <div style={{ marginTop: 24, fontSize: 12, color: "#2e3550", fontFamily: "'DM Mono', monospace" }}>{data.phone}</div>
            </div>
          </FadeIn>
        </section>

      </main>

      <footer style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "20px 0 32px", fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#2a3050", letterSpacing: "0.06em" }}>
        UDAYADITHYA REDDY SINGIREDDY · 2025
      </footer>
    </div>
  );
}
