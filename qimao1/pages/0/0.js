

Page({
  data: {
   
  },

  onLoad (option) {
    var app = getApp()
    app.data.globalscore = 0

  },

  start: function(){ 
    wx.redirectTo({ url: '../1/1', })
  },
 
  
})
