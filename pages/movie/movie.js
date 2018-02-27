const app = getApp();

const API_URL = 'https://api.douban.com/v2/movie/subject/';
// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    loading: true,
    movie: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (params) {
    console.log(params.id);
    app.fetchApi(API_URL + params.id, (err, data) => {
     
      this.setData({title: data.title, movie: data, loading:false})
      wx.setNavigationBarTitle({
        title: this.data.title + ' « 电影 « 豆瓣'
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    wx.setNavigationBarTitle({
      title: this.data.title + ' « 电影 « 豆瓣'
    })
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
  
  }
})