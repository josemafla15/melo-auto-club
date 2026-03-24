"use client";

import { waLink } from "@/lib/constants";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink("Hola! Quiero agendar un servicio en Melo Auto Club")}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float animate-float"
      aria-label="Contactar por WhatsApp"
    >
      <div className="wa-tooltip">¡Agéndame ya!</div>
      <WhatsAppIcon size={30} />
    </a>
  );
}