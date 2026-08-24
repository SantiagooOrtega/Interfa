"use client";

import { useState } from "react";

/* ─── Data ─────────────────────────────────────────────── */

const featuredApps = [
  {
    id: 1,
    tag: "ESSENTIALS",
    title: "Change Your Word View",
    subtitle: "Microsoft Word · Create a Resume",
    gradient: "linear-gradient(135deg, #1a6cf6 0%, #0ea5e9 100%)",
    emoji: "💼",
    accentBg: "#1e3a8a",
  },
  {
    id: 2,
    tag: "OUR FAVORITES",
    title: "A New Way to Play Classic Games",
    subtitle: "Apple Arcade · Game Room",
    gradient: "linear-gradient(135deg, #f97316 0%, #ec4899 100%)",
    emoji: "♟️",
    accentBg: "#7c2d12",
  },
  {
    id: 3,
    tag: "TRY NOW",
    title: "Get Behind the Wheel of an F1 Car",
    subtitle: "JigSpace · Unforgettable 3D",
    gradient: "linear-gradient(135deg, #7f1d1d 0%, #1c1917 100%)",
    emoji: "🏎️",
    accentBg: "#450a0a",
  },
  {
    id: 4,
    tag: "INCREDIBLE INDIE",
    title: "Search for Clues in Blackbox",
    subtitle: "Blackbox · Think outside the...",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
    emoji: "🔮",
    accentBg: "#2e1065",
  },
];

const appRows = [
  {
    id: 1,
    name: "Rec Room",
    desc: "Play & Create Games with Friends",
    badge: "In-App Purchases",
    bg: "linear-gradient(135deg, #ef4444, #f97316)",
    emoji: "🎮",
  },
  {
    id: 2,
    name: "Complete HeartX",
    desc: "Hands-on medical learning",
    badge: "In-App Purchases",
    bg: "linear-gradient(135deg, #ec4899, #f43f5e)",
    emoji: "❤️",
  },
  {
    id: 3,
    name: "Simply Piano",
    desc: "Learn Songs Today",
    badge: "",
    bg: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    emoji: "🎹",
  },
];

/* ─── Icons ─────────────────────────────────────────────── */

const IconStore = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 01-8 0"/>
  </svg>
);

const IconStar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

/* ─── Sub-components ───────────────────────────────────── */

function SidebarIcon({ children, active = false }: { children: React.ReactNode; active?: boolean }) {
  return (
    <button className={`sidebar-icon${active ? " active" : ""}`}>{children}</button>
  );
}

function FeaturedCard({ app, index }: { app: typeof featuredApps[0]; index: number }) {
  return (
    <div
      className="featured-card"
      style={{
        width: 155,
        height: 215,
        borderRadius: 18,
        background: app.gradient,
        border: "1px solid rgba(255,255,255,0.2)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
        cursor: "pointer",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
    >
      {/* Glass shine overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "50%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, transparent 100%)",
          borderRadius: "18px 18px 0 0",
          pointerEvents: "none",
        }}
      />
      {/* emoji illustration */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 52,
          filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.4))",
          userSelect: "none",
        }}
      >
        {app.emoji}
      </div>
      {/* bottom overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "10px 12px",
          background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
          borderRadius: "0 0 18px 18px",
        }}
      >
        <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.08em", color: "rgba(255,255,255,0.65)", marginBottom: 4, textTransform: "uppercase" }}>
          {app.tag}
        </p>
        <p style={{ fontSize: 12, fontWeight: 700, color: "white", lineHeight: 1.3, marginBottom: 8 }}>
          {app.title}
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <p style={{ fontSize: 9, color: "rgba(255,255,255,0.55)", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginRight: 6 }}>
            {app.subtitle}
          </p>
          <button className="get-btn">GET</button>
        </div>
      </div>
    </div>
  );
}

function AppRowItem({ app }: { app: typeof appRows[0] }) {
  return (
    <div
      className="app-row"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 12px",
        borderRadius: 14,
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: app.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          flexShrink: 0,
          boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        {app.emoji}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ color: "white", fontSize: 13, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {app.name}
        </p>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {app.desc}
        </p>
        {app.badge && (
          <p style={{ color: "rgba(255,255,255,0.28)", fontSize: 10, marginTop: 1 }}>{app.badge}</p>
        )}
      </div>
      <button className="get-btn" style={{ flexShrink: 0 }}>GET</button>
    </div>
  );
}

/* ─── Main Page ────────────────────────────────────────── */

export default function Home() {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <main
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif",
      }}
    >
      {/* ══ BACKGROUND VATGRAUND ══════════════════════════ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #e8e0d4 0%, #d5c9b8 30%, #c8bba6 60%, #b8ab98 100%)",
        }}
      />
      {/* Warm room atmosphere overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,240,220,0.7) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 20% 80%, rgba(200,180,160,0.5) 0%, transparent 50%),
            radial-gradient(ellipse 50% 50% at 80% 90%, rgba(180,160,140,0.4) 0%, transparent 50%)
          `,
        }}
      />
      {/* Room details — subtle architectural lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
          opacity: 0.3,
        }}
      />

      {/* ══ ANIMATED GLASS BLOBS ════════════════════════ */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div
          className="blob1"
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
            top: -100,
            left: -80,
            filter: "blur(60px)",
          }}
        />
        <div
          className="blob2"
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
            bottom: -60,
            right: -60,
            filter: "blur(70px)",
          }}
        />
        <div
          className="blob3"
          style={{
            position: "absolute",
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)",
            top: "35%",
            right: "15%",
            filter: "blur(50px)",
          }}
        />
        {/* warm ambient blob */}
        <div
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(251,191,36,0.15) 0%, transparent 70%)",
            top: "20%",
            left: "30%",
            filter: "blur(50px)",
            animation: "float3 20s ease-in-out infinite",
          }}
        />
      </div>

      {/* ══ MAIN LAYOUT ═════════════════════════════════ */}
      <div style={{ position: "relative", zIndex: 10, display: "flex", gap: 12, alignItems: "stretch", maxWidth: 900, width: "100%", padding: "0 16px" }}>

        {/* ── SIDEBAR ─────────────────────────────────── */}
        <div
          className="glass-sidebar"
          style={{
            borderRadius: 28,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "22px 10px",
            gap: 14,
            width: 64,
            flexShrink: 0,
          }}
        >
          <SidebarIcon active><IconStore /></SidebarIcon>
          <SidebarIcon><IconStar /></SidebarIcon>
          <SidebarIcon><IconSearch /></SidebarIcon>
          <div style={{ flex: 1 }} />
          {/* Avatar */}
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
              fontWeight: 700,
              color: "white",
              border: "2px solid rgba(255,255,255,0.35)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
            }}
          >
            U
          </div>
        </div>

        {/* ── GLASS PANEL ─────────────────────────────── */}
        <div
          className="glass-panel"
          style={{
            borderRadius: 28,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            minWidth: 0,
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px 8px" }}>
            <h2 style={{ color: "white", fontSize: 17, fontWeight: 700, letterSpacing: "-0.3px" }}>
              Get Started <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 15 }}>›</span>
            </h2>
            {/* dot pagination */}
            <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveDot(i)}
                  style={{
                    height: 6,
                    width: activeDot === i ? 18 : 6,
                    borderRadius: 3,
                    background: activeDot === i ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.35)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: 0,
                  }}
                  aria-label={`Página ${i + 1}`}
                />
              ))}
            </div>
            {/* user avatar */}
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #f093fb, #f5576c)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
                fontWeight: 700,
                color: "white",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              S
            </div>
          </div>

          {/* Featured cards */}
          <div
            className="no-scrollbar"
            style={{
              display: "flex",
              gap: 12,
              padding: "10px 24px 14px",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
            }}
          >
            {featuredApps.map((app, i) => (
              <div key={app.id} style={{ scrollSnapAlign: "start" }}>
                <FeaturedCard app={app} index={i} />
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ margin: "0 24px 8px", height: 1, background: "rgba(255,255,255,0.12)" }} />

          {/* Section title */}
          <div style={{ padding: "6px 24px 8px" }}>
            <h3 style={{ color: "white", fontSize: 15, fontWeight: 600 }}>
              Apps and Games We Love <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>›</span>
            </h3>
          </div>

          {/* App rows */}
          <div style={{ display: "flex", flexDirection: "column", padding: "0 12px 12px" }}>
            {appRows.map((app) => (
              <AppRowItem key={app.id} app={app} />
            ))}
          </div>

          {/* Bottom dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 5, paddingBottom: 16 }}>
            {[0, 1].map((i) => (
              <div
                key={i}
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: i === 0 ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.25)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
