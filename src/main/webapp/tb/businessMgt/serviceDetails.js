qyApp.controller('serviceDetailsController',['$scope', '$http', '$compile', '$state', '$stateParams','Upload', function($scope, $http, $compile, $state, $stateParams,Upload) {
	
	$scope.temp=false;
	
	//初始化数据
	$scope.userInfo=JSON.parse(localStorage.userInfo);
	$scope.processCount="0";
	$scope.serviceCount="0";
	
	$scope.addInfo={
		"fileName":"",
		"fileUrl":"",
		"extend1":"",
		"extend2":"",
		"extend3":"",
		"taskType":"",
		"taskMemo":"",
		"businessAmount":"",
		"deductAmount":"",
		"extendAmount":"",
		"businessEndTime":"",
		"endMemo":"",
		"actServiceAmount":"",
		"carryFlag":"",
		"contractTaskId":""
	}
	
	$scope.dealContractTask={};
	
	/**
	 * tab选项卡切换：shiftProductTab
	 * 添加日志：addLog
	 * 关闭弹窗：closeDia
	 * 上传文件：uploadWork
	 * 审核任务：dealTask
	 * 审核暂停任务:dealServiceTask
	 * 获取tab信息后回调方法：getContractTabBack
	 * 财务审核是否到账修改:changePayType
	 * 处理申请信息:deal
	 * 处理申请信息:deal1
	 * 财务审核:updateContractCW
	 * 获取部门:getDepart
	 * 获取部门:departSelect
	 * 获取部门回调方法：departSelectBack
	 * 区域分配:updateContractZJ
	 * 主管分配人员:updateContractZG
	 * 分配人员确认:updateContractQR
	 * 更新任务续签人:updateContractResignUser
	 * 分配续签人员:reSignUser
	 * 暂停任务:showPauseContractTask
	 * 完成任务:showFinishContractTask
	 * 设置暂停具体任务:setContractPauseTask
	 * 设置完成具体任务:setContractFinishTask
	 * 计算暂停提成金额:calPauseDeduact
	 * 计算完成提成金额:calFinishDeduact
	 * 计算结算金额:calPauseAmount
	 */
	$scope.tabType="1";
	$scope.shiftProductTab=function(type){
		$scope.closeDia();
		$scope.tabType=type;
		$scope.getContractTab();
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
		$scope.addInfo.taskMemo="";
		$scope.addInfo.businessAmount="";
		$scope.addInfo.deductAmount="";
		$scope.addInfo.extendAmount="";
		$scope.addInfo.businessEndTime="";
		$scope.addInfo.endMemo="";
		$scope.addInfo.actServiceAmount="";
		$scope.addInfo.carryFlag="";
		$scope.addInfo.contractTaskId=undefined;
		$scope.addInfo.deductRate=undefined;
		$scope.addInfo.departType=undefined;
		$scope.addInfo.serviceType=undefined;
		$scope.addInfo.serviceAmount=undefined;
		$scope.showDeal=false;
		$scope.showServiceDeal=false;
		$scope.showReSignUser=false;
		$scope.showPause=false;
		$scope.showFinish=false;
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
	
	$scope.uploadTaskWork=function(files,type){
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
							var json={
								contractId:$scope.contractInfo.contractId,
								orgId:$scope.contractTabInfo.orgId,
								fileName:data.data.workName,
								fileUrl:data.data.workName	
							}
							if(type=='1'){
								json.contractTaskId=$scope.contractTabInfo.taskInfoKF.contractTaskId;
							}else if(type=='2'){
								json.contractTaskId=$scope.contractTabInfo.taskInfoMG.contractTaskId;
							}else if(type=='3'){
								json.contractTaskId=$scope.contractTabInfo.taskInfoYY.contractTaskId;
							}else{
								json.contractTaskId=$scope.contractTabInfo.taskInfoPX.contractTaskId;
							}
							$scope.addContractExtend(json);
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
	$scope.showServiceDeal=false;
	$scope.dealServiceTask=function(obj){
		$scope.result="0";
		$scope.taskInfo=obj.serverTask;
		$scope.showServiceDeal=true;
	}
	
	$scope.processCount="0";
	$scope.serviceCount="0";
	getContractTabBack=function(data){
		if($scope.tabType=="3"){
			//合同详情
			$scope.contractTabInfo=data.data.contractInfo;
			//指派
			$scope.showReSignUser=false;
			$scope.showPause=false;
			$scope.showFinish=false;
		}else if($scope.tabType=="1"){
			//流程日志
			$scope.contractProcessTasks=data.data.contractProcessTasks;
			$scope.processTaskManagerUser=data.data.managerUserId;
			$scope.processTaskpManagerUser=data.data.pManagerUserId;
			$scope.processCount=$scope.contractProcessTasks.length;
		}else if($scope.tabType=="2"){
			//服务日志
			$scope.contractServerTasks=data.data.contractServerTasks;
			$scope.serverTaskManagerUser=data.data.managerUserId;
			$scope.productManagerId=data.data.productManagerId;
			$scope.serviceCount=$scope.contractServerTasks.length;
		}else if($scope.tabType=="4"){
			//财务
			$scope.contractPayInfo=data.data.contractPayInfo;
			$scope.dealContractTask={
				"contractId":$scope.contractPayInfo.contractId,
				"taskStatus":$scope.contractPayInfo.contractStatus,
				"accountAmount":"",
				"accountTime":"",
				"memo":"",
				"productType":$scope.contractPayInfo.productType,
				"orgId":$scope.contractPayInfo.orgId,
				"taskType":"",
				"contractType":$scope.contractPayInfo.contractType
			}
			$scope.contractPay={
				"contractId":$scope.contractPayInfo.contractId,
				"accountAmount":"",
				"accountTime":"",
				"memo":"",
				"orgId":$scope.contractPayInfo.orgId,
			}
			//退款
			if($scope.contractPayInfo.contractStatus!='0'&&$scope.contractPayInfo.notPaidAmount<0){
				$scope.contractPay.accountAmount=$scope.contractPayInfo.notPaidAmount;
			}
		}else if($scope.tabType=="5"){
			//任务分配
			$scope.contractTaskInfo=data.data.contractTaskInfo;
			$scope.currentTask={};
			$scope.currentTask=undefined;
			angular.forEach($scope.contractTaskInfo.contractTaskList, function(ele, index) {
				if(ele.taskType==$scope.taskType){
					//当前任务项
					if(ele.productManagerId==$scope.userInfo.userId){
						//对应总监
						$scope.currentTask=ele;
						$scope.step="1";
					}else if(ele.managerUserId==$scope.userInfo.userId){
						$scope.currentTask=ele;
						$scope.step="2";
						//对应执行部门主管
					}else if(ele.userId==$scope.userInfo.userId){
						$scope.currentTask=ele;
						$scope.step="3";
						//对应处理人
					}else if($scope.userInfo.userId=='1973'){
						$scope.currentTask=ele;
					}
				}
			});
			if($scope.currentTask!=undefined){
				if($scope.currentTask.taskStatus=="1"&&($scope.step=="1"||$scope.userInfo.userId=='1973')){
					$scope.getDepartArea();//获取部门区域
					$scope.dealContractTask={
						"taskType":$scope.currentTask.taskType,
						"contractId":$scope.contractTaskInfo.contractId,
						"contractTaskId":$scope.currentTask.contractTaskId,
						"taskStatus":$scope.currentTask.taskStatus,
						"orgId":$scope.contractTaskInfo.orgId,
						"serviceArea":"",
						"departId":"",
						"traceMemo":"",
						"planDate":""
					}
				}else if($scope.currentTask.taskStatus=="2"&&($scope.step=="2"||$scope.userInfo.userId=='1973')){
					var jsonObject={
						"orgId":$scope.userInfo.orgId,
						"departId":$scope.userInfo.departId,
						"status":"1"
					};
					$scope.getUserList(jsonObject);
					$scope.dealContractTask={
						"taskType":$scope.currentTask.taskType,
						"contractId":$scope.contractTaskInfo.contractId,
						"contractTaskId":$scope.currentTask.contractTaskId,
						"taskStatus":$scope.currentTask.taskStatus,
						"orgId":$scope.contractTaskInfo.orgId,
						"contractTaskTraceId":$scope.currentTask.contractTraceList[$scope.currentTask.contractTraceList.length-1].contractTaskTraceId,
						"userId":"",
						"traceMemo":""
					}
				}else if($scope.currentTask.taskStatus=="3"&&($scope.step=="3"||$scope.userInfo.userId=='1973')){
					$scope.dealContractTask={
						"taskType":$scope.currentTask.taskType,
						"contractId":$scope.contractTaskInfo.contractId,
						"contractTaskId":$scope.currentTask.contractTaskId,
						"taskStatus":$scope.currentTask.taskStatus,
						"orgId":$scope.contractTaskInfo.orgId,
						"contractTaskTraceId":$scope.currentTask.contractTraceList[$scope.currentTask.contractTraceList.length-1].contractTaskTraceId,
						"dealResult":"0",
						"finishTime":""
					}
				}
			}
		}
		
//		$scope.goContinueSign();
	}
	
	$scope.payDis=false;
	$scope.changePayType=function(type){
		$scope.dealContractTask.accountAmount="0";
		$('#accountTime').val("");
		if(type=="0"){
			$scope.payDis=false;
		}else{
			$scope.payDis=true;
		}
	}
	
	$scope.setResult=function(result){
		$scope.result=result;
	}
	
	$scope.deal1=function(){
		$scope.deal($scope.result);
	}
	
	$scope.deal=function(result){
		var jsonObject={
			"contractId":$scope.taskInfo.contractId,
			"contractTaskId":$scope.taskInfo.contractTaskId,
			"contractTaskTraceId":$scope.taskInfo.contractTaskTraceId,
			"dealResult":result,
			"departType":$scope.taskInfo.departType,
			"taskType":$scope.taskInfo.taskType,
			"amount":$scope.taskInfo.amount,
			"carryFlag":$scope.taskInfo.carryFlag,
			"orgId":$scope.contractInfo.orgInfo.orgId
		}
		$scope.updateContractTask(jsonObject);
	}
	
	$scope.updateContractCW=function(){
		$scope.dealContractTask.accountTime=$('#accountTime').val();
		$scope.updateContractTask($scope.dealContractTask);
	}
	
	$scope.updateContractZJ=function(){
		$scope.dealContractTask.planDate=$('#planDate').val();
		$scope.updateContractTask($scope.dealContractTask);
	}
	
	$scope.updateContractZG=function(){
		$scope.updateContractTask($scope.dealContractTask);
	}
	
	$scope.resignUserWarn="";
	$scope.updateContractResignUser=function(){
		if($scope.dealContractTask.contractTaskId==""){
			$scope.resignUserWarn="请选择指派的产品";
			return;
		}
		if($scope.dealContractTask.reSignUserId==""){
			$scope.resignUserWarn="请选择续签人";
			return;
		}
		$scope.updateContractTask($scope.dealContractTask);
	}
	
	$scope.savePauseContractTask=function(){
//		if($scope.dealContractTask.contractTaskId==""){
//			$scope.pauseWarn="请选择指派的产品";
//			return;
//		}
		if($scope.pauseContractTask==undefined){
			alertmsg("请选择指派的产品", "error");
			return;
		}
		if($scope.addInfo.actServiceAmount==undefined||$scope.addInfo.actServiceAmount==""){
			alertmsg("结算服务费用不能为空", "error");
			return;
		}
		if($scope.addInfo.pauseAmount<0){
			if($scope.addInfo.carryFlag==undefined||$scope.addInfo.carryFlag==""){
				alertmsg("请选择退款处理方式", "error");
				return;
			}
		}
		$scope.addInfo.businessEndTime=$('#businessEndTime').val();
		console.log($scope.addInfo);
		$scope.save();
	}
	
	$scope.finishWarn="";
	$scope.saveFinishContractTask=function(){
		console.log($scope.addInfo);
		if($scope.finishContractTask==undefined){
			alertmsg("请选择指派的产品", "error");
			return;
		}
		$scope.save();
	}
	
	$scope.updateContractQR=function(){
		$scope.dealContractTask.finishTime=$('#finishTime').val();
		$scope.updateContractTask($scope.dealContractTask);
	}
	
	$scope.departSelect = function(id, type){
		if(id==null){
			return;
		}
		$scope.departSelectType=type;
		//选择部门
		$scope.dealContractTask.departId=id;
		//获取下级部门
		var jsonObject = {pDepartId:id};
		$scope.getDepartList(jsonObject);
		//获取部门人员
		//获取对应部门人员
		if(id!=null&&id!=''){
			var jsonObject={
				"orgId":$scope.userInfo.orgId,
				"departId":id,
				"status":"1"
			};
			$scope.getUserList(jsonObject);
		}else{
			$scope.userList=[];
		}
	}
	
	$scope.parts1 = []; 
	$scope.parts2 = [];
	$scope.parts3 = [];
    $scope.parts4 = [];
	$scope.getDepart = function (){
		//选择服务区域
		$scope.departSelectType=0;
		$scope.dealContractTask.departId="";
		$scope.parts1 = []; 
		$scope.parts2 = [];
		$scope.parts3 = [];
	    $scope.parts4 = [];
	    var jsonObject = {pDepartId:0,departArea:$scope.dealContractTask.serviceArea};
		$scope.getDepartList(jsonObject);
	}
	
	function departSelectBack(rsDepartList){
		if($scope.departSelectType==0){
			$scope.parts1 = rsDepartList; 
			$scope.parts2 = [];
			$scope.parts3 = [];
		    $scope.parts4 = [];
		}else if($scope.departSelectType == 1) {
		    $scope.parts2 = rsDepartList; 
			$scope.parts3 = [];
		    $scope.parts4 = [];
		}else if($scope.departSelectType == 2){
			$scope.parts3 = rsDepartList; 
		    $scope.parts4 = [];
		}else if($scope.departSelectType == 3){
			$scope.parts4 = rsDepartList;
		}
	}
	
	$scope.reSignUser=function(){
		$scope.closeDia();
		$scope.showReSignUser=true;
		$scope.dealContractTask={
			"contractId":$scope.contractInfo.contractId,
			"contractTaskId":"",
			"reSignUserId":"",
			"taskType":"12"
		}
		$scope.getDepartArea();
		$scope.resignUserWarn="";
	}
	
	$scope.showPauseContractTask=function(){
		$scope.closeDia();
		if(($scope.contractTabInfo.taskInfoKF!=undefined&&$scope.contractTabInfo.taskInfoKF.reSignUserId==$scope.userInfo.userId&&$scope.contractTabInfo.taskInfoKF.taskStatus=='4')
		 ||($scope.contractTabInfo.taskInfoMG!=undefined&&$scope.contractTabInfo.taskInfoMG.reSignUserId==$scope.userInfo.userId&&$scope.contractTabInfo.taskInfoMG.taskStatus=='4')
		 ||($scope.contractTabInfo.taskInfoYY!=undefined&&$scope.contractTabInfo.taskInfoYY.reSignUserId==$scope.userInfo.userId&&$scope.contractTabInfo.taskInfoYY.taskStatus=='4')
		 ||($scope.contractTabInfo.taskInfoPX!=undefined&&$scope.contractTabInfo.taskInfoPX.reSignUserId==$scope.userInfo.userId&&$scope.contractTabInfo.taskInfoPX.taskStatus=='4')){
			$scope.showPause=true;
			$scope.addInfo.taskType="10";//暂停任务
			$scope.addInfo.deductAmount="0";
			$scope.pauseProdcutType="";
			$scope.addInfo.pauseAmount="0";
			$scope.pauseWarn="";
		}else{
			alertmsg("无可暂停任务", "error");
		}
	}
	
	$scope.showFinishContractTask=function(){
		$scope.closeDia();
		if(($scope.contractTabInfo.taskInfoKF!=undefined&&$scope.contractTabInfo.taskInfoKF.reSignUserId==$scope.userInfo.userId&&$scope.contractTabInfo.taskInfoKF.taskStatus=='4')
		 ||($scope.contractTabInfo.taskInfoMG!=undefined&&$scope.contractTabInfo.taskInfoMG.reSignUserId==$scope.userInfo.userId&&$scope.contractTabInfo.taskInfoMG.taskStatus=='4')
		 ||($scope.contractTabInfo.taskInfoYY!=undefined&&$scope.contractTabInfo.taskInfoYY.reSignUserId==$scope.userInfo.userId&&$scope.contractTabInfo.taskInfoYY.taskStatus=='4')
		 ||($scope.contractTabInfo.taskInfoPX!=undefined&&$scope.contractTabInfo.taskInfoPX.reSignUserId==$scope.userInfo.userId&&$scope.contractTabInfo.taskInfoPX.taskStatus=='4')){
			$scope.showFinish=true;
			$scope.addInfo.taskType="11";//完成任务
			$scope.addInfo.deductAmount="0";
			$scope.extendAmount="0";
			$scope.finishProdcutType="";
			$scope.finishWarn="";
		}else{
			alertmsg("无可完成任务", "error");
		}
	}
	
	
	
	$scope.setContractPauseTask=function(pauseProdcutType,pauseContractTask){
		$scope.pauseContractTask=pauseContractTask;
		$scope.addInfo.contractTaskId=$scope.pauseContractTask.contractTaskId;
		$scope.pauseProdcutType=pauseProdcutType;
		$scope.addInfo.businessAmount="";
		$scope.addInfo.deductAmount="0";
		$scope.addInfo.actServiceAmount="";
		$scope.addInfo.deductRate=$scope.pauseContractTask.deductRate;
		$scope.addInfo.carryFlag="";
		$scope.addInfo.departType=$scope.pauseContractTask.departType;
		$scope.addInfo.serviceType=$scope.pauseContractTask.serviceType;
		$scope.addInfo.serviceAmount=$scope.pauseContractTask.serviceAmount;
		$scope.addInfo.pauseAmount="0";
	}
	
	$scope.setContractFinishTask=function(finishProdcutType,finishContractTask){
		$scope.finishContractTask=finishContractTask;
		$scope.addInfo.contractTaskId=$scope.finishContractTask.contractTaskId;
		$scope.finishProdcutType=finishProdcutType;
		$scope.addInfo.businessAmount="";
		$scope.addInfo.deductAmount="0";
		$scope.extendAmount="0";
		$scope.addInfo.deductRate=$scope.finishContractTask.deductRate;
		$scope.addInfo.actServiceAmount=$scope.finishContractTask.serviceAmount;
		$scope.addInfo.departType=$scope.finishContractTask.departType;
		$scope.addInfo.serviceType=$scope.finishContractTask.serviceType;
	}
	
	$scope.calFinishDeduact=function(){
		$scope.addInfo.deductAmount=Number($scope.finishContractTask.deductRate)*Number($scope.addInfo.businessAmount)/100;
		$scope.addInfo.deductAmount=$scope.addInfo.deductAmount.toFixed(2);
	}
	
	
	$scope.calPauseDeduact=function(){
		$scope.addInfo.deductAmount=Number($scope.pauseContractTask.deductRate)*Number($scope.addInfo.businessAmount)/100;
		$scope.addInfo.deductAmount=$scope.addInfo.deductAmount.toFixed(2);
		$scope.calPauseAmount();
	}
	
	
	$scope.calPauseAmount=function(){
		//提成金额-产品合同费用+产品实际费用
		$scope.addInfo.pauseAmount=Number($scope.addInfo.deductAmount)+Number($scope.addInfo.actServiceAmount)-Number($scope.pauseContractTask.serviceAmount);
		$scope.addInfo.pauseAmount=$scope.addInfo.pauseAmount.toFixed(2);
	}
	
	$scope.setCarryFlag=function(flag){
		$scope.addInfo.carryFlag=flag;
	}
	
	
	
	
	
	/**
	 * 接口调用
	 * save:保存申请,质检等
	 * getContractTask:获取任务信息
	 * getDepartArea:获取区域
	 * addContractPay:财务收款
	 * getDepartList:获取部门
	 * getUserList:获取部门人员
	 * addContractExtend:给任务添加附件
	 * getSourceContract:获取原合同信息
	 */
	$scope.save=function(){
		var jsonObject=JSON.stringify($scope.addInfo);
		$http({
			method: 'post',
			url: pos + 'contractNew/addContractTask',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.closeDia();
				$scope.shiftProductTab($scope.tabType);
			} else {
				alertmsg("查询失败", "error");
			}
		});
	
	}
	
	
	$scope.updateContractTask=function(jsonObject){
		jsonObject=JSON.stringify(jsonObject);
		console.log(jsonObject);
		$http({
			method: 'post',
			url: pos + 'contractNew/updateContractTask',
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
	
	$scope.getContractTab=function(){
		$scope.dealContractTask={};
		var jsonObject={
			"type":$scope.tabType,
			"contractId":$scope.contractInfo.contractId
		};
		if(jsonObject.type=="5"||jsonObject.type=="1"||jsonObject.type=="2"){
			//任务信息筛选//流程日志服务日期权限控制
			jsonObject.taskType=$scope.taskType;
		}
		jsonObject=JSON.stringify(jsonObject);
		console.log(jsonObject);
		$http({
			method: 'post',
			url: pos + 'contractNew/getContractTab',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				console.log(data);
				getContractTabBack(data);
			} else {
				alertmsg("查询失败", "error")
			}
		});
	}
	
	$scope.getCalInfo=function(type){
		var jsonObject={
			"type":type,
			"contractId":$scope.contractInfo.contractId
		};
		jsonObject.taskType=$scope.taskType;
		jsonObject=JSON.stringify(jsonObject);
		console.log(jsonObject);
		$http({
			method: 'post',
			url: pos + 'contractNew/getContractTab',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				if(type=="1"){
					//流程日志
					$scope.processCount=data.data.contractProcessTasks.length;
				}else if(type=="2"){
					//服务日志
					$scope.serviceCount=data.data.contractServerTasks.length;
				}
			} else {
				alertmsg("查询失败", "error")
			}
		});
	}
	
	
	$scope.addContractPay=function(){
		$scope.contractPay.accountTime=$('#accountTime').val();
		var jsonObject=JSON.stringify($scope.contractPay);
		console.log(jsonObject);
		$http({
			method: 'post',
			url: pos + 'contractNew/addContractPay',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				console.log(data);
				$scope.shiftProductTab($scope.tabType);
			} else {
				alertmsg("处理失败", "error")
			}
		});
	}
	
	$scope.getDepartArea =function(){
		$scope.parts1 = []; 
		$scope.parts2 = [];
		$scope.parts3 = [];
	    $scope.parts4 = [];
		var jsonObject="{}";
		$http({
			method: 'post',
			url: cas + 'depart/getDepartArea',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				if(data.data.departAreaList){
					$scope.departAreaList = data.data.departAreaList;
				}
			} else {
				alertmsg("查询失败", "error")
			}
		});
	}
	
	$scope.getDepartList =function(jsonObject){
		if($scope.taskType=='0'){
			jsonObject.departType="客服";
		}else if($scope.taskType=='1'){
			jsonObject.departType="美工";
		}else if($scope.taskType=='2'){
			jsonObject.departType="运营";
		}else if($scope.taskType=='3'){
			jsonObject.departType="培训";
		}else{
			jsonObject.departType="商务"
		}
		jsonObject=JSON.stringify(jsonObject);
		var rsDepartList=[];
		$http({
			method: 'post',
			url: cas + 'depart/getDepartList',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				if(data.data.count!='0'){
					rsDepartList= data.data.departList;
				}
				departSelectBack(rsDepartList);
			} else {
				alertmsg("查询失败", "error")
			}
		});
	}
	
	$scope.getUserList =function(jsonObject){
		jsonObject=JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: cas + 'user/getUserList',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				if(data.data.userList){
					$scope.userList = data.data.userList;
				}
			} else {
				alertmsg("查询失败", "error")
			}
		});
	}
	
	$scope.addContractExtend =function(jsonObject){
		jsonObject=JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'contractNew/addContractExtend',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.shiftProductTab($scope.tabType);
			} else {
				alertmsg("查询失败", "error")
			}
		});
	}
	
	$scope.getSourceContract=function(sourceContractNum){
		var jsonObject={
			type:"6",
			contractNum:sourceContractNum
		}
		jsonObject=JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'contractNew/getContract',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.contractInfo=data.data.contractList[0];
				$scope.shiftProductTab($stateParams.uiParams.tabType);
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
			name: "serviceDetails"
		})
		$scope.contractInfo=$stateParams.uiParams.contractInfo;
		$scope.taskType=$stateParams.uiParams.taskType;
		$scope.addInfo.contractId=$scope.contractInfo.contractId;
		$scope.getCalInfo("1");
		$scope.getCalInfo("2");
		$scope.shiftProductTab($stateParams.uiParams.tabType);
		$scope.tabShow=$stateParams.uiParams.tabShow;
	}else if($stateParams.uiParams.type == "2") {
		$scope.contractInfo=$stateParams.uiParams.contractInfo;
		$scope.taskType=$stateParams.uiParams.taskType;
		$scope.addInfo.contractId=$scope.contractInfo.contractId;
		$scope.shiftProductTab($stateParams.uiParams.tabType);
		$scope.tabShow=$stateParams.uiParams.tabShow;
	}
	
	/*跳转续签*/
	$scope.goContinueSign=function(){
		$stateParams.uiParams.type="1";
		var params=$stateParams.uiParams;
		var goFlag=true;
		if($scope.contractTabInfo.taskInfoKF!=undefined&&$scope.contractTabInfo.taskInfoKF.reSignUserId==$scope.userInfo.userId&&$scope.contractTabInfo.taskInfoKF.reSignDate==''){
			params.taskInfoKF=$scope.contractTabInfo.taskInfoKF;
			goFlag=false;
		}
		if($scope.contractTabInfo.taskInfoMG!=undefined&&$scope.contractTabInfo.taskInfoMG.reSignUserId==$scope.userInfo.userId&&$scope.contractTabInfo.taskInfoMG.reSignDate==''){
			params.taskInfoMG=$scope.contractTabInfo.taskInfoMG;
			goFlag=false;
		}
		if($scope.contractTabInfo.taskInfoYY!=undefined&&$scope.contractTabInfo.taskInfoYY.reSignUserId==$scope.userInfo.userId&&$scope.contractTabInfo.taskInfoYY.reSignDate==''){
			params.taskInfoYY=$scope.contractTabInfo.taskInfoYY;
			goFlag=false;
		}
		if($scope.contractTabInfo.taskInfoPX!=undefined&&$scope.contractTabInfo.taskInfoPX.reSignUserId==$scope.userInfo.userId&&$scope.contractTabInfo.taskInfoPX.reSignDate==''){
			params.taskInfoPX=$scope.contractTabInfo.taskInfoPX;
			goFlag=false;
		}
		if(goFlag){
			alertmsg("无可续签合同", "error");
			return;
		}
		$state.go("contractRenew", {
			uiParams: params
		});
	}
	
	
	/*编辑合同*/
	$scope.editContract=function(){
		$stateParams.uiParams.type="1";
		var params=$stateParams.uiParams;
		if($scope.contractTabInfo.taskInfoKF!=undefined){
			params.taskInfoKF=$scope.contractTabInfo.taskInfoKF;
		}
		if($scope.contractTabInfo.taskInfoMG!=undefined){
			params.taskInfoMG=$scope.contractTabInfo.taskInfoMG;
		}
		if($scope.contractTabInfo.taskInfoYY!=undefined){
			params.taskInfoYY=$scope.contractTabInfo.taskInfoYY;
		}
		if($scope.contractTabInfo.taskInfoPX!=undefined){
			params.taskInfoPX=$scope.contractTabInfo.taskInfoPX;
		}
		
		$state.go('contractEdit',{
			uiParams:params
		})
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