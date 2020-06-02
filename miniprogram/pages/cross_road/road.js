// pages/cross_road/road.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal:false,
    hint:true,
    carschoosed:[],
    time:25,
    drive:[],
    animationArray:[],
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
    that.carDrive();
  },
  carDrive:function(){
    var that = this;
    //从上到下分别为1 2 3 4 车道
    //1 2车道往左，3 4车道往右
 
    //1车道
    var car1 = { v:90,src:"../../images/road/cartoleft.png",type:"car car-one",drive:"one"};
    var car2 = { v:80,src:"../../images/road/lorrytoleft.png",type:"lorry lorry-one",drive:"one"};
    //2车道
    var car3 = { v:155,src:"../../images/road/cartoleft.png",type:"car car-two",drive:"two"};
    var car4 = { v:130,src:"../../images/road/lorrytoleft.png",type:"lorry lorry-two",drive:"two"};
    //3车道
    var car5 = { v:155,src:"../../images/road/cartoright.png",type:"car car-three",drive:"three"};
    var car6 = { v:130,src:"../../images/road/lorrytoright.png",type:"lorry lorry-three",drive:"three"};
    //4车道
    var car7 = { v:90,src:"../../images/road/cartoright.png",type:"car car-four",drive:"four"};
    var car8 = { v:80,src:"../../images/road/lorrytoright.png",type:"lorry lorry-four",drive:"four"};
    //所有类型的车
    var allcars = [car1,car2,car3,car4,car5,car6,car7,car8];
    //选择此次出现的车辆
    //从allcars中随机选择车型
    var carsNum = 50;
    var randomarray=new Array(carsNum);
    for(var i=0;i<carsNum;i++){
        randomarray[i]=Math.floor(Math.random()*8);
    }
    var carschoosed = [];
    console.log(carschoosed);
    for(var i=0;i<carsNum;i++){
      var index = randomarray[i];
      carschoosed.push(allcars[index]);
  }
  //设置车辆出现的延迟时间,ms
   var time = this.data.time;
   var timearray = [];
   for(var i=0;i<carsNum;i++){
    timearray[i]=(Math.round(Math.random()*time*10)/10).toFixed(1)*1000;
  };
  console.log(timearray);
  console.log(carschoosed);
  //删去重叠的车辆
  var interTime
  for(var i=0;i<carsNum;i++){
    console.log(carsNum);
   for(var j=0;j<carsNum;j++){
     //相同车道
      if(carschoosed[j]&&carschoosed[i]){
        if(i!=j && carschoosed[i].drive == carschoosed[j].drive){
          //相同车型、速度
          interTime = Math.abs(timearray[i]-timearray[j]);
         if(carschoosed[i].v == carschoosed[j].v){
           //小车
           if((carschoosed[i].type.indexOf("c")!=-1 && interTime<800)||
           //货车
             (carschoosed[i].type.indexOf("l")!=-1 && interTime<1500)){
               //console.log("here");
               carschoosed.splice(j,1);
               timearray.splice(j,1);
               carsNum = carsNum-1;
             }
             }else{
               //不同车型、速度
               if((carschoosed[i].type.indexOf("c")!=-1&&carschoosed[j].type.indexOf("l")!=-1)||(carschoosed[j].type.indexOf("c")!=-1&&carschoosed[i].type.indexOf("l")!=-1)){
                   if(interTime<1350&&(carschoosed[i].drive=="one"||carschoosed[i].drive=="four")){
                     //console.log("here");
                     carschoosed.splice(j,1);
                     timearray.splice(j,1);
                     carsNum = carsNum-1;
                   }else{
                     if(interTime<900&&(carschoosed[i].drive=="two"||carschoosed[i].drive=="three")){
                       //console.log("here");
                       carschoosed.splice(j,1);
                       timearray.splice(j,1);
                       carsNum = carsNum-1;
                   }
                   }
         }
        }
      } 
   }}
  };
  // console.log(carsNum);
  // console.log(timearray);
  // console.log(carschoosed);
  that.setData({
    carschoosed:carschoosed
  });
  //设置车辆的动画
  that.timeCount();
  var animationArray=[];
  for(var i=0;i<carsNum;i++){
    let v = carschoosed[i].v/1000;
    console.log(v);
    console.log(timearray[i]);
    let animation = wx.createAnimation({
      duration: 400/v,
      timingFunction: 'linear',
      delay: timearray[i],
     });
     console.log(timearray[i]);
     if(carschoosed[i].drive=="one" || carschoosed[i].drive=="two"){
      animation.translate(-600,0).step();
     }else{
      animation.translate(600,0).step();
     }
     animationArray.push(animation.export());
   }
   that.setData({
     animationArray:animationArray
   });
    // console.log(carschoosed);
    // console.log(that.data.carschoosed);
    //监听坐标
    that.queryMultipleNodes();
    var listenerStruck = setInterval(function(){
      var positionY = that.data.positionY;
      if(positionY>=-340 && !that.data.fail && that.data.time>0){
       // console.log(that.data.fail);
        //console.log(positionY);
        that.queryMultipleNodes();
      }
      else{
        console.log(that.data.fail);
        if(that.data.fail){
          clearInterval(listenerStruck);
          return;
        }else{
          //超时
          if(that.data.time<=0){
               that.setData({
                 failTime:false
               });
               setTimeout(function(){
               },3000);
               clearInterval(listenerStruck);
               getCurrentPages().pop();
                 wx.navigateTo({
                   url: '/pages/cross_road/result?judge=1',
                 });
               return;
          }else{
            clearInterval(listenerStruck);
            getCurrentPages().pop();
              wx.navigateTo({
                url: '/pages/cross_road/result?judge=0',
              });
              clearInterval(that.data.timer);
              return;
          }
        }
      }
    },350);
    
  },
  //获得车辆和人物的坐标，判断是否相撞
  queryMultipleNodes: function(){
    var that = this;
    //人物坐标
    var perLeft;
    var perRight;
    var perTop;
    var perBottom;
    wx.createSelectorQuery().select('#the-per').boundingClientRect(function(rect){
        perLeft = rect.left;
        perRight = rect.right;
        perTop = rect.top;
        perBottom = rect.bottom;
      }).exec();  
    wx.createSelectorQuery().selectAll('#the-car').boundingClientRect(function(rects){
      rects.forEach(function(rect){
       // console.log(rect.left);
        //判断是否相撞,失败跳转
        if(rect.left>=perLeft&&rect.left<=perRight){
          if( (rect.top>=perTop&&rect.top<=perBottom)||
          (rect.bottom>=perTop&&rect.bottom<=perBottom)){
            //失败
            that.setData({
              fail:true
            });
            clearInterval(that.data.timer);
            getCurrentPages().pop();
            wx.navigateTo({
              url: '/pages/cross_road/result?judge=1',
            });
            return;
          }else{
            //未失败
          }
        }else{
          if(rect.right>=perLeft&&rect.left<=perRight){
            if( (rect.top>=perTop&&rect.top<=perBottom)||(rect.bottom>=perTop&&rect.bottom<=perBottom)){
              //失败
              that.setData({
                fail:true
              });
              clearInterval(that.data.timer);
              getCurrentPages().pop();
              wx.navigateTo({
                url: '/pages/cross_road/result?judge=1',
              });
              return;
            }else{
              //未失败
            }
          }
        }
        
      })
    }).exec();      
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
         url: '/pages/cross_road/former',
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
     if(that.data.touchLeft==1 && positionX>=-150 && positionY>=-340 &&!that.data.fail){
      positionX += -25;
      positionY += -25;
      animation.translate(positionX,positionY).step();
      that.setData({
        crossAnimation:animation.export(),
        positionX:positionX,
        positionY:positionY
      });
    }
     var peopleWalk = setInterval(function () {
        if(that.data.touchLeft==1 && positionX>=-150 && positionY>=-340&&!that.data.fail){
          positionX += -25;
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
    if(that.data.touchTop==1 && positionX>=-150 && positionY>=-340&&!that.data.fail){
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
       if(that.data.touchTop==1 && positionX>=-150 && positionY>=-340&&!that.data.fail){
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
  if(that.data.touchRight==1 && positionX>=-150 && positionY>=-340&&!that.data.fail){
    positionX += 25;
    positionY += -25;
    animation.translate(positionX,positionY).step();
    that.setData({
        crossAnimation:animation.export(),
        positionX:positionX,
        positionY:positionY
    });
 }
  var peopleWalk = setInterval(function () {
     if(that.data.touchRight==1 && positionX>=-150 && positionY>=-340&&!that.data.fail){
      positionX += 25;
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
//停止向右移动
endRight:function(){
   this.setData({
     touchRight:0
   })
},
 //计时器
timeCount:function(){
    let that = this;
    let count = that.data.time;
    that.setData({
       timer: setInterval(function () {
        count--;
        that.setData({
         time: count
        })
    console.log(count);
    if (count <= 0 ) {
        that.setData({
          time: 0
        });
        clearInterval(that.data.timer);
   }
  }, 1000)
  })},
})
