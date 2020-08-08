// pages/story/post.js
let app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    currentUser:{},
    title:"",
    description:"",
    imgURL:[]
  },

  /**
   * Lifecycle function--Called when page load
   */
  
  selectImg: function (){
    const page = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        let tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        page.setData({
          imgURL: tempFilePaths
        })
      }
    })
  },
  previewMyImage: function(e) {
    let url = e.currentTarget.dataset.url;
    wx.previewImage({
      current: url,  // number of index or file path
      urls: [url]  // Array of temp files
    })
  },
  bindTitleInput: function(e){
    this.setData({
      title: e.detail.value
    })
  }, 

  bindDesInput: function(e){
    this.setData({
      description: e.detail.value
    })
  }, 

  formSubmit: function (event){
    console.log('create a story', event);
    let Story = new wx.BaaS.TableObject('redStory');
    let myStory = Story.create();
    console.log(this.data);
    let data = {
        // review's content and rating
        userName: this.data.currentUser.nickname,
        userAvatar: this.data.currentUser.avatar,
        title: this.data.title,
        description:this.data.description,
        storyImg: this.data.imgURL[0],
    };

    myStory.set(data).save().then(res => {
      console.log('save story', res);
      wx.switchTab({
        url: '/pages/story/index',
      })                                          
    })
  },

  onLoad: function (options) {

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