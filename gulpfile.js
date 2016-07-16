/*
 *  Gulpfile
 *  By Cory Wilson
 */

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const cleanCss = require('gulp-clean-css');
const del = require('del');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack-stream');


/*
 *  Set Up Directory Config Object
 */

const config = {
    dev: {
        base: './dev',
        scripts: './dev/scripts',
        styles: './dev/styles',
    },
    dest: {
        base: './dist',
        scripts: './dist/scripts',
        styles: './dist/styles',
    },
    webpack: require('./webpack.config'),
};


/*
 *  Build Tasks
 */

// Build Webpack Bundled Scripts
gulp.task('build:webpack', ['clean:webpack'], () => {
    return gulp.src(`${config.dev.scripts}/main.js`)
        .pipe(webpack(config.webpack))
        .pipe(gulp.dest(config.dest.scripts));
});

// Build Minified Styles
gulp.task('build:styles', ['clean:styles'], () => {
    if (process.env.NODE_ENV === 'production') {
        return gulp.src(`${config.dev.styles}/main.scss`)
            .pipe(sassGlob())
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(cleanCss())
            .pipe(rename(path => path.extname = '.min.css'))
            .pipe(gulp.dest(`${config.dest.styles}`))
            .pipe(browserSync.stream());
    } else {
        return gulp.src(`${config.dev.styles}/main.scss`)
            .pipe(sourcemaps.init())
            .pipe(sassGlob())
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(cleanCss())
            .pipe(rename(path => path.extname = '.min.css'))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(`${config.dest.styles}`))
            .pipe(browserSync.stream());
    }
});

// Build site directory
gulp.task('build', [
    'build:webpack',
    'build:styles',
]);


/*
 *  Clean Tasks
 */

// Clean Webpack
gulp.task('clean:webpack', () => del([`${config.dest.scripts}/*.js`]));


// Clean Styles
gulp.task('clean:styles', () => del([`${config.dest.styles}/*.css`]));


// Clean site directory
gulp.task('clean', [
    'clean:webpack',
    'clean:styles',
]);


/*
 *  Watch Tasks
 */

// Watch Scripts
gulp.task('watch:scripts', [
    'build:webpack',
], browserSync.reload);

// Watch Styles
gulp.task('watch:styles', [
    'build:styles',
], browserSync.reload);

// Watch Task
gulp.task('watch', [
    'watch:scripts',
    'watch:styles',
]);


/*
 *  Browser-Sync Task
 */

gulp.task('browser-sync', ['build'], () => {
    // Initialize Browser-Sync Proxy Server
    browserSync.init({
        server: {
            baseDir: './',
            browser: 'none',
            open: false,
        },
    });

    // Call watch of CSS Files
    gulp.watch(`${config.dev.styles}/**/*.scss`, ['build:styles']);

    // Call watch of JS Files
    gulp.watch(`${config.dev.scripts}/**/*.js`, ['watch:scripts']);

    // Call watch of HTML files
    gulp.watch('./*.html').on('change', browserSync.reload);
});


/*
 *  Default Gulp Task
 */

gulp.task('default', ['browser-sync']);
