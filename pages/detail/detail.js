import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    pic: '',
    quan: '',
    yuanjia: '',
    jiage: '',
    platform: '',
    xiaoliang: '',
    dtitle: '',
    dsrScore: '',
    shipScore: '',
    serviceScore: '',
    shopLogo: '',
    shopName: '',
    recommendList: [{
      "id": 32018558,
      "goodsId": "593883702546",
      "title": "心相印品诺黑白系列140克27粒装四层卷纸（黑色）卷筒纸厕纸箱装",
      "dtitle": "心相印  品诺黑白系列4层卷纸*27卷",
      "yuanjia": 64.90,
      "tmall": 1,
      "xiaoliang": 914,
      "yongjin": 15.00,
      "quanJine": 15.00,
      "jiage": 49.90,
      "quanId": "eacb1f8d8c6e4781b0cd012256d6fc05",
      "huodongType": 1,
      "pic": "https://img.alicdn.com/bao/uploaded/O1CN01EWKXcH1LKHUO02M3Q_!!2-item_pic.png",
      "hzQuanOver": 0,
      "startTime": "2021-02-05 00:00:00",
      "video": 0,
      "salesNum": 80,
      "reachPrice": 0,
      "market_group": [null],
      "beforeTitleLables": [{
        "img": "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01o1MI292JJhz37UySP_!!2053469401.png",
        "width": 48,
        "height": 26
      }]
    }, {
      "id": 32044599,
      "goodsId": "630062162321",
      "title": "医用外科口罩一次性男女三层防尘医疗防飞沫透气口罩医科外用1",
      "dtitle": "【200只22.9元】高品质医用外科口罩",
      "yuanjia": 52.90,
      "tmall": 1,
      "xiaoliang": 209567,
      "yongjin": 30.04,
      "quanJine": 30.00,
      "jiage": 22.90,
      "quanId": "709802c20fd54e3188f42f70ac889a2c",
      "huodongType": 1,
      "pic": "https://img.alicdn.com/imgextra/i1/2278533591/O1CN01WHxrFv1cOiteKw1Ti_!!2278533591.jpg",
      "hzQuanOver": 0,
      "startTime": "2021-02-08 15:19:35",
      "video": 0,
      "salesNum": 96,
      "handsel": 0,
      "reachPrice": 0,
      "market_group": [null],
      "beforeTitleLables": [{
        "img": "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01o1MI292JJhz37UySP_!!2053469401.png",
        "width": 48,
        "height": 26
      }]
    }, {
      "id": 32052586,
      "goodsId": "559166424477",
      "title": "冠能成猫室内猫粮7kg全价营养增肥发腮英短美短专用主粮非10kg",
      "dtitle": "【金多乐】冠能全价成猫猫粮7kg",
      "yuanjia": 388.00,
      "tmall": 1,
      "xiaoliang": 994,
      "yongjin": 20.00,
      "quanJine": 110.00,
      "jiage": 278.00,
      "quanId": "3db1ff338dca48109befa8fa8ed6f1cc",
      "huodongType": 1,
      "pic": "//img.alicdn.com/imgextra/i2/498177478/O1CN0152Q6S8256yLGGLDPr_!!498177478.jpg",
      "hzQuanOver": 0,
      "startTime": "2021-02-18 10:03:07",
      "video": 0,
      "salesNum": 101,
      "reachPrice": 0,
      "marketId": 70,
      "market_group": [70],
      "beforeTitleLables": [{
        "img": "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01o1MI292JJhz37UySP_!!2053469401.png",
        "width": 48,
        "height": 26
      }]
    }, {
      "id": 32054464,
      "goodsId": "551955578320",
      "title": "家用浴巾男女网红成人毛巾比全棉纯棉吸水不掉毛儿童速干裹巾大号",
      "dtitle": "【终身包退换】只要7.9日系刺绣大浴巾",
      "yuanjia": 27.90,
      "tmall": 0,
      "xiaoliang": 18891,
      "yongjin": 40.15,
      "quanJine": 20.00,
      "jiage": 7.90,
      "quanId": "f1194eda19564693a8ee48dc0760bd0f",
      "huodongType": 1,
      "pic": "https://img.alicdn.com/imgextra/i3/826963318/O1CN01SxN9Br1aNgmJCYPNg_!!826963318.jpg",
      "hzQuanOver": 0,
      "startTime": "2021-02-19 00:00:00",
      "video": 0,
      "salesNum": 94,
      "reachPrice": 0,
      "market_group": [null],
      "beforeTitleLables": [{
        "img": "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01o1MI292JJhz37UySP_!!2053469401.png",
        "width": 48,
        "height": 26
      }]
    }, {
      "id": 31962325,
      "goodsId": "617849021779",
      "title": "摩雅洗衣机水龙头全铜4分加长一进二出单冷拖把池双家用304不锈钢",
      "dtitle": "4分通用洗衣机不锈钢水龙头",
      "yuanjia": 5.80,
      "tmall": 1,
      "xiaoliang": 5575,
      "yongjin": 30.01,
      "quanJine": 1.00,
      "jiage": 4.80,
      "quanId": "2af9016b3ace421cbfc10185decc01f7",
      "huodongType": 1,
      "pic": "https://img.alicdn.com/imgextra/i4/711869536/O1CN01YSddgv2KJXWXVc2Df_!!711869536.jpg",
      "hzQuanOver": 0,
      "startTime": "2021-02-01 14:20:31",
      "video": 0,
      "salesNum": 101,
      "reachPrice": 0,
      "marketId": 70,
      "market_group": [70],
      "beforeTitleLables": [{
        "img": "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01o1MI292JJhz37UySP_!!2053469401.png",
        "width": 48,
        "height": 26
      }]
    }, {
      "id": 32008783,
      "goodsId": "631015691347",
      "title": "好巴食40包低脂魔芋爽素毛肚辣条小包装零食小吃网红休闲食品整箱",
      "dtitle": "【好巴食】素毛肚低脂魔芋爽30包",
      "yuanjia": 24.90,
      "tmall": 1,
      "xiaoliang": 3214,
      "yongjin": 30.00,
      "quanJine": 5.00,
      "jiage": 19.90,
      "quanId": "ef39c400b9d94ea299ad578b33fb33f5",
      "huodongType": 1,
      "pic": "https://img.alicdn.com/imgextra/i4/752144829/O1CN014Un0jg1lXjG7j1nJu_!!752144829.jpg",
      "hzQuanOver": 0,
      "startTime": "2021-02-04 00:00:00",
      "video": 0,
      "salesNum": 99,
      "reachPrice": 0,
      "marketId": 70,
      "market_group": [70],
      "beforeTitleLables": [{
        "img": "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01o1MI292JJhz37UySP_!!2053469401.png",
        "width": 48,
        "height": 26
      }]
    }, {
      "id": 32010878,
      "goodsId": "615172241852",
      "title": "SUPOR/苏泊尔 C21-IJ59E正品电磁炉家用大功率爆炒多功能电池炉",
      "dtitle": "正品电磁炉家用大功率爆炒多功能",
      "yuanjia": 296.00,
      "tmall": 0,
      "xiaoliang": 1029,
      "yongjin": 21.00,
      "quanJine": 100.00,
      "jiage": 196.00,
      "quanId": "ab95dfa8957247c8b242dd1f387496df",
      "huodongType": 1,
      "pic": "https://gd3.alicdn.com/imgextra/i1/2920352161/O1CN014sPqFB1RpmUY7O4Bz_!!2920352161.jpg",
      "hzQuanOver": 0,
      "startTime": "2021-02-03 21:44:13",
      "video": 0,
      "salesNum": 999,
      "handsel": 0,
      "reachPrice": 0,
      "market_group": [null],
      "beforeTitleLables": [{
        "img": "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01o1MI292JJhz37UySP_!!2053469401.png",
        "width": 48,
        "height": 26
      }]
    }, {
      "id": 32020641,
      "goodsId": "572786078500",
      "title": "爆款麻薯糯米糍网红大福雪媚娘甜品干吃汤圆年货零食小吃休闲食品",
      "dtitle": "历史底价双馅爆浆麻薯",
      "yuanjia": 19.80,
      "tmall": 1,
      "xiaoliang": 13508,
      "yongjin": 20.02,
      "quanJine": 2.00,
      "jiage": 17.80,
      "quanId": "9d567563b06b484194a8c72fe3360f3b",
      "huodongType": 1,
      "pic": "https://img.alicdn.com/i4/2825967342/O1CN01tn1L78246gS0IaNGW_!!2825967342.jpg",
      "hzQuanOver": 0,
      "startTime": "2021-02-04 16:34:05",
      "video": 0,
      "salesNum": 103,
      "reachPrice": 0,
      "market_group": [null],
      "beforeTitleLables": [{
        "img": "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01o1MI292JJhz37UySP_!!2053469401.png",
        "width": 48,
        "height": 26
      }]
    }],
    showGoTop: false,
    showShare: false,
    options: [
      { name: '微信', icon: 'wechat', openType: 'share' },
      { name: '微博', icon: 'weibo' },
      { name: '复制链接', icon: 'link' },
      { name: '分享海报', icon: 'poster' },
      { name: '二维码', icon: 'qrcode' },
    ],
    goodsInfo: [
      { text: '全部商品', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 },
    ],
    dropValue: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {id,pic,quan,yuanjia,jiage,platform,xiaoliang,dtitle,dsrScore,shipScore,serviceScore,shopLogo,shopName} = options
    this.setData({
      id,
      pic,
      quan,
      yuanjia,
      jiage,
      platform,
      xiaoliang,
      dtitle,
      dsrScore,
      shipScore,
      serviceScore,
      shopLogo,
      shopName
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
  onPageScroll(res){
    if(res.scrollTop >= 700){
      this.setData({
        showGoTop: true
      })
    }else{
      this.setData({
        showGoTop: false
      })
    }
  },


  shareClick(event) {
    this.setData({ showShare: true });
  },

  shareClose() {
    this.setData({ showShare: false });
  },

  shareSelect(event) {
    Toast(event.detail.name);``
    this.shareClose();
  },

  collectClick(i){
    console.log(11111);
    wx.setStorageSync('id', i)
  }
})