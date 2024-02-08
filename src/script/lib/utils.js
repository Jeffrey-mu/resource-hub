import { fileURLToPath } from "url";
 import path from "path";
export function get_absolute_path() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return {
    __filename,
    __dirname
  }
}
