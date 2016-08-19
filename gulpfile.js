/* eslint no-console: "off" */

const gulp = require('gulp');
const babel = require('gulp-babel');
const child = require('child_process');
const exec = require('child_process').exec;
const gdt = require('gulp-dev-tasks');
const eslintrc = require('./.eslintrc.json');

const source = ['src/**/*.js', 'src/**/*.jsx'];

gdt.setRules(eslintrc.rules);

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

gulp.task('publish', () => {
  exec('rm -rf docs');
  const styleguidist = child.spawn('./node_modules/.bin/styleguidist', ['build']);
  styleguidist.stderr.on('data', (data) => console.error(`Styleguidist cries: ${data}`));
  styleguidist.on('exit', () => {
    console.log('Style guide published to ./docs');
  });
});

gulp.task('default', ['lint', 'build', 'dev-server'], () => {
  gulp.watch(source, ['lint', 'build']);
});
