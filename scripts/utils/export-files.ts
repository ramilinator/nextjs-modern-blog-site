import fs from "fs/promises";

export async function exportCollection<T>(
  filename: string,
  data: T
) {
  console.log(`📦 Writing ${filename}.json...`);

  await fs.writeFile(
    `src/data/${filename}.json`,
    JSON.stringify(data, null, 2)
  );

  const count = Array.isArray(data)
    ? data.length
    : 1;

  console.log(`✅ Exported ${count} ${filename}`);
}