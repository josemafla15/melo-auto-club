"use client";

import Link from "next/link";
import { waLink } from "@/lib/constants";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 5%",
        background: "rgba(11,15,20,0.85)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            width: 40,
            height: 40,
            background: "linear-gradient(135deg, var(--accent), var(--accent2))",
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
          }}
        >
          🚗
        </div>
        <span
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 800,
            fontSize: "1.1rem",
            color: "var(--text)",
          }}
        >
          Melo{" "}
          <span style={{ color: "var(--accent)" }}>Auto</span>{" "}
          Club
        </span>
      </Link>

      {/* Links — hidden on mobile via CSS */}
      <ul
        className="nav-links-list"
        style={{
          display: "flex",
          gap: 28,
          listStyle: "none",
        }}
      >
        {[
          { href: "#benefits", label: "Beneficios" },
          { href: "#services", label: "Servicios" },
          { href: "#proof", label: "Opiniones" },
        ].map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              style={{
                color: "var(--muted)",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--muted)")
              }
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a
        href={waLink("Hola! Quiero agendar un servicio en Melo Auto Club")}
        target="_blank"
        rel="noopener noreferrer"
        className="nav-cta-btn"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 20px",
          background: "var(--accent)",
          color: "#fff",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
          fontSize: "0.82rem",
          letterSpacing: "0.5px",
          border: "none",
          borderRadius: 50,
          cursor: "pointer",
          textDecoration: "none",
          transition: "background 0.2s, box-shadow 0.2s, transform 0.15s",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.background = "var(--accent2)";
          el.style.boxShadow = "0 0 24px var(--glow)";
          el.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.background = "var(--accent)";
          el.style.boxShadow = "none";
          el.style.transform = "none";
        }}
      >
        <WhatsAppIcon size={16} />
        Agendar ahora
      </a>

      {/* Mobile-only styles */}
      <style>{`
        @media (max-width: 768px) {
          .nav-links-list { display: none !important; }
          .nav-cta-btn span { display: none; }
        }
      `}</style>
    </nav>
  );
}
