import zod from "zod";

export const CLicenseAndCertification = zod.object({
  name: zod.string(),
  period: zod.string(),
});

export type LicenseAndCertification = zod.infer<
  typeof CLicenseAndCertification
>;
