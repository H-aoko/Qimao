// miniprogram/pages/migongplus/mgplussuccess/mgplussuccess.js
Page({

  data: {

  },

  onLoad: function () {
    var app = getApp()
    if(app.data.globalscore < 14){
      app.data.globalscore = 14
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