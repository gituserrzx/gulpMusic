!function(i,t){var a,o;function m(t){var e=Math.floor(t/60),r=t-60*e;return(e=e<10?"0"+e:e)+":"+(r=r<10?"0"+r:r)}function u(t){var e=100*(t-1)+"%";i(".bar-show").css({transform:"translateX("+e+")"})}(window.player||(window.player={})).time={renderTime:function(t){var e=m(time.duration=t);i(".dur").html(e)},showTime:m,start:function(){cancelAnimationFrame(a);var n=(new Date).getTime();!function t(){var e=(new Date).getTime();o=(e-n)/(1e3*time.duration),o+=parseFloat(time.pro);var r=m(Math.floor((e-n)/1e3+time.proTime));i(".cur").html(r),u(o),a=requestAnimationFrame(t)}()},stop:function(){cancelAnimationFrame(a),time.pro=o,time.proTime=o*time.duration},update:u,pro:0,proTime:0,duration:null}}(window.Zepto);