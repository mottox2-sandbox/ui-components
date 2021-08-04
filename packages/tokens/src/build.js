import path from "path";
import theo from "theo";
import fsExtra from "fs-extra";
import _ from "lodash";

const { outputFile, readdir } = fsExtra;

export const convert = async (file, format) => {
  return theo
    .convert({
      transform: {
        type: "web",
        file,
      },
      format: {
        type: format, // html, scss, module.js, common.js, custom-properties.css
      },
    })
    .catch((error) => console.log(`Something went wrong: ${error}`));
};

(async () => {
  theo.registerFormat(
    "prefix.scss",
    `{{#each props as |prop|}}
  {{#if prop.comment~}}
  {{{trimLeft (indent (comment (trim prop.comment)))}}}
  {{/if~}}
  \${{prop.type}}-{{kebabcase prop.name}}: {{#eq prop.type "string"}}"{{/eq}}{{{prop.value}}}{{#eq prop.type "string"}}"{{/eq}} !default;
{{/each}}
  `
  );

  // もしかして標準のmodule.jsでいいのかもしれない
  theo.registerFormat("ts", (def) => {
    return def
      .get("props")
      .map((prop) => {
        // TODO: comment
        const k = _.camelCase(prop.get("name"));
        const v = JSON.stringify(prop.get("value"));
        return `export const ${k} = ${v};`;
      })
      .flatten(1)
      .toArray()
      .join("\n");
  });

  const formats = ["prefix.scss", "ts"];

  const fileNames = (
    await readdir(path.join(__dirname, "../tokens"), {
      withFileTypes: true,
    })
  )
    .filter((file) => file.isFile())
    .map((file) => file.name)
    .filter((fileName) => fileName.match(/yml$/));

  await outputFile(
    path.join(__dirname, "../dist/index.scss"),
    `${fileNames
      .map((fileName) => {
        return `@import './${fileName.replace(".yml", "")}.scss';`;
      })
      .join("\n")}`
  );

  await outputFile(
    path.join(__dirname, "../dist/index.ts"),
    `${fileNames
      .map((fileName) => {
        const name = fileName.replace(".yml", "");
        return `export * as ${name} from './${name}';`;
      })
      .join("\n")}`
  );

  for (let i = 0; i < formats.length; i++) {
    const format = formats[i];
    for (let j = 0; j < fileNames.length; j++) {
      const fileName = fileNames[j];
      const result = await convert(
        path.join(__dirname, `../tokens/${fileName}`),
        format
      );
      const ext = format.split(".")[format.split(".").length - 1];
      await outputFile(
        path.join(__dirname, `../dist/${fileName.replace(".yml", "")}.${ext}`),
        result
      );
    }
  }
})();
