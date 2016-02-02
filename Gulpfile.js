var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
	
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('./web/**/**').on('change', browserSync.reload);
	
	browserSync.init({
		server: './'
	});
});