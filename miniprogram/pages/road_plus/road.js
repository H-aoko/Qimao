// pages/road_plus/road.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal:false,
    hint:true,
    time:25,
    touchLeft:0,
    touchTop:0,
    touchRight:0,
    positionX:0,
    positionY:0,
    fail:false,
    failTime:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app = getApp();
    app.data.hasClick = false;
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
      var listenerPer = setInterval(function(){
        console.log(that.data.positionY);
        if(that.data.positionY<=-45){
          //失败
          that.setData({
            fail:true
          });
          clearInterval(listenerPer);
          getCurrentPages().pop();
          wx.navigateTo({
            url: '/pages/cross_road/result?judge=1',
          });
          return;
        }else{
          //成功，进入下一张页面
          if(that.data.positionX>=150){
            clearInterval(listenerPer);
            getCurrentPages().pop();
            wx.navigateTo({
              url: '/pages/road_plus/otherroad',
            });
            return;
          }
        }
      },350);
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
  changeYL: function () {
    if(this.data.showModal == false)
    this.setData({
      showModal: true
    });
    else this.hideModal();
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
         url: '/pages/road_plus/road',
      });
    }
  },
  jumpPage: function(){ 
  },
  hintShow: function () { 
    let that = this;
    that.setData({
      hint:false
    });
    that.hideModal(); 
  },
  hideHint:function(){
    if(!this.data.hint){
      this.setData({
        hint:true
      });
    }
  },
  //音效
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
  //根据按键移动人物
  //左方向按键
  startLeft:function(){
     var that = this;
     var positionX = that.data.positionX;
     var positionY = that.data.positionY;
     that.setData({
       touchLeft:1
     });
     console.log(that.data.touchLeft);
     var animation = wx.createAnimation({
      duration: 700,
      timingFunction: 'linear',
      delay: 0,
     });
     //向左移动
     if(that.data.touchLeft==1 && positionX>=-150 && positionY>=-45 &&!that.data.fail){
      positionX += -25;
      animation.translate(positionX,positionY).step();
      that.setData({
        crossAnimation:animation.export(),
        positionX:positionX,
        positionY:positionY
      });
    }
     var peopleWalk = setInterval(function () {
        if(that.data.touchLeft==1 && positionX>=-150 && positionY>=-45&&!that.data.fail){
          positionX += -25;
          animation.translate(positionX,positionY).step();
          that.setData({
            crossAnimation:animation.export(),
            positionX:positionX,
            positionY:positionY
          });
        }else{
          clearInterval(peopleWalk);
        } 
      }, 700)
  },
  //停止向左移动
  endLeft:function(){
      this.setData({
        touchLeft:0
      })
      console.log(this.data.touchLeft);
  },
  //上方向按键
  startTop:function(){
    var that = this;
    var positionX = that.data.positionX;
    var positionY = that.data.positionY;
    that.setData({
      touchTop:1
    });
    var animation = wx.createAnimation({
     duration: 700,
     timingFunction: 'linear',
     delay: 0,
    });
    //向上移动
    if(that.data.touchTop==1 && positionX>=-150 && positionY>=-45&&!that.data.fail){
      positionX += 0;
      positionY += -25;
      animation.translate(positionX,positionY).step();
      that.setData({
        crossAnimation:animation.export(),
        positionX:positionX,
        positionY:positionY
      });
   }
    var peopleWalk = setInterval(function () {
       if(that.data.touchTop==1 && positionX>=-150 && positionY>=-45&&!that.data.fail){
        positionX += 0;
        positionY += -25;
        animation.translate(positionX,positionY).step();
        that.setData({
          crossAnimation:animation.export(),
          positionX:positionX,
          positionY:positionY
        });
       }else{
         clearInterval(peopleWalk);
       } 
     }, 700)
 },
 //停止向上移动
 endTop:function(){
     this.setData({
       touchTop:0
     })
 },
 //右方向按键
 startRight:function(){
  var that = this;
  var positionX = that.data.positionX;
  var positionY = that.data.positionY;
  that.setData({
    touchRight:1
  });
  console.log(that.data.touchRight);
  var animation = wx.createAnimation({
   duration: 700,
   timingFunction: 'linear',
   delay: 0,
  });
  //向右移动
  if(that.data.touchRight==1 && positionX>=-150 && positionY>=-45&&!that.data.fail){
    positionX += 25;
    animation.translate(positionX,positionY).step();
    that.setData({
        crossAnimation:animation.export(),
        positionX:positionX,
        positionY:positionY
    });
 }
  var peopleWalk = setInterval(function () {
     if(that.data.touchRight==1 && positionX>=-150 && positionY>=-45&&!that.data.fail){
      positionX += 25;
      animation.translate(positionX,positionY).step();
      that.setData({
        crossAnimation:animation.export(),
        positionX:positionX,
        positionY:positionY
      });
     }else{
       clearInterval(peopleWalk);
     } 
   }, 700)
   
  
},
//停止向右移动
endRight:function(){
   this.setData({
     touchRight:0
   })
},
})