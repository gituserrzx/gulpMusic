//歌曲播放
(function($,root){
    function AudioManager(){
        this.audio = new Audio();
        this.status = 'pause';
    }
    AudioManager.prototype = {
        getAudio:function(data){
            this.audio.src =data.audio;
            this.audio.load(); 
        },
        play:function(){
            this.audio.play();
            this.status = 'play';
        },
        pause:function(){
            this.audio.pause();
            this.status = "pause";
        },
        playTo:function(time){
            this.audio.currentTime =time;
        }
    }
    root.audioManager = new AudioManager();
})(window.Zepto,window.player||(window.player ={}))