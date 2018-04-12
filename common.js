/**
 * cors=Cross-Origin Resource Sharing (CORS).
 * ie8请求ajax必须设的狗屎玩意
 */
jQuery.support.cors = true;//允许ie9以下跨域
var URI = 'http://lpn.ngrok.bszzh.top';//旧测试环境 
// var URI = 'http://api.micros.dameinet.com';//正式环境
//  var URI = 'http://192.168.199.194:8080';//郭少豪 服务器地址  
// var URI = 'http://192.168.2.9:8090';//钟灼海 服务器地址 
var FIXED_STR = '[damei304@]304@damei';//加密密码固定字符串
// var RONGIMAPPKEY = 'pwe86ga5phss6';//融云appkey 测试
var RONGIMAPPKEY = '4z3hlwrv4b2ht';//融云appkey 正式
var RONGIMKFID = 'KEFU150943588334091';//融云客服id
var WXLoginRedirectUri = 'http://www.dameinet.com';//微信登录回调地址
var api = {
  'indexScrollImg': '/home/advertise.do', //首页轮播图
  'indexSpecial': '/home/cover.do',//首页专题
  'indexCertalent': '/home/certalent.do',//首页达人推荐
  'indexCertalent2':'/home/talents.do',//首页达人
  'indexSkuMater': '/material/more/skumaterclz.do',//首页市集
  'workList': '/production/productionbydate.do',//作品列表
  'productioncategoryDetail': '/production/productioncategory.do',//作品分类
  'certalentList': '/home/certalentlist.do',// PC端达人列表
  'subjectList': '/home/more.do',//首页更多专题
  'marketList': '/material/more/skumaterclz.do',//市集
  'workDetail': '/production/productiondetails.do',//作品详情页（作品页面）
  'userMessage': '/user/usermessage.do',//用户信息 获取粉丝和关注
  'getWorkComment': '/production/productioncomments.do',//作品评论（获取）
  'getSkuMsg': '/material/goodssku.do',//根据商品（作品、镜框、材料）id查询寄售
  'getNoteList': '/my/squad.do',// 用户界面 我的帖子
  'getUserWorkList': '/my/myproduction.do',//用户界面 我的作品
  'getSelectMetairList': '/my/selectbymy.do',//用户界面 我的(他的)材料查询
  'getUserGlassList': '/my/selectclassic.do',// 用户界面 查询我的（他的）镜框
  'getFocusList': '/attention/myfocus.do',//我的关注
  'getFansList': '/fans/myfans.do',//我的粉丝
  'getLastNote': '/search/newtopic.do',//社区页面的 最新帖子
  'getHoteNote': '/home/hotgroupc.do',//社区页面的 热门帖子
  'loginByCode': '/login/logincode.do',//登录验证码
  'getCode': '/login/valicode.do',//获取验证码
  'registerUser': '/register/registeruser.do',//注册用户
  'loginByPwd': '/login/loginpwd.do',// 密码登录
  'getUserMsgByToken': '/user/querybytoken.do',//根据token获取用户信息  
  'logout': '/logout/logoutbis.do',//退出登录
  'followOfterUser': '/attention/focus.do',//关注别的用户
  'commentWorks': '/production/addcomments.do',//作品评论（输入接口）
  'commendWorks': '/production/addcommend.do',//作品点赞
  'collectionWorks': '/production/enshrine.do',// 作品收藏
  'addShopCar': '/material/insertcartornot.do',//加入购物车
  'getMyCollect': '/my/mycollect.do',//我的收藏 0作品／1试镜／2帖子）
  'isFocus': '/attention/focusornot.do',//显示关注、已关注和互相关注
  'searchByKeyword': '/search/searchbykey.do',//关键字搜索
  'getAllGroup': '/release/allteam.do',//全部小组分类
  'materialDetail': '/material/selectdetailByid.do',//材料铺子详情
  'zanMaterial': '/material/adddetailadlike.do',// 材料点赞
  'materialComment': '/material/selectshopcomments.do',//材料详情评论
  'addMaterialComment': '/material/addshopcomments.do',// 材料详情添加评论
  'glassesDetail': '/material/glassesdetai.do',//经典眼镜详情
  'getGlassComment': '/material/selectglassescomments.do',// 经典眼镜评论查询
  'addGlassComment': '/material/addglassescomments.do',//添加经典眼镜详情评论
  'zanGlass': '/material/addglassesdetailadlike.do',// 经典眼镜点赞
  'proDetail': '/home/prodetail.do',//专题详情页
  'pcAddIntelligent': '/pc/addintelligent.do',//
  'glassStyle': '/material/glassesscreen.do',//镜框风格和材质
  'materialStyle': '/material/querymaterial.do',//材料分类字段
  'uploadPicture': '/release/uploadpicture.do',//图片上传
  'buyAllOrder':'/my/allorders.do',//购买订单全部
  'buyOfterOrder':'/my/selectiveorders.do',//购买订单-待支付、待发货、已完成 0待支付／2待收货／3已完成
  'myExitOrders':'/my/deleteorders.do',//取消订单
  'myDeleteOrders':'/my/delorder.do',//删除订单 type 0为买家删除，1为卖家删除
  'myConfirmReceive':'/my/confirmreceive.do',//
  'refundGoods':'/my/applyback.do',//用户申请退货
  'refundMoney':'/my/applybackmoney.do',//用户申请退款
  'revocationBackSale':'/my/revocationbacksale.do',//用户撤销退货
  'revocationbackMoney':'/my/revocationbackmoney.do',//用户撤销退款
  'queryLogistics':'/express/querylogistics.do',//查看物流
  'myContactSelord':'/my/contactselord.do',//售卖订单全部
  'myOrderDetail':'/my/orderdetail.do',//订单详情
  'delMyAddress':'/my/deleteadress.do',// 删除地址
  'confirmOrder':'/my/produceorder.do',//确认生成订单
  'wechatPayOrder':'/wechat/pcweixinpay.do',//微信pc端扫码支付
  'alipayPayOrder':'/alipay/pcalipay.do',//支付宝pc端支付
  'wechatLogin':'/wechat/wechatlogin.do',//第三方微信登录
  'wechatBindPhone':'/wechat/bindphone.do',//第一次微信登录绑定手机和密码
  'confirmSend':'/my/cfirmsend.do',///确认发货
  'expressCompany':'/express/querycompany.do',//物流公司
  'messageNotice':'/message/select/notice.do',//消息通知
  'sysNoticeList':'/message/notice/list.do',//系统通知列表
  'orderNoticeList':'/message/notice/orders.do',//订单提醒列表
  'sysNoticeRemind':'/message/notice/remind.do',//系统提醒列表
  'deleteSystemRemind':'/message/system/remind/del.do',//删除系统提醒
  'deleteOrderRemind':'/message/order/remind/del.do',//删除订单提醒
  'getRongIMByMyToken':'/rongyun/my.do',//获取自己的token
  'getRongIMOfterId':'/rongyun/his.do',//获取对方的user_id
  'confirmContactGoods':'/my/contactconfirm.do',//商户确认退货
  'confirmContactMoney':'/my/contactconfirmmoney.do',//商户确认退款
  'refuseBackSale':'/my/refusebacksale.do',// 商户拒绝退货
  'refuseBackmMoney':'/my/refusebackmoney.do',//商户拒绝退款
  'videoDetail':'/team/introducedetail.do',//新手入门详情
  'confirmBackSale':'/my/confirmbacksale.do',//商户确认收货
  'messageCheckDetails':'/message/check/details.do',//查询系统提醒跳转的详情是否存在
  '':'',//
  '':'',//
  '':'',//
  '':'',//
  '':'',//
  '':'',//
  /** 以下是2.0接口 */
  'designDetail': '/home/collectparticulars.do',// 征集令详情
  'snapshotSelelist': '/home/snapshot/selelist.do',// 随手怕列表
  'indexTwoTreasure': '/home/seletehometreasure.do',//寻宝令首页两数据
  'indexTwoCollect': '/home/seletecollect.do',//设计征集令（两条数据）
  'courseList': '/team/newintroducelist.do',//新手入门 教程视频
  'underTakeList': '/home/tdesignlst/undertakelist.do',// 接令列表 
  'underTakeDetail': '/home/tdesignlst/undertakeparticulars.do',//接令详情
  'comment': '/comment/query/comments.do',//查询详情评论
  'treasureDetail': '/home/selesttreasurelist.do',//寻宝令详情查询
  'zanTreasure': '/home/treasurelikely.do',//寻宝令点赞收藏
  'thomeDesignLike': '/home/thomedesignlike.do',//征集令点赞收藏
  'zanDesignList': '/home/tdesignlst/like.do',//接令列表点赞收藏
  'thomeCollectpickup': '/home/tdesignlst/collectpickup.do',//设计征集令接令
  'userSnapshot': '/home/snapshot/mydata.do',//我的页面的 获取随手拍数据
  'deleteSnapshot': '/home/snapshot/delete.do',// 随手拍删除
  'getCollectSnapshot': '/home/snapshot/collect.do',//随手拍 我的收藏
  'delectMyProduction': '/my/delectproduction.do',// 删除我的作品
  'deleteMyMaterial': '/my/delectbymy.do',//删除材料
  'deleteMyGlassic': '/my/deleteclassic.do',//删除镜框
  'deleteMyCollect': '/my/deletemycollect.do',//我的收藏删除 0作品／1试镜／2帖子/3材料铺子/4经典眼镜/5创意眼镜/ 6寻宝令/7设计征集令/8眼镜事件／9随手拍／10寻宝令／11设计征集/12事件
  'snapshotLike': '/home/snapshot/like.do',//随手拍点赞收藏 type 0是点赞 1是收藏 cancel 1是取消
  'likeThumb': '/comment/like/thumb.do',//评论点赞和取消点赞
  'delComment': '/comment/del/comment.do',//删除评论
  'releaseComment': '/comment/release/comment.do',//发表评论
  'ieUpload': '/release/uploaddeal.do',//ie8图片上传接口
  'commonDeleteImg': '/release/deleteKey.do',// 删除图片
  'moreSecondComment': '/comment/query/second/comments.do',//查询更多二级评论
  'indexHeadline': '/home/staggerer/headline.do',//大事件
  'material': '/material/publish/material.do',//发布材料
  'product': '/production/publish/product.do',//发布可售作品
  'classes': '/material/publish/classes.do',//发布镜框
  'coursez': '/release/coursez.do',//发布教程
  'managerMyAddress': '/my/addadress.do',//添加与编辑 收货地址
  'getAllAddress': '/my/alladdress.do',//获取收货地址列表
  'updateUserMsg': '/user/updateusermsg.do',//编辑资料
  'changeBackground': '/user/update/background.do',//更换背景封面
  'changePwd': '/user/updatepwd.do',//修改密码
  'updateDefaultAddress': '/my/updatedefault.do',// 设为默认地址
  'readilyPaiDetail': '/home/snapshot/details.do',//随手拍详情
  'bigEventDetails': '/home/staggerer/details.do',//大事件详情
  'bigEventZan': '/home/staggerer/like.do',//大事件点赞收藏
  'blackListandList': '/blacklist/blacklistandlist.do',//黑名单id判断
  '': '',//
}



/**
 * 该方法是用于注入html
 * @param {String} link 是请求的html路径
 * @param {String} domSelect 是填充html的选择器
 */
function includeHtml(link, domSelect) {
  $.ajax({
    type: "get",
    url: link,
    dataType: "text",
    async: false,
    success: function (response) {
      $(domSelect).html(response);
    },
    error: function (xhr, status, error) {
      console.log(status);
      console.log(error);
    }
  });
}

/**
 * 该方法用于打开相应页面
 * @param {String} key 是sessionStorage的键名
 * @param {JSON} json 是传过去的数据
 */
function toPageWithSession(key, json) {
  if (sessionStorage.getItem(key)) {
    sessionStorage.removeItem(key);
  }
  var searchString = '';
  $.each(json, function (indexInArray, valueOfElement) { 
    searchString = searchString +'&'+ indexInArray + '=' + valueOfElement;
  });
  searchString = '?' + searchString.substr(1,searchString.length);
  sessionStorage.setItem(key, JSON.stringify(json));
  if (key.indexOf('workid') >= 0) {
    window.location.href = '../../html/detail/index.html' + searchString //作品详情
  } else if (key.indexOf('userid') >= 0) {
    window.location.href = '../../html/user/index.html' + searchString;//用户界面
  } else if (key.indexOf('follow') >= 0) {
    window.location.href = '../../html/follow/index.html' + searchString;//粉丝页面
  } else if (key.indexOf('search') >= 0) {
    window.location.href = '../../html/search/index.html' + searchString;//搜索页面
  } else if (key.indexOf('material') >= 0) {
    window.location.href = '../../html/detail/material.html' + searchString;//材料详情
  } else if (key.indexOf('glass') >= 0) {
    window.location.href = '../../html/detail/glass.html' + searchString;//镜框详情
  } else if (key.indexOf('subjectDetail') >= 0) {
    window.location.href = '../../html/detail/subject.html' + searchString;//专题详情
  } else if (key.indexOf('designList') >= 0) {
    window.location.href = '../../html/design/index.html' + searchString;//接令列表
  } else if (key.indexOf('design') >= 0) {
    window.location.href = '../../html/design/designDetail.html' + searchString ;//征集令详情
  } else if (key.indexOf('treasure') >= 0) {
    window.location.href = '../../html/treasure/index.html' + searchString//寻宝令详情
  } else if (key.indexOf('productionListId') >=0){
    window.location.href = '../../html/issue/issueSuccess.html' + searchString//发布成功
  }else if(key.indexOf('refund') >=0){
    window.location.href = '../../html/order/refund.html' + searchString;//退款页面
  }else if(key.indexOf('logisticsDefault') >=0){
    window.location.href = '../../html/detail/logistics.html' + searchString;//物流详情
  }else if(key.indexOf('orderDetail') >=0){
    window.location.href = '../../html/detail/order.html' + searchString;//订单详情
  }else if(key.indexOf('buyNow') >=0){
    window.location.href = '../../html/buy/index.html' + searchString;//购买列表
  }else if(key.indexOf('readilyPai') >=0){
    window.location.href = '../../html/detail/readilyPai.html' + searchString;//随手拍详情
  }else if(key.indexOf('wechatPay') >=0){
    window.location.href = '../../html/buy/wechat.html' + searchString;//微信支付
  }else if(key.indexOf('bigevent')>=0){
    window.location.href = '../../html/bigEvent/index.html' + searchString;//大事件详情
  }else if(key.indexOf('issueWork')>=0){
    window.location.href='../../html/issue/index.html' + searchString;//不可售作品的二次编辑
  }else if(key.indexOf('notice')>=0){
    window.location.href='../../html/news/notice.html' + searchString;//消息列表
  }else if(key.indexOf('sentGoods')>=0){
    window.location.href='../../html/order/sentGoods.html' + searchString;//消息列表
  }else if(key.indexOf('buyStatus')>=0){
    window.location.href='../../html/order/buyStatus.html' + searchString;//消息列表
  }else if(key.indexOf('videoDetailId')>=0){
    window.location.href='../../html/videoDetail/index.html' + searchString;//消息列表
  }
}

/**
 * 用户获取url后面的参数，返回个json对象 
 * @param {String} url 需要获取参数的url,不填则是当前链接
 * @returns {Object} 返回url后面所有参数组成的json对象
 */
function getUrlParam(url){
  var searchUrl = url ? url : window.location;
  var str = searchUrl.search.substr(1,searchUrl.search.length);
  var urlArray = str.split('&');
  var json = {};
  for (var i = 0; i < urlArray.length; i++) {
    var element = urlArray[i];
    var equalIndex = element.indexOf('=');
    var key = element.substr(0,equalIndex);
    var val = element.substr(equalIndex+1,element.length);
    json[key] = decodeURI(val);//添加中文对参数值解码
  }
  return json;
}

/**
 * 封装了ajax，有进度条效果
 * @param {String} method 请求方法get,post
 * @param {String} link 请求路径
 * @param {JSON} json 请求数据
 * @param {Function} successCallback 请求成功时的回调函数
 * @param {Function} errorCallback 请求失败时的回调函数
 * @param {Function} errorStatusCallback 失败状态的回调函数
 */
function myAjax(method, link, json, successCallback, errorCallback,errorStatusCallback) {
  resetProgressBar();
  var def = $.ajax({
    type: method,
    url: link,
    data: json,
    async: true,
    dataType: "json",
    xhr: function () {
      var xhr = $.ajaxSettings.xhr();
      xhr.onprogress = progressBar;
      return xhr;
    },
    complete:function(XMLHttpRequest, textStatus){
        setFooterPosition();
    },
    success: function (response, status, jqxhr) {
      if (isIE678()) {//ie678
        $('#progress_bar').css({
          width: '100%'
        }).promise().done(function () {
          $('#progress_bar').remove();
        });
      }
      if (response.code == 1 || response.code == 3 || response.code == 4 || response.code == 5) {
        //1,3是只有登录成功才会有的状态
        successCallback(response.data, status, jqxhr);
      } else {
        if (errorStatusCallback) {
          errorStatusCallback(response.data, status, jqxhr);
        } 
        failMessage('获取数据失败，code：' + response.code + '，错误信息:' + response.message);
      }
    },
    error: function (xhr, textStatus, errorThrown) {
      $("#progress_bar").remove();
      if (errorCallback) {
        errorCallback(xhr, textStatus, errorThrown);
      }
      // alert('error,请求发送失败');
      console.log(xhr);
      console.log(textStatus);
      console.log(errorThrown); 
    }
  });
  return def;
}


window.resize = function(){
  setFooterPosition();
}
/**
 * 设置脚部位置
 */
function setFooterPosition() {
  // return false;
  $('#footer').css({
    'position':'relative',
    'top':'0px',
  })
  var windowHeight = $(window).height();
  var bodyHeight = $('body').height();
  var footerOffSetTop = $('#footer').offset().top;
  // console.log('bodyHeight---->'+bodyHeight);
  // console.log('windowHeight---->'+windowHeight);
  // console.log('footerOffSetTop---->'+footerOffSetTop);
  if (footerOffSetTop < windowHeight) {//当内容不满一屏幕的时候，就把脚部放一屏幕之后的位置
    $('#footer').css({
      'position':'absolute',
      'top':windowHeight+10+'px',
      'width':'100%',
    });
  }else{
    $('#footer').css({
      'position':'relative',
      'top':'0px',
    });
    
  }
}

/**
 * 该方法用于判断用户的操作系统
 */
function detectOS() {
  var sUserAgent = navigator.userAgent;
  var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
  var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
  if (isMac) return "Mac";
  var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
  if (isUnix) return "Unix";
  var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
  if (isLinux) return "Linux";
  if (isWin) {
    var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
    if (isWin2K) return "Win2000";
    var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
    if (isWinXP) return "WinXP";
    var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
    if (isWin2003) return "Win2003";
    var isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
    if (isWinVista) return "WinVista";
    var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
    if (isWin7) return "Win7";
  }
  return "other";
}

/**
 * 该方法是把时间戳转正常时间
 * @param {String} nS 时间戳
 */
function formatDate(nS) {
  var now = new Date(nS);
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var date = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minute < 10) {
    minute = '0' + minute;
  }
  if (second < 10) {
    second = '0' + second;
  }
  return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
}

/**
 * 初始化进度条
 */
function resetProgressBar() {
  $("#progress_bar").remove();
  var div = document.createElement('div');
  div.setAttribute('id', 'progress_bar');
  $('body').prepend(div);
  $('#progress_bar').animate({
    width: '90%'
  }, 5000);
}

/**
 * 进度条事件
 * @param {Object} event 是xhr上传对象
 */
function progressBar(event) {
  $('#progress_bar').stop();
  var loaded = event.loaded;     //已经上传大小情况 
  var total = event.total;      //附件总大小 
  var per = Math.floor(100 * loaded / total);  //已经上传的百分比
  $('#progress_bar').animate({
    width: per + "%"
  }, 'fast');
  $("#progress_bar").fadeOut();
  setTimeout(function () {//延迟
    $("#progress_bar").remove();
  }, 500);

}

/**
 * 判断是不是ie678
 * @param {Number} ieVersion 是ie第几个版本，传9就是ie9
 * @return {boolean} true就是ie678
 */
function isIE678(ieVersion) {
  var browser = navigator.appName
  var b_version = navigator.appVersion
  var version = b_version.split(";");
  if (version.length > 1) {
    var trim_Version = version[1].replace(/[ ]/g, "");
    if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE6.0") {
      return true;
    }
    else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE7.0") {
      return true;
    }
    else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE8.0") {
      return true;
    } else {
      return false;
    }
    if (ieVersion == 9) {
      if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE9.0") {
        return true;
      }
    }
  }
}

/**
 * 回到顶部
 */
function toTop() {
  $('#toTop_btn').remove();
  var div = document.createElement('div');
  div.className = 'toTop_btn';
  div.setAttribute('id', 'toTop_btn');
  div.innerHTML = '<img src="../../img/to_top.png" class="fl">';
  $('body').append(div);
  $('#toTop_btn').click(function () {
    $(document).scrollTop(0);
    $('#toTop_btn').remove();
  });
}

/* 滚轮事件 */
window.onscroll = function () {
  var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; //兼容浏览器  
  if (scrollTop <= 88) {//定位顶部的信息
    $('.top_message_div').css('top','88px');
  }else{
    $('.top_message_div').css('top','0');
  }
  if (scrollTop > 2000) {
    toTop();
  } else {
    $('#toTop_btn').remove();
  }
}

/**
 * 用于验证手机号码
 * @param {string} phone 待验证字符串
 */
function isPhoneRight(phone) {
  var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|17[0-9])\d{8}$/;
  if (reg.test(phone)) {
    return true;
  } else {
    failMessage('请输入合法手机号');
    return false;
  }
}

/**
 * 判断是否登录
 * @return {Boolean} 真假
 */
function isLogin() {
  if (localStorage.getItem('token') || sessionStorage.getItem('token')) {
    return true;
  } else {
    return false;
  }
}

/**
 * 对比2个用户是不是自己
 * @param {Number} selfId 当前登录人id
 * @param {Number} ofterId 需要对比的id
 */
function isMySelf(selfId, ofterId) {
  if (parseInt(selfId) == parseInt(ofterId)) {
    return true;
  } else {
    return false;
  }
}

/**
 * 获取登录后的信息,如token,用户信息
 */
function getLoginMsg() {
  var json = {};
  var token = localStorage.getItem('token') ? localStorage.getItem('token') : sessionStorage.getItem('token');
  var userMsg = localStorage.getItem('userMsg') ? JSON.parse(localStorage.getItem('userMsg')) : JSON.parse(sessionStorage.getItem('userMsg'));
  json.token = token;
  json.userMsg = userMsg;
  return json;
}

/**
 * 公共的加密登陆密码方法
 * @param {String} pwd 原密码输入框
 * @returns {String} 返回一个加密密码字符串
 */
function encryptionLoginPwd(pwd) {
  var now = Date.parse(new Date()) / 1000;//当前时间戳
  var registerPwd = hex_md5(pwd+FIXED_STR);//注册密钥
  var num = now+1800;
  var password = hex_md5(num+registerPwd);//加密后的密钥
  return password;
}



/**
 * 身份证号合法性验证 
 * 支持15位和18位身份证号
 * 支持地址编码、出生日期、校验位验证
 * @param {String} code 身份证字符串
 */
function IdentityCodeValid(code) {
  var city = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江 ", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北 ", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏 ", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外 " };
  var tip = "";
  var pass = true;
  var reg = /^[1-9][0-9]{5}(19[0-9]{2}|200[0-9]|2010)(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[0-9]{3}[0-9xX]$/i;

  if (!code || !reg.test(code)) {
    tip = "身份证号格式错误";
    pass = false;
  } else if (!city[code.substr(0, 2)]) {
    tip = "地址编码错误";
    pass = false;
  } else {
    //18位身份证需要验证最后一位校验位
    if (code.length == 18) {
      code = code.split('');
      //∑(ai×Wi)(mod 11)
      //加权因子
      var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      //校验位
      var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
      var sum = 0;
      var ai = 0;
      var wi = 0;
      for (var i = 0; i < 17; i++) {
        ai = code[i];
        wi = factor[i];
        sum += ai * wi;
      }
      var last = parity[sum % 11];
      if (parity[sum % 11] != code[17]) {
        tip = "校验位错误";
        pass = false;
      }
    }
  }
  // if (!pass) alert(tip);
  return pass;
}

/**
 * 对比时间
 * @param {Number} time 时间戳
 * @returns {String} 返回时间差文本
 */
function contrastTime(time){
  var str = '';
  var date = new Date();
  var nowYear = date.getFullYear();
  var oldTime = new Date(time);
  var oldYear = oldTime.getFullYear();
  var now = Date.parse(date);
  var cha = (now - time) / 1000;
  if (nowYear == oldYear) {
    if (cha > 0 && cha <= 60) {//刚刚
      str = '刚刚';
    }else if(cha > 60 && cha <= 3600){//多少分钟前 小于1小时
      str = parseInt((cha / 60)) +'分钟前';
    }else if(cha > 3600 && cha <= 86400){ //24小时以内
      str = parseInt((cha / 3600)) +'小时前';
    }else{
      str = oldTime.getMonth()+1 + '月'+oldTime.getDate() + '日';
    }
  }else{
    str = formatDate(oldTime);
  }
  return str;
}

/**
 * 封装了通用的错误弹窗       
 * @param {String} text 错误提示
 */
function failMessage(text) {
  $('.common_dialog_div').remove();
  var div = document.createElement('div');
  div.className = 'common_dialog_div';
  div.style.display = 'none';
  div.innerHTML = '<div class="black_div"></div>'
    + '<div class="table_cell">'
    + '<div class="white_div">'
    + '<div class="close_btn clearfix">'
    + '<img class="fr" src="../../img/icon_delete_04.png">'
    + '</div>'
    + '<div class="icon_div mt20">'
    + '<img src="../../img/icon_fault.png">'
    + '</div>'
    + '<p class="text mt10 f20">' + text + '</p>'
    + '</div>';
  + '</div>';
  $('body').append(div);
  $('.common_dialog_div').fadeIn('fast');
  $('.common_dialog_div').click(function () {
    $(this).hide();
    setTimeout(function () {//在mac的谷歌上有点bug 要延迟一下
      $('.common_dialog_div').remove();
    }, 100)
  })
}

/**
 * 显示顶部的操作信息
 * @param {String} text 信息文本
 */
function topMessage(text){
  $('.top_message_div').remove();
  var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; //兼容浏览器  
  var div = document.createElement('div');
  if (scrollTop < 88) {
    div.style.top = '88px';
  }
  div.className = 'top_message_div';
  div.innerHTML = '<div class="bg_div"></div>'
                +'<div class="text">'+text+'</div>';
  document.body.appendChild(div);
  setTimeout(function(){
    $('.top_message_div').remove();
  },3000);
}

/**
 * 公用的获取评论数据
 * @param {Number} type 评论类型
 * @param {Number} page 页码
 * @param {Number} listId 列表id
 * @param {Function} callback 成功时的回调函数
 */
function getCommentList(type, page, listId, callback) {
  var token = isLogin() ? getLoginMsg().token : '';
  var post = myAjax('get', URI + api.comment, {
    page: page,
    typeId: listId,
    type: type,
    token: token
  }, function (response) {
    callback(response);
  });
  return post;
}


/**
 * 封装了上传方法
 * @param {Object} uploadData json数据格式的ajax数据，用于兼容html5的上传
 */
function uploadFile(uploadData) {
  /* 初始化进度条 */
  resetProgressBar();
  if (!window.applicationCache) {//判断是否支持html5心特性 ie 
    if (!uploadData.fileElementId) {
      alert('请传入input:file的id属性');
      return false;
    }
    var data = uploadData.param ? uploadData.param : {};
    //该上传方法，必须是在同源策略下，才能生效
    $.ajaxFileUpload({
      url: URI + api.ieUpload,
      dataType: 'text',
      fileElementId: uploadData.fileElementId,
      type: 'post',
      data: data,
      secureuri: false,
      success: function (response) {
        var result = JSON.stringify(response);
        //测试时候用这个
        var result = { "code": 5, "data": ["http://lpn20161128.oss-cn-shenzhen.aliyuncs.com/6968482075953739336.jpg"], "message": "上传成功" };
        if (result.code == 4 || result.code == 5) {
          uploadData.success(result.data);
        } else {
          failMessage('获取数据失败，code：' + result.code + '，错误信息:' + result.message);
          if (uploadData.successError) {
            uploadData.successError(result);
          }
        }
      },
      error: function (xhr, textStatus, errorThrown) {
        $("#progress_bar").remove();
        if (uploadData.error) {
          uploadData.error(xhr, textStatus, errorThrown);
        }
      }
    })
  } else {//h5 formdata
    if (!uploadData.data.file) {
      alert('请传入文件');
      return false;
    }
    var formData = new FormData();
    var keyname = uploadData.keyname ? uploadData.keyname : 'image0';
    formData.append(keyname, uploadData.data.file);
    $.ajax({
      type: "post",
      url: URI + api.uploadPicture,
      data: formData,
      dataType: "json",
      cache: false,
      processData: false,
      contentType: false,
      xhr: function () {
        var xhr = $.ajaxSettings.xhr();
        xhr.onprogress = progressBar;
        return xhr;
      },
      success: function (response, status, jqxhr) {
        if (response.code == 4 || response.code == 5) {
          //1,3是只有登录成功才会有的状态
          uploadData.success(response.data, status, jqxhr);
        } else {
          failMessage('获取数据失败，code：' + response.code + '，错误信息:' + response.message);
          if (uploadData.successError) {
            uploadData.successError(result);
          }
        }
      },
      error: function (xhr, textStatus, errorThrown) {
        $("#progress_bar").remove();
        if (uploadData.error) {
          uploadData.error(xhr, textStatus, errorThrown);
        }
        // alert('error,请求发送失败');
        console.log(xhr);
        console.log(textStatus);
        console.log(errorThrown);
      }
    });
  }
}

/**
 * 用于判断当前file是否符合格式
 * @param {Object} fileObj input输入框自身 
 * @returns {Boolean} 真就是能符合条件，假就是不符合条件
 */
function checkFile(fileObj) {
  var allowExtention = ".jpg,.gif,.png"; //允许上传文件的后缀名document.getElementById("hfAllowPicSuffix").value;  
  var extention = fileObj.value.substring(fileObj.value.lastIndexOf(".") + 1).toLowerCase();
  var browserVersion = window.navigator.userAgent.toUpperCase();
  if (allowExtention.indexOf(extention) == -1) {
    failMessage("仅支持" + allowExtention + "为后缀名的文件!");
    return false;
  } else {
    var fileSize = 0;
    if (isIE678(9)) {
      var filePath = fileObj.value; // 获得上传文件的绝对路径
      /**
       * ActiveXObject 对象为IE和Opera所兼容的JS对象
       * 用法：
       *         var newObj = new ActiveXObject( servername.typename[, location])
       *         其中newObj是必选项。返回 ActiveXObject对象 的变量名。
       *        servername是必选项。提供该对象的应用程序的名称。
       *        typename是必选项。要创建的对象的类型或类。
       *        location是可选项。创建该对象的网络服务器的名称。
       *\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        *     Scripting.FileSystemObject 为 IIS 内置组件，用于操作磁盘、文件夹或文本文件，
        *    其中返回的 newObj 方法和属性非常的多
        *    如：var file = newObj.CreateTextFile("C:\test.txt", true) 第二个参表示目标文件存在时是否覆盖
        *    file.Write("写入内容");    file.Close();
        */
      // GetFile(path) 方法从磁盘获取一个文件并返回。
      try {
        var file = fileSystem.GetFile(filePath);
        fileSize = file.Size / 1024;    // 文件大小，单位：b
      } catch (error) {
        failMessage(error.message + ',ie的ActiveXObject无法获取到本机文件,请允许阻止内容或者更换高版本浏览器');
        // return false;
      }
    } else {
      fileSize = fileObj.files[0].size / 1024;
    }
    if (fileSize > 2000) {
      failMessage('选取的图片大小不能大于2m,当前图片大小：' + fileSize.toFixed(2) + 'k');
      return false;
    } else {
      return true;
    }
  }
}

/**
 * 公共的删除图片方法 
 * @param {String} src 需要删除的图片的url
 * @returns {Object} 返回一个ajax延迟对象
 */
function commonDelPictrue(src){
  var subStr = '.com/';
  var subStartIndex = src.indexOf(subStr);
  var str = src.substring(subStartIndex+5,src.length-1);
  var def = myAjax('post',URI+api.commonDeleteImg,{key:str},function(response){
    console.log('删除图片成功');
  });
  // def.promise().done(function(response){})
  return def;
}

/**
 * 公共发表评论方法
 * @param {Object} uploadData 评论所需要的参数对象，字段名跟接口的一样
 */
function replyComment(uploadData){
  if (uploadData.type == undefined) {
    failMessage('请输入类型');
    return false;
  }
  if (!uploadData.typeId) {
    failMessage('请输入列表id');
    return false;
  }
  if (uploadData.commentContent == '' && uploadData.commentImage == '') {
    failMessage('评论的文字和图片必须填其一');
    return false;
  }
  if (uploadData.self) {//uploadData.self是当前的评论按钮
    var self = uploadData.self;
    var isSenting = $(self).data('issenting');
    if (isSenting == 1) {
      return false;
    }
    $(self).html('发送中..');
    $(self).data('issenting', 1);
  }
  
  var content = uploadData.commentContent == "" ? '' : uploadData.commentContent;
  var imgUrl = uploadData.commentImage == '' ? '' : uploadData.commentImage;
  var beReplyUserId = uploadData.parentId == 0 ? '' : uploadData.targetUserId;//被评论者
  var parentId = uploadData.parentId == 0 ? 0 : uploadData.parentId;
  var def = myAjax('post',URI+api.releaseComment,{
    type:uploadData.type,  //表类型（0作品/1材料/2镜框/3随手拍/4需求/5征集令/6大事件/7玩转创意/8教程/9求购榜单/10接令）
    typeId:uploadData.typeId, //列表id
    commentContent:content, //内容
    userId:getLoginMsg().userMsg.userId,//评论者id
    commentImage:imgUrl, //图片
    targetUserId:beReplyUserId,//被评论用户的id（一级评论不用传）
    parentId:parentId,//父节点id（一级评论id为0，二级评论id为一级评论的主键id）
  },function (response) {  
    uploadData.success(response);
  });
  return  def;
}

/**
 * 删除评论
 * @param {Number} id 删除id
 */
function deleteComment(id){
  var def = myAjax('post',URI+api.delComment,{
    token:getLoginMsg().token,
    commentPkId:id
  },function(response){
    console.log('删除评论成功');
  });
  return def;
}

/**
 * 公共获取更多评论
 * @param {Object} obj 一级评论的id
 * @returns {Object} 返回ajax延迟对象
 */
function commonGetSecondComment(obj) {
  var key = obj.commentKey ? '' : obj.commentKey;
  var token = isLogin() ? getLoginMsg().token : ''
  var def = myAjax('get',URI+api.moreSecondComment,{
    token:token,
    commentId:obj.commentId,
    commentKey:key,
    page:obj.page
  },function(response){
    obj.success(response);
  });
  return def;
}

/**
 * 该方法用与把字符串转byte
 * @param {String} str 是需要转变的字符串
 */
function stringToByte(str) {  
  var bytes = new Array();  
  var len, c;  
  len = str.length;  
  for(var i = 0; i < len; i++) {  
      c = str.charCodeAt(i);  
      if(c >= 0x010000 && c <= 0x10FFFF) {  
          bytes.push(((c >> 18) & 0x07) | 0xF0);  
          bytes.push(((c >> 12) & 0x3F) | 0x80);  
          bytes.push(((c >> 6) & 0x3F) | 0x80);  
          bytes.push((c & 0x3F) | 0x80);  
      } else if(c >= 0x000800 && c <= 0x00FFFF) {  
          bytes.push(((c >> 12) & 0x0F) | 0xE0);  
          bytes.push(((c >> 6) & 0x3F) | 0x80);  
          bytes.push((c & 0x3F) | 0x80);  
      } else if(c >= 0x000080 && c <= 0x0007FF) {  
          bytes.push(((c >> 6) & 0x1F) | 0xC0);  
          bytes.push((c & 0x3F) | 0x80);  
      } else {  
          bytes.push(c & 0xFF);  
      }  
  }  
  return bytes;  
}  

/**
 * 封装了小的，只有信息的弹窗
 * @param {JSON} dialogData 弹窗参数
 */
function smallDialog(dialogData) {
  $('#small_confirm_dialog').remove();
  var div = document.createElement('div');
  div.setAttribute('id','small_confirm_dialog');
  div.innerHTML = '<div class="black_div"></div>'
                + '<div class="white_div">'
                + ' <p class="text">'+dialogData.text+'</p>'
                + ' <div class="btn_div">'
                + '  <input type="button" value="确定" class="confirm_btn">'
                + '  <input type="button" value="取消" class="quit_btn ml10">'
                + ' </div>'
                + '</div>';
  document.body.appendChild(div);
  $('#small_confirm_dialog').on('click','.black_div,.quit_btn', function (e) {
    e.preventDefault();
    $('#small_confirm_dialog').remove();
    if (dialogData.quit) {
      dialogData.quit(this);
    }
  });
  $('#small_confirm_dialog').on('click','.confirm_btn', function (e) {
    e.preventDefault();
    dialogData.confirm(this);
  });
}

/**
 * 获取url参数
 */
function UrlSearch() {
  var name,value; 
  var str=location.href; //取得整个地址栏
  var num=str.indexOf("?") 
  str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]
  var arr=str.split("&"); //各个参数放到数组里
  for(var i=0;i < arr.length;i++){ 
  num=arr[i].indexOf("="); 
  if(num>0){ 
    name=arr[i].substring(0,num);
    value=arr[i].substr(num+1);
    this[name]=value;
    } 
  } 
} 


/**
 * 根据本系统的token获取融云的token  
 * @param {String} myToken 本系统的token
 * @param {String} json 预留的方法入口
 */
// function getRongIMToken(myToken,json){
//   myAjax('post',URI+api.getRongIMByMyToken,{token:myToken},function(response){
//     var rongImToken = response.token.token;
//     // console.log(myToken);
//     // 设置连接监听状态 （ status 标识当前连接状态 ）
//     // 连接状态监听器
//     RongIMLib.RongIMClient.init(RONGIMAPPKEY);
//     RongIMClient.setConnectionStatusListener({
//       onChanged: function (status) {
//         switch (status) {
//           case RongIMLib.ConnectionStatus.CONNECTED:
//               console.log('链接成功');
//               break;
//           case RongIMLib.ConnectionStatus.CONNECTING:
//               console.log('正在链接');
//               break;
//           case RongIMLib.ConnectionStatus.DISCONNECTED:
//               console.log('断开连接');
//               break;
//           case RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:
//               console.log('其他设备登录');
//               break;
//           case RongIMLib.ConnectionStatus.DOMAIN_INCORRECT:
//               console.log('域名不正确');
//               break;
//           case RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE:
//               console.log('网络不可用');
//           break;
//         }
//       }
//     });
//     // 消息监听器
//     RongIMClient.setOnReceiveMessageListener({
//       // 接收到的消息
//       onReceived: function (message) {
//           // 判断消息类型
//           switch(message.messageType){
//               case RongIMClient.MessageType.TextMessage:
//                   // message.content.content => 消息内容
//                   break;
//               case RongIMClient.MessageType.VoiceMessage:
//                   // 对声音进行预加载                
//                   // message.content.content 格式为 AMR 格式的 base64 码
//                   break;
//               case RongIMClient.MessageType.ImageMessage:
//                 // message.content.content => 图片缩略图 base64。
//                 // message.content.imageUri => 原图 URL。
//                 break;
//               case RongIMClient.MessageType.DiscussionNotificationMessage:
//                 // message.content.extension => 讨论组中的人员。
//                 break;
//               case RongIMClient.MessageType.LocationMessage:
//                 // message.content.latiude => 纬度。
//                 // message.content.longitude => 经度。
//                 // message.content.content => 位置图片 base64。
//                 break;
//               case RongIMClient.MessageType.RichContentMessage:
//                 // message.content.content => 文本消息内容。
//                 // message.content.imageUri => 图片 base64。
//                 // message.content.url => 原图 URL。
//                 break;
//               case RongIMClient.MessageType.InformationNotificationMessage:
//                   // do something...
//                 break;
//               case RongIMClient.MessageType.ContactNotificationMessage:
//                   // do something...
//                 break;
//               case RongIMClient.MessageType.ProfileNotificationMessage:
//                   // do something...
//                 break;
//               case RongIMClient.MessageType.CommandNotificationMessage:
//                   // do something...
//                 break;
//               case RongIMClient.MessageType.CommandMessage:
//                   // do something...
//                 break;
//               case RongIMClient.MessageType.UnknownMessage:
//                   // do something...
//                 break;
//               default:
//                   // do something...
//           }
//       }
//     });
//     /* 链接服务器 */
//     RongIMClient.connect(rongImToken, {
//       onSuccess: function(userId) {
//         if (json && json.connectSuccess) {
//           json.connectSuccess(userId);
//         }
//         console.log("链接融云成功，userid:" + userId);
//         var msg = new RongIMLib.TextMessage({content:"hello RongCloud!",extra:"附加信息"});
//         var conversationtype = RongIMLib.ConversationType.PRIVATE; // 单聊,其他会话选择相应的消息类型即可。
//         RongIMClient.getInstance().getConversationList({
//           onSuccess: function(list) {
//             // list => 会话列表集合。
//             // console.log(list);
//             if (json && json.getListSuccess) {
//               json.getListSuccess(list);
//             }
//           },
//           onError: function(error) {
//              // do something...
//           }
//         },null);
        
//       },
//       onTokenIncorrect: function() {
//         console.log('token无效');
//         // location.reload();
//       },
//       onError:function(errorCode){
//         var info = '';
//         if (json && json.connectError) {
//           json.connectError(errorCode);
//         }
//         switch (errorCode) {
//           case RongIMLib.ErrorCode.TIMEOUT:
//             info = '超时';
//             break;
//           case RongIMLib.ErrorCode.UNKNOWN_ERROR:
//             info = '未知错误';
//             break;
//           case RongIMLib.ErrorCode.UNACCEPTABLE_PaROTOCOL_VERSION:
//             info = '不可接受的协议版本';
//             break;
//           case RongIMLib.ErrorCode.IDENTIFIER_REJECTED:
//             info = 'appkey不正确';
//             break;
//           case RongIMLib.ErrorCode.SERVER_UNAVAILABLE:
//             info = '服务器不可用';
//             break;
//         }
//         console.log(errorCode);
//         failMessage('链接融云失败，请刷新本页面');
//       }
//     });
//     /* 重新连接融云 */
//     var callback = {
//       onSuccess: function(userId) {
//           console.log("Reconnect successfully." + userId);
//           if (json && json.connectSuccess) {
//             json.connectSuccess(userId);
//           }
//       },
//       onTokenIncorrect: function() {
//           console.log('token无效');
//       },
//       onError:function(errorCode){
//           console.log(errorcode);
//       }
//     };
//     var config = {
//         // 默认 false, true 启用自动重连，启用则为必选参数
//         auto: true,
//         // 重试频率 [100, 1000, 3000, 6000, 10000, 18000] 单位为毫秒，可选
//         // url: 'cdn.ronghub.com/RongIMLib-2.2.6.min.js',
//         // 网络嗅探地址 [http(s)://]cdn.ronghub.com/RongIMLib-2.2.6.min.js 可选
//         rate: [100, 1000, 3000, 6000, 10000]
//     };
//     RongIMClient.reconnect(callback, config);
//   });
// }



/**
 * 判断是不是黑名单
 * @param {JSON} id userid
 * @returns {Object} 返回一个延迟对象
 */
function isHei(id){
  var def = $.ajax({
    type: "post",
    url: URI + api.blackListandList,
    data: {id:id},
    dataType: "json",
    async:false,//是否异步
    success: function (response) {}
  });
  return def;
}
/**
 * 下载app的二维码弹窗
 */
function showDownloadApp(){
  $('#show_download_qrcode').remove();
  var html = '<div class="code_dig_div" id="show_download_qrcode">'
  +'<div class="bg_div"></div>'
  +'<div class="big_img_div">'
  +  '<img src="../../img/android_code.png" class="code_img">'
  +'</div>'
  +'</div>';
  $('body').append(html);
  $('#show_download_qrcode').fadeIn();
  $('#show_download_qrcode').click(function (e) { 
    e.preventDefault();
    $(this).remove();
  });
}

/**
 * 处理后台返回的价格的公共函数，因为后台返回的单位是分,处理后的价格是元
 * @param {Number} price 后台返回的价格
 */
function dealPrice(price){
  var floatPrice = parseFloat(price);
  floatPrice = floatPrice.toFixed(2);
  floatPrice = floatPrice / 100;
  return floatPrice;
}

/**
 * (环信)公用的获取评论表情
 * @param {Number} result 评论内容
 */
function getEmojiWebIM(result) {
  var addr="../../img/faces/"
  var emoji= [{write:"[):]",url:addr+"ee_1.png"},
                  {write:"[:D]",url:addr+"ee_2.png"},
                  {write:"[;)]",url:addr+"ee_3.png"},
                  {write:"[:-o]",url:addr+"ee_4.png"}, 
                  {write:"[:p]",url:addr+"ee_5.png"}, 
                  {write:"[(H)]",url:addr+"ee_6.png"}, 
                  {write:"[:@]",url:addr+"ee_7.png"},
                  {write:"[:s]",url:addr+"ee_8.png"}, 
                  {write:"[:$]",url:addr+"ee_9.png"}, 
                  {write:"[:(]",url:addr+"ee_10.png"}, 
                  {write:"[:\'(]",url:addr+"ee_11.png"}, 
                  {write:"[:|]",url:addr+"ee_12.png"}, 
                  {write:"[(a)]",url:addr+"ee_13.png"}, 
                  {write:"[8o|]",url:addr+"ee_14.png"},
                  {write:"[8-|]",url:addr+"ee_15.png"}, 
                  {write:"[+o(]",url:addr+"ee_16.png"}, 
                  {write:"[<o)]",url:addr+"ee_17.png"}, 
                  {write:"[|-)]",url:addr+"ee_18.png"}, 
                  {write:"[*-)]",url:addr+"ee_19.png"},   
                  {write:"[:-#]",url:addr+"ee_20.png"}, 
                  {write:"[:-*]",url:addr+"ee_21.png"},
                  {write:"[^o)]",url:addr+"ee_22.png"}, 
                  {write:"[8-)]",url:addr+"ee_23.png"}, 
                  {write:"[(|)]",url:addr+"ee_24.png"}, 
                  {write:"[(u)]",url:addr+"ee_25.png"},
                  {write:"[(S)]",url:addr+"ee_26.png"},
                  {write:"[(*)]",url:addr+"ee_27.png"},
                  {write:"[(#)]",url:addr+"ee_28.png"},
                  {write:"[(R)]",url:addr+"ee_29.png"},
                  {write:"[({)]",url:addr+"ee_30.png"},
                  {write:"[(})]",url:addr+"ee_31.png"},
                  {write:"[(k)]",url:addr+"ee_32.png"},
                  {write:"[(F)]",url:addr+"ee_33.png"},
                  {write:"[(W)]",url:addr+"ee_34.png"},
                  {write:"[(D)]",url:addr+"ee_35.png"},
              ];
  var regexp = /\[([\s\S]){0,3}\]/g;
  for(var i=0;i<emoji.length;i++){
      var rs=null;
      while ((rs = regexp.exec(result)) != null)
      {   
          if(emoji[i].write==rs[0]){
            emoji[i].write=emoji[i].write.replace(/\[/g,'\\[');
            emoji[i].write=emoji[i].write.replace(/\]/g,'\\]');   
            emoji[i].write=emoji[i].write.replace(/\(/g,'\\('); 
            emoji[i].write=emoji[i].write.replace(/\)/g,'\\)');
            emoji[i].write=emoji[i].write.replace(/\|/g,'\\|');
            emoji[i].write=emoji[i].write.replace(/\^/g,'\\^');
            emoji[i].write=emoji[i].write.replace(/\*/g,'\\*');
            emoji[i].write=emoji[i].write.replace(/\$/g,'\\$');
            emoji[i].write=emoji[i].write.replace(/\+/g,'\\+');
              var reg=new RegExp(emoji[i].write,"ig");
              result = result.replace(reg,function(kw){
                  return "<img class='imgstyle' src='"+emoji[i].url+"' alt=''/>";
              }); 
          }
      }    
  }
  return result;
}

/**
 * (有评论的页面)公用的获取评论表情
 * @param {Number} result 评论内容
 */
function getEmoji(result) {
  var addr="../../img/look/"
  var emoji= [{write:"[亲亲]",url:addr+"emoji_kiss.png"},
                  {write:"[生病]",url:addr+"emoji_sick.png"},
                  {write:"[得意]",url:addr+"emoji_proud.png"},
                  {write:"[尴尬]",url:addr+"emoji_embarrassment.png"}, 
                  {write:"[可爱]",url:addr+"emoji_cutely.png"}, 
                  {write:"[流汗]",url:addr+"emoji_cold_sweat.png"}, 
                  {write:"[调皮]",url:addr+"emoji_naughty.png"},
                  {write:"[淘气]",url:addr+"emoji_mischief.png"}, 
                  {write:"[飞吻]",url:addr+"emoji_throw_kiss.png"}, 
                  {write:"[吐舌]",url:addr+"emoji_sticking_tongue.png"}, 
                  {write:"[憨笑]",url:addr+"emoji_giggle.png"}, 
                  {write:"[微笑]",url:addr+"emoji_smile.png"}, 
                  {write:"[愉快]",url:addr+"emoji_happy.png"}, 
                  {write:"[严肃]",url:addr+"emoji_solemnity.png"},
                  {write:"[叹气]",url:addr+"emoji_suspirious.png"}, 
                  {write:"[色色]",url:addr+"emoji_lasciviousness.png"}, 
                  {write:"[惊呆]",url:addr+"emoji_stupefaction.png"}, 
                  {write:"[难受]",url:addr+"emoji_sadness.png"}, 
                  {write:"[哭]",url:addr+"emoji_lacrimation.png"},   
                  {write:"[笑哭]",url:addr+"emoji_smile_to_cry.png"}, 
                  {write:"[生气]",url:addr+"emoji_angry.png"},
                  {write:"[无语]",url:addr+"emoji_speechless.png"}, 
                  {write:"[大哭]",url:addr+"emoji_cry.png"}, 
                  {write:"[呆滞]",url:addr+"emoji_stagnate.png"}, 
                  {write:"[纠结]",url:addr+"emoji_entanglement.png"}
              ];
  var regexp = /\[[\u4e00-\u9fa5]{0,3}\]/g;
  for(var i=0;i<emoji.length;i++){
      var rs=null;
      while ((rs = regexp.exec(result)) != null)
      {   
          if(emoji[i].write==rs[0]){
              emoji[i].write=emoji[i].write.replace(/\[/g,'\\[');
              emoji[i].write=emoji[i].write.replace(/\]/g,'\\]');  
              var reg=new RegExp(emoji[i].write,"ig");
              result = result.replace(reg,function(kw){
                  return "<img class='imgstyle' src='"+emoji[i].url+"' alt=''/>";
              }); 
          }
      }    
  }
  return result;
}



/**
 * 公用的截取图片显示中间部分的方法
 * @param {String} selector 要遍历的选择器
 * @param {Number} mywidth 包含img的div的尺寸大小
 * @param {Number} myheight 包含img的div的尺寸大小
 */
function getImgs(selector,mywidth,myheight){
  selector.each(function(e,elem){
    var element=$(this);
    // var mywidth=239,myheight=189;//要显示的固定尺寸
    $(this).attr("src", $(elem).attr("src")).load(function(){//当图片加载完以后才执行
      var imgUrl=new Image();
      imgUrl.src=$(elem).attr('src');
      if(imgUrl.width>imgUrl.height){//如果宽>高
        if(mywidth/myheight>imgUrl.width/imgUrl.height){//div比例>图片比例，取高值
          var top=-(parseFloat(imgUrl.height*mywidth/imgUrl.width)-parseFloat(myheight))/2;
          element.css('width',mywidth).css('top',top).css('height',mywidth*parseFloat(imgUrl.height)/parseFloat(imgUrl.width));
        }else{
          var left=-(parseFloat(imgUrl.width*myheight/imgUrl.height)-parseFloat(mywidth))/2;
          element.css('height',myheight).css('width',parseFloat(imgUrl.width*myheight/imgUrl.height)).css('top',0).css('left',left);
        }
      }else{
        var top=-(parseFloat(imgUrl.height*mywidth/imgUrl.width)-parseFloat(myheight))/2;
        element.css('width',mywidth).css('left',0).css('top',top).css('height','auto');
      }
    })
  })
}

/**
 * 公用的在textarea里面光标位置插入输入表情及内容的方法
 * @param {String} myField textarea选择器，此处要html选择器
 * @param {Number} myValue textarea已存在的值
 */
function insertAtCursor(myField, myValue) {
  if (document.selection) {
      //IE support
      myField.focus();
      sel = document.selection.createRange();
      sel.text = myValue;
      sel.select();
  } else if (myField.selectionStart || myField.selectionStart == '0') {
      //MOZILLA/NETSCAPE support
      var startPos = myField.selectionStart;//
      var endPos = myField.selectionEnd;
      var beforeValue = myField.value.substring(0, startPos);
      var afterValue = myField.value.substring(endPos, myField.value.length);
      myField.value = beforeValue + myValue + afterValue;
      myField.selectionStart = startPos + myValue.length;
      myField.selectionEnd = startPos + myValue.length;
      myField.focus();
  } else {
      myField.value += myValue;
      myField.focus();
  }
}


//连接环信初始化
var conn='';
function begin(){
  conn = new WebIM.connection({
    isMultiLoginSessions: WebIM.config.isMultiLoginSessions,
    https: typeof WebIM.config.https === 'boolean' ? WebIM.config.https : location.protocol === 'https:',
    url: WebIM.config.xmppURL,
    heartBeatWait: WebIM.config.heartBeatWait,
    autoReconnectNumMax: WebIM.config.autoReconnectNumMax,
    autoReconnectInterval: WebIM.config.autoReconnectInterval,
    apiUrl: WebIM.config.apiURL,
    isAutoLogin: true,
  });
}


/**
 * header文件登陆环信
 * @param {String} myToken 我的token
 */
function getheaderWebIM(myToken){
  myAjax('post',URI+api.getRongIMByMyToken,{token:myToken},function(response){
    var rongImToken = response.token.userId;//得到环信登陆名ex：lpn111
    begin();//初始化
    conn.listen({
      onOpened: function ( message ) {          //连接成功回调
        // console.log('连接成功');  
        setTimeout(function() {
          window.location = document.location.href;
        }, 1000);        
      },  
      onClosed: function ( message ) {
      },         //连接关闭回调
      onTextMessage: function ( message ) {
        //如果储存的数据种，isClick状态==0，表示有消息未读
        var info=JSON.parse(sessionStorage.getItem("msgs"));
        for(var i=0;i<info.length;i++){
          if(info[i].isClick==0){
            $('.red_point').show();
          }
        }
      },    //收到文本消息
      onEmojiMessage: function ( message ) { 
      },   //收到表情消息
      onPictureMessage: function ( message ) {
        //如果储存的数据种，isClick状态==0，表示有消息未读
        var info=JSON.parse(sessionStorage.getItem("msgs"));
        for(var i=0;i<info.length;i++){
          if(info[i].isClick==0){
            $('.red_point').show();
          }
        }
      }, //收到图片消息
      onCmdMessage: function ( message ) {},     //收到命令消息
      onLocationMessage: function ( message ) {},//收到位置消息
      onFileMessage: function ( message ) {},    //收到文件消息
        //收到视频消息
      onPresence: function ( message ) {},       //处理“广播”或“发布-订阅”消息，如联系人订阅请求、处理群组、聊天室被踢解散等消息
      
      onOnline: function () {},                  //本机网络连接成功
      onError: function ( message ) {            //失败回调
        // console.log(3,message)
      },
      onReadMessage: function(message){
      }      //收到消息已读回执
      
    });
      var options = { 
      apiUrl: WebIM.config.apiURL,
      user: rongImToken,
      pwd: 'lpn123654',
      appKey: WebIM.config.appkey
      };
      conn.open(options);
  });
}

/**
 * 环信初始化（创立连接）  
 * @param {String} myToken 我的token
 * @param {String} hisToken 用户token
 * @param {String} hisName 用户名称
 * @param {String} sendMsg 输入框内容
 * @param {String} textType 是否有发送内容 0是没有，1是有
 * @param {String} imgType 是否上传图片 0是没有，1是有
 * //getWebIm(我的token，用户token，用户名称，输入框内容，是否有发送内容，是否上传图片)
 */

//  此处用于储存历史数据
if(sessionStorage.getItem('allMsg')){
  var allMsg=JSON.parse(sessionStorage.getItem('allMsg'));
}else{
  var allMsg=[];
}
if(sessionStorage.getItem('msgs')){
  var msgs=JSON.parse(sessionStorage.getItem('msgs'));
}else{
  var msgs=[];
}
var isclick;
function getWebIM(myid,myToken,hisToken,hisName,sendMsg,textType,imgType){
  
  var myname='';
  var myphoto='';
  var getDef = myAjax('get', URI + api.userMessage, { userId:myid  },
    function (result) {
      myname=result.username;
      myphoto=result.userPhoto;
  })
  myAjax('post',URI+api.getRongIMByMyToken,{token:myToken},function(response){
    var rongImToken = response.token.userId;//得到环信登陆名ex：lpn111
    begin();//初始化
    conn.listen({
      onOpened: function ( message ) {          //连接成功回调
        // console.log('连接成功');
        
        
        if(textType==1){//&&sendMsg!=""
          var endPrivateText = function () {
              var id = conn.getUniqueId();                 // 生成本地消息id
              var msg = new WebIM.message('txt', id);      // 创建文本消息
              msg.set({
                  msg: sendMsg,                  // 消息内容
                  to:hisToken,                           // 接收消息对象（用户id）
                  roomType: false,
                  ext :{'nickName':myname,'avatar':myphoto},
                  success: function (id, serverMsgId) {
                      console.log(serverMsgId,'send private text Success');
                  },
                  fail: function(e){
                      console.log("Send private text error");
                  }
              });
              msg.body.chatType = 'singleChat';
              conn.send(msg.body);
              //储存发送文字的数据
              var oneUser={userid:myid,data:sendMsg,nickName:'我',hisId:hisToken.slice(3)};
              allMsg.push(oneUser);
              // var twoUser={};
              sessionStorage.setItem('allMsg',JSON.stringify(allMsg));


              //处理当对方未登录时，在我的消息处有列表显示
              var getDef = myAjax('get', URI + api.userMessage, { userId: hisToken.slice(3) },
              function (result) {
                // $('.top img').attr('src', result.userPhoto);//头像
                // $('.userName').html(result.username);//昵称
                var two={photo:result.userPhoto,name:result.username,data:sendMsg,userid:hisToken.slice(3),isClick: 1};
                msgs.unshift(two);
                var hash = {};
                msgs = msgs.reduce(function(item, next) {
                    hash[next.name] ? '' : hash[next.name] = true && item.push(next);
                    return item
                }, []);
                sessionStorage.setItem("msgs",JSON.stringify(msgs));
                
              }
            );

          };
          endPrivateText();
          $(".body").scrollTop(50000);//滚动条设置最新消息在底部
        }
        // });
        // 单聊发送图片消息
        if(imgType==1){//&&sendMsg==""
          var sendPrivateImg = function () {
            var id = conn.getUniqueId();                   // 生成本地消息id
            var msg = new WebIM.message('img', id);        // 创建图片消息
            var input = document.getElementById('browerfile');  // 选择图片的input
            var file = WebIM.utils.getFileUrl(input);      // 将图片转化为二进制文件
            //处理当对方未登录时，在我的消息处有列表显示
            var getDef = myAjax('get', URI + api.userMessage, { userId: hisToken.slice(3) },
              function (result) {
                // $('.top img').attr('src', result.userPhoto);//头像
                // $('.userName').html(result.username);//昵称
                var two={photo:result.userPhoto,name:result.username,data:$('.objUrl').attr('src'),userid:hisToken.slice(3),isClick: 1};
                msgs.unshift(two);
                      var hash = {};
                      msgs = msgs.reduce(function(item, next) {
                          hash[next.name] ? '' : hash[next.name] = true && item.push(next);
                          return item
                      }, []);
                sessionStorage.setItem("msgs",JSON.stringify(msgs));
                
              }
            );
            var oneUser={userid:myid,data:$('.objUrl').attr('src'),nickName:'我',hisId:hisToken.slice(3)};
            // console.log(oneUser);
            allMsg.push(oneUser); 
            sessionStorage.setItem('allMsg',JSON.stringify(allMsg));
            var allowType = {
                'jpg': true,
                'gif': true,
                'png': true,
                'bmp': true
            };
            if (file.filetype.toLowerCase() in allowType) {
                var option = {
                    apiUrl: WebIM.config.apiURL,
                    file: file,
                    to: hisToken,                       // 接收消息对象
                    roomType: false,
                    ext :{'nickName':myname,'avatar':myphoto},
                    chatType: 'singleChat',
                    onFileUploadError: function () {      // 消息上传失败
                        console.log('onFileUploadError');
                    },
                    onFileUploadComplete: function () {   // 消息上传成功
                        console.log('onFileUploadComplete');
                    },
                    success: function () {                // 消息发送成功
                        console.log('Success');
                    },
                    flashUpload: WebIM.flashUpload
                };
                msg.set(option);
                conn.send(msg.body);
            }
            //储存发送图片的数据
          };
          sendPrivateImg();
          $(".body").scrollTop(50000);//滚动条设置最新消息在底部
        }            
      },  
      onClosed: function ( message ) {
      },         //连接关闭回调
      onTextMessage: function ( message ) {//收到文本消息
        // console.log(message);
        $('.red_point').show();
        var nick=message.ext.nickName;
        //此处进入私信单聊页面,
        //把所有新的聊天记录储存，环信没有历史消息记录
        // msgs用于处理列表中只显示一条数据
        var one={photo:message.ext.avatar,name:message.ext.nickName,data:message.data,userid:message.from.slice(3),isClick: 1};
        msgs.unshift(one);
              var hash = {};
              msgs = msgs.reduce(function(item, next) {
                  hash[next.name] ? '' : hash[next.name] = true && item.push(next);
                  return item
              }, []);
        sessionStorage.setItem("msgs",JSON.stringify(msgs));
        var oneUser={userid:message.from.slice(3),data:message.data,nickName:message.ext.nickName,hisId:message.from.slice(3)}
        if(allMsg.length<100){
          allMsg.push(oneUser);
          sessionStorage.setItem('allMsg',JSON.stringify(allMsg));
        }
        //此处用于显示在对话框内
        if(message.ext.nickName==hisName){
          var div='<div class="aMsg">'
                    +'<div class="userMsg"><span class="f18 otherName mr12">'+hisName+'</span><span class="f12 time"></span></div>'
                    +'<div class="msg">'
                      +'<div class="reserveMsg">'+getEmojiWebIM(message.data)+'</div>'
                    +'</div>'
                  +'</div>';
          $('.body').append(div);
          // $('.reserveMsg').text(getEmojiWebIM(message.data));
          $(".body").scrollTop(50000);//滚动条设置最新消息在底部
          // $(".red_point").hide();

          msgs.isClick=1;
        }else{
        //此处进入我的消息--列表页
          var fromId=parseInt(message.from.slice(3));
          var getDef = myAjax('get', URI + api.userMessage, { userId:fromId  },
            function (result) {
              var one={photo:result.userPhoto,name:result.username,data:message.data,userid:fromId,isClick: 0};
              msgs.unshift(one);
              var hash = {};
              msgs = msgs.reduce(function(item, next) {
                  hash[next.name] ? '' : hash[next.name] = true && item.push(next);
                  return item
              }, []);
              sessionStorage.setItem("msgs",JSON.stringify(msgs));
              var html="";
              for(var i=0;i<msgs.length;i++){
                var showRedPoint="";
                if(msgs[i].name==nick||msgs[i].isClick==0){
                  showRedPoint='<div class="red_point"></div>';
                }
                var comment="";//allMsg[i].data.slice(0,11)=='data:image/'&&allMsg[i].data.slice(0,22)=='https://a1.easemob.com'
                if(comment.slice(0,22)=='https://a1.easemob.com'  ||comment.slice(0,11)=='data:image/'){
                  comment='[图片]';
                }else{
                  comment=getEmojiWebIM(msgs[i].data);
                }
                //onclick="toWebIm('+msgs[i].userid+')"
                html += '<li class="clearfix" data-userid="'+msgs[i].userid+'">'
                        + '  <div class="img_div fl">'
                        + '    <img src="'+msgs[i].photo+'" class="fl">'
                        + showRedPoint
                        + '  </div>'
                        + '  <p class="p1">'
                        + '    <span class="c_70463a f16">'+msgs[i].name+'</span>'
                        //  + '    <span class="c_a f12 pl20">'+contrastTime(latestMessage.sentTime)+'</span>'
                        + '  </p>'
                        + '  <div class="content_text">'+comment+'</div>'
                        + '</li>';
                      }
              $('#chat_div').html(html);

              $('.default_p').hide();     
              $('#chat_div li').each(function(e,elem){
                var msgs=JSON.parse(sessionStorage.getItem('msgs'));
                $(elem).click(function(e){
                  msgs[$(this).index()].isClick=1;
                  sessionStorage.setItem("msgs",JSON.stringify(msgs));
                  var id=$(this).data('userid');
                  sessionStorage.setItem('userid',JSON.stringify({id:id}));
                  window.location.href = '../../html/news/private.html';
                })
              })
          });
        }
      },    
      onEmojiMessage: function ( message ) { 
      },   //收到表情消息
      onPictureMessage: function ( message ) {//收到图片消息
        $('.red_point').show();//header里面我的头部显示红点
        // console.log(message);//这里要处理，列表页如何显示
        var nick=message.ext.nickName;
        var fromId=parseInt(message.from.slice(3));
        var photo=message.ext.avatar,name=message.ext.nickName;
        
        var twos={nickName:message.ext.nickName,data:message.url,userid:fromId,hisId:fromId};
        var two={photo:photo,name:name,data:message.url,userid:fromId,isClick:0};
        msgs.unshift(two);//同一个用户名只显示一条数据
        var hash = {};
        msgs = msgs.reduce(function(item, next) {
            hash[next.name] ? '' : hash[next.name] = true && item.push(next);
            return item
        }, []);
        sessionStorage.setItem("msgs",JSON.stringify(msgs)); 
        if(allMsg.length<100){
          allMsg.push(twos);
          sessionStorage.setItem('allMsg',JSON.stringify(allMsg));
        }
        var html="";
        for(var i=0;i<msgs.length;i++){
          var comment="";
          if(msgs[i].data.slice(0,11)=='data:image/'||msgs[i].data.slice(0,22)=='https://a1.easemob.com'){//allMsg[i].data.slice(0,11)=='data:image/'                                                                                   
            comment='[图片]';
          }else{
            comment=getEmojiWebIM(msgs[i].data);
          }
          var showRedPoint="";
          if(msgs[i].name==nick||msgs[i].isClick==0){
            showRedPoint='<div class="red_point"></div>';
          }
          // if(msgs[i].name==nick){
            html += '<li class="clearfix" data-userid="'+msgs[i].userid+'">'
                    + '  <div class="img_div fl">'
                    + '    <img src="'+msgs[i].photo+'" class="fl">'
                    + showRedPoint
                    + '  </div>'
                    + '  <p class="p1">'
                    + '    <span class="c_70463a f16">'+msgs[i].name+'</span>'
                    //  + '    <span class="c_a f12 pl20">'+contrastTime(latestMessage.sentTime)+'</span>'
                    + '  </p>'
                    + '  <div class="content_text">'+comment+'</div>'
                    + '</li>';
            }
            $('#chat_div').html(html);
            // msgs[i].isClick=1;
          // }

        $('#chat_div li').each(function(e,elem){
          // console.log($(elem));
          var msgs=JSON.parse(sessionStorage.getItem('msgs'));
          $(elem).click(function(e){
            msgs[$(this).index()].isClick=1;
            sessionStorage.setItem("msgs",JSON.stringify(msgs));
            var id=$(this).data('userid');
            sessionStorage.setItem('userid',JSON.stringify({id:id}));
            window.location.href = '../../html/news/private.html';
          })
        })

        
        $('.default_p').hide(); 
        if(message.ext.nickName==hisName){
          var div='<div class="aMsg">'
                      +'<div class="userMsg"><span class="f18 otherName mr12">'+hisName+'</span><span class="f12 time"></span></div>'
                      +'<div class="msg">'
                        +'<img width="168px" height="168px" class="reserverImg" src="'+message.url+'"/>'
                      +'</div>'
                    +'</div>';
          $('.body').append(div);
          for(var i=0;i<msgs.length;i++){
            if(msgs[i].name==message.ext.nickName){
              msgs[i].isClick=1;
            }
          }
          sessionStorage.setItem("msgs",JSON.stringify(msgs)); 
          $(".body").scrollTop(50000);
        }
        

        $('.msg img').each(function(e,elem){
          $(elem).click(function(e){
            bigImage($(e.target).attr('src'));
          })
        })
      }, 
      onCmdMessage: function ( message ) {},     //收到命令消息
      onLocationMessage: function ( message ) {},//收到位置消息
      onFileMessage: function ( message ) {},    //收到文件消息
        //收到视频消息
      onAudioMessage: function ( message ) {
        if(message){
          failMessage('接受到语音消息，请下载搭美app进行查看');
          return false;
        }
      },   //收到音频消息
      onPresence: function ( message ) {},       //处理“广播”或“发布-订阅”消息，如联系人订阅请求、处理群组、聊天室被踢解散等消息
      
      onOnline: function () {},                  //本机网络连接成功
      onError: function ( message ) {            //失败回调
        console.log(3,message)
      },
      onReadMessage: function(message){//收到消息已读回执
      }     
      
    });
      var options = { 
      apiUrl: WebIM.config.apiURL,
      user: rongImToken,
      pwd: 'lpn123654',
      appKey: WebIM.config.appkey
      };
      conn.open(options);

  });
}


/**
 * 环信退出登录，打印退出成功
 * @param {String} myToken token:处理后的token
 * @param {String} json 预留的方法入口
 */
function outWebIM(myToken){
  // 头部连接
  begin();
  conn.close();
  sessionStorage.removeItem('allMsg');
  sessionStorage.removeItem('msgs');
  sessionStorage.removeItem('userid');
  console.log('环信退出成功');
}


/**
 * 封装了通用的点击小图看大图       
 * @param {String} ojbUrl 图片路径
 */
function bigImage(ojbUrl) {
  $('.common_dialog_div').remove();
  var div = document.createElement('div');
  div.className = 'common_dialog_div';
  div.style.display = 'none';
  div.innerHTML = '<div class="black_div"></div>'
    + '<div class="table_cell">'
    + '<div class="white_div2">'
    + '<div class="close_btn clearfix">'
    + '<img class="fr" src="../../img/icon_delete_04.png">'
    + '</div>'
    + '<div class="icon_div mt20">'
    + '<img src="'+ojbUrl+'">'
    + '</div>'
    + '</div>';
  + '</div>';
  $('body').append(div);
  $('.common_dialog_div').fadeIn('fast');
  $('.common_dialog_div').click(function () {
    $(this).hide();
    setTimeout(function () {//在mac的谷歌上有点bug 要延迟一下
      $('.common_dialog_div').remove();
    }, 100)
  })
}