import { motion } from "motion/react";
import ProjectDialog from "~/components/molecules/Dialogs/project-dialog";
import { TProject } from "~/interfaces/project.interface";

const projects: TProject[] = [
  {
    name: "E-commerce Platform",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClidg9nw65APnyLGalm0UW6bVV7Mlwca6s9kq8rNFU8a5kqc5mhnb7RfK0TtMclTiIz8_7s6-M4CzFJTWuMaYcjiOI_QZxoLGPTUmUVWcpL630vZm2ORpk5sXrj8noLfWUaQ-l8t_zt2OXoeyei45Yp6NLH74lG7MTU63HarCoDTdJppcG6wI9ffepsBAPG2sIbPTVElHi5GD-c8MJNdb7rfkYyyWu4U49AtVVZxArIwRB6fgX04PI4ZE-T-IJkDxXqOTYiZ9i0dca",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBtGVjQIqp-Z7shPjRJ3Npo8lKCMB40CLS37Wm2Qm6kjLRgqmxUpkKRxbtxjHL9HebR1zGNJXnlaDNmJry-OGRyttidDIBDjiWLMiCAG9JI0-_duW0PRdytpd-POOmJ0-QxuUHA004UHc01E1mpd4kKSy6BfZIdJqGu9mV5Ode1gYDLfQd3fXh2A2Byqc2ISvuQG0niZHJwxSmU73uvdUAzc9DLS4tPJ5xvHwhTFOO9Gg_0mikzIkrQwS25souc6FU83HKSXgQQ3F8M",
    ],
    description:
      "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    tech_stacks: ["React", "Node.js", "MongoDB", "Stripe", "Cloud Services"],
    project_url: "https://ecommerce-example.com",
    repo_url: "https://github.com/liamharper/ecommerce-platform",
  },
  {
    name: "Task Management Application",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAAOA_TuDRpot3ffbt9Tjn8wMRNGjxy9A7DsrOh3syqmmvZx8TxSC5JDxlhp8fYXPm48E8gGm0AwEq2OqOTkW87UuOXM_fjQtfGvTakmknVg9BlSn0y2lKQ2uZVhPs2utnTsh6mZ0JOe2b9yg7Lg5xvmmArlWjeJSwlmf1EA7ajS23YH_YK3p3TGf1XcIb4bD9JDMGyKaOYbKgB1sqoGbqvEkM8cIAHSW0XZyI-yOOLIKCc_A9zMNTc0L1TurWXn53AV_ZbCL6voz1",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrNNJbpccr4TUWF85Gw7dNkitAVRvfSvkeOt40wYWpiaekJgLELZOR4aV9z_HNT9VKHtRZPb9XuS5VD_Rew2prM0f9rJhUY5aTyq1LzoZx5SkdZpPh21pmhAE6n410PckYd0hQHjpAR9v3AL93nIJRfn7xC3doh76fcaIuHcjmJ34euGX4KEVruL9e5-xJJqYz1vVXdmPp35ox2rvJzEgEZKJKquLX8AwAEcCecnhdBTyY3ZtVMSu2uXbfmTgJVkcrQlFEA3chpI9E",
    ],
    description:
      "A task management app with real-time collaboration and task prioritization features.",
    tech_stacks: ["React", "Firebase", "Node.js", "Express"],
    project_url: "https://taskmanager-example.com",
    repo_url: null,
  },
  {
    name: "Blog Website",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrNNJbpccr4TUWF85Gw7dNkitAVRvfSvkeOt40wYWpiaekJgLELZOR4aV9z_HNT9VKHtRZPb9XuS5VD_Rew2prM0f9rJhUY5aTyq1LzoZx5SkdZpPh21pmhAE6n410PckYd0hQHjpAR9v3AL93nIJRfn7xC3doh76fcaIuHcjmJ34euGX4KEVruL9e5-xJJqYz1vVXdmPp35ox2rvJzEgEZKJKquLX8AwAEcCecnhdBTyY3ZtVMSu2uXbfmTgJVkcrQlFEA3chpI9E",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClidg9nw65APnyLGalm0UW6bVV7Mlwca6s9kq8rNFU8a5kqc5mhnb7RfK0TtMclTiIz8_7s6-M4CzFJTWuMaYcjiOI_QZxoLGPTUmUVWcpL630vZm2ORpk5sXrj8noLfWUaQ-l8t_zt2OXoeyei45Yp6NLH74lG7MTU63HarCoDTdJppcG6wI9ffepsBAPG2sIbPTVElHi5GD-c8MJNdb7rfkYyyWu4U49AtVVZxArIwRB6fgX04PI4ZE-T-IJkDxXqOTYiZ9i0dca",
    ],
    description:
      "A responsive blog platform with markdown support and user comments.",
    tech_stacks: ["Next.js", "Markdown", "PostgreSQL", "Prisma"],
    project_url: null,
    repo_url: "https://github.com/liamharper/blog-website",
  },
];

const Projects = () => (
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
      {projects.map((project, index) => (
        <ProjectDialog
          key={`project-${index + 1}`}
          index={index}
          project={project}
        />
      ))}
    </div>
  </motion.section>
);

export default Projects;
