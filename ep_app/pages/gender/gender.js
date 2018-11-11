// pages/gender/gender.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    maleBdr: "5px solid white",
    femaleBdr: "5px solid white",
    maleBs: "0 6rpx 10rpx 2rpx #ffffffc4",
    maleWbs: "0px 3px 5px 1px #ffffffc4",
    femaleBs: "0 6rpx 10rpx 2rpx #ffffffc4",
    femaleWbs: "0px 3px 5px 1px #ffffffc4",
    maleColor: "transparent",
    femaleColor: "transparent",
    maleTextBdr: "2px solid transparent", 
    femaleTextBdr: "2px solid transparent",
    instruction: "请问你想要撩小哥哥呢？\n还是小姐姐呢？",
    genderSelected: null
  },

  tapMale: function () {
    this.setData({
      genderSelected: 'm',
      maleColor: "whitesmoke",
      femaleColor: "transparent",
      maleBdr: "5px solid #26effdb6",
      femaleBdr: "5px solid white",
      maleBs: "0 6rpx 10rpx 2rpx #26effdc4",
      maleWbs: "0px 3px 5px 1px #26effdc4",
      femaleBs: "0 6rpx 10rpx 2rpx #ffffffc4",
      femaleWbs: "0px 3px 5px 1px #ffffffc4",
      maleTextBdr: "2px solid whitesmoke",
      femaleTextBdr: "2px solid transparent"
    })
  },

  tapFemale: function () {
    this.setData({
      genderSelected: 'f',
      maleColor: "transparent",
      femaleColor: "whitesmoke",
      maleBdr: "5px solid white",
      femaleBdr: "5px solid #26effdb6",
      maleBs: "0 6rpx 10rpx 2rpx #ffffffc4",
      maleWbs: "0px 3px 5px 1px #ffffffc4",
      femaleBs: "0 6rpx 10rpx 2rpx #26effdc4",
      femaleWbs: "0px 3px 5px 1px #26effdc4",
      maleTextBdr: "2px solid transparent",
      femaleTextBdr: "2px solid whitesmoke"
    })
  },

  clickMe: function () {
    if (this.data.genderSelected != null) {
      wx.navigateTo({
        url: '../chat/chat'
      })
    } else {
      wx.showModal({
        title: '性别不明错误 Σ(っ °Д °;)っ',
        content: '请允许土酱向您致以真诚的歉意！\r\n┑(￣Д ￣)┍',
        confirmText: "好的哟~",
        showCancel: false
      })
    }
  }
})