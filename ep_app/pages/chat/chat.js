//chat.js
Page({
  data: {
  },
  onLoad: function () {
    wx.cloud.callFunction({
      // 云函数名称
      name: 'getPrattle',
      // 传给云函数的参数
      data: {
        userName: getApp().globalData.userInfo.nickName,
        userGender: getApp().globalData.userInfo.gender
      },
      success: function (res) {
        var pages = getCurrentPages()
        console.log(res)
        pages[pages.length - 1].setData({
          name: res.result.data[0]
        })
      },
      fail: console.error
    }),
    this.setData({
      msg: "丑逼走开"
    })
  }
})