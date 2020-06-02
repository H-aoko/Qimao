//迷宫游戏界面
var app = getApp()  
var interval
var timeout
Page({  
  data: {
    mleft: "160rpx",
    mtop: "675rpx",
    show: false,
    hintshow:false,
    seconds:30,
    musicbtn:true,
    musicbtn2:false
  },
  onLoad: function () {  
    this.mysetInterval();
    timeout=setTimeout(function(){
      clearInterval(interval);
      getCurrentPages().pop();
      wx.redirectTo({
        url: '../mgfail/mgfail',
      })
    },30000);

    /*var that = this;
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
    }*/
  },  
  openmenu:function() {
    var cshow=this.data.show;
    if(cshow==false) {
      cshow=true;
    }else {
      cshow=false;
    }
    this.setData({
      show: cshow
    })
  },
  hide:function() {
    this.setData({
      show:false,
      hintshow:false
    })
  },
  home:function() {
    wx.reLaunch({
      url: '../../index/index',
    })
  },
  again:function() {
    wx.redirectTo({
      url: '../../migong/migong',
    })
  },
  hint:function() {
    var chintshow=this.data.hintshow;
    if(chintshow==false) {
      chintshow=true;
    }else {
      chintshow=false;
    }
    this.setData({
      hintshow: chintshow
    })
  },
  qmup :function() {
    var cleft=this.data.mleft;
    var ctop=this.data.mtop;
    if ( (cleft=="95rpx" && (ctop=="675rpx"||ctop=="480rpx"||ctop=="350rpx"||ctop=="155rpx")) ||
         (cleft=="160rpx" && (ctop=="610rpx"||ctop=="415rpx"||ctop=="350rpx"||ctop=="155rpx")) ||
         (cleft=="225rpx" && (ctop=="480rpx"||ctop=="415rpx"||ctop=="350rpx"||ctop=="155rpx")) ||
         (cleft=="290rpx" && (ctop=="415rpx"||ctop=="220rpx"||ctop=="155rpx")) ||
         (cleft=="355rpx" && (ctop=="675rpx"||ctop=="610rpx"||ctop=="415rpx"||ctop=="220rpx"||ctop=="155rpx")) ||
         (cleft=="420rpx" && (ctop=="675rpx"||ctop=="545rpx"||ctop=="480rpx"||ctop=="350rpx"||ctop=="220rpx"||ctop=="155rpx")) ||
         (cleft=="485rpx" && (ctop=="610rpx"||ctop=="545rpx"||ctop=="480rpx"||ctop=="415rpx"||ctop=="350rpx"||ctop=="285rpx"||ctop=="155rpx")) ||
         (cleft=="550rpx" && (ctop=="675rpx"||ctop=="610rpx"||ctop=="545rpx"||ctop=="350rpx"||ctop=="155rpx")) ||
         (cleft=="615rpx" && (ctop=="220rpx"||ctop=="155rpx")) ) {
      ;
    }else {
      this.setData({
        mleft: cleft,
        mtop: (Number(ctop.substring(0,ctop.indexOf("r")))-65).toString()+"rpx",
        })
      if (cleft=="550rpx"&&ctop=="220rpx") {
        clearInterval(interval);
        clearTimeout(timeout);
        wx.redirectTo({
          url: '../mgsuccess/mgsuccess',
        })
      }
    }
  },
  qmdown :function() {
    var cleft=this.data.mleft;
    var ctop=this.data.mtop;
    if ( (cleft=="95rpx" && (ctop=="675rpx"||ctop=="610rpx"||ctop=="415rpx"||ctop=="285rpx")) ||
         (cleft=="160rpx" && (ctop=="675rpx"||ctop=="545rpx"||ctop=="350rpx"||ctop=="285rpx")) ||
         (cleft=="225rpx" && (ctop=="675rpx"||ctop=="415rpx"||ctop=="350rpx"||ctop=="285rpx")) ||
         (cleft=="290rpx" && (ctop=="675rpx"||ctop=="350rpx"||ctop=="155rpx")) ||
         (cleft=="355rpx" && (ctop=="675rpx"||ctop=="610rpx"||ctop=="545rpx"||ctop=="350rpx"||ctop=="155rpx")) ||
         (cleft=="420rpx" && (ctop=="675rpx"||ctop=="610rpx"||ctop=="480rpx"||ctop=="415rpx"||ctop=="285rpx"||ctop=="155rpx")) ||
         (cleft=="485rpx" && (ctop=="675rpx"||ctop=="545rpx"||ctop=="480rpx"||ctop=="415rpx"||ctop=="350rpx"||ctop=="285rpx"||ctop=="220rpx")) ||
         (cleft=="550rpx" && (ctop=="675rpx"||ctop=="610rpx"||ctop=="545rpx"||ctop=="480rpx"||ctop=="285rpx")) ||
         (cleft=="615rpx" && (ctop=="675rpx"||ctop=="155rpx")) ) {
      ;
    }else {
      this.setData({
        mleft: cleft,
        mtop: (Number(ctop.substring(0,ctop.indexOf("r")))+65).toString()+"rpx"
        })
    }
  },
  qmleft :function() {
    var cleft=this.data.mleft;
    var ctop=this.data.mtop;
    if ( (cleft=="95rpx" && (ctop=="675rpx"||ctop=="610rpx"||ctop=="545rpx"||ctop=="480rpx"||ctop=="415rpx"||ctop=="350rpx"||ctop=="285rpx"||ctop=="220rpx"||ctop=="155rpx")) ||
         (cleft=="160rpx" && (ctop=="675rpx"||ctop=="545rpx"||ctop=="480rpx"||ctop=="285rpx"||ctop=="220rpx")) ||
         (cleft=="225rpx" && (ctop=="610rpx"||ctop=="480rpx"||ctop=="350rpx"||ctop=="220rpx"||ctop=="155rpx")) ||
         (cleft=="290rpx" && (ctop=="675rpx"||ctop=="610rpx"||ctop=="545rpx"||ctop=="480rpx"||ctop=="285rpx")) ||
         (cleft=="355rpx" && (ctop=="545rpx"||ctop=="480rpx"||ctop=="350rpx"||ctop=="285rpx")) ||
         (cleft=="420rpx" && (ctop=="545rpx"||ctop=="480rpx"||ctop=="415rpx"||ctop=="285rpx"||ctop=="155rpx")) ||
         (cleft=="485rpx" && (ctop=="675rpx"||ctop=="610rpx"||ctop=="350rpx")) ||
         (cleft=="550rpx" && (ctop=="220rpx"||ctop=="155rpx")) ||
         (cleft=="615rpx" && (ctop=="610rpx"||ctop=="480rpx"||ctop=="415rpx"||ctop=="285rpx"||ctop=="220rpx"||ctop=="155rpx")) ) {
      ;
    }else {
    this.setData({
        mleft: (Number(cleft.substring(0,cleft.indexOf("r")))-65).toString()+"rpx",
        mtop: ctop
        })
    }
  },
  qmright :function() {
    var cleft=this.data.mleft;
    var ctop=this.data.mtop;
    if ( (cleft=="95rpx" && (ctop=="545rpx"||ctop=="480rpx"||ctop=="285rpx"||ctop=="220rpx")) ||
         (cleft=="160rpx" && (ctop=="610rpx"||ctop=="480rpx"||ctop=="350rpx"||ctop=="220rpx"||ctop=="155rpx")) ||
         (cleft=="225rpx" && (ctop=="675rpx"||ctop=="610rpx"||ctop=="545rpx"||ctop=="480rpx"||ctop=="285rpx")) ||
         (cleft=="290rpx" && (ctop=="545rpx"||ctop=="480rpx"||ctop=="350rpx"||ctop=="285rpx")) ||
         (cleft=="355rpx" && (ctop=="545rpx"||ctop=="480rpx"||ctop=="415rpx"||ctop=="285rpx"||ctop=="155rpx")) ||
         (cleft=="420rpx" && (ctop=="675rpx"||ctop=="610rpx"||ctop=="350rpx")) ||
         (cleft=="485rpx" && (ctop=="220rpx"||ctop=="155rpx")) ||
         (cleft=="550rpx" && (ctop=="610rpx"||ctop=="480rpx"||ctop=="415rpx"||ctop=="285rpx"||ctop=="220rpx"||ctop=="155rpx")) ||
         (cleft=="615rpx") ) {
      ;
    }else {
    this.setData({
        mleft: (Number(cleft.substring(0,cleft.indexOf("r")))+65).toString()+"rpx",
        mtop: ctop
        })
      }
  },
  mysetInterval:function() {
    interval=setInterval(() => {
    this.setData({
      seconds: this.data.seconds-1
      })
   }, 1000);
  },
  audioPause: function () {
    /*var app = getApp();
    app.AppMusic.pause();
    app.data.musicon = false;*/
    this.setData({
      musicbtn2: true,
      musicbtn:false
    });
  },
  audioPlay: function () {
    /*var app = getApp();
    app.AppMusic.play();
    app.data.musicon = true;*/
    this.setData({
      musicbtn: true,
      musicbtn2:false
    });
  },
})  

