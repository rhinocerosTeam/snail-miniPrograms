// pages/example/media/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  filePath(){
    wx.getSavedFileList({
      success: function (res) {
        console.log('本地图片链接', res.fileList)
        let fileListUrl = []
        for (var url of res.fileList) {
          fileListUrl.push(url.filePath)
        }
        wx.previewImage({
          current: '', // 当前显示图片的http链接
          urls: fileListUrl // 需要预览的图片http链接列表
        })

      }
    })
  },
  img:function(){
    let _this = this
    wx.chooseImage({
      count:9,
      success: function(res) {
        let tempFilePaths = res.tempFilePaths
        for (var url of tempFilePaths){
          _this.saveFile(url)
        }
        console.log('选择图片：',res)
       

      },
    })
  },
  saveFile:function(url){
    wx.saveFile({
      tempFilePath: url,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})