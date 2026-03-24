import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import SocialProof from "@/components/SocialProof";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollAnimator from "@/components/ScrollAnimator";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Benefits />
        <Services />
        <SocialProof />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
      {/* Activates .fade-up elements on scroll */}
      <ScrollAnimator />
    </>
  );
}