module.exports = {
  src: {
    pug: ['src/pug/**/*.pug', '!' + 'src/pug/**/_*.pug'],
    scss: 'src/scss/**/*.scss',
    css: 'src/css/**/*.css',
    js: 'src/js/**/*.js',
    img: 'src/img/**'
  },
  dist: {
    pug: 'dist',
    scss: 'dist/css',
    css: 'dist/css',
    js: 'dist/js',
    img: 'dist/img'
  },
  config:{
    tailwind:'tailwind.config.js'
  }
};
