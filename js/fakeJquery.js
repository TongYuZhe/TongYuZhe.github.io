/**
 * fakeJquery 1.0.0
 * 
 * 仿照Jquery简单设计，用于更方便的获取元素
 *
 * Copyright 2014-2018 20201010414佟宇哲
 *
 * 开发时间 2020,11,27
 */


/** 
 * 传入样式，返回new的新原型对象内初始化函数
 */
var $ = function(style){
    return new $.prototype.init(style);
}

/** 
 * 创建原型对象
 */
$.prototype = {
    /**
     * 存储元素DOM
     */
    dom:Object,

    /**
     * 返回元素DOM
     */
    init:function(style){
        this.dom = document.querySelectorAll(style);
        this.index[0] = 0;
        this.index[1] = this.dom.length;
        return this;
    },

    /**
     * css[object]：将同名css全部赋值样式
     * css[string]：获取第一个css样式值
     */
    css:function(s){
        if(typeof(s) == "object"){
            console.log(this.dom,this.index)
            for(let i=this.index[0];i<this.index[1];i++){
                for (let key in s) {
                    this.dom[i].style.setProperty(key,s[key]);
                }
            }
        }else if(typeof(s) == "string"){
            return getComputedStyle(this.dom[this.index[0]]).getPropertyValue(s);
        }
    },

    /** 
     * width：获取元素宽度(包括padding)
     */
    width:function(){
        return this.dom[this.index[0]].clientWidth;
    },

    /** 
     * click：点击事件
     */
    click:function(s){
        return this.dom[this.index[0]].onclick = s;
    },

    /**
     * 存储元素eq位置
     */
    index:[null,null],

    /** 
     * eq：获取第n个元素
     */
    eq:function(n){
        this.index[0] = n;
        this.index[1] = n+1;
        return this;
    },

    /** 
     * parseInt：字符串转换为整数
     */
    parseInt:function(){
        console.log("a")
    }
}

/** 
 * 创建原型链条
 */
$.prototype.init.prototype = $.prototype;