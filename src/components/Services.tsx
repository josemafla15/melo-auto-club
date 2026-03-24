import { waLink } from "@/lib/constants";
import SectionHeader from "./ui/SectionHeader";

const services = [
  {
    tag: "Básico",
    hot: false,
    title: "Lavado básico",
    price: "$70.000",
    description:
      "Limpieza exterior + aspirado interior. Ideal para mantenimiento regular de tu vehículo.",
    features: [
      "Lavado exterior completo",
      "Aspirado de interior",
      "Limpieza de vidrios",
      "Secado a mano",
    ],
    waMessage: "Hola! Quiero agendar el Lavado Básico ($70.000)",
  },
  {
    tag: "⭐ Más popular",
    hot: true,
    title: "Lavado premium",
    price: "$120.000",
    description:
      "Limpieza profunda interior y exterior + acabados detallados. Más brillo, más detalle, mejor presentación.",
    features: [
      "Todo lo del plan básico",
      "Limpieza profunda de interior",
      "Brillo en llantas y rines",
      "Aplicación de cera protectora",
      "Aromatización interior",
    ],
    waMessage: "Hola! Quiero agendar el Lavado Premium ($120.000)",
  },
  {
    tag: "Élite",
    hot: false,
    title: "Detailing profesional",
    price: "$200.000",
    description:
      "Restauración completa: pulido, eliminación de imperfecciones y protección de pintura. Acabado tipo concesionario.",
    features: [
      "Todo lo del plan premium",
      "Pulido de pintura",
      "Eliminación de imperfecciones",
      "Protección cerámica",
      "Acabado tipo concesionario",
    ],
    waMessage: "Hola! Quiero agendar el Detailing Profesional ($200.000)",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "100px 5%",
        background:
          "linear-gradient(160deg, var(--bg) 0%, var(--bg2) 50%, var(--bg) 100%)",
      }}
    >
      <div className="fade-up" style={{ textAlign: "center", marginBottom: 60 }}>
        <SectionHeader
          label="Nuestros servicios"
          title={
            <>
              Elige el plan ideal
              <br />
              para tu vehículo
            </>
          }
          subtitle="Desde mantenimiento básico hasta restauración completa. Todos nuestros servicios incluyen garantía de satisfacción."
          centered
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {services.map((s, i) => (
          <ServiceCard key={s.title} {...s} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({
  tag,
  hot,
  title,
  price,
  description,
  features,
  waMessage,
  delay,
}: (typeof services)[0] & { delay: number }) {
  return (
    <div
      className={`fade-up service-card ${hot ? "service-featured" : ""}`}
      style={{
        background: hot
          ? "linear-gradient(135deg, #1C1F26 60%, rgba(0,174,239,0.06))"
          : "var(--card)",
        border: `1px solid ${hot ? "rgba(0,174,239,0.4)" : "var(--border)"}`,
        borderRadius: "var(--radius)",
        padding: "40px 32px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
        transitionDelay: `${delay}s`,
      }}
    >
      {/* Tag */}
      <div
        style={{
          display: "inline-block",
          padding: "4px 12px",
          background: hot ? "rgba(0,174,239,0.2)" : "rgba(0,174,239,0.12)",
          border: `1px solid ${hot ? "rgba(0,174,239,0.4)" : "var(--border)"}`,
          borderRadius: 50,
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "1px",
          textTransform: "uppercase" as const,
          color: "var(--accent)",
          marginBottom: 20,
          width: "fit-content",
        }}
      >
        {tag}
      </div>

      <h3
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: "1.35rem",
          fontWeight: 800,
          marginBottom: 10,
        }}
      >
        {title}
      </h3>

      <div
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: "2.2rem",
          fontWeight: 900,
          color: "var(--accent)",
          marginBottom: 16,
          letterSpacing: "-1px",
        }}
      >
        {price}{" "}
        <span style={{ fontSize: "1rem", fontWeight: 400, color: "var(--muted)" }}>
          COP
        </span>
      </div>

      <p
        style={{
          fontSize: "0.9rem",
          color: "var(--muted)",
          lineHeight: 1.65,
          fontWeight: 300,
          flex: 1,
          marginBottom: 28,
        }}
      >
        {description}
      </p>

      <ul style={{ listStyle: "none", marginBottom: 28 }}>
        {features.map((f) => (
          <li
            key={f}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: "0.85rem",
              color: "var(--muted)",
              padding: "6px 0",
              borderBottom: "1px solid rgba(255,255,255,0.04)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                background: "var(--accent)",
                borderRadius: "50%",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            {f}
          </li>
        ))}
      </ul>

      <a
        href={waLink(waMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-service ${hot ? "btn-service-hot" : ""}`}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          padding: 14,
          background: hot ? "var(--accent)" : "transparent",
          border: "1px solid rgba(0,174,239,0.35)",
          borderRadius: 50,
          color: hot ? "#fff" : "var(--accent)",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
          fontSize: "0.85rem",
          letterSpacing: "0.5px",
          cursor: "pointer",
          textDecoration: "none",
          transition: "all 0.25s",
        }}
      >
        Agendar este plan →
      </a>

      <style>{`
        .service-card:hover {
          transform: translateY(-8px);
          border-color: rgba(0,174,239,0.5) !important;
          box-shadow: 0 24px 70px rgba(0,0,0,0.5), 0 0 40px rgba(0,174,239,0.12);
        }
        .btn-service:hover {
          background: var(--accent) !important;
          color: #fff !important;
          border-color: var(--accent) !important;
          box-shadow: 0 8px 30px rgba(0,174,239,0.3);
        }
        .btn-service-hot:hover {
          background: var(--accent2) !important;
          box-shadow: 0 8px 30px rgba(0,174,239,0.4) !important;
        }
      `}</style>
    </div>
  );
}
