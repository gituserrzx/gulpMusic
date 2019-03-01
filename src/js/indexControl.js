//index 控制
(function($,root){
    function IndexControl(len){
        this.index =0;
        this.len = len;
    }
    IndexControl.prototype ={
        prve:function(){
           return this.getIndex(-1);
        },
        next:function(){
            return this.getIndex(1);
        },
        getIndex:function(val){
            var curIndex = (val+this.index +this.len)%this.len;
            this.index = curIndex;
            return curIndex;
        }
    }
        
    root.indexControl = IndexControl;

})(window.Zepto,window.player||(window.player={}))