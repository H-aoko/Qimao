const DEFAULT_PAGE = 0;
const app = getApp();
Page({
  startPageX: 0,
  currentView: DEFAULT_PAGE,
  data: {
    toView: `card_${0}`,
    list: ['../images/balls.jpg','../images/balls2.jpg','../images/balls3.jpg','../images/sucess.jpg']
  },
  onLoad: function (options) {
      var index = 1;
      var app = getApp()
      var that = this;
      if(app.data.globalscore < 8){
          app.data.globalscore = 8
      }
    var timer = setInterval(function () {
      index = index + 1;   
      if (that.currentView>=2) {
        clearInterval(timer);
        that.setData({
          showModal: true
        });     
      };
      that.currentView=that.currentView+1;
      that.setData({
        toView: `card_${that.currentView}`
      });
    }, 2000);
  },
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  toHome: function(){ 
    wx.redirectTo({ url: '../1/1', })
  },
  next: function(){ 
    wx.redirectTo({ url: '../9-1/1', })
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