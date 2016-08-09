const gulp = require('gulp');
const babel = require('gulp-babel');
const child = require('child_process');
require('gulp-dev-tasks');

const source = ['src/**/*.js', 'src/**/*.jsx'];

gulp.task('build', () => (
  gulp.src(source)
    .pipe(babel({ presets: ['es2015', 'react', 'stage-1'] }))
    .pipe(gulp.dest('build/'))
));

gulp.task('dev-server', () => {
  const styleguidist = child.spawn('./node_modules/.bin/styleguidist', ['server']);
  styleguidist.stdout.on('data', (data) => console.log(`Styleguidist says: ${data}`));
  styleguidist.stderr.on('data', (data) => console.error(`Styleguidist cries: ${data}`));
});

gulp.task('default', ['lint', 'build', 'dev-server'], () => {
  gulp.watch(source, ['lint', 'build']);
});
