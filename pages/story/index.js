// pages/story/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    story:[]
  },

  /**
   * Lifecycle function--Called when page load
   */
  toDetail: function(e){
    console.log('select story',e);
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/story/detail?id=${id}`,
    })
  },

  onLoad: function (options) {
    let tableName = "redStory";
    let Story = new wx.BaaS.TableObject(tableName);
    Story.find().then((res) =>{
      console.log('res', res);
      this.setData({
        story: res.data.objects
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