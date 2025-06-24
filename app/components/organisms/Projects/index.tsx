import { motion } from "motion/react";
import ProjectDialog from "~/components/molecules/Dialogs/project-dialog";
import { usePortfolioStore } from "~/stores/portfolio.store";

const Projects = () => {
  const portfolio = usePortfolioStore((state) => state.portfolio);

  return (
    <motion.section
      id="projects"
      className="px-4 py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="pb-3 text-2xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolio.projects?.map((project, index) => (
          <ProjectDialog
            key={`project-${index + 1}`}
            index={index}
            project={project}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
