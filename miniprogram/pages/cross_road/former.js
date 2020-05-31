// pages/cross_road/former.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    auto:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app = getApp();
    app.data.hasClick = false;
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
  //跳转到游戏界面
  start:function(e){
    console.log(e.detail.currentItemId);
    var id = e.detail.currentItemId;
    if(id == 4){
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
            url: '/pages/cross_road/road',
          });
        },1000);
      }  
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
        url: '/pages/cross_road/road',
      });
      // wx.redirectTo({
      //   url: '/pages/bridge/brige',
      // });
    }
    
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

  }
})