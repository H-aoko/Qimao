// miniprogram/pages/tanchishe/tcsfail/tcsfail.js
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
      url: '../../tanchishe/tanchishe',
    })
  }
})