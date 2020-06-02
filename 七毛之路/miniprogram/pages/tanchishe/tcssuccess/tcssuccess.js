// miniprogram/pages/tanchishe/tcssuccess/tcssuccess.js
Page({

  data: {
    
  },
  
  onLoad: function () {
    var app = getApp()
    if(app.data.globalscore < 10){
      app.data.globalscore = 10
    }
  },
  home:function() {
    wx.reLaunch({
      url: '../../index/index',
    })
  },
  next:function() {
    wx.reLaunch({
      url: '../../index/index',
    })
  }
})