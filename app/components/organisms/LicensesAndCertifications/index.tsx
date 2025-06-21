import { motion } from "motion/react";
export const LicensesAndCertifications = () => (
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
