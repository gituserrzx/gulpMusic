//页面渲染
(function($,root){
        function renderInfo(data){
            var str ='<div class="info-mName">'+data.song+'</div>\
            <div class="info-music">'+data.singer+'</div>\
            <div class="info-album">'+data.album+'</div>'
            $('.info').html(str);
        }
        function renderImg(data){
            var img  = new Image();
            img.src = data.image;
            img.onload =function(){
            $('.img-box img').attr('src',data.image);
            root.blurImg(img,$('body'))
            }
        }
        function isLike(data){
            data.isLike?$('.like').addClass('liked'):$('.like').removeClass('.liked')
        }
    root.render = function(data){
        renderImg(data);
        renderInfo(data);
        isLike(data);
    };
})(window.Zepto,window.player||(window.player={}))