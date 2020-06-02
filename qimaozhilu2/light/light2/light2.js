// light/light1/light1.js
var intt;
var app = getApp(); 
Page({

  /**
   * 页面的初始数据
   */
 
  data: {
   showModal:false,
   showtip:false,
   hintshow:true,
   hintshow2:false,
   minute: 0,
    second: 0,
    millisecond: 0,
    timecount: '01:30',
    cost: 0,
    flag: 1,
    endtime: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

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
    //停止（暂停）
    clearInterval(intt);
    //时间重置
    that.setData({
      minute: 1,
      second: 30,
      millisecond: 0,
    })
    intt = setInterval(function () { that.timer() }, 50);
    this.setData({
      showstart:false
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  
  changeYL: function () { 
    if(this.data.showModal==true){
      this.setData({
    showModal: false,
    hintshow:true,
    hintshow2:false,
  })
  }
  else{
    this.setData({
      showModal:true
    })
  }
},
hintShow:function(){
  
  this.setData({
    showtip:true,
    hintshow:false,
    hintshow2:true,
  })
},
hintShow2:function(){
 wx.navigateTo({
   url: '/light/success/success',
 })
 clearInterval(intt);
},
hideModal: function () {
  this.setData({
    showModal: false
  });
},
toMenu: function(){ 
  wx.redirectTo({ url: 'light/light1/light1', })
},
again: function () {
  wx.navigateTo({
    url: '/light/light1/light1',
  })
},
xiaoshi:function(){
  this.setData({
    shows15:true,
  shows16:false,
  showModal:false,
  showtip:false,
  hintshow:true,
  hintshow2:false,
  });
},
tip:function () {
  this.setData({
    showtip:false,
    hintshow:true,
  hintshow2:false,
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

  },
 
  //暂停
  stop: function () {
    clearInterval(intt);
  },
  timer: function () {
    var that = this;
    that.setData({
      millisecond: that.data.millisecond - 5
    })
    if (that.data.millisecond < 0) {
      that.setData({
        millisecond: 100,
        second: that.data.second - 1
      })
    }
    if (that.data.second < 0) {
      that.setData({
        second: 59,
        minute: that.data.minute - 1
      })
    }
  
    if (that.data.minute == 0 &this.data.second==0 &that.data.millisecond == 0) {
      wx.navigateTo({
        url: '/light/fail/fail',
      });
      var that = this
    clearInterval(intt);
    that.setData({
      minute:0,
      second: 0,
      millisecond: 0,
      timecount: '00:00',
    })
    }
    if(that.data.minute<10 & that.data.second <10){
    that.setData({
      timecount: "0"+that.data.minute + ":" +"0"+that.data.second 
    })
  }
  else if(that.data.minute<10 & that.data.second >=10){
    that.setData({
      timecount: "0"+that.data.minute + ":" +that.data.second 
    })
  }
  else if(that.data.minute>=10 & that.data.second <10){
    that.setData({
    timecount: that.data.minute + ":" +"0"+that.data.second 
  })
  }
  else{
    that.setData({
      timecount: that.data.minute + ":" +that.data.second 
    })
  }
  },
  
})