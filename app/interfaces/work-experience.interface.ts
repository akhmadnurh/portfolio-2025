import zod from "zod";

export const CWorkExperience = zod.object({
  company: zod.string(),
  position: zod.string(),
  period: zod.string(),
  description: zod.string().or(zod.null()),
});

export type IWorkExperience = zod.infer<typeof CWorkExperience>;
