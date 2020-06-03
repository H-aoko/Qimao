// pages/road_plus/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fail:"../../images/road/plus/bad.jpg",
    success:"../../images/good.jpg",
    judge:1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app = getApp();
    app.data.hasClick = false;
    this.setData({
      judge:options.judge
  });
  console.log(this.data.judge);
  if(this.data.judge==0){
      app = getApp()
      if(app.data.globalscore < 7){
      app.data.globalscore = 7
    }
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
  toMenu: function(){ 
    wx.redirectTo({ url: '../1/1', })
  },
  next:function(){
    wx.redirectTo({ url: '../8-1/1', })
  },
  again: function () {
    var app = getApp();
    if(!app.data.hasClick){
      app.data.hasClick = true;
      getCurrentPages().pop();
      wx.navigateTo({
         url: '/pages/road_plus/former',
      });
    }
  },
})