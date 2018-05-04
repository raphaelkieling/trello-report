const gulp = require("gulp");
const minify = require("gulp-minify");

gulp.task("default", function() {
  gulp
    .src("lib/*.js")
    .pipe(
      minify({
        ext: {
          min: ".min.js",
          src: ".debug.js"
        }
      })
    )
    .pipe(gulp.dest("dist"));
});
