qyApp.controller('memberUnionController', ['$scope', '$http', '$compile', 'Upload', function($scope, $http, $compile, Upload) {
	$scope.userInfo = angular.fromJson(localStorage.keyParams);
	$scope.orgIda = $scope.userInfo.orgId;

	$scope.obj = {
		"memberUnionList": "show",
		"memberUnionCreate": "hide",
		"memberUnionCreateSuccess": "hide",
		"memberUnionJoin": "hide",
		"memberUnionJoinSuccess": "hide",
		"showUnionMember": "hide",
		"IntegrationRule": "hide",
		"showSetPart": "a",
		//      "isShow":false
	}
	$scope.pageSize = "10";
	$scope.from = "0";

	//  在会员联盟主页点击设置积分规则按钮
	$scope.setIntergrationRule = function() {
		$scope.obj.memberUnionList = "hide";
		$scope.obj.IntegrationRule = "show";
	}

	//	在联盟列表主页点击已加入商户数量
	//	返回按钮
	$scope.cancelOrGoback = function(type) {
			if(type == "memberUnionCreate") {
				$scope.obj.memberUnionList = "show";
				$scope.obj.memberUnionCreate = "hide";
				$scope.orgIdArrM = [];
			} else if(type == "memberUnionJoin") {
				$scope.obj.memberUnionList = "show";
				$scope.obj.memberUnionJoin = "hide";
			} else if(type == "IntegrationRule") {
				$scope.obj.memberUnionList = "show";
				$scope.obj.IntegrationRule = "hide";
			} else if(type == "showUnionMember") {
				
				$scope.getCanJoinMebUnionList('$scope.obj.memberUnionList = "show";$scope.obj.showUnionMember = "hide";');
				$scope.getJoinedMebUnionList("");
				$scope.orgIdArrN = [];
			}
		}
		//	返回按钮

	//增加额外/推荐奖励规则
	$scope.addEatraRule = function() {
		var Newrules = [];
		Newrules.push('<p>一次性消费满');
		Newrules.push('<input type="text" placeholder="" name="" value="" />元，');
		Newrules.push('额外获得<input type="text" placeholder="" name="" value="" />个积分');
		Newrules.push('<i class="fa fa-trash deleteExtraRule" ng-click="deleteExtraRule($event)"></i>');
		Newrules.push('</p>');
		var html = Newrules.join("");
		var template = angular.element(html);
		var newHtml = $compile(template)($scope);
		angular.element($('.addEatraRule-f').before(newHtml));
	};
	$scope.addEatraRule2 = function() {
		var Newrules = [];
		Newrules.push('<p>每推荐成功');
		Newrules.push('<input type="text" placeholder="" name="" value="" />个会员，');
		Newrules.push('获得<input type="text" placeholder="" name="" value="" />个积分');
		Newrules.push('<i class="fa fa-trash deleteExtraRule" ng-click="deleteExtraRule($event)"></i>');
		Newrules.push('</p>');
		var html = Newrules.join("");
		var template = angular.element(html);
		var newHtml = $compile(template)($scope);
		angular.element($('.addEatraRule-s').before(newHtml));
	};
	//删除新增额外奖励规则
	$scope.deleteExtraRule = function(event) {
			$(event.target).parents('p').remove();
		}
		//隐藏门店列表
	$(".folda").hide();
	$(".ownshopListboxa").hide()
	$scope.hideShopListcontent = function() {
			$(".ownshopListboxa").slideUp()
			$(".folda").hide();
			$(".unfolda").show();

		}
		//显示门店
	$scope.showShopListcontent = function() {
		$(".ownshopListboxa").slideDown()
		$(".folda").show();
		$(".unfolda").hide();
	};
	/*汪雪来的代码*/
	//获得可以创建会员联盟的品牌
	$scope.getCreateMebUnionListBrand = function() {
		$http({
			method: 'post',
			url: pos + 'memberUnion/getCanCreateBrand',
			params: {
				keyParams: getKeyParams('{}', keyParams),
				jsonObject: getJsonObject('{}')
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				angular.forEach(data.data.brandList, function(ele) {
					if(ele.brandJoinType == "1") {
						ele.brandJoinType = "自有品牌";
					} else if(ele.brandJoinType == "2") {
						ele.brandJoinType = "自主加盟";
					} else if(ele.brandJoinType == "3") {
						ele.brandJoinType = "授权加盟";
					}
				})
				$scope.createMebUnionListBrands = data.data.brandList;
			} else {
				alertmsg("获取信息失败", "error");
			}
		});
	}
	$scope.getCreateMebUnionListBrand();
	//	获得已加入联盟列表
	$scope.getJoinedMebUnionList = function(showpage) {
		$http({
			method: 'post',
			url: pos + 'memberUnion/getJoinedMemberUnion',
			params: {
				keyParams: getKeyParams('{}', keyParams),
				jsonObject: getJsonObject('{}')
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				eval(showpage);
				angular.forEach(data.data.memberUnionList, function(ele) {
					if(ele.orgId == $scope.orgIda) {
						ele.memberUnionListType = "create";
					} else if(ele.orgId != $scope.orgIda) {
						ele.memberUnionListType = "join";
					}
				});
				$scope.joinedMebUnionLists = data.data.memberUnionList;
				$scope.shopCount = data.data.shopCount;
			} else {
				alertmsg("获取信息失败", "error");
			}
		});
	}
	$scope.getJoinedMebUnionList();
	//	获得可已加入联盟列表
	$scope.getCanJoinMebUnionList = function(showpage) {
		$http({
			method: 'post',
			url: pos + 'memberUnion/getCanJoinUnion',
			params: {
				keyParams: getKeyParams('{}', keyParams),
				jsonObject: getJsonObject('{}')
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.canJoinMebUnionLists = data.data.memberUnionList;
				eval(showpage);
			} else {
				alertmsg("获取信息失败", "error");
			}
		});
	}
	$scope.getCanJoinMebUnionList("");
	//  在会员联盟主页点击立即创建会员联盟按钮
	$scope.toCreateMemberUnion = function(obj, type) {
			$scope.unionType = type;
			$scope.brandName = obj.brandName;
			$scope.memberUnionName=obj.brandName+"会员联盟";
			$scope.memberUnionShortName=obj.brandName;
			$scope.brandJoinType = obj.brandJoinType;
			$scope.brandId = obj.brandId;
			$scope.unionLogo = obj.brandLogo;
			$scope.obj.memberUnionList = "hide";
			$scope.obj.memberUnionCreate = "show";
			//	获取商户下的门店列表
			$scope.getMerchantShop();
			var jsonObject = {
				brandId: $scope.brandId,
				orgId: $scope.orgIda,
				nub: $scope.from,
				size: $scope.pageSize
			};
			jsonObject = angular.toJson(jsonObject);
			//	查询所有可以选择加入的商户
			$scope.getAllOrgCanJoin(jsonObject);
		}
		//	获取商户下的门店列表
	$scope.getMerchantShop = function() {
			var jsonObject = {
				shopNum: "",
				shopName: "",
				orgId: $scope.orgIda,
				nub: $scope.from,
				size: ""
			};
			jsonObject = angular.toJson(jsonObject);

			$http({
				method: 'post',
				url: pos + 'shop/getMerchantShop',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					$scope.shopLists = data.data.shopList;
				} else {
					alertmsg("获取信息失败", "error");
				}
			});
		}
		//	查询所有可以选择加入的商户
	$scope.getAllOrgCanJoin = function(jsonObject) {
			$http({
				method: 'post',
				url: pos + 'memberUnion/getOrgByBrandId',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					angular.forEach(data.data.orgList, function(ele) {
						ele.check = false;
					})
					$scope.orgLists = data.data.orgList;
					if($scope.orgLists.length > 0) {
						$scope.orgListscount = $scope.orgLists[0].count;
					} else {
						$scope.orgListscount = 0;
					}
					if($scope.unionType == "create") {
						$scope.createPagePlugin($scope.orgListscount, $scope.pageSize, "1", "pageCreate");
					} else if($scope.unionType == "join") {
						$scope.createPagePlugin($scope.orgListscount, $scope.pageSize, "5", "pageJoin");
					}
				} else {
					alertmsg("获取信息失败", "error");
				}
			});
		}
		//	在创建会员时选择商户加入会员联盟
	$scope.orgIdArrM = [];
	$scope.selectMember = function(orgId, obj, type) {
		//单选
		if(type == "one") {
			//查找orgId 是否存在 若不存在 则添加到orgIdArrM中 存在就删掉
			$scope.orgIdIndexM = $scope.orgIdArrM.indexOf(orgId);
			$scope.unJoinedgetchecked = false;
			if($scope.orgIdIndexM == -1) {
				$scope.orgIdArrM.push(orgId);
			} else {
				$scope.orgIdArrM.splice($scope.orgIdIndexM, 1);
			}
			//全选
		} else {
			//存放当前页数据
			$scope.currentArr = [];
			//移除当前页数据
			$scope.removeCurrentArr = [];
			angular.forEach(obj, function(ele) {
				$scope.currentArr.push(ele.orgId);
			})
			if($scope.unJoinedgetchecked == true) {
				//遍历成员列表中的orgId					
				angular.forEach(obj, function(ele) {
					ele.check = true;
					$scope.orgIdArrM.push(ele.orgId);
				})
			} else {
				angular.forEach(obj, function(ele) {
						ele.check = false;
					})
					//清空当前页的数据	
				for(var j = 0; j < $scope.orgIdArrM.length; j++) {
					if($scope.currentArr.indexOf($scope.orgIdArrM[j]) == -1) {
						$scope.removeCurrentArr.push($scope.orgIdArrM[j]);
					}
				}
				//清空当前页之后的数据
				$scope.orgIdArrM = $scope.removeCurrentArr;
			}
			//存放orgId的数组 去重
			$scope.orgIdArrM.sort();
			if($scope.orgIdArrM.length != 0) {
				$scope.uniqueArr = [$scope.orgIdArrM[0]];
				for(var i = 1; i < $scope.orgIdArrM.length; i++) {
					//比较两个相邻的数
					if($scope.orgIdArrM[i] != $scope.uniqueArr[$scope.uniqueArr.length - 1]) {
						$scope.uniqueArr.push($scope.orgIdArrM[i]);
					}
				}
				$scope.orgIdArrM = $scope.uniqueArr;
			} else {
				$scope.orgIdArrM = [];
			}
		}
	}

	//在创建会员联盟页面点击保存按钮
	$scope.mebUnionName = "";
	$scope.mebUnionDesc = "";
	$scope.saveCreateUnionMember = function() {
			//			对保存OrgId的数组进行重组,使其满足传参需求
			$scope.memberNameObj=$("#memUnionName").serializeJson();
			$scope.memberNameObj=angular.fromJson($scope.memberNameObj)
			$scope.memberUnionDetailArr = [{
				orgId: $scope.orgIda
			}];
			angular.forEach($scope.orgIdArrM, function(ele) {
				$scope.memberUnionDetailObj = {};
				$scope.memberUnionDetailObj.orgId = ele;
				$scope.memberUnionDetailArr.push($scope.memberUnionDetailObj);
			})
			$scope.mebUnionName=$scope.memberNameObj.memberUnionName;
			$scope.mebUnionDesc=$scope.memberNameObj.shortName;
			if($scope.mebUnionName != "" && $scope.mebUnionDesc != "") {
				var jsonObject = {
					memberUnionName:$scope.mebUnionName ,
					shortName: $scope.mebUnionDesc,
					brandId: $scope.brandId,
					orgId: $scope.orgIda,
					memberUnionDetails: $scope.memberUnionDetailArr
				}
				jsonObject = angular.toJson(jsonObject);
				$http({
					method: 'post',
					url: pos + 'memberUnion/addMemberUnionAndDetail',
					params: {
						keyParams: getKeyParams(jsonObject, keyParams),
						jsonObject: getJsonObject(jsonObject)
					}
				}).success(function(data, stauts, headers, config) {
					if(data.code == 1) {
						$scope.getMemberUnionId = data.data.memberUnionId;
						$scope.orgIdArrM = [];
						
						$scope.getJoinedMebUnionList('$scope.obj.memberUnionCreate = "hide";$scope.obj.memberUnionCreateSuccess = "show";');
						$scope.getCreateMebUnionListBrand();
					} else {
						angular.forEach($scope.orgLists, function(ele) {
							ele.check = false;
						})
						$scope.orgIdArrM = [];
						alertmsg("获取信息失败", "error");
					}
				});
			} else {
				alertmsg("请输入会员联盟名称与简称", "error");
			};

		}
		//	在联盟列表主页点击已加入商户数量
	$scope.joinedStore = function(obj, type) {
			$scope.enterDoor = type;
			$scope.memberUnionId = obj.memberUnionId;
			$scope.orgId = obj.orgId;
			$scope.orgIde = obj.orgId;
			$scope.brandId = obj.brandId;
			$scope.memberUnionName = obj.memberUnionName;
			$scope.brandName = obj.brandName;
			$scope.orgName = obj.orgName;
			$scope.createDate = obj.createDate;
			$scope.joinedMerchant = obj.joinedMerchant;
			$scope.notJoinedMerchant = obj.notJoinedMerchant;
			$scope.joinedShop = obj.joinedShop;
			var jsonObject = {
				"memberUnionId": $scope.memberUnionId,
				"nub": $scope.from,
				"size": $scope.pageSize
			}
			jsonObject = angular.toJson(jsonObject);
			$scope.loadJoinedOrg(jsonObject, '$scope.obj.memberUnionList = "hide";$scope.obj.showUnionMember = "show";$scope.obj.showSetPart = "a";$scope.obj.memberUnionCreateSuccess = "hide";$scope.obj.memberUnionJoinSuccess = "hide"');
			var jsonObject1 = {
				memberUnionId: $scope.memberUnionId,
				brandId: $scope.brandId,
				orgId: $scope.orgId,
				nub: $scope.from,
				size: $scope.pageSize
			}
			jsonObject1 = angular.toJson(jsonObject1);
			$scope.loadUnJoinedOrg(jsonObject1, "");
			$scope.loadUnionJoinedShop(jsonObject, $scope.showPage)
		}
		//	加载已加入会员联盟的商户
	$scope.loadJoinedOrg = function(jsonObjectb, showPage) {
		$http({
			method: 'post',
			url: pos + 'memberUnionDetail/getUnionMembers',
			params: {
				keyParams: getKeyParams(jsonObjectb, keyParams),
				jsonObject: getJsonObject(jsonObjectb)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.unionLists = data.data.unionMembers;
				if($scope.unionLists.length > 0) {
					$scope.unionListsCount = $scope.unionLists[0].count;
				} else {
					$scope.unionListsCount = 0;
				}
				if($scope.enterDoor == "joinedStore") {
					$scope.createPagePlugin($scope.unionListsCount, $scope.pageSize, "2", "pagingJoinedStore");
				}
				eval(showPage);
			} else {
				alertmsg("获取信息失败", "error");
			}
		});
	};
	//	在联盟列表主页点击未加入商户数量
	$scope.unJoinedStore = function(obj) {
			$scope.enterDoor = "unJoinedStore";
			$scope.memberUnionId = obj.memberUnionId;
			$scope.orgId = obj.orgId;
			$scope.brandId = obj.brandId;
			$scope.orgIde = obj.orgId;
			$scope.memberUnionName = obj.memberUnionName;
			$scope.brandName = obj.brandName;
			$scope.orgName = obj.orgName;
			$scope.createDate = obj.createDate;
			$scope.joinedMerchant = obj.joinedMerchant;
			$scope.notJoinedMerchant = obj.notJoinedMerchant;
			$scope.joinedShop = obj.joinedShop;
			var jsonObject = {
				memberUnionId: $scope.memberUnionId,
				brandId: $scope.brandId,
				orgId: $scope.orgId,
				nub: $scope.from,
				size: $scope.pageSize
			}
			jsonObject = angular.toJson(jsonObject);
			$scope.showPage = '$scope.obj.memberUnionList = "hide";$scope.obj.showUnionMember = "show";$scope.obj.showSetPart ="b";$scope.obj.memberUnionCreateSuccess = "hide";$scope.obj.memberUnionJoinSuccess = "hide"';
			$scope.loadUnJoinedOrg(jsonObject, $scope.showPage);
			$scope.loadJoinedOrg(jsonObject, '');
			$scope.loadUnionJoinedShop(jsonObject, "")
		}
		//	加载未加入会员联盟的商户
	$scope.loadUnJoinedOrg = function(jsonObjecta, showPage) {
		$http({
			method: 'post',
			url: pos + 'memberUnionDetail/getNotJoinMembers',
			params: {
				keyParams: getKeyParams(jsonObjecta, keyParams),
				jsonObject: getJsonObject(jsonObjecta)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.notJoinMembers = data.data.NotJoinMembers;
				angular.forEach($scope.notJoinMembers, function(ele) {
					ele.isCheckedB = false;
				});
				if($scope.notJoinMembers.length > 0) {
					$scope.notJoinMemberCount = $scope.notJoinMembers[0].count;
				} else {
					$scope.notJoinMemberCount = 0;
				}
				if($scope.enterDoor == "unJoinedStore") {
					$scope.createPagePlugin($scope.notJoinMemberCount, $scope.pageSize, "3", "pagingNotJoinedStore");
				}
				eval(showPage);
			} else {
				alertmsg("获取信息失败", "error");
			}
		});
	};
	//	在联盟列表主页点击已加入门店数量
	$scope.joinedMemShop = function(obj, type) {
			$scope.enterDoor = type;
			$scope.memberUnionId = obj.memberUnionId;
			$scope.orgId = obj.orgId;
			$scope.orgIde = obj.orgId;
			$scope.brandId = obj.brandId;
			$scope.memberUnionName = obj.memberUnionName;
			$scope.brandName = obj.brandName;
			$scope.orgName = obj.orgName;
			$scope.createDate = obj.createDate;
			$scope.joinedMerchant = obj.joinedMerchant;
			$scope.notJoinedMerchant = obj.notJoinedMerchant;
			$scope.joinedShop = obj.joinedShop;
			var jsonObject = {
				memberUnionId: $scope.memberUnionId,
				nub: $scope.from,
				size: $scope.pageSize
			};
			jsonObject = angular.toJson(jsonObject);
			$scope.showPage = '$scope.obj.memberUnionList = "hide";$scope.obj.showUnionMember = "show";$scope.obj.showSetPart = "c";$scope.obj.memberUnionCreateSuccess = "hide";$scope.obj.memberUnionJoinSuccess = "hide"'
			$scope.loadUnionJoinedShop(jsonObject, $scope.showPage);
			var jsonObjectd = {
				memberUnionId: $scope.memberUnionId,
				brandId: $scope.brandId,
				orgId: $scope.orgId,
				nub: $scope.from,
				size: $scope.pageSize
			}
			jsonObjectd = angular.toJson(jsonObjectd);
			$scope.loadUnJoinedOrg(jsonObjectd, "");
			$scope.loadJoinedOrg(jsonObjectd, '');

		}
		//	加载加入会员联盟的店铺
	$scope.loadUnionJoinedShop = function(jsonObjecta, showPage) {
		$http({
			method: 'post',
			url: pos + 'memberUnionDetail/getUnionShopMembers',
			params: {
				keyParams: getKeyParams(jsonObjecta, keyParams),
				jsonObject: getJsonObject(jsonObjecta)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.unionShopMembers = data.data.unionShopMembers;
				if($scope.unionShopMembers.length > 0) {
					$scope.unionShopMemberCount = $scope.unionShopMembers[0].count;
				} else {
					$scope.unionShopMemberCount = 0;
				}
				if($scope.enterDoor == "joinedMemShop") {
					$scope.createPagePlugin($scope.unionShopMemberCount, $scope.pageSize, "4", "pagingJoinedShop");
				}
				eval(showPage);
			} else {
				alertmsg("获取信息失败", "error");
			}
		});
	};
	//	点击会员联盟管理里面的已加入商户
	$scope.showSettingData = function() {
		$scope.enterDoor = "joinedStore";
		var jsonObject = {
			"memberUnionId": $scope.memberUnionId,
			nub: $scope.from,
			size: $scope.pageSize
		}
		jsonObject = angular.toJson(jsonObject);
		$scope.loadJoinedOrg(jsonObject, '$scope.obj.showSetPart = "a";');
	};
	//	点击会员联盟管理里面的未加入商户
	$scope.showSettingShop = function() {
		$scope.enterDoor = "unJoinedStore";
		var jsonObject = {
			memberUnionId: $scope.memberUnionId,
			brandId: $scope.brandId,
			orgId: $scope.orgId,
			nub: $scope.from,
			size: $scope.pageSize
		}
		jsonObject = angular.toJson(jsonObject);
		$scope.showPage = '$scope.obj.showSetPart = "b"';
		$scope.loadUnJoinedOrg(jsonObject, $scope.showPage);
	};
	//点击会员联盟管理里面的已加入门店
	$scope.showSettingPrice = function() {
			$scope.enterDoor = "joinedMemShop";
			var jsonObject = {
				memberUnionId: $scope.memberUnionId,
				nub: $scope.from,
				size: $scope.pageSize
			};
			jsonObject = angular.toJson(jsonObject);
			$scope.showPage = '$scope.obj.showSetPart = "c";';
			$scope.loadUnionJoinedShop(jsonObject, $scope.showPage);
		}
		//	在会员联盟管理页面在已加入商户点击退出按钮
	$scope.OrgQuitMebUnion = function(obj) {
			$scope.orgIdquit = obj.orgId;
			var jsonObject = {
				"memberUnionId": $scope.memberUnionId,
				memberUnionDetails: [{
					orgId: $scope.orgIdquit
				}]
			}
			jsonObject = angular.toJson(jsonObject);
			$http({
				method: 'post',
				url: pos + 'memberUnionDetail/deleteMembers',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					var jsonObject = {
						"memberUnionId": $scope.memberUnionId,
						nub: $scope.from,
						size: $scope.pageSize
					}
					jsonObject = angular.toJson(jsonObject);
					$scope.loadJoinedOrg(jsonObject, '$scope.obj.showSetPart = "a";');
					$scope.loadUnionJoinedShop(jsonObject, "");
					var jsonObjects = {
						memberUnionId: $scope.memberUnionId,
						brandId: $scope.brandId,
						orgId: $scope.orgId,
						nub: $scope.from,
						size: $scope.pageSize
					}
					jsonObjects = angular.toJson(jsonObjects);
					$scope.loadUnJoinedOrg(jsonObjects, "");

				} else {
					alertmsg("获取信息失败", "error");
				}
			});
		}
		//		在会员管理页面点击加入按钮
	$scope.orgJoinMebUnion = function(obj) {
			$scope.orgIdjoin = obj.orgId;
			jsonObject = {
				memberUnionId: $scope.memberUnionId,
				memberUnionDetails: [{
					orgId: $scope.orgIdjoin
				}]
			};
			jsonObject = angular.toJson(jsonObject);
			$http({
				method: 'post',
				url: pos + 'memberUnionDetail/addMembers',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					var jsonObject = {
						memberUnionId: $scope.memberUnionId,
						brandId: $scope.brandId,
						orgId: $scope.orgId,
						nub: $scope.from,
						size: $scope.pageSize
					}
					jsonObject = angular.toJson(jsonObject);
					$scope.showPage = '$scope.obj.showSetPart = "b";';
					$scope.loadUnJoinedOrg(jsonObject, $scope.showPage);
					var jsonObjectf = {
						memberUnionId: $scope.memberUnionId,
						nub: $scope.from,
						size: $scope.pageSize
					}
					jsonObjectf = angular.toJson(jsonObjectf);
					$scope.loadUnionJoinedShop(jsonObjectf, "");
					$scope.loadJoinedOrg(jsonObjectf, '');
				} else {
					alertmsg("获取信息失败", "error");
				}
			});
		}
		//	在会员联盟管理页面勾选单选框选择加入店铺
	$scope.orgIdArrN = [];
	$scope.selectMemberTojoin = function(orgId, obj, type) {
			//单选
			if(type == "one") {
				//查找orgId 是否存在 若不存在 则添加到orgIdArrN中 存在就删掉
				$scope.orgIdIndexM = $scope.orgIdArrN.indexOf(orgId);
				$scope.getAllChecked = false;
				if($scope.orgIdIndexM == -1) {
					$scope.orgIdArrN.push(orgId);
				} else {
					$scope.orgIdArrN.splice($scope.orgIdIndexM, 1);
				}
				//全选
			} else {
				//存放当前页数据
				$scope.currentArr = [];
				//移除当前页数据
				$scope.removeCurrentArr = [];
				angular.forEach(obj, function(ele) {
					$scope.currentArr.push(ele.orgId);
				})
				if($scope.getAllChecked == true) {
					//遍历成员列表中的orgId					
					angular.forEach(obj, function(ele) {
						ele.isCheckedB = true;
						$scope.orgIdArrN.push(ele.orgId);
					})
				} else {
					angular.forEach(obj, function(ele) {
							ele.isCheckedB = false;
						})
						//清空当前页的数据	
					for(var j = 0; j < $scope.orgIdArrN.length; j++) {
						if($scope.currentArr.indexOf($scope.orgIdArrN[j]) == -1) {
							$scope.removeCurrentArr.push($scope.orgIdArrN[j]);
						}
					}
					//清空当前页之后的数据
					$scope.orgIdArrN = $scope.removeCurrentArr;
				}
				//存放orgId的数组 去重
				$scope.orgIdArrN.sort();
				if($scope.orgIdArrN.length != 0) {
					$scope.uniqueArr = [$scope.orgIdArrN[0]];
					for(var i = 1; i < $scope.orgIdArrN.length; i++) {
						//比较两个相邻的数
						if($scope.orgIdArrN[i] != $scope.uniqueArr[$scope.uniqueArr.length - 1]) {
							$scope.uniqueArr.push($scope.orgIdArrN[i]);
						}
					}
					$scope.orgIdArrN = $scope.uniqueArr;
				} else {
					$scope.orgIdArrN = [];
				}
			}
		}
		//	在会员联盟管理页面中的未加入商户点击添加选中成员
	$scope.orgsJoinMebUnion = function() {
			$scope.orgIdArrUsed = [];
			angular.forEach($scope.orgIdArrN, function(ele) {
				$scope.orgIdObjUsed = {};
				$scope.orgIdObjUsed.orgId = ele;
				$scope.orgIdArrUsed.push($scope.orgIdObjUsed);
			})
			var jsonObject = {
				memberUnionId: $scope.memberUnionId,
				memberUnionDetails: $scope.orgIdArrUsed
			};
			jsonObject = angular.toJson(jsonObject);
			$http({
				method: 'post',
				url: pos + 'memberUnionDetail/addMembers',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					$scope.orgIdArrN = [];
					var jsonObject = {
						memberUnionId: $scope.memberUnionId,
						brandId: $scope.brandId,
						orgId: $scope.orgId,
						nub: $scope.from,
						size: $scope.pageSize
					}
					jsonObject = angular.toJson(jsonObject);
					$scope.showPage = '$scope.obj.showSetPart = "b";';
					$scope.loadUnJoinedOrg(jsonObject, $scope.showPage);
					var jsonObjecte = {
						memberUnionId: $scope.memberUnionId,
						nub: $scope.from,
						size: $scope.pageSize
					}
					jsonObjecte = angular.toJson(jsonObjecte);
					$scope.loadUnionJoinedShop(jsonObjecte, "");
					$scope.loadJoinedOrg(jsonObjecte, '');
				} else {
					alertmsg("获取信息失败", "error");
				}
			});
		}
		//  在会员联盟主页点击立即加入会员联盟按钮

	$scope.toJoinMemberUnion = function(obj, type) {
			$scope.unionType = type
			$scope.memberUnionName = obj.memberUnionName;
			$scope.memberUnionId = obj.memberUnionId;
			$scope.brandName = obj.brandName;
			$scope.brandId = obj.brandId;
			$scope.orgName = obj.orgName;
			$scope.memUnionLogo = obj.logo;
			$scope.orgId = obj.orgId;
			$scope.createDate = obj.createDate;
			$scope.shortName = obj.shortName;
			$scope.joinedMerchant = obj.joinedMerchant;
			$scope.joinedShop = obj.joinedShop;
			$scope.joinedMember = obj.joinedMember;
			var jsonObject = {
				brandId: $scope.brandId,
				orgId: $scope.orgIda,
				nub: $scope.from,
				size: $scope.pageSize
			};
			jsonObject = angular.toJson(jsonObject);
			//	查询所有可以选择加入的商户
			$scope.getAllOrgCanJoin(jsonObject);
			$scope.getMerchantShop();
			$scope.obj.memberUnionList = "hide";
			$scope.obj.memberUnionJoin = "show";
		}
		//	在加入联盟时选择本商户下面的商户
	$scope.orgIdArrS = [];
	$scope.selectMemberTojoinB = function(orgId, obj, type) {
			//单选
			if(type == "one") {
				//查找orgId 是否存在 若不存在 则添加到orgIdArrS中 存在就删掉
				$scope.orgIdIndexM = $scope.orgIdArrS.indexOf(orgId);
				$scope.thisPageGetChecked = false;
				if($scope.orgIdIndexM == -1) {
					$scope.orgIdArrS.push(orgId);
				} else {
					$scope.orgIdArrS.splice($scope.orgIdIndexM, 1);
				}
				//全选
			} else {
				//存放当前页数据
				$scope.currentArr = [];
				//移除当前页数据
				$scope.removeCurrentArr = [];
				angular.forEach(obj, function(ele) {
					$scope.currentArr.push(ele.orgId);
				})
				if($scope.thisPageGetChecked == true) {
					//遍历成员列表中的orgId					
					angular.forEach(obj, function(ele) {
						ele.check = true;
						$scope.orgIdArrS.push(ele.orgId);
					})
				} else {
					angular.forEach(obj, function(ele) {
							ele.check = false;
						})
						//清空当前页的数据	
					for(var j = 0; j < $scope.orgIdArrS.length; j++) {
						if($scope.currentArr.indexOf($scope.orgIdArrS[j]) == -1) {
							$scope.removeCurrentArr.push($scope.orgIdArrS[j]);
						}
					}
					//清空当前页之后的数据
					$scope.orgIdArrS = $scope.removeCurrentArr;
				}
				//存放orgId的数组 去重
				$scope.orgIdArrS.sort();
				if($scope.orgIdArrS.length != 0) {
					$scope.uniqueArr = [$scope.orgIdArrS[0]];
					for(var i = 1; i < $scope.orgIdArrS.length; i++) {
						//比较两个相邻的数
						if($scope.orgIdArrS[i] != $scope.uniqueArr[$scope.uniqueArr.length - 1]) {
							$scope.uniqueArr.push($scope.orgIdArrS[i]);
						}
					}
					$scope.orgIdArrS = $scope.uniqueArr;
				} else {
					$scope.orgIdArrS = [];
				}
			}
		}
		//在加入联盟点击保存按钮
	$scope.saveJoinMemberUnion = function() {
			$scope.joinMemArr = [{
				orgId: $scope.orgIda
			}];
			angular.forEach($scope.orgIdArrS, function(ele) {
				$scope.joinMemObj = {};
				$scope.joinMemObj.orgId = ele;
				$scope.joinMemArr.push($scope.joinMemObj);
			})
			jsonObject = {
				memberUnionId: $scope.memberUnionId,
				memberUnionDetails: $scope.joinMemArr
			};
			jsonObject = angular.toJson(jsonObject);
			$http({
				method: 'post',
				url: pos + 'memberUnionDetail/addMembers',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					$scope.getJoinedMebUnionList('$scope.obj.memberUnionJoin = "hide";$scope.obj.memberUnionJoinSuccess = "show";');
					
				} else {
					alertmsg("获取信息失败", "error");
				}
			});
		}
	$scope.dissolutionUnion = function(obj) {
			var memberUnionId = obj.joinedMebUnionList.memberUnionId;
			var jsonObject = {
				"memberUnionId": memberUnionId,
				"memberUnionStatus": "2",
			};
			jsonObject = JSON.stringify(jsonObject);
			$http({
				method: 'post',
				url: pos + 'memberUnion/updateMemberUnion',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					alertmsg(data.msg);
				} else {
					alertmsg("解散联盟失败", "error");
				}
			})
		}
		//停用联盟
	$scope.disabledUnion = function(obj) {
		var memberUnionId = obj.joinedMebUnionList.memberUnionId;
		var jsonObject = {
			"memberUnionId": memberUnionId,
			"memberUnionStatus": "1",
		}
		jsonObject = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'memberUnion/updateMemberUnion',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.getJoinedMebUnionList("");

			} else {
				alertmsg("停用联盟失败", "error");
			}
		})
	}

	//启用联盟
	$scope.startUnion = function(obj) {
			var memberUnionId = obj.joinedMebUnionList.memberUnionId;
			var jsonObject = {
				"memberUnionId": memberUnionId,
				"memberUnionStatus": "0",
			}
			jsonObject = JSON.stringify(jsonObject);
			$http({
				method: 'post',
				url: pos + 'memberUnion/updateMemberUnion',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					$scope.getJoinedMebUnionList("");

				} else {
					alertmsg("启用联盟失败", "error");
				}
			})
		}
		//解散联盟
	$scope.dissolutionUnion = function(obj) {
			var memberUnionId = obj.joinedMebUnionList.memberUnionId;
			var jsonObject = {
				"memberUnionId": memberUnionId,
				"memberUnionStatus": "2",
			}
			jsonObject = JSON.stringify(jsonObject);
			$http({
				method: 'post',
				url: pos + 'memberUnion/updateMemberUnion',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					$scope.getJoinedMebUnionList("");
					$scope.getCreateMebUnionListBrand();
				} else {
					alertmsg("解散联盟失败", "error");
				}
			})
		}
		//退出联盟
	$scope.quitMemUnion = function(obj) {
			var memberUnionId = obj.joinedMebUnionList.memberUnionId;
			var jsonObject = {
				memberUnionId: memberUnionId,
				memberUnionDetails: [{
					orgId: $scope.orgIda
				}]
			}
			jsonObject = JSON.stringify(jsonObject);
			$http({
				method: 'post',
				url: pos + 'memberUnionDetail/deleteMembers',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					$scope.getJoinedMebUnionList("");
					$scope.getCanJoinMebUnionList("");
				} else {
					alertmsg("解散联盟失败", "error");
				}
			})
		}
		//		分页代码
		// //联盟列表成员分页
	$scope.createPagePlugin = function(total, pageSize, type, pageId) {
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
				$scope.pageA(from - 1, pageSize);
			} else if(type == "3") {
				$scope.pageB(from - 1, pageSize);
			} else if(type == "4") {
				$scope.pageC(from - 1, pageSize);
			} else if(type == "5") {
				$scope.pageD(from - 1, pageSize);
			}
		}
	};
	$scope.page = function(from, pageSize) {
		var jsonObject = {
			brandId: $scope.brandId,
			orgId: $scope.orgIda,
			nub: from+"",
			size: pageSize
		};
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'memberUnion/getOrgByBrandId',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.orgLists = data.data.orgList;
				if($scope.orgLists.length > 0) {
					$scope.count = $scope.orgLists[0].count;
				} else {
					$scope.count = 0;
				}
				angular.forEach($scope.orgLists, function(ele, index) {
					if($scope.orgIdArrM.indexOf(ele.orgId) != -1) {
						ele.check = true;
					} else {
						ele.check = false;
					}
				});
			} else {
				alertmsg("获取店铺列表失败", "error");
			}
		})
	};
	$scope.pageA = function(from, pageSize) {
		var jsonObject = {
			memberUnionId: $scope.memberUnionId,
			brandId: $scope.brandId,
			orgId: $scope.orgId,
			nub: from,
			size: pageSize
		}
		$scope.jsonObject = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'memberUnionDetail/getUnionMembers',
			params: {
				keyParams: getKeyParams($scope.jsonObject, keyParams),
				jsonObject: getJsonObject($scope.jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.unionLists = data.data.unionMembers;
				if($scope.unionLists.length > 0) {
					$scope.unionListsCount = $scope.unionLists[0].count;
				} else {
					$scope.unionListsCount = 0;
				}
			} else {
				alertmsg("获取店铺列表失败", "error");
			}
		})
	}

//	返回按钮
	
    //增加额外/推荐奖励规则
    $scope.addEatraRule = function(){
        var Newrules=[];
        Newrules.push('<p>一次性消费满');
        Newrules.push('<input type="text" placeholder="" name="" value="" />元，');
        Newrules.push('额外获得<input type="text" placeholder="" name="" value="" />个积分');
        Newrules.push('<i class="fa fa-trash deleteExtraRule" ng-click="deleteExtraRule($event)"></i>');
        Newrules.push('</p>');
        var html=Newrules.join("");
        var template=angular.element(html);
        var newHtml=$compile(template)($scope);
        angular.element($('.addEatraRule-f').before(newHtml));
    };
    $scope.addEatraRule2 = function(){
        var Newrules=[];
        Newrules.push('<p>每推荐成功');
        Newrules.push('<input type="text" placeholder="" name="" value="" />个会员，');
        Newrules.push('获得<input type="text" placeholder="" name="" value="" />个积分');
        Newrules.push('<i class="fa fa-trash deleteExtraRule" ng-click="deleteExtraRule($event)"></i>');
        Newrules.push('</p>');
        var html=Newrules.join("");
        var template=angular.element(html);
        var newHtml=$compile(template)($scope);
        angular.element($('.addEatraRule-s').before(newHtml));
    };
    //删除新增额外奖励规则
    $scope.deleteExtraRule = function(event){
        $(event.target).parents('p').remove();
    }
    //隐藏门店列表
	$(".unfold").hide();
   //隐藏门店列表
    $scope.hideShopListcontent=function(){
		$(".ownshopListbox").slideUp()
		$(".fold").hide();
		$(".unfold").show();
    }
 //显示门店
   $scope.showShopListcontent=function(){
//  	$scope.obj.isShow=false;
		$(".ownshopListbox").slideDown()
		$(".fold").show();
		$(".unfold").hide();
   }


	$scope.pageB = function(from, pageSize) {
		var jsonObject = {
			memberUnionId: $scope.memberUnionId,
			brandId: $scope.brandId,
			orgId: $scope.orgId,
			nub: from,
			size: pageSize
		}
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'memberUnionDetail/getNotJoinMembers',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.notJoinMembers = data.data.NotJoinMembers;
				if($scope.notJoinMembers.length > 0) {
					$scope.notJoinMemberCount = $scope.notJoinMembers[0].count;
				} else {
					$scope.notJoinMemberCount = 0;
				}
				angular.forEach($scope.notJoinMembers, function(ele, index) {
					if($scope.orgIdArrN.indexOf(ele.orgId) != -1) {
						ele.isCheckedB = true;
					} else {
						ele.isCheckedB = false;
					}
				});
			} else {
				alertmsg("获取店铺列表失败", "error");
			}
		})
	};
	$scope.pageC = function(from, pageSize) {
		var jsonObject = {
			memberUnionId: $scope.memberUnionId,
			nub: from,
			size: pageSize
		};
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'memberUnionDetail/getUnionShopMembers',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.unionShopMembers = data.data.unionShopMembers;
				if($scope.unionShopMembers.length > 0) {
					$scope.unionShopMemberCount = $scope.unionShopMembers[0].count;
				} else {
					$scope.unionShopMemberCount = 0;
				}
			} else {
				alertmsg("获取店铺列表失败", "error");
			}
		})
	}
	$scope.pageD = function(from, pageSize) {
		var jsonObject = {
			brandId: $scope.brandId,
			orgId: $scope.orgIda,
			nub: from,
			size: pageSize
		};
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'memberUnion/getOrgByBrandId',
			params: {
				keyParams: getKeyParams($scope.jsonObject, keyParams),
				jsonObject: getJsonObject($scope.jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.orgLists = data.data.orgList;
				$scope.isChecked = false;
				angular.forEach($scope.orgLists, function(ele, index) {
					if($scope.orgIdArrM.indexOf(ele.orgId) != -1) {
						ele.check = true;
					} else {
						ele.check = false;
					}
				});
			} else {
				alertmsg("获取店铺列表失败", "error");
			}
		})
	};

}]);
