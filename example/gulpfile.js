const gulp = require('gulp');
const gls = require('gulp-live-server');

const browserify = require('browserify');
const babelify = require('babelify');

const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

gulp.task('default', ['scripts:browserify'], () => {
  const server = gls('run.js', undefined, false);
  server.start();
});

gulp.task('scripts:browserify', () => {
  const bundler = browserify('./client.js', { debug: true }).transform(babelify);
  return bundler.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./build'));
});
