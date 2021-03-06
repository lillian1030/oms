qyApp.controller("productListController", function($scope, $http, Upload, $compile, $route, $state, $stateParams) {
	
	$scope.obj = {
		productBaseInfo: "hide",
		//			productBaseInfo: "show",
		productEditBaseInfo: "hide",
		productAdd: "hide",
		//			productCenter: "hide"
		productCenter: "show",
		modelEdit: "hide",
		modelAdd: "hide",
		modelList: "hide"
	}
	$scope.source=[];
	$scope.userInfo=eval('(' +localStorage.userInfo+ ')');
	
	if($stateParams.uiParams.orgId!=undefined) {
		$scope.orgId = $stateParams.uiParams.orgId;
		$scope.orgInfo = $stateParams.uiParams.orgManage;
		$scope.source = $stateParams.uiParams.source;
	} else {
		$scope.orgId = JSON.parse(keyParams).orgId;
	}
	$scope.productTab = "1";
	$scope.nub = 0;
	$scope.size = 10;
	$scope.count = 0;
	$scope.proCount = 0;
	$scope.publish = 0;
	$scope.notPublish = 0;
	////	商品基本信息里面的Tab选项卡切换
	$scope.tabFlag = "5";
	$scope.shiftTab = function(index) {
			$scope.tabFlag = index;
		}
		//	在商品列表点击选项卡
		//$scope.productTab = "1";
	$scope.shiftProductTab = function(index) {
			$scope.productTab = index;
			$scope.getProListTB();
		}
		//	点击返回按钮
		/*路由跳转*/
		//路由跳转
	$scope.goRoute = function(routeName, obj,tabindex) {
		//localStorage.goRouteInfo=JSON.stringify(obj.orgInfo);
			//公共参数部分
		var params="";
		if($stateParams.uiParams==""){
			var sourceArr = [{
				level: 0,
				name: "productList"
			}];
			params = {
				"source": sourceArr,
				"type": "1"
			};
		}else{
			$stateParams.uiParams.type="1";
			params=$stateParams.uiParams;
		}
			//个性化参数部分
			if(routeName == "productAdd") {
				//添加路由
				$.extend(params, {
					hasPromodelId:true
				});
			} else if(routeName == "productBaseInfo") {
				
				if(tabindex=="post"){
					$scope.tabIndex="6";
				}else{
					$scope.tabIndex="1";
				}
				$.extend(params, {
					"orgId": $scope.orgId,
					"model": $.extend(obj.model, {"tabIndex":$scope.tabIndex}),
					
				});
			} 
			//跳转
			$state.go(routeName, {
				uiParams: params
			});			
		}
	//跳转发布商品页面
	$scope.goRoute2 = function(){
		//判断是否选中店铺
		if($scope.selOrg.length == 0){
			alertmsg("至少选择一个店铺", "error");
			return false;
		}
		//判断品类是否有对应的平台品类
		var type = $scope.type;
		var jsonObject = {
				type: type,
				orgId: $scope.orgId,
				sortId:$scope.model.sortId,
				shopOrgIds:$scope.selOrg
			};
		var jsonObject = JSON.stringify(jsonObject);
		$http({
			async: true,
			method: "post",
			url: pos + "sortCompare/getPlatformSort",
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data) {
			if(data.code==1){
				if(data.data.flag == 0){
					alertmsg(data.data.shopNames+" 店铺未授权，请授权再发布", "error");
				}else{
					if(data.data.sort.sortId==''){
						alertmsg("该商品没有对应平台类目", "error");
					}else{
						$scope.sort = data.data.sort;
						var source = {level:0,name:"productList"};
						$scope.source.push(source);
						var params={
								"source":$scope.source,
								"type":"1"
							};
						$.extend(
								params,
								{
									model:$scope.model,
									orgId:$scope.orgId,
									orgInfo:$scope.orgInfo,
									publish:$scope.publishInfoList,
									selOrg:$scope.selOrg,
									sortId:$scope.sort.sortId,
									type:type
								});
						if(type == 0){
							$state.go("productPost", {
								uiParams: params
							});
						}else if(type == 2){
							$state.go("productPost_taobao", {
								uiParams: params
							});
						}
						$('.maskBg').hide();
						$scope.type = "";
					}
				}
			}else{
				alertmsg(data.msg,"error");
			}
		});
		
	}
	//在商品列表点击添加商品按钮
		//分页
	$scope.createPagePlugin = function(total, pageSize, pageId, type) {
		$("#" + pageId + "").empty();
		paging = pagePlugin.createPaging({
			renderTo: pageId,
			total: total,
			pageSize: pageSize
		});
		paging.goPage = function(from, to) {
			if(type == "1") {
				$scope.page(from - 1, pageSize);
			} else if(type == "2") {
				$scope.pageB(from - 1, pageSize);
			}
		}
	};
	$scope.page = function(from, pageSize) {
		$scope.jsonPage = {
			"nub": "" + from + "",
			"size": "" + pageSize + ""
		};
		$.extend($scope.jsonPage, $scope.param);
		$scope.jsonObject = JSON.stringify($scope.jsonPage);
		$http({
			method: 'post',
			url: pos + 'model/getProListTB',
			params: {
				keyParams: getKeyParams($scope.jsonObject, keyParams),
				jsonObject: getJsonObject($scope.jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.modelList = data.data.modelList;
				$scope.proCount = $scope.modelList[0].proCount;
				$scope.publish = $scope.modelList[0].publish;
				$scope.notPublish = $scope.proCount - $scope.publish;
				$scope.count = $scope.modelList[0].count;
				$scope.param = {
					"orgId": "" + $scope.orgId + "",
					"proStatus": "" + proStatus + ""
				};
				if(Number($scope.count) > Number($scope.size)) {
					$scope.createPagePlugin($scope.count, $scope.size, "paging", "1");
				}
			} else {
				alertmsg("获取商品列表失败", "error");
			}
		})
	}
	$scope.pageB = function(from, pageSize) {
			var jsonObject1 = {
				"proAttrName": "a",
				"proModelid": $scope.proModelidPicture,
				"nub": from,
				"size": pageSize
			};
			jsonObject = JSON.stringify(jsonObject1);
			$http({
				async: true,
				method: "post",
				url: pos + "product/getProductAttrTB",
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data) {
				if(data.code == 1) {
					var imgList = [];
					var fileList = [];
					attrList = data.data.attrList;
					for(var i = 0; i < attrList.length; i++) {
						if(attrList[i].proAttrFilePath.indexOf("/") >= 0) {
							var file = attrList[i].proAttrFilePath;
							file = file.substring(0, file.lastIndexOf("/"));
							if(fileList.indexOf(file) < 0) {
								fileList.push(file)
							}
						} else if(attrList[i].proAttrFilePath.indexOf("/") < 0) {
							imgList.push(attrList[i]);
						}
					}
					$scope.imgList = imgList;
					$scope.imgListCount = data.data.count;
					$scope.fileList = fileList;
				} else {
					if(data.msg != null) {
						showError(data.msg);
					} else {
						showError(errorTip);
					}
					return;
				}
			});
		}
		//商品列表
	$scope.getProListTB = function() {
		var proStatus;
		if($scope.productTab == "1") {
			proStatus = "";
		} else if($scope.productTab == "2") {
			proStatus = "1";
		} else if($scope.productTab == "3") {
			proStatus = "0";
		}
		var jsonObject = {
			"orgId": $scope.orgId,
			"proStatus": proStatus,
			"nub": ""+$scope.nub,
			"size": ""+$scope.size
		};
		jsonObject = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'model/getProListTB',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				if(data.data.modelList.length > 0) {
					$scope.modelList = data.data.modelList;
					$scope.proCount = $scope.modelList[0].proCount;
					$scope.publish = $scope.modelList[0].publish;
					$scope.notPublish = $scope.proCount - $scope.publish;
					$scope.count = $scope.modelList[0].count;
					$scope.param = {
						"orgId": "" + $scope.orgId + "",
						"proStatus": "" + proStatus + ""
					};
//					if(Number($scope.count) > Number($scope.size)) {
//						$scope.createPagePlugin($scope.count, $scope.size, "paging", "1");
//					}
                    if (Number($scope.count) > Number($scope.size)) {
                        $scope.createPagePlugin($scope.count, $scope.size,"paging", "1");
                    } else {
                    	$("#paging").empty();
                    }
				} else {
					$scope.proCount=0;
					$scope.modelList = "";
					$("#paging").empty();
				}

			} else {
				alertmsg("获取商品列表失败", "error");
			}
		})
	}
	$scope.getProListTB();
	/*添加商品的代码*/

	/*商品详情页面的代码*/
	$scope.getPublishInfo = function(proModelid) {
			var json = eval('(' + keyParams + ')');
			var jsonObject1 = {
				"modelid": proModelid,
				"pOrgId": $scope.orgId
			};
			var jsonObject = JSON.stringify(jsonObject1);
			$http({
				async: true,
				method: "post",
				url: pos + "publish/getPublishInfoTB",
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data) {
				if(data.code == 1) {
					$scope.publishInfoList = data.data.publishInfoList;
					$scope.publishInfoList.forEach(function(ele) {
						$scope.publishStatus.push(ele.publishStatus);
					});
					if($scope.publishStatus.indexOf("未发布") < 0) {
						$(".storeProRightPublish").prop("disabled", true).addClass('postStDefault');
					} else {
						$(".storeProRightPublish").prop("disabled", false).removeClass('postStDefault');
					}
				} else {
					if(data.msg != null) {
						showError(data.msg);
					} else {
						showError(errorTip);
					}
					return;
				}
			});
		}
		/*商品详情页面的代码*/
		//	发布
	$scope.getShop = function(obj) {
		$scope.model = obj.model;
		$scope.getPublishInfo($scope.model.proModelid);
		$('.setDayTargetL').center().show();
		$('.maskBg').show();
	}
	$scope.getPublishInfo = function(proModelid) {
		var json = eval('(' + keyParams + ')');
		var jsonObject1 = {
			"modelid": proModelid,
			"pOrgId": $scope.orgId
		};
		var jsonObject = JSON.stringify(jsonObject1);
		$http({
			async: true,
			method: "post",
			url: pos + "publish/getPublishInfoTB",
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data) {
			if(data.code == 1) {
				$scope.publishInfoList = data.data.publishInfoList;
				$scope.publishStatus = [];
				$scope.selOrg = [];
				$scope.publishInfoList.forEach(function(ele) {
					$scope.publishStatus.push(ele.publishStatus);
				});
				if($scope.publishStatus.indexOf("未发布") < 0) {
					$(".storeProRightPublish").prop("disabled", true).addClass('postStDefault');
				} else {
					$(".storeProRightPublish").prop("disabled", false).removeClass('postStDefault');
				}
			} else {
				if(data.msg != null) {
					showError(data.msg);
				} else {
					showError(errorTip);
				}
				return;
			}
		});
	}
	
	$scope.type="";
	//选择店铺
	$scope.chooseShop = function(orgId,type) {
		if($scope.type==""){
			$scope.type = type;
		}
		if($scope.type == type){
			$("." + orgId).toggleClass('selectStoreName').siblings('.selec-stores');
			$("." + orgId).children('.iconSelect').toggleClass('fn-hide');
			if($scope.selOrg.indexOf(orgId) >= 0){
				var orgIdIndex = -1;
				for (var i = 0; i < $scope.selOrg.length; i++) {
						if ($scope.selOrg[i] == orgId){
							orgIdIndex = i;
						}
					}
				$scope.selOrg.splice(orgIdIndex, 1);
				if($scope.selOrg.length == 0){
					$scope.type="";
				}
			}else{
				$scope.selOrg.push(orgId);
				if($scope.selOrg.length == 0){
					$scope.type="";
				}
			}
		}else{
			alertmsg("只能选择同一种平台的店铺", "error");
		}
	}
	$scope.publishPro = function() {
		var orgId = "";
		$("div.selectStoreName input").each(function() {
			orgId += $(this).val() + ",";
		});
		if(orgId == "") {
			$('.setDayTargetL,.maskBg').hide();
			alertmsg("至少选择一个店铺", "error");
			return false;
		}
		var json = eval('(' + keyParams + ')');
		var jsonObject1 = {
			"pOrgId": $scope.orgId,
			"modelid": $scope.model.proModelid,
			"orgIds": orgId,
			"publishStatus": "1"
		};
		var jsonObject = JSON.stringify(jsonObject1);
		$http({
			method: 'post',
			url: pos + 'publish/addPublishInfoTB',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data) {
			if(data.code == 1) {
				$('.setDayTargetL,.maskBg').hide();
				alertmsg('发布成功');
				$scope.getPublishInfo($scope.model.proModelid);
				$scope.getProListTB();
			} else {
				alertmsg("添加失败", "error");
			}
		})

	}

	$scope.publishPro1 = function(orgId) {
			$('#updateFile').center();
			$('#updateFile,.maskBg').show();
			$('#updateFile').find('.confirmExecute').click(function() {
				$('#updateFile,.maskBg').hide();
				var json = eval('(' + keyParams + ')');
				var jsonObject1 = {
					"pOrgId": $scope.orgId,
					"modelid": $scope.model.proModelid,
					"orgIds": orgId,
					"publishStatus": "1"
				};
				var jsonObject = JSON.stringify(jsonObject1);
				$http({
					method: 'post',
					url: pos + 'publish/addPublishInfoTB',
					params: {
						keyParams: getKeyParams(jsonObject, keyParams),
						jsonObject: getJsonObject(jsonObject)
					}
				}).success(function(data) {
					if(data.code == 1) {
						$('.setDayTargetL,.maskBg').hide();
						alertmsg('添加成功');
						$scope.getPublishInfo($scope.model.proModelid);
					} else {
						alertmsg("添加失败", "error");
					}
				})
			})
		}
		//////////////////HXL END
	$scope.getShop = function(obj) {
		$scope.model = obj.model;
		$scope.getPublishInfo($scope.model.proModelid);
		$('.setDayTargetL').center().show();
		$('.maskBg').show();
	}
	$scope.releaseAgain = function() {
		alertmsg("发布成功!");
	};
	//重置要发布的店铺
	$scope.selectReset = function(event) {
		var orgId = "";
		$(event.target).parents('.publishFrame').prev('.setDayTargetContent').find('.selec-stores').removeClass('selectStoreName').end().find('.iconSelect').addClass('fn-hide');
	}
	
	/*点击返回按钮*/
	$scope.goback = function() {
			$stateParams.uiParams.source.splice($stateParams.uiParams.source.length - 1, 1);
			$state.go($stateParams.uiParams.source[$stateParams.uiParams.source.length - 1].name, {
				uiParams: {
					"orgId": $stateParams.uiParams.orgId,
					"source": $stateParams.uiParams.source,
					"type": "2"

				}
			})
		}
	/*随鼠标移动事件*/
	$(".showshopName").showName();
	$(".showshopName").removeName();
	
});