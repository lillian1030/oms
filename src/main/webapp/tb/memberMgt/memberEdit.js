qyApp.controller("memberEditController", ["$scope", "$http", "Upload", "$compile", "$route", "$state", "$stateParams",function($scope, $http, Upload, $compile, $route, $state, $stateParams) {
	
	$scope.userInfo = JSON.parse(localStorage.userInfo);
	
	if($stateParams.uiParams.orgId!=undefined) {
		$scope.orgId = $stateParams.uiParams.orgId;
		$scope.telphone = $stateParams.uiParams.userName;
		$scope.roleName = $stateParams.uiParams.roleName;
		$scope.status = $stateParams.uiParams.status;
		$scope.userId = $stateParams.uiParams.userId;
		$scope.userName = $stateParams.uiParams.userName;
		$scope.trueName = $stateParams.uiParams.trueName;
		$scope.email = $stateParams.uiParams.email;
	} else {
		$scope.orgId = JSON.parse(keyParams).orgId;
	}
			
	 //保存编辑人员信息
    $scope.SaveEditUser = function(){
    	if($scope.trueName.trim().length<2 || $scope.trueName.trim().length>6){
			alertmsg("请正确填写2-6位字符昵称", "error");
			return false;
		}
        var jsonObject = "{\"userId\":\"" + $scope.userId + "\",\"trueName\":\"" + $scope.trueName + "\",\"email\":\"" + $scope.email + "\"}";
        $http({
            method: 'post',
            url: cas + 'user/updateUser',
            params: {
                keyParams: getKeyParams(jsonObject, keyParams),
                jsonObject: getJsonObject(jsonObject)
            }
        }).success(function(data, stauts, headers, config) {
            if (data.code == 1) {
                alertmsg("修改人员信息成功");
                var sourceArr=[{level:0,name:"memberEdit"}];
        		var params={
        			"source":sourceArr,
        			"type":"1"
        		};
        		
        		$state.go("memberMgt", {
        			uiParams:params
        		});
            } else {
                alertmsg("修改人员信息失败", "error");
            }
        })
    };
	
	$scope.source= $stateParams.uiParams.source;
	var sourceType=$stateParams.uiParams.type;
	if(sourceType=="1"){
		$scope.source.push({level:$scope.source.length,name:"memberMgt"});
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
}]);