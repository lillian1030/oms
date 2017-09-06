qyApp.controller("commercialInfoEditController", function ($scope, $http, Upload, $route, $state,$stateParams) {
	
	//处理登陆人员信息
	$scope.userInfo = eval('(' + localStorage.userInfo + ')');
	//处理路由参数
	var roleId=$stateParams.uiParams.roleId;
	if (roleId == "2") {
        $scope.canSelect = true;
        $scope.userId = $scope.userInfo.userId;
    }
	$scope.orgInfo=$stateParams.uiParams.orgInfo;
	$scope.source= $stateParams.uiParams.source;
	var sourceType=$stateParams.uiParams.type;
	if(sourceType=="1"){
		$scope.source.push({level:$scope.source.length,name:"commercialInfoEdit"});
	}
	//路由统一返回方法
	$scope.goback = function() {
		$scope.source.splice($scope.source.length-1,1);
		$state.go($scope.source[$scope.source.length-1].name, {
			uiParams: {
				"source":$scope.source,
				"type":"2"
			}
		})
	}
	
    //地区联动
    $scope.province;
    $scope.city;
    $scope.district;
    //请求省文件
    $scope.initprovinces = function () {
        for (var i = 0; i < $scope.provinces.length; i++) {
            if ($scope.provinces[i].name == $scope.orgInfo.province) {
                $scope.provinceId = $scope.provinces[i].id;
            }
        }
    }
    $http.get('/oms/static/base/json/province.json').success(function (data) {
        $scope.provinces = data;
        $scope.initprovinces();
    });
    //请求市文件
    $scope.initcitys = function () {
        if ("" != $scope.provinceId) {
            for (var i = 0; i < $scope.citys[$scope.provinceId].length; i++) {
                if ($scope.citys[$scope.provinceId][i].name == $scope.orgInfo.city) {
                    $scope.cityId = $scope.citys[$scope.provinceId][i].id;
                }
            }
        }
    }
    $http.get('/oms/static/base/json/city.json').success(function (data) {
        $scope.citys = data;
        $scope.initcitys();
    });
    //请求区文件
    $http.get('/oms/static/base/json/district.json').success(function (data) {
        $scope.districts = data;
    });
    
  //获取运营人员
    $scope.getUserList=function() {
    	var roleIds="2";
        var jsonObject = "{\"orgId\":\"" + $scope.userInfo.orgId + "\",\"roleIds\":\"" + roleIds + "\",\"nub\":\"0\",\"size\":\"0\"}";
        $http({
            method: 'post',
            url: cas +
                'user/getUserList',
            params: {
                keyParams: getKeyParams(
                    jsonObject, keyParams),
                jsonObject: getJsonObject(jsonObject)
            }
        }).success(function (data, stauts, headers, config) {
            if (data.code == "1") {
                $scope.userList = data.data.userList;
            } else {
                alertmsg(data.msg, "error")
            }
        })
    }
    //编辑商户信息后确认保存
    $scope.sureToSaveEdit = function (editShopLogo) {
        $scope.UsedJsonObject = {
            orgId: $scope.orgInfo.orgId,
            shopLogo: editShopLogo,
            userName: "",
            password: ""
        }
        $scope.jsonObject = $("#merchantEditForm").serializeJson();
        $scope.jsonObject = JSON.parse($scope.jsonObject);
        $scope.jsonObject = $.extend($scope.UsedJsonObject, $scope.jsonObject);
        $scope.jsonObject = JSON.stringify($scope.jsonObject);
        $http({
            method: 'post',
            url: pos + 'shop/updateMerchantTB',
            params: {
                keyParams: getKeyParams($scope.jsonObject, keyParams),
                jsonObject: getJsonObject($scope.jsonObject)
            }
        }).success(function (data, stauts, headers, config) {
            if (data.code == "1") {
            	$scope.goback();
            }
        })
    }
    
    //初始化数据
    //运营人员
    $scope.getUserList();
    $scope.uploadshopLogoa = function (files) {
        if (files && files.length) {
            $scope.files = files;
            var imageUrl = "Logo/" + $scope.orgId + "/Logo/";
            jsonObject = "{\"imageUrl\":\"" + imageUrl + "\"}";
            for (var i = 0; i < files.length; i++) {
                Upload.upload({
                    //服务端接收
                    url: pos + 'imageUpload/addShopImage',
                    //上传的同时带的参数
                    data: {
                        keyParams: getKeyParams(jsonObject, keyParams),
                        jsonObject: getJsonObject(jsonObject)
                    },
                    file: files[i]
                }).success(function (data, status, headers, config) {
                    if (data.code == "1") {
                        //上传成功
                        $scope.shopLogo = data.data.imagesPath;
                        $scope.orgInfo.shopLogo = $scope.shopLogo;
                       // $("#shopLogoa").attr("src", $scope.shopLogo);
                    } else {
                        alertmsg(data.msg)
                    }
                }).error(function (data, status, headers, config) {
                    //上传失败
                    console.log('error status: ' + status);
                });
            }

        }
    };
});