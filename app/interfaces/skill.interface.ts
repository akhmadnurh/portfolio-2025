import zod from "zod";

export const CSkill = zod.string();

export type TSkill = zod.infer<typeof CSkill>;
