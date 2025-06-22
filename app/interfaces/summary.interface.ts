import zod from "zod";

export const CSummary = zod.object({
  profile_url: zod.string(),
  name: zod.string(),
  title: zod.string(),
  description: zod.string(),
});
