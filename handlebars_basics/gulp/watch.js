const GulpClient = require("gulp");
const gulp = require("gulp");

module.exports = function () {
  gulp.watch("./templates/*.hbs", gulp.series("templates"));
};
