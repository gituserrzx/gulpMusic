!function(i,t){function a(){this.audio=new Audio,this.status="pause"}a.prototype={getAudio:function(i){this.audio.src=i.audio,this.audio.load()},play:function(){this.audio.play(),this.status="play"},pause:function(){this.audio.pause(),this.status="pause"},playTo:function(i){this.audio.currentTime=i}},t.audioManager=new a}(window.Zepto,window.player||(window.player={}));