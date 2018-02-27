//app.js
App({
  //全局数据对象
  globalData: {
    hasLogin : false
  },
  //全局方法
  fetchApi (url, callback){
    wx.request({//发起网络请求
      url,
      data:{},
      //会对数据进行JSON序列化
      header: { "Content-Type": "json"},
      success (res){
        callback(null, res.data)
      },
      fail(e){
        callback(e)
      }
    })
  },
  onLaunch () {
    // 应用程序启动时触发一次
   console.log('App launch')
     
  },
  
  onShow (){
    //当应用程序进入前台显示
    console.log('App show')
  },
  onHide (){
    //当应用程序进入后台状态时触发
    console.log('App hide')
  }
})