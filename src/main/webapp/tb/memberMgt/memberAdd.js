qyApp.controller("memberAddController",  function($scope, $http, Upload, $compile, $route, $state, $stateParams){
	
	$scope.userInfo = JSON.parse(localStorage.userInfo);
	
////////////////////改 tao/////////////////////////	
	$scope.addMembers = {
		'roleId': '',
		'orgId': '',
		'trueName': '',
		'userName': '',
		'password': '',
		'email': '',
		'departId': ''	
	};
	
	$scope.parts1=[];
	$scope.parts2=[];
	$scope.parts3=[];
	$scope.parts4=[];
	$scope.parts5=[];
	$scope.selectDepartId1='';
	$scope.selectDepartId2='';
	$scope.selectDepartId3='';
	$scope.selectDepartId4='';
	$scope.selectDepartId5='';
	
	if($stateParams.uiParams.orgId!=undefined) {
		$scope.orgId = $stateParams.uiParams.orgId;
		$scope.roles = $stateParams.uiParams.roles;
		//$scope.roleId = $scope.roles[0].roleId;
	} else {
		$scope.orgId = JSON.parse(keyParams).orgId;
	}
	
	$scope.checkUserName=function(){
		if($scope.addMembers.userName==""){
			return;
		}
		checkUserByName($scope.addMembers.userName);
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

	//主管类型
//	$scope.memberTypes = [
//		{'id' : 11, 'name' : '总部管理人员'},
//		{'id' : 12, 'name' : '财务人员'},
//		{'id' : 14, 'name' : '财务人员'},
//		{'id' : 16, 'name' : '美工人员'},
//		{'id' : 18, 'name' : '运营人员'}
//	];
	//查询部门列表
 	$scope.getDepartList = function(){
 		var jsonObject = "{\"pDepartId\":\""+0+"\"}";
 		$http({
            method: 'post',
            url: cas + 'depart/getDepartList',
            params: {
	            keyParams: getKeyParams(jsonObject, keyParams),
	            jsonObject: getJsonObject(jsonObject)
	        }
       }).success(function(data, stauts, headers, config) {
            if (data.code == 1) {
                $scope.parts1 = data.data.departList;     
                $scope.parts2 = [];
			    $scope.parts3 = [];
			    $scope.parts4 = [];
			    $scope.parts5 = [];
		    	$scope.selectDepartId2='';
				$scope.selectDepartId3='';
				$scope.selectDepartId4='';	
				$scope.selectDepartId5='';	
				$scope.parts1==0?departNameInput=true:departNameInput=false;
            } else {
                alertmsg("获取部门分组失败", "error");
            }
       })
 	};
  	$scope.getDepartList();
  	
	//查询部门分组
	$scope.sortIdChange = function(id, type){
		var jsonObject = "{\"pDepartId\":\""+id+"\"}";	
 		$http({
            method: 'post',
            url: cas + 'depart/getDepartList',
            params: {
	            keyParams: getKeyParams(jsonObject, keyParams),
	            jsonObject: getJsonObject(jsonObject)
	        }
       }).success(function(data, stauts, headers, config) {
            if (data.code == 1) {              	
				if(type == "1") {
				    $scope.parts2 = data.data.departList; 
					$scope.parts3 = [];
				    $scope.parts4 = [];
				    $scope.parts5 = [];
					$scope.selectDepartId3='';
					$scope.selectDepartId4='';
					$scope.selectDepartId5='';
				}else if(type == "2"){
					$scope.parts3 = data.data.departList; 
				    $scope.parts4 = [];
				    $scope.parts5 = [];
					$scope.selectDepartId4='';
					$scope.selectDepartId5='';
				}else if(type == "3"){
					$scope.parts4 = data.data.departList; 
				    $scope.parts5 = [];
					$scope.selectDepartId5='';
				}else if(type == "4"){
					$scope.parts5 = data.data.departList; 
				}
            } else {
                alertmsg("获取部门列表信息失败", "error");
            }
       })
	}

	 //添加人员
    $scope.addUser = function(){
    	if($scope.userNameWarn == true){
			alertmsg("该帐号已经存在", "error");
			return false;
		}
    	//验证参数
    	if($scope.addMembers.userName==''){
    		alertmsg("请填写11位手机号", "error");
    	}else{
    		var reg = /^[1][3456789][0-9]{9}$/;
			if(!reg.test($scope.addMembers.userName)){
				alertmsg("请正确填写11位手机号", "error");
				return false;
			}
    	}				
		if($scope.addMembers.password.length<6 || $scope.addMembers.password.length>12){
			alertmsg("请正确填写6位以上的密码", "error");
			return false;
		}
		if($scope.addMembers.trueName.trim().length<2 || $scope.addMembers.trueName.trim().length>6){
			alertmsg("请正确填写2-6位字符昵称", "error");
			return false;
		}		
		$scope.addMembers.orgId = $scope.orgId;
		$scope.addMembers.roleId = $scope.roleId;//$scope.addMembers.memberType;
        var jsonObject;
        if($scope.addMembers.roleId==''){
			alertmsg("请选择职位", "error");
		}else{
	        if($scope.selectDepartId1==''){
				$scope.addMembers.departId="0";
			}else if($scope.selectDepartId2==''){
				$scope.addMembers.departId = $scope.selectDepartId1;
			}else{
				if($scope.selectDepartId3==''){
					$scope.addMembers.departId = $scope.selectDepartId2;
				}else{
					if($scope.selectDepartId4==''){
						$scope.addMembers.departId = $scope.selectDepartId3;
					}else{
						$scope.addMembers.departId = $scope.selectDepartId4;
					}
				}
				
			}
	        jsonObject = JSON.stringify($scope.addMembers);
	        //console.info(jsonObject);      
	      $http({
	          method: 'post',
	          url: cas + 'user/addUserOrg',
	          params: {
	              keyParams: getKeyParams(jsonObject, keyParams),
	              jsonObject: getJsonObject(jsonObject)
	          }
	      }).success(function(data, stauts, headers, config) {
	          if (data.code == 1) {
	              alertmsg("添加人员成功");
	              var sourceArr=[{level:0,name:"memberAdd"}];
	      		var params={
	      			"source":sourceArr,
	      			"type":"1"
	      		};
	      		
	      		$state.go("memberMgt", {
	      			uiParams:params
	      		});
	          } else {
	              alertmsg("添加人员失败", "error");
	          }
	      })
		}
    };
	
	$scope.source= $stateParams.uiParams.source;
	var sourceType=$stateParams.uiParams.type;
	if(sourceType=="1"){
		$scope.source.push({level:$scope.source.length,name:"memberMgt"});
	}
	
	$scope.goBack=function(){
		$stateParams.uiParams.source.splice($stateParams.uiParams.source.length - 1, 1);
		$state.go($stateParams.uiParams.source[$stateParams.uiParams.source.length - 1].name, {
			uiParams: {
				"source": $stateParams.uiParams.source,
				"type": "2"
			}
		})
	}
	
	

});