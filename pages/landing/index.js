//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: "explore the small beauty of the world",
    currentUser: {},
    
  },
  //事件处理函数
  
  goToStories:function(){
    wx.switchTo({
      url: '/pages/profile/index'
    })
  },

  onLoad: function () {
    
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
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
