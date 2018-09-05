(function () {
    var obottom = document.getElementsByClassName("w-bottom")[0],
        omove = document.querySelectorAll(".move"),
        olist = document.getElementsByClassName("list")[0],
        wrapHeight = document.getElementsByClassName("wrap")[0].offsetHeight,
        obtn = document.getElementsByClassName("btn")[0],
        otext = document.getElementsByClassName("text")[0];

    //初始化
    for(let i=0,len=omove.length;i<len;i++){
        Move(omove[i]);
    }
    //点击事件
    obtn.onclick = function () {
        creat();
    }
    //enter事件
    document.onkeydown = function (e) {
        if (e.keyCode === 13) {
            creat();
        }
    }

    //创建div
    function creat() {
        var val = otext.value,
            odiv = document.createElement("div");
        otext.value = "";
        odiv.innerHTML = val;
        odiv.className = "move";
        olist.appendChild(odiv);
        Move(odiv)
    }

    //移动
    function run(obj, oleft) {
        if (oleft > -obj.offsetWidth) {
            oleft -= 3;
            obj.style.left = oleft + "px";
            requestAnimationFrame(function () {
                run(obj, oleft);
            })
        } else {
            olist.removeChild(obj)
        }
    }

    //确定弹幕内容的位置
    function Move(obj) {
        var docWidth = document.documentElement.clientWidth,
            docHeight = document.documentElement.clientHeight,
            objHeight = obj.offsetHeight,
            objWidth = obj.offsetWidth,
            obottomHeight = obottom.offsetHeight,
            maxTop;
            
        if (docHeight > wrapHeight) {
            maxTop = (wrapHeight - obottomHeight - objHeight) * Math.random();
        } else {
            maxTop = (docHeight - obottomHeight - objHeight) * Math.random();
        }
        maxLeft = docWidth - objWidth - Math.random() * 100;

        obj.style.top = maxTop + "px";
        obj.style.left = maxLeft + "px";
        obj.style.color = Colorrandom();
        run(obj, maxLeft)

    }
    //随机颜色
    function Colorrandom() {
        return "#" + Math.random().toString(16).slice(-6);
    }
})()