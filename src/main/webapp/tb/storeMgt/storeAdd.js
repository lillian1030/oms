qyApp.controller("storeAddController", ["$scope", "$http", "Upload","$route", "$state", "$stateParams", function($scope, $http, Upload,$route, $state, $stateParams) {
	var userInfo = JSON.parse(localStorage.userInfo);
	//帐号密码
	$scope.thirdUserName="";
	$scope.thirdPassWord="";
	console.log($stateParams.uiParams)
	if($stateParams.uiParams!=""){
		$scope.orgType = $stateParams.uiParams.orgType;
		if($scope.orgType==1){
			$scope.orgTypeShow=1;
		}else{
			$scope.orgTypeShow=6;
		}
	}
	/*代运营增加店铺的页面代码orgManage/getOrgListTB*/
	$("#forwardaddForm .shopparent").on("click", function(e) {
		e.stopPropagation();
		$(".simulateSelect").toggle();
		$("#forwardaddForm .orgshopName").val("");
		$(window).on("click", function(event) {
			if(event.target.className != "shopparent" && event.target.className != "searchpart" && event.target.className != "fangda" && event.target.tagName != "INPUT" && event.target.className != "selectLi") {
				$(".simulateSelect").hide();
			}
		})
		if($(".simulateSelect").css("display") == "block") {
			var jsonObject = "{\"userId\":\"" + userInfo.userId + "\",\"shopName\":\"" + "" + "\",\"nub\":\"" + "" + "\",\"size\":\"" + "" + "\"}";
			$scope.loadOrgList(jsonObject);
		}
	});
	//	加载下拉框的接口函数
	$scope.loadOrgList = function(jsonObject) {
		$http({
			method: 'post',
			url: stat + 'orgManage/getOrgListTB',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.orgManageLists = data.data.orgManageList;
			} else {
//				alertmsg(data.msg, "error")
			}
		})
	}
	$scope.loadOrgList("{\"userId\":\"" + userInfo.userId + "\",\"shopName\":\"" + "" + "\",\"nub\":\"" + "" + "\",\"size\":\"" + "" + "\"}")
	$("#forwardaddForm .selectePart").on("click", "li", function() {
		var thisHtml = $(this).html();
		var thisId = $(this).attr("data-Id");
		$(this).parents(".simulateSelect").hide().prev().attr("data-selectId", thisId).find("span").html(thisHtml)
	});
	$scope.searchOrgList=function(){
		var jsonObject = "{\"userId\":\"" + userInfo.userId + "\",\"shopName\":\"" + $scope.orgshopName + "\",\"nub\":\"" + "" + "\",\"size\":\"" + "" + "\"}";
		$scope.loadOrgList(jsonObject)
	}
	$scope.orgId = JSON.parse(keyParams).orgId;
		//门店类别 0阿里巴巴 1速卖通 2亚马逊 3淘宝4天猫5京东
	$scope.shopType = '2';
		//选择加盟网点类型
	$scope.selectType = function(type) {
			if(type == '3') {
				$scope.shopType = '3';
			}
			if(type == '4') {
				$scope.shopType = '4';
			}
			if(type == '5') {
				$scope.shopType = '5';
			}
			if(type == '0') {
				$scope.shopType = '0';
			}
			if(type == '1') {
				$scope.shopType = '1';
			}
			if(type == '2') {
				$scope.shopType = '2';
			}
			return $scope.shopType;
		}
	/*点击确认额添加按钮*/
	$scope.sureAddForwardStore = function() {
		if($scope.shopType == '') {
			alertmsg("请选择加盟类型", "error");
			return false;
		}
		if($scope.addShopName == undefined || $scope.addShopName.trim().length < 1 || $scope.addShopName.trim().length > 13) {
			alertmsg("请正确填写1-13位字符店铺名称", "error");
			return false;
		}
		if($scope.addShopUrl == undefined || $scope.addShopUrl.trim().length < 1 || $scope.addShopUrl.trim().length > 120) {
			alertmsg("请添加店铺网址", "error");
			return false;
		}
		if(!($scope.addShopUrl.startsWith("http://")||$scope.addShopUrl.startsWith("https://"))){
			alertmsg("请输入http://或https://开头的店铺网址", "error");
			return;
		}
		if($stateParams.uiParams.orgType==1){
			$scope.ForwardorgId = $scope.orgId;
		}else{
			$scope.ForwardorgId = $("#forwardaddForm .shopparent").attr("data-selectid");
		}
		var jsonObject = {
			"orgId": $scope.ForwardorgId,
			"province": '',
			"city": '',
			"district": '',
			"shopName": $scope.addShopName,
			"shopInfo": '',
			"contacts": '',
			"shopTel": '',
			"shopAddr": '',
			"shopNum": '',
			"acreage": '',
			"shopType": $scope.shopType,
			"shopUrl": $scope.addShopUrl,
			"shopProp": "3",
			"thirdUserName":$scope.thirdUserName,
			"thirdPassWord":$scope.thirdPassWord
		};
		jsonObject = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'shop/addMerchantShop',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.goback();
			} else {
				alertmsg("增加店铺失败", "error");
			}
		})
	}
	if($stateParams.uiParams.type == "1") {
		$stateParams.uiParams.source.push({
			level: $stateParams.uiParams.source.length,
			name: "storeAdd"
		})
	}
	/*点击返回按钮*/
	$scope.goback = function() {
		$stateParams.uiParams.source.splice($stateParams.uiParams.source.length - 1, 1);
		$stateParams.uiParams.type=="2";
		$state.go($stateParams.uiParams.source[$stateParams.uiParams.source.length - 1].name, {
			uiParams: $stateParams.uiParams
		})
	}
	
	//查询店铺
	
	$scope.getMerchantShop = function() {
		var nub = 0;
		var size = 10;
		$scope.roleType = '1';
		var jsonObject1 = "{\"orgId\":\"" + $scope.orgId + "\",\"nub\":\"" + nub + "\",\"size\":\"" + size + "\"}";
		if(userInfo.orgType == "6") {
			$http({
				method: 'post',
				url: pos + 'shop/getShopTB',
				params: {
					keyParams: getKeyParams(jsonObject1, keyParams),
					jsonObject: getJsonObject(jsonObject1)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					$scope.shopList = data.data.shopList;
					console.info($scope.shopList);
					
				} else {
					alertmsg("获取商户失败", "error");
				}
			});
		}
	}
	$scope.getMerchantShop(); 
	//校验店铺名是否已存在
	$scope.userNameWarn=false;
    $scope.checkShopName=function(){
		for(var n=0;n<$scope.shopList.length;n++){
			if($scope.addShopName == $scope.shopList[n].orgName){
				$scope.userNameWarn=true;
				$('#addForwardStore').prop({'disabled':true});
			}else{
				$scope.userNameWarn=false;
				$('#addForwardStore').prop({'disabled':false});
			}
		}
	}

	
	
}]);