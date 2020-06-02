// pages/cross_road/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fail:"../../images/road/bad.jpg",
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
      if(app.data.globalscore < 6){
      app.data.globalscore = 6
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
  again: function () {
    var app = getApp();
    if(!app.data.hasClick){
      app.data.hasClick = true;
      getCurrentPages().pop();
      wx.navigateTo({
         url: '/pages/cross_road/former',
      });
    }
  },
})