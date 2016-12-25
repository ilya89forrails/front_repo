
const gulp = require('gulp');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const livereload = require('gulp-livereload');
const tinylr = require('tiny-lr');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const debug = require('gulp-debug');