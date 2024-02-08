import fs from "fs";
import { join } from "path";
import { get_absolute_path } from "./utils.js";
export function generate_data() {
  const { __dirname } = get_absolute_path();
  let file_list = fs
    .readdirSync("../helpers")
    .filter((item) => item.endsWith(".json"));
  const data = file_list.map((item) => {
    return {
      name: item,
      data: JSON.parse(
        fs
          .readFileSync(join(__dirname, "../..//helpers/" + item), "utf8")
          .toString(),
      ),
    };
  });
  fs.writeFileSync(
    join(__dirname, "../../../public/helpers.json"),
    JSON.stringify(data),
  );
}
