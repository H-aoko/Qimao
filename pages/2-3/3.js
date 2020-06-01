// pages/jm-3/3.js
const DEFAULT_PAGE = 0;
const app = getApp();
Page({
  startPageX: 0,
  currentView:0,
  data: {
    toView: `card_${0}`,
    list: ['../images/sucess.jpg']
  },
  onLoad: function (options) {
    var app = getApp()
    if(app.data.globalscore < 2){
      app.data.globalscore = 2
    }
  },
  toHome: function(){ 
    wx.redirectTo({ url: '../1/1', })
  },
  next: function(){ 
    wx.redirectTo({ url: '../3-1/1', })
  },

  touchStart(e) {
    this.startPageX = e.changedTouches[0].pageX;
  },
  touchEnd(e) {
    const moveX = e.changedTouches[0].pageX - this.startPageX;
    if (Math.abs(moveX) >= 150){
       wx.showToast({
                    title:'请点击按钮',
                    icon:'loading',
                    duration:1000
                  })
    }
    this.setData({
      toView: `card_${this.currentView}`
    });
  }
})