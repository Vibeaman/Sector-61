import { motion } from "framer-motion";
import heroImg from "@/assets/hero-soldier.jpg";
import MatrixRain from "./MatrixRain";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Sector 61 operative" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Matrix rain */}
      <MatrixRain />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4 font-body">
            // signal detected — initializing
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold neon-text mb-6 leading-none">
            SECTOR 61
          </h1>

          <p className="text-foreground/70 max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed font-body">
            A decentralized creative ecosystem for experimental meme tokens,
            community-driven crypto culture, and digital innovation on the blockchain frontier.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="#whitepaper"
            className="glass-panel px-8 py-3 text-sm font-display font-semibold tracking-wider uppercase text-foreground hover:neon-border transition-all duration-300"
          >
            Read Whitepaper
          </a>
        </motion.div>

        {/* Community & Fund boxes */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="https://t.me/+FF702jatY7tmM2E0"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel neon-border w-72 h-28 flex flex-col items-center justify-center gap-2 hover:neon-border-strong transition-all duration-300 group"
          >
            <span className="text-2xl">📨</span>
            <span className="font-display font-semibold text-sm uppercase tracking-wider text-primary group-hover:neon-text transition-all">
              Join Telegram
            </span>
          </a>
          <a
            href="https://app.endaoment.org/funds/532bfc8e-f691-4a5a-9db0-470ac4f0e684"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel neon-border w-72 h-28 flex flex-col items-center justify-center gap-2 hover:neon-border-strong transition-all duration-300 group"
          >
            <span className="text-2xl">💚</span>
            <span className="font-display font-semibold text-sm uppercase tracking-wider text-primary group-hover:neon-text transition-all">
              Endaoment Fund
            </span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
