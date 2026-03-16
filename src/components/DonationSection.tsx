import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Click Donate", desc: "Hit the Donate button to begin.", icon: "▶" },
  { num: "02", title: "Redirect to Endaoment", desc: "You're sent to the Endaoment fund page.", icon: "↗" },
  { num: "03", title: "Wallet Generated", desc: "Endaoment creates a temporary wallet address.", icon: "⬡" },
  { num: "04", title: "Send Crypto", desc: "Transfer any supported crypto to the wallet.", icon: "◈" },
  { num: "05", title: "Confirmed", desc: "After blockchain confirmation, your donation appears in the fund.", icon: "✓" },
];

const DonationSection = () => {
  return (
    <section id="donations" className="relative py-24 grid-bg">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2 font-body">
            // donation flow
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            How <span className="neon-text">Donations</span> Work
          </h2>
          <p className="text-muted-foreground text-sm mt-4 max-w-xl mx-auto">
            Transparent, on-chain giving through Endaoment — a 501(c)(3) nonprofit.
          </p>
        </motion.div>

        {/* Step flow */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex items-center mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                <div className="glass-panel p-5 hover:neon-border transition-all duration-300 inline-block text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-primary text-lg">{step.icon}</span>
                    <span className="text-xs text-primary font-body tracking-wider">{step.num}</span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider mb-1">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-xs">{step.desc}</p>
                </div>
              </div>

              {/* Center dot */}
              <div className="hidden md:flex w-4 h-4 rounded-full bg-primary shadow-[var(--neon-glow)] z-10 shrink-0" />

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://app.endaoment.org/funds/532bfc8e-f691-4a5a-9db0-470ac4f0e684"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-3 bg-primary text-primary-foreground font-display font-semibold text-sm uppercase tracking-wider hover:shadow-[var(--neon-glow-strong)] transition-all duration-300"
          >
            Donate Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationSection;
