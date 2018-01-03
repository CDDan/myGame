// pages/details/details.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    answer:'',//input框的值
    number2:0,
    text:'',
    isShow:false,
    isShows: true,
    isShow1:true,
    isShow2:true,
    isShow3: true,
  },
  // 获取用户输入的值
  answer2(e){
    this.setData({
      answer: e.detail.value
    })
  },
// 提交
  submit(e){
    if (this.data.number2 <19){
      var answer3 = this.data.answer
      if (answer3 == this.data.urlBox[this.data.number2].answer.replace('谜底：', '')) {
        this.setData(
          { 'number2': this.data.number2+1,
             isShow1: false,
            isShow: false,
            isShows: true
          })
        setTimeout(
          () => {
            this.setData({
              isShow1: true,
            })
          }, 1000
        )
        console.log("恭喜你答对了")
      } else {
        this.setData({
          isShow2: false,
        })
        setTimeout(
         ()=>{
           this.setData({
             isShow2: true,
           })
         }, 1000)
        console.log("答错了")
      }
      this.setData({
        answer: ''  //将data的inputValue清空

      });
    }else{
      this.setData({
        'number2': 19,
        isShow3:false,
      })
      setTimeout(
        () => {
          this.setData({
            isShow3: true,
          })
        }, 1000)
      console.log("最后一张")
    }
  },

  skip(e){
    // 跳过
    if (this.data.number2<19) {
      console.log(this.data.number2)
      this.setData({
         'number2': this.data.number2+1,
         isShow: false,
         isShows: true
        })
      // console.log(this.data.urlBox.length)
    }else{
     this.setData({
       'number2': 19,
       isShow3: false,
     })
     setTimeout(
       () => {
         this.setData({
           isShow3: true,
         })
       }, 1000)
    //  console.log(this.data.number2,'asdasdad')
    //  console.log("最后一张")
    }
  },

  // 点击查看谜底
  biaoda(e){
    var biaoda2 = this.data.urlBox[this.data.number2].answer.replace('谜底：', '')
    this.setData({
      text:biaoda2,
      isShow:true,
      isShows:false
    })
    console.log(biaoda2)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var that = this;
    wx.request({
      url: 'https://route.showapi.com/151-4',
      data: {
        'page': '1',
        'showapi_appid': '53090',
        'showapi_test_draft': 'false',
        'typeId': options.id,
        'showapi_sign': 'ebaab37c258c445983ec2419cc5ffc2c'
      },
      success: function (res) {
        var listBOX=res.data.showapi_res_body.pb.contentlist;
        // console.log(listBOX)
        that.setData({
          urlBox: listBOX
        })
      },
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