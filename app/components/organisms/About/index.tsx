import { motion } from "motion/react";
import { usePortfolioStore } from "~/stores/portfolio.store";
export const About = () => {
  const portfolio = usePortfolioStore((state) => state.portfolio);

  return (
    <motion.section
      id="about"
      className="px-4 py-5"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="pb-3 text-2xl font-bold">About</h2>
      <p className="pb-3 pt-1 text-base text-white/90">{portfolio?.about}</p>
    </motion.section>
  );
};
