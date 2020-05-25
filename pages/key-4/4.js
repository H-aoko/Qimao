// pages/4/4.js
const DEFAULT_PAGE = 0;
const app = getApp();
Page({
  startPageX: 0,
  currentView: DEFAULT_PAGE,
  data: {
    showJump: true,
    showButton: false,
    toView: `card_${DEFAULT_PAGE}`,
    list: ['../images/ball1.jpg','../images/ball3.jpg','../images/ball4.jpg','../images/ball5.jpg','../images/ball6.jpg']
  },
  onLoad: function (options) {
    var index = 1;
    var that = this;
    var timer = setInterval(function () {
      index = index + 1;   
      if (that.currentView>=8) {
        clearInterval(timer);
        that.setData({
          showJump: false
        });     
        that.setData({
          showButton: true
        });
      
      };
      that.currentView=that.currentView+1;
      that.setData({
        toView: `card_${that.currentView}`
      });

    }, 2500);
  },

  changeYL: function () {
    this.setData({
      showModal: true
    })
  },
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  toMenu: function(){ 
    wx.redirectTo({ url: '../1/1', })
  },
  again: function () {
    this.currentView=0;
    this.setData({
      toView: `card_${this.currentView}`
    });
    this.setData({
      showJump: true
    });
    this.setData({
      showModal: false
    });
    this.setData({
      showButton: false
    });
    this.setData({
      showHint2: false
    });
    this.setData({
      showHint1: false
    });
    wx.showToast({
      icon:'nothing',
      duration:1500
    });    
  },
  jumpPage: function(){ 
    wx.redirectTo({ url: '../key-2/2', })
  },
  hintShow: function () {
    wx.showToast({
      icon:'loading',
      duration:2000
    })
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  touchStart(e) {
    this.startPageX = e.changedTouches[0].pageX;
  },
  touchEnd(e) {
    const moveX = e.changedTouches[0].pageX - this.startPageX;
    const maxPage = this.data.list.length - 1;
    if (Math.abs(moveX) >= 150){
      if (moveX < 0) {
        if(this.currentView==maxPage){
          wx.redirectTo({ url: '../1/1', }) 
        }
        this.currentView = this.currentView !== maxPage ? this.currentView + 1 : maxPage;
      } else{
        wx.showToast({
          title:'剧情不可回放',
          icon:'loading',
          duration:1000
        })
      }
    }
    this.setData({
      toView: `card_${this.currentView}`
    });
  }
})
