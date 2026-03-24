interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered,
}: SectionHeaderProps) {
  return (
    <div style={{ textAlign: centered ? "center" : "left" }}>
      {/* Divider line */}
      <div
        style={{
          width: 60,
          height: 3,
          background: "var(--accent)",
          borderRadius: 2,
          marginBottom: 20,
          margin: centered ? "0 auto 20px" : "0 0 20px",
        }}
      />

      {/* Label */}
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
        {label}
      </div>

      {/* Title */}
      <h2
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
          fontWeight: 800,
          lineHeight: 1.15,
          letterSpacing: "-0.5px",
          marginBottom: subtitle ? 16 : 0,
        }}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          style={{
            fontSize: "1rem",
            color: "var(--muted)",
            lineHeight: 1.7,
            maxWidth: 520,
            fontWeight: 300,
            margin: centered ? "0 auto" : "0",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
