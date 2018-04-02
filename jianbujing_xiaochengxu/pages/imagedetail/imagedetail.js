// pages/imagedetail/imagedetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openId:null,
    key:null,
    imageURL:null,
    widthheight:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ openId: options.openid});
    this.setData({ key: options.key });
    this.setData({ imageURL: options.imageurl });
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
  
  },
  //调整图片大小
  imageLoad: function (e) {
    var width = e.detail.width,    //获取图片真实宽度
      height = e.detail.height,
      ratio = width / height;    //图片的真实宽高比例
    var viewWidth = 750,           //设置图片显示宽度，左右留有16rpx边距
      viewHeight = 750 / ratio;    //计算的高度值
    var widthheight = this.data.widthheight;
    //将图片的datadata-index作为image对象的key,然后存储图片的宽高值
    widthheight.width = viewWidth;
    widthheight.height = viewHeight;
    this.setData({
      widthheight: widthheight
    })
  }
})