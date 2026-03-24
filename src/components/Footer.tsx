import { waLink } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#080B10",
        borderTop: "1px solid var(--border)",
        padding: "40px 5%",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
      }}
    >
      {/* Brand */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 32,
            height: 32,
            background: "linear-gradient(135deg, var(--accent), var(--accent2))",
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
          }}
        >
          🚗
        </div>
        <span
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 800,
            fontSize: "0.95rem",
          }}
        >
          Melo <span style={{ color: "var(--accent)" }}>Auto</span> Club
        </span>
      </div>

      {/* Copyright */}
      <p style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
        © 2025 Melo Auto Club · Pasto, Nariño, Colombia · Todos los derechos reservados.
      </p>

      {/* Links */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {[
          { href: waLink(), label: "WhatsApp", external: true },
          { href: "#services", label: "Servicios", external: false },
          { href: "#proof", label: "Opiniones", external: false },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.external ? "_blank" : undefined}
            rel={l.external ? "noopener noreferrer" : undefined}
            className="footer-link"
            style={{
              fontSize: "0.82rem",
              color: "var(--muted)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            {l.label}
          </a>
        ))}
      </div>

      <style>{`
        .footer-link:hover { color: var(--accent) !important; }
      `}</style>
    </footer>
  );
}
