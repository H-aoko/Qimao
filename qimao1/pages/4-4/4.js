const DEFAULT_PAGE = 0;
const app = getApp();
Page({
  startPageX: 0,
  currentView: DEFAULT_PAGE,
  data: {
    showJump: true,
    showButton: false,
    toView: `card_${DEFAULT_PAGE}`,
    list: ['../images/ztfail.jpg']
  },

  changeYL: function () {
    this.setData({
      showModal: true
    })
  },
  toHome: function(){ 
    wx.redirectTo({ url: '../1/1', })
  },
  again: function () {
    wx.redirectTo({ url: '../4-1/1', })
  },

  audioPause: function () {
    this.audioCtx.pause()
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