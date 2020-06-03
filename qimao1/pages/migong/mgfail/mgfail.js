// miniprogram/pages/migong/mgfail/mgfail.js
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
      url: '../../migong/migong',
    })
  }

})