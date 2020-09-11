//自定义导航栏组件header
const DEFAULT_STATUS_HEIGHT = 20, DEFAULT_MENU_HEIGHT =  48
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    name: {
      type: String,
      value: ''
    },
    //是否开启返回上一页，如果当前页面数未1则返回首页
    hasBack: {
      type: Boolean,
      value: false
    },
    //是否开发返回首页
    hasGoHome: {
      type: Boolean,
      value: false
    },
    //字体颜色
    color: {
      type: String,
      value: '#fff'
    },
    //背景色
    background: {
      type: String,
      value: '#333'
    }
  },
  data: {
    top: 26,
    left: 10,
    height: 34
  },
  methods: {
    goBack() {
      if (this.data.hasBack) {
        const pages = getCurrentPages()
        if (pages.length <= 1) {
          wx.switchTab({
            url: '../index/index',
          })
        } else {
          wx.navigateBack({
            delta: 1,
          })
        }
      } else if (this.data.hasGoHome) {
        wx.switchTab({
          url: '../index/index',
        })
      }
    }
  },
  onLoad: function () {
    let { height, top } = wx.getMenuButtonBoundingClientRect()
    this.setData({
      top: top || DEFAULT_STATUS_HEIGHT,
      height: height || DEFAULT_MENU_HEIGHT
    })
  }
});