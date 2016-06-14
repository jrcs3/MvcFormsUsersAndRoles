/// <binding />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

// run "devenv /installvstemplates" to load new template

var gulp = require('gulp');
var replace = require('gulp-replace');
var del = require('del');
var tap = require('gulp-tap');
var path = require('path');


var NAMESPACE_FROM = 'MvcFormsUsersAndRoles';
var NAMESPACE_TO = '$rootnamespace$';
var TO_DIR = "TemplateOutput";
var ROUTE_NAMES = '{RolesAdmin,UsersAdmin,SeedUser}'

var thisDir = process.cwd() + "\\";

gulp.task('clean', function () {
    return del(TO_DIR);
});

//gulp.task('cleanZip', function () {
//    return del('teplates');
//});

gulp.task('Controllers', ['clean'], function () {
    doReplace('Controllers', ROUTE_NAMES + 'Controller.cs');
});

gulp.task('Views', ['clean'], function () {
    doReplace('Views', ROUTE_NAMES + '/**/*.cshtml');
});

gulp.task('Models', ['clean'], function () {
    doReplace('Models', 'FormsAuthViewModel.cs');
});

gulp.task('AppStart', ['clean'], function () {
    doReplace('App_Start', 'FormsAuthConfig.cs');
});


var reportOptions = {
    err: true,
    stderr: true,
    stdout: true
};

gulp.task('build-Debug', [], function () {
    console.log("do nothing");
});

gulp.task('build-Release', [], function () {
    console.log("do nothing");
});

gulp.task('CopyTemplate', ['clean'], function () {
    gulp.src('Template/FormsAuth.vstemplate')
        .pipe(gulp.dest(TO_DIR));
});

gulp.task('CopyIcon', ['clean'], function () {
    gulp.src('Template/Simiographics-Secure-PadLock.ico')
        .pipe(gulp.dest(TO_DIR));
});


gulp.task('CopyReadme', ['clean'], function () {
    gulp.src('Template/FormsAuthReadMe.txt')
        .pipe(gulp.dest(TO_DIR));
});

//gulp.task('default', ['clean'], function () {
gulp.task('default', ['AppStart', 'Controllers', 'Views', 'Models', 'CopyTemplate', 'CopyIcon', 'CopyReadme'], function () {
    console.log("do nothing");
    //return gulp.src('README.md')
    //.pipe(zip('myTemplate.zip'))
    //.pipe(gulp.dest('.\new'));
});

function doReplace(directory, pattern) {
    gulp.src(directory + '/' + pattern)
        .pipe(tap(function (file, t) {
            //console.log(formatTemplateContent(directory + '/' + path.basename(file.path)));
            console.log(formatTemplateContent(file.path.replace(thisDir, "")));
        }))
        .pipe(replace(NAMESPACE_FROM, NAMESPACE_TO))
        .pipe(gulp.dest(TO_DIR + '/' + directory));
}

// Extra Functions:
function formatTemplateContent(fileName) {
    return '<ProjectItem TargetFileName="' + fileName + '" ReplaceParameters="true">' + fileName + '</ProjectItem>';
}