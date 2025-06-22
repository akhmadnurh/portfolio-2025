import zod from "zod";

export const CProject = zod.object({
  name: zod.string(),
  images: zod.array(zod.string()),
  description: zod.string().or(zod.null()),
  tech_stacks: zod.array(zod.string()),
  project_url: zod.string().or(zod.null()),
  repo_url: zod.string().or(zod.null()),
});

export type TProject = zod.infer<typeof CProject>;
