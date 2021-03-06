qyApp.controller('addClassifyProController',['$scope', '$http', '$compile', '$state', '$stateParams','Upload', function($scope, $http, $compile, $state, $stateParams,Upload) {

	$scope.model={
		'isShowFrame':'0',
		"proName":""
	}
	$scope.modelGroupDetailArr=[];
	$scope.deleteCheckAll=false;
	/*添加商品*/
	$scope.addProduct=function(){
		$scope.model.isShowFrame='1';
		$scope.modelGroupDetailArr=[];
		$scope.getModelProList();
	}
	
	$scope.setAddCheckAll=function(){
		var checkElements = $(".code_addcheckbox");
		var checkedFlag = $("#selectAddAll")[0].checked;
		for(var i = 0; i < checkElements.length; i++) {
			checkElements[i].checked = checkedFlag;
		}
		$scope.modelGroupDetailArr=[];
		if(checkedFlag){
			for(var i=0;i<$scope.proList.length;i++){
				$scope.modelGroupDetailArr.push($scope.proList[i].proModelid);
			}
		}
	}
	
	$scope.setDeleteCheckAll=function(){
		var checkElements = $(".code_checkbox");
		var checkedFlag = $("#selectDeleteAll")[0].checked;
		for(var i = 0; i < checkElements.length; i++) {
			checkElements[i].checked = checkedFlag;
		}
		$scope.modelGroupDetailArr=[];
		if(checkedFlag){
			for(var i=0;i<$scope.groupProList.length;i++){
				$scope.modelGroupDetailArr.push($scope.groupProList[i].proModelid);
			}
		}
	}
	
	$scope.deleteSelectAll = function() {
		var checkElements = $(".code_checkbox");
		var checkedFlag = $("#selectAll")[0].checked;
		for(var i = 0; i < checkElements.length; i++) {
			checkElements[i].checked = checkedFlag;
		}
	}
	
	$scope.closeDia=function(){
		$scope.model.isShowFrame='0';
		$scope.modelGroupDetailArr=[];
		getModelProList();
	}
	
	$scope.selectAddProduct=function(obj){
		for(var i=0;i<$scope.modelGroupDetailArr.length;i++){
			if($scope.modelGroupDetailArr[i]==obj.pro.proModelid){
				$scope.modelGroupDetailArr.splice(i,1);
				return;
			}
		}
		$scope.modelGroupDetailArr.push(obj.pro.proModelid);
	}
	
	$scope.deleteOne=function(obj){
		var jsonObject={
			"modelid":obj.pro.proModelid,
			"modelGroupId":$scope.modelGroup.modelGroupId
		}
		deleteModelGroupDetail(jsonObject);
	}
	
	$scope.deleteBatch=function(obj){
		if($scope.modelGroupDetailArr.length==0){
			return;
		}
		var jsonObject={
			"modelid":$scope.modelGroupDetailArr.join(","),
			"modelGroupId":$scope.modelGroup.modelGroupId
		}
		deleteModelGroupDetail(jsonObject);
	}
	
	var from=0;
	var pageSize=10;
	getModelProList=function(){
		var jsonObject={"nub":""+from+"","size":""+pageSize+"","modelGroupId":$scope.modelGroup.modelGroupId,"existsFlag":"0"};
		jsonObject=JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'product/getProductInfoForWd',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.groupProList = data.data.modelList;
				console.log($scope.groupProList);
				$scope.modelGroup.modelCount=data.data.count;
				$scope.createPagePlugin(data.data.count, pageSize);
			} else {
				alertmsg("获取商品信息失败", "error");
			}
		})
	}
	
	$scope.createPagePlugin = function(total, pageSize) {
		$("#paging").empty();
		paging = pagePlugin.createPaging({
			renderTo: 'paging',
			total: total,
			pageSize: pageSize
		});
		paging.goPage = function(from, to) {
			$scope.pageMain(from - 1, pageSize);
		}
	};
	
	$scope.pageMain = function(from, pageSize) {
		var jsonObject={"nub":""+from+"","size":""+pageSize+"","modelGroupId":$scope.modelGroup.modelGroupId,"existsFlag":"0"};
		jsonObject=JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'product/getProductInfoForWd',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.groupProList = data.data.modelList;
			} else {
				alertmsg("获取商品信息失败", "error");
			}
		})
	}
	
	$scope.getModelProList=function(){
		var jsonObject={"proName":$scope.model.proName,"nub":""+from+"","size":""+pageSize+"","modelGroupId":$scope.modelGroup.modelGroupId,"existsFlag":"1"};
		jsonObject=JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'product/getProductInfoForWd',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.proList = data.data.modelList;
				$scope.createPagePlugin1(data.data.count, pageSize);
			} else {
				alertmsg("获取商品信息失败", "error");
			}
		})
	}
	
	$scope.createPagePlugin1 = function(total, pageSize) {
		$("#paging1").empty();
		paging = pagePlugin.createPaging({
			renderTo: 'paging1',
			total: total,
			pageSize: pageSize
		});
		paging.goPage = function(from, to) {
			$scope.pageAdd(from - 1, pageSize);
		}
	};
	
	$scope.pageAdd = function(from, pageSize) {
		var jsonObject={"proName":$scope.model.proName,"nub":""+from+"","size":""+pageSize+"","modelGroupId":$scope.modelGroup.modelGroupId,"existsFlag":"1"};
		jsonObject=JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'product/getProductInfoForWd',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.proList = data.data.modelList;
			} else {
				alertmsg("获取商品信息失败", "error");
			}
		})
	}
	
	$scope.saveModelGroupDetail=function(){
		var jsonObject={
			"orgId":$scope.modelGroup.orgId,
			"modelGroupId":$scope.modelGroup.modelGroupId,
			"modelGroupDetailArr":$scope.modelGroupDetailArr
		};
		jsonObject=JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'modelGroup/saveModelGroupDetail',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.closeDia();
			} else {
				alertmsg("获取商品信息失败", "error");
			}
		})
	}
	
	deleteModelGroupDetail=function(jsonObject){
		jsonObject=JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'modelGroup/deleteModelGroupDetail',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.closeDia();
			} else {
				alertmsg("获取商品信息失败", "error");
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
			name: "addClassifyPro"
		})
		$scope.modelGroup=$stateParams.uiParams.modelGroup;
		getModelProList();
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







}])