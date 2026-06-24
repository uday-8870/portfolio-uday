import { useState, useEffect, useRef } from "react";

const data = {
  name: "Udayadithya Reddy Singireddy",
  title: "AI & Deep Learning Engineer",
  subtitle: "NLP · LLMs · Computer Vision",
  email: "udayadithyasingireddy@gmail.com",
  phone: "+91 9110718345",
  location: "Nandyal, India",
  linkedin: "https://www.linkedin.com/in/uday-adithya-singireddy",
  github: "https://github.com/uday-8870",
  leetcode: "https://leetcode.com/u/udayleetco/",
  about:
    "Final-year CS student with a focused interest in Deep Learning, NLP, and LLMs. Built production-grade models achieving 96%+ accuracy, and developed AI systems spanning computer vision, OCR, and intelligent automation. Seeking an AI/ML role to apply expertise in PyTorch, TensorFlow, and modern NLP frameworks to solve real-world problems.",
  education: [
    { degree: "B.Tech — Computer Science & Engineering", school: "Sree Vidyanikethan Engineering College, Tirupati", years: "2021 — 2025", cgpa: "8.8" },
  ],
  skills: {
    "ML / DL": ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "NumPy", "Pandas", "NLTK"],
    Domains: ["Computer Vision", "NLP", "Object Detection", "Generative AI", "OCR", "Reinforcement Learning"],
    Languages: ["Python", "Java", "JavaScript", "Dart / Flutter"],
    "Web / Tools": ["Flask", "HTML5", "CSS3", "Git", "Android Studio"],
    "Cloud / Infra": ["Oracle Cloud (OCI)", "Google Colab"],
  },
  projects: [
    {
      title: "ResearchMind — Autonomous Multi-Agent Research System",
      period: "Feb 2026 — Jun 2026",
      stack: "LangGraph · FastAPI · ChromaDB · Groq · Tavily · React",
      desc: "Built an end-to-end autonomous research agent with 5 specialized agents — orchestrator, search, reader, synthesis, and critic. Decomposes queries, searches the web in parallel, chunks and embeds documents into a vector store, and generates cited research reports. Designed a custom LLM eval pipeline measuring faithfulness, coverage, and hallucination rate, achieving 91% faithfulness vs 71% baseline.",
      link: "https://github.com/uday-8870/research-mind",
      accent: "#FDBA74",
      badge: "91% faithfulness",
    },
    {
      title: "AI Emergency Green Corridor",
      period: "Feb 2026 — Present",
      stack: "Reinforcement Learning · Sensor Fusion · Real-time CV",
      desc: "Designing an AI traffic management system that autonomously creates green corridors for emergency vehicles by predicting traffic flow, optimizing routes, and controlling signals in real time. Demonstrated measurable reductions in emergency response delays in dense urban simulations without additional infrastructure.",
      link: "https://lnkd.in/gCFvBJwH",
      accent: "#FCA5A5",
      badge: "Active",
    },
    {
      title: "Forest Fire Detection — MSA-Net",
      period: "Dec 2024 — May 2025",
      stack: "PyTorch · CNN · Attention · SE Blocks",
      desc: "Designed a novel Multi-Scale Attention Network with Squeeze-and-Excitation blocks for real-time forest fire detection from aerial imagery. Achieved 96.10% test accuracy, outperforming standard CNN baselines. Implemented full training pipeline with custom data augmentation, mixed-precision training, and model quantization for edge deployment.",
      link: "https://github.com/uday-8870",
      accent: "#6EE7B7",
      badge: "96.1% accuracy",
    },
    {
      title: "Blind Assist — Real-Time Object Detection & Voice Guidance",
      period: "Jun 2024 — Sep 2024",
      stack: "YOLOv5 · MobileNet · TTS · Mobile",
      desc: "Built an accessibility tool integrating YOLOv5 and MobileNet to detect obstacles in real time and deliver voice-guided navigation for visually impaired users. Recognized 80+ object classes with contextual audio descriptions at low-latency mobile inference. Reduced navigation hazards through continuous frame-by-frame obstacle alerts.",
      link: "https://github.com/uday-8870",
      accent: "#A5B4FC",
      badge: "80+ classes",
    },
    {
      title: "PDF Image & Text Extractor — OCR Pipeline",
      period: "Jun 2025 — Aug 2025",
      stack: "Python · OpenCV · Tesseract · Deep Learning",
      desc: "End-to-end OCR pipeline combining deep learning-based text detection with classical image processing to extract structured content from scanned PDFs. Engineered preprocessing stages — deskewing, binarization, noise removal — to handle low-quality document scans. Packaged as a lightweight Python library with CLI for batch processing.",
      link: "https://github.com/uday-8870/ocr",
      accent: "#F9A8D4",
      badge: null,
    },
    {
      title: "DSA Viz-AI — Intelligent DS Recommender",
      period: "2024",
      stack: "React · Flask · T5 NLP · Python",
      desc: "AI-driven tool that recommends optimal data structures from natural language problem descriptions. Uses a fine-tuned T5 NLP model with heuristic ranking, supporting multi-label prediction and session history for iterative problem solving.",
      link: "",
      accent: "#FDE68A",
      badge: null,
    },
    {
      title: "NLP Text Summarizer",
      period: "2023",
      stack: "Flask · PyTorch · T5 Transformer",
      desc: "Web application using a T5 transformer model to generate concise, abstractive summaries from arbitrary user-provided text. Full Flask backend with a clean frontend for real-time summarization.",
      link: "https://github.com/uday-8870/nlp-text-summeriser",
      accent: "#67E8F9",
      badge: null,
    },
    {
      title: "Ashok — Python Desktop Assistant",
      period: "Oct 2023 — Feb 2024",
      stack: "Flask · Python · REST APIs",
      desc: "Flask-based desktop automation assistant responding to text commands with live weather updates, system controls, and API-driven integrations. Modular architecture designed to support future voice command extensions without refactoring core logic.",
      link: "https://github.com/uday-8870/Ashok-ur-assistant",
      accent: "#86EFAC",
      badge: null,
    },
  ],
  internships: [
    { org: "Outlier AI", role: "AI / ML Intern", period: "Aug 2024 — Mar 2025", desc: "Worked on LLM training and evaluation pipelines. Performed data labeling, quality assurance, and dataset refinement. Reviewed model outputs against guidelines and provided structured feedback to improve response reliability and accuracy. Collaborated with distributed teams on AI system performance." },
    { org: "Altair RapidMiner — AICTE", role: "AI & Data Science Intern", period: "Jul 2024 — Oct 2024", desc: "Applied ML and data mining to industrial datasets. Built predictive models using scikit-learn across unsupervised learning, feature engineering, and model evaluation workflows at scale." },
    { org: "Salesforce", role: "Developer Intern (Apex / LWC / Flows)", period: "Aug 2023 — Oct 2023", desc: "Developed Salesforce applications using Apex and Lightning Web Components, integrating REST APIs and configuring process automation flows for enterprise-level CRM features." },
  ],
  certifications: [
    "Oracle Cloud Infrastructure — Generative AI Certified Professional · Aug 2024",
    "Unsupervised & Reinforcement Learning — Coursera · Jul 2023",
    "Data Science Master — Altair RapidMiner (AICTE)",
  ],
  achievements: [
    "Postgraduate Conditional Offer — UNSW Sydney (Ranked #19 globally, 2025) for Term 1 2026",
    "Young Budding Scientist Award — Nandi Academy International School (2014)",
    "Currently learning German at Goethe Institute",
    "5★ Java on HackerRank · 180+ LeetCode problems solved",
  ],
};

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeIn({ children, delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{ transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(26px)" }}>
      {children}
    </div>
  );
}

function Typewriter({ text, speed = 48 }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => { setDisplayed(text.slice(0, i + 1)); i++; if (i >= text.length) { clearInterval(iv); setDone(true); } }, speed);
    return () => clearInterval(iv);
  }, [text, speed]);
  return <span>{displayed}{!done && <span style={{ borderRight: "2px solid #6EE7B7", marginLeft: 1, animation: "blink 1s step-end infinite" }}>&nbsp;</span>}</span>;
}

function SkillTag({ label, i }) {
  const colors = ["#6EE7B7", "#A5B4FC", "#FCA5A5", "#FDE68A", "#67E8F9", "#F9A8D4", "#86EFAC", "#FDBA74"];
  const color = colors[i % colors.length];
  const [hov, setHov] = useState(false);
  return (
    <span style={{ display: "inline-block", margin: "3px", padding: "4px 11px", borderRadius: 999, border: `1px solid ${color}${hov ? "55" : "28"}`, background: `${color}${hov ? "1a" : "0d"}`, color, fontSize: 12, fontFamily: "'DM Mono', monospace", transition: "all 0.18s", cursor: "default", transform: hov ? "scale(1.06)" : "scale(1)" }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {label}
    </span>
  );
}

function ProjectCard({ p, idx }) {
  const [ref, visible] = useInView(0.08);
  const [hov, setHov] = useState(false);
  const Tag = p.link ? "a" : "div";
  const linkProps = p.link ? { href: p.link, target: "_blank", rel: "noreferrer" } : {};
  return (
    <Tag ref={ref} {...linkProps} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: "block", textDecoration: "none", transition: `opacity 0.6s ease ${idx * 75}ms, transform 0.6s ease ${idx * 75}ms`, opacity: visible ? 1 : 0, transform: visible ? (hov && p.link ? "translateY(-2px)" : "translateY(0)") : "translateY(28px)", background: hov ? "#161b2c" : "#101420", border: `1px solid ${hov ? p.accent + "44" : "#1a2035"}`, borderRadius: 13, padding: "20px 22px", position: "relative", overflow: "hidden", cursor: p.link ? "pointer" : "default" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: hov ? p.accent : "transparent", transition: "background 0.3s", borderRadius: "13px 13px 0 0" }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 6 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 3 }}>
            <h3 style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#dde0ec", fontFamily: "'Sora', sans-serif" }}>{p.title}</h3>
            {p.badge && <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 999, background: `${p.accent}18`, color: p.accent, fontFamily: "'DM Mono', monospace", border: `1px solid ${p.accent}33` }}>{p.badge}</span>}
          </div>
          <div style={{ fontSize: 11, color: p.accent, fontFamily: "'DM Mono', monospace", opacity: 0.75, marginBottom: 8 }}>{p.stack}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, flexShrink: 0 }}>
          {p.period && <span style={{ fontSize: 10, color: "#2e3858", fontFamily: "'DM Mono', monospace", whiteSpace: "nowrap" }}>{p.period}</span>}
          {p.link && <span style={{ color: p.accent, fontSize: 11, fontFamily: "'DM Mono', monospace", opacity: hov ? 1 : 0.5, transition: "opacity 0.2s" }}>↗ view</span>}
        </div>
      </div>
      <p style={{ margin: 0, fontSize: 13, color: "#717898", lineHeight: 1.65 }}>{p.desc}</p>
    </Tag>
  );
}

function StatPill({ label, value, color }) {
  return (
    <div style={{ textAlign: "center", padding: "14px 12px", background: "#101420", border: `1px solid ${color}1a`, borderRadius: 10 }}>
      <div style={{ fontSize: 18, fontWeight: 700, color, fontFamily: "'Sora', sans-serif" }}>{value}</div>
      <div style={{ fontSize: 10, color: "#3a4060", fontFamily: "'DM Mono', monospace", marginTop: 2, letterSpacing: "0.05em" }}>{label}</div>
    </div>
  );
}

function SectionHeader({ num, title }) {
  return (
    <FadeIn>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 36 }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#6EE7B7", letterSpacing: "0.15em" }}>{num} /</span>
        <h2 style={{ fontSize: 24, fontWeight: 700, fontFamily: "'Sora', sans-serif", color: "#eef0f6", margin: 0 }}>{title}</h2>
        <div style={{ flex: 1, height: 1, background: "#1a2035", marginLeft: 8 }} />
      </div>
    </FadeIn>
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
    <div style={{ minHeight: "100vh", background: "#090c18", color: "#c0c4d4", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=DM+Sans:wght@400;500&family=DM+Mono:wght@400;500&display=swap');
        @keyframes blink { 50% { opacity: 0 } }
        @keyframes floatA { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-12px) scale(1.02)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(10px)} }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #090c18; }
        ::-webkit-scrollbar-thumb { background: #1a2035; border-radius: 2px; }
        a { color: inherit; text-decoration: none; }
        .nav-link { font-size: 12px; color: #3a4060; font-family: 'DM Mono', monospace; letter-spacing: 0.08em; transition: color 0.2s; }
        .nav-link:hover { color: #6EE7B7; }
        section { scroll-margin-top: 72px; }
      `}</style>

      {/* Ambient blobs */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
        <div style={{ position: "absolute", top: -140, left: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, #6EE7B70d 0%, transparent 68%)", animation: "floatA 9s ease-in-out infinite" }} />
        <div style={{ position: "absolute", top: "40%", right: -80, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, #A5B4FC08 0%, transparent 70%)", animation: "floatB 11s ease-in-out infinite 1s" }} />
        <div style={{ position: "absolute", bottom: -80, left: "30%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, #FCA5A506 0%, transparent 70%)", animation: "floatA 13s ease-in-out infinite 3s" }} />
      </div>

      {/* Navbar */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "0 36px", height: 52, display: "flex", alignItems: "center", justifyContent: "space-between", background: scrolled ? "#090c18dd" : "transparent", backdropFilter: scrolled ? "blur(14px)" : "none", borderBottom: scrolled ? "1px solid #1a2035" : "1px solid transparent", transition: "all 0.35s" }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#6EE7B7", letterSpacing: "0.1em" }}></span>
        <div style={{ display: "flex", gap: 24 }}>
          {["projects", "skills", "experience", "contact"].map(s => (
            <a key={s} href={`#${s}`} className="nav-link">{s}</a>
          ))}
        </div>
      </nav>

      <main style={{ position: "relative", zIndex: 1, maxWidth: 840, margin: "0 auto", padding: "0 22px 80px" }}>

        {/* Hero */}
        <section style={{ minHeight: "88vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 72 }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#6EE7B7", letterSpacing: "0.18em", marginBottom: 18, opacity: 0.9 }}>OPEN TO OPPORTUNITIES · 2025</div>
          <h1 style={{ fontSize: "clamp(28px, 4.5vw, 48px)", fontWeight: 700, fontFamily: "'Sora', sans-serif", lineHeight: 1.1, color: "#eaecf6", marginBottom: 14 }}>
            <Typewriter text={data.name} speed={42} />
          </h1>
          <div style={{ fontSize: "clamp(13px, 2vw, 16px)", color: "#4a5578", fontFamily: "'DM Mono', monospace", marginBottom: 28 }}>
            {data.title} <span style={{ color: "#1e2842" }}>·</span> {data.subtitle}
          </div>
          <p style={{ fontSize: 14, color: "#6a7290", lineHeight: 1.78, maxWidth: 520, marginBottom: 36 }}>{data.about}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={data.github} target="_blank" rel="noreferrer"
              style={{ padding: "9px 20px", borderRadius: 8, border: "1px solid #1a2840", color: "#7a8299", fontSize: 12, fontFamily: "'DM Mono', monospace", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#6EE7B744"; e.currentTarget.style.color = "#6EE7B7"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a2840"; e.currentTarget.style.color = "#7a8299"; }}>
              GitHub ↗
            </a>
            <a href={data.linkedin} target="_blank" rel="noreferrer"
              style={{ padding: "9px 20px", borderRadius: 8, background: "#6EE7B7", color: "#090c18", fontSize: 12, fontFamily: "'DM Mono', monospace", fontWeight: 600, transition: "opacity 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.85"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
              LinkedIn ↗
            </a>
            <a href={`mailto:${data.email}`}
              style={{ padding: "9px 20px", borderRadius: 8, border: "1px solid #1a2840", color: "#7a8299", fontSize: 12, fontFamily: "'DM Mono', monospace", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#A5B4FC44"; e.currentTarget.style.color = "#A5B4FC"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a2840"; e.currentTarget.style.color = "#7a8299"; }}>
              ✉ Email
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginTop: 52 }}>
            <StatPill label="CGPA" value="8.8" color="#6EE7B7" />
            <StatPill label="BUILDING AI" value="3+ yrs" color="#FCA5A5" />
            <StatPill label="PROJECTS" value="8" color="#FDE68A" />
            <StatPill label="LEETCODE" value="180+" color="#A5B4FC" />
          </div>
        </section>

        {/* Projects */}
        <section id="projects" style={{ paddingTop: 72, paddingBottom: 72 }}>
          <SectionHeader num="01" title="Projects" />
          <div style={{ display: "grid", gap: 12 }}>
            {data.projects.map((p, i) => <ProjectCard key={i} p={p} idx={i} />)}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" style={{ paddingBottom: 72 }}>
          <SectionHeader num="02" title="Skills" />
          <div style={{ display: "grid", gap: 18 }}>
            {Object.entries(data.skills).map(([cat, items], ci) => {
              const allItems = Object.values(data.skills).flat();
              return (
                <FadeIn key={cat} delay={ci * 70}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#2e3858", width: 90, paddingTop: 7, flexShrink: 0, letterSpacing: "0.05em" }}>{cat}</span>
                    <div style={{ flex: 1 }}>
                      {items.map((s) => <SkillTag key={s} label={s} i={allItems.indexOf(s)} />)}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" style={{ paddingBottom: 72 }}>
          <SectionHeader num="03" title="Experience" />
          <div style={{ display: "grid", gap: 12, marginBottom: 44 }}>
            {data.internships.map((item, i) => (
              <FadeIn key={i} delay={i * 90}>
                <div style={{ padding: "18px 22px", background: "#101420", border: "1px solid #1a2035", borderLeft: "3px solid #6EE7B740", borderRadius: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 6, marginBottom: 4 }}>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#d0d4e6", fontFamily: "'Sora', sans-serif" }}>{item.org}</div>
                      <div style={{ fontSize: 11, color: "#6EE7B7", fontFamily: "'DM Mono', monospace", opacity: 0.85, marginTop: 2 }}>{item.role}</div>
                    </div>
                    <span style={{ fontSize: 10, color: "#2e3858", fontFamily: "'DM Mono', monospace" }}>{item.period}</span>
                  </div>
                  <p style={{ margin: 0, fontSize: 13, color: "#5a6280", lineHeight: 1.65, marginTop: 8 }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn><div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#2e3858", letterSpacing: "0.12em", marginBottom: 16 }}>EDUCATION</div></FadeIn>
          {data.education.map((e, i) => (
            <FadeIn key={i} delay={i * 70}>
              <div style={{ padding: "16px 22px", background: "#101420", border: "1px solid #1a2035", borderRadius: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#c0c4da", fontFamily: "'Sora', sans-serif" }}>{e.degree}</div>
                  <div style={{ fontSize: 11, color: "#3a4060", fontFamily: "'DM Mono', monospace", marginTop: 3 }}>{e.school}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#6EE7B7", fontFamily: "'Sora', sans-serif" }}>{e.cgpa}</div>
                  <div style={{ fontSize: 10, color: "#2e3858", fontFamily: "'DM Mono', monospace" }}>{e.years}</div>
                </div>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={100}><div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#2e3858", letterSpacing: "0.12em", marginBottom: 14, marginTop: 36 }}>CERTIFICATIONS</div></FadeIn>
          <div style={{ display: "grid", gap: 8, marginBottom: 36 }}>
            {data.certifications.map((c, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div style={{ padding: "11px 18px", background: "#101420", border: "1px solid #1a2035", borderRadius: 8, fontSize: 13, color: "#6a7090", display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: "#A5B4FC", fontSize: 9 }}>◆</span> {c}
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={100}><div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#2e3858", letterSpacing: "0.12em", marginBottom: 14 }}>ACHIEVEMENTS</div></FadeIn>
          <div style={{ display: "grid", gap: 8 }}>
            {data.achievements.map((a, i) => (
              <FadeIn key={i} delay={i * 55}>
                <div style={{ padding: "11px 18px", background: "#101420", border: "1px solid #1a2035", borderRadius: 8, fontSize: 13, color: "#6a7090", display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{ color: "#FDE68A", fontSize: 9, marginTop: 4 }}>◆</span> {a}
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ paddingBottom: 40 }}>
          <FadeIn>
            <div style={{ padding: "44px 40px", background: "#101420", border: "1px solid #1a2035", borderRadius: 18, textAlign: "center", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -60, right: -60, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, #6EE7B70c, transparent 70%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: -40, left: -40, width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle, #A5B4FC08, transparent 70%)", pointerEvents: "none" }} />
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#6EE7B7", letterSpacing: "0.18em", marginBottom: 14 }}>04 / GET IN TOUCH</div>
              <h2 style={{ fontSize: 26, fontWeight: 700, fontFamily: "'Sora', sans-serif", color: "#eef0f6", marginBottom: 10 }}>Let's build something together.</h2>
              <p style={{ fontSize: 13, color: "#4a5270", marginBottom: 28 }}>Open to full-time AI/ML roles, research collaborations, and interesting projects.</p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <a href={`mailto:${data.email}`}
                  style={{ padding: "10px 22px", background: "#6EE7B7", color: "#090c18", borderRadius: 8, fontSize: 12, fontFamily: "'DM Mono', monospace", fontWeight: 600, transition: "opacity 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.85"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                  ✉ Email me
                </a>
                <a href={data.linkedin} target="_blank" rel="noreferrer"
                  style={{ padding: "10px 22px", border: "1px solid #1e2d44", color: "#7a8299", borderRadius: 8, fontSize: 12, fontFamily: "'DM Mono', monospace", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#A5B4FC44"; e.currentTarget.style.color = "#A5B4FC"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e2d44"; e.currentTarget.style.color = "#7a8299"; }}>
                  LinkedIn ↗
                </a>
                <a href={data.github} target="_blank" rel="noreferrer"
                  style={{ padding: "10px 22px", border: "1px solid #1e2d44", color: "#7a8299", borderRadius: 8, fontSize: 12, fontFamily: "'DM Mono', monospace", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#6EE7B744"; e.currentTarget.style.color = "#6EE7B7"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e2d44"; e.currentTarget.style.color = "#7a8299"; }}>
                  GitHub ↗
                </a>
              </div>
              <div style={{ marginTop: 22, fontSize: 11, color: "#1e2842", fontFamily: "'DM Mono', monospace" }}>{data.phone} · {data.location}</div>
            </div>
          </FadeIn>
        </section>
      </main>

      <footer style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "18px 0 30px", fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#1e2540", letterSpacing: "0.08em" }}>
        UDAYADITHYA REDDY SINGIREDDY · 2025
      </footer>
    </div>
  );
}
