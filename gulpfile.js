const gulp         = require('gulp');
const sass         = require('gulp-sass');
const sourcemaps   = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', () => {
  return gulp.src('static/css/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass()).on('error', sass.logError)
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('sourcemaps/'))
    .pipe(gulp.dest('static/css/'));
});

gulp.task('watch', ['styles'], () => {
  gulp.watch('static/css/*.scss', ['styles']);
});

gulp.task('default', ['styles']);
