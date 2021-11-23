const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');

/*const terser = require('gulp-terser');
const typescript = require('gulp-typescript');*/

function sassTaskDev() {
    return src(['src/**/*.scss', '!src/**/*.test.scss', '!src/.old/*.scss'], {sourcemaps: true})
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./src', {sourcemaps: '.'}));
}

function sassTaskDevTests() {
    return src(['src/**/*.test.scss', '!src/.old/*.scss'], {sourcemaps: true})
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./src', {sourcemaps: '.'}));
}

function sassTaskProd() {
    return src('src/main.scss', {sourcemaps: true})
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([ cssnano ]))
        .pipe(dest('./src', {sourcemaps: '.'}));
}

function sassTaskTest() {
    return src('test/**/*.scss', {sourcemaps: true})
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./test', {sourcemaps: '.'}));
}

/*function tsTask() {
    return src(['test/scripts/!**!/!*.ts', 'src/!**!/!*.ts'])
        .pipe(typescript())
        .pipe(terser())
        .pipe(dest('test/scripts'));
}*/

function watchTask() {
    watch(['src/**/*.scss', '!src/**/*.test.scss'], sassTaskDev());
    watch(['test/**/*.scss'], sassTaskTest());
    watch(['src/main.scss'], sassTaskProd());
    // watch('test/scripts/**/*.ts', tsTask());
}

exports.default = series(
    sassTaskDev,
    // sassTaskDevTests,
    sassTaskTest,
    sassTaskProd,
    // tsTask, // tsTask() disabled on default until we find a fix for this [DEV]
    // watchTask
);