(function($,root){
    // 渲染时间
    var  frameId;
    
    var progress;
    function renderTime(times){
        time.duration=times;
        var dur = showTime(times);
        $('.dur').html(dur);
    }
    function showTime(t){
       var m=Math.floor(t/60);
        var s = t-m*60;
       m= m<10?'0'+m:m;
       s=s<10?'0'+s:s;
        return m+":"+s;
    }
    function start(){
        cancelAnimationFrame(frameId)
        var curTime = new Date().getTime();
        move();
        function move(){
            var newTime = new Date().getTime();
             progress = (newTime -curTime)/(time.duration*1000);
             progress +=parseFloat(time.pro);
            var cur  =showTime(Math.floor((newTime -curTime)/1000+time.proTime))
            $('.cur').html(cur) 
           update(progress)
            frameId = requestAnimationFrame(move)
    }
    }
    function update(progress){
        var translateX = (progress -1)*100+'%';    
        $('.bar-show').css({
            transform:'translateX('+translateX+')'
        })
    }
    function stop(){
        cancelAnimationFrame(frameId);
        time.pro = progress; 
        time.proTime = progress*time.duration
    }
    root.time={
        renderTime :renderTime,
        showTime : showTime,
        start:start,
        stop :stop,
        update:update,
        pro :0,
        proTime:0,
        duration:null,
    }
   
})(window.Zepto,window.player||(window.player={}))