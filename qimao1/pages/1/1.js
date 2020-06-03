// pages/1/1.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toOtherBtn:false,
    twobtn:false,
    twobtn2:true,
    threebtn:false,
    threebtn2:true,
    fourbtn:false,
    fourbtn2:true,
    fivebtn:false,
    fivebtn2:true,
    sixbtn:false,
    sixbtn2:true,
    sevenbtn:false,
    sevenbtn2:true,
    eightbtn:false,
    eightbtn2:true,
    ninebtn:false,
    ninebtn2:true,
    tenbtn:false,
    tenbtn2:true,
    elevenbtn:false,
    elevenbtn2:true,
    twelvebtn:false,
    twelvebtn2:true,
    thirteenbtn:false,
    thirteenbtn2:true,
    fourteenbtn:false,
    fourteenbtn2:true,
    fifteenbtn:false,
    fifteenbtn2:true,
    lastbtn:false,
    lastbtn2:true
  },
  toOne: function(){ 
    wx.redirectTo({ url: '../1_1/1_1', })
  },
  toTwo: function(){ 
    wx.redirectTo({ url: '../2_1/2_1', })
  },
  toThree: function(){ 
    wx.redirectTo({ url: '../3_1/3_1', })
  },
  toFour: function(){ 
    wx.redirectTo({ url: '../4_1/4_1', })
  },
  toFive: function(){ 
    wx.redirectTo({ url: '../../tiaoliao/tiaoliao1/tiaoliao1', })
  },
  toSix: function(){ 
    wx.redirectTo({ url: '../cross_road/former', })
  },
  toSeven: function(){ 
    wx.redirectTo({ url: '../road_plus/former.js', })
  },
  toEight: function(){ 
    wx.redirectTo({ url: '../8_1/8_1', })
  },
  toNine: function(){ 
    wx.redirectTo({ url: '../../huarongdao/huarongdao1/huarongdao1', })
  },
  toTen: function(){ 
    wx.redirectTo({ url: '../tanchishe/tanchishe', })
  },
  toEleven: function(){ 
    wx.redirectTo({ url: '../bridge/former', })
  },
  toTwelve: function(){ 
    wx.redirectTo({ url: '../stone_0/stone_0', })
  },
  to13: function(){ 
    wx.redirectTo({ url: '../migong/migong', })
  },
  to14: function(){ 
    wx.redirectTo({ url: '../migongplus/migongplus', })
  },
  to15:function(){ 
    wx.redirectTo({ url: '../../light/light1/light1', })
  },

  toLast: function(){ 
    wx.redirectTo({ url: '../58_1/58_1', })
  },
  toOther: function(){ 
    this.setData({
      toOtherBtn: true
    });
  },
  hideHint: function(){ 
    this.setData({
      toOtherBtn: false
    });
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var app = getApp();
    if(app.data.globalscore>=1){
      that.setData({
        twobtn: true,
        twobtn2: false
      });
    }
    if(app.data.globalscore>=2){
      that.setData({
        threebtn: true,
        threebtn2: false
      });
    }
    if(app.data.globalscore>=3){
      that.setData({
        fourbtn: true,
        fourbtn2: false
      });
    }
    if(app.data.globalscore>=4){
      that.setData({
        fivebtn: true,
        fivebtn2: false
      });
    }
    if(app.data.globalscore>=5){
      that.setData({
        sixbtn: true,
        sixbtn2: false
      });
    }
    if(app.data.globalscore>=6){
      that.setData({
        sevenbtn: true,
        sevenbtn2: false
      });
    }
    if(app.data.globalscore>=7){
      that.setData({
        eightbtn: true,
        eightbtn2: false
      });
    }
    if(app.data.globalscore>=8){
      that.setData({
        ninebtn: true,
        ninebtn2: false
      });
    }
    if(app.data.globalscore>=9){
      that.setData({
        tenbtn: true,
        tenbtn2: false
      });
    }
    if(app.data.globalscore>=10){
      that.setData({
        elevenbtn: true,
        elevenbtn2: false
      });
    }
    if(app.data.globalscore>=11){
      that.setData({
        twelvebtn: true,
        twelvebtn2: false
      });
    }
    if(app.data.globalscore>=12){
      that.setData({
        thirteenbtn: true,
        thirteenbtn2: false
      });
    }
    if(app.data.globalscore>=13){
      that.setData({
        fourteenbtn: true,
        fourteenbtn2: false
      });
    }
    if(app.data.globalscore>=14){
      that.setData({
        fifteenbtn: true,
        fifteenbtn2: false
      });
    }
    if(app.data.globalscore>=15){
      that.setData({
        lastbtn: true,
        lastbtn2: false
      });
    }
   

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.showToast({
      title: '加载中',
      icon:'loading',
      duration:1000
  })
   setTimeout(function(){
    wx.hideToast()
    },2000)
 
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

function newFunction() {
  return app.data.globalscore
}
