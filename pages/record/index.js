import Api from '../../api/index.js'

Page({
  data: {
    toView: 'red',
    scrollTop: 100,
    recordList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  },
  onLoad: function (options) {
    console.log("page ---onLoad---");
    this.api_getData()
  },
  onReady: function () {
    console.log("page ---onReady---");
  },
  onShow: function () {
    console.log("page ---onShow---");
  },
  onHide: function () {
    console.log("page ---onHide---");
  },
  onUnload: function () {
    console.log("page ---onUnload---");
  },
  upper: function (e) {
    console.log('--->upper',e)
  },
  lower: function (e) {
    console.log('--->lower',e)
  },
  scroll: function (e) {
   // console.log('scroll',e)
  },
  api_getData(){
    Api.getRecordList({},(data)=>{
      console.log('api_getData',data)
    })
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})