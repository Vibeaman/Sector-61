import { motion } from "framer-motion";
import radarImg from "@/assets/hero-radar.jpg";
import landscapeImg from "@/assets/landscape.jpg";

const ecosystemItems = [
  {
    title: "Community Tokens",
    desc: "Launch and trade experimental tokens born from the community's collective imagination.",
    icon: "⬡",
  },
  {
    title: "Creative Experiments",
    desc: "Art, memes, and digital artifacts — every experiment fuels the Sector 61 economy.",
    icon: "◈",
  },
  {
    title: "Digital Economy",
    desc: "Building infrastructure for a self-sustaining decentralized creative economy.",
    icon: "⟐",
  },
  {
    title: "Charitable Impact",
    desc: "Transparent crypto donations through Endaoment powering real-world change.",
    icon: "◉",
  },
];

const EcosystemSection = () => {
  return (
    <section id="ecosystem" className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <img src={landscapeImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2 font-body">
            // ecosystem
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            The <span className="neon-text">Vision</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {ecosystemItems.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-6 hover:neon-border transition-all duration-300 group"
            >
              <span className="text-2xl text-primary mb-3 block group-hover:animate-pulse-neon">
                {e.icon}
              </span>
              <h3 className="font-display font-semibold text-foreground mb-2 text-sm uppercase tracking-wider">
                {e.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{e.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Featured image */}
        <motion.div
          className="mt-12 neon-border overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={radarImg} alt="Sector 61 tactical radar" className="w-full h-64 md:h-80 object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemSection;
