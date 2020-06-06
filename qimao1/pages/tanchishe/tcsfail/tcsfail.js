// miniprogram/pages/tanchishe/tcsfail/tcsfail.js
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
      url: '../../tanchishe/tanchishe',
    })
  }
})