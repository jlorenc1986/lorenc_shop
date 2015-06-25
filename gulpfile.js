var gulp  =  require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var react = require('gulp-react');
var nodemon = require('gulp-nodemon');
var less    = require('gulp-less');
var path    = require('path');

gulp.task('react', function () {
    return gulp.src('./ui_components/*.jsx').pipe(react()).pipe(gulp.dest('./public/javascripts/components/'));
});


gulp.task('less', function(){
    return gulp.src('./styles/**/*.less')
        .pipe(less({

        }))
        .pipe(gulp.dest('./public/stylesheets/'));

});

gulp.task('watch', function(){
    gulp.watch('./ui_components/**/*.jsx',['react']);
});


gulp.task('develop', function(){
    nodemon({ script: 'bin/www'
        , ext: 'html js jsx'
    })
        .on('restart', function () {
            console.log('restarted!')
        })
});

gulp.task('default', ['develop','react', 'watch']);


