qyApp.controller('trainDetailsController', ['$scope', '$http', '$compile', '$state', '$stateParams','Upload', function($scope, $http, $compile, $state, $stateParams,Upload) {
	
	//初始化数据
	$scope.processCount="0";
	$scope.serviceCount="0";
	
	$scope.addInfo={
		"fileName":"",
		"fileUrl":"",
		"extend1":"",
		"extend2":"",
		"extend3":"",
		"taskType":"",
		"memo":""
	}
	
	/**
	 * tab选项卡切换：shiftProductTab
	 * 添加日志：addLog
	 * 关闭弹窗：closeDia
	 * 上传文件：uploadWork
	 * 审核任务：dealTask
	 */
	$scope.tabType="1";
	$scope.shiftProductTab=function(type){
		$scope.tabType=type;
		$scope.getContractTask();
	}
	
	$scope.addLog=function(type){
		$scope.addInfo.taskType=type;
	}
	
	$scope.closeDia=function(){
		$scope.addInfo.fileName="";
		$scope.addInfo.fileUrl="";
		$scope.addInfo.extend1="";
		$scope.addInfo.extend2="";
		$scope.addInfo.extend3="";
		$scope.addInfo.taskType="";
		$scope.addInfo.memo="";
		$scope.showDeal=false;
	}
	
	//上传work
	$scope.uploadWork=function(files){
		if(files){
			var fileUrl = JSON.parse(keyParams).orgId + "/work/"
			jsonObject = "{\"fileUrl\":\"" + fileUrl + "\"}";
			if(files && files.length) {
				$scope.files = files;
				for(var i = 0; i < files.length; i++) {
					Upload.upload({
						//服务端接收
						url: pos + 'contract/uploadWork',
						//上传的同时带的参数
						data: {
							keyParams: getKeyParams(jsonObject, keyParams),
							jsonObject: getJsonObject(jsonObject)
						},
						file: files[i]
					}).success(function(data, status, headers, config) {
						//上传成功
						if(data.code == "1") {
							$scope.addInfo.fileName=data.data.workName
							$scope.addInfo.fileUrl=data.data.workPath;
						} else {
							alertmsg("上传Work失败", "error");
						}
					}).error(function(data, status, headers, config) {
						//上传失败
						console.log('error status: ' + status);
					});
				}
			}
		}
		
	}
	
	$scope.showDeal=false;
	$scope.dealTask=function(obj){
		$scope.taskInfo=obj.processTask;
		$scope.showDeal=true;
	}
	
	
	/**
	 * 接口调用
	 * save:保存申请,质检等
	 * getContractTask:获取任务信息
	 * deal:处理申请信息
	 */
	$scope.save=function(){
		var jsonObject=JSON.stringify($scope.addInfo);
		$http({
			method: 'post',
			url: pos + 'contract/addContractTask',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.closeDia();
				$scope.shiftProductTab($scope.tabType);
			} else {
				alertmsg("查询失败", "error")
			}
		});
	
	}
	
	$scope.getContractTask=function(){
		var taskType="";
		if($scope.tabType=="1"){
			taskType="'3','9','10'";
		}else{
			taskType="'4','5','6'";
		}
		var jsonObject={
			"contractId":$scope.contractInfo.contractId,
			"taskType":taskType
		};
		jsonObject=JSON.stringify(jsonObject);
		console.log(jsonObject);
		$http({
			method: 'post',
			url: pos + 'contract/getContractTask',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				console.log(data);
				if($scope.tabType=="1"){
					$scope.contractProcessTasks=data.data.contractProcessTasks;
				}else{
					$scope.contractServerTasks=data.data.contractServerTasks;
				}
			} else {
				alertmsg("查询失败", "error")
			}
		});
		
	}
	
	$scope.deal=function(result){
		var jsonObject={
			"contractId":$scope.contractInfo.contractId,
			"contractTaskId":$scope.taskInfo.contractTaskId,
			"taskType":$scope.taskInfo.taskType,
			"managerResult":result
		}
		jsonObject=JSON.stringify(jsonObject);
		console.log(jsonObject);
		$http({
			method: 'post',
			url: pos + 'contract/updateContractTask',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.closeDia();
				$scope.shiftProductTab($scope.tabType);
			} else {
				alertmsg("查询失败", "error")
			}
		});
	
	}
	
	
	
	/*
	 * 界面跳转用方法
	 * */
	//进入界面
	if($stateParams.uiParams.type == "1") {
		$stateParams.uiParams.source.push({
			level: $stateParams.uiParams.source.length,
			name: "trainDetails"
		})
		$scope.contractInfo=$stateParams.uiParams.contractInfo;
		$scope.addInfo.contractId=$scope.contractInfo.contractId;
		$scope.shiftProductTab("2");
		$scope.shiftProductTab("1");
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