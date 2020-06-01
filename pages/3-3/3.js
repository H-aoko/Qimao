// pages/zt-3/3.js
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
        if(app.data.globalscore < 3){
          app.data.globalscore = 3
        }
  },
  toHome: function(){ 
    wx.redirectTo({ url: '../1/1', })
  },
  next: function(){ 
    wx.redirectTo({ url: '../4-1/1', })
  },
  touchStart(e) {
    this.startPageX = e.changedTouches[0].pageX;
  },
  touchEnd(e) {
    const moveX = e.changedTouches[0].pageX - this.startPageX;
    const maxPage = this.data.list.length - 1;
    if (Math.abs(moveX) >= 150){
      if (moveX > 0) {
        wx.showToast({
          title:'剧情不可回放',
          icon:'loading',
          duration:1000
        })
      } else {
        if(this.currentView==maxPage){
          wx.showToast({
            icon:'loading',
            duration:1000
          })
       
        } else {
          this.setData({
            showModal: true
          });
          this.currentView = this.currentView !== maxPage ? this.currentView + 1 : maxPage;
        }
       
      }
    }
    this.setData({
      toView: `card_${this.currentView}`
    });
  },
})