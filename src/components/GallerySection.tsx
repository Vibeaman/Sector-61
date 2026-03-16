import { motion } from "framer-motion";
import streetImg from "@/assets/street-exchange.jpg";
import droneImg from "@/assets/drone-crate.jpg";
import radarImg from "@/assets/hero-radar.jpg";
import landscapeImg from "@/assets/landscape.jpg";

const images = [
  { src: streetImg, alt: "Sector 61 field exchange", span: "md:col-span-2 md:row-span-2" },
  { src: droneImg, alt: "Sector 61 supply drop", span: "" },
  { src: radarImg, alt: "Signal detection", span: "" },
  { src: landscapeImg, alt: "Network terrain", span: "md:col-span-2" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="relative py-24 grid-bg">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2 font-body">
            // media
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Project <span className="neon-text">Gallery</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`scanline-overlay overflow-hidden neon-border group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover min-h-[200px] transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
