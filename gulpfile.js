
var gulp = require('gulp');
var args = require('yargs');
var config = require('./gulp.config')();

var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('vet', function() {
  log('Analyzing source withJSHint and JSCS');
  return gulp.src(config.alljs)
  .pipe($.if(args.verbose, $.print()))
  .pipe($.jscs())
  .pipe($.jshint())
  .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
  .pipe($.jshint.reporter('fail'));
});

gulp.task('wiredep', function(){
  var options = config.getWiredepDefaultOptions(); 
  var wiredep = require('wiredep').stream;

  return gulp 
  .src(config.index) //TODO index.html
  .pipe(wiredep(options))
  .pipe($.inject(gulp.src(config.js))) //TODO js ?
  .pipe(gulp.destination(config.client)); //TODO config ?
});

function log(msg) {
  if(typeof(msg) === 'object') {
    for(var item in msg) {
      if(msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.blue(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.blue(msg));
  }
}



