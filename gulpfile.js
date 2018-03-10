const gulp         = require('gulp');
const sass         = require('gulp-sass');
const sourcemaps   = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const babel        = require('gulp-babel');
const concat       = require('gulp-concat');

gulp.task('styles', () => {
  return gulp.src('static/css/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass()).on('error', sass.logError)
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('sourcemaps/'))
    .pipe(gulp.dest('static/css/'));
});

gulp.task('scripts', () => {
  return gulp.src('static/js/*.js')
    .pipe(babel({ presets: ['env'] }))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('static/js/'));
});

gulp.task('watch', ['styles'], () => {
  gulp.watch('static/css/*.scss', ['styles']);
  gulp.watch('static/js/*.js', ['scripts']);
});

gulp.task('default', ['styles', 'scripts']);
