window.onload = function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    /* 画布偏移量，下面用到的时候再介绍*/
    var arr = getOffset(canvas);
    var oLeft = arr[0];
    var oTop = arr[1];

    /* 初始化画布*/
    ctx.beginPath();
    ctx.fillStyle = '#ccc';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.closePath();

     /* 增加触摸监听*/
    document.addEventListener("touchstart",function(){
        /* 初始化画笔*/
        ctx.beginPath();
        /* 画笔粗细*/
        ctx.lineWidth = 30;
        /* 设置组合效果*/
        ctx.globalCompositeOperation = 'destination-out';
        /* 移动画笔原点*/
        ctx.moveTo(event.touches[0].pageX-oLeft,event.touches[0].pageY-oTop);
    },false)    

    document.addEventListener("touchmove",function(){
        /* 根据手指移动画线，使之变透明*/
        ctx.lineTo(event.touches[0].pageX-oLeft,event.touches[0].pageY-oTop);
        /* 填充*/
        ctx.stroke();
    })

    /* pc */
    canvas.onmousemove = function(e) {
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
    }
        
    /* 之所以会用到下面的那个函数getOffset（obj）
    * 是因为event.touches[0].pageX、pageY获取的是相对于可视窗口的距离
    * 而lineTo画笔的定位是根据画布位置定位的
    * 所以就要先获取到画布(canvas)相对于可视窗口的距离，然后计算得出触摸点相对于画布的距离 
    * */
        
    /* 获取该元素到可视窗口的距离*/    
    function getOffset(obj){
        var valLeft = 0,valTop = 0;
        function get(obj){
            valLeft += obj.offsetLeft;
            valTop += obj.offsetTop;
            /* 不到最外层就一直调用，直到offsetParent为body*/
            if (obj.offsetParent.tagName!='BODY') {
                get(obj.offsetParent);
            }
            return [valLeft,valTop];
        }
        return get(obj);
    }    
}
