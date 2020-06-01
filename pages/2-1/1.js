const DEFAULT_PAGE = 0;
const app = getApp();
Page({
  startPageX: 0,
  currentView: DEFAULT_PAGE,
  data: {
    showJump: true,
    showButton: false,
    toView: `card_${DEFAULT_PAGE}`,
    list: ['../images/jm1.jpg','../images/jm2.jpg','../images/jm3.jpg','../images/jm4.jpg','../images/jm5.jpg']
  },
  onLoad: function (options) {
    var index = 1;
    var that = this;
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
      if (that.currentView>=3) {
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
  hintShow: function () {
    this.setData({
      showHint1: true
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
    wx.redirectTo({url: '../2-1/1', })
  },
  pointWrong: function(){ 
    wx.redirectTo({ url: '../2-2/2', })
  },
  pointCorrect: function(){ 
    wx.redirectTo({ url: '../2-3/3', })
  },
  jumpPage: function(){ 
    this.currentView=4;
    this.setData({
      toView: `card_${4}`
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
