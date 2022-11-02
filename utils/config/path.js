import * as nodePath from "path";

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
  build: {
    html: `${buildFolder}/`,
    files: `${buildFolder}/app/`,
  },
  src: {
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/app/**/*.*`,
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/app/**/*.*`,
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
  ftp: "",
};
