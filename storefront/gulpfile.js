var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var sassGlob = require('gulp-sass-glob');

  gulp.task('sass',function(){
    return gulp.src('main.scss')
    .pipe(sourcemaps.init()) //załadowanie sourcemaps
    .pipe(sassGlob())
    .pipe(sass({
      errLogToConsole:true,
      outputStyle:'expanded'
    }))
    .pipe(sourcemaps.write()) //zapis sourcemaps
    .pipe(gulp.dest('css'));
});

gulp.task('watch',['sass'], function(){
  gulp.watch('assets/sass/animation/*.scss',['sass']);
});
