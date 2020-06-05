// pages/stone_1/stone_1.js
var app = getApp()
Page({
  data: {
    typeName: '计时模式',
    score: 0,
    local0: true,
    time: 60,
    shouldStop: false,
    blockData:[]
  },
  onReady: function(){
      var array = [];
      // 先生成一个10个长度的数组
      for(var i = 0; i < 10; i++){
          // 生成一个随机位数为1的数组
          var orderArray = [0,0,0,0];
          var randomNum = Math.floor(Math.random() * 4);
          orderArray[randomNum] = 1;
          array.push({id: i, block: orderArray});
      }
      this.setData({
          blockData: array.reverse()
      });
  },
  handleClick: function(events){
      var id = events.currentTarget.id;
      var line = id.split("-")[1];
      var column = id.split("-")[2];
      var isBlack = id.split("-")[3];
      var blockData = this.data.blockData.reverse();
      var score = this.data.score;
      var orderArray = [0,0,0,0];
      // 判断是否是第一行
      if(line != blockData[0].id){
        this.setData({
          local0: false,
          local1: false,
          local2: false,
          local3: false,
          local4: false
      });
        if(column==0){
          this.setData({
            local_1: true,
            local_2: false,
            local_3: false,
            local_4: false
        });
        }
        if(column==1){
          this.setData({
            local_1: false,
            local_2: true,
            local_3: false,
            local_4: false
        });
        }
        if(column==2){
          this.setData({
            local_1: false,
            local_2: false,
            local_3: true,
            local_4: false
        });
        }
        if(column==3){
          this.setData({
            local_1: false,
            local_2: false,
            local_3: false,
            local_4: true
        });
        }
        this.handleWrong(0, score);
        return;
      }
      // 判断是否正确
      if(isBlack != 1){
        this.setData({
          local0: false,
          local1: false,
          local2: false,
          local3: false,
          local4: false
      });
        if(column==0){
          this.setData({
            local_1: true,
            local_2: false,
            local_3: false,
            local_4: false
        });
        }
        if(column==1){
          this.setData({
            local_1: false,
            local_2: true,
            local_3: false,
            local_4: false
        });
        }
        if(column==2){
          this.setData({
            local_1: false,
            local_2: false,
            local_3: true,
            local_4: false
        });
        }
        if(column==3){
          this.setData({
            local_1: false,
            local_2: false,
            local_3: false,
            local_4: true
        });
        }
        this.handleWrong(1, score);
        return;
      }
      if(column==0){
        this.setData({
          local0: false,
          local1: true,
          local2: false,
          local3: false,
          local4: false
      });
      }
      if(column==1){
        this.setData({
          local0: false,
          local1: false,
          local2: true,
          local3: false,
          local4: false
      });
      }
      if(column==2){
        this.setData({
          local0: false,
          local1: false,
          local2: false,
          local3: true,
          local4: false
      });
      }
      if(column==3){
        this.setData({
          local0: false,
          local1: false,
          local2: false,
          local3: false,
          local4: true
      });
      }
      if (score==100){       

        this.setData({
          showResult3: true
        });
        setTimeout(function () {
          wx.redirectTo({
            url: '../stone_2/stone_2?type=time&score=' + score
        });
         }, 1500) //延迟时间
      }else{
        score++;
        orderArray[Math.floor(Math.random() * 4)] = 1;
        blockData.push({id: score+10, block: orderArray});
        blockData.shift();
        this.setData({
            silding: true,
            score: score,
            blockData: blockData.reverse()
        });
      }
      // 正确下一个
      // 分数++
      // 最后一个小块的id为分数+10

  },
  handleWrong: function( type , score){
      var _this = this;
      if(type==0){
        this.setData({
          showResult0: true
        });

      }
      if(type==1){
        this.setData({
          showResult1: true
        });
      }
      if(type==2){
        this.setData({
          showResult2: true
        });
      }
      _this.setData({
        shouldStop: true
      });
      setTimeout(function () {
        if(type==1){
          wx.redirectTo({
            url: '../stone_3/stone_3?type=time&score=' + score
        });
        }
        if(type==0){
          wx.redirectTo({
            url: '../stone_3/stone_3?type=time&score=' + score
        });
        }
        if(type==2){
          wx.redirectTo({
            url: '../stone_4/stone_4?type=time&score=' + score
        });
        }
       }, 1800)     
  },
  timeInterval: function(){
    var that = this;
    that.data.timer = setInterval(function(){
        // 判断是否小于0

        var nowTime = that.data.time;
        
        if(that.data.shouldStop){
          clearInterval(that.data.timer);
        }

        if(nowTime > 1){
          that.setData({
            time: nowTime-1
          });
          return;
        }

        that.setData({
          time: nowTime-1
        });
        that.handleWrong(2, that.data.score);
        clearInterval(timer);
      }, 1000);
  },
  onLoad: function(){
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

      this.timeInterval();
  },
  changeYL: function () {
    this.setData({
      showModal: true
    })
  },
  hintShow: function(){
    this.setData({
      showHint: true
    })
  },
  hideModal: function () {
    this.setData({
      showModal: false
    });
    this.setData({
      showHint: false
    });
  },
  toMenu: function(){ 
    wx.redirectTo({ url: '../1/1', })
  },
  again: function () {
    wx.redirectTo({ url: '../stone_0/stone_0', })
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
  onHide: function () {
    var that =this;
    clearInterval(that.data.timer);
  },
  onUnload:function(){
    var that =this;
    clearInterval(that.data.timer);
  }


})


