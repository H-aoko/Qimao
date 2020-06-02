const DEFAULT_PAGE = 0;

const app = getApp();
var index = 1;
Page({
  startPageX: 0,
  showModal:false,
  showtip:false,
  currentView: DEFAULT_PAGE,
  /**
   * 页面的初始数据
   */
  data: {
    toView: `card_${DEFAULT_PAGE}`,
    list: ['../images/005.jpg','../images/tiaoliao1.jpg','../images/tiaoliao2.jpg','../images/tiaoliao3.jpg','../images/tiaoliao4.jpg','../images/tiaoliao5.jpg','../images/tiaoliao6.jpg']
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
    

   
    var that = this;
    var timer = setInterval(function () {
      index = index + 1;   
     
      that.currentView=that.currentView+1;
      that.setData({
        toView: `card_${that.currentView}`
      });
if(that.currentView==7){
  wx.navigateTo({
    url: '/tiaoliao/tiaoliao7/tiaoliao7',
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
      url: '/tiaoliao/tiaoliao7/tiaoliao7',
    }),
    this.currentView=8;
    this.setData({
      toView: `card_${this.currentView}`
    });
  },
  hintShow:function () {
  },
  toMenu: function(){ 
    wx.redirectTo({ url: '../tiaoliao1/tiaoliao1', })
  },
  again: function () {
    wx.navigateTo({
      url: '/tiaoliao/tiaoliao1/tiaoliao1',
    })
    this.currentView=8;
    this.setData({
      toView: `card_${this.currentView}`
    });
  },
  hintShow: function () {  
  },
  tip:function () {
    this.setData({
      showtip:false,
      
    })
  },
  hintShow:function(){
    if(this.data.showtip==true){
      this.setData({
    showtip: false
  })
  }
  else{
    this.setData({
      showtip:true,
      showModal:false,
    })
  }
  },
})