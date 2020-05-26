Page({
    data: { // 参与页面渲染的数据
      person:"../../images/bridge/person.gif",
      falling_left:"../../images/bridge/falling_left.png",
      falling_right:"../../images/bridge/falling_right.png",
      success:"../../images/bridge/ye.png",
      per_hide:false,
      show_img:1,
      showModal:false,
      hint:true,
      count:7,
      show_time:true,
      timer:"",
      fail:false
    },
    onLoad: function(options) {
        // 页面创建时执行
         var app = getApp();
         app.data.hasClick = false;
      },
      onShow: function() {
        // 页面出现在前台时执行
        var that = this;
        var fail = 10;
        //延迟2s开始动画,给用户准备时间
        setTimeout(function(){
          var start_time = Date.now();
          that.timeCount();
          var limit = 2000;
          var animation = wx.createAnimation({
            duration: limit,
            timingFunction: 'linear',
            delay: 0,
            transformOrigin: '50% 50% 0'
           });
           var edit = 0;
           wx.onAccelerometerChange(function(res) {
             console.log(that.data.count);
             //计算手机左右倾斜的角度
            var roll = 90 - Math.acos(res.x)*180/Math.PI;
            //计算手机上下倾斜的角度
            var up = Math.acos(-res.z)*180/Math.PI;
            //console.log(roll);
            console.log(up);
            if(res.x != 0)edit++;
             //抬起，停止前进 
             if( up > 30 && Date.now()-start_time <= 4*limit){
              that.setData({
                fail:true
             });
              return;
            }
            //加速，失败
            if(up < -30 && Date.now()-start_time <= 4*limit){
              that.setData({
                show_img:2,
                fail:true
             });
             getCurrentPages().pop();
             wx.navigateTo({
               url: '/pages/bridge/fail?judge=true',
             });
             wx.offAccelerometerChange();
             return;
            }
            //将动画分为四个阶段
             if(Date.now()-start_time <= limit){
                 //倾斜画面
                 if(edit >= 1){
                   //失败画面
                  if(roll >= fail){ 
                    console.log(roll);
                    animation.translate3d(-29, -45,0).rotate(fail).step();
                    that.setData({
                     walk: animation.export()
                    });
                    that.setData({
                       show_img:3,
                       fail:true
                    });
                    getCurrentPages().pop();
                    wx.navigateTo({
                      url: '/pages/bridge/fail?judge=true',
                    });
                    wx.offAccelerometerChange();
                    return;
                  }else{
                    if(roll <= -fail){ 
                      animation.translate3d(-29, -45,0).rotate(-fail).step();
                      that.setData({
                       walk: animation.export()
                      });
                      that.setData({
                         show_img:2,
                         fail:true
                      });
                      getCurrentPages().pop();
                      wx.navigateTo({
                        url: '/pages/bridge/fail?judge=true',
                      });
                      wx.offAccelerometerChange();
                      return;
                  }else{
                    //正常画面
                    animation.translate3d(-29, -45,0).rotate(roll).step();
                    that.setData({
                     walk: animation.export()
                    });
                  }
                }
                 if(Date.now()-start_time == limit)edit = 0;
             }}
            if(Date.now()-start_time <= 2*limit &&Date.now()-start_time > limit) { 
                if(edit >= 1){
                  //失败画面
                   if(roll >= fail){ 
                       animation.translate3d(-70, -90,0).rotate(fail).step();
                      that.setData({
                        walk: animation.export()
                      });
                      that.setData({
                         show_img:3,
                         fail:true
                      });
                      getCurrentPages().pop();
                      wx.navigateTo({
                        url: '/pages/bridge/fail?judge=true',
                      });
                      wx.offAccelerometerChange();
                      return;
                  }else{
                    if(roll <= -fail){ 
                      animation.translate3d(-70, -90,0).rotate(-fail).step();
                      that.setData({
                        walk: animation.export()
                      });
                      that.setData({
                        show_img:2,
                        fail:true
                      });
                      getCurrentPages().pop();
                      wx.navigateTo({
                        url: '/pages/bridge/fail?judge=true',
                      });
                      wx.offAccelerometerChange();
                      return;
                    }else{
                      //正常画面
                        animation.translate3d(-70, -90,0).rotate(roll).step();
                        that.setData({
                        walk: animation.export()
                        });
                        }
                      }
                       if(Date.now()-start_time == 2*limit)edit = 0;
                   }}
            if(Date.now()-start_time <= 3*limit &&Date.now()-start_time > 2*limit) {
                if(edit >= 1){
                 //失败画面
                 if(roll >= fail){ 
                  //console.log(roll);
                  animation.translate3d(-100, -135,0).rotate(fail).step();
                  that.setData({
                   walk: animation.export()
                  });
                  that.setData({
                     show_img:3,
                     fail:true
                  });
                  getCurrentPages().pop();
                  wx.navigateTo({
                    url: '/pages/bridge/fail?judge=true',
                  });
                  wx.offAccelerometerChange();
                  return;
                }else{
                  if(roll <= -fail){ 
                    //console.log(roll);
                    animation.translate3d(-100, -135,0).rotate(-fail).step();
                    that.setData({
                     walk: animation.export()
                    });
                    that.setData({
                       show_img:2,
                       fail:true
                    });
                    getCurrentPages().pop();
                    wx.navigateTo({
                      url: '/pages/bridge/fail?judge=true',
                    });
                    wx.offAccelerometerChange();
                    return;
                }else{
                  //正常画面
                  animation.translate3d(-100, -135,0).rotate(roll).step();
                  that.setData({
                   walk: animation.export()
                  });
                }
              }
               if(Date.now()-start_time == limit)edit = 0;
           }}
            if(Date.now()-start_time <= 4*limit &&Date.now()-start_time > 3*limit) {
                if(edit >= 1){
                 //失败画面
                 if(roll >= fail){ 
                  //console.log(roll);
                  animation.translate3d(-130, -195,0).rotate(fail).step();
                  that.setData({
                   walk: animation.export()
                  });
                  that.setData({
                     show_img:3,
                     fail:true
                  });
                  getCurrentPages().pop();
                  wx.navigateTo({
                    url: '/pages/bridge/fail?judge=true',
                  });
                  wx.offAccelerometerChange();
                  return;
                }else{
                  if(roll <= -fail){ 
                    //console.log(roll);
                    animation.translate3d(-130, -195,0).rotate(-fail).step();
                    that.setData({
                     walk: animation.export()
                    });
                    that.setData({
                       show_img:2,
                       fail:true
                    });
                    getCurrentPages().pop();
                    wx.navigateTo({
                      url: '/pages/bridge/fail?judge=true',
                    });
                    wx.offAccelerometerChange();
                    return;
                }else{
                  //正常画面
                  animation.translate3d(-130, -195,0).rotate(roll).step();
                  that.setData({
                   walk: animation.export()
                  });
                }
              }
           }}
            if(Date.now()-start_time > 4*limit){
              //超时未完成
              console.log(that.data.count);
              console.log(that.data.fail);
              if(that.data.count==0 &&that.data.fail==true){
               getCurrentPages().pop();
               wx.navigateTo({
                 url: '/pages/bridge/fail?judge=true',
               });
               wx.offAccelerometerChange();
               return;
              }else{
                 //成功
                  console.log(that.data.fail);
                  that.setData({
                    show_img:4
                  });
                  getCurrentPages().pop();
                  wx.navigateTo({
                    url: '/pages/bridge/fail?judge=false',
                  });
                wx.offAccelerometerChange();
                return;
              }
             };   
     })},2000);
      },
      onReady: function() {
        // 页面首次渲染完毕时执行
      },
      onHide: function() {
        // 页面从前台变为后台时执行
      },
      onUnload: function() {
        // 页面销毁时执行
      },
      onPullDownRefresh: function() {
        // 触发下拉刷新时执行
      },
      onReachBottom: function() {
        // 页面触底时执行
      },
      onShareAppMessage: function () {
        // 页面被用户分享时执行
      },
      onPageScroll: function() {
        // 页面滚动时执行
      },
      onResize: function() {
        // 页面尺寸变化时执行
      },
      onTabItemTap(item) {
        // tab 点击时执行
        console.log(item.index)
        console.log(item.pagePath)
        console.log(item.text)
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
      },
      jumpPage: function(){ 
      },
      hintShow: function () { 
        let that = this;
        console.log("here");
        that.setData({
          hint:false
        });
        that.hideModal(); 
        that.setData({
          show_time:false
        });
       that.timeCount();
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
      timeCount:function(){
        let that = this;
        let count = that.data.count;
        that.setData({
          timer: setInterval(function () {
            count--;
            that.setData({
              count: count
            })
            if (count == 0 || that.data.show_img!=1) {
              clearInterval(that.data.timer);
            }
          }, 1000)
      })},
      
  onHide: function () {
    this.setData({
      person:"../../images/bridge/person.gif",
      falling_left:"../../images/bridge/falling_left.png",
      falling_right:"../../images/bridge/falling_right.png",
      success:"../../images/bridge/ye.png",
      per_hide:false,
      show_img:1,
      showModal:false,
      hint:true,
      count:7,
      show_time:true,
      timer:"",
      fail:false
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
      this.setData({
        person:"../../images/bridge/person.gif",
        falling_left:"../../images/bridge/falling_left.png",
        falling_right:"../../images/bridge/falling_right.png",
        success:"../../images/bridge/ye.png",
        per_hide:false,
        show_img:1,
        showModal:false,
        hint:true,
        count:7,
        show_time:true,
        timer:"",
        fail:false
      })
  },
    })
  