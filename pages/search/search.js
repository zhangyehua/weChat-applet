const app = getApp();

const API_URL = 'https://api.douban.com/v2/movie/search'

Page({
  data: {
    title: '请输入搜索内容',
    movies: [],
    loading: false
  },
  search (e) {
    if(!e.detail.value) {return}
    // 设置或改变data中的值
    this.setData({title: '加载中...', loading: true})
    app.fetchApi(API_URL+'?q=' +e.detail.value,(err,data) => {
      this.setData({ title: data.title, movies: data.subjects, loading: false })
    })
  }
}) 