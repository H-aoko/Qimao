const DEFAULT_PAGE = 0;
const app = getApp();
Page({
  startPageX: 0,
  currentView: DEFAULT_PAGE,
  data: {
    showJump: true,
    showButton: false,
    toView: `card_${DEFAULT_PAGE}`,
    list: ['../images/fail.jpg']
  },
  onLoad: function (options) {
    var that = this;
    if(app.data.musicon==true){
      that.setData({
        musicbtn: true,
        musicbtn2:false
      });
    }
    if(app.data.musicon==false){
      that.setData({
        musicbtn2: true,
        musicbtn:false
      });
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
    wx.redirectTo({ url: '../8-1/1', })
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