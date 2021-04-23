// pages/orderList/orderList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList: [],
    filterList: []
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
    let _this = this
    wx.getStorage({
      key: 'orderList',
      success (res) {
        _this.setData({
          orderList: res.data,
          filterList: res.data
        })
      }
    })
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

  onSearch (event) {
    let _this = this
    let addContent = []
    wx.getStorage({
      key: 'orderList',
      success (res) {
        res.data.filter(v => {
          if (v.dtitle.indexOf(event.detail) !== -1 && event.detail != '') {
            addContent.push(v)
            _this.setData({
              filterList: addContent
            })
          } else if (event.detail == '') {
            _this.setData({
              filterList: _this.data.orderList
            })
          }
        })
      }
    })
  }
})