import zod from "zod";

export const CLicenseAndCertification = zod.object({
  name: zod.string(),
  issuer: zod.string().or(zod.null()),
  issue_date: zod.string(),
});

export type LicenseAndCertification = zod.infer<
  typeof CLicenseAndCertification
>;
