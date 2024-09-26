
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { PhoneCall, Handshake } from "lucide-react";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/AboutUs";

export const metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function Home() {
  return (
    <>
        <AboutUs />
        <Services />
        <Testimonials />
    </>
  );
}
