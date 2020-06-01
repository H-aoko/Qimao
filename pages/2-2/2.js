const DEFAULT_PAGE = 0;
const app = getApp();
Page({
  startPageX: 0,
  currentView: DEFAULT_PAGE,
  data: {
    showJump: true,
    showButton: false,
    toView: `card_${DEFAULT_PAGE}`,
    list: ['../images/jmfail.jpg']
  },
  toHome: function(){ 
    wx.redirectTo({ url: '../1/1', })
  },
  again: function(){ 
    wx.redirectTo({ url: '../2-1/1', })
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