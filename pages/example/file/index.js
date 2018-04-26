// pages/example/file/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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
  

    // wx.chooseImage({
    //   success: function (res) {
    //     var tempFilePaths = res.tempFilePaths
    //     wx.saveFile({
    //       tempFilePath: tempFilePaths[0],
    //       success: function (res) {
    //         var savedFilePath = res.savedFilePath
    //         console.log(savedFilePath)
    //       }
    //     })
    //   }
    // })

    wx.getSavedFileList({
      success: function (res) {
        console.log(res.fileList)
      }
    })

    // wx.getSavedFileInfo({
    //   filePath: 'http://store/wxd40fc969367b539a..HgtQyu6292Chb8ee05aceeda53e4ddf7e6733021c342.png', //仅做示例用，非真正的文件路径
    //   success: function (res) {
    //     console.log('getSavedFileInfo',res.size)
    //     console.log('getSavedFileInfo',res.createTime)
    //   }
    // })

    // wx.removeSavedFile({
    //   filePath: 'http://store/wxd40fc969367b539a..HgtQyu6292Chb8ee05aceeda53e4ddf7e6733021c342.png',
    //   complete: function (res) {
    //     console.log(res)
    //   }
    // })

    
        wx.openDocument({
          filePath: 'http://store/wxd40fc969367b539a..x6WqdHZMDr3H2860197d4fbcdb090e12b6810e61ad05.png',
          success: function (res) {
            console.log('打开文档成功')
          }
        })
      




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