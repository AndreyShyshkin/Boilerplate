import gulp from "gulp";

import { path } from "./utils/config/path.js";

import { copy } from "./utils/tasks/copy.js";
import { reset } from "./utils/tasks/reset.js";
import { html } from "./utils/tasks/html.js";

global.app = {
  path,
  gulp,
};

function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.files, html);
}

const mainTasks = gulp.parallel(copy, html);

const dev = gulp.series(reset, mainTasks, watcher);

gulp.task("default", dev);
