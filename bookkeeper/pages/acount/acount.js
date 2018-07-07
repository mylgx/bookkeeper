// pages/aount/acount.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
  daily:'日期',
  check:'查找',
  income:'收入',
  expend:'支出'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  console.log("执行"),
  this.onReady()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
     wx.showLoading({
        title: '加载中',
     })

     setTimeout(function () {
        wx.hideLoading()
     }, 2000)

  },
  goToDetail:function(){
     wx.navigateTo({
        url: '../detail/detail'
     })
  },
  goToAdd:function(){
     wx.navigateTo({
        url: '../date/date'
     })
  }
})