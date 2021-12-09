const fs = require("fs-extra");

const [node, file, name] = process.argv;
const source = "./";
const destination = `../${name}`;
const jsonPath = `${destination}/package.json`;
const files = [
  "src",
  ".gitignore",
  "package.json",
  "tsconfig.json",
  "webpack.config.ts",
];
const createRepo = async () => {
  try {
    await fs.ensureDir(destination);
    for (const fileName of files) {
      await fs.copy(`${source}/${fileName}`, `${destination}/${fileName}`);
    }
    const packageContents = await fs.readJson(jsonPath);
    await fs.writeJson(
      jsonPath,
      {
        ...packageContents,
        name,
        version: "1.0.0",
      },
      {
        spaces: 2,
        EOL: "\n",
      }
    );
    console.log("Success!");
  } catch (err) {
    console.error(err);
  }
};
createRepo();
