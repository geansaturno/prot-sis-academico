
let gulp = require("gulp");
let less = require("gulp-less");
let clean = require("gulp-clean");


gulp.task('clean-standalone', function() {
    return gulp.src('css/standalone')
    .pipe(clean());
});

gulp.task('less', () => {
   gulp.src('less/bootstrap/bootstrap.less')
   .pipe(less())
     .pipe(gulp.dest('css'));
});

gulp.task('less-standalone', ["clean-standalone"], function() {
    gulp.src('less/standalone/**/*.less')
    .pipe(less())
      .pipe(gulp.dest('css/standalone'));
});

gulp.task('default', () => {
    gulp.watch('less/bootstrap/**/*.less', ['less']);
    gulp.watch('less/standalone/**/*.less', ['less-standalone']);
});