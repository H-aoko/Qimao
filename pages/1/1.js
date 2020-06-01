// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  toOne: function(){ 
    wx.redirectTo({ url: '../1_1/1_1', })
  },
  toTwo: function(){ 
    wx.redirectTo({ url: '../2-1/1', })
  },
  toThr: function(){ 
    wx.redirectTo({ url: '../3-1/1', })
  },
  toFor: function(){ 
    wx.redirectTo({ url: '../4-1/1', })
  },
  toEig: function(){ 
    wx.redirectTo({ url: '../8-1/1', })
  },
  toLast: function(){ 
    wx.redirectTo({ url: '../58_1/58_1', })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    wx.showToast({
      title: '加载中',
      icon:'loading',
      duration:10000
  })
   setTimeout(function(){
    wx.hideToast()
    },2000)
 
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