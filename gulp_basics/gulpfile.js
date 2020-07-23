const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const GulpClient = require("gulp");

/*
    -- TOP LEVEL FUNCTIONS --
    gulp.task - Define tasks
    gulp.src - Point to files to use
    gulp.dest - Point to folder to output
    gulp.watch - Watch files and folders for changes
*/

// Logs Message
const message = done => {
    console.log("Gulp is running...");
    done();
};

// Copy all HTML files
const copyHtml = done => {
    gulp.src("src/*.html")
        .pipe(gulp.dest("dist"));
    done();
};

// Optimize Images
const optimizeImg = done => {
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
    done();
};

// Minify JS
const minify = done => {
    gulp.src("src/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"));
    done();
};

// Compile Sass
const compileSass = done => {
    gulp.src("src/sass/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("dist/css"));
    done();
};

// Scripts
const scripts = done => {
    gulp.src("src/js/*.js")
        .pipe(concat("main.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"));
    done();
};

exports.minify = minify;
exports.default = gulp.series(message, copyHtml, optimizeImg, compileSass, scripts);

exports.watch = done => {
    gulp.watch("src/js/*.js", scripts);
    gulp.watch("src/img/*", optimizeImg);
    gulp.watch("src/sass/*.scss", compileSass);
    gulp.watch("src/*.html", copyHtml);
    done();
};