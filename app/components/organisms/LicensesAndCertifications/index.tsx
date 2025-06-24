import { motion } from "motion/react";
import { usePortfolioStore } from "~/stores/portfolio.store";
export const LicensesAndCertifications = () => {
  const portfolio = usePortfolioStore((state) => state.portfolio);

  return (
    <motion.section
      id="licenses-certifications"
      className="px-4 py-5"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="pb-3 text-2xl font-bold">Licenses & Certifications</h2>
      {portfolio.licences_and_certifications?.map((license, index) => (
        <div className="space-y-4 mb-4" key={`license-${index + 1}`}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between rounded-lg p-4 bg-[#2a2a2a] hover:bg-[#4a4a4a] cursor-default">
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-wider">
                {license.issuer && `${license.issuer}`}
              </span>
              <p className="flex-1 text-base">{license.name} </p>
            </div>
            <p className="shrink-0 text-sm text-[#adadad] mt-1 md:mt-0">
              {license.issue_date}
            </p>
          </div>
        </div>
      ))}
    </motion.section>
  );
};
