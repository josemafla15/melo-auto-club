import Image from "next/image";
import { ImagePlaceholderIcon } from "./icons/ImagePlaceholderIcon";
import SectionHeader from "./ui/SectionHeader";

const testimonials = [
  {
    initials: "JR",
    name: "Juan Rosero",
    sub: "Pasto, Nariño · Lavado Premium",
    text: "Quedé sorprendido, parece otro carro completamente. Nunca pensé que un lavado pudiera hacer tanta diferencia. Vale cada peso.",
  },
  {
    initials: "AC",
    name: "Adriana Cortés",
    sub: "Pasto, Nariño · Detailing Profesional",
    text: "El mejor servicio en Pasto, muy detallistas con cada parte del carro. Se nota que usan buenos productos y tienen experiencia real.",
  },
  {
    initials: "CM",
    name: "Carlos Melo",
    sub: "Pasto, Nariño · Lavado Premium",
    text: "Vale totalmente la pena, calidad premium de verdad. Mi camioneta quedó impecable por dentro y por fuera. Ya los recomendé a toda mi familia.",
  },
];

export default function SocialProof() {
  return (
    <section
      id="proof"
      style={{ padding: "100px 5%", background: "var(--bg)" }}
    >
      <div className="fade-up" style={{ textAlign: "center", marginBottom: 60 }}>
        <SectionHeader
          label="Resultados reales"
          title={
            <>
              Antes y después.
              <br />
              La transformación habla sola.
            </>
          }
          subtitle="Cada vehículo que pasa por Melo Auto Club sale como nuevo. Aquí lo comprobamos."
          centered
        />
      </div>

      {/* Before / After */}
      <div
        className="fade-up"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
          marginBottom: 64,
        }}
      >
        <BeforeAfterCard beforeSrc="/antes.jpg" afterSrc="/despues.jpg" />
        <BeforeAfterCard beforeSrc="/antes2.png" afterSrc="/despues2.png" />
      </div>

      {/* Testimonials */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
        }}
      >
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.name} {...t} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}

function BeforeAfterCard({
  beforeSrc,
  afterSrc,
}: {
  beforeSrc?: string;
  afterSrc?: string;
}) {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 4,
          borderRadius: "var(--radius)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Before */}
        <div
          style={{
            aspectRatio: "4/3",
            background: "var(--card)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            color: "#3a4050",
            fontSize: "0.85rem",
            fontWeight: 500,
          }}
        >
          {beforeSrc ? (
            <Image
              src={beforeSrc}
              alt="Antes del lavado"
              fill
              style={{ objectFit: "cover" }}
            />
          ) : (
            <>
              <ImagePlaceholderIcon size={40} />
              <span>Imagen aquí</span>
            </>
          )}
          <span
            style={{
              position: "absolute",
              bottom: 14,
              left: 14,
              padding: "5px 12px",
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(8px)",
              borderRadius: 50,
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "#ff6b6b",
              zIndex: 2,
            }}
          >
            Antes
          </span>
        </div>

        {/* After */}
        <div
          style={{
            aspectRatio: "4/3",
            background: "var(--card)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            color: "#3a4050",
            fontSize: "0.85rem",
            fontWeight: 500,
          }}
        >
          {afterSrc ? (
            <Image
              src={afterSrc}
              alt="Después del lavado"
              fill
              style={{ objectFit: "cover" }}
            />
          ) : (
            <>
              <ImagePlaceholderIcon size={40} />
              <span>Imagen aquí</span>
            </>
          )}
          <span
            style={{
              position: "absolute",
              bottom: 14,
              left: 14,
              padding: "5px 12px",
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(8px)",
              borderRadius: 50,
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "var(--accent)",
              zIndex: 2,
            }}
          >
            Después
          </span>
        </div>

        {/* Center divider */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 36,
            height: 36,
            background: "var(--bg)",
            border: "2px solid var(--border)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 5,
            fontSize: "0.75rem",
            color: "var(--muted)",
            fontWeight: 700,
          }}
        >
          ↔
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({
  initials,
  name,
  sub,
  text,
  delay,
}: (typeof testimonials)[0] & { delay: number }) {
  return (
    <div
      className="fade-up testimonial-card"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        padding: "32px 28px",
        transition: "transform 0.3s, box-shadow 0.3s",
        transitionDelay: `${delay}s`,
      }}
    >
      <div style={{ color: "#FFB800", fontSize: "1rem", letterSpacing: 2, marginBottom: 16 }}>
        ★★★★★
      </div>
      <p
        style={{
          fontSize: "0.95rem",
          color: "var(--text)",
          lineHeight: 1.7,
          fontStyle: "italic",
          marginBottom: 20,
          fontWeight: 300,
        }}
      >
        &ldquo;{text}&rdquo;
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 40,
            height: 40,
            background: "linear-gradient(135deg, var(--accent), var(--accent2))",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 800,
            fontSize: "0.85rem",
            color: "#fff",
            flexShrink: 0,
          }}
        >
          {initials}
        </div>
        <div>
          <div style={{ fontSize: "0.9rem", fontWeight: 700 }}>{name}</div>
          <div style={{ fontSize: "0.78rem", color: "var(--muted)" }}>{sub}</div>
        </div>
      </div>

      <style>{`
        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 50px rgba(0,0,0,0.4);
        }
      `}</style>
    </div>
  );
}