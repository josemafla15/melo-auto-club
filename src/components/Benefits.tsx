import { ClockIcon } from "./icons/ClockIcon";
import { ShieldIcon } from "./icons/ShieldIcon";
import { StarIcon } from "./icons/StarIcon";
import { UserIcon } from "./icons/UserIcon";
import SectionHeader from "./ui/SectionHeader";

const benefits = [
  {
    icon: <ClockIcon size={24} />,
    title: "Rápido y eficiente",
    description:
      "Optimizamos cada proceso para entregarte tu carro impecable en el menor tiempo posible. Sin sacrificar calidad.",
  },
  {
    icon: <ShieldIcon size={24} />,
    title: "100% seguro",
    description:
      "Técnicas profesionales que protegen la pintura y evitan rayones o daños. Tu inversión está en buenas manos.",
  },
  {
    icon: <StarIcon size={24} />,
    title: "Productos premium",
    description:
      "Usamos productos de alta gama para lograr más brillo, mejor acabado y mayor duración. Calidad sin compromisos.",
  },
  {
    icon: <UserIcon size={24} />,
    title: "Atención personalizada",
    description:
      "Cada carro recibe un tratamiento diferente según su estado y necesidad. Tú y tu vehículo son únicos para nosotros.",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      style={{ padding: "100px 5%", background: "var(--bg)" }}
    >
      <div className="fade-up" style={{ textAlign: "center", marginBottom: 64 }}>
        <SectionHeader
          label="¿Por qué Melo Auto Club?"
          title={
            <>
              Cuatro razones para elegir
              <br />
              el mejor cuidado para tu carro
            </>
          }
          subtitle="No somos solo un lavadero. Somos el estándar de calidad automotriz en Pasto."
          centered
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
        }}
      >
        {benefits.map((b, i) => (
          <BenefitCard key={b.title} {...b} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}

function BenefitCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <div
      className="fade-up card-top-line benefit-card"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        padding: "36px 28px",
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
        transitionDelay: `${delay}s`,
      }}
    >
      <div
        className="benefit-icon"
        style={{
          width: 52,
          height: 52,
          background: "rgba(0,174,239,0.1)",
          borderRadius: 14,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
          color: "var(--accent)",
          transition: "background 0.3s",
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: "1.1rem",
          fontWeight: 700,
          marginBottom: 10,
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.65, fontWeight: 300 }}>
        {description}
      </p>

      <style>{`
        .benefit-card:hover {
          transform: translateY(-6px);
          border-color: rgba(0,174,239,0.35) !important;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(0,174,239,0.1);
        }
        .benefit-card:hover .benefit-icon {
          background: rgba(0,174,239,0.2);
        }
      `}</style>
    </div>
  );
}
