import zod from "zod";

export const CWorkExperience = zod.object({
  company: zod.string(),
  position: zod.string(),
  period: zod.string(),
  descriptions: zod.array(zod.string()),
});

export type IWorkExperience = zod.infer<typeof CWorkExperience>;
