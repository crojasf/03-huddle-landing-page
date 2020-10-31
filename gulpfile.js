var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');

var tailwindcss = require('tailwindcss');
var autoprefixer = require('autoprefixer');


function defaultTask(cb) {
	// place code for your default task here
	var processors = [
		tailwindcss,
		autoprefixer,
	];
	// return gulp.src(['./src/*.scss', '!./src/_*.scss'])
	return gulp.src('./src/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(gulp.dest('./css'));
}

exports.default = function(){
	gulp.watch('./src/*.scss', gulp.series(defaultTask));
}
