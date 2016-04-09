'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload');

gulp.task('sass', function() {
  gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

gulp.task('html', function () {
  gulp.src('./index.html')
    .pipe(livereload());
});

gulp.task('javascript', function () {
  gulp.src('./*.js')
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./sass/*.scss', ['sass']);
  gulp.watch('./index.html', ['html']);
  gulp.watch('./*.js', ['javascript']);
  livereload();
});

gulp.task('build', function() {
  gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});
