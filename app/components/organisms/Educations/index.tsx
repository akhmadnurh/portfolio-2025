import { motion } from "motion/react";
import { usePortfolioStore } from "~/stores/portfolio.store";
export const Educations = () => {
  const portfolio = usePortfolioStore((state) => state.portfolio);

  return (
    <motion.section
      id="education"
      className="px-4 py-5"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="pb-3 text-2xl font-bold">Education</h2>
      {portfolio.educations?.map((education, index) => (
        <div
          className="flex flex-col md:flex-row justify-between gap-4 mb-4 rounded-lg p-4 bg-[#2a2a2a] hover:bg-[#4a4a4a]"
          key={`education-${index + 1}`}
        >
          <div className="flex flex-1 flex-col justify-center">
            <p className="text-base font-medium">{education.place}</p>
            <p className="text-sm text-[#adadad] mt-1">{education.degree}</p>
            <p className="text-sm text-[#adadad] mt-1">GPA: {education.gpa}</p>
          </div>
          <div className="shrink-0 mt-2 md:mt-0">
            <p className="text-sm text-[#adadad]">{education.period}</p>
          </div>
        </div>
      ))}
    </motion.section>
  );
};
