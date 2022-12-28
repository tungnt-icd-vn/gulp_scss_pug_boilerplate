const { src, dest } = require('gulp');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const browserSync = require('browser-sync').get('Main');

const path = require('./path');

const imgTask = () => {
  return src(path.src.img)
    .pipe(changed(path.dist.img))
    .pipe(imagemin())
    .pipe(dest(path.dist.img))
    .pipe(browserSync.stream());
};

exports.imgTask = imgTask;
