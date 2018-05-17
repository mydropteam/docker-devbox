var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');
var path = require('path');


gulp.task('sass', function() {
  return gulp.src(['assets/**/*.scss', 'components/**/*.scss'])
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(concat('styles.css'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(path.join(__dirname, 'build')))
      .pipe(livereload())
});

gulp.task('js', function() {
  return gulp.src(['assets/**/*.js', 'components/**/*.js'])
      .pipe(sourcemaps.init())
      .pipe(concat('styles.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(path.join(__dirname, 'build')))
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('assets/**/*.scss', ['sass']);
  gulp.watch('components/**/*.scss', ['sass']);
  gulp.watch('assets/**/*.js', ['js']);
  gulp.watch('components/**/*.js', ['js']);
});

gulp.task('default', [ 'js', 'sass' ]);