gulp = require('gulp');
mini = require('gulp-minify-css')
uglify = require('gulp-uglify')
sass = require('gulp-sass')
smap = require('gulp-sourcemaps')
prefixr = require('gulp-autoprefixer')
server = require('gulp-webserver')


gulp.task('sass', function(){
	gulp.src('./sass/style.scss')
	.pipe(smap.init())
	.pipe(sass())
	.pipe(prefixr('last 2 version'))
	.pipe(mini())
	.pipe(smap.write())
	.pipe(gulp.dest('./css'))
});

gulp.task('webserver', function() {
	gulp.src('./')
		.pipe(server({
			livereload: true,
			directoryListing: true,
			open: true
		}));
});

gulp.task('watch', function() {;
		gulp.watch('sass/*.scss', ['sass'])
});

gulp.task('default', function() {
	gulp.start('sass', 'webserver', 'watch')
})