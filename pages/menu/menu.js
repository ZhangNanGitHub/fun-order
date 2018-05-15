// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [{
      id: 3,
      img: 'http://www.kfc.com.cn/kfccda/UploadPic/HomePage/201704/20170424014405_11.jpg',
      name: '百亿巨惠任你抢'
    },
    {
      id: 1,
      img: 'http://www.kfc.com.cn/kfccda/UploadPic/HomePage/201704/20170424014651_46.jpg',
      name: '告别午高峰'
    },
    {
      id: 2,
      img: 'http://www.kfc.com.cn/kfccda/UploadPic/HomePage/201703/20170320121212_90.jpg',
      name: '金牌好店'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.showToast({
      title: '加载中。。。',
      icon: 'loading',
      duration:0,
      mask:true
    })
    // 发送请求
    wx.request({
      url: 'http://easy-mock.com/mock/5905d4597a878d73716e2c6b/kfc/kfc',
      method:'GET',
      data:{},
      header:{
        'Accept': 'application/json'
      },
      success:function(res){
        console.log(res.data),
        that.setData({
          imgArray: res.data.navArray,
          foodArray: res.data.foodArray
        })
      }, function(){
        wx.hideToast();
      }
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