Page({
  data: {
    year_rate1:'',
    condition:false,

},

switch1Change:function(e){
    this.setData({
        condition:e.detail.value,
        year_rate1:'',

    })
},

// 计算处理函数
formSubmit1:function(e){
   var a =Number(e.detail.value.input2)//强制转为数值
   var b =Number(e.detail.value.input1)//强制转为数值
   var c = 0
   var d =Number(e.detail.value.input3)
   var r =Number(e.detail.value.rule)
   function fmonth(num){
       if(num<1) return 0
       if(num==1){
           return a*(1-b)*(1+d)
       }
       else{
           return (fmonth(num-1)+a*(1-b))*(1+d)
       }

   }

   function fyear(num){
       if(num<1) return 0;
       if(num==1){
           return a*(1+d)
       }
       else{
        return (fyear(num-1)+a)*(1+d)
    }
   }
   
   if(this.condition==true)
   {
    if(r==0){
        c=fmonth(12);
    }
    else if(r==1){
        c=fyear(12)-a*12*b
    }
    else{
        wx.showToast({
            title: '输入有误',
            icon: 'input erro',
            // duration: 2000
          })
    }
   }
   else{
       c=fyear(12)
   }
   

   this.setData({
       year_rate1:c.toFixed(2),
    })
},
// 重置函数
formReset1:function(){
   this.setData({
       year_rate1:'',
       condition:false,
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