import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Melo Auto Club — Lavado & Detailing Premium en Pasto",
  description:
    "Lavado y detailing profesional en Pasto, Colombia. Resultados que se notan desde la primera visita. Agenda por WhatsApp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
