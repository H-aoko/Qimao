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
    list: ['../../images/tiaoliao1.jpg','../../images/tiaoliao2.jpg','../../images/tiaoliao3.jpg','../../images/tiaoliao4.jpg','../../images/tiaoliao5.jpg','../../images/tiaoliao6.jpg']
   },
  onLoad: function (options) {
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
    url: '/pages/tiaoliao7/tiaoliao7',
  })
}
    }, 2300);
  },
  audioPause: function () {
    this.audioCtx.pause()
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
      url: '/pages/tiaoliao7/tiaoliao7',
    }),
    this.currentView=7;
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
      url: '/pages/tiaoliao1/tiaoliao1',
    })
  },
  hintShow: function () {  
  },
  voice:function () {
    this.setData({
      showvoice:false,
      showvoice1:true,
    })
  },
  voice1:function () {
    this.setData({
      showvoice1:false,
      showvoice:true,
    })
  },
})