// ─── Change this to the real WhatsApp number ───────────────────────────────
// Format: country code + number, no spaces, no "+"
// Example Colombia: 573001234567
export const WA_NUMBER = "573146879157";

export function waLink(message?: string) {
  const base = `https://wa.me/${WA_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
