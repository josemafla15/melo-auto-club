import { waLink } from "@/lib/constants";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

export default function CtaFinal() {
  return (
    <section
      id="cta"
      style={{
        background: "linear-gradient(135deg, var(--bg2) 0%, var(--bg) 100%)",
        textAlign: "center",
        padding: "120px 5%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(0,174,239,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="fade-up" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 14,
          }}
        >
          Última llamada
        </div>

        <h2
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: 20,
            letterSpacing: "-0.5px",
          }}
        >
          Dale a tu carro
          <br />
          el cuidado que merece
        </h2>

        <p
          style={{
            fontSize: "1.1rem",
            color: "var(--muted)",
            marginBottom: 48,
            fontWeight: 300,
            fontStyle: "italic",
          }}
        >
          &ldquo;No es solo limpieza… es una transformación.&rdquo;
        </p>

        <a
          href={waLink("Hola! Quiero agendar un servicio en Melo Auto Club")}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-glow-pulse cta-main-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "20px 48px",
            background: "var(--accent)",
            color: "#fff",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 800,
            fontSize: "1.05rem",
            letterSpacing: "0.5px",
            border: "none",
            borderRadius: 50,
            cursor: "pointer",
            textDecoration: "none",
            transition: "all 0.25s",
          }}
        >
          <WhatsAppIcon size={22} />
          Agenda ahora por WhatsApp
        </a>

        <p
          style={{
            marginTop: 20,
            fontSize: "0.82rem",
            color: "var(--muted)",
          }}
        >
          Respuesta inmediata · Cupos limitados · Pasto, Colombia
        </p>
      </div>

      <style>{`
        .cta-main-btn:hover {
          background: var(--accent2) !important;
          transform: translateY(-3px);
          box-shadow: 0 20px 60px rgba(0,174,239,0.5) !important;
        }
      `}</style>
    </section>
  );
}
