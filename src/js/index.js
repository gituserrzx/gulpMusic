var render = player.render;
var len;
var indexCon;
var res;
var audios = player.audioManager;
var timer;
var time = player.time;
function getData(url){
    $.ajax({
        type:'GET',
        url:url,
        success:function(data){
           render(data[0]);
           res =data;
           len = data.length;
           indexCon = new player.indexControl(len);
           audios.getAudio(data[0])
           time.renderTime(data[0].duration)  
           bindEvent(); 
           touchEvent(); 
        }   
    })
}
getData('../mock/data.json')
function bindEvent(){
    $('body').on('playChange',function(e,index){
        $('.img').css({
            'transform':'rotateZ('+ 0+'deg)'
        })
        audios.getAudio(res[index])
        render(res[index])
        time.renderTime(res[index].duration)
        time.pro =0;
        time.proTime =0;  
        if(audios.status=='play')
        {       
            audios.play()
            rotate(0);
            time.start()
    }        
    })
    $('.play').on('click',function(){
        if(audios.status=='pause'){
            time.start();
            audios.play()
              var  deg = $('.img').data('deg');
            rotate(deg)
           $(this).addClass('pause');
        }else{
            audios.pause()
           clearInterval(timer);
           time.stop();
           $(this).removeClass('pause')
        } 
        // $(this).toggleClass('pause')
    })
    $('.prve').on('click',function(){
        $('.img').data('deg',0)
        var i =indexCon.prve()
        $('body').trigger('playChange',i)
    })
    $('.next').on('click',function(){
        $('.img').data('deg',0)
        var i =indexCon.next()
        $('body').trigger('playChange',i)
    })
}
function touchEvent(){
    var left= $('.bar-bg').offset().left;
    var width =$('.bar-bg').width();
    $('.circle').on('touchstart',function(e){
        audios.pause();
    }).on('touchmove',function(e){
       var disX = e.changedTouches[0].clientX; 
       var x=disX-left;
       x=x>width?width:x;
       var per = x/width;
       $('.bar-show').offset({
           left:disX-x,
       })
       time.pro =per;
       time.proTime=per*time.duration;
       if(per>0&&per<1){
        time.update(per);
       }
    }).on('touchend',function(){
        if(time.pro>0&&time.pro<1){
            audios.playTo(time.proTime);
                $('.play').trigger('click')
           }
    })
   
}
$(audios.audio).on('ended',function(){
    $('.next').trigger('click');
})
function rotate(deg){ 
    clearInterval(timer)  
    deg =+deg
    timer= setInterval(function(){
        deg+=2;
        $('.img').data('deg',deg).css({
            'transform':'rotateZ('+ deg+'deg)'
        })
    },300)
}   



//图片旋转
//歌曲列表
//暂停 播放 切歌 点击图标切换
//信息图片渲染
//拖拽小球与进度条运动