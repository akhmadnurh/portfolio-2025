import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
export const Hero = () => (
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
