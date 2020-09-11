//chat.js
Page({
  back: function () {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  data: {
    messages: [],         // 聊天记录
    msg: '',              // 当前输入
    scrollTop: 0,         // 页面的滚动值
    lastId: '',           // 最后一条消息的ID
    isFirstSend: true     // 是否第一次发送消息(区分历史和新加)
  },
  onLoad: function () {
    getCurrentPages()[getCurrentPages().length - 1].setData({
      name: getApp().globalData.userInfo.nickName
    });
    wx.setNavigationBarColor({
      frontColor: "#000000",
      backgroundColor: "#cccccc"
    });
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
        pages[pages.length - 1].setData({
          name: res.result.data[0]
        })
      },
      fail: console.error
    })
  },
  onReady: function(){
    const data = ["Love you idsajdiajdis jiadji asjdioasjdoiajd aiojdioajdio ajsdioja iodjasiod jaiodjad s", "and you?", "love you too", "Love you", "and you?", "love you too", "Love you", "and you?", "love you too", "Love you", "and you?", "love you too", "Love you", "and you?", "love you too", "Love you", "and you?", "love you too", "Love you", "and you?"];
    let messages = this.data.messages;
    let lastId = this.data.lastId;
    for (var i = 0; i < data.length; i++){
      let nums = messages.length;
      const input = {
        id: `msg${++nums}`,
        index: nums,
        message: data[i]
      };
      messages.push(input);
      lastId = `msg${nums}`;
    }
    this.setData({
      messages: messages,
      lastId : lastId
    });
  }
})