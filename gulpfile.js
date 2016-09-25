var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    minifyCSS = require('gulp-minify-css');

var jslibPath = './app/bower_components/',
    csslibPath = './app/bower_components/';
//<script src="bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js"></script>
  // <script src="bower_components/jquery/dist/jquery.min.js"></script>
  // <script src="bower_components/angular/angular.js"></script>
  // <script src="bower_components/angular-bootstrap/ui-bootstrap.min.js"></script>
  // <script src="bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
  // <script src="bower_components/angular-loader/angular-loader.min.js"></script>
  // <script src="bower_components/angular-resource/angular-resource.min.js"></script>
  // <script src="bower_components/angular-route/angular-route.min.js"></script>
  // <script src="bower_components/angular-ui-router/release/angular-ui-router.min.js"></script>
  // <script src="bower_components/highcharts/highstock.js"></script>
  // <script src="bower_components/highcharts-ng/dist/highcharts-ng.min.js"></script>
  // <script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
  // <script src="bower_components/angular-sanitize/angular-sanitize.min.js"></script>
  // <script src="bower_components/angular-ui-select/dist/select.js"></script>





gulp.task('minjs', function() { 
    gulp.src([
        jslibPath + 'html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js',
        jslibPath + 'jquery/dist/jquery.min.js',
        jslibPath + 'angular/angular.js',
        jslibPath + 'angular-bootstrap/ui-bootstrap.min.js',
        jslibPath + 'angular-bootstrap/ui-bootstrap-tpls.min.js',
        jslibPath + 'angular-loader/angular-loader.min.js',
        jslibPath + 'angular-resource/angular-resource.min.js',
        jslibPath + 'angular-route/angular-route.min.js',
        jslibPath + 'angular-ui-router/release/angular-ui-router.min.js',
        jslibPath + 'highcharts/highstock.js',
        jslibPath + 'highcharts-ng/dist/highcharts-ng.min.js',
        jslibPath + 'bootstrap/dist/js/bootstrap.min.js',
        jslibPath + 'angular-sanitize/angular-sanitize.min.js',
        jslibPath + 'angular-ui-select/dist/select.js'
        ]) 
        // .pipe(plumber())
        .pipe(concat('index.js')) 
        .pipe(uglify()) 
        .pipe(gulp.dest('./app')); 
});

  // <link rel="stylesheet" href="bower_components/html5-boilerplate/dist/css/normalize.css">
  // <link rel="stylesheet" href="bower_components/html5-boilerplate/dist/css/main.css">
  // <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
  // <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap-theme.min.css">
  // <link rel="stylesheet" href="bower_components/angular-ui-select/dist/select.css">

gulp.task('mincss', function() {
    gulp.src([
        csslibPath + 'html5-boilerplate/dist/css/normalize.css',
        csslibPath + 'html5-boilerplate/dist/css/main.css',
        csslibPath + 'bootstrap/dist/css/bootstrap.min.css',
        csslibPath + 'bootstrap/dist/css/bootstrap-theme.min.css',
        csslibPath + 'angular-ui-select/dist/select.css'
        ])
        .pipe(plumber())
        .pipe(concat('index.css'))
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(gulp.dest('./app'))
});


gulp.task('default', ['minjs','mincss']);
