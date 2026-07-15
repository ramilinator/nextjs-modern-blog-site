import dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

import { strapiCMS } from "../src/lib/cms/providers/strapi";
import { exportCollection }from "./utils/export-files";

const collections = [
  {
    name: "categories",
    fetch: () => strapiCMS.getCategories(),
  },
  {
    name: "authors",
    fetch: () => strapiCMS.getAuthors(),
  },
  {
    name: "posts",
    fetch: () => strapiCMS.getPosts(),
  },
];

async function main() {
  console.log("🚀 Starting Strapi export...\n");

  let success = 0;
  let failed = 0;

  const failures: string[] = [];

  for (const collection of collections) {
    try {
      console.log(`📦 Exporting ${collection.name}...`);
      const data = await collection.fetch();
      await exportCollection(
        collection.name,
        data
      );
      success++;
    } catch (error) {
      failed++;
      failures.push(collection.name);
      console.error(
        `❌ Failed to export ${collection.name}`
      );
      console.error(error);
    }
    console.log("");
  }
  console.log("================================");
  console.log("📊 Export Summary");
  console.log("================================");
  console.log(`✅ Successful : ${success}`);
  console.log(`❌ Failed     : ${failed}`);
  if (failures.length > 0) {
    console.log("");
    console.log("Failed Collections:");
    for (const failure of failures) {
      console.log(` • ${failure}`);
    }
  }
  console.log("================================");
}

main().catch((error) => {
  console.error("💥 Unexpected error");
  console.error(error);
  process.exit(1);
});