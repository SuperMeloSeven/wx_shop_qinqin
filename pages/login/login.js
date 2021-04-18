import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    password: '', 
    phoneFlag: false,
    passwordFlag: false,
    btn: '1'
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

  },

  // 校验手机号码 
  validatePhone (event) {
    const reg = new RegExp(/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/g)
    if (reg.test(event.detail)) {
      this.setData({
        phone: event.detail,
        phoneFlag: true
      })
    } else {
      this.setData({
        phoneFlag: false
      })
    }
  },
  savePassword (event) {
    if (event.detail) {
      this.setData({
        password: event.detail.replace(/\s+/g, ''),
        passwordFlag: true
      })
    } else {
      this.setData({
        passwordFlag: false
      })
    }
  },
  // 保存账号密码并跳转mine
  handleLogin () {
    var stoPhone = wx.getStorageSync('phone')
    var stoPassword = wx.getStorageSync('password')
    if (stoPhone == this.data.phone && stoPassword == this.data.password) {
      Toast.success({
        duration: 1000,
        message: '登陆成功!',
        onClose: () => {
          wx.switchTab({
            url: '/pages/mine/mine',
          })
        }
      })
    } else {
      Toast.fail('您输入的手机号码或密码有误，请重新输入!')
    }
  }
})