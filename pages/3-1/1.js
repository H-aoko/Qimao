const DEFAULT_PAGE = 0;
const app = getApp();
Page({
  startPageX: 0,
  currentView: DEFAULT_PAGE,
  data: {
    showJump: true,
    showButton: false,
    toView: `card_${DEFAULT_PAGE}`,
    list: ['../images/zt1.jpg','../images/zt2.jpg','../images/zt3.jpg','../images/zt4.jpg','../images/zt5.jpg']
  },
  onLoad: function (options) {
    var index = 1;
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
    var timer = setInterval(function () {
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
  hideModal: function () {
    this.setData({
      showModal: false
    });
    this.setData({
      showHint2: false
    });
    this.setData({
      showHint1: false
    });
  },
  toMenu: function(){ 
    wx.redirectTo({ url: '../1/1', })
  },
  again: function () {
    wx.redirectTo({ url: '../3-1/1', })    
  },
  hintShow: function () {
    this.setData({
      showHint1: true
    })
  },
  jumpPage: function(){ 
    wx.redirectTo({ url: '../3-2/2', })
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