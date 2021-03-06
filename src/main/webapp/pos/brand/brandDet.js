qyApp.controller("brandDetController",["$scope", "$http", "Upload", "$route", "$state","$stateParams",
function ($scope, $http, Upload, $route, $state,$stateParams) {
	
	//处理路由参数
	$scope.source= $stateParams.uiParams.source;
	var sourceType=$stateParams.uiParams.type;
	if(sourceType=="1"){
		$scope.source.push({level:$scope.source.length,name:"brandDet"});
	}
	$scope.brand= $stateParams.uiParams.brand;
	
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
	
	//路由跳转
	$scope.goRoute=function(routeName){
		var params={
			"source":$scope.source,
			"type":"1"
		};
		//个性化参数部分
		if(routeName=="brandDetEdit"){
			$.extend(params,{brand:$scope.brand});
		}else{
			return;
		}
		//跳转
		$state.go(routeName, {
			uiParams:params
		});
	}
}]);