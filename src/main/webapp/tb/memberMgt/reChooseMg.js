qyApp.controller("chooseMgController", function($scope, $http, Upload, $compile, $route, $state, $stateParams) {	
	$scope.departId = $stateParams.uiParams.departId;//原部门id
	$scope.departName = $stateParams.uiParams.departName;//原部门名称
	$scope.roleId = $stateParams.uiParams.roleId;//原部门主管角色id
	$scope.oldManagerUserId = $stateParams.uiParams.oldManagerUserId;//原部门主管id
	$scope.userName="";
	
	$scope.departMg='';
	//console.info($stateParams.uiParams);
	//tab点击事件
	$scope.productTab="1";
	$scope.departInfoTab = true;
	$scope.shiftProductTab = function(num){
		num=="2"?$scope.productTab="2":$scope.productTab="1";
		num=="1"?$scope.departInfoTab = true:$scope.departInfoTab = false;
	};
	
	//选择新主管
 	$scope.getDepartMgList = function(){
 		var jsonObject = "{\"pDepartId\":\""+$scope.departId+"\"}";
 		$http({
            method: 'post',
            url: cas + 'depart/getDepartList',
            params: {
	            keyParams: getKeyParams(jsonObject, keyParams),
	            jsonObject: getJsonObject(jsonObject)
	        }
        }).success(function(data, stauts, headers, config) {
            if (data.code == 1) {              
                $scope.departMg = data.data.departList;               
            } else {
                alertmsg("获取主管列表失败", "error");
            }
        })
 	};
  	$scope.getDepartMgList();
	
	
	//保存修改
	$scope.saveChoose = function(){
		var jsonObject = $("#chosDepartMg").serializeJson();
		jsonObject = JSON.parse(jsonObject);
		jsonObject.departId = $scope.departId;			
		jsonObject.roleId = $scope.roleId;
		jsonObject.departName = $scope.departName;
		if($scope.productTab=="2"){
			jsonObject.oldManagerUserId = $scope.newmanagerUserId;
		}else{
			jsonObject.oldManagerUserId = $scope.oldManagerUserId;
		}		
		jsonObject = JSON.stringify(jsonObject);
		//console.info(jsonObject);
		$http({
            method: 'post',
            url: cas + 'depart/updateDepart',
            params: {
	            keyParams: getKeyParams(jsonObject, keyParams),
	            jsonObject: getJsonObject(jsonObject)
	        }
        }).success(function(data, stauts, headers, config) {
            if (data.code == 1) {              
                alertmsg("更换主管成功"); 
                $scope.goBack();
            } else {
                alertmsg("更换主管失败", "error");
            }
        })
	}
	
	
	//返回
	$scope.goBack = function(){
		$state.go("departMgt", {
 			uiParams: ''
 		});
	};
	
	$scope.userNameWarn=false
	
	$scope.checkUserName=function(){
		if($scope.userName==""){
			return;
		}
		checkUserByName($scope.userName);
	}
	
	
	function checkUserByName(userName){
		var jsonObject="{\"userName\":\""+userName+"\"}";
		$http(
        {
            method: 'post',
            url: cas
            + 'user/userExistsCheck',
            params: {
                keyParams: getKeyParams(
                jsonObject, keyParams),
                jsonObject: getJsonObject(jsonObject)
            }
        }).success(function(data, stauts, headers, config) {
        	if(data.code=="1"){
        		var flag=data.data.flag;
            	if(flag==undefined){
            		$scope.userNameWarn=true;
            	}
            	if("true"==flag){
    				$scope.userNameWarn=true;
    			}else{
    				$scope.userNameWarn=false;
    			}
        	}else{
        		$scope.registerForm.userName="";
        		alertmsg(data.msg);
        	}
        })
	}
	
})