import { motion } from "motion/react";
export const Educations = () => (
  <motion.section
    id="education"
    className="px-4 py-5"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="pb-3 text-2xl font-bold">Education</h2>
    <div className="flex flex-col md:flex-row justify-between gap-4 rounded-lg p-4 bg-[#2a2a2a]">
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-base font-medium">State University</p>
        <p className="text-sm text-[#adadad] mt-1">
          Bachelor of Science in Computer Science
        </p>
        <p className="text-sm text-[#adadad] mt-1">GPA: 3.8</p>
      </div>
      <div className="shrink-0 mt-2 md:mt-0">
        <p className="text-sm text-[#adadad]">2015 - 2019</p>
      </div>
    </div>
  </motion.section>
);
