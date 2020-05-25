//migong.js
var app = getApp()  
Page({  
  data: {  
    movies:[  
    {url:'../migong/images/迷宫1.jpg'} ,  
    {url:'../migong/images/迷宫2.jpg'} ,  
    {url:'../migong/images/迷宫3.jpg'} ,  
    {url:'../migong/images/迷宫4.jpg'} ,
    {url:'../migong/images/迷宫5.jpg'} 
    ],  
    show: false,
    hintshow:false,
    auto:true,
    //current: 4
  },  
  onLoad: function () {  
  },  
  skip: function() {
    wx.navigateTo({
      url: '../try/try',
    })
  },
  openmenu:function() {
    var cshow=this.data.show;
    if(cshow==false) {
      cshow=true;
    }else {
      cshow=false;
    }
    this.setData({
      show: cshow
    })
  },
  home:function() {
    wx.navigateTo({
      url: '../index/index',
    })
  },
  again:function() {
    wx.navigateTo({
      url: '../migong/migong',
    })
  },
  hint:function() {
    var chintshow=this.data.hintshow;
    if(chintshow==false) {
      chintshow=true;
    }else {
      chintshow=false;
    }
    this.setData({
      hintshow: chintshow
    })
  },
  startgame: function(e) {
    if(e.detail.current == 4){
      this.setData({
        auto: false
      })
      setTimeout(function(){
        getCurrentPages().pop();
        wx.navigateTo({
          url: '../try/try',
        })
      },2000);
    }
  },
})  
