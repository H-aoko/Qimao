const DEFAULT_PAGE = 0;
const app = getApp();
Page({
  startPageX: 0,
  currentView: DEFAULT_PAGE,
  data: {
    showJump: true,
    showButton: false,
    value:'',
    toView: `card_${DEFAULT_PAGE}`,
    list: ['../images/zt6.jpg']
  },
  AnswerInput:function(e){
    this.setData({
      value: e.detail.value
      })
  },
 next: function () {
  if (this.data.value==1){
    wx.redirectTo({ url: '../zt-3/3', })
  }
  else{
    wx.redirectTo({ url: '../zt-4/4', })
  }
},

  changeYL: function () {
    this.setData({
      showModal: true
    })
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
            icon:'loading',
            duration:1000
          })
        };
        if(this.currentView==(maxPage-1)){
          this.setData({
            showJump: false
          })
          this.setData({
            showButton: true
          });
        };
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