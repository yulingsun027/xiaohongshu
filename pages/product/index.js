// pages/product/index.js
Page({

  /**
   * Page initial data
   */
  data: {

    products:[],
      indicatorDots:true,
      autoplay:true,
      interval:5000,
      duration:1000,
      imgUrls:[
        "/pages/images/saul.jpg",
        "/pages/images/chris.jpg",
        "/pages/images/alliance.jpg",
      ]

  },

  toProductDetail: function(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/product/detail?id=${id}`,
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let tableName = "redProduct";
    let Product = new wx.BaaS.TableObject(tableName);
    Product.find().then((res) =>{
      console.log('res', res);
      this.setData({
        products: res.data.objects
      })
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})