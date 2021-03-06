qyApp.controller('wdOrderDetailController', ['$scope', '$http', '$compile', '$state', '$stateParams','Upload', function($scope, $http, $compile, $state, $stateParams, Upload) {
	$(".mask-container").center();
	//地区联动
    
    $scope.test={
		province:{},
		city:{},
		district:{}
    }
    
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
    
    $scope.editLogitic=false;
    $scope.editLogiticInfo=function(){
    	$scope.editLogitic=true;
    }
    
    $scope.closeDia=function(){
    	$scope.editLogitic=false;
    	$scope.refundOrder="0";
    }
    
    $scope.updateLogiticInfo=function(){
    	if($scope.test.province!=undefined){
    		$scope.logiticInfo.province=$scope.test.province.name;
    	}
    	if($scope.test.city!=undefined){
    		$scope.logiticInfo.city=$scope.test.city.name;
    	}
    	if($scope.test.district!=undefined){
    		$scope.logiticInfo.district=$scope.test.district.name;
    	}
    	var jsonObject={
    		orderId:$scope.orderInfo.orderId,
    		consignee:$scope.logiticInfo.consignee,
    		mobile:$scope.logiticInfo.mobile,
    		province:$scope.logiticInfo.province,
    		city:$scope.logiticInfo.city,
    		district:$scope.logiticInfo.district,
    		address:$scope.logiticInfo.address
    	}
    	jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'logitic/updateLogiticInfo',
			async: true,
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.closeDia();
			} else {
				alertmsg(data.msg, "error");
			}
		})
    }

    /*
	 * 界面跳转用方法
	 * */
	//进入界面
	if($stateParams.uiParams.type == "1") {
		$stateParams.uiParams.source.push({
			level: $stateParams.uiParams.source.length,
			name: "wdOrderDetail"
		})
		$scope.orderInfo=$stateParams.uiParams.orderInfo;
		$scope.logiticInfo=$scope.orderInfo.logiticInfo;
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

	$scope.refundOrder='0';
	$scope.refund=function(type){
		$scope.refundOrder=type;
	}
	//退款
	$scope.sureRefundOrder = function() {
	var jsonObject={
		orderId:$scope.orderInfo.orderId,
		orderSource:$scope.orderInfo.orderSource,
		orderStatus:"9"
	}
	if($scope.refundOrder=="1"){
		jsonObject.orderStatus="7";
	}else{
		jsonObject.orderStatus="9";
	}
	jsonObject = angular.toJson(jsonObject);
	$http({
		method: 'post',
		url: pos + 'order/simpleUpdateOrder',
		async: true,
		params: {
			keyParams: getKeyParams(jsonObject, keyParams),
			jsonObject: getJsonObject(jsonObject)
		}
	}).success(function(data, stauts, headers, config) {
		if(data.code == "1") {
			$scope.goback();
		} else {
			alertmsg(data.msg, "error");
		}
	})
}
	


}])