var gulp =require('gulp');
//压缩html
//gulp中插件应用 下载插件--》取到插件--》应用插件
var htmlClean = require('gulp-htmlclean')
// 压缩图片
var gulpImg = require('gulp-imagemin');
// 压缩js插件
var Uglify = require('gulp-uglify');
// 去掉js中的调试语句
// var debug = require('gulp-strip-debug');
// 将less转化为css
var less =require('gulp-less')
// 压缩css
var cleanCss =require('gulp-clean-css')
//postcss  autoprefixer css3加前缀
var postCss =require('gulp-postcss')
var autoprefixer =require('autoprefixer')
// 开启服务器
var connect = require('gulp-connect')
var folder={
    src:"src/",
    dist:"dist/"
}
// 判断当前环境变量
var devMod = process.env.NODE_ENV=="development";
// export NODE_ENV=development 设置环境变量
// console.log(devMod)

gulp.task('html',function(){
   var page= gulp.src(folder.src+"html/*")
        .pipe(connect.reload())
        if(!devMod){        
            page.pipe(htmlClean())}
        page.pipe(gulp.dest(folder.dist+"html/"))
})
gulp.task('img',function(){
    gulp.src(folder.src+"img/*")
        .pipe(gulpImg())
        .pipe(gulp.dest(folder.dist+"img/"))
})
gulp.task('css',function(){
    var page = gulp.src(folder.src+"css/*")
        .pipe(connect.reload())//自动刷新
        .pipe(less())
        .pipe(postCss([autoprefixer()]))
        // .pipe((autoprefixer()))
        if(!devMod){
       page.pipe(cleanCss())
        }
        page.pipe(gulp.dest(folder.dist+"css/"))
})
gulp.task('js',function(){
   var page = gulp.src(folder.src+"js/*")
        .pipe(connect.reload())
        if(!devMod){
        page.pipe(Uglify())
        // .pipe(debug())
        }
        page.pipe(gulp.dest(folder.dist+"js/"))
})
gulp.task('server',function(){
    connect.server({
        port:8888,
        livereload:true,
    })
})
// 监听文件变化
gulp.task('watch',function(){
    gulp.watch(folder.src+'html/*',['html'])
    gulp.watch(folder.src+'css/*',['css'])
    gulp.watch(folder.src+'js/*',['js'])
})
gulp.task("default",['html','img','css','js','server','watch'])

// gulp.src()输出
// gulp.dest() 输入传输
// gulp.watch() 监听文件的改变
// gulp.symlink()
// gulp.task()自定义事件