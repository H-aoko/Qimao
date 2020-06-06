// pages/stone_4/stone_4.js
const DEFAULT_PAGE = 0;
const app = getApp();
Page({
  startPageX: 0,
  currentView:0,
  data: {
    toView: `card_${0}`,
    list: ['../images/clickstone7.jpg','../images/stonefail.jpg','../images/stonefail2.jpg']
  },
  toHome: function(){ 
    wx.redirectTo({ url: '../1/1', })
  },
  again: function(){ 
    wx.redirectTo({ url: '../stone_1/stone_1', })
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
            title:'请点击按钮',
            icon:'loading',
            duration:1000
          })
       
        } else {
          if(this.currentView==(maxPage-1)){
            this.setData({
              showModal: true
            })
          }

          this.currentView = this.currentView !== maxPage ? this.currentView + 1 : maxPage;
        }
       
      }
    }
    this.setData({
      toView: `card_${this.currentView}`
    });
  },
  onLoad: function (options) {
    var index = 1;
    var that = this;
    var timer = setInterval(function () {

      index = index + 1;   
      if (index == 3) {
        clearInterval(timer);
        that.setData({
          showModal: true
        });
      };

      that.currentView=that.currentView+1;
      that.setData({
        toView: `card_${that.currentView}`
      });

    }, 1800);
  },
})
