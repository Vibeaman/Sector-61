import { motion } from "framer-motion";
import logoImg from "@/assets/sector61-logo.jpg";

const aboutItems = [
  {
    title: "Meme Token Lab",
    desc: "Experimental token launches pushing the boundaries of crypto culture and community economics.",
  },
  {
    title: "Web3 Culture",
    desc: "A movement of builders, degens, and dreamers shaping the decentralized frontier.",
  },
  {
    title: "Decentralized Community",
    desc: "No central authority. Community-governed experiments in digital creativity and finance.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 grid-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="neon-border overflow-hidden">
              <img src={logoImg} alt="Sector 61 emblem" className="w-full aspect-square object-cover" />
            </div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.p
              className="text-xs tracking-[0.3em] uppercase text-primary mb-2 font-body"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              // about
            </motion.p>
            <motion.h2
              className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What is <span className="neon-text">Sector 61</span>?
            </motion.h2>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {aboutItems.map((a) => (
                <motion.div
                  key={a.title}
                  variants={item}
                  className="glass-panel p-5 hover:neon-border transition-all duration-300"
                >
                  <h3 className="font-display font-semibold text-primary mb-1 text-sm uppercase tracking-wider">
                    {a.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
