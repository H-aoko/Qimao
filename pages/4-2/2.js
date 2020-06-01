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
    list: ['../images/ztp7.jpg']
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
  AnswerInput:function(e){
    this.setData({
      value: e.detail.value
      })
  },
  next: function () {
  if (this.data.value==1){
    wx.redirectTo({ url: '../4-3/3', })
  }
  else{
    wx.redirectTo({ url: '../4-4/4', })
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
    wx.redirectTo({ url: '../4-1/1', })
  },

  hintShow: function () {
      this.setData({
        showHint1: true
      })
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
    if (Math.abs(moveX) >= 150){
       wx.showToast({
                    title:'请填写答案',
                    icon:'loading',
                    duration:1000
                  })
    }
    this.setData({
      toView: `card_${this.currentView}`
    });
  }
})