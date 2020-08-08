// pages/product/detail.js
Page({

  /**
   * Page initial data
   */
  data: {
    product:{}
  },

  /**
   * Lifecycle function--Called when page load
   */

  onLoad: function (options) {
    console.log("this is a product page",options)
    let tableName1 = 'redProduct';
    let productID = options.id;
    let Product = new wx.BaaS.TableObject(tableName1);
    Product.get(productID).then((res)=>{
      console.log('res detail', res);
      this.setData({product: res.data});
    });
  },

  addtoCart: function (e){
    console.log(e);
    let productID = e.currentTarget.id;
    productID = this.data.product.id;
    console.log('productid',productID);
    let Order = new wx.BaaS.TableObject('redOrder')
    let order = Order.create()
    let data = {
      product_id: productID,
    }
    order.set(data).save().then((res)=>{
      wx.showToast({
        title: 'order added!checkout in profile page!',
        icon:'success',
        duration:2000,
        mask: true
      })
    })
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