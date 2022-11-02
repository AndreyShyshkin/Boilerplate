import fileInclude from "gulp-file-include";

export const html = () => app.gulp
    .src(app.path.src.html)
    .pipe(fileInclude())
    .pipe(app.gulp.dest(app.path.build.html));
