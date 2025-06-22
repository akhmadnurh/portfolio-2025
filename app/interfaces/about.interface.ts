import zod from "zod";

export const CAbout = zod.string();

export type TAbout = zod.infer<typeof CAbout>;
