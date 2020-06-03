var nodeWH = 20
var direction = 'right'
var timer = null
var nodes=[]
var food = null
var context = wx.createCanvasContext('snakeCanvas')
var lastPoint = null
var isGameOver = false
var that 
var score = 0
var app = getApp();

function Node(x,y){
this.x = x;
this.y = y;
}

function createSnake(){
nodes.splice(0, nodes.length)
for (var i = 0; i >= 0; i--) {
  var node = new Node(nodeWH * i , nodeWH )
  nodes.push(node);
}
}

function createFood(){
var x = parseInt(Math.random() * 15) * nodeWH 
var y = parseInt(Math.random() * 15) * nodeWH 

//如果食物的坐标在蛇身上，则重新创建
for (var i = 0; i < nodes.length; i++) {
  var node = nodes[i]
  if (node.x == x && node.y == y) {
    createFood()
    return
  }
}
food = new Node(x,y)
}

//绘制蛇与食物
function draw(){
for (var i = 0; i < nodes.length; i++) {
  var node = nodes[i]
  if (i == 0) {
    context.beginPath()
    switch (direction) {
      case 'up':
        context.drawImage('../images/七毛向上走.png',node.x,node.y,nodeWH,nodeWH)
      break;
      case 'left':
        context.drawImage('../images/七毛向左走.png',node.x,node.y,nodeWH,nodeWH)
      break;
      case 'right':
        context.drawImage('../images/七毛向右走.png',node.x,node.y,nodeWH,nodeWH)
      break;
      case 'down':
        context.drawImage('../images/七毛向下走.png',node.x,node.y,nodeWH,nodeWH)
      break;
    } 
    context.closePath()
    context.fill()
  } else {
    context.beginPath()
    context.drawImage('../images/蛇身.png',node.x,node.y,nodeWH,nodeWH)
    context.closePath()
    context.fill()
  }
}

context.beginPath()
context.drawImage('../images/食物.png',food.x,food.y,nodeWH,nodeWH)
context.closePath()
context.fill()

wx.drawCanvas({
  canvasId: 'snakeCanvas',
  actions: context.getActions()
})
}

//游戏结束
function gameOver(){
isGameOver = true
clearInterval(timer)
wx.redirectTo({
  url: '../tcsfail/tcsfail',
})
}

//是否吃到食物
function isEatedFood(){
var head = nodes[0]
if (head.x == food.x && head.y == food.y) {
  score++
  nodes.push(lastPoint)
  createFood()
}
}

//是否撞到墙壁或者撞到自己的身体
function isDestroy(){
var head = nodes[0]
for (var i = 1; i < nodes.length; i++) {
  var node = nodes[i]
  if (head.x == node.x && head.y == node.y) {
    gameOver()
  }
}
if (head.x < 0 || head.x > 280) {
  gameOver()
}
if (head.y < 0 || head.y > 280) {
  gameOver()
}
}

function moveEnd(){
isEatedFood()
isDestroy()
draw()
}

function move(){
  lastPoint = nodes[nodes.length - 1]
  var node = nodes[0]
  var newNode = {x: node.x, y: node.y}
  switch (direction) {
    case 'up':
      newNode.y -= nodeWH;
    break;
    case 'left':
      newNode.x -= nodeWH;
    break;
    case 'right':
      newNode.x += nodeWH;
    break;
    case 'down':
      newNode.y += nodeWH;
    break;
} 
nodes.pop()
  nodes.unshift(newNode)
  moveEnd()
}

function startGame() {
  if (isGameOver) {
    direction = 'right'
    createSnake()
    createFood()
    score = 0
    isGameOver = false
  }
  score = 0
  timer = setInterval(move,300)
}

Page({
  data:{
    btnTitle:'开始',
    show: false,
    hintshow:false,
    boxes: 0,
    musicbtn:true,
    musicbtn2:false
  },
  onLoad:function(){
    createSnake();
    createFood();
    draw();
    startGame();

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
  
  changedirup:function(){
    if (direction == 'up' || direction == 'down') return
    direction = "up";
    this.getScore();
  },
  changedirdown:function(){
    if (direction == 'up' || direction == 'down') return
    direction = "down";
    this.getScore();
  },
  changedirleft:function(){
    if (direction == 'left' || direction == 'right') return
    direction = "left";
    this.getScore();
  },
  changedirright:function(){
    if (direction == 'left' || direction == 'right') return
    direction = "right";
    this.getScore();
  },
  isEatedFood:function () {
    var head = nodes[0];
    if (head.x == food.x && head.y == food.y) {
      score++;
      nodes.push(lastPoint);
      createFood();
    }
    },
    getScore:function() {
      this.setData({
        boxes:score
      })
      if(score == 20) {
        clearInterval(timer)
        getCurrentPages().pop();
        wx.redirectTo({
          url: '../tcssuccess/tcssuccess',
        })
      }
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
      url: '../../1/1',
    })
  },
  again:function() {
    wx.redirectTo({
      url: '../../tanchishe/tanchishe',
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
  audioPause: function () {
    var app = getApp();
    app.AppMusic.pause();
    app.data.musicon = false;
    this.setData({
      musicbtn2: true,
      musicbtn:false
    });
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
})