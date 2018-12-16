//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/logo2.png',
      '/images/logo1.png'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList: 
        [{
            'logo': '/images/pro_01.jpg',
            'title': '小巧玲珑',
            'desc': '小巧玲珑小巧玲珑'
          }, 
          {
            'logo': '/images/pro_01.jpg',
            'title': '小巧玲珑',
            'desc': '小巧玲珑book store\n完美无瑕'
          }],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.setData({
      test: '01',
    })
    this.getProList();
  },
  toDetail: function(e){
    console.log(e);
    var index = e.currentTarget.dataset.index;
    console.log(index)
    var proList = this.data.proList;
    var title = proList[index].title;
    wx.setStorageSync('title', title);
    wx.navigateTo({
      url: '/pages/detail/detail?title='+title,
    })
  },
  getProList: function(){
    var self = this;
    wx.request({
      // url: 'http://127.0.0.1/wechat.php',
      url: app.globalData.host,
      method: 'GET',
      success: function(res){
        console.log(res)
        self.setData({
          proList: res.data,
          // proList: [{
          //   'logo': '/images/pro_01.jpg',
          //   'title': '小巧玲珑',
          //   'desc': '小巧玲珑小巧玲珑'
          // }, 
          // {
          //   'logo': '/images/pro_01.jpg',
          //   'title': '小巧玲珑',
          //   'desc': '小巧玲珑book store\n完美无瑕'
          // }],
        })
      },
      fail: function(){

      }
    })
  },
  copy: function(){
    wx.setClipboardData({
      data: '这是练习复制内容',
      success: function(res){
        wx.showModal({
          title: '复制成功',
          content: '内容已经复制',
        })
      }
    })
  }
})
