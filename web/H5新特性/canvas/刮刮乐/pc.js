window.onload = function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    ctx.lineWidth = 3;
    //ctx.strokeStyle = 'red';
    //ctx.moveTo(10,10);
    /* canvas.onmousemove = function(e) {
        ctx.lineTo(e.clientY, e.clientY);
        ctx.stroke();//执行
    }; */
    //举行
    ctx.rect(0,0,300,150);
    ctx.fillStyle = "#ccc";
    ctx.fill();

    //按下事件
    canvas.onmousedown = function(e) {
        canvas.onmousemove = function(e) {
            ctx.clearRect(e.clientX, e.clientY, 20, 20);//清除
        };
    }
    //松开
    canvas.onmouseup = function(e) {
        canvas.onmousemove = null;
    }
    

    //修改中奖信息
    var arr = ["一个亿","海景别墅", "现金一万","赠送VIP课程", "100元话费", "谢谢惠顾"];
    var prize = document.getElementById('prize');
    //随机获取
    var i = Math.floor(Math.random()*arr.length);
    if (i < 2) {
        i = arr.length - 1;
    }
    prize.innerHTML = arr[i];
}