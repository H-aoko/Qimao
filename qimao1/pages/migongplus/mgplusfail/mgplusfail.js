// miniprogram/pages/migongplus/mgplusfail/mgplusfail.js
Page({
  data: {

  },

  onLoad: function () {

  },

  home:function() {
    wx.reLaunch({
      url: '../../1/1',
    })
  },
  again:function() {
    wx.redirectTo({
      url: '../../migongplus/migongplus',
    })
  }
})