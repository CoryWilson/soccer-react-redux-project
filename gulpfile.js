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
 *  Gulp Setup
 */

const paths = require('./paths.config');


/*
 *  Webpack Setup
 */

const webpackConfigDev = require('./webpack.config');
const webpackConfigProd = require('./webpack.config.prod');


/*
 *  Environmental Setup Tasks
 */

gulp.task('set-prod-node-env', () => { process.env.NODE_ENV = 'prod'; });
gulp.task('set-dev-node-env', () => { process.env.NODE_ENV = 'dev'; });


/*
 *  Build Tasks
 */

// Build Webpack Bundled Scripts
gulp.task('build-dev:webpack', ['clean:webpack', 'set-dev-node-env'], () => {
    gulp.src(paths.dev.scripts)
        .pipe(webpack(webpackConfigDev))
        .pipe(gulp.dest(paths.dest.scripts));
});

gulp.task('build-prod:webpack', ['clean:webpack', 'set-prod-node-env'], () => {
    // Will need to update the entry js file
    gulp.src(paths.dev.scripts)
        .pipe(webpack(webpackConfigProd))
        .pipe(gulp.dest(paths.dest.scripts));
});

// Build Non-Minified Styles
gulp.task('build-dev:styles', ['clean:styles', 'set-dev-node-env'], () => {
    gulp.src(`${paths.dev.styles}/main.scss`)
        .pipe(sourcemaps.init())
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(rename(path => path.extname = '.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(`${paths.dest.styles}`))
        .pipe(browserSync.stream());
});

gulp.task('build-prod:styles', ['clean:styles', 'set-prod-node-env'], () => {
    gulp.src(`${paths.dev.styles}/main.scss`)
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCss())
        .pipe(rename(path => path.extname = '.min.css'))
        .pipe(gulp.dest(`${paths.dest.styles}`));
});

// Build site directory
gulp.task('build-dev', [
    'build-dev:webpack',
    'build-dev:styles',
]);

gulp.task('build-prod', [
    'build-prod:webpack',
    'build-prod:styles',
]);


/*
 *  Clean Tasks
 */

// Clean Webpack
gulp.task('clean:webpack', () => del([`${paths.dest.scripts}/*`]));

// Clean Styles
gulp.task('clean:styles', () => del([`${paths.dest.styles}/*`]));

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
    'build-dev:webpack',
], browserSync.reload);

// Watch Styles
gulp.task('watch:styles', [
    'build-dev:styles',
], browserSync.reload);

// Watch Task
gulp.task('watch', [
    'watch:scripts',
    'watch:styles',
]);


/*
 *  Browser-Sync Task
 */

gulp.task('browser-sync', ['build-dev'], () => {
    // Initialize Browser-Sync Proxy Server
    browserSync.init({
        server: {
            baseDir: './',
            browser: 'none',
            open: false,
        },
    });

    // Call watch of CSS Files
    gulp.watch(`${paths.dev.styles}/**/*.scss`, ['build-dev:styles']);

    // Call watch of JS Files
    gulp.watch(`${paths.dev.scripts}/**/*.js`, ['watch:scripts']);

    // Call watch of HTML files
    gulp.watch('./*.html').on('change', browserSync.reload);
});


/*
 *  Default Gulp Task
 */

gulp.task('default', ['browser-sync']);
