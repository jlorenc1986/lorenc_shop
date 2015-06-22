var gulp  =  require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var react = require('gulp-react');


gulp.task('react', function () {
    return gulp.src('./ui_components/*.jsx').pipe(sourcemaps.init()).pipe(react()).pipe(sourcemaps.write('.')).pipe(gulp.dest('./public/javascripts/components/'));
});


gulp.task('watch', function(){
    gulp.watch('./ui_components/**/*.jsx',['react']);
});

gulp.task('default', ['react', 'watch']);


