qyApp.controller("wdOrdersController", function($scope, $http, Upload, $compile, $route, $state, $stateParams) {
	/*编辑分类商品*/
	$scope.search={
		proName:"",
		memberName:"",
		orderId:"",
		logiticNum:"",
		startTime:"",
		endTime:"",
		orderStatus:"",
		exportType:"one"
	}
	
	/*
	 * showLogiticInfo:发货
	 * showOrder:切换tab选项
	 * showCloseOrder:关闭订单
	 * */
	
	$scope.closeDia=function(){
		$scope.postWxProduct=false;
		$scope.warn="";
		$scope.logiticObj=undefined;
		$scope.closeOrderInfo=undefined;
		$scope.refundOrderInfo=undefined;
		$scope.closeOrder=false;
		$scope.refundOrder=false;
	}
	$scope.postWxProduct=false;
	$scope.showLogiticInfo=function(obj){
		$scope.postWxProduct=true;
		$scope.logiticObj = {
			orderId: obj.order.orderId,
			logiticStatus: "1",
			logiticCompanyId:"" ,
			logiticCompanyName:"",
			logiticNum:""
		}
	}
	
	
	
	$scope.tab="0";
	$scope.showOrder=function(type){
		$scope.tab=type;
		if(type=="0"){
			//全部
			$scope.search.orderStatus="";
		}else if(type=="1"){
			//未支付
			$scope.search.orderStatus="6";
		}else if(type=="2"){
			//待发货
			$scope.search.orderStatus="12";
		}else if(type=="3"){
			//待收获
			$scope.search.orderStatus="13";
		}else if(type=="4"){
			//退货退款
			$scope.search.orderStatus="14";
		}else if(type=="5"){
			//已完成
			$scope.search.orderStatus="17";
		}else if(type=="6"){
			//已关闭
			$scope.search.orderStatus="10";
		}
		$scope.getWdOrderList();
	}
	
	$scope.closeOrder=false;
	$scope.showCloseOrder=function(obj){
		$scope.closeOrderInfo=obj.order;
		$scope.closeOrder=true;
	}
	$scope.sureCloseOrder = function() {
		var jsonObject={
			orderId:$scope.closeOrderInfo.orderId,
			orderSource:$scope.closeOrderInfo.orderSource,
			orderStatus:"10"
		}
		simpleUpdateOrder(jsonObject);
	}
	
	$scope.refundOrder=false;
	$scope.showRefundOrder=function(obj){
		$scope.refundOrderInfo=obj.order;
		$scope.refundOrder=true;
	}
	$scope.sureRefundOrder = function() {
		var jsonObject={
			orderId:$scope.refundOrderInfo.orderId,
			orderSource:$scope.refundOrderInfo.orderSource,
			orderStatus:"9"
		}
		simpleUpdateOrder(jsonObject);
	}
	
	
	
	/*
	 * getWdOrderList:获取订单列表
	 * getlogisticsCompany:获取物流公司列表
	 * exportOrder:导出订单
	 * */
	var from=0;
	var pageSize=10;
	$scope.count="0";
	$scope.getWdOrderList=function(){
		$scope.search.nub=from;
		$scope.search.size=pageSize;
		$scope.search.startTime=$('#startTime').val();
		$scope.search.endTime=$('#endTime').val();
		var jsonObject=JSON.stringify($scope.search);
		$http({
			method: 'post',
			url: pos + 'order/getWdOrderList',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.orderList=data.data.orders;
				$scope.count=data.data.count;
				$scope.createPagePlugin(data.data.count,pageSize);
			} else {
				alertmsg("获取订单列表失败", "error");
			}
		})
	}
	
	$scope.exportOrder=function(){
		var jsonObject=JSON.stringify($scope.search);
		$http({
			method: 'post',
			url: pos + 'order/exportWdOrderList',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				window.location.href = data.data.path;
				alertmsg(data.msg);
			} else {
				alertmsg("订单列表下载失败", "error");
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
			$scope.page(from - 1, pageSize);
		}
	};
	
	$scope.page = function(from, pageSize) {
		$scope.search.nub=from;
		$scope.search.size=pageSize;
		var jsonObject=JSON.stringify($scope.search);
		$http({
			method: 'post',
			url: pos + 'order/getWdOrderList',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.orderList=data.data.orders;
			} else {
				alertmsg("获取订单列表失败", "error");
			}
		})
	}
	
	/*获取物流公司的接口*/
	$scope.logitic = {};
	$scope.getlogisticsCompany = function() {
		var jsonObject = {
			logiticCompanyIds: "",
			source: ""
		}
		jsonObject = angular.toJson(jsonObject)
		$http({
			method: 'post',
			url: pos + 'logitic/getLogiticCompany',
			async: true,
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.logiticMaps = [{
					code: "",
					logiticCompanyId: "",
					logiticCompanyName: "请选择",
					logiticDescribe: "",
					logo: ""
				}].concat(data.data.logiticMaps);
			} else {
				alertmsg(data.msg, "error");
			}
		});
	}
	
	$scope.warn="";
	$scope.updateLogiticInfo = function() {
		if($scope.logitic==undefined||$scope.logitic.logiticCompanyId==undefined){
			$scope.warn="请选择物流公司";
			return;
		}
		if($scope.logiticObj.logiticNum==""){
			$scope.warn="请填写物流单号";
			return;
		}
		$scope.logiticObj.logiticCompanyId =  $scope.logitic.logiticCompanyId;
		$scope.logiticObj.logiticCompanyName = $scope.logitic.logiticCompanyName;
		var jsonObject = angular.toJson($scope.logiticObj);
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
				$scope.showOrder($scope.tab);
				alertmsg("发货成功");
			} else {
				//				clearInterval(timer); 
				alertmsg(data.msg, "error");
			}
		})
	}
	
	simpleUpdateOrder=function(jsonObject){
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
				$scope.closeDia();
				$scope.showOrder($scope.tab);
			} else {
				alertmsg(data.msg, "error");
			}
		})
	}
	
	loadInit=function(){
		$scope.showOrder("0");
		$scope.getlogisticsCompany();
	}
	
	loadInit();
	
	
	$scope.checkDetail=function(obj){
		var sourceArr = [{
			level: 0,
			name: "wdOrders"
		}];
		var params={
			"source": sourceArr,
			"type": "1",
			"orderInfo":obj.order,
		};
		$state.go("wdOrderDetail", {
			uiParams: params
		});
	}
})