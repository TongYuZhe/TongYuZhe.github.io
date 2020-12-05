$("html").css({
    "font-size":$("html").width()*0.18+"%"
});

$(".wrap3 > .main > .right > ul").css({"height":window.innerHeight-parseFloat($(".wrap3 > .main").css("margin-top"))-parseFloat($(".foot").css("height"))+"px"});
// console.log($(".wrap3 > .main > .right > ul"))
var shouye = new Swiper('.shouye',{
    autoHeight: true, //高度随内容变化
    loop: false, //循环
    on:{
        slideChangeTransitionStart: function(){ //轮播图偏移后第几张图片
            $(".top > ul > li").css({"font-size":"1.6rem","opacity":"0.7"});
            $(".top > ul > li").eq(this.activeIndex).css({"font-size":"2.1em","opacity":"1"});
            if(this.activeIndex == 2){
                // $(".top").css({"background-color":"#FFF"});
                $(".top > ul > li").css({"color":"#6c6f7e"});
                $(".top > ul > li").eq(this.activeIndex).css({"color":"#1c1d1f"});
            }else{
                // $(".top").css({"background-color":"transparent"});
                $(".top > ul > li").css({"color":"#FFF"});
            }
        }
    }
});

var wrap1_lunbo = new Swiper('.wrap1_lunbo',{
    loop: true, //循环
    autoplay: { //自动轮播
        delay: 3000, //间隔时间
        stopOnLastSlide: false, //切换到最后一张时停止
        disableOnInteraction: false //用户操作之后是否停止
    },
    on:{
        slideChangeTransitionStart: function(){ //轮播图偏移后第几张图片
            let color = ["#ff9999","#6699cc","#333333","#996666","#666699","#cc9999","#996699"];
            $(".wrap1 > .bg").css({"background-color":color[this.activeIndex]});
        }
    }
});

var wrap2_lunbo = new Swiper('.wrap2_lunbo',{
    loop: true, //循环
    autoplay: { //自动轮播
        delay: 3000, //间隔时间
        stopOnLastSlide: false, //切换到最后一张时停止
        disableOnInteraction: false //用户操作之后是否停止
    },
    on:{
        slideChangeTransitionStart: function(swiper){ //轮播图偏移后第几张图片
            let color = ["#ff9999","#6699cc","#333333","#996666","#666699","#cc9999","#996699","#607c8a","#013449"];
            $(".wrap2 > .bg").css({"background-color":color[this.activeIndex]});
        }
    }
});

var wrap3_paihang = new Swiper('.wrap3_paihang',{
    updateOnWindowResize: true,
    loop: false, //循环
    // allowSlidePrev : true,
    noSwiping : true,
    noSwipingClass : 'stop-swiping',
    pagination: {
        el: '.wrap3_page',
        clickable :true,
        renderBullet: function (index, className) {
            switch(index){
              case 0:text='日漫榜';break;
              case 1:text='国漫榜';break;
              case 2:text='韩漫榜';break;
              case 3:text='免费榜';break;
            }
            return '<li class="' + className + '">' + text + '</li>';
        },
        bulletActiveClass: 'wrap3_left_page_dot'
    },
    // on:{
    //     touchEnd: function(swiper,event){ //轮播图偏移后第几张图片
    //         console.log(swiper,event)
    //         if(this.activeIndex == 0){
    //             this.allowSlidePrev = false;
    //         }else{
    //             this.allowSlidePrev = true;
    //         }
    //     }
    // }
});

// var json = {
//     "0":{
//         "title":"10.24版本全解析，四大运营路线8大阵容，直通王者殿堂",
//         "class":"云顶",
//         "author":"北派攻略",
//         "number":35,
//         "img":"./images/recommend/1.jpg"
//     },
//     "1":{
//         "title":"11111111111",
//         "class":"11111111",
//         "author":"11111111111",
//         "number":11,
//         "img":"11111111111"
//     }
// }
// for(let i in json){
//     for(let j in json[i]){
//         //创建div标签
//         var div = document.createElement('div');
//         //将div添加到.wrap1内
//         document.querySelectorAll(".wrap1")[0].insertAdjacentElement('beforeend',div);
//         //给div设置class样式
//         div.className = 'add';

//         console.log(json[i][j])
//     }
// }

// var url = window.location.toString();
// //以“/”进行分割，urlstr 会是一个数组
// var urlstr = url.split("/"); 
// var urls = '';
// if (urlstr[2]) {
//     urls = urlstr[0]+'//'+urlstr[2];
// }
// alert(urls);