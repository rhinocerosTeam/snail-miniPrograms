Page({
  data: {
    toView: 'red',
    scrollTop: 100,
    recordList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
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