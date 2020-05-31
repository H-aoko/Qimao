// pages/cross_road/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fail:"../../images/road/bad.jpg",
    success:"../../images/good.jpg",
    judge:1,
    hint:true,
    showModal:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app = getApp();
    app.data.hasClick = false;
    this.setData({
      judge:options.judge
  });
  console.log(this.data.judge);
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

  },

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

  },
  hintShow: function () { 
    let that = this;
    console.log(that.data.hint);
    that.setData({
      hint:false
    });
    console.log(that.data.hint);
    that.hideModal(); 
  },
  hideHint:function(){
    if(!this.data.hint){
      this.setData({
        hint:true
      });
    }
  },
  audioPause: function () {
    //this.audioCtx.pause()
  },
  changeYL: function () {
    if(this.data.showModal == false)
    this.setData({
      showModal: true
    });
    else  
    this.setData({
      showModal: false
    });
  },
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  toMenu: function(){ 
    wx.redirectTo({ url: '../1/1', })
  },
  again: function () {
    var app = getApp();
    if(!app.data.hasClick){
      app.data.hasClick = true;
      getCurrentPages().pop();
      wx.navigateTo({
         url: '/pages/cross_road/former',
      });
    }
  },
})