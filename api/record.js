export default {
  getRecordList(data, success) {
    wx.request({
      url: this.api+'v1/recordList', //仅为示例，并非真实的接口地址
      data: data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        success(res.data)
      }
    })
  }

}