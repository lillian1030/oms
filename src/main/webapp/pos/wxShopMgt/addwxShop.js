qyApp.controller('addwxShopController', function($state, $stateParams, $scope, $http, $compile, Upload) {
	$scope.orgId = angular.fromJson(keyParams).orgId;
	if($stateParams.uiParams.type == "1") {
		$stateParams.uiParams.routeState.push({
			name: "addwxShop",
			level: "2"
		})
	}
	$scope.pageSize = "10";
	$scope.from = "0";
	$scope.shopProp = "2";
	$scope.shopLists = new Array();
	/*上传微店商户logo*/
	//新增颜色(上传图片并回显)
	$scope.imagesPath = "../static/base/images/icon_upload.png";
	$scope.uploadFiles = function(files) {
			if(files && files.length) {
				$scope.files = files;
				var imageUrl = $scope.orgId + "/color/";
				jsonObject = "{\"imageUrl\":\"" + imageUrl + "\"}";
				for(var i = 0; i < files.length; i++) {
					Upload.upload({
						url: pos + 'imageUpload/addShopImage',
						data: {
							keyParams: getKeyParams(jsonObject, keyParams),
							jsonObject: getJsonObject(jsonObject)
						},
						file: files[i]
					}).success(function(data, status, headers, config) {
						//上传成功
						$scope.imagesPath = data.data.imagesPath;
					}).error(function(data, status, headers, config) {
						//上传失败
						console.log('error status: ' + status);
					});
				}
			}
		}
		//地区联动
	$scope.province;
	$scope.city;
	$scope.district;
	//请求省文件
	$scope.initprovinces = function() {
		for(var i = 0; i < $scope.provinces.length; i++) {
			if($scope.provinces[i].name == $scope.shopList[0].province) {
				$scope.provinceId = $scope.provinces[i].id;
			}
		}
	}
	$http.get('/oms/static/base/json/province.json').success(function(data) {
		$scope.provinces = data;
	});
	//请求市文件
	$scope.initcitys = function() {
		if("" != $scope.provinceId) {
			for(var i = 0; i < $scope.citys[$scope.provinceId].length; i++) {
				if($scope.citys[$scope.provinceId][i].name == $scope.shopList[0].city) {
					$scope.cityId = $scope.citys[$scope.provinceId][i].id;
				}
			}
		}
	}
	$http.get('/oms/static/base/json/city.json').success(function(data) {
		$scope.citys = data;
	});
	//请求区文件
	$http.get('/oms/static/base/json/district.json').success(function(data) {
		$scope.districts = data;
	});
	/*//	查询行业类型	*/
	$scope.type = "";
	$scope.searchTypeBase = function() {
		var jsonObject = {
			appId: "4",
			type: "shopIndustry",
			typeSecond: ""
		};
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'typeBase/getTypeBase',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data) {
			if(data.code == 1) {
				$scope.types = [{
					name: "请选择",
					value: ""
				}].concat(data.data.types);
			} else {
				alertmsg(data.msg, "error");
			}
		});
	}
	$scope.searchTypeBase();
	/*点击确认开通微店按钮*/
	$scope.saveWxShop = function(province, city) {
		var jsonObject = {
			orgId: $scope.orgId,
			province: province,
			city: city,
			district: "",
			shopName: $scope.shopName,
			shopInfo: "",
			contacts: $scope.contacts,
			shopTel: $scope.shopTel,
			shopAddr: "",
			shopNum: "",
			acreage: "",
			shopType: "",
			shopUrl: "http:" + qineasy + "vip/payForPro/index.jsp?orgId=",
			shopIndustry: "",
			shopProp: $scope.shopProp,
			shopLogo: $scope.imagesPath,
			shopIndustry: $scope.type

		};
		$scope.jsonObject = jsonObject;
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'shop/addMerchantShop',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data) {
			if(data.code == 1) {
				$scope.getOrgId = data.data.orgId;
				$scope.addSuccess($scope.getOrgId);
			} else {
				alertmsg(data.msg, "error");
			}
		});
	};
	//	跳转到微店开通页面
	$scope.addSuccess = function(getOrgId) {
			$scope.jsonObject.shopUrl = "http:" + qineasy + "vip/payForPro/index.jsp?orgId=" + getOrgId;
			$scope.jsonObject.createTime = getNowFormatDate();
			$state.go("addwxShopSuccess", {
				uiParams: {
					routeState: $stateParams.uiParams.routeState,
					routeParams: $scope.jsonObject,
					type: "1"
				}
			})
		}
		/*点击继续添加微店页面*/
	$scope.goback = function() {
		$stateParams.uiParams.routeState.splice($stateParams.uiParams.routeState.length - 1, 1);
		$state.go($stateParams.uiParams.routeState[$stateParams.uiParams.routeState.length - 1].name, {
			uiParams: {
				routeState: $stateParams.uiParams.routeState,
				routeParams: $scope.jsonObject,
				type: "2"
			}
		})
	}

	function getNowFormatDate() {
		var date = new Date();
		var seperator1 = "-";
		var seperator2 = ":";
		var month = date.getMonth() + 1;
		var strDate = date.getDate();
		if(month >= 1 && month <= 9) {
			month = "0" + month;
		}
		if(strDate >= 0 && strDate <= 9) {
			strDate = "0" + strDate;
		}
		var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
			" " + date.getHours() + seperator2 + date.getMinutes() +
			seperator2 + date.getSeconds();
		return currentdate;
	}
})