import { useEffect, useRef, useState } from 'react';
import {
  Newspaper,
  FlaskConical,
  Trophy,
  Users,
  Lightbulb,
  CalendarDays,
  GraduationCap,
} from 'lucide-react';

// Scene phases: 0=intro, 1=lines, 2=icons, 3=phone, 4=loop
type Phase = 0 | 1 | 2 | 3 | 4;

const ECOSYSTEM_ICONS = [
  { Icon: Newspaper, label: 'News', angle: 30, radius: 130 },
  { Icon: FlaskConical, label: 'Research', angle: 100, radius: 145 },
  { Icon: Trophy, label: 'Achievements', angle: 165, radius: 132 },
  { Icon: Users, label: 'Community', angle: 225, radius: 148 },
  { Icon: Lightbulb, label: 'Innovation', angle: 285, radius: 138 },
  { Icon: CalendarDays, label: 'Events', angle: 340, radius: 128 },
  { Icon: GraduationCap, label: 'Education', angle: 200, radius: 115 },
];

const PHONE_CARDS = [
  {
    category: 'Featured Story',
    title: "DUNITE Startup 'Correct' Receives PM Seed Funding",
    tag: 'PM Recognition',
    accent: '#c60000',
  },
  {
    category: 'Research Highlight',
    title: 'DU Researcher Wins Global Renewable Energy Award',
    tag: 'Global',
    accent: '#ab0a0f',
  },
  {
    category: 'Community Impact',
    title: 'Volunteer Corps Crosses 10,000 Active Members',
    tag: 'Milestone',
    accent: '#6d0a0d',
  },
  {
    category: 'Achievement',
    title: 'Full Scholarship to MIT for DU Physics Graduate',
    tag: 'Scholarship',
    accent: '#c60000',
  },
  {
    category: 'University Pulse',
    title: 'Cultural Fest Unites 42 Departments Over 3 Days',
    tag: 'Culture',
    accent: '#ab0a0f',
  },
];

export default function HeroAnimation() {
  const [phase, setPhase] = useState<Phase>(0);
  const [lineIndex, setLineIndex] = useState(-1);
  const [iconsVisible, setIconsVisible] = useState(false);
  const [phoneVisible, setPhoneVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const scrollRef = useRef<number>(0);
  const rafRef = useRef<number>(0);

  // Phase timeline
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 900);
    const t2 = setTimeout(() => setPhase(2), 2400);
    const t3 = setTimeout(() => setPhase(3), 4000);
    const t4 = setTimeout(() => setPhase(4), 5800);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, []);

  // Animate lines sequentially during phase 1
  useEffect(() => {
    if (phase !== 1) return;
    const timers = [0, 300, 600].map((delay, i) =>
      setTimeout(() => setLineIndex(i), delay)
    );
    return () => timers.forEach(clearTimeout);
  }, [phase]);

  // Show icons during phase 2
  useEffect(() => {
    if (phase >= 2) setIconsVisible(true);
    if (phase >= 3) setPhoneVisible(true);
  }, [phase]);

  // Auto-scroll phone feed
  useEffect(() => {
    if (phase < 4) return;
    const speed = 0.4;
    const maxScroll = PHONE_CARDS.length * 112 - 320;

    const tick = () => {
      scrollRef.current += speed;
      if (scrollRef.current >= maxScroll) scrollRef.current = 0;
      setScrollY(scrollRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [phase]);

  return (
    <div className="hero-anim-root">
      {/* Background glow */}
      <div className="hero-anim-glow" />

      {/* Main stage */}
      <div className="hero-anim-stage">

        {/* ── PHONE (phases 3+) ── */}
        <div
          className="hero-anim-phone-wrap"
          style={{
            opacity: phoneVisible ? 1 : 0,
            transform: phoneVisible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.96)',
            transition: 'opacity 0.9s cubic-bezier(0.4,0,0.2,1), transform 0.9s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          <PhoneMockup scrollY={scrollY} phase={phase} />
        </div>

        {/* ── LOGO (phases 0–2) ── */}
        <div
          className="hero-anim-logo-wrap"
          style={{
            opacity: phase >= 3 ? 0 : 1,
            transform: phase >= 3 ? 'scale(0.85) translateY(-12px)' : 'scale(1) translateY(0)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            pointerEvents: phase >= 3 ? 'none' : 'auto',
          }}
        >
          <LogoScene phase={phase} lineIndex={lineIndex} />

          {/* Ecosystem icons */}
          {ECOSYSTEM_ICONS.map(({ Icon, label, angle, radius }, i) => {
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            return (
              <div
                key={label}
                className="hero-anim-icon"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  opacity: iconsVisible ? 0.55 : 0,
                  transform: iconsVisible
                    ? `translate(-50%, -50%) scale(1)`
                    : `translate(-50%, -50%) scale(0.5)`,
                  transition: `opacity 0.6s ease ${i * 80}ms, transform 0.6s cubic-bezier(0.4,0,0.2,1) ${i * 80}ms`,
                  animationDelay: `${i * 0.4}s`,
                }}
                title={label}
              >
                <Icon size={14} strokeWidth={1.5} />
              </div>
            );
          })}
        </div>

        {/* Floating labels under phone */}
        <div
          className="hero-anim-labels"
          style={{
            opacity: phase >= 4 ? 1 : 0,
            transition: 'opacity 0.8s ease 0.4s',
          }}
        >
          {['Stories', 'Research', 'Community', 'Innovation'].map((lbl) => (
            <span key={lbl} className="hero-anim-label-chip">{lbl}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Logo scene with animated arcs ── */
function LogoScene({ phase, lineIndex }: { phase: Phase; lineIndex: number }) {
  return (
    <div
      className="hero-anim-logo-container"
      style={{
        opacity: phase >= 1 ? 1 : 0,
        transform: phase >= 1 ? 'scale(1)' : 'scale(0.94)',
        transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      {/* Logo image */}
      <img
        src="/assets/images/4.png"
        alt="DAIN Logo"
        className="hero-anim-logo-img"
      />

      {/* SVG arc overlay — animates arcs outward */}
      {phase >= 1 && (
        <svg
          className="hero-anim-arcs"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[0, 1, 2].map((i) => (
            <circle
              key={i}
              cx="100"
              cy="100"
              r={40 + i * 20}
              stroke="#c60000"
              strokeWidth="1.2"
              strokeDasharray="251"
              strokeDashoffset="251"
              strokeLinecap="round"
              opacity={lineIndex >= i ? 0.3 : 0}
              style={{
                transition: `opacity 0.4s ease ${i * 200}ms, stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1) ${i * 200}ms`,
                strokeDashoffset: lineIndex >= i ? 0 : 251,
              }}
            />
          ))}
        </svg>
      )}
    </div>
  );
}

/* ── Phone mockup ── */
function PhoneMockup({ scrollY, phase }: { scrollY: number; phase: Phase }) {
  return (
    <div
      className="hero-anim-phone"
      style={{
        animation: phase >= 4 ? 'heroPhoneFloat 4s ease-in-out infinite' : 'none',
      }}
    >
      {/* Phone frame */}
      <div className="hero-anim-phone-frame">
        {/* Notch */}
        <div className="hero-anim-phone-notch" />

        {/* Screen */}
        <div className="hero-anim-phone-screen">
          {/* App header */}
          <div className="hero-anim-app-header">
            <div className="flex items-center gap-2">
              <img src="/assets/images/4.png" alt="DAIN" className="w-5 h-5 rounded" />
              <span className="text-[10px] font-black tracking-tight text-white">DAIN</span>
            </div>
            <div className="text-[8px] text-white/60 font-medium">University of Dhaka</div>
          </div>

          {/* Scrolling feed */}
          <div className="hero-anim-feed-viewport">
            <div
              className="hero-anim-feed-track"
              style={{ transform: `translateY(-${scrollY}px)` }}
            >
              {/* Stats strip */}
              <div className="hero-anim-stats-strip">
                {[['1.2K+', 'Stories'], ['376+', 'Research'], ['48K', 'Readers']].map(([n, l]) => (
                  <div key={l} className="hero-anim-stat-chip">
                    <div className="text-[9px] font-black text-[#c60000]">{n}</div>
                    <div className="text-[7px] text-gray-500">{l}</div>
                  </div>
                ))}
              </div>

              {/* Cards */}
              {PHONE_CARDS.map((card, i) => (
                <PhoneCard key={i} {...card} />
              ))}
              {/* Duplicate for seamless loop */}
              {PHONE_CARDS.map((card, i) => (
                <PhoneCard key={`d-${i}`} {...card} />
              ))}
            </div>
          </div>

          {/* Bottom nav */}
          <div className="hero-anim-bottom-nav">
            {['Home', 'Stories', 'Research', 'Community'].map((item, i) => (
              <div key={item} className={`hero-anim-nav-item ${i === 0 ? 'active' : ''}`}>
                <div className="hero-anim-nav-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phone glow */}
      <div className="hero-anim-phone-glow" />
    </div>
  );
}

function PhoneCard({
  category,
  title,
  tag,
  accent,
}: {
  category: string;
  title: string;
  tag: string;
  accent: string;
}) {
  return (
    <div className="hero-anim-card">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[7px] font-bold uppercase tracking-wider text-gray-400">{category}</span>
        <span
          className="text-[6px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full"
          style={{ background: `${accent}15`, color: accent }}
        >
          {tag}
        </span>
      </div>
      <p className="text-[9px] font-bold leading-tight text-gray-900 line-clamp-2">{title}</p>
      <div className="mt-2 flex items-center gap-1">
        <div className="w-3 h-3 rounded-full bg-gray-200" />
        <div className="h-1.5 w-12 rounded bg-gray-100" />
        <div className="ml-auto h-1.5 w-6 rounded bg-gray-100" />
      </div>
    </div>
  );
}
