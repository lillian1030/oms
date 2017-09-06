<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!-- 头部 -->
<jsp:include page="public/headpage.jsp"/>
<!-- 主要 -->
<body class="login-wrap">
<!---- Content start ---->
	<div class="topnav">
		<div class="content-nav">
			<img src="http://static.qineasy.com/base/images/login-topLogo.png" alt="勤易通全渠道零售管理平台" title="勤易通全渠道零售管理平台" />
		</div>		
	</div>
	<div class="login-banner">
		<div class="login-panel">
			<form id="loginform" method="post">
				<h2 class="loginTitl">帐号登录</h2>
				<div class="loginInpts">
					<div class="input-group">
                        <div class="input-group-addon"><i class="fa fa-user"></i></div>
                        <input type="text" id="userName" name="userName" class="form-control" placeholder="请输入手机号" maxLength="11" pattern='[\+]\d{2}[\(]\d{2}[\)]\d{4}[\-]\d{4}'  onKeypress="if (event.keyCode < 48 || event.keyCode > 57) event.returnValue = false;">
                    </div>
                    <div class="input-group">
                        <div class="input-group-addon"><i class="fa fa-lock"></i></div>
                        <input type="password" name="passWord" class="form-control" placeholder=" 请输入密码" />
                    </div>
					<div class="fn-clear"></div>
				</div>
				<button type="button" class="btn btn-primary" onClick="save()">登&nbsp;&nbsp;录</button>
				<a class="registerTip mgr20" href="register.jsp">新用户注册</a>
			</form>
		</div>
		<div class="fn-clear"></div>
	</div>
	<div class="login-intro">
		<div class="content-nav">
			<div class="login-intro-item">
				<h2>电商店铺集中管理</h2>
				<p>支持同时管理多个平台（如淘宝、微店、京东、天猫等等）的多个店铺，集中管理效率倍增。</p>
			</div>
			<div class="login-intro-item">
				<h2>商品一键发布</h2>
				<p>支持一键发布多个平台多个店铺的商品，高效管理商品发布。</p>
			</div>
			<div class="login-intro-item">
				<h2>图片管理高效简单</h2>
				<p>统一管理素材图片和正式图片库，使图片管理更高效更简单。</p>
			</div>
			<div class="login-intro-item">
				<h2>多店铺订单集中管理</h2>
				<p>系统可集中管理各平台下所有店铺的订单信息，使订单管理更全面更便捷。</p>
			</div>
			<div class="fn-clear"></div>
		</div>
	</div>
	<!---- Foot start ---->
	<div class="login-botom">
		<div class="login-botom-top">
			<span class="footLab">合作平台：</span>
			<img src="http://static.qineasy.com/base/images/logo_alibaba.png" />
			<img src="http://static.qineasy.com/base/images/logo_taobao2.png" />
			<img src="http://static.qineasy.com/base/images/logo_tianmao.png" />
			<img src="http://static.qineasy.com/base/images/logo_jingdong.png" />
			<img src="http://static.qineasy.com/base/images/logo_login_1688.png" />
			<img src="http://static.qineasy.com/base/images/logo_login_AliExpress.png" />
			<img src="http://static.qineasy.com/base/images/logo_login_amazon.png" />
			<div class="fn-clear"></div>
		</div>
		<p class="company-name">杭州勤易科技有限公司</p>
		<p>电话：0571-89935197</p>
		<p>地址：杭州市西湖区文一西路98号数娱大厦8楼801室</p>
		<div class="loginfooter">
			<p>Copyright 2016, 杭州勤易科技有限公司，浙ICP备16003578号</p>
			<p><img src="http://static.qineasy.com/base/images/gabz.png" />浙公网安备 33010502002055号</p>
		</div>
		<!--二维码-->
		<div class="codeBox">
			<img  src="http://static.qineasy.com/base/images/icon_code.png" />
			<p>扫一扫关注勤易通</p>
		</div>
	</div>
	<!---- Foot end ---->
	    
<!---- Content end ---->

<script type="text/javascript">	
	$(function(){
		var cas=localStorage.cas;
		var pos=localStorage.pos;
		var ss=localStorage.ss;
		var stat=localStorage.stat;
		//关闭websocket
		wsCloseConnect();
		//清理localStorage
		localStorage.clear();
		localStorage.cas=cas;
		localStorage.pos=pos;
		localStorage.ss=ss;
		localStorage.stat=stat;
		localStorage.keyParams="{}";
	})
	function loadMenuRoute(keyParams) {
			$.ajax({
				async: false,
				type: "post",
				url: cas + "/priv/getRoute",
				data: {
					keyParams: getKeyParams("{}", keyParams),
					jsonObject: getJsonObject("{}")
				},
				success: function(data) {
					var jsonObj = JSON.parse(data);
					var routeList = JSON.stringify(jsonObj.data.routeList);
					sessionStorage.routeList = routeList;
					sessionStorage.routeList1 = routeList;
				}
			})
		}
    function save(){
   		var userName = $('#userName').val();
   		var tel = /^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/;
   		if(!tel.test(userName)){
   			alertmsg("请输入正确的手机号!","error");
   		}else{
   			var keyParams='{"timestamp":"","duid":"duid","token":"","userId":"","appKey":"aZ23dA4S4I","orgId":"","brandId":""}'; 		
	        var url=cas+"user/userlogin";
	        var jsonObject = $("#loginform").serializeJson();
			$.ajax({
				async:true,
				type:"post",
				url:url,
				data : {keyParams:getKeyParams(jsonObject,keyParams),
						jsonObject:getJsonObject(jsonObject)},
				success : function(data) {
					var json = $.parseJSON(data);	
					if(json.code=='1'){
						var object=json.data.user;
						var keyParams={"timestamp":object.timestamp,"duid":"duid","token":object.token,"userId":object.userId,"appKey":object.appKey,"orgId":object.orgId,"brandId":object.brandId};
		    			localStorage.keyParams=JSON.stringify(keyParams);
		    			loadMenuRoute(localStorage.keyParams);
						localStorage.userInfo=JSON.stringify(object);
						loadMenuRoute(localStorage.keyParams)
						window.location.href="index.jsp";
					}else{
						alertmsg("手机号或密码错误","error");
					}
				},
				error:function(XMLHttpRequest, textStatus, errorThrown){
					 alert("系统异常!","error");
			    }
			})
   		}
    }
	function loadMenuRoute(keyParams) {
			$.ajax({
				async: false,
				type: "post",
				url: cas + "/priv/getRoute",
				data: {
					keyParams: getKeyParams("{}",keyParams),
					jsonObject: getJsonObject("{}")
				},
				success: function(data) {
					var jsonObj = JSON.parse(data);
					var routeList = JSON.stringify(jsonObj.data.routeList);
					sessionStorage.routeList1 = routeList;
				}
			})
		}
	$(function(){    
	  	$("body").keydown(function() {
	        if (event.keyCode == "13") {
	            save();
	        }
	    });
	})
	

</script>

</body>
</html>
