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
      url: '../../1/1',
    })
  },
  next:function() {
    wx.reLaunch({
      url: '../../../light/light1/light1',
    })
  }
})