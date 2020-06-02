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
    list: ['../images/success1.jpg','../images/success2.jpg','../images/success3.jpg']
   },
  onLoad: function (options) {
    var app = getApp()
        if(app.data.globalscore < 15){
          app.data.globalscore = 15
        }

    var index = 1;
    var that = this;
    var timer = setInterval(function () {
      index = index + 1;   
     
      that.currentView=that.currentView+1;
      that.setData({
        toView: `card_${that.currentView}`
      });
    }, 2300);
  },


  next:function () {
    wx.navigateTo({
      url: '/light/light1/light1',
    })
    
  },
  zhuye:function () {
    wx.navigateTo({
      url: '/light/light1/light1',
    })
  },
})