const DEFAULT_PAGE = 0;
const app = getApp();
Page({
  startPageX: 0,
  currentView: DEFAULT_PAGE,
  data: {
    showJump: false,
    showButton: false,
    toView: `card_${DEFAULT_PAGE}`,
    list: ['../images/ball1.jpg']
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
  hideModal: function () {
    this.setData({
      showModal: false
    });
    this.setData({
      showHint1: false
    });
  },
  toMenu: function(){ 
    wx.redirectTo({ url: '../1/1', })
  },
  again: function () {
    wx.redirectTo({ url: '../8-1/1', })
  },
  pointCorrect: function(){ 
    wx.redirectTo({ url: '../8-5/5', })
  },
  hintShow: function () {
      this.setData({
        showHint1: true
      });
  },
  audioPause: function () {
    var app = getApp();
    app.AppMusic.pause();
    this.setData({
      musicbtn2: true,
      musicbtn:false
    });
    app.data.musicon = false;
  },
  audioPlay: function () {
    var app = getApp();
    app.AppMusic.play();
    app.data.musicon = true;
    this.setData({
      musicbtn: true,
      musicbtn2:false
    });
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
            title:'请点击寻找钥匙',
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