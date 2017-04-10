const gulp = require('gulp');

const copy= ()=>{
    return gulp.src('./src/ng-kux/**/*.*').pipe(gulp.dest('./dist'))
}

gulp.task('prepublish',gulp.series([copy]))