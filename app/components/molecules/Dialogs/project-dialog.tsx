import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { motion } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { TProject } from "~/interfaces/project.interface";

interface IProps {
  index: number;
  project: TProject;
}

const ProjectDialog = ({ index, project }: IProps) => {
  return (
    <Dialog key={`project-${index + 1}`}>
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
              {project.images.map((image: string, imgIndex: number) => (
                <CarouselItem key={`project-image-${imgIndex + 1}`}>
                  <img
                    src={image}
                    alt={`${project.name} screenshot ${imgIndex + 1}`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="w-8 h-8 text-black ml-7" />
            <CarouselNext className="w-8 h-8 text-black mr-7" />
          </Carousel>
          <p className="text-[#adadad]">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech_stacks.map((tech: string, techIndex: number) => (
              <Badge
                key={`project-tech-${techIndex + 1}`}
                variant="secondary"
                className="bg-[#363636] text-white hover:bg-[#4a4a4a]"
              >
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-4 pt-4">
            {project.project_url && (
              <Button
                className="text-white border-[#363636] hover:bg-[#363636]"
                asChild
                disabled={!project.project_url}
              >
                <a
                  href={project.project_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Project
                </a>
              </Button>
            )}
            {project.repo_url && (
              <Button
                className="text-white border-[#363636] hover:bg-[#363636] "
                asChild
                disabled={!project.repo_url}
              >
                <a
                  href={project.repo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Repository
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
