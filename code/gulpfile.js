/*
var gulp = require("gulp");
gulp.src("02_dafeiji.html")
.pipe(gulp.dest('dest/html'));
*/
//
//var gulp = require("gulp");
//
//gulp.task("task1",function(){
//	console.log("任务1");
//})
//
//gulp.task("task2",["task1"],function(){
//	console.log("任务2");
//})

//var obj = {
//	removeComments: true, //清除HTML注释
//	collapseWhitespace: true, //压缩HTML
//	collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> ==> <input checked/>
//	removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
//	removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
//	removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
//	minifyJS: true, //压缩页面JS
//	minifyCSS: true //压缩页面CSS
//}



var gulp = require("gulp");

var babel = require('gulp-babel'); //es6转es5
var uglify = require('gulp-uglify'); //js压缩插件
//压缩js
gulp.task('jsTask2', function(){
	gulp.src('js/*.js')
	.pipe(babel({"presets": ["es2015"]})) //es6转es5
	.pipe(uglify()) //js压缩
	.pipe(gulp.dest('dest/js'));
});

gulp.task('default', ['jsTask2']);