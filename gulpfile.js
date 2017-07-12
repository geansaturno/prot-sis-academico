
let gulp = require("gulp");
let less = require("gulp-less");
let clean = require("gulp-clean");


gulp.task('clean-standalone', function () {
    return gulp.src('css/standalone')
        .pipe(clean());
});

gulp.task('less', () => {
    gulp.src('less/bootstrap/bootstrap.less')
        .pipe(less())
        .pipe(gulp.dest('css'));
});

gulp.task('less-standalone', ["clean-standalone"], function () {
    gulp.src('less/standalone/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('css/standalone'));
});

gulp.task('default', ['less', 'less-standalone'], () => {
    gulp.watch('less/bootstrap/**/*.less', ['less']);
    gulp.watch('less/standalone/**/*.less', ['less-standalone']);
});

gulp.task('clean-build', function () {
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('build', ["clean-build"], function () {
    gulp.src('*.html')
        .pipe(gulp.dest('dist'));
    gulp.src('css/**/*')
        .pipe(gulp.dest('dist/css/'));
    gulp.src('js/**/*')
        .pipe(gulp.dest('dist/js'));
});