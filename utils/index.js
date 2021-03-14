const baseUrl = 'http://cmsjapi.ffquan.cn/api'
const baseUrlTwo = 'https://www.fastmock.site/mock/03ee9c5f158c41db1aef1b42ea596c6f/api'

export function request (options) {
  const { url, data, method } = options;
  wx.showLoading({
    title: '加载中',
  })
  // 核心点 异步 A方法请求，B方法调用
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data: data || {},
      method: method || 'GET',
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  })
}

export function requestMock (options) {
  const { url, data, method } = options;
  wx.showLoading({
    title: '加载中',
  })
  // 核心点 异步 A方法请求，B方法调用
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrlTwo + url,
      data: data || {},
      method: method || 'GET',
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  })
}