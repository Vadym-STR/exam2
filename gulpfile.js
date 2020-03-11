const
    {pathes} = require('./package.json'),
    gulp = require('gulp'),
    {series, parallel} = require('gulp'),
    pug = require('gulp-pug')
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    rename = require("gulp-rename"),
    svgSymbols = require('gulp-svg-symbols'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    webpack = require('webpack-stream'),
    webpackConfig = require('./webpack.config.js')

function compilePug(cb) {
    return gulp.src(`${pathes.src}/${pathes.pug}`)
        .pipe(pug({
            pretty: '    '
        }))
        .pipe(gulp.dest(pathes.dev))

    cb()
}

function compileScss(cb) {
    gulp.src(`${pathes.src}/${pathes.scss}`)
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(pathes.dev))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(pathes.dev))

    cb()
}

function moveHTML (cb) {
    gulp.src(`${pathes.src}/${pathes.html}`)
        .pipe(gulp.dest(`${pathes.dev}`))

    cb()
}

function minifyImages(cb) {
   gulp.src(`${pathes.assets}/${pathes.images}/${pathes.all}`)
        .pipe(plumber())
        .pipe(gulp.dest(`${pathes.dev}/${pathes.images}`))

    cb()
}

function compileFonts(cb) {
   gulp.src(`${pathes.assets}/${pathes.fonts}/${pathes.all}`)
        .pipe(gulp.dest(`${pathes.dev}/${pathes.fonts}`))

    cb()
}

function compileJSNext(cb) {
   gulp.src(`${pathes.src}/${pathes.js}`)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(`${pathes.dev}`))

    cb()
}

function compileJS(cb) {
   gulp.src(`${pathes.src}/${pathes.js}`)
        .pipe(gulp.dest(`${pathes.dev}`))

    cb()
}

function makeSvgSprite(cb) {
    const cmpName = 'svg-symbols';

    let configSvgSymbols = {
        slug: cmpName,
        svgAttrs: {
            class: cmpName,
            hidden: true
        },
        id: `icon-%f`,
        class: `.icon_%f`,
        title: false,
        templates: [`default-svg`, `default-scss`]
    }

    gulp.src(`${pathes.svg}/${pathes.sprite}/${pathes.all}`)
        .pipe(plumber())
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[height]').removeAttr('height');
                $('[style]').removeAttr('style');
                $('[fill-rule]').removeAttr('fill-rule');
            },
            parserOptions: {xmlMode: true}
        }))
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(replace('&gt;', '>'))
        .pipe(svgSymbols(configSvgSymbols))
        .pipe(gulp.dest(`${pathes.src}/${cmpName}`))

    cb()
}

function watchFiles(cb) {
    gulp.watch(`${pathes.src}/${pathes.html}`, moveHTML)
    gulp.watch(`${pathes.src}/${pathes.pug}`, compilePug)
    gulp.watch(`${pathes.src}/${pathes.scss}`, compileScss)
    gulp.watch(`${pathes.src}/${pathes.js}`, compileJSNext)
    gulp.watch(`${pathes.src}/${pathes.js}`, compileJS)
    gulp.watch(`${pathes.assets}/${pathes.images}/${pathes.all}`, minifyImages)
    gulp.watch(`${pathes.assets}/${pathes.fonts}/${pathes.all}`, compileFonts)
    gulp.watch(`${pathes.svg}/${pathes.sprite}/${pathes.all}`, makeSvgSprite)

    cb()
}

const build = series(makeSvgSprite, minifyImages, compileFonts, parallel(compilePug, compileScss, moveHTML, compileJSNext, compileJS, watchFiles))

exports.compileJSNext = compileJSNext
exports.compileJSNext = compileJS
exports.compileFonts = compileFonts
exports.moveHTML = moveHTML
exports.compilePug = compilePug
exports.compileScss = compileScss
exports.minifyImages = minifyImages
exports.makeSvgSprite = makeSvgSprite
exports.watchFiles = watchFiles
exports.default = build
