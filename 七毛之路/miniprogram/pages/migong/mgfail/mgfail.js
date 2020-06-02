// miniprogram/pages/migong/mgfail/mgfail.js
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
      url: '../../migong/migong',
    })
  }

})