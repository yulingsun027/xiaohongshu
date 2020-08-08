// pages/profile/index.js
const app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    currentUser:{},
    story:[],
    tabName:''
  },
  /**
   * Lifecycle function--Called when page load
   */
  viewTab: function(e){
    let name = e.currentTarget.dataset.name;
    this.setData({
      tabName: name
    })
  },

  userInfoHandler: function(data){
    wx.BaaS.auth.loginWithWechat(data).then(user =>{
      app.globalData.userInfo = user;
      wx.setStorageSync('userInfo', user);
      this.setData({
        currentUser: user
      })
    });
  },

  

  onLoad: function (options) {
    this.setData({
      currentUser: app.globalData.userInfo,
    });
    let tableName = "redStory";
    // let storyID = options.id;
    let Story = new wx.BaaS.TableObject(tableName);
    Story.find().then((res) =>{
      console.log('res', res);
      this.setData({
        story: res.data.objects
      })
    });
    let query = new wx.BaaS.Query();
    let user = app.globalData.userInfo;
    console.log('user',user);
    query.compare('userName','=', user.nickname);
    
    Story.setQuery(query).find().then((res) =>{
      console.log('comment detail', res);
      this.setData({story: res.data.objects})
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
    
    this.setData({
      currentUser: app.globalData.userInfo,
    });

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