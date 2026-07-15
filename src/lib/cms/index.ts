import { localCMS } from "./providers/local";
import { strapiCMS } from "./providers/strapi";

const provider =
  process.env.NEXT_PUBLIC_CMS_PROVIDER ?? "strapi";

export const cms =
  provider === "local"
    ? localCMS
    : strapiCMS;