// pages/calculator/calculator.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        year_rate:'',
        condition:false,
        

    },

// 计算处理函数
   formSubmit1:function(e){
       var a =Number(e.detail.value.input)//强制转为数值
       var b =0
       
       b=(a+1)**12

       this.setData({
            year_rate:b.toFixed(2),
            condition:1
        })
   },

   
// 重置函数
   formReset1:function(){ console.log(11);
       this.setData({
            year_rate:'0',
       })
   },
    

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