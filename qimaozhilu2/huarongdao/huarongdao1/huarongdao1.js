const DEFAULT_PAGE = 0;

const app = getApp();
Page({
  showvoice:true,
  showvoice1:false,
  startPageX: 0,
  showModal:false,
  
  currentView: DEFAULT_PAGE,
  /**
   * 页面的初始数据
   */
  data: {
    toView: `card_${DEFAULT_PAGE}`,
    list: ['../images/huarongdao1.jpg','../images/huarongdao2.jpg','../images/huarongdao3.jpg','../images/huarongdao4.jpg','../images/huarongdao5.jpg','../images/huarongdao6.jpg']
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

    var index = 1;
    var that = this;
    var timer = setInterval(function () {
      index = index + 1;   
     
      that.currentView=that.currentView+1;
      that.setData({
        toView: `card_${that.currentView}`
      });
if(that.currentView==6){
  wx.navigateTo({
    url: '/huarongdao/huarongdao3/huarongdao3',
  })
}
    }, 2300);
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
  changeYL: function () {
    
      if(this.data.showModal==true){
        this.setData({
      showModal: false,
    })
   
    }
    else{
      if(this.data.showvoice==true){
      this.setData({
        showModal:true,
        showvoice:true,
        showvoice1:false,
      })}
      else{
        this.setData({
          showModal:true,
          showvoice1:true,
          showvoice:false,
        })
      }
    }
  },
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  jumpPage:function () {
    
    wx.navigateTo({
      url: '/huarongdao/huarongdao3/huarongdao3',
    }),
    this.currentView=7;
    this.setData({
      toView: `card_${this.currentView}`
    });
  },
  hintShow:function () {
  },
  toMenu: function(){ 
    wx.redirectTo({ url: '../huarongdao1/huarongdao1', })
  },
  again: function () {
    wx.navigateTo({
      url: '/huarongdao/huarongdao1/huarongdao1',
    })
    this.currentView=7;
    this.setData({
      toView: `card_${this.currentView}`
    });
  },
  hintShow: function () {  
  },
 
})