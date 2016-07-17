var gulp = require('gulp'),
    react = require('gulp-react'),
    nodemon = require('gulp-nodemon'),
    sass = require('gulp-sass'),
    sassLint = require('gulp-scss-lint'),
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify'),
    eslint = require('gulp-eslint'),
    guppy = require('git-guppy')(gulp),
    mocha = require('gulp-mocha');

gulp.task('react', function () {
    'use strict';
    return gulp.src('./ui_components/*.jsx').pipe(react()).pipe(gulp.dest('./public/javascripts/components/'));
});

gulp.task('lint-sass', function () {
  return gulp.src('/styles/**/*.scss')
    .pipe(sassLint());

});

gulp.task('compile-sass', function () {

  return gulp.src('./styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/stylesheets'));

});

gulp.task('lint-js', function () {
    return gulp.src('./ui_components/**/*.jsx')
        .pipe(react())
        .pipe(eslint());
});

gulp.task('watch', function () {
    gulp.watch('./ui_components/**/*.jsx',['react']);
    gulp.watch('./styles/**/*.scss',['compile-sass']);
});

gulp.task('test', function () {

        gulp.src('./test/*.js', {read: false})
                .pipe(mocha({reporter: 'nyan'}));
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

gulp.task('pre-commit', function(files){
return true;
});

gulp.task('default', ['develop', 'react', 'watch']);
