// miniprogram/pages/migong/mgsuccess/mgsuccess.js
Page({

  data: {
    
  },
  
  onLoad: function () {
    var app = getApp()
    if(app.data.globalscore < 13){
      app.data.globalscore = 13
    }
  },
  home:function() {
    wx.reLaunch({
      url: '../../1/1',
    })
  },
  next:function() {
    wx.reLaunch({
      url: '../../migongplus/migongplus',
    })
  }
})
