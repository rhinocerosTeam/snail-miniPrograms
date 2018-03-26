App({
  // 监听小程序初始化 只触发一次
  onLaunch: (options)=>{
    console.log(options)
  },
  // 监听小程序显示
  onShow: (options)=>{
    console.log(options)
  },
  // 监听小程序隐藏
  onHide:()=>{

  },
  // 错误监听函数
  onError: (msg)=>{

  }
})