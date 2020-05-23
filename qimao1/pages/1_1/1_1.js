const DEFAULT_PAGE = 0;

const app = getApp();
Page({
  startPageX: 0,
  currentView: DEFAULT_PAGE,
  data: {
    showJump: true,
    showButton: false,
    toView: `card_${DEFAULT_PAGE}`,
    list: ['../images/first.png','../images/meiliwuxian.jpg','../images/caihua.jpg','../images/shangdetingtang.jpg','../images/xiadechufang.jpg','../images/paoguoegou.jpg','../images/dumuqiao.jpg','../images/fiechumigong.jpg','../images/chufa.jpg','../images/end2.jpg']
  },
  onLoad: function (options) {
    var index = 1;
    var that = this;

    var timer = setInterval(function () {

      index = index + 1;   
      if (index == 10) {
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

    }, 2300);
  },

  changeYL: function () {
    this.setData({
      showModal: true
    })
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
    this.setData({
      showJump: true
    });
    this.setData({
      showModal: false
    });
    this.setData({
      showButton: false
    });
    wx.showToast({
      title: '可向右滑动',
      icon:'loading',
      duration:500
    });    
  },
  pointWrong: function(){ 
    wx.redirectTo({ url: '../1_3/1_3', })
  },
  pointCorrect: function(){ 
    wx.redirectTo({ url: '../1_4/1_4', })
  },
  jumpPage: function(){ 
    this.currentView=9;
    this.setData({
      toView: `card_${9}`
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
  },
  nextPage: function(){ 
    this.currentView=this.currentView+1;
    this.setData({
      toView: `card_${this.currentView}`
    });
  },
  hintShow: function () {
    wx.showToast({
      title:'向右滑看剧情',
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
            title:'请点击选择店家',
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
