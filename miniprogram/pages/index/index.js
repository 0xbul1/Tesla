// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    list: [
      {id: 1, title: 'Model S', specs: [{title: '2,100+', subtitle: '升存储空间'},{title: '2,100+', subtitle: '升存储空间'},{title: '2,100+', subtitle: '升存储空间'}], imageUrl: 'https://tesla-cdn.thron.cn/delivery/public/image/tesla/fdd414b6-2519-457d-8489-94503a783f2d/bvlatuR/std/800x1700/MS-Hero-Mobile'},
      {id: 2, title: 'Model Y', specs: [{title: '2,100+', subtitle: '升存储空间'},{title: '2,100+', subtitle: '升存储空间'},{title: '2,100+', subtitle: '升存储空间'}], imageUrl: 'https://tesla-cdn.thron.cn/delivery/public/image/tesla/fdd414b6-2519-457d-8489-94503a783f2d/bvlatuR/std/800x1700/MS-Hero-Mobile'},
      {id: 3, title: 'Model 3', specs: [{title: '2,100+', subtitle: '升存储空间'},{title: '2,100+', subtitle: '升存储空间'},{title: '2,100+', subtitle: '升存储空间'}], imageUrl: 'https://tesla-cdn.thron.cn/delivery/public/image/tesla/fdd414b6-2519-457d-8489-94503a783f2d/bvlatuR/std/800x1700/MS-Hero-Mobile'},
      {id: 3, title: 'Model 3', specs: [{title: '2,100+', subtitle: '升存储空间'},{title: '2,100+', subtitle: '升存储空间'},{title: '2,100+', subtitle: '升存储空间'}], imageUrl: 'https://tesla-cdn.thron.cn/delivery/public/image/tesla/fdd414b6-2519-457d-8489-94503a783f2d/bvlatuR/std/800x1700/MS-Hero-Mobile'}
    ],
    swiperList: [],
  },
  onSwiperChange(e) {
    const { current } = e.detail
    this.setData({
        current
    })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.db = wx.cloud.database();
    this._loadSwiper();
  },
  _loadSwiper() {
    this.db.collection('swiper').get().then(res => {
      res.data.forEach(item => {
        item.config.forEach((item2, index2) => {
          const splitItem = item2.split('|');
          item.config[index2] = {title: splitItem[0], subtitle: splitItem[1]}
        })
      })
      // res.data.forEach((item, index) => {
      //   item.config.forEach((item2, index2) => {
      //     const splitItem = item2.split('|');
      //     item.config[index2] = {title: splitItem[0], subtitle: splitItem[1]}
      //   })
      //   res.data[index] = item;
      // })
      this.setData({
        swiperList: res.data
      })
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

  }
})