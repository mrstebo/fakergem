const path = require('path');
const gulp = require('gulp');
const babel = require('gulp-babel');
const coveralls = require('gulp-coveralls');
const eslint = require('gulp-eslint');
const istanbul = require('gulp-istanbul');
const mocha = require('gulp-mocha');
const isparta = require('isparta');

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
  return gulp.src(['src/**/*.js'])
    .pipe(istanbul({
      instrumenter: isparta.Instrumenter,
      includeUntested: true
    }))
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], () => {
  return gulp.src('test/**/*.spec.js', { read: false })
    .pipe(mocha({
      reporter: 'spec',
      compilers: 'js:babel-core/register',
      colors: true,
      harmony: true
    }))
    .pipe(istanbul.writeReports());
    // .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
});

gulp.task('coveralls', ['test'], () => {
  if (!process.env.CI) {
    return;
  }
  return gulp.src(path.join(__dirname, 'coverage/lcov.info'))
    .pipe(coveralls());
});

gulp.task('watch', ['test'], () => {
  gulp.watch(['src/**/*.js', 'test/**/*.spec.js'], ['test']);
});

gulp.task('default', ['test', 'coveralls']);
