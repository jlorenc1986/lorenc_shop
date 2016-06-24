var gulp = require('gulp');
var react = require('gulp-react');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var sassLint = require('gulp-scss-lint');
var livereload = require('gulp-livereload');
var notify = require('gulp-notify');
var eslint = require('gulp-eslint');

gulp.task('react', function () {
    'use strict';
    return gulp.src('./ui_components/*.jsx').pipe(react()).pipe(gulp.dest('./public/javascripts/components/'));
});

gulp.task('lint-sass', function () {

  return gulp.src('/styles/**/*.scss')
    .pipe(sassLint());

});

gulp.task('lint-sass', function () {

  return gulp.src('/js/**/*.scss')
    .pipe(sass());

});

gulp.task('lint-js', function () {
    return gulp.src('./ui_components/**/*.jsx')
        .pipe(react())
        .pipe(eslint());
});

gulp.task('watch', function () {
    gulp.watch('./ui_components/**/*.jsx',['react']);
    gulp.watch('./styles/**/*.scss',['lint-sass']);
});


gulp.task('develop', function () {
    nodemon({
      script: 'app.js',
      ext: 'html js jsx ejs scss',
      env: { "NODE_ENV": "development" ,"DEBUG":"express" }
    })
        .on('restart', function () {

              gulp.src('app.js')
                .pipe(livereload())
			    .pipe(notify('Reloading page, please wait...'));


        });
});

gulp.task('default', ['develop', 'react', 'watch']);
