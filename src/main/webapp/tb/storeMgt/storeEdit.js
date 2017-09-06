qyApp.controller("storeEditController", ["$scope", "$http", "Upload","$route", "$state", "$stateParams", function($scope, $http, Upload,$route, $state, $stateParams) {
	//帐号密码
	$scope.thirdUserName="";
	$scope.thirdPassWord="";
	if($stateParams.uiParams != "") {
		$scope.shopTypeEdit = $stateParams.uiParams.shop.shopType;
		if($stateParams.uiParams.shop.shopName!=undefined){
			$scope.shopNameEdit = $stateParams.uiParams.shop.shopName;
		}else{
			$scope.shopNameEdit = $stateParams.uiParams.shop.orgName;
		}
		$scope.shopUrlEdit = $stateParams.uiParams.shop.shopUrl;
		$scope.shopOrgIdEdit = $stateParams.uiParams.shop.orgId;
		$scope.shopNumEdit = $stateParams.uiParams.shop.shopNum;
		$scope.thirdUserName = $stateParams.uiParams.shop.thirdUserName;
		$scope.thirdPassWord = $stateParams.uiParams.shop.thirdPassWord;
	}
	//修改店铺类型
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
	//修改店铺资料
	$scope.surEditStore = function() {
			if($scope.shopType == '') {
				alertmsg("请选择加盟类型", "error");
				return false;
			}
			if($scope.shopNameEdit == undefined || $scope.shopNameEdit.trim().length < 1 || $scope.shopNameEdit.trim().length > 13) {
				alertmsg("请正确填写1-13位字符店铺名称", "error");
				return false;
			}
			if($scope.shopUrlEdit == undefined || $scope.shopUrlEdit.trim().length < 1 || $scope.shopUrlEdit.trim().length > 120) {
				alertmsg("请添加店铺网址", "error");
				return false;
			}
			if(!($scope.shopUrlEdit.startsWith("http://")||$scope.shopUrlEdit.startsWith("https://"))){
				alertmsg("请输入http://或https://开头的店铺网址", "error");
				return;
			}
			var jsonObject = {
				"shopName": $scope.shopNameEdit,
				"city": '',
				"district": '',
				"shopInfo": '',
				"orgId": $scope.shopOrgIdEdit,
				"shopType": $scope.shopType,
				"shopUrl": $scope.shopUrlEdit,
				"shopLogo": '',
				"shopProp": '',
				"openingTime": '',
				"closingTime": '',
				"acreage": '',
				"region": '',
				"shopAddr": '',
				"shopTel": '',
				"contacts": '',
				"shopLevel": '',
				"shopNum": '',
				"thirdUserName":$scope.thirdUserName,
				"thirdPassWord":$scope.thirdPassWord
			};
			jsonObject = JSON.stringify(jsonObject);

			$http({
				method: 'post',
				url: pos + 'shop/updateShop',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					$scope.goback();
				} else {
					alertmsg("修改店铺资料失败", "error");
				}
			})
		}
	if($stateParams.uiParams.type == "1") {
		$stateParams.uiParams.source.push({
			level: $stateParams.uiParams.source.length,
			name: "storeEdit"
		})
	}
	/*点击返回按钮*/
	$scope.goback = function() {
			$stateParams.uiParams.source.splice($stateParams.uiParams.source.length - 1, 1);
			$state.go($stateParams.uiParams.source[$stateParams.uiParams.source.length - 1].name, {
				uiParams: {
					"source": $stateParams.uiParams.source,
					"type": "2"

				}
			})
		}	
}]);