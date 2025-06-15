import { motion } from "motion/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "E-commerce Platform",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClidg9nw65APnyLGalm0UW6bVV7Mlwca6s9kq8rNFU8a5kqc5mhnb7RfK0TtMclTiIz8_7s6-M4CzFJTWuMaYcjiOI_QZxoLGPTUmUVWcpL630vZm2ORpk5sXrj8noLfWUaQ-l8t_zt2OXoeyei45Yp6NLH74lG7MTU63HarCoDTdJppcG6wI9ffepsBAPG2sIbPTVElHi5GD-c8MJNdb7rfkYyyWu4U49AtVVZxArIwRB6fgX04PI4ZE-T-IJkDxXqOTYiZ9i0dca",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBtGVjQIqp-Z7shPjRJ3Npo8lKCMB40CLS37Wm2Qm6kjLRgqmxUpkKRxbtxjHL9HebR1zGNJXnlaDNmJry-OGRyttidDIBDjiWLMiCAG9JI0-_duW0PRdytpd-POOmJ0-QxuUHA004UHc01E1mpd4kKSy6BfZIdJqGu9mV5Ode1gYDLfQd3fXh2A2Byqc2ISvuQG0niZHJwxSmU73uvdUAzc9DLS4tPJ5xvHwhTFOO9Gg_0mikzIkrQwS25souc6FU83HKSXgQQ3F8M",
    ],
    description:
      "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Cloud Services"],
    projectUrl: "https://ecommerce-example.com",
    repoUrl: "https://github.com/liamharper/ecommerce-platform",
  },
  {
    name: "Task Management Application",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAAOA_TuDRpot3ffbt9Tjn8wMRNGjxy9A7DsrOh3syqmmvZx8TxSC5JDxlhp8fYXPm48E8gGm0AwEq2OqOTkW87UuOXM_fjQtfGvTakmknVg9BlSn0y2lKQ2uZVhPs2utnTsh6mZ0JOe2b9yg7Lg5xvmmArlWjeJSwlmf1EA7ajS23YH_YK3p3TGf1XcIb4bD9JDMGyKaOYbKgB1sqoGbqvEkM8cIAHSW0XZyI-yOOLIKCc_A9zMNTc0L1TurWXn53AV_ZbCL6voz1",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrNNJbpccr4TUWF85Gw7dNkitAVRvfSvkeOt40wYWpiaekJgLELZOR4aV9z_HNT9VKHtRZPb9XuS5VD_Rew2prM0f9rJhUY5aTyq1LzoZx5SkdZpPh21pmhAE6n410PckYd0hQHjpAR9v3AL93nIJRfn7xC3doh76fcaIuHcjmJ34euGX4KEVruL9e5-xJJqYz1vVXdmPp35ox2rvJzEgEZKJKquLX8AwAEcCecnhdBTyY3ZtVMSu2uXbfmTgJVkcrQlFEA3chpI9E",
    ],
    description:
      "A task management app with real-time collaboration and task prioritization features.",
    techStack: ["React", "Firebase", "Node.js", "Express"],
    projectUrl: "https://taskmanager-example.com",
    repoUrl: "https://github.com/liamharper/task-manager",
  },
  {
    name: "Blog Website",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrNNJbpccr4TUWF85Gw7dNkitAVRvfSvkeOt40wYWpiaekJgLELZOR4aV9z_HNT9VKHtRZPb9XuS5VD_Rew2prM0f9rJhUY5aTyq1LzoZx5SkdZpPh21pmhAE6n410PckYd0hQHjpAR9v3AL93nIJRfn7xC3doh76fcaIuHcjmJ34euGX4KEVruL9e5-xJJqYz1vVXdmPp35ox2rvJzEgEZKJKquLX8AwAEcCecnhdBTyY3ZtVMSu2uXbfmTgJVkcrQlFEA3chpI9E",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClidg9nw65APnyLGalm0UW6bVV7Mlwca6s9kq8rNFU8a5kqc5mhnb7RfK0TtMclTiIz8_7s6-M4CzFJTWuMaYcjiOI_QZxoLGPTUmUVWcpL630vZm2ORpk5sXrj8noLfWUaQ-l8t_zt2OXoeyei45Yp6NLH74lG7MTU63HarCoDTdJppcG6wI9ffepsBAPG2sIbPTVElHi5GD-c8MJNdb7rfkYyyWu4U49AtVVZxArIwRB6fgX04PI4ZE-T-IJkDxXqOTYiZ9i0dca",
    ],
    description:
      "A responsive blog platform with markdown support and user comments.",
    techStack: ["Next.js", "Markdown", "PostgreSQL", "Prisma"],
    projectUrl: "https://blog-example.com",
    repoUrl: "https://github.com/liamharper/blog-website",
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
        <Dialog key={index}>
          <DialogTrigger asChild>
            <motion.div
              className="flex flex-col gap-3 pb-3 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className="aspect-square w-full rounded-xl bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url("${project.images[0]}")` }}
              />
              <p className="text-base font-medium text-center sm:text-left">
                {project.name}
              </p>
            </motion.div>
          </DialogTrigger>
          <DialogContent className="bg-[#1a1a1a] text-white border-[#363636] max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{project.name}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Carousel className="w-full">
                <CarouselContent>
                  {project.images.map((image, imgIndex) => (
                    <CarouselItem key={imgIndex}>
                      <img
                        src={image}
                        alt={`${project.name} screenshot ${imgIndex + 1}`}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <p className="text-[#adadad]">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className="bg-[#363636] text-white hover:bg-[#4a4a4a]"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="text-white border-[#363636] hover:bg-[#363636]"
                  asChild
                >
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="text-white border-[#363636] hover:bg-[#363636]"
                  asChild
                >
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Repository
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  </motion.section>
);

export default Projects;
