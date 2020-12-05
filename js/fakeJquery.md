元素选择器：
    $(".main")

获取CSS值:
    $(".bg").css("background-color")

设置CSS属性：
    $(".main").css({
        "background-color":"yellow",
        "font-size":"200%"
    })

获取元素宽度：
    $(".main").width()
    //包括padding值

点击事件：
    $(".main").click(function(){
        console.log("0");
    })

获取第n个元素：
    $(".main").eq(n)