// pages/guess/guess.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     list:[
       { 'typeName':'搞笑谜语','typeId':'gxmy','img':'../../images/gaoxiao.png'},
       { 'typeName': '字谜', 'typeId': 'zmmy', 'img': '../../images/zi.png'},
       { 'typeName': '成语谜语', 'typeId': 'cymy', 'img': '../../images/chengyu.png' },
       { 'typeName': '动物谜语', 'typeId': 'dwmy', 'img': '../../images/animation.png'},
       { 'typeName': '爱情谜语', 'typeId': 'aqmy', 'img': '../../images/love.png' },
       { 'typeName': '灯谜谜语', 'typeId': 'dmmy', 'img': '../../images/light.png' },
       { 'typeName': '人名谜语', 'typeId': 'rmmy', 'img': '../../images/user.png' },
       { 'typeName': '地名谜语', 'typeId': 'dimmy', 'img': '../../images/address.png' },
       { 'typeName': '词语谜语', 'typeId': 'cy', 'img': '../../images/ciyu.png' },
       { 'typeName': '带格谜语', 'typeId': 'dgmy', 'img': '../../images/ertong3.png' }, 
       { 'typeName': '用语谜语', 'typeId': 'ry', 'img': '../../images/child.png'  },
       { 'typeName': '儿童谜语', 'typeId': 'etmy', 'img': '../../images/ertong4.png'  },
       { 'typeName': '物品谜语', 'typeId': 'wpmy', 'img': '../../images/wupin.png'  },
       { 'typeName': '植物谜语', 'typeId': 'zwmy', 'img': '../../images/zhiwu.png' },
       { 'typeName': '名迷谜语', 'typeId': 'jmmy', 'img': '../../images/mingmi.png' },
       { 'typeName': '书报谜语', 'typeId': 'sbmy', 'img': '../../images/shubao2.png'  },
       { 'typeName': '俗语谜语', 'typeId': 'symy', 'img': '../../images/shubao.png' },
       { 'typeName': '药品谜语', 'typeId': 'ypmy', 'img': '../../images/yaopin.png'  },
       { 'typeName': '音乐谜语', 'typeId': 'yymy', 'img': '../../images/yinyue.png' },
       { 'typeName': '影视谜语', 'typeId': 'ysmy', 'img': '../../images/yingshi.png'  },
       { 'typeName': '称谓谜语', 'typeId': 'cwmy', 'img': '../../images/chengwei.png'  },
       { 'typeName': '趣味谜语', 'typeId': 'qtmy', 'img': '../../images/quwei3.png' },
       { 'typeName': '谜语精选', 'typeId': 'muyujingxuan', 'img': '../../images/midi.png' },
       { 'typeName': '脑筋急转弯', 'typeId': 'njmy', 'img': '../../images/naojin.png'  },
       { 'typeName': '智力问答', 'typeId': 'zlmy', 'img': '../../images/zhili.png'  }
     ],
     search:'',
  },
  // 获取id，跳转页面
  dianji(e){
    console.log(e)
    wx.navigateTo({
      url: '../details/details?id='+e.currentTarget.dataset.id
    })
  },
  // 获取搜索框的值
  // search(e){
  //   this.setData({
  //     search: e.detail.value
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
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