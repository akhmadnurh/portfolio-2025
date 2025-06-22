import { motion } from "motion/react";

interface IProps {
  error: Error;
}

export const ErrorPage = ({ error }: IProps) => {
  console.log(error);
  return (
    <div className="bg-[#1a1a1a] text-white">
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex min-h-dvh max-h-dvh flex-col py-[20%] items-center"
      >
        <img
          src="https://pub-e6bbd32095664479aad7c3577201f8ae.r2.dev/error.svg"
          alt="error"
          width={300}
          height={300}
        />
        <div className="text-2xl mt-4 font-mono sm:px-28">{error?.message}</div>
      </motion.div>
    </div>
  );
};
