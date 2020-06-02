// pages/road_plus/former.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    auto:true,
    hint:true,
    showModal:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app = getApp();
    app.data.hasClick = false;
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  hintShow: function () { 
    let that = this;
    console.log(that.data.hint);
    that.setData({
      hint:false
    });
    console.log(that.data.hint);
    that.hideModal(); 
  },
  hideHint:function(){
    if(!this.data.hint){
      this.setData({
        hint:true
      });
    }
  },
  audioPause: function () {
    var app = getApp();
    app.AppMusic.pause();
    this.setData({
      musicbtn2: true,
      musicbtn:false
    });
    app.data.musicon = false;
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
  changeYL: function () {
    if(this.data.showModal == false)
    this.setData({
      showModal: true
    });
    else  
    this.setData({
      showModal: false
    });
  },
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  toMenu: function(){ 
    this.setData({
      auto:false
    });
    wx.redirectTo({ url: '../1/1', })
  },
  again: function () {
    var app = getApp();
    if(!app.data.hasClick){
      app.data.hasClick = true;
      this.setData({
        auto:false
      });
      getCurrentPages().pop();
      wx.navigateTo({
         url: '/pages/road_plus/former',
      });
    }
  },
  //跳过剧情
  skipto:function(){
    this.setData({
      auto:false
    });
    var app = getApp();
    console.log(app.data.hasClick);
    if(!app.data.hasClick){
      console.log("here");
      app.data.hasClick = true;
      getCurrentPages().pop();
      wx.navigateTo({
        url: '/pages/road_plus/road',
      });
      // wx.redirectTo({
      //   url: '/pages/bridge/brige',
      // });
    }
    
  },
  //跳转到游戏界面
  start:function(e){
    console.log(e.detail.currentItemId);
    var id = e.detail.currentItemId;
    if(id == 5){
      this.setData({
        auto:false
      });
      var app = getApp();
      //console.log(app.data.hasClick);
      if(!app.data.hasClick){
        setTimeout(function(){
          app.data.hasClick = true;
          getCurrentPages().pop();
          wx.navigateTo({
            url: '/pages/road_plus/road',
          });
        },1000);
      }  
    }     
   },
})