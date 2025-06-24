import { motion } from "motion/react";
import { usePortfolioStore } from "~/stores/portfolio.store";
export const WorkExperiences = () => {
  const portfolio = usePortfolioStore((state) => state.portfolio);

  return (
    <motion.section
      id="work-experience"
      className="px-4 py-5"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="pb-3 text-2xl font-bold">Work Experiences</h2>
      {portfolio.work_experiences?.map((work_experience, index) => (
        <div
          className="flex flex-col md:flex-row justify-between gap-4 mb-4 rounded-lg p-4 bg-[#2a2a2a] hover:bg-[#4a4a4a] cursor-default"
          key={`work-experience-${index + 1}`}
        >
          <div className="flex flex-1 flex-col justify-center">
            <p className="text-base font-medium">{work_experience.company}</p>
            <p className="text-sm text-[#adadad] mt-1">
              {work_experience.position}
            </p>
            <ul className="list-disc p-4">
              {work_experience.descriptions?.map((description, index) => (
                <li
                  className="text-sm text-[#adadad] mt-1"
                  key={`description-${index + 1}`}
                >
                  {description}
                </li>
              ))}
            </ul>
          </div>
          <div className="shrink-0 mt-2 md:mt-0">
            <p className="text-sm text-[#adadad]">{work_experience.period}</p>
          </div>
        </div>
      ))}
    </motion.section>
  );
};
