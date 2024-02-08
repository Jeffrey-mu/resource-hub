import fs from "fs";
import got from "got";
import MarkdownIt from "markdown-it";
import dayjs from "dayjs";
import { join } from "path";
import { get_absolute_path } from './utils.js';
export const resource_list = {
  "awesome-nodejs": {
    name: "awesome-nodejs",
    href: `https://raw.githubusercontent.com/sindresorhus/awesome-nodejs/main/readme.md`,
    split: "Packages"
  },
  "awesome-javascript": {
    name: "awesome-javascript",
    href: "https://raw.githubusercontent.com/sorrycc/awesome-javascript/master/README.md",
    split: "Package Managers"
  },
  "awesome-python": {
    name: "awesome-python",
    href: "https://raw.githubusercontent.com/vinta/awesome-python/master/README.md",
    split: "Admin Panels"
  },
  "awesome-go": {
    name: "awesome-go",
    href: "https://raw.githubusercontent.com/avelino/awesome-go/main/README.md",
    split: "Artificial Intelligence"
  },
  "awesome-java": {
    name: "awesome-java",
    href: "https://raw.githubusercontent.com/akullpp/awesome-java/master/README.md",
    split: "Projects"
  },
  "awesome-vue": {
    name: "awesome-vue",
    href: "https://raw.githubusercontent.com/vuejs/awesome-vue/master/README.md",
    split: "Resources"
  },
};

export async function get_awesome_readme(key) {
  const resource = resource_list[key];
  const { __dirname } = get_absolute_path();
  const { body } = await got.get(resource.href);
  let split_title = resource.split;
  let markdownText = `## ${split_title}\n${body.split(`## ${split_title}`)[1]}`;
  if (key === "awesome-javascript") {
    markdownText = markdownText
      .split("# Other Awesome Lists")[0]
      .replaceAll("*", "-");
  }
  fs.writeFileSync(join(__dirname, `./${resource.name}.md`), markdownText);

  const md = new MarkdownIt();

  const tokens = md.parse(markdownText, { references: {} });
  const packages = [];
  let type = [];
  let clear = false;
  tokens.forEach((token) => {
    if (
      token.children &&
      token.children.length === 1 &&
      token.level === 1 &&
      token.content !== "" &&
      token.type === "inline" &&
      !token.content.startsWith("-")
    ) {
      if (clear) {
        clear = false;
        type = [];
      }
      type.push(token.content.trim());
    } else if (token.type === "inline" && token.children.length === 4) {
      try {
        clear = true;
        const desc = token.children[3].content;
        const name = token.children[1].content;
        const url = token.children[0].attrs[0][1];
        packages.push({
          name: name,
          data: {
            tags: [...type],
            addedAt: "--",
            name,
            url,
            desc,
          },
        });
      } catch (e) { }
    }
  });
  if (packages.length) {
    const current_time = dayjs().format('MM/DD/YYYY').replaceAll('/', '-')
    const write_file_name =  `../../../public/awesome/`
    const history_dir = join(__dirname, `${write_file_name}${current_time}`)
    fs.writeFileSync(
      join(__dirname, `${write_file_name}${resource.name}.json`),
      JSON.stringify(packages),
    );
    if (!fs.existsSync(history_dir)) {
      fs.mkdirSync(history_dir)
    }
    fs.writeFileSync(
      `${history_dir}/${resource.name}.json`,
      JSON.stringify(packages),
    );
  }
}
