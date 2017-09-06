qyApp.controller("newSignMgtController", function($scope, $http, Upload, $compile, $route, $state, $stateParams) {
	
	var userInfo=JSON.parse(localStorage.userInfo);
	
	//查询参数
	$scope.search={
		"contractNum":"",
		"orgId":"",
		"signName":"",
		"productType":"",
		"type":"0",
		"roleId":"12"//userInfo.roleId,
	}
	
	/*查询合同列表*/
	var from='0';
	var pageSize=10;
	$scope.getContracts =function(){
		/*默认查询在册店铺*/
		$scope.jsonPage={"nub":""+from+"","size":""+pageSize+""};
		$.extend($scope.jsonPage,$scope.search);
		var jsonObject=JSON.stringify($scope.jsonPage);
		console.log($scope.jsonObject)
		$http({
			method: 'post',
			url: pos + 'contractNew/getContract',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			console.log(data)
			if(data.code == 1) {
				if(data.data.contractList){
					$scope.contractList = data.data.contractList;
					$scope.count=data.data.count;
					if($scope.count > pageSize) {
						$scope.createPagePlugin($scope.count,pageSize);
					} else {
						$("#paging1").empty();
					}
				}
			} else {
				alertmsg("查询失败", "error")
			}
		});
	}
	
	/*分页代码*/
	$scope.createPagePlugin = function(total, pageSize) {
		$("#paging1").empty();
		paging = pagePlugin.createPaging({
			renderTo: 'paging1',
			total: total,
			pageSize: pageSize
		});
		paging.goPage = function(from, to) {
			$scope.page(from - 1, pageSize);
		}
	};
	
	$scope.page = function(from, pageSize) {
		$scope.jsonPage={"nub":""+from+"","size":""+pageSize+""};
		$.extend($scope.jsonPage,$scope.search);
		var jsonObject=JSON.stringify($scope.jsonPage);
		console.log($scope.jsonObject)
		$http({
			method: 'post',
			url: pos + 'contractNew/getContract',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			console.log(data)
			if(data.code == 1) {
				if(data.data.contractList){
					$scope.contractList = data.data.contractList;
				}
			} else {
				alertmsg("查询失败", "error")
			}
		});
	}
	
	/*加载客户数据*/
	$scope.loadOrgList=function(jsonObject){
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: stat + 'orgManage/getOrgListTB',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.orgManageLists = data.data.orgManageList;
				var html=[];
				$.each($scope.orgManageLists,function(i,n){
					html.push('<option value="'+n.orgId+'">'+n.shopName+'</option>')
				})
				$('#comCiaList').append(html.join(""));
				$('.selectpicker').selectpicker('refresh');
			} else {
				alertmsg(data.msg, "获取商户信息失败")
			}
		})
	}
	
	/**
	 * 路由跳转方法
	 * showLog:查看日志明细
	 * loadInit:初始化页面
	 */
	function loadInit(){
		//初始化数据
		$scope.getContracts();
		var jsonObject = {
				orgId: "",
				userId: "",
				shopName: "",
				nub: "",
				size: ""
		};
		$scope.loadOrgList(jsonObject);
	}
	
	$scope.pageInfo = {};
	$scope.rootArr = [];
	$scope.addData = function(rootName, rootGoname, obj, productTab) {
		$scope.pageInfo = obj;
		$scope.rootPage = {
			level: 0,
			name: rootName
		};
		$scope.rootArr.push($scope.rootPage)
		$stateParams.uiParams = {
			orgInfo: $scope.pageInfo,
			source: $scope.rootArr,
			type: "1",
			productTab: productTab
		};
		$state.go(rootGoname, {
			uiParams: $stateParams.uiParams
		})
	}
	
	$scope.showLog=function(obj){
		var sourceArr = [{
			level: 0,
			name: "newSignMgt"
		}];
		var params={
			"source": sourceArr,
			"type": "1",
			"contractInfo":obj.contract,
			"tabType":3,
			"taskType":"'0','1','2','3'",
			"tabShow":"1,2,3,4,5"
		};
		$state.go("serviceDetails", {
			uiParams: params
		});
	}
	

	loadInit();

});








