qyApp.controller("departAddController", function($scope, $http, Upload, $compile, $route, $state, $stateParams) {	
	//初始model	
	$scope.mgType='';
	$scope.departArea='';
	$scope.departName='';
	$scope.trueName='';
	$scope.userName='';
	$scope.passWord='';
	$scope.parts1=[];
	$scope.parts2=[];
	$scope.parts3=[];
	$scope.parts4=[];
	$scope.parts5=[];
	$scope.selectDepartId1='';
	$scope.selectDepartId2='';
	$scope.selectDepartId1='';
	$scope.selectDepartId3='';
	$scope.selectDepartId4='';
	$scope.selectDepartId5='';
	
	//主管类型
	$scope.departTypea = [
		{'id' : 13, 'name' : '商务主管'},
		{'id' : 15, 'name' : '美工主管'},
		{'id' : 17, 'name' : '运营主管'},
		{'id' : 21, 'name' : '客服主管'},
		{'id' : 23, 'name' : '培训主管'}
	];
	//显示默认值
	$scope.showAreaSelect = false;
	$scope.showAreaInput = false;
	$scope.showAreaSelecta = false;
	$scope.showAreaInputa = false;
	//部门所属区域
	$scope.getDepartArea = function(){
		$http({
            method: 'post',
            url: cas + 'depart/getDepartArea',
            params: {
	            keyParams: getKeyParams('{}', keyParams),
	            jsonObject: getJsonObject('{}')
	        }
        }).success(function(data, stauts, headers, config) {
            if (data.code == 1) {
                $scope.departAreas  = data.data.departAreaList;
                $scope.len = $scope.departAreas.length;
                console.log($scope.departAreas)
                //判断有无部门区域showAreaSelect
				if($scope.len == 0){
					$scope.showAreaSelect = false;
					$scope.showAreaInput = true;
				}else{
					$scope.showAreaSelect = true;
					$scope.showAreaInput = false;
				}
            } else {
                alertmsg("获取部门所属区域", "error");
            }
        })
	};
	$scope.getDepartArea();
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
				$scope.parts1==0?showgroupInput=true:showgroupInput=false;
            } else {
                alertmsg("获取部门分组失败", "error");
            }
       })
 	};
  	$scope.getDepartList();
	
	//新增区域
	$scope.addNewAraeBtn = function(){
		$scope.showAreaInput = true;		
	}
	//业务职责
	$scope.addNewTypeBtn = function(){
		$scope.showAreaInputa = true;		
	}
	//查询部门类型
		$scope.getDepartType = function(){
		$http({
            method: 'post',
            url: cas + 'depart/getDepartType',
            params: {
	            keyParams: getKeyParams('{}', keyParams),
	            jsonObject: getJsonObject('{}')
	        }
        }).success(function(data, stauts, headers, config) {
            if (data.code == 1) {
                $scope.departTypeList  = data.data.departTypeList;
                $scope.lena = $scope.departTypeList.length;
                console.log( $scope.departTypeList);
                //判断有无部门类型showAreaSelect
				if($scope.lena == 0){
					$scope.showAreaSelecta = false;
					$scope.showAreaInputa = true;
				}else{
					$scope.showAreaSelecta = true;
					$scope.showAreaInputa = false;
				}
            } else {
                alertmsg("获取部门类型失败", "error");
            }
        })
	};
	$scope.getDepartType();
	
	
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
			
	//添加部门
	$scope.addDepart = function(){			
		var jsonObject = $("#addDpartForm").serializeJson();
		jsonObject = JSON.parse(jsonObject);
		jsonObject.roleId = $scope.mgType;
		jsonObject.childDepartCount = "1";		
		if($scope.len!=0){
			if($scope.showAreaInput==true){
				if($('#departArea2').val()==''&&$scope.departArea.areaName!=null){
					jsonObject.departArea = $scope.departArea.areaName;
				}else if($('#departArea2').val()!=''){
					jsonObject.departArea = $('#departArea2').val();
				}else if($('#departArea2').val()==''&&$scope.departArea.areaName==null){
					jsonObject.departArea='';
				}				
			}else{
				if($scope.departArea.areaName==null){
					jsonObject.departArea='';
				}else{
					jsonObject.departArea = $scope.departArea.areaName;
				}
			}				
		}
		/*部门区域*/
		if($scope.lena!=0){
			if($scope.showAreaInputa==true){
				if($('#departType').val()==''&&$scope.departType.typeName!=null){
					jsonObject.departType = $scope.departType.typeName;
					jsonObject.departTypeTop = '1';
				}else if($('#departType').val()!=''){
					jsonObject.departType = $('#departType').val();
					jsonObject.departTypeTop = '0';
				}else if($('#departType').val()==''&&$scope.departType.typeName==null){
					jsonObject.departTypeTop='';
					jsonObject.departType='';
				}				
			}else{
				if($scope.departType==null){
					jsonObject.departTypeTop='';
					jsonObject.departType='';
				}else{
					jsonObject.departType= $scope.departType.typeName;
					jsonObject.departTypeTop = '1';
				}
			}				
		}		
		if($scope.departName==''){
			alertmsg("请填写部门名称", "error");
		}else if($scope.trueName==''){
			alertmsg("请填写主管昵称", "error");
		}else if($scope.mgType==''){
			alertmsg("请选择部门主管类型", "error");
		}else if($scope.userName==''){
			alertmsg("请填写主管手机号", "error");
		}else if($scope.passWord==''){
			alertmsg("请设置初始密码", "error");
		}else{
			if($scope.selectDepartId1==''||$scope.selectDepartId1==null){
				jsonObject.pDepartId=0;
			}else if($scope.selectDepartId2==''||$scope.selectDepartId2==null){
				jsonObject.pDepartId = $scope.selectDepartId1;
			}else{
				if($scope.selectDepartId3==''||$scope.selectDepartId3==null){
					jsonObject.pDepartId = $scope.selectDepartId2;
				}else{
					if($scope.selectDepartId4==''||$scope.selectDepartId4==null){
						jsonObject.pDepartId = $scope.selectDepartId3;
					}else{
						jsonObject.pDepartId = $scope.selectDepartId4;
					}
				}
			}
			jsonObject = JSON.stringify(jsonObject);
			console.log(jsonObject);
			//console.info(jsonObject);
			
			for(let n=0;n<$scope.len;n++){
				if($scope.departAreas[n].areaName==$('#departArea2').val()){
					alertmsg("该区域已存在", "error");
					return;
				}
			}	
			$http({
	            method: 'post',
	            url: cas + 'depart/addDepart',
	            params: {
		            keyParams: getKeyParams(jsonObject, keyParams),
		            jsonObject: getJsonObject(jsonObject)
		        }
	        }).success(function(data, stauts, headers, config) {
	            if (data.code == 1) {
	                alertmsg("添加部门成功");
					$scope.goBack();
	            } else {
	                alertmsg("添加部门失败", "error");
	            }
	        })
		}
	};
				
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