const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('lint', () => {
  return gulp.src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('build', ['lint'], () => {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('lib'));
});

gulp.task('test', ['build'], () => {
  return gulp.src('test/**/*.spec.js', { read: false })
    .pipe(mocha({
      reporter: 'spec',
      compilers: 'js:babel-core/register',
      colors: true,
      harmony: true
    }));
});

gulp.task('watch', () => {
  gulp.watch(['src/**/*.js', 'test/**/*.spec.js'], ['test']);
});

gulp.task('default', ['build', 'watch']);
