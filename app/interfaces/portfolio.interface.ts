import zod from "zod";
import { CProject } from "./project.interface";
import { CSummary } from "./summary.interface";
import { CAbout } from "./about.interface";
import { CWorkExperience } from "./work-experience.interface";
import { CEducation } from "./education.interface";
import { CLicenseAndCertification } from "./licence-and-certification.interface";
import { CSkill } from "./skill.interface";

export const CPortfolio = zod.object({
  summary: CSummary,
  about: CAbout,
  work_experiences: zod.array(CWorkExperience),
  educations: zod.array(CEducation),
  licences_and_certifications: zod.array(CLicenseAndCertification),
  skills: CSkill,
  projects: zod.array(CProject),
});
