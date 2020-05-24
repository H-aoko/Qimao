Page({
    data: { // 参与页面渲染的数据
      person:"../../images/bridge/person.gif",
      falling_left:"../../images/bridge/falling_left.png",
      falling_right:"../../images/bridge/falling_right.png",
      success:"../../images/bridge/ye.png",
      per_hide:false,
      show_img:1,
      showModal:false
    },
    onLoad: function(options) {
        // 页面创建时执行
       
      },
      sendCode: function(e) {
        var that = this;
        var time = 0;
        var interval_time = 1000;
        // var i = setInterval(function() {
        //     time +=  interval_time/1000;
        //      if(time <= 12){
        //       if (that.data.left_hide == false && that.data.right_hide == true) {
        //         that.setData({
        //           left_hide:true,
        //           right_hide:false
        //         });
        //    } else {
        //       if(that.data.left_hide == true && that.data.right_hide == false)
        //         that.setData({
        //           left_hide:false,
        //           right_hide:true
        //         });
        //    }
        //   } else clearInterval(i); 
        // }, interval_time)      
      },
      onShow: function() {
        // 页面出现在前台时执行
        var that = this;
        var fail = 10;
        //延迟2s开始动画,给用户准备时间
        setTimeout(function(){
          var start_time = Date.now();
          var limit = 2000;
          var animation = wx.createAnimation({
            duration: limit,
            timingFunction: 'linear',
            delay: 0,
            transformOrigin: '50% 50% 0'
           });
           var edit = 0;
           wx.onAccelerometerChange(function(res) {
             //计算手机左右倾斜的角度
            var roll = 90 - Math.acos(res.x)*180/Math.PI;
            //计算手机上下倾斜的角度
            var up = Math.acos(-res.z)*180/Math.PI;
            //console.log(roll);
            console.log(up);
            console.log( Math.acos(res.z));
            if(res.x != 0)edit++;
             //抬起，停止前进 
             if( up > 30){
              return;
            }
            if(up < -30){
              that.setData({
                show_img:3
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
                       show_img:3
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
                         show_img:2
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
                         show_img:3
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
                        show_img:2
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
                     show_img:3
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
                       show_img:2
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
                     show_img:3
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
                       show_img:2
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
            if(Date.now()-start_time > 4*limit)         wx.offAccelerometerChange();
                });
           //that.sendCode();
        },2000);
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
      },
      audioPause: function () {
        this.audioCtx.pause()
      },
    })
  