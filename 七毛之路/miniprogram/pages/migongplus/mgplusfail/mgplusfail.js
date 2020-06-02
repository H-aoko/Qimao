// miniprogram/pages/migongplus/mgplusfail/mgplusfail.js
Page({
  data: {

  },

  onLoad: function () {

  },

  home:function() {
    wx.reLaunch({
      url: '../../index/index',
    })
  },
  again:function() {
    wx.redirectTo({
      url: '../../migongplus/migongplus',
    })
  }
})