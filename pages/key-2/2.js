// pages/2/2.js 
const DEFAULT_PAGE = 0;
const app = getApp();
Page({
  startPageX: 0,
  currentView: DEFAULT_PAGE,
  data: {
    toView: `card_${DEFAULT_PAGE}`,
    list: ['../images/dt.jpg']
  },
  onShow: function () {
    wx.showToast({
      title: '向右滑',
      icon:'loading',
      duration:2000
  })
   setTimeout(function(){
    wx.hideToast()
    },2000)
 
  },

  changeYL: function () {
    this.setData({
      showModal: true
    })
  },
  wrongselection1: function () {
    wx.redirectTo({ url: '../key-3/3', })
  },
  wrongselection2: function () {
    wx.redirectTo({ url: '../key-5/5', })
  },
  correctselection: function () {
    wx.redirectTo({ url: '../key-4/4', })
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
  },

  hintShow: function () {
    wx.showToast({
      title:'向右滑找钥匙',
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
          wx.showToast({
            title:'请寻找钥匙',
            icon:'loading',
            duration:1000
          })
        } else{
          this.setData({
            showHouse: true
          });
          this.currentView = this.currentView !== maxPage ? this.currentView + 1 : maxPage;
        }
        
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