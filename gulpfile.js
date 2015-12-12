var gulp = require('gulp');
var imageop = require('gulp-image-optimization');
 
gulp.task('images', function(cb) {
    gulp.src(['assets/**/*.png', '!assets/Website_Mockup.png']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('images')).on('end', cb).on('error', cb);
});

// Default Task
gulp.task('default', ['images']);