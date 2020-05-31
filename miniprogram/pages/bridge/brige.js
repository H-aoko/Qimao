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
      fail:false,
      failRotate:true,
      failTime:true,
      failFast:true,
      fast:false,
    },
    onLoad: function(options) {
        // 页面创建时执行
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
      onShow: function() {
        // 页面出现在前台时执行
        var that = this;
        var fail = 10;
        //延迟2s开始动画,给用户准备时间
        setTimeout(function(){
          var limit = 3000;
          var animation = wx.createAnimation({
            duration: limit,
            timingFunction: 'linear',
            delay: 0,
            transformOrigin: '50% 50% 0'
           });
           var edit = 0;
           var start_time = Date.now();
           var last_time = start_time;
          // that.timeCount();
           console.log(start_time);
           wx.onAccelerometerChange(function(res) {
             var now = Date.now();
             if( now - last_time < 200)return;
             last_time = now;
             console.log(that.data.count);
             console.log(Date.now());
             //计算手机左右倾斜的角度
            var roll = 90 - Math.acos(res.x)*180/Math.PI;
            //计算手机上下倾斜的角度
            var up = Math.acos(-res.z)*180/Math.PI;
            //console.log(roll);
            console.log(up);
            //在一段时间内倾斜才算作倾斜
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
                fail:true,
                fast:true
             });
             that.fail();
             getCurrentPages().pop();
             wx.navigateTo({
               url: '/pages/bridge/fail?judge=1',
             });
             wx.offAccelerometerChange();
             return;
            }
            //将动画分为四个阶段
             if(Date.now()-start_time <= limit){
                 //倾斜画面
                 console.log(roll);
                 if(edit >= 1){
                   //失败画面
                   console.log(roll);
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
                    that.fail();
                    getCurrentPages().pop();
                    wx.navigateTo({
                      url: '/pages/bridge/fail?judge=1',
                    });
                    wx.offAccelerometerChange();
                    return;
                  }else{
                    console.log(roll);
                    if(roll <= -fail){ 
                      animation.translate3d(-29, -45,0).rotate(-fail).step();
                      that.setData({
                       walk: animation.export()
                      });
                      that.setData({
                         show_img:2,
                         fail:true
                      });
                      that.fail();
                      getCurrentPages().pop();
                      wx.navigateTo({
                        url: '/pages/bridge/fail?judge=1',
                      });
                      wx.offAccelerometerChange();
                      return;
                  }else{
                    if(that.data.fail){
                      animation.translate3d(-22, -35,0).rotate(roll).step();
                      that.setData({
                       walk: animation.export()
                      });
                    }else{
                    //正常画面
                    animation.translate3d(-29, -45,0).rotate(roll).step();
                    that.setData({
                     walk: animation.export()
                    });}
                  }
                }
                 if(Date.now()-start_time == limit)edit = 0;
             }else{
              console.log("zhengchang");
              animation.translate3d(-29, -45,0).rotate(roll).step();
              that.setData({
               walk: animation.export()});
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
                      that.fail();
                      getCurrentPages().pop();
                      wx.navigateTo({
                        url: '/pages/bridge/fail?judge=1',
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
                      that.fail();
                      getCurrentPages().pop();
                      wx.navigateTo({
                        url: '/pages/bridge/fail?judge=1',
                      });
                      wx.offAccelerometerChange();
                      return;
                    }else{
                      if(that.data.fail){
                        animation.translate3d(-54, -70,0).rotate(roll).step();
                        that.setData({
                         walk: animation.export()
                        });
                      }else{
                      //正常画面
                      animation.translate3d(-70, -90,0).rotate(roll).step();
                      that.setData({
                       walk: animation.export()
                      });}
                        }
                      }
                       if(Date.now()-start_time == 2*limit)edit = 0;
                   }else{
                    animation.translate3d(-70, -90,0).rotate(roll).step();
                    that.setData({
                     walk: animation.export()});
                   }}
            if(Date.now()-start_time <= 3*limit &&Date.now()-start_time > 2*limit) {
                if(edit >= 1){
                 //失败画面
                 if(roll >= fail){ 
                  console.log(roll);
                  animation.translate3d(-100, -135,0).rotate(fail).step();
                  that.setData({
                   walk: animation.export()
                  });
                  that.setData({
                     show_img:3,
                     fail:true
                  });
                  that.fail();
                  getCurrentPages().pop();
                  wx.navigateTo({
                    url: '/pages/bridge/fail?judge=1',
                  });
                  wx.offAccelerometerChange();
                  return;
                }else{
                  if(roll <= -fail){ 
                    console.log(roll);
                    animation.translate3d(-100, -135,0).rotate(-fail).step();
                    that.setData({
                     walk: animation.export()
                    });
                    that.setData({
                       show_img:2,
                       fail:true
                    });
                    that.fail();
                    getCurrentPages().pop();
                    wx.navigateTo({
                      url: '/pages/bridge/fail?judge=1',
                    });
                    wx.offAccelerometerChange();
                    return;
                }else{
                  if(that.data.fail){
                    animation.translate3d(-74, -100,0).rotate(roll).step();
                    that.setData({
                     walk: animation.export()
                    });
                  }else{
                  //正常画面
                  animation.translate3d(-100, -135,0).rotate(roll).step();
                  that.setData({
                   walk: animation.export()
                  });}
                }
              }
               if(Date.now()-start_time == limit)edit = 0;
           }else{
            animation.translate3d(-100, -135,0).rotate(roll).step();
            that.setData({
             walk: animation.export()});
           }}
            if(Date.now()-start_time <= 4*limit &&Date.now()-start_time > 3*limit) {
                if(edit >= 1){
                 //失败画面
                 if(roll >= fail){ 
                  console.log(roll);
                  animation.translate3d(-130, -195,0).rotate(fail).step();
                  that.setData({
                   walk: animation.export()
                  });
                  that.setData({
                     show_img:3,
                     fail:true
                  });
                  that.fail();
                  getCurrentPages().pop();
                  wx.navigateTo({
                    url: '/pages/bridge/fail?judge=1',
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
                    that.fail();
                    getCurrentPages().pop();
                    wx.navigateTo({
                      url: '/pages/bridge/fail?judge=1',
                    });
                    wx.offAccelerometerChange();
                    return;
                }else{
                  if(that.data.fail){
                    animation.translate3d(-106, -160,0).rotate(roll).step();
                    that.setData({
                     walk: animation.export()
                    });
                  }else{
                  //正常画面
                  animation.translate3d(-130, -195,0).rotate(roll).step();
                  that.setData({
                   walk: animation.export()
                  });}
                }
              }
           }else{
            animation.translate3d(-130, -195,0).rotate(roll).step();
            that.setData({
             walk: animation.export()});
           }}
            if(Date.now()-start_time > 4*limit){
              //超时未完成
              console.log(that.data.count);
              console.log(that.data.fail);
              if(that.data.fail==true){
               that.fail();
               getCurrentPages().pop();
               wx.navigateTo({
                 url: '/pages/bridge/fail?judge=1',
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
                    url: '/pages/bridge/fail?judge=2',
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
        var app = getApp();
        if(!app.data.hasClick){
          app.data.hasClick = true;
          getCurrentPages().pop();
          wx.navigateTo({
             url: '/pages/bridge/former',
          });
        }
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
      //计时器
      // timeCount:function(){
      //   let that = this;
      //   let count = that.data.count;
      //   that.setData({
      //     timer: setInterval(function () {
      //       count--;
      //       that.setData({
      //         count: count
      //       })
      //       if (count <= 0 || that.data.show_img!=1) {
      //         that.setData({
      //           count: 0
      //         });
      //         clearInterval(that.data.timer);
      //       }
      //     }, 1000)
      // })},
      
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
  fail:function(){
    var that = this;
    if(that.data.fail){
      var showImage = that.data.show_img;
      if(showImage==2||showImage==3){
        if(showImage==2&&that.fast==true){
          that.setData({
            failFast:false
          })
        }else{
          that.setData({
            failRotate:false
          })
        }
      }else{
        that.setData({
          failTime:false
        })
      }
      setTimeout(function(){},3000);
    }
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
  