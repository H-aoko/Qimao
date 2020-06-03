// miniprogram/pages/migongplus/migongplus.js
var app = getApp()   
Page({
  data: {  
    movies:[  
    {url:'../migongplus/images/迷宫plus订单.jpg'},
    {url:'../migongplus/images/迷宫plus1.jpg'} ,  
    {url:'../migongplus/images/迷宫plus2.jpg'} ,  
    {url:'../migongplus/images/迷宫plus3.jpg'} ,  
    {url:'../migongplus/images/迷宫plus4.jpg'} 
    ],  
    show: false,
    hintshow:false,
    auto:true,
    musicbtn:true,
    musicbtn2:false
  },  
  onLoad: function () {  
    var that = this;
    if(app.data.musicon==true){
      that.setData({
        musicbtn: true,
        musicbtn2:false
      });
    }
    if(app.data.musicon==false){
      that.setData({
        musicbtn2: true,
        musicbtn:false
      });
    }

  },  
  skip: function() {
    wx.redirectTo({
      url: '../migongplus/mgplusgame/mgplusgame'
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
  hide:function() {
    this.setData({
      show:false,
      hintshow:false
    })
  },
  home:function() {
    wx.reLaunch({
      url: '../1/1',
    })
  },
  again:function() {
    wx.redirectTo({
      url: '../migongplus/migongplus',
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
    if(e.detail.current == 3){
      this.setData({
        auto: false
      })
      setTimeout(function(){
        getCurrentPages().pop();
        wx.redirectTo({
          url: '../migongplus/mgplusgame/mgplusgame',
        })
      },2000);
    }
  },
  audioPause: function () {
    var app = getApp();
    app.AppMusic.pause();
    app.data.musicon = false;
    this.setData({
      musicbtn2: true,
      musicbtn:false
    });
  },
  audioPlay: function () {
    var app = getApp();
    app.AppMusic.play();
    app.data.musicon = true;
    this.setData({
      musicbtn: true,
      musicbtn2:false
    });
  },
})  

