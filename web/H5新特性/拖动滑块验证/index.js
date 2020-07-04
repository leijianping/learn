window.onload = function () {
   /* 
   1 滑块移动
   2 滑块移动的距离event.clinetX-初始的滑动距离
   
   */ 
  var btn = document.querySelector(".btn")
  var box = document.querySelector(".box")
  var bg = document.querySelector(".bg")
  var text = document.querySelector(".text")
  var isSuccess = false;
  btn.onmousedown = function (event) {
      var downX = event.clientX; 
      console.log(downX);
      btn.onmousemove = function(e) {
            var moveX = e.clientX - downX;
            //this.style.left = moveX + "px";
            //移动范围
            if (moveX > 0) {
                this.style.left = moveX + "px";
                bg.style.width = moveX + "px";
                if (moveX > (box.offsetWidth-btn.offsetWidth)){
                    //console.log("验证成功")
                    text.innerText = "验证成功";
                    text.style.color = "#fff";
                    //事件清除
                    btn.onmousemove = null;
                    btn.onmousedown = null;
                    isSuccess = true;
                }
            }
      }
    }

    btn.onmouseup = function (e) {
        btn.onmousemove = null;
        if (isSuccess) return;

        this.style.left = 0;
        bg.style.width = 0;
        text.innerText = "请向右边滑动";
        text.style.color = "#000";
    }
}