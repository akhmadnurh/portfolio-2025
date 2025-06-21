import { motion } from "motion/react";
export const About = () => (
  <motion.section
    id="about"
    className="px-4 py-5"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="pb-3 text-2xl font-bold">About</h2>
    <p className="pb-3 pt-1 text-base text-white/90">
      I am a software engineer with 5+ years of experience in developing and
      deploying scalable applications. My expertise includes Java, Python,
      React, and cloud platforms like Cloud Services and Cloud Platform. I am
      passionate about solving complex problems and creating impactful software
      solutions.
    </p>
  </motion.section>
);
