//app.js
App({
  data: {
    hasClick: false,
    globalscore:0,
    musicon:true
  },
  onLaunch: function () {
    
    this.AppMusic = wx.createInnerAudioContext();
    this.AppMusic.autoplay = true;
    this.AppMusic.loop = true;
    this.AppMusic.src = "music/奇怪的人.mp3";
    this.AppMusic.onPlay(() => {
    console.log('开始播放')
    })
    this.AppMusic.onError((res) => {
    console.log(res.errMsg);
    console.log(res.errCode);
    })
  },

})
