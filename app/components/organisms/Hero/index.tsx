import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { usePortfolioStore } from "~/stores/portfolio.store";
export const Hero = () => {
  const portfolio = usePortfolioStore((state) => state.portfolio);

  return (
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
              src={portfolio?.summary?.avatar_url}
              alt={portfolio?.summary?.name}
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
          <p className="text-2xl font-bold">{portfolio?.summary?.name}</p>
          <p className="text-base text-[#adadad]">
            {portfolio?.summary?.title}
          </p>
          <p className="mt-2 max-w-xl text-base text-[#adadad]">
            {portfolio?.summary?.description}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};
