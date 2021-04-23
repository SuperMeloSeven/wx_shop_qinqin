// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    pic: '',
    jiage: '',
    platform: '',
    dtitle: '',
    shopName: '',
    serviceFlag: false,
    expressFlag: false,
    fareFlag: false,
    receiptFlag: false,
    totalPrice: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {id,pic,jiage,platform,dtitle,shopName} = options
    this.setData({
      id,
      pic,
      jiage: jiage,
      platform,
      dtitle,
      shopName,
      totalPrice: jiage*100
    })
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

  handleSubmit () {
    wx.reLaunch({
      url: `/pages/buySuccess/buySuccess?id=${this.data.id}&pic=${this.data.pic}&jiage=${this.data.jiage}&shopName=${this.data.shopName}&dtitle=${this.data.dtitle}`,
    })
  },
  handleService () {
    this.setData({
      serviceFlag: true
    })
  },
  handleExpress () {
    this.setData({
      expressFlag: true
    })
  },
  handleFare () {
    this.setData({
      fareFlag: true
    })
  },
  handleReceipt () {
    this.setData({
      receiptFlag: true
    })
  },
  closeService () {
    this.setData({
      serviceFlag: false
    })
  },
  closeExpress () {
    this.setData({
      expressFlag: false
    })
  },
  closeFare () {
    this.setData({
      fareFlag: false
    })
  },
  closeReceipt () {
    this.setData({
      receiptFlag: false
    })
  },
})