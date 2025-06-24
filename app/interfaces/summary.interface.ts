import zod from "zod";

export const CSummary = zod.object({
  avatar_url: zod.string(),
  name: zod.string(),
  title: zod.string(),
  description: zod.string().or(zod.null()),
  email: zod.string(),
  phone: zod.string().or(zod.null()),
  linkedin_url: zod.string().or(zod.null()),
  github_url: zod.string().or(zod.null()),
});
