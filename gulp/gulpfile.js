var path = "..";
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var rename = require("gulp-rename");
var notify = require("gulp-notify");
var autoprefixer = require('gulp-autoprefixer');

gulp.task('serve', ['sass:business', 'sass:personal'], function() {
  browserSync.init({
      server: "..",
      notify: false
  });
  gulp.watch(path + "/assets/scss/scss-business/*.scss", ['sass:business']);
  gulp.watch(path + "/assets/scss/scss-business/business/*.scss", ['sass:business']);
  gulp.watch(path + "/assets/scss/scss-personal/*.scss", ['sass:personal']);
  gulp.watch(path + "/assets/scss/scss-personal/components/*.scss", ['sass:personal']);
  gulp.watch(path + "/assets/scss/scss-personal/sections/*.scss", ['sass:personal']);
  gulp.watch(path + "/*.html").on('change', browserSync.reload);
  gulp.watch(path + "/assets/js-business/vendors/*.js").on('change', browserSync.reload);
  gulp.watch(path + "/assets/js-personal/vendors/*.js").on('change', browserSync.reload);
});

gulp.task('sass:business', function() {
  return gulp.src(path + "/assets/scss/scss-business/*.scss")
  .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
  .pipe(rename("business-main.min.css"))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(path + "/assets/css/"))
  .pipe(browserSync.stream());
});
gulp.task('sass:personal', function() {
  return gulp.src(path + "/assets/scss/scss-personal/*.scss")
  .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
  .pipe(rename("personal-main.min.css"))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(path + "/assets/css/"))
  .pipe(browserSync.stream());
});

gulp.task('concat', function() {
  return gulp.src(path + "/assets/js/vendors/*.js")
  .pipe(concat("vendors.js"))
  .pipe(gulp.dest(path + "/assets/js/"));
});

gulp.task('default', ['serve']);
