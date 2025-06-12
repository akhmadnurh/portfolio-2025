import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Github, Linkedin, Menu, Mountain } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#1a1a1a] text-white">
      <Header />
      <main className="flex flex-1 justify-center py-5 md:px-10 lg:px-40 px-4">
        <div className="flex w-full max-w-4xl flex-col">
          <Hero />
          <About />
          <WorkExperience />
          <Education />
          <LicensesAndCertifications />
          <Skills />
          <Projects />
        </div>
      </main>
    </div>
  );
};

const navItems = [
  "About",
  "Work Experience",
  "Education",
  "Licenses & Certifications",
  "Skills",
  "Projects",
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#363636] px-4 md:px-10 py-3">
      <div className="flex items-center gap-4">
        <Mountain className="h-6 w-6" />
        <h1 className="text-lg font-bold">Portfolio</h1>
      </div>
      <nav className="hidden md:flex flex-1 justify-end gap-8 items-center">
        <div className="flex items-center gap-6 lg:gap-9">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item
                .toLowerCase()
                .replace(/ & /g, "-")
                .replace(/ /g, "-")}`}
              className="text-sm font-medium hover:underline"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Linkedin className="h-5 w-5" />
          </Button>
        </div>
      </nav>
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-[#1a1a1a] text-white border-l-[#363636]"
          >
            <nav className="grid gap-6 text-lg font-medium mt-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item
                    .toLowerCase()
                    .replace(/ & /g, "-")
                    .replace(/ /g, "-")}`}
                  className="hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="flex gap-2 mt-6">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

const Hero = () => (
  <motion.section
    id="hero"
    className="p-4"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <div className="flex flex-col items-center gap-4 text-center">
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Avatar className="h-32 w-32">
          <AvatarImage
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtGVjQIqp-Z7shPjRJ3Npo8lKCMB40CLS37Wm2Qm6kjLRgqmxUpkKRxbtxjHL9HebR1zGNJXnlaDNmJry-OGRyttidDIBDjiWLMiCAG9JI0-_duW0PRdytpd-POOmJ0-QxuUHA004UHc01E1mpd4kKSy6BfZIdJqGu9mV5Ode1gYDLfQd3fXh2A2Byqc2ISvuQG0niZHJwxSmU73uvdUAzc9DLS4tPJ5xvHwhTFOO9Gg_0mikzIkrQwS25souc6FU83HKSXgQQ3F8M"
            alt="Liam Harper"
          />
          <AvatarFallback>LH</AvatarFallback>
        </Avatar>
      </motion.div>
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-2xl font-bold">Liam Harper</p>
        <p className="text-base text-[#adadad]">Software Engineer</p>
        <p className="mt-2 max-w-xl text-base text-[#adadad]">
          Passionate software engineer with a focus on creating innovative
          solutions. Experienced in full-stack development, cloud computing, and
          machine learning.
        </p>
      </motion.div>
    </div>
  </motion.section>
);

const About = () => (
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

const WorkExperience = () => (
  <motion.section
    id="work-experience"
    className="px-4 py-5"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="pb-3 text-2xl font-bold">Work Experience</h2>
    <div className="flex flex-col md:flex-row justify-between gap-4 rounded-lg p-4 bg-[#2a2a2a]">
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-base font-medium">Tech Solutions Inc.</p>
        <p className="text-sm text-[#adadad] mt-1">Software Engineer</p>
        <p className="text-sm text-[#adadad] mt-2">
          Developed and maintained web applications using Java, Spring Boot, and
          React. Implemented RESTful APIs and integrated with various databases.
          Contributed to the design and architecture of new features.
        </p>
      </div>
      <div className="shrink-0 mt-2 md:mt-0">
        <p className="text-sm text-[#adadad]">2019 - Present</p>
      </div>
    </div>
  </motion.section>
);

const Education = () => (
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

const LicensesAndCertifications = () => (
  <motion.section
    id="licenses-certifications"
    className="px-4 py-5"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="pb-3 text-2xl font-bold">Licenses & Certifications</h2>
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between rounded-lg p-4 bg-[#2a2a2a]">
        <p className="flex-1 text-base">
          Cloud Services Certified Solutions Architect - Associate
        </p>
        <p className="shrink-0 text-sm text-[#adadad] mt-1 md:mt-0">2021</p>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between rounded-lg p-4 bg-[#2a2a2a]">
        <p className="flex-1 text-base">
          Cloud Platform Certified: Cloud Solutions Architect Expert
        </p>
        <p className="shrink-0 text-sm text-[#adadad] mt-1 md:mt-0">2022</p>
      </div>
    </div>
  </motion.section>
);

const Skills = () => (
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

const projects = [
  {
    name: "E-commerce Platform",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClidg9nw65APnyLGalm0UW6bVV7Mlwca6s9kq8rNFU8a5kqc5mhnb7RfK0TtMclTiIz8_7s6-M4CzFJTWuMaYcjiOI_QZxoLGPTUmUVWcpL630vZm2ORpk5sXrj8noLfWUaQ-l8t_zt2OXoeyei45Yp6NLH74lG7MTU63HarCoDTdJppcG6wI9ffepsBAPG2sIbPTVElHi5GD-c8MJNdb7rfkYyyWu4U49AtVVZxArIwRB6fgX04PI4ZE-T-IJkDxXqOTYiZ9i0dca",
  },
  {
    name: "Task Management Application",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAAOA_TuDRpot3ffbt9Tjn8wMRNGjxy9A7DsrOh3syqmmvZx8TxSC5JDxlhp8fYXPm48E8gGm0AwEq2OqOTkW87UuOXM_fjQtfGvTakmknVg9BlSn0y2lKQ2uZVhPs2utnTsh6mZ0JOe2b9yg7Lg5xvmmArlWjeJSwlmf1EA7ajS23YH_YK3p3TGf1XcIb4bD9JDMGyKaOYbKgB1sqoGbqvEkM8cIAHSW0XZyI-yOOLIKCc_A9zMNTc0L1TurWXn53AV_ZbCL6voz1",
  },
  {
    name: "Blog Website",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrNNJbpccr4TUWF85Gw7dNkitAVRvfSvkeOt40wYWpiaekJgLELZOR4aV9z_HNT9VKHtRZPb9XuS5VD_Rew2prM0f9rJhUY5aTyq1LzoZx5SkdZpPh21pmhAE6n410PckYd0hQHjpAR9v3AL93nIJRfn7xC3doh76fcaIuHcjmJ34euGX4KEVruL9e5-xJJqYz1vVXdmPp35ox2rvJzEgEZKJKquLX8AwAEcCecnhdBTyY3ZtVMSu2uXbfmTgJVkcrQlFEA3chpI9E",
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
        <motion.div
          key={index}
          className="flex flex-col gap-3 pb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div
            className="aspect-square w-full rounded-xl bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${project.image}")` }}
          />
          <p className="text-base font-medium text-center sm:text-left">
            {project.name}
          </p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default App;
