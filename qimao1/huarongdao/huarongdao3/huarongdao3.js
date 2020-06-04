// huarongdao/huarongdao2/huarongdao2.js
var intt;
var app = getApp(); 
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showModal:false,
    showtip:false,
    minute: 0,
    second: 0,
    millisecond: 0,
    timecount: '02:20',
    cost: 0,
    flag: 1,
    endtime: "",
    showstart:true,
    show81:true,
    show82:false,
    show83:false,
    show84:false,
    show85:false,
    show91:true,
    show92:false,
    show93:false,
    show94:false,
    show95:false,
    show31:true,
    show32:false,
    show33:false,
    show34:false,
    show35:false,
    show71:true,
    show72:false,
    show73:false,
    show74:false,
    show75:false,
    show111:true,
    show112:false,
    show113:false,
    show114:false,
    show121:true,
    show122:false,
    show123:false,
    show124:false,
    show41:true,
    show42:false,
    show43:false,
    show44:false,
    show45:false,
    show51:true,
    show52:false,
    show53:false,
    show54:false,
    show55:false,
    show61:true,
    show62:false,
    show63:false,
    show64:false,
    show65:false,
    show101:true,
    show102:false,
    show103:false,
    show104:false,
    show105:false,
    show1:true,
    show2:false,
    show3:false,
    show4:false,
    show5:false,
   },

  touchStartTime: 0,
  touchEndTime: 0,  
   touchStartTime: 0,
   touchEndTime: 0,  


  /// 按钮触摸开始触发的事件
  touchStart: function(e) {
    this.touchStartTime = e.timeStamp
  },

  /// 按钮触摸结束触发的事件
  touchEnd: function(e) {
    this.touchEndTime = e.timeStamp
  },
  touchStart55: function(e) {
    this.touchStartTime = e.timeStamp
  },

  /// 按钮触摸结束触发的事件
  touchEnd55: function(e) {
    this.touchEndTime = e.timeStamp
  },

3:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show43==false&this.data.show44==false){
    if(this.data.show32==true){
  this.setData({
    show31:false,
    show33:false,
  })}
  if(this.data.show32==false){
    this.setData({
      show31:false,
      show33:true,
    })}
}}
},
L3:function(e){
  if(this.data.show101==false){
    this.setData({
      show33:false,
      show31:false,
      show32:true,
    })
  }
},
32:function(e){
  if(this.data.show3==false&this.data.show4==false){
  this.setData({
    show32:false,
    show31:true,
  })
}},

33:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show122==true){
    if(this.data.show31==true){
  this.setData({
    show33:false,
    show34:false,
  })}
  else{
    this.setData({
      show33:false,
      show34:true,
    }) 
  }
}}
},
L33:function(e){
  this.setData({
    show34:false,
    show33:false,
    show31:true,
  })
},

34:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show54==false&this.data.show55==false&this.data.show63==false&this.data.show64==false){
    if(this.data.show33==true){
  this.setData({
    show34:false,
    show35:false,
  })}
  else{
    this.setData({
      show34:false,
      show35:true,
    })}
  }}
  },

L34:function(e){
  if(this.data.show3==false&this.data.show4==false){
  this.setData({
    show35:false,
    show34:false,
    show33:true,
  })}
},
35:function(e){
  var that = this

  if(this.data.show43==false&this.data.show44==false){
  this.setData({
    show35:false,
    show34:true,
  })
  }
  },
 
  4:function(e){
  var that = this
  if(this.data.show91==false){
  this.setData({
    show41:false,
    show42:true,
  })
  }
  },
 
  42:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show33==false&this.data.show34==false){
    if(this.data.show41==false){
  this.setData({
    show42:false,
    show43:true,
  })}
  if(this.data.show41==true){
    this.setData({
      show42:false,
      show43:false,
    })}
  }}
  },
  L42:function(e){
    if(this.data.show83==false&this.data.show84==false){
    this.setData({
      show43:false,
      show42:false,
      show41:true,
    })}
  },

  43:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime>0){
  if(this.data.show73==false&this.data.show74==false){
    if(this.data.show42==false){
  this.setData({
    show43:false,
    show44:true,
  })}
  if(this.data.show42==true){
    this.setData({
      show43:false,
      show44:false,
    })}
  }}
  },
  L43:function(e){
    this.setData({
      show44:false,
      show43:false,
      show42:true,
    })
  },
 
  44:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show112==true){
    if(this.data.show43==false){
  this.setData({
    show44:false,
    show45:true,
  })}
  if(this.data.show43==true){
    this.setData({
      show44:false,
      show45:false,
    })}
  }}
  },
  L44:function(e){
    if(this.data.show91==false&this.data.show94==false){
    this.setData({
      show45:false,
      show44:false,
      show43:true,
    })}
  },
  L45:function(e){
    if(this.data.show33==false&this.data.show34==false){
    this.setData({
      show45:false,
      show44:true,
    })}
  },
  5:function(e){
  var that = this
  if(this.data.show35==false&this.data.show63==false&this.data.show64==false){
  this.setData({
    show51:false,
    show55:true,
  })
  }
  },
 
  55:function(e){
  var that = this
  console.log(that.touchEndTime );
  console.log(that.touchStartTime);
  console.log(that.touchEndTime - that.touchStartTime);
  
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show114==false){
    if(this.data.show54==false){
  this.setData({
    show55:false,
    show51:true,
  })}
  if(this.data.show54==true){
    this.setData({
      show55:false,
      show51:false,
    })}
  }}
  },
  L55:function(e){
    if(this.data.show62==false&this.data.show95==false){
    this.setData({
      show51:false,
      show55:false,
      show54:true,
     
    })}
  },
  L54:function(e){
   
  },
 54:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show75==false){
  this.setData({
    show54:false,
    show55:true,
    show51:false,
  })
  }}
  },
  L6:function(e){
   
  },
 6:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show95==false&this.data.show54==false){
  this.setData({
    show61:false,
    show62:true,
  })
  }}
  },
  
 62:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show55==false&this.data.show35==false){
    if(this.data.show61==false){
  this.setData({
    show62:false,
    show63:true,
  })}
  if(this.data.show61==true){
    this.setData({
      show62:false,
      show63:false,
    })}
  }}
  },
  L62:function(e){
    if(this.data.show85==false){
      this.setData({
        show63:false,
        show62:false,
        show61:true,
      })
      } 
  },
  L63:function(e){
      this.setData({
        show63:false,
        show62:true,
      })
  },
  L7:function(e){

  },
 7:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show4==false&this.data.show5==false){
  this.setData({
    show71:false,
    show72:true,
  })
  }}
  },
 
 72:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show44==false&this.data.show45==false){
    if(this.data.show71==false){
  this.setData({
    show72:false,
    show73:true,
  })}
  if(this.data.show71==true){
    this.setData({
      show72:false,
      show73:false,
    })}
  }}
  },
  L72:function(e){
    if(this.data.show104==false&this.data.show105==false){
      this.setData({
        show73:false,
        show72:false,
        show71:true,
      })
      } 
  },

 73:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show121==false&this.data.show124==false){
    if(this.data.show72==false){
  this.setData({
    show73:false,
    show74:true,
  })}
  if(this.data.show72==true){
    this.setData({
      show73:false,
      show74:false,
    })}
  }}
  },
  L73:function(e){
    this.setData({
      show74:false,
      show73:false,
      show72:true,
    })
},

 74:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show55==false&this.data.show51==false){
    if(this.data.show73==false){
  this.setData({
    show74:false,
    show75:true,
  })}
  if(this.data.show73==true){
    this.setData({
      show74:false,
      show75:false,
    })}
  }}
  },
  L74:function(e){
    if(this.data.show4==false){
      this.setData({
        show75:false,
        show74:false,
        show73:true,
      })
      } 
  },
  L75:function(e){
    if(this.data.show44==false&this.data.show45==false){
      this.setData({
        show75:false,
        show74:true,
      })
      } 
  },
  L8:function(e){
  },
 8:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime>0 ){
  if(this.data.show1==false){
  this.setData({
    show81:false,
    show82:true,
  })
  }}
  },
 
 82:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show41==false){
    if(this.data.show81==false){
  this.setData({
    show82:false,
    show83:true,
  })}
  if(this.data.show81==true){
    this.setData({
      show82:false,
      show83:false,
    })}
  }}
  },
  L82:function(e){
    if(this.data.show101==false){
      this.setData({
        show83:false,
        show82:false,
        show81:true,
      })
      } 
  },

 83:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show122==false){
    if(this.data.show82==false){
  this.setData({
    show83:false,
    show84:true,
  })}
  if(this.data.show82==true){
    this.setData({
      show83:false,
      show84:false,
    })}
  }}
  },
  L83:function(e){
    this.setData({
      show84:false,
      show83:false,
      show82:true,
    })
},

 84:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show61==false){
    if(this.data.show83==false){
  this.setData({
    show84:false,
    show85:true,
  })}
  if(this.data.show83==true){
    this.setData({
      show84:false,
      show85:false,
    })}
  }}
  },
  L84:function(e){
    if(this.data.show1==false){
      this.setData({
        show85:false,
        show84:false,
        show83:true,
      })
      } 
  },

85:function(e){

  },
  L85:function(e){
    if(this.data.show41==false){
      this.setData({
        show85:false,
        show84:true,
      })
      } 
  },

 9:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show124==true){
    if(this.data.show93==false){
  this.setData({
    show91:false,
    show94:true,
  })}
  if(this.data.show93==true){
    this.setData({
      show91:false,
      show94:false,
    })}
  }}
  },
  L9:function(e){
    this.setData({
      show94:false,
      show91:false,
      show93:true,
    })
},
  
 93:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show42==false&this.data.show43==false){
    if(this.data.show92==true){
  this.setData({
    show93:false,
    show91:false,
  })}
  if(this.data.show92==false){
    this.setData({
      show93:false,
      show91:true,
    })}
  }}
  },
  L93:function(e){
    if(this.data.show101==false&this.data.show103==false){
      this.setData({
        show91:false,
        show93:false,
        show92:true,
      })
      } 
  },
92:function(e){
  var that = this
  if(this.data.show2==false&this.data.show3==false){
  this.setData({
    show92:false,
    show93:true,
  })
  }
  },

94:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show62==false&this.data.show63==false&this.data.show54==false){
    if(this.data.show91==false){
  this.setData({
    show94:false,
    show95:true,
  })}
  if(this.data.show91==true){
    this.setData({
      show94:false,
      show95:false,
    })}
  }}
  },
  L94:function(e){
    if(this.data.show2==false&this.data.show3==false){
      this.setData({
        show95:false,
        show94:false,
        show91:true,
      })
      } 
  },
  L95:function(e){
    if(this.data.show42==false&this.data.show43==false){
      this.setData({
        show95:false,
        show94:true,
      })
      } 
  },
 95:function(e){

  },
  
 10:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime>0){
  if(this.data.show71==false){
    if(this.data.show103==false){
  this.setData({
    show101:false,
    show104:true,
  })}
  if(this.data.show103==true){
    this.setData({
      show101:false,
      show104:false,
    })}
  }}
  },
  L10:function(e){
    this.setData({
      show104:false,
      show101:false,
      show103:true,
    })
},

 103:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show32==false){
    if(this.data.show102==false){
  this.setData({
    show103:false,
    show101:true,
  })}
  if(this.data.show102==true){
    this.setData({
      show103:false,
      show101:false,
    })}
  }}
  },
  L103:function(e){
    if(this.data.show81==false){
      this.setData({
        show101:false,
        show103:false,
        show102:true,
      })
      } 
  },
  L102:function(e){

  },
 102:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show92==false){
  this.setData({
    show102:false,
    show103:true,
  })
  }}
  },
 
 104:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show112==false){
    if(this.data.show101==false){
  this.setData({
    show104:false,
    show105:true,
  })}
  if(this.data.show101==true){
    this.setData({
      show104:false,
      show105:false,
    })}
  }}
  },
  L104:function(e){
    if(this.data.show92==false){
      this.setData({
        show105:false,
        show104:false,
        show101:true,
      })
      } 
  },
  L105:function(e){
    if(this.data.show32==false){
      this.setData({
        show105:false,
        show104:true,
      })
      } 
  },
 105:function(e){

  },
  
 11:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show124==false){
    if(this.data.show112==true){
  this.setData({
    show111:false,
    show113:false,
  })}
  }}
  if(this.data.show112==false){
    this.setData({
      show111:false,
      show113:true,
    })}
  },
  L11:function(e){
    if(this.data.show105==false){
      this.setData({
        show113:false,
        show111:false,
        show112:true,
      })
      } 
  },
  L112:function(e){

  },
 112:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show45==false){
  this.setData({
    show112:false,
    show111:true,
  })
  }}
  },
  
 113:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show51==false){
    if(this.data.show111==false){
  this.setData({
    show113:false,
    show114:true,
  })}
  if(this.data.show111==true){
    this.setData({
      show113:false,
      show114:false,
    })}
  }}
  },
  L113:function(e){
    this.setData({
      show114:false,
      show113:false,
      show111:true,
    })
},
  L114:function(e){
    if(this.data.show5==false){
      this.setData({
        show114:false,
        show113:true,
      })
      } 
  },
 114:function(e){

  },
 
 12:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime>0){
  if(this.data.show113==false){
    if(this.data.show123==true){
      this.setData({
    show121:false,
    show124:false,
  })}
  else{
    this.setData({
    show121:false,
    show124:true,})
  }
  }}
  },
  L12:function(e){
    this.setData({
      show124:false,
      show121:false,
      show123:true,
    })
},
  
 123:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show75==false&this.data.show74==false){
    if(this.data.show122==true){
  this.setData({
    show123:false,
    show121:false,
  })}
  if(this.data.show122==false){
    this.setData({
      show123:false,
      show121:true,
    })}
  }}
  },
  L123:function(e){
    if(this.data.show85==false&this.data.show84==false){
      this.setData({
        show121:false,
        show123:false,
        show122:true,
      })
      } 
  },
  L122:function(e){

  },
 122:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show34==false&this.data.show35==false){
  this.setData({
    show122:false,
    show123:true,
  })
  }}
  },
  L124:function(e){
    if(this.data.show95==false&this.data.show94==false){
      this.setData({
        show123:false,
        show124:false,
        show121:true,
      })
      } 
  },
124:function(e){
  
  },
  L13:function(e){
 
  },
 13:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime>0){
  if(this.data.show91==false&this.data.show93==false){
  this.setData({
    show1:false,
    show2:true,
  })
  }}
  },
  
 132:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show31==false&this.data.show33==false){
    if(this.data.show1==false){
  this.setData({
    show2:false,
    show3:true,
  })}
  if(this.data.show1==true){
    this.setData({
      show2:false,
      show3:false,
    })}
  }}
  },
  L132:function(e){
    if(this.data.show82==false&this.data.show83==false){
      this.setData({
        show3:false,
        show2:false,
        show1:true,
      })
      } 
  },
 
133:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show72==false&this.data.show73==false){
    if(this.data.show2==false){
  this.setData({
    show3:false,
    show4:true,
  })}
  if(this.data.show2==true){
    this.setData({
      show3:false,
      show4:false,
    })}
  }}
  },
  L133:function(e){
    this.setData({
      show4:false,
      show3:false,
      show2:true,
    })

},
L134:function(e){
  if(this.data.show91==false&this.data.show93==false){
    if(this.data.show5==false){
    this.setData({
      show4:false,
      show3:true,
    })}
    if(this.data.show5==true){
      this.setData({
        show4:false,
        show3:false,
      })}
    } 
},
 134:function(e){
  var that = this
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  if (that.touchEndTime - that.touchStartTime >0){
  if(this.data.show114==true){
  this.setData({
    show4:false,
    show5:true,
  })
  wx.redirectTo({
    url: '/huarongdao/success/success',
  })
  clearInterval(intt);
  }}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  changeYL: function () { 
    if(this.data.showModal==true){
      this.setData({
    showModal: false
  })
  }
  else{
    this.setData({
      showModal:true
    })
  }
},
hintShow:function(){
  if(this.data.showtip==true){
    this.setData({
  showtip: false
})
}
else{
  this.setData({
    showtip:true,
    showModal:false,
  })
}
},
hideModal: function () {
  this.setData({
    showModal: false
  });
},
toMenu: function(){ 
  wx.redirectTo({ url: '../../pages/1/1', })
},
again: function () {
  wx.redirectTo({
    url: '/huarongdao/huarongdao1/huarongdao1',
  })
},
xiaoshi:function(){
  this.setData({
    shows15:true,
  shows16:false,
  showModal:false,
  showtip:false,
  });
},
tip:function () {
  this.setData({
    showtip:false,
    
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


start: function () {
  var that = this;
  //停止（暂停）
  clearInterval(intt);
  //时间重置
  that.setData({
    minute: 2,
    second: 20,
    millisecond: 0,
  })
  intt = setInterval(function () { that.timer() }, 50);
  this.setData({
    showstart:false
  })
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
    wx.redirectTo({
      url: '/huarongdao/fail/fail',
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
