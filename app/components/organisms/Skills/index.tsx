import { motion } from "motion/react";
import { Badge } from "~/components/ui/badge";
export const Skills = () => (
  <motion.section
    id="skills"
    className="px-4 py-5"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="pb-3 text-2xl font-bold">Skills</h2>
    <div className="flex flex-wrap gap-2 p-3">
      {[
        "Java",
        "Python",
        "React",
        "Spring Boot",
        "Cloud Services",
        "Cloud Platform",
        "SQL",
        "NoSQL",
        "REST",
        "GraphQL",
      ].map((skill, index) => (
        <motion.div
          key={skill}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          viewport={{ once: true }}
        >
          <Badge
            variant="secondary"
            className="bg-[#363636] text-white hover:bg-[#4a4a4a]"
          >
            {skill}
          </Badge>
        </motion.div>
      ))}
    </div>
  </motion.section>
);
