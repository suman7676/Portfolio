import { useEffect, useRef, useState } from "react";

// ── Real SVG Icons ──────────────────────────────────────────
const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
  </svg>
);

const NextIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.93 14.36L9.14 8.5H8v7h1.5v-5.17l5.93 7.53c-.44.22-.91.39-1.4.5L9.14 8.5H8" fill="#000"/>
    <path d="M14.5 8.5h1.5v4.5" stroke="#000" strokeWidth="1.5" fill="none"/>
  </svg>
);

const LaravelIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.938a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027.29.29 0 01-.066.009.29.29 0 01-.065-.009.316.316 0 01-.066-.027L.534 18.759A.378.378 0 01.346 18.433V3.085c0-.05.01-.099.027-.143a.352.352 0 01.189-.2l4.431-2.542a.366.366 0 01.378 0l4.43 2.542a.37.37 0 01.189.2.352.352 0 01.027.143v9.763l3.758-2.164V5.529c0-.05.01-.098.027-.143a.352.352 0 01.189-.199l4.43-2.542a.366.366 0 01.378 0l4.432 2.542a.37.37 0 01.177.243z" fill="#FF2D20"/>
  </svg>
);

const PHPIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <ellipse cx="12" cy="12" rx="11" ry="6" fill="#8892BF"/>
    <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace" fontWeight="bold">php</text>
  </svg>
);

const MySQLIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.274.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.32-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.165z" fill="#00618A"/>
    <path d="M23.742 17.376c-.868-2.145-2.342-3.974-4.01-5.387-1.52-1.255-3.48-2.14-5.577-2.33-1.078-.097-2.207.008-3.26.35-1.08.346-2.046.91-2.877 1.6-1.61 1.33-2.796 3.158-3.544 5.073-.358.924-.5 1.903-.54 2.867v.2c0 1.274.26 2.566.756 3.724.486 1.15 1.228 2.223 2.142 3.054.88.8 2.004 1.33 3.154 1.588.52.115 1.047.17 1.568.17 1.02 0 2.045-.22 2.97-.648.916-.424 1.74-1.063 2.41-1.852.64-.76 1.11-1.67 1.397-2.64.048-.154.085-.313.12-.47" fill="#00618A"/>
    <path d="M23.742 17.376c-.05-.16-.12-.31-.18-.465" fill="#00618A"/>
    <text x="12" y="14" textAnchor="middle" fill="white" fontSize="5.5" fontFamily="monospace" fontWeight="bold">MySQL</text>
    <path d="M4 8.5 C4 5.5 8 4 12 4 C16 4 20 5.5 20 8.5 C20 11.5 16 13 12 13 C8 13 4 11.5 4 8.5Z" fill="#00618A"/>
    <text x="12" y="9.5" textAnchor="middle" fill="white" fontSize="4" fontFamily="monospace" fontWeight="bold">MySQL</text>
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.658 2.66a1.838 1.838 0 011.9 2.9 1.836 1.836 0 01-2.9-1.9l-2.48-2.48v6.522a1.84 1.84 0 11-1.51-.036V9.27a1.836 1.836 0 01-.999-2.411L7.718 4.16 1.408 10.474a1.55 1.55 0 000 2.189L11.884 23.14a1.55 1.55 0 002.189 0l9.473-9.473a1.549 1.549 0 000-2.188" fill="#F05032"/>
  </svg>
);

const JavaScriptIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
    <path d="M6.235 16.967c.313.52.725.902 1.45.902.608 0 .997-.304.997-.723 0-.502-.4-.68-1.072-.972l-.368-.158c-1.063-.452-1.77-.018-1.77-1.737 0-1.295.986-2.283 2.527-2.283 1.097 0 1.885.382 2.453 1.381l-1.343.862c-.296-.529-.615-.737-1.11-.737-.505 0-.827.32-.827.737 0 .516.32.726 1.06 1.044l.368.158c1.252.537 1.966 1.085 1.966 2.516 0 1.442-1.133 2.409-2.656 2.409-1.489 0-2.45-.709-2.919-1.637l1.244-.762zM13.101 16.8c.23.407.44.751.947.751.483 0 .788-.19.788-.927v-5.01h1.66v5.031c0 1.527-.895 2.22-2.202 2.22-1.18 0-1.865-.612-2.214-1.348l1.021-.717z" fill="#000"/>
  </svg>
);

const PostmanIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" fill="#FF6C37"/>
    <path d="M13.5 10.5l-4.5 3 1.5-4.5 3 1.5z" fill="white"/>
    <path d="M8 8l6 6M14 8l-2 6" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
    <circle cx="14" cy="8" r="1.5" fill="white"/>
  </svg>
);

// ── Icon map (component reference, JSX-safe) ────────────────
const ICON_MAP = {
  ReactIcon,
  NextIcon,
  JavaScriptIcon,
  LaravelIcon,
  PHPIcon,
  MySQLIcon,
  GitIcon,
  PostmanIcon,
};

// ── Data ────────────────────────────────────────────────────
const skills = [
  {
    category: "Frontend",
    icon: "◈",
    accent: "#0891b2",
    accentDark: "#0e7490",
    accentLight: "#cffafe",
    items: [
      { name: "React.js",   icon: "ReactIcon",      level: 90, tag: "Library",   desc: "Component-based UI" },
      { name: "Next.js",    icon: "NextIcon",       level: 85, tag: "Framework", desc: "Full-stack React"   },
      { name: "JavaScript", icon: "JavaScriptIcon", level: 85, tag: "Language",  desc: "Web scripting lang" },
    ],
  },
  {
    category: "Backend",
    icon: "◉",
    accent: "#7c3aed",
    accentDark: "#6d28d9",
    accentLight: "#ede9fe",
    items: [
      { name: "Laravel", icon: "LaravelIcon", level: 88, tag: "Framework", desc: "PHP web framework"     },
      { name: "PHP",     icon: "PHPIcon",     level: 85, tag: "Language",  desc: "Server-side scripting" },
      { name: "MySQL",   icon: "MySQLIcon",   level: 82, tag: "Database",  desc: "Relational DB"         },
    ],
  },
  {
    category: "Tools",
    icon: "◎",
    accent: "#059669",
    accentDark: "#065f46",
    accentLight: "#d1fae5",
    items: [
      { name: "Git",     icon: "GitIcon",     level: 87, tag: "VCS", desc: "Version control"    },
      { name: "Postman", icon: "PostmanIcon", level: 83, tag: "API", desc: "API testing & docs" },
    ],
  },
];

const totalSkills = skills.reduce((acc, g) => acc + g.items.length, 0);
const avgLevel    = Math.round(
  skills.flatMap((g) => g.items).reduce((a, b) => a + b.level, 0) / totalSkills
);

// ── Component ───────────────────────────────────────────────
export default function SkillsSection() {
  const [visible,        setVisible]        = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredSkill,   setHoveredSkill]   = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const displayed = activeCategory
    ? skills.filter((g) => g.category === activeCategory)
    : skills;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .sk-root { font-family: 'Syne', sans-serif; }
        .sk-mono { font-family: 'JetBrains Mono', monospace; }

        @keyframes sk-pulse-ring {
          0%   { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes sk-scanline {
          0%   { top: -2px; opacity: 0.5; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes sk-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes sk-icon-pop {
          0%   { transform: scale(0.8) rotate(-8deg); opacity: 0; }
          100% { transform: scale(1) rotate(0deg);    opacity: 1; }
        }

        .sk-scanline {
          position: absolute; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(8,145,178,0.35), transparent);
          animation: sk-scanline 9s linear infinite;
          pointer-events: none; z-index: 2;
        }
        .sk-blink { animation: sk-blink 1.2s step-end infinite; }

        .sk-card {
          position: relative;
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 22px;
          padding: 22px 20px 18px;
          overflow: hidden;
          transition: transform 0.35s cubic-bezier(.4,0,.2,1), border-color 0.35s, box-shadow 0.35s;
        }
        .sk-card:hover { transform: translateY(-7px) scale(1.012); border-color: rgba(0,0,0,0.12); }

        .sk-icon-wrap {
          width: 44px; height: 44px;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: transform 0.3s cubic-bezier(.4,0,.2,1);
        }
        .sk-card:hover .sk-icon-wrap { transform: scale(1.12) rotate(3deg); }

        .sk-icon-wrap svg { width: 24px; height: 24px; }

        .sk-bar-track {
          width: 100%; height: 4px;
          background: rgba(0,0,0,0.07);
          border-radius: 99px; overflow: hidden; margin-top: 14px;
        }
        .sk-bar-fill {
          height: 100%; border-radius: 99px; width: 0%;
          transition: width 1.5s cubic-bezier(.4,0,.2,1);
        }

        .sk-pill {
          font-family: 'JetBrains Mono', monospace;
          cursor: pointer; border-radius: 99px;
          padding: 7px 16px; font-size: 11px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          border: 1px solid rgba(0,0,0,0.1);
          background: rgba(0,0,0,0.03); color: rgba(0,0,0,0.4);
          transition: all 0.22s;
        }
        .sk-pill:hover, .sk-pill.active {
          background: rgba(0,0,0,0.07); border-color: rgba(0,0,0,0.18); color: #111;
        }

        .sk-stat {
          background: #ffffff; border: 1px solid rgba(0,0,0,0.07);
          border-radius: 18px; padding: 18px 12px; text-align: center;
          box-shadow: 0 1px 4px rgba(0,0,0,0.05);
        }

        .sk-dot-seg { flex: 1; height: 3px; border-radius: 99px; transition: all 0.3s; }
      `}</style>

      <section
        ref={sectionRef}
        className="sk-root relative overflow-hidden py-28 px-4"
        style={{ background: "#f8f9fc", minHeight: "100vh" }}
      >
        <div className="sk-scanline" />

        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }} />

        {/* Ambient orbs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(8,145,178,0.06) 0%, transparent 70%)" }} />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-5xl mx-auto">

          {/* ── HEADER ── */}
          <div className="mb-14" style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.7s, transform 0.7s",
          }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-2.5 h-2.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#0891b2", position: "relative", zIndex: 1 }} />
                <div style={{ position: "absolute", inset: 0, borderRadius: "9999px", background: "#0891b2", animation: "sk-pulse-ring 1.8s ease-out infinite" }} />
              </div>
              <span className="sk-mono text-xs tracking-[0.28em] uppercase" style={{ color: "#0891b2" }}>
                Skills & Expertise
              </span>
            </div>

            <h2 className="font-extrabold leading-none tracking-tighter"
              style={{ fontSize: "clamp(52px,10vw,100px)", color: "#0f172a" }}>
              
              
              <span style={{
                background: "linear-gradient(100deg, #0891b2 0%, #7c3aed 50%, #db2777 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                My Skills
              </span>
            </h2>

            
          </div>

          {/* ── STATS ── */}
          <div className="grid grid-cols-3 gap-3 mb-10" style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s 0.15s, transform 0.7s 0.15s",
          }}>
            {[
              { label: "Technologies",    value: totalSkills    },
              { label: "Avg Proficiency", value: `${avgLevel}%` },
              { label: "Categories",      value: skills.length  },
            ].map((s) => (
              <div key={s.label} className="sk-stat">
                <div className="sk-mono font-bold" style={{ fontSize: "clamp(22px,4vw,34px)", color: "#0f172a" }}>
                  {s.value}
                </div>
                <div className="sk-mono uppercase tracking-widest mt-1" style={{ fontSize: 10, color: "rgba(0,0,0,0.35)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* ── FILTER PILLS ── */}
          <div className="flex flex-wrap gap-2 mb-10" style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 0.6s 0.22s, transform 0.6s 0.22s",
          }}>
            <button className={`sk-pill ${activeCategory === null ? "active" : ""}`}
              onClick={() => setActiveCategory(null)}>All</button>
            {skills.map((g) => (
              <button key={g.category}
                className={`sk-pill ${activeCategory === g.category ? "active" : ""}`}
                onClick={() => setActiveCategory(g.category === activeCategory ? null : g.category)}>
                {g.category}
              </button>
            ))}
          </div>

          {/* ── SKILL GROUPS ── */}
          <div className="flex flex-col gap-10">
            {displayed.map((group, gi) => (
              <div key={group.category} style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.6s ${gi * 0.1 + 0.3}s, transform 0.6s ${gi * 0.1 + 0.3}s`,
              }}>
                {/* Group header */}
                <div className="flex items-center gap-4 mb-5">
                  <span style={{ color: group.accent, fontSize: 20 }}>{group.icon}</span>
                  <span className="sk-mono uppercase tracking-[0.22em]" style={{ fontSize: 11, color: group.accent }}>
                    {group.category}
                  </span>
                  <div className="flex-1 h-px"
                    style={{ background: `linear-gradient(90deg, ${group.accent}40, transparent)` }} />
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.items.map((item, idx) => {
                    const hovered = hoveredSkill === `${group.category}-${item.name}`;
                    return (
                      <div key={item.name} style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(20px)",
                        transition: `opacity 0.5s ${gi * 0.1 + idx * 0.07 + 0.42}s, transform 0.5s ${gi * 0.1 + idx * 0.07 + 0.42}s`,
                      }}>
                        <div
                          className="sk-card"
                          style={{
                            boxShadow: hovered
                              ? `0 20px 50px -10px ${group.accent}22, 0 0 0 1px ${group.accent}20`
                              : "0 1px 4px rgba(0,0,0,0.05)",
                          }}
                          onMouseEnter={() => setHoveredSkill(`${group.category}-${item.name}`)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          {/* Hover shimmer */}
                          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-3xl pointer-events-none"
                            style={{ background: group.accent, opacity: hovered ? 0.07 : 0, transition: "opacity 0.4s" }} />

                          {/* Corner accent */}
                          <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl rounded-tr-xl pointer-events-none"
                            style={{
                              background: `linear-gradient(135deg, ${group.accentLight}, transparent)`,
                              borderLeft: `1px solid ${group.accent}20`,
                              borderBottom: `1px solid ${group.accent}20`,
                            }} />

                          {/* Top row: icon + name + badge */}
                          <div className="flex items-start justify-between mb-4 relative">
                            <div className="flex items-center gap-3">
                              {/* SVG icon box */}
                              <div className="sk-icon-wrap"
                                style={{ background: group.accentLight, border: `1px solid ${group.accent}25` }}>
                                {(() => { const Icon = ICON_MAP[item.icon]; return Icon ? <Icon /> : null; })()}
                              </div>

                              <div>
                                <div className="font-bold leading-tight"
                                  style={{ fontSize: 15, letterSpacing: "-0.01em", color: "#0f172a" }}>
                                  {item.name}
                                </div>
                                <div style={{ fontSize: 11, color: "rgba(0,0,0,0.38)", marginTop: 2 }}>
                                  {item.desc}
                                </div>
                              </div>
                            </div>

                            {/* % badge */}
                            <div className="sk-mono font-bold rounded-xl px-2 py-1 flex-shrink-0"
                              style={{ fontSize: 12, background: group.accentLight, color: group.accent, border: `1px solid ${group.accent}25` }}>
                              {item.level}%
                            </div>
                          </div>

                          {/* Tag pill */}
                          <span className="sk-mono uppercase rounded-full px-2.5 py-0.5"
                            style={{ fontSize: 9, letterSpacing: "0.18em", background: group.accentLight, color: group.accent, fontWeight: 600 }}>
                            {item.tag}
                          </span>

                          {/* Progress bar */}
                          <div className="sk-bar-track">
                            <div className="sk-bar-fill"
                              style={{
                                width: visible ? `${item.level}%` : "0%",
                                background: `linear-gradient(90deg, ${group.accentDark}, ${group.accent})`,
                                transitionDelay: `${gi * 0.1 + idx * 0.08 + 0.7}s`,
                              }} />
                          </div>

                          {/* Dot segments */}
                          <div className="flex gap-1 mt-3">
                            {Array.from({ length: 10 }).map((_, i) => (
                              <div key={i} className="sk-dot-seg"
                                style={{
                                  background: i < Math.round(item.level / 10) ? group.accent : "rgba(0,0,0,0.08)",
                                  opacity: visible ? 1 : 0,
                                  transitionDelay: `${gi * 0.1 + idx * 0.08 + 0.75 + i * 0.03}s`,
                                }} />
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* ── FOOTER ── */}
          <div className="mt-20 flex items-center gap-3 justify-center"
            style={{ opacity: visible ? 1 : 0, transition: "opacity 0.7s 0.9s" }}>
            <div className="sk-blink w-2 h-2 rounded-full" style={{ background: "#059669" }} />
            <span className="sk-mono uppercase tracking-widest" style={{ fontSize: 10, color: "rgba(0,0,0,0.3)" }}>
              Available for work · Open to opportunities
            </span>
          </div>

        </div>
      </section>
    </>
  );
}