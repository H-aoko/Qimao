// pages/tiaoliao7/tiaoliao7.js
Page({

  /**
   * 页面的初始数据
   */
 
  data: {
   shows3:true,
   shows5:true,
   shows6:true,
   shows7:true,
   shows8:true,
   shows9:true,
   shows10:true,
   shows11:true,
   shows12:true,
   shows13:true,
   shows51:false,
   shows61:false,
   shows15:false,
   shows16:true,
   showModal:false,
   showtip:false,
   showvoice:true,
   showvoice1:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  3:function () {
    var that = this;
    var sh = that.data.shows;
    that.setData({
      shows3: false,
      showModal:false,
    })  
  },
  5:function () {
    var that = this;
    var sh = that.data.shows;
    that.setData({
      shows5: false,
      showModal:false,
    })
  },
  6:function () {
    var that = this;
    var sh = that.data.shows;
    that.setData({
      shows6: false,
      showModal:false,
    })  
  },
  51:function () {
    var that = this;
    var sh = that.data.shows;
    that.setData({
      shows51: false,
      showModal:false,
    })
  },
  61:function () {
    var that = this;
    var sh = that.data.shows;
    that.setData({
      shows61: false,
      showModal:false,
    })  
  },
  7:function () {
    var that = this;
    var sh = that.data.shows;
    that.setData({
      shows7: false,
      showModal:false,
    })
  },
  8:function () {
    var that = this;
    var sh = that.data.shows;
    that.setData({
      shows8: false,
      showModal:false,
    })  
  },
  9:function () {
    var that = this;
    var sh = that.data.shows;
    that.setData({
      shows9: false,
      showModal:false,
    })
  },
  10:function () {
    var that = this;
    var sh = that.data.shows;
    that.setData({
      shows10: false,
      showModal:false,
    })  
  },
  11:function () {
    var that = this;
    var sh = that.data.shows;
    that.setData({
      shows11: false,
      showModal:false,
    })
  },
  12:function () {
    var that = this;
    var sh = that.data.shows;
    that.setData({
      shows12: false,
      showModal:false,
    })  
  },
  13:function () {
    var that = this;
    var sh = that.data.shows;
    that.setData({
      shows13: false,
      showModal:false,
    })
  },
  16:function () {
    var that = this;
    var sh = that.data.shows;
    that.setData({
      shows16: false,
      shows15:true,
      showModal:false,
    })
  },
  17:function () {
    var that = this;
    var sh = that.data.shows;
    that.setData({
      shows15: false,
      shows16:true,
      showModal:false,
    })
  },
  14:function () {
    var that = this;
    var sh = that.data.shows;
    that.setData({
      shows5: false,
      shows6: false,
      shows51: true,
      shows61: true,
      showModal:false,
    })
  },
  15:function () {
    if(this.data.shows3==false&this.data.shows5==false&this.data.shows6==false&this.data.shows7==false&this.data.shows8==true&this.data.shows9==false&this.data.shows10==false&this.data.shows11==false&this.data.shows12==false&this.data.shows13==false&this.data.shows51==false&this.data.shows61==true || this.data.shows3==false&this.data.shows5==false&this.data.shows6==true&this.data.shows7==false&this.data.shows8==true&this.data.shows9==false&this.data.shows10==false&this.data.shows11==false&this.data.shows12==false&this.data.shows13==false&this.data.shows51==false&this.data.shows61==false){
      
      wx.navigateTo({
        url: '/pages/success/success',
      })
    }
    else{
      
      wx.navigateTo({
        url: '/pages/fail/fail',
      })
    }
    
  },
  changeYL: function () { 
    if(this.data.showModal==true){
      this.setData({
    showModal: false
  })
  }
  else{
    this.setData({
      showModal:true
    })
  }
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
hideModal: function () {
  this.setData({
    showModal: false
  });
},
toMenu: function(){ 
  wx.redirectTo({ url: '../tiaoliao1/tiaoliao1', })
},
again: function () {
  wx.navigateTo({
    url: '/pages/tiaoliao1/tiaoliao1',
  })
},
xiaoshi:function(){
  this.setData({
    shows15:true,
  shows16:false,
  showModal:false,
  showtip:false,
  });
},
tip:function () {
  this.setData({
    showtip:false,
    
  })
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
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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