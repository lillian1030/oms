qyApp.controller("commercialAddController", function ($scope, $http, Upload, $route, $state,$stateParams) {
	//处理登陆人员信息
	$scope.userInfo = eval('(' + localStorage.userInfo + ')');
	//处理路由参数
	$scope.source= $stateParams.uiParams.source;
	$scope.addtype= $stateParams.uiParams.addtype;
	
	var sourceType=$stateParams.uiParams.type;
	if(sourceType=="1"){
		$scope.source.push({level:$scope.source.length,name:"commercialAdd"});
	}
	//路由统一返回方法
	$scope.goback = function() {
		$scope.source.splice($scope.source.length-1,1);
		if($scope.addtype=='2'){
			$state.go('contractAdd', {
				uiParams: {
					"source":$scope.source,
					"type":"2",
					"orgInfo":{
						"orgId":undefined
					}
				}
			})
		}else{
			$state.go($scope.source[$scope.source.length-1].name, {
				uiParams: {
					"source":$scope.source,
					"type":"2"
				}
			})
		}		
	}
	
	//地区联动
    $scope.province;
    $scope.city;
    $scope.district;
	//请求省文件
	$http.get('/oms/static/base/json/province.json').success(function (data) {
        $scope.provinces = data;
    });
    //请求市文件
    $http.get('/oms/static/base/json/city.json').success(function (data) {
        $scope.citys = data;
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
    $scope.getUserList();
    $scope.checkUserName=function(name){
		if(name==""){
			return;
		}
		checkUserByName(name);
	}
   function checkUserByName(userName) {
        var jsonObject = "{\"userName\":\"" + userName + "\"}";
        $http({
            method: 'post',
            url: cas +
                'user/userExistsCheck',
            params: {
                keyParams: getKeyParams(
                    jsonObject, keyParams),
                jsonObject: getJsonObject(jsonObject)
            }
        }).success(function (data, stauts, headers, config) {
            if (data.code == "1") {
                var flag = data.data.flag;
                if (flag == undefined) {
                    $scope.userNameWarn = true;
                }
                if ("true" == flag) {
                    $scope.userNameWarn = true;
                } else {
                    $scope.userNameWarn = false;
                }
            } else {
                $scope.registerForm.userName = "";
                alertmsg(data.msg);
            }
        })
    }
    
	//添加商户
	$scope.addMerchant = function (obj) {
		console.log(obj)
        if ($scope.userNameWarn == true) {
            alertmsg("该帐号已经存在", "error");
        } else {
            var jsonObject = $("#merchantForm").serializeJson();
            jsonObject = JSON.parse(jsonObject);
           if(obj.province!=undefined||obj.city!=undefined){
	           var province = obj.province.name;
	            var city = obj.city.name;
           }else{
           		obj.province='';
           		obj.city='';
           }
            if (obj.district == undefined) {
                var district = "";
            } else {
                var district = obj.district.name;
            }
            //var userIds = obj.userIds;
            var shopLogo = $('#shopLogo').attr('src');
            var trueNameq = $("#trueNamea").val();
            var email = $("#email").val();
            jsonObject.province = province;
            jsonObject.city = city;
            jsonObject.district = district;
            //jsonObject.userIds = userIds;
            jsonObject.shopLogo = shopLogo;
            jsonObject.trueName = trueNameq;
            jsonObject.email = email;
            jsonObject = JSON.stringify(jsonObject);
            $http({
                method: 'post',
                url: pos + 'shop/addMerchantTB',
                params: {
                    keyParams: getKeyParams(jsonObject, keyParams),
                    jsonObject: getJsonObject(jsonObject)
                }
            }).success(function (data, stauts, headers, config) {
               console.log(data)
               if (data.code == 1) {
                	$scope.goback();
                } else {
                    alertmsg("添加商户失败", "error");
                }
            })
        }
    }
	$scope.uploadshopLogo = function (files) {
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
                            $("#shopLogo").attr("src", $scope.shopLogo);
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
        
        //获取商户列表
        $scope.getCommercia=function(){
			$http({
                method: 'post',
                url: stat + 'orgManage/getOrgListTB',
                params: {
                    keyParams: getKeyParams('{}', keyParams),
                    jsonObject: getJsonObject('{}')
                }
            }).success(function (data, stauts, headers, config) {
                if (data.code == 1) {
                	$scope.commercia = data.data.orgManageList;                	
                } else {
                    alertmsg("添加商户失败", "error");
                }
            })
		}
        $scope.getCommercia();
        // 校验商户名是否已存在
        $scope.userNameWarn=false;
        $scope.checkCmName=function(){
			for(let n=0;n<$scope.commercia.length;n++){
				if($scope.shopName == $scope.commercia[n].shopName){
					$scope.userNameWarn=true;
					$('#addmerchantBtn').prop({'disabled':true});
				}else{
					$scope.userNameWarn=false;
					$('#addmerchantBtn').prop({'disabled':false});
				}
			
			}
		}
     
});