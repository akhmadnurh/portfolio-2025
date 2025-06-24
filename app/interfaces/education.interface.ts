import zod from "zod";

export const CEducation = zod.object({
  place: zod.string(),
  degree: zod.string().or(zod.null()),
  gpa: zod.string().or(zod.null()),
  period: zod.string(),
});
