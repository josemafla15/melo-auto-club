import { waLink } from "@/lib/constants";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import Image from "next/image";

const stats = [
  { number: "500+", label: "Vehículos atendidos" },
  { number: "4.9★", label: "Calificación promedio" },
  { number: "3+", label: "Años de experiencia" },
  { number: "100%", label: "Clientes satisfechos" },
];

const perks = [
  "Cupos limitados por día",
  "Atención sin filas",
  "Servicio personalizado",
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "60px 5% 80px",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(0,130,200,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 20% 80%, rgba(0,174,239,0.06) 0%, transparent 60%), linear-gradient(160deg, #0B0F14 0%, #0F1C2E 60%, #0B0F14 100%)",
        }}
      />
      <div className="hero-grid" style={{ position: "absolute", inset: 0 }} />

      {/* Two-column responsive grid */}
      <div
        className="hero-layout"
        style={{ position: "relative", zIndex: 2, width: "100%" }}
      >
        {/* Left — text content */}
        <div className="hero-content-col">

          {/* Badge — simplified, location only */}
          <div
            className="hero-animate-1"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 14px",
              background: "rgba(0,174,239,0.08)",
              border: "0.5px solid rgba(0,174,239,0.25)",
              borderRadius: 50,
              fontSize: "0.72rem",
              fontWeight: 500,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                background: "var(--accent)",
                borderRadius: "50%",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            Pasto, Colombia
          </div>

          {/* Eyebrow */}
          <div
            className="hero-animate-1"
            style={{
              fontSize: "0.72rem",
              fontWeight: 600,
              color: "var(--accent)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Lavado &amp; Detailing
          </div>

          {/* Title — Bebas Neue for drama */}
          <h1
            className="hero-animate-2"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3.8rem, 8vw, 6.5rem)",
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: "0.02em",
              marginBottom: 20,
              color: "#fff",
            }}
          >
            Tu carro
            <br />
            no necesita
            <br />
            un lavado.
            <br />
            <span style={{ color: "var(--accent)" }}>
              Necesita
              <br />
              nivel premium.
            </span>
          </h1>

          {/* Divider */}
          <div
            className="hero-animate-3"
            style={{
              width: 32,
              height: 2,
              background: "var(--accent)",
              opacity: 0.6,
              borderRadius: 2,
              margin: "20px 0",
            }}
          />

          {/* Subtitle */}
          <p
            className="hero-animate-3"
            style={{
              fontSize: "clamp(0.9rem, 1.8vw, 1rem)",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.75,
              marginBottom: 36,
              maxWidth: 480,
              fontWeight: 300,
            }}
          >
            En{" "}
            <span style={{ color: "rgba(255,255,255,0.75)", fontWeight: 400 }}>
              Melo Auto Club
            </span>{" "}
            llevamos tu vehículo a otro nivel con lavado y detailing profesional
            en Pasto. Resultados que se notan desde la primera visita.
          </p>

          {/* Single CTA — no duplicate floating button */}
          <div
            className="hero-animate-4"
            style={{ marginBottom: 12 }}
          >
            <a
              href={waLink("Hola! Quiero agendar un servicio en Melo Auto Club")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-hero"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "16px 32px",
                background: "var(--accent)",
                color: "#000",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "0.88rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                border: "none",
                borderRadius: 50,
                cursor: "pointer",
                textDecoration: "none",
                transition: "all 0.25s",
              }}
            >
              <WhatsAppIcon size={18} />
              Agendar por WhatsApp
            </a>
          </div>

          {/* Microcopy under CTA — reduces friction */}
          <p
            className="hero-animate-4"
            style={{
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.06em",
              marginBottom: 40,
              paddingLeft: 4,
            }}
          >
            Respuesta en menos de 10 min · Sin costo
          </p>

          {/* Perks */}
          <div
            className="hero-animate-5"
            style={{
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.4)",
              display: "flex",
              flexWrap: "wrap",
              gap: "6px 20px",
              marginBottom: 48,
            }}
          >
            {perks.map((item) => (
              <span
                key={item}
                style={{ display: "flex", alignItems: "center", gap: 6 }}
              >
                <span style={{ color: "var(--accent)", fontSize: "0.55rem" }}>
                  ✦
                </span>
                {item}
              </span>
            ))}
          </div>

          {/* Stats bar */}
          <div
            className="fade-up"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              borderRadius: "var(--radius)",
              overflow: "hidden",
            }}
          >
            {stats.map((s) => (
              <div
                key={s.number}
                style={{
                  flex: "1 1 90px",
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  padding: "18px 14px",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "2rem",
                    fontWeight: 400,
                    color: "#fff",
                    display: "block",
                    letterSpacing: "0.02em",
                    lineHeight: 1,
                  }}
                >
                  {s.number}
                </span>
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "rgba(255,255,255,0.35)",
                    marginTop: 6,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div className="hero-visual-col">
          <div
            className="animate-float hero-visual-box"
            style={{
              width: "100%",
              aspectRatio: "4/3",
              borderRadius: "var(--radius)",
              background: "var(--card)",
              border: "1px solid var(--border)",
              overflow: "hidden",
              position: "relative",
              boxShadow:
                "0 40px 80px rgba(0,0,0,0.6), 0 0 80px rgba(0,174,239,0.08)",
            }}
          >
            <Image
              src="/hero2.jpg"
              alt="Auto detailing Melo Auto Club"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            {/* Subtle blue vignette over image */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(0,174,239,0.08) 0%, transparent 60%), linear-gradient(0deg, rgba(11,15,20,0.5) 0%, transparent 50%)",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

        .hero-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        @media (max-width: 900px) {
          .hero-layout {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .hero-visual-col {
            order: -1;
          }
        }

        .btn-primary-hero:hover {
          background: var(--accent2, #00d0ff) !important;
          color: #000 !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0,174,239,0.4);
        }
      `}</style>
    </section>
  );
}