qyApp.controller("contractRenewController", function($scope, $timeout, $http, Upload, $compile, $route, $state, $stateParams) {
	
	$scope.userInfo=JSON.parse(localStorage.userInfo);
	$scope.userDpeartInfo="";
	$scope.newContract={
		"contractType":'1',
		"departId":$scope.userInfo.departId,
		"memo":"",
		"userDpeartInfo":$scope.userInfo.userId+","+$scope.userInfo.departId,
		"totalAmount":"",
		"carryAmount":"0",
		"productArr":[]
	}
	$scope.selectCustomer=false;
	$scope.selectArt=false;
	$scope.selectOperation=false;
	$scope.selectTrain=false;
	
	/*
	 * selectServiceType:修改客服服务类型
	 * shopChecked:选择店铺
	 * uploadWork:上传图片
	 * checkContract:合同续签信息校验
	 * */
	$scope.selectFlag=function(type){
		if(type=="0"){
			$scope.selectCustomer=!$scope.selectCustomer;
		}else if(type=="1"){
			$scope.selectArt=!$scope.selectArt;
		}else if(type=="2"){
			$scope.selectOperation=!$scope.selectOperation;
		}else if(type=="3"){
			$scope.selectTrain=!$scope.selectTrain;
		}
	}
	
	
	$scope.changeServiceType=function(){
		$scope.taskInfoKF.deductRate="";
	}
	
	var shopArr=[];
	$scope.shopChecked=function(shopId){
		for(var i=0;i<shopArr.length;i++){
			if(shopArr[i]==shopId){
				shopArr.splice(i,1);
				return;
			}
		}
		shopArr.push(shopId);
	}
	
	//上传work
	$scope.uploadWork=function(files,type){
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
								"fileName":data.data.workName,
								"fileUrl":data.data.workPath
							}
							if(type=='1'){
								$scope.taskInfoKF.contractExtendList.push(json);
							}else if(type=='2'){
								$scope.taskInfoMG.contractExtendList.push(json);
							}else if(type=='3'){
								$scope.taskInfoYY.contractExtendList.push(json);
							}else{
								$scope.taskInfoPX.contractExtendList.push(json);
							}
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
	
	checkContract=function(){
		if(!$scope.selectCustomer&&!$scope.selectArt&&!$scope.selectOperation&&!$scope.selectTrain){
			if($scope.taskInfoKF.beginDate==""||$scope.taskInfoKF.endDate==""){
				alertmsg("请至少选择一个服务类型", "error");
				return true;
			}
		}
		if($scope.selectCustomer){
			$scope.taskInfoKF.beginDate=$('#beginDateKF').val();
			$scope.taskInfoKF.endDate=$('#endDateKF').val();
			if($scope.taskInfoKF.beginDate==""||$scope.taskInfoKF.endDate==""){
				alertmsg("请填写客服服务日期", "error");
				return true;
			}
			if($scope.taskInfoKF.serviceNum==""){
				alertmsg("请填写客服席位数量", "error");
				return true;
			}
			if($scope.taskInfoKF.unitPrice==""){
				alertmsg("请填写客服席位单价", "error");
				return true;
			}
			if($scope.taskInfoKF.serviceType=="1"&&$scope.taskInfoKF.deductRate==""){
				alertmsg("请填写客服提成比例", "error");
				return true;
			}
			if($scope.taskInfoKF.serviceAmount==""){
				alertmsg("请填写客服服务费用", "error");
				return true;
			}
		};
		if($scope.selectArt){
			$scope.taskInfoMG.beginDate=$('#beginDateMG').val();
			$scope.taskInfoMG.endDate=$('#endDateMG').val();
			if($scope.taskInfoMG.beginDate==""||$scope.taskInfoMG.endDate==""){
				alertmsg("请填写美工服务日期", "error");
				return true;
			}
			if($scope.taskInfoMG.serviceAmount==""){
				alertmsg("请填写美工服务费用", "error");
				return true;
			}
		};
		if($scope.selectOperation){
			$scope.taskInfoYY.beginDate=$('#beginDateYY').val();
			$scope.taskInfoYY.endDate=$('#endDateYY').val();
			if($scope.taskInfoYY.beginDate==""||$scope.taskInfoYY.endDate==""){
				alertmsg("请填写运营服务日期", "error");
				return true;
			}
			if($scope.taskInfoYY.serviceAmount==""){
				alertmsg("请填写运营服务费用", "error");
				return true;
			}
		};
		if($scope.selectTrain){
			$scope.taskInfoPX.beginDate=$('#beginDatePX').val();
			$scope.taskInfoPX.endDate=$('#endDatePX').val();
			if($scope.taskInfoPX.beginDate==""||$scope.taskInfoPX.endDate==""){
				alertmsg("请填写培训服务日期", "error");
				return true;
			}
			if($scope.taskInfoPX.serviceAmount==""){
				alertmsg("请填写培训服务费用", "error");
				return true;
			}
		};
		return false;
	}
	
	/*
	 * 调用接口
	 * reSignContract:续签合同
	 * getShopList:获取店铺列表
	 * */
	
	$scope.reSignContract=function(){
		if(checkContract()){
			return;
		}
		$scope.newContract.productArr=[];
		if(!$scope.isDeduction){
			$scope.newContract.carryAmount="0";
		}
		if($scope.newContract.carryAmount==undefined||$scope.newContract.carryAmount==""){
			$scope.newContract.carryAmount="0";
		}
		var productType="";
		if($scope.selectCustomer){
			$scope.taskInfoKF.beginDate=$('#beginDateKF').val();
			$scope.taskInfoKF.endDate=$('#endDateKF').val();
			$scope.newContract.productArr.push($scope.taskInfoKF);
			if(productType==""){
				productType="客服";
			}else{
				productType=productType+",客服"
			}
		};
		if($scope.selectArt){
			$scope.taskInfoMG.beginDate=$('#beginDateMG').val();
			$scope.taskInfoMG.endDate=$('#endDateMG').val();
			$scope.newContract.productArr.push($scope.taskInfoMG);
			if(productType==""){
				productType="美工";
			}else{
				productType=productType+",美工"
			}
		};
		if($scope.selectOperation){
			$scope.taskInfoYY.beginDate=$('#beginDateYY').val();
			$scope.taskInfoYY.endDate=$('#endDateYY').val();
			$scope.newContract.productArr.push($scope.taskInfoYY);
			if(productType==""){
				productType="运营";
			}else{
				productType=productType+",运营"
			}
		};
		if($scope.selectTrain){
			$scope.taskInfoPX.beginDate=$('#beginDatePX').val();
			$scope.taskInfoPX.endDate=$('#endDatePX').val();
			$scope.newContract.productArr.push($scope.taskInfoPX);
			if(productType==""){
				productType="培训";
			}else{
				productType=productType+",培训"
			}
		};
		$scope.newContract.productType=productType;
		$scope.newContract.signDate=$('#signDate').val();
		if(shopArr.length==0){
			return;
		}
		$scope.newContract.shopId=shopArr.join(",");
		var jsonObject=JSON.stringify($scope.newContract);
		console.log(jsonObject);
		$http({
			method: 'post',
			url: pos + 'contractNew/reSignContract',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.goback();
			} else {
				alertmsg(data.msg, "error");
			}
		});
	}
	
	$scope.getShopList=function(){
		$scope.isDeduction=false;
		/*获取可结转金额*/
		$scope.accountAmount=$scope.contractInfo.orgInfo.accountAmount;
			
		console.log($scope.accountAmount)
		var shopObject={
			orgId:$scope.contractInfo.orgInfo.orgId,
			shopProp:"3"
		};
		jsonObject = angular.toJson(shopObject);
		$http({
			method: 'post',
			url: pos + 'shop/getMerchantShop',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.shopList = data.data.shopList;
				$timeout(function(){
					angular.forEach($scope.shopList, function(ele, index) {
						angular.forEach($scope.contractInfo.shopList, function(n, i) {
							if(n.orgId==ele.orgId){
								$('#shop'+ele.orgId).prop("checked", true);
								shopArr.push(n.orgId);
							}
						});
					});
            	},'500');
			} else {
				alertmsg(data.msg, "error")
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
			name: "contractRenew"
		})
		$scope.contractInfo=$stateParams.uiParams.contractInfo;
		$scope.newContract.sourceContractId=$scope.contractInfo.contractId;
		$scope.newContract.sourceContractNum=$scope.contractInfo.contractNum;
		$scope.newContract.memo=$scope.contractInfo.memo;
		$scope.newContract.orgId=$scope.contractInfo.orgId;
		$scope.newContract.totalAmount=$scope.contractInfo.totalAmount;
		if($stateParams.uiParams.taskInfoKF!=undefined){
			$scope.taskInfoKF=$stateParams.uiParams.taskInfoKF;
			$scope.taskInfoKF.endDate="";
			$scope.taskInfoKF.beginDate="";
			$scope.selectCustomer=true;
		}
		if($stateParams.uiParams.taskInfoMG!=undefined){
			$scope.taskInfoMG=$stateParams.uiParams.taskInfoMG;
			$scope.taskInfoMG.endDate="";
			$scope.taskInfoMG.beginDate="";
			$scope.selectArt=true;
		}
		if($stateParams.uiParams.taskInfoYY!=undefined){
			$scope.taskInfoYY=$stateParams.uiParams.taskInfoYY;
			$scope.taskInfoYY.endDate="";
			$scope.taskInfoYY.beginDate="";
			$scope.selectOperation=true;
		}
		if($stateParams.uiParams.taskInfoPX!=undefined){
			$scope.taskInfoPX=$stateParams.uiParams.taskInfoPX;
			$scope.taskInfoPX.endDate="";
			$scope.taskInfoPX.beginDate="";
			$scope.selectTrain=true;
		}
		$scope.getShopList();
//		shopId
	}else if($stateParams.uiParams.type == "2") {
		$scope.contractInfo=$stateParams.uiParams.contractInfo;
		$scope.newContract.sourceContractNum=$scope.contractInfo.contractNum;
		$scope.newContract.memo=$scope.contractInfo.memo;
		$scope.newContract.orgId=$scope.contractInfo.orgId;
		$scope.newContract.totalAmount=$scope.contractInfo.totalAmount;
		if($stateParams.uiParams.taskInfoKF!=undefined){
			$scope.taskInfoKF=$stateParams.uiParams.taskInfoKF;
			$scope.selectCustomer=true;
		}
		if($stateParams.uiParams.taskInfoMG!=undefined){
			$scope.taskInfoMG=$stateParams.uiParams.taskInfoMG;
			$scope.selectArt=true;
		}
		if($stateParams.uiParams.taskInfoYY!=undefined){
			$scope.taskInfoYY=$stateParams.uiParams.taskInfoYY;
			$scope.selectOperation=true;
		}
		if($stateParams.uiParams.taskInfoPX!=undefined){
			$scope.taskInfoPX=$stateParams.uiParams.taskInfoPX;
			$scope.selectTrain=true;
		}
		$scope.getShopList();
	}
	
	//跳转添加部门
	$scope.goToStreAdd = function(){
		$state.go("storeAdd", {
			uiParams: $stateParams.uiParams,
			orgType:$scope.userInfo.orgType			
		}); 
	};
	
	/*点击返回按钮*/
	$scope.goback = function() {
		$stateParams.uiParams.source.splice($stateParams.uiParams.source.length - 1, 1);
		$stateParams.uiParams.type="2";
		$state.go($stateParams.uiParams.source[$stateParams.uiParams.source.length - 1].name, {
			uiParams: $stateParams.uiParams
		})
	}
});