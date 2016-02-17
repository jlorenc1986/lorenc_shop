var gulp  =  require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var react = require('gulp-react');
var nodemon = require('gulp-nodemon');
var sass    = require('gulp-sass');
var path    = require('path');
var sassLint = require('gulp-scss-lint');

gulp.task('react', function () {
    return gulp.src('./ui_components/*.jsx').pipe(react()).pipe(gulp.dest('./public/javascripts/components/'));
});

gulp.task('lint', function(){

  return gulp.src('/styles/**/*.scss')
    .pipe(sassLint());

});

gulp.task('sass', function(){
    return gulp.src('./styles/**/*.scss')
        .pipe(sass({

        }))
        .pipe(gulp.dest('./public/stylesheets/'));

});

gulp.task('watch', function(){
    gulp.watch('./ui_components/**/*.jsx',['react']);
    gulp.watch('./styles/**/*.scss',['sass']);
});


gulp.task('develop', function(){
    nodemon({
      script: 'app.js',
      ext: 'html js jsx',
      env: { "NODE_ENV": "development"  },
      // tasks: ['sass-lint']

    })
        .on('restart', function () {
            console.log('restarted!')
        })
});

gulp.task('default', ['develop','react', 'watch']);
