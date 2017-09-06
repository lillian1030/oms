qyApp.controller("modelListController", ["$scope", "$http", "Upload", "$compile", "$route", "$state", "$stateParams", function($scope, $http, Upload, $compile, $route, $state, $stateParams) {
	$stateParams.uiParams.source.push({
		level: $stateParams.uiParams.source.length,
		name: "modelList"
	})
	$scope.nub = "0";
	$scope.size = "10";
	$scope.addModel = function() {
		$state.go("modelAdd", {
			uiParams:$stateParams.uiParams
		})
	}
	$scope.userInfo = JSON.parse(keyParams);
	$scope.userId = $scope.userInfo.userId;
	$scope.orgId = $scope.userInfo.orgId;
	$scope.loadModelList = function() {
		$scope.jsonObject = {
			orgId: $scope.orgId,
			userId: $scope.userId,
			templateId: "",
			title: "",
			templateType:"0",/*模板类型(0详情页模板,1首页,2首页模板),*/
			nub: $scope.nub,
			size: $scope.size
		}
		$scope.jsonObject = JSON.stringify($scope.jsonObject);
		$scope.loadModel($scope.jsonObject);
	}
	$scope.loadModel = function(obj) {
		$http({
			method: 'post',
			url: pos + 'template/getTemplate',
			//			url: 'http://10.0.17.89:8080/pos-api/template/getTemplate',
			params: {
				keyParams: getKeyParams($scope.jsonObject, keyParams),
				jsonObject: getJsonObject($scope.jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.templateLists = data.data.templateList;
				$scope.templateCount = data.data.count;
				if($scope.templateCount > 10) {
					$scope.createPagePlugin($scope.templateCount, $scope.size, "paging");
				} else {
					$("#paging").empty();
				}
			} else {
				alertmsg(data.msg, "error")
			}
		});
	}
	$scope.loadModelList();
	/*点击编辑按钮*/
	$scope.editModel = function(obj) {
		$state.usedData = $.extend($stateParams.uiParams.model, obj.templateList);
		$stateParams.uiParams.model = $state.usedData;
		$state.go("modelEdit", {
			uiParams: $stateParams.uiParams
		})
	}
	$scope.deleteModel = function(obj) {
			$scope.jsonObject = {
				templateId: obj.templateList.templateId
			}
			$scope.jsonObject = JSON.stringify($scope.jsonObject);
			$http({
				method: 'post',
				url: pos + 'template/deleteTemplate',
				params: {
					keyParams: getKeyParams($scope.jsonObject, keyParams),
					jsonObject: getJsonObject($scope.jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					$scope.loadModelList();
				} else {
					alertmsg(data.msg, "error")
				}
			});
		}
		/*点击返回按钮*/
	$scope.goback = function() {
		$stateParams.uiParams.source.splice($stateParams.uiParams.source.length - 1, 1);
		$state.go($stateParams.uiParams.source[$stateParams.uiParams.source.length - 1].name, {
			uiParams: {
				"source": $stateParams.uiParams.source,
				"type": "2",
				"model": $.extend($stateParams.uiParams.model, {
					"tabIndex": "4",
				}),
				"proModelid": $stateParams.uiParams.proModelid,
				"orgId": $stateParams.uiParams.orgId,
				"source": $stateParams.uiParams.source,
				//						"type": "1",
				"orgManage": $stateParams.uiParams.orgManage
			}
		})
		}
		/*点击查询按钮*/
	$scope.search = function(modelName) {
			if(modelName == undefined) {
				modelName = "";
			}
			$scope.jsonObject = {
				orgId: $scope.orgId,
				userId: $scope.userId,
				templateName: modelName,
				title: modelName,
				templateType:"0",/*模板类型(0详情页模板,1首页,2首页模板),*/
				nub: $scope.nub,
				size: $scope.size
			}
			$scope.jsonObject = JSON.stringify($scope.jsonObject);
			$scope.loadModel($scope.jsonObject);
		}
		/*分页代码*/
	$scope.createPagePlugin = function(total, pageSize, pageId) {
		$("#" + pageId + "").empty();
		paging = pagePlugin.createPaging({
			renderTo: pageId,
			total: total,
			pageSize: pageSize
		});
		paging.goPage = function(from, to) {
			$scope.page(from - 1, pageSize);
		}
	};
	$scope.page = function(from, pageSize) {
		var jsonObject1 = {
			orgId: $scope.orgId,
			userId: $scope.userId,
			templateId: "",
			title: "",
			nub: from,
			size: pageSize
		};
		jsonObject1 = JSON.stringify(jsonObject1);
		$http({
			method: 'post',
			url: pos + 'template/getTemplate',
			params: {
				keyParams: getKeyParams(jsonObject1, keyParams),
				jsonObject: getJsonObject(jsonObject1)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.templateLists = data.data.templateList;
			} else {
				alertmsg(data.msg, "error")
			}
		});
	}
}]);