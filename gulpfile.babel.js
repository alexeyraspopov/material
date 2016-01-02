import gulp from 'gulp';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import styleguide from 'postcss-style-guide';
import imports from 'postcss-import';
import variables from 'postcss-custom-properties';
import colors from 'postcss-color-function';
import autoprefixer from 'autoprefixer';

gulp.task('default', ['css', 'watch']);

gulp.task('watch', () => {
	gulp.watch('src/*.css', ['css']);
});

gulp.task('css', () => {
	return gulp.src('src/main.css')
		.pipe(postcss([
			colors,
			imports,
			variables,
			styleguide,
			autoprefixer,
		]))
		.pipe(rename('output.css'))
		.pipe(gulp.dest('.'));
});
