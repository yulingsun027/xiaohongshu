// pages/profile/cart.js
Page({

  /**
   * Page initial data
   */
  data: {
    products:[]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
  
    let tableName = "redOrder";
  
    let Order = new wx.BaaS.TableObject(tableName);
    Order.find().expand(['product_id']).then((res) =>{
      console.log('res1', res);
      this.setData({
        orders: res.data.objects
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