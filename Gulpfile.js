const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const istanbul = require('gulp-istanbul');
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

gulp.task('pre-test', () => {
  return gulp.src(['lib/**/*.js'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['build', 'pre-test'], () => {
  return gulp.src('test/**/*.spec.js', { read: false })
    .pipe(mocha({
      reporter: 'spec',
      compilers: 'js:babel-core/register',
      colors: true,
      harmony: true
    }))
    .pipe(istanbul.writeReports())
    .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
});

gulp.task('watch', () => {
  gulp.watch(['src/**/*.js', 'test/**/*.spec.js'], ['test']);
});

gulp.task('default', ['build', 'watch']);
