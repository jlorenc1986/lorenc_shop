var gulp = require('gulp'),
    react = require('gulp-react'),
    shell = require('gulp-shell'),
    sass = require('gulp-sass'),
    sassLint = require('gulp-scss-lint'),
    eslint = require('gulp-eslint'),
    guppy = require('git-guppy')(gulp),
    connect = require('gulp-connect'),
    del = require('del'),
    mocha = require('gulp-mocha');

gulp.task('react', function () {
    'use strict';
    return gulp.src('./ui_components/*.jsx').pipe(react()).pipe(gulp.dest('./public/javascripts/components/'));
});

gulp.task('lint-sass', function () {
  return gulp.src('/styles/**/*.scss')
    .pipe(sassLint());

});

gulp.task('cleanup-pre-build', function () {
  return del([
     'public'
   ]);
});

gulp.task('clean', shell.task([
   'rm -rf public'])
);

gulp.task('compile-rjs', ['cleanup-pre-build'],
      shell.task([
       'rm -rf dist',
       'node_modules/.bin/r.js -o build/app.build.js',
        'mkdir public',
        'mkdir public/vendor',
        'cp node_modules/requirejs/require.js public/vendor/requirejs.js',
        'cp node_modules/bootstrap/dist/css/bootstrap.min.css public/vendor/bootstrap.min.css'

        ])
);
gulp.task('build-dev', ['compile-rjs'], function () {

      return gulp.src('./client/*.js',{read: false})
      .pipe(
       shell([
          'cp client/index.html public/index.html',
          'cp dist/main.js public/main.js'
       ])
     )
     .pipe(connect.reload());
});

gulp.task('compile-sass', function () {

  return gulp.src('./styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/stylesheets'))
    .pipe(connect.reload());

});

gulp.task('lint-js', function () {
    return gulp.src('./ui_components/**/*.jsx')
        .pipe(react())
        .pipe(eslint())
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('./ui_components/**/*.jsx',['react']);
    gulp.watch('./styles/**/*.scss',['compile-sass']);
    gulp.watch('./client/**/*.js',['build-dev']);
    // gulp.watch('./client/apps/**/*.js',['build-dev']);
    gulp.watch('./client/apps/**/*.html', ['build-dev']);

});

gulp.task('test', function () {

        gulp.src('./test/*.js', { read: false })
                .pipe(mocha({ reporter: 'nyan' }));
});


gulp.task('develop',['build-dev'], function () {
  connect.server({
    livereload: true,
    port: 3000,
    root: 'public',
    fallback: 'public/index.html'

  })
});

gulp.task('pre-commit', function(files){
return true;
});

gulp.task('default', ['develop', 'watch']);
