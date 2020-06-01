const DEFAULT_PAGE = 0;

const app = getApp();
Page({
  startPageX: 0,
  currentView: DEFAULT_PAGE,
  data: {
    showJump: true,
    showButton: false,
    toView: `card_${DEFAULT_PAGE}`,
    list: ['../images/0.jpg','../images/1.jpg','../images/2.jpg','../images/dt.jpg']
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
      index = index + 1;   
      if (that.currentView>=2) {
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
  pointWrong1: function(){ 
    wx.redirectTo({ url: '../8-2/2', })
  },
  pointWrong2: function(){ 
    wx.redirectTo({ url: '../8-3/3', })
  },
  pointCorrect: function(){ 
    wx.redirectTo({ url: '../8-4/4', })
  },
  jumpPage: function(){ 
    this.currentView=3;
    this.setData({
      toView: `card_${3}`
    });
    this.setData({
      showJump: false
    });
    this.setData({
      showButton: true
    });
    this.setData({
      showModal: false
    });
    this.setData({
      showHint1: false
    });
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
      if (moveX > 0) {
        wx.showToast({
          title:'剧情不可回放',
          icon:'loading',
          duration:1000
        })
      } 
      else {
          wx.showToast({
            title:'请寻找钥匙',
            icon:'loading',
            duration:1000
          })   
      } 
          this.currentView = this.currentView !== maxPage ? this.currentView + 1 : maxPage;
    }
    this.setData({
      toView: `card_${this.currentView}`
    });
  },
})