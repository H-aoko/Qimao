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
      url: '../../1/1',
    })
  },
  next:function() {
    wx.reLaunch({
      url: '../../bridge/former',
    })
  }
})