import { motion } from "framer-motion";
import tacticalImg from "@/assets/tactical-hud.jpg";

const WhitepaperSection = () => {
  return (
    <section id="whitepaper" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2 font-body">
              // documentation
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              The <span className="neon-text">Whitepaper</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-md">
              Dive deep into the Sector 61 protocol architecture, tokenomics model,
              governance framework, and the roadmap for decentralized experimentation.
            </p>
            <a
              href="#"
              className="inline-block glass-panel px-8 py-3 text-sm font-display font-semibold tracking-wider uppercase text-primary hover:neon-border transition-all duration-300"
            >
              Download Whitepaper ↓
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="neon-border overflow-hidden"
          >
            <img src={tacticalImg} alt="Sector 61 tactical HUD" className="w-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhitepaperSection;
