const app = getApp();
Page({
  onLoad (option) {
    console.log(option.query)
  },

  start: function(){ 
    wx.redirectTo({ url: '../1/1', })
  }, 
})
