import { access, mkdir, writeFile } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";

const dataDirectory = path.join(process.cwd(), ".data");
const dataFile = path.join(dataDirectory, "metaacademy-db.json");

await mkdir(dataDirectory, { recursive: true });

try {
  await access(dataFile, constants.F_OK);
  console.log(`Storage ready at ${dataFile}`);
} catch {
  await writeFile(dataFile, JSON.stringify({ users: [] }, null, 2), "utf8");
  console.log(`Storage created at ${dataFile}`);
}
