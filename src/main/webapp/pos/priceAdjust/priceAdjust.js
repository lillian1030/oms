qyApp.controller('priceAdjustController', ['$scope', '$http', '$compile', 'Upload', function($scope, $http, $compile, Upload) {
	//默认参数
	$scope.obj = {
		"showAddList": true,
		"showSetPart": "a",
		"showAddShop": "hide",
		"showAddProduct": "hide",
		"showSetPrice": "hide",
		"check": false,
		"checkedA": false,
		"showSure": "hide",
		"scan": false,
		"resetflag": "add",
		"showCode": false,
		"showSetpriceTogether": "show",
		"showCheckTimeFrame": "hide"
	}
	$scope.priceListCount=0;
	$scope.addtype = "notadd";
	$scope.defaultPrice = "";
	//点击添加零售调价单之后的页面变化//对编辑页面的数据进行清空
	$scope.addList = function() {
		$scope.obj.showAddList = false;
		$scope.obj.resetflag = "add";
		$scope.clearData();
		$scope.obj.showCode = false;
		$scope.loadSelect();
		$scope.editOrScantype = "";

	}
	$scope.clearData = function() {
			$scope.newShopInfoArr = [];
			$scope.proModelnumSelected = "";
			$scope.productArr = [];
			$scope.proDetailsList = [];
			$("#effectdatatime").val(null);
			$scope.obj.check = false;
			$scope.obj.showSetPart = 'a'
			$scope.obj.scan = false;
			$scope.defaultPrice = "";
		}
		// 点击统一设置零售价的按钮
	$scope.setpriceTogether = function() {
		$scope.obj.showSetpriceTogether = "hide";
	}
	$scope.cancelSetpriceTogether = function() {
			$scope.obj.showSetpriceTogether = "show";
		}
		// 设置统一零售价后点击确认按钮、
	$scope.sureSetpriceTogether = function() {
		$scope.skuPriceList = $("#setPriceForm").serializeJson();
		var skuPriceList = JSON.parse($scope.skuPriceList);
		for(var i in skuPriceList) {
			skuPriceList[i] = $scope.setAllPrice;
			$("input[name=" + i + "]").val($scope.setAllPrice);
			$scope.addtype == "notadd";
		}
		$scope.setAllPrice = "";
		$scope.obj.showSetpriceTogether = "show";
	}

	//门店零售下的商品查询下拉框加载
	$scope.loadSelect = function() {
			//查询品牌
			$http({
					method: 'post',
					url: pos + 'brand/getBrand',
					params: {
						keyParams: getKeyParams('{}', keyParams),
						jsonObject: getJsonObject('{}')
					}
				}).success(function(data, stauts, headers, config) {
					if(data.code == 1) {
						$scope.queryBrands = data.data.brandList;
					} else {
						alertmsg("获取品牌失败", "error");
					}
				})
				//查询年份
			$http({
					method: 'post',
					url: pos + 'model/getDisProYear',
					params: {
						keyParams: getKeyParams('{}', keyParams),
						jsonObject: getJsonObject('{}')
					}
				}).success(function(data, stauts, headers, config) {
					if(data.code == 1) {
						$scope.queryYears = data.data.productList;

					} else {
						alertmsg("获取年份失败", "error");
					}
				})
				//查询季节
			$http({
					method: 'post',
					url: pos + 'model/getDisProSeason',
					params: {
						keyParams: getKeyParams('{}', keyParams),
						jsonObject: getJsonObject('{}')
					}
				}).success(function(data, stauts, headers, config) {
					if(data.code == 1) {
						$scope.seasons = data.data.productList;
					} else {
						alertmsg("获取季节失败", "error");
					}
				})
				//查询大品类
			$http({
					method: 'post',
					url: pos + 'model/getGrandparentSort',
					params: {
						keyParams: getKeyParams('{}', keyParams),
						jsonObject: getJsonObject('{}')
					}
				}).success(function(data, stauts, headers, config) {
					if(data.code == 1) {
						$scope.grandparentSorts = data.data.productList;
					} else {
						alertmsg("获取大品类失败", "error");
					}
				})
				//查询中品类
			$scope.getParentSort = function(obj) {
					var proGrandparentSortId = $scope.grandparentSort.proGrandparentSortId;
					var jsonObject = "{" + "\"proGrandparentSortId\":\"" + proGrandparentSortId + "\"}";
					$http({
						method: 'post',
						url: pos + 'model/getParentSort',
						params: {
							keyParams: getKeyParams(jsonObject, keyParams),
							jsonObject: getJsonObject(jsonObject)
						}
					}).success(function(data, stauts, headers, config) {
						if(data.code == 1) {
							$scope.parentSorts = data.data.productList;
						} else {
							alertmsg("获取中品类失败", "error");
						}
					})
				}
				//查询小品类
			$scope.getSort = function(obj) {
				var proGrandparentSortId = $scope.grandparentSort.proGrandparentSortId;
				var proParentSortId = $scope.parentSort.proParentSortId;
				var jsonObject = "{" + "\"proGrandparentSortId\":\"" + proGrandparentSortId + "\",\"proParentSortId\":\"" + proParentSortId + "\"}";
				$http({
					method: 'post',
					url: pos + 'model/getSort',
					params: {
						keyParams: getKeyParams(jsonObject, keyParams),
						jsonObject: getJsonObject(jsonObject)
					}
				}).success(function(data, stauts, headers, config) {
					if(data.code == 1) {
						$scope.obj.showAddProduct = "show";

						$scope.sorts = data.data.productList;
					} else {
						alertmsg("获取小品类失败", "error");
					}
				})
			}
		}
		//点击返回按钮页面返回   对编辑页面的内容进行清空
	$scope.goback = function() {
			$scope.obj.showAddList = true;
			$scope.obj.showSetPart = "a";
			$scope.clearData();
		}
		//点击生效日期设置
	$scope.showSettingData = function() {
			$scope.obj.showSetPart = "a";
		}
		//点击生效门店设置
	$scope.showSettingShop = function() {
			$scope.obj.showSetPart = "b";
		}
		//门店零售调价
	$scope.showSettingPrice = function() {
			$scope.obj.showSetPart = "c";
		}
		//点击添加门店按钮
	var from = 0;
	var priceListpageSize = 10;
	var pageSize = 10;
	var keyParam = JSON.parse(localStorage.keyParams);
	var orgId = keyParam.orgId;
	$scope.count = "0";
	$scope.shopListFlag = 0;
	$("#addshop").centera();
	$scope.addShop = function() {
		//	点击添加门店按钮马上数据请求,请求成功后打开添加门店弹窗
		var jsonObject = "{\"orgId\":\"" + keyParam.orgId + "\",\"nub\":\"" + from + "\",\"size\":\"" + pageSize + "\"}";
		if($scope.shopListFlag == 0) {
			$scope.shopList(jsonObject);
		} else {
			$scope.obj.showAddShop = "show";
		}
	}
	$scope.shopList = function(jsonObject) {
			$http({
				method: 'post',
				url: pos + 'shop/getMerchantShop',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					$scope.shopListFlag = 1;
					$scope.addshopdata = data.data.shopList;
					$scope.obj.showAddShop = "show";
					$scope.count = data.data.shopList.length;
					//					$scope.createPagePlugin($scope.count, pageSize);
				} else {
					alertmsg("系统错误", "error");
				}
			})
		}
		//点击添加商品按钮
	$("#addproduct").centera();
	$scope.addProduct = function(type) {
			$scope.addtype = type;
			//添加商品弹框中的下拉框的数据加载
			var jsonObject = {
				"proModelnum1": $scope.proModelnumSelected,
				"proGrandparentSortId": "",
				"proParentSortId": "",
				"proSortId": "",
				"brandId": "",
				"proYear": "",
				"proSeason": ""
			}
			jsonObject = JSON.stringify(jsonObject);
			$http({
				method: 'post',
				url: pos + 'model/getModels',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					$scope.productLists = data.data.modelList;
					$scope.obj.showAddProduct = "show";
				} else {
					alertmsg("获取小品类失败", "error");
				}
			})
		}
		//进入弹框点击添加商品
	$scope.proModelnumSelected = "";
	$scope.productArr = [];
	$scope.addProductInfo = function() {
			var jsonObject = $("#productTable").serializeJson();
			jsonObject = JSON.parse(jsonObject);
			var productInfo = jsonObject.productInfo;
			if(Array.isArray(productInfo)) {
				for(var i = 0; i < productInfo.length; i++) {
					var productInfoObj = {};
					var productInfoArr = productInfo[i].split(",");
					productInfoObj.proModelnum = productInfoArr[0];
					productInfoObj.proName = productInfoArr[1];
					productInfoObj.brandName = productInfoArr[2];
					productInfoObj.grandparentSortName = productInfoArr[3];
					productInfoObj.parentSortName = productInfoArr[4];
					productInfoObj.sortName = productInfoArr[5];
					productInfoObj.proYear = productInfoArr[6];
					productInfoObj.proSeason = productInfoArr[7];
					productInfoObj.proPrice = productInfoArr[8];
					productInfoObj.brandId = productInfoArr[9];
					$scope.productArr.push(productInfoObj);
				}
				$scope.productArrList = [];
				for(var i = 0; i < $scope.productArr.length; i++) {
					$scope.productArrList.push($scope.productArr[i].proModelnum);
					$scope.proModelnumSelected = $scope.proModelnumSelected + "," + $scope.productArrList[i]
				}

				$scope.obj.showAddProduct = 'hide';
			}
			if(productInfo !== undefined && Array.isArray(productInfo) == false) {
				var productInfoArr = productInfo.split(",");
				var productInfoObj = {};
				productInfoObj.proModelnum = productInfoArr[0];
				productInfoObj.proName = productInfoArr[1];
				productInfoObj.brandName = productInfoArr[2];
				productInfoObj.grandparentSortName = productInfoArr[3];
				productInfoObj.parentSortName = productInfoArr[4];
				productInfoObj.sortName = productInfoArr[5];
				productInfoObj.proYear = productInfoArr[6];
				productInfoObj.proSeason = productInfoArr[7];
				productInfoObj.proPrice = productInfoArr[8];
				productInfoObj.brandId = productInfoArr[9];
				$scope.productArr.push(productInfoObj);
				$scope.obj.showAddProduct = 'hide';
				$scope.proModelnumSelected += "," + productInfoObj.proModelnum;
				//$scope.proModelnumSelected = $scope.proModelnumSelected.substr(1);
			}
			$scope.proModelnumSelected = $scope.proModelnumSelected.substr(0);
		}
		//点击门店零售调价下面的编辑
		//      $("#setPrice").centera();
	$scope.editPrice = function(obj) {
			$scope.kuproModelNum = obj.product.proModelnum;
			var jsonObject = {
				"orgId": keyParam.orgId,
				"modelId": obj.product.proModelnum
			};
			jsonObject = JSON.stringify(jsonObject);
			$scope.getProductImg(obj);
			$http({
				method: 'post',
				url: pos + 'product/findProductOnHand',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					$scope.productDetail = obj.product;
					$scope.proModelnum = obj.product.proModelnum;
					$scope.brandId = obj.product.brandId;
					$scope.skuList = data.data.productList;
//					$scope.defaultPrice = "";
					//	对取过来的数组进行组合成方便使用的数组
					$scope.obj.showSetPrice = "show";
					var productList = data.data.productList;
					$scope.sumInvtNum = 0;
					var size = [],
						hash = {};
					for(var i = 0; i < productList.length; i++) {
						if(!hash[productList[i].proSizeName]) {
							size.push(productList[i].proSizeName);
							hash[productList[i].proSizeName] = true;
						}
					}
					$scope.sizes = size;
					//去除数组中相同的元素生成颜色数组
					var color = [],
						hash = {};
					for(var i = 0; i < productList.length; i++) {
						if(!hash[productList[i].ColorName]) {
							color.push(productList[i].ColorName);
							hash[productList[i].ColorName] = true;
						}
					}
					$scope.colors = color;
					var phash = {};
					map = {};
					for(var i = 0; i < productList.length; i++) {
						phash[productList[i].ColorName + "," + productList[i].proSizeName] = true;
						map[productList[i].ColorName + "," + productList[i].proSizeName] = {
							"proNum": productList[i].proNum,
							"stkOnHand": productList[i].stkOnHand
						};
					}
					$(".productStkNum").remove();
					var html = [];
					$scope.sumStkNum = 0;
					for(var i = 0; i < color.length; i++) {
						html.push("<tr class='productStkNum'>");
						html.push("<th scope='row'>" + color[i] + "</th>");
						for(var j = 0; j < size.length; j++) {
							if(phash[color[i] + "," + size[j]]) {
								var proNum = map[color[i] + "," + size[j]].proNum;
								$scope.proNum = proNum;
								var stkOnHand = map[color[i] + "," + size[j]].stkOnHand;
								html.push("<td><input ng-disabled='obj.scan' class='invtNum' type='text' name='" + proNum + "' ng-blur='editStkNum($event)' validatetype='require:!盘点数不能为空;regex:0|(^[1-9]([0-9]+$)?)!盘点数不能输入负数' />");
//								html.push("<td><input ng-disabled='obj.scan' ng-value='defaultPrice' class='invtNum' type='text' name='" + proNum + "' ng-blur='editStkNum($event)' validatetype='require:!盘点数不能为空;regex:0|(^[1-9]([0-9]+$)?)!盘点数不能输入负数' />");
								$scope.sumStkNum = $scope.sumStkNum + parseInt(stkOnHand);
							} else {
								html.push("<td><input type='text' value='-' readonly='readonly' disabled='disabled'/></td>");
							}
						}
						html.push("</tr>");
					}
					var template = angular.element(html.join(""));
					var newHtml = $compile(template)($scope);
					angular.element($("#addSumRow").before(newHtml));
					if($scope.editOrScantype == "1" || $scope.editOrScantype == "0") {
						for(var i = 0; i < $scope.productArr.length; i++) {
							if($scope.productArr[i].proModelnum == $scope.kuproModelNum) {
								$scope.proDetailsListA = $scope.productArr[i].proDetails;
							}
						}
						$scope.skuPriceList = {};
						//		 将款号与对应价格以这种形式存在{61612210140521326: "123.00", 61612210140521327: "123.00", 61612210140521328: "123.00", 61612210140521026: "1234.00", 61612210140521027: "1234.00"…}
						if($scope.proDetailsList !== undefined) {
							for(var i = 0; i < $scope.proDetailsList.length; i++) {
								$scope.skuPriceList[$scope.proDetailsList[i].proNum] = $scope.proDetailsList[i].adjustPrice;
							}
							//当编辑的时候将价格绑定进零售价调整单
							for(var i=0;i<$scope.proDetailsList.length;i++){
								if($scope.proDetailsList[i].proModelnum==$scope.proModelnum ){
									$("input[name=" + $scope.proDetailsList[i].proNum + "]").val($scope.proDetailsList[i].adjustPrice);
								}
							}
						}
					} else {
						for(var i=0;i<$scope.proDetailsList.length;i++){
							if($scope.proDetailsList[i].proModelnum==$scope.proModelnum ){
							$("input[name=" + $scope.proDetailsList[i].proNum + "]").val($scope.proDetailsList[i].adjustPrice);
						}
						}
					}
					$("#setPrice").centera();
	
				} else {
					alertmsg("获取小品类失败", "error");
				}
			})
		}
		//获取商品图片
	$scope.getProductImg = function(obj) {
			var jsonObject = {
				"proModelnum": obj.product.proModelnum
			};
			jsonObject = JSON.stringify(jsonObject);
			$http({
				method: 'post',
				url: pos + 'model/getModelByModelNum',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					$scope.productImg = data.data.modelList[0].proUrl;
				} else {
					alertmsg("获取商品图片失败")
				}
			})
		}
		//关闭弹窗
	$scope.closeForm = function() {
			$scope.obj.showAddShop = "hide";
			$scope.obj.showAddProduct = "hide";
			$scope.obj.showSetPrice = "hide";
			$scope.obj.showSure = "hide";
			$scope.setAllPrice = "";
			$scope.obj.showSetpriceTogether = "show";
		}
		//点击查询按钮零售调价单
	$scope.searchPriceList = function() {
		var jsonObject = $("#searchPriceForm").serializeJson();
		var jsonObject = JSON.parse(jsonObject);
		jsonObject.nub = from;
		jsonObject.size = priceListpageSize;
		//	将日期转化为20170723这种格式
		if(jsonObject.effectiveDate == "") {
			jsonObject.effectiveDate = "";
		} else {
			$scope.effectiveDate = jsonObject.effectiveDate;
			$scope.effectiveDate = $scope.effectiveDate.split("-");
			$scope.effectiveDate = $scope.effectiveDate[0] + $scope.effectiveDate[1] + $scope.effectiveDate[2];
			jsonObject.effectiveDate = $scope.effectiveDate;
		}
		jsonObject = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'adjustPrice/getAdjustPrice',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.adjustPriceList = data.data.adjustPriceList;
				if($scope.adjustPriceList.length>0){
					$scope.priceListCount = $scope.adjustPriceList[0].count;
					$scope.createPagePlugin($scope.priceListCount, priceListpageSize, 'adjustPrice/getAdjustPrice', "paging");
					angular.forEach($scope.adjustPriceList, function(ele) {
						if(ele.status == "0") {
							ele.status = "未审核";
						} else if(ele.status == "1") {
							ele.status = "已审核";
						} else if(ele.status == "2") {
							ele.status = "已生效";
						}
					})
				}
			} else {
				alertmsg("获取订单失败", "error");
			}
		})
	};
	$scope.searchPriceList();

	//进入添加门店弹窗后点击查询操作
	$scope.searchShop = function() {
			var searchJsonObject = $("#searchShop").serializeJson();
			searchJsonObject = JSON.parse(searchJsonObject);
			var jsonObject = "{\"orgId\":\"" + keyParam.orgId + "\",\"nub\":\"" + from + "\",\"size\":\"" + pageSize + "\"}";
			jsonObject = JSON.parse(jsonObject);
			jsonObject.shopNum = searchJsonObject.shopNum;
			jsonObject.shopName = searchJsonObject.shopName;
			jsonObject = JSON.stringify(jsonObject);
			//          $scope.shopList(jsonObject);
			$http({
				method: 'post',
				url: pos + 'shop/getMerchantShop',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					$scope.addshopdatS = data.data.shopList;
				} else {
					alertmsg("系统错误", "error");
				}
			})

		}
		//进入添加门店弹窗后增加商户按钮的操作
	$scope.newShopInfoArr = [];
	$scope.addShopInto = function() {
			var jsonObject = $("#shopList").serializeJson();
			jsonObject = JSON.parse(jsonObject);
			var shopInfo = jsonObject.shopInfo;
			if(Array.isArray(shopInfo)) {
				$scope.dealShopInfoArr($scope.newShopInfoArr, shopInfo);
				$scope.obj.showAddShop = 'hide';
			}
			if(shopInfo !== undefined && Array.isArray(shopInfo) == false) {
				$scope.obj.showAddShop = 'hide';
				var newShopInfoArrObj = {};
				var sliceIndex = shopInfo.split(",");
				newShopInfoArrObj.shopNum = sliceIndex[0];
				newShopInfoArrObj.shopName = sliceIndex[1];
				newShopInfoArrObj.shopId = sliceIndex[2];
				$scope.newShopInfoArr.push(newShopInfoArrObj);
				//	添加门店的产生的数据展示在生效门店设置里面
			}
			if(shopInfo == undefined) {
				$scope.obj.showAddShop = 'hide';
			}
			var unique = {};
			$scope.newShopInfoArr.forEach(function(gpa) {
				unique[JSON.stringify(gpa)] = gpa
			});
			$scope.newShopInfoArr = Object.keys(unique).map(function(u) {
				return JSON.parse(u)
			});
		}
		//生效门店设置中的删除操作
		//店铺信息jsonObject.shopInfo字符串截取
	$scope.shopInfoSubStr = function(newShopInfoArr, shopInfo) {
			var newShopInfoArrObj = {};
			var sliceIndex = shopInfo.split(",");
			newShopInfoArrObj.shopNum = sliceIndex[0];
			newShopInfoArrObj.shopName = sliceIndex[1];
			newShopInfoArrObj.shopId = sliceIndex[2];
			newShopInfoArr.push(newShopInfoArrObj);
			//	添加门店的产生的数据展示在生效门店设置里面
			$scope.newShopInfoArr = newShopInfoArr;
		}
		//当单选2条以上信息时shopInfo为数组,对其进行处理
	$scope.dealShopInfoArr = function(newShopInfoArr, shopInfo) {
			for(var i = 0; i < shopInfo.length; i++) {
				$scope.shopInfoSubStr(newShopInfoArr, shopInfo[i]);
			}
		}
		//点击添加商品弹出框的查询操作
		//查询商品的数据请求
	$scope.getProduct = function(jsonObject) {
		$http({
			method: 'post',
			url: pos + 'model/getModels',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.productLists = data.data.modelList;
			} else {
				alertmsg("获取小品类失败", "error");
			}
		})
	}
	$scope.searchProduct = function() {
			var jsonObject = $("#searchProduct").serializeJson();
			jsonObject = JSON.parse(jsonObject);
			jsonObject.proModelnum1 = "";
			jsonObject = JSON.stringify(jsonObject);
			//	点击添加商品就加载所有商品
			$scope.getProduct(jsonObject);
		}
		//点击生效门店设置处的删除
	$(".am-dialog").centera();
	$scope.deleteList = function(obj, type) {
		$scope.obj.showSure = "show";
		//		需要修改的
		setTimeout(function() {
			$(".am-dialog").centera();
		}, 1)
		$scope.typeFlag = type;
		if($scope.typeFlag == 'shop') {
			$scope.delShop = obj.newShop;
		}
		if($scope.typeFlag == 'product') {
			$scope.delProduct = obj.product;
			$scope.deleteproModelNum = obj.product.proModelnum;
		}
	}
	$scope.delGrade = function() {
		if($scope.typeFlag == 'shop') {
			for(var i = 0; i < $scope.newShopInfoArr.length; i++) {
				if($scope.delShop.shopId == $scope.newShopInfoArr[i].shopId) {
					$scope.newShopInfoArr.splice(i, 1)
				}
			}
		}
		if($scope.typeFlag == 'product') {
			//			把页面上的列表数据删除掉了,然后进行查询商品的AJAX数据请求
			for(var i = 0; i < $scope.productArr.length; i++) {
				if($scope.deleteproModelNum == $scope.productArr[i].proModelnum) {
					$scope.productArr.splice(i, 1);
				}
			}
			$scope.productArrList = []
			$scope.proModelnumSelected = "";
			for(var i = 0; i < $scope.productArr.length; i++) {
				$scope.productArrList.push($scope.productArr[i].proModelnum);
				$scope.proModelnumSelected = $scope.proModelnumSelected + "," + $scope.productArrList[i]
			}
			//////			删除的时候把创建价格单传给后台的数据删除
			$scope.helloArr1 = [];
			for(var m = 0; m < $scope.proDetailsList.length; m++) {
				if($scope.proDetailsList[m].proModelnum != $scope.deleteproModelNum) {
					$scope.helloArr1.push($scope.proDetailsList[m]);
				}
			};
			$scope.proDetailsList = $scope.helloArr1;
		}
		$scope.obj.showSure = "hide";
	}
	window.onresize = function() {
			//          $("#setPrice").centera();
			$("#addproduct").centera();
			$("#addshop").centera();
		}
		//进入设置商品零售价页面的调价按钮
	$scope.proDetailsList = [];
	$scope.sureSetPrice = function() {
			$scope.skuPriceList = $("#setPriceForm").serializeJson();
			var skuPriceList = JSON.parse($scope.skuPriceList);
			var priceList = [];
			for(var i in skuPriceList) {
				var price = Number(skuPriceList[i]);
				priceList.push(price);
			}
			$scope.maxPrice = priceList[0];
			$scope.minPrice = priceList[0];
			for(var j in priceList) {
				if(priceList[j] > $scope.maxPrice) {
					$scope.maxPrice = priceList[j]
				}
				if(priceList[j] < $scope.minPrice) {
					$scope.minPrice = priceList[j]
				}
			}
			for(var m in $scope.productArr) {
				if($scope.productArr[m].proModelnum == $scope.kuproModelNum) {
					$scope.productArr[m].minAdjustPrice = $scope.minPrice;
					$scope.productArr[m].maxAdjustPrice = $scope.maxPrice;
				}
			}
			$scope.minprice = priceList;
			//			修改价格用的数组
			$scope.propriceArr = [];
			//			修改价格用的数组
			for(var i in skuPriceList) {
				$scope.proDetails = {};
				$scope.proDetailobj = {};
				$scope.proDetails.proNum = i;
				$scope.proDetails.adjustPrice = skuPriceList[i];
				$scope.proDetailobj.proNum = i;
				$scope.proDetailobj.adjustPrice = skuPriceList[i];
				$scope.proDetails.proModelnum = $scope.proModelnum;
				$scope.proDetails.brandId = $scope.brandId;
				$scope.proDetailobj.proModelnum = $scope.proModelnum;
				for(var j = 0; j < $scope.skuList.length; j++) {
					if($scope.proDetails.proNum == $scope.skuList[j].proNum) {
						$scope.proDetails.sizeId = $scope.skuList[j].colorId;
						$scope.proDetails.colorId = $scope.skuList[j].proSize;
					}
				}
				$scope.propriceArr.push($scope.proDetails);
			}
			if($scope.proDetailsList.length == 0) {
				for(var i in skuPriceList) {
					$scope.proDetails = {};
					$scope.proDetailobj = {};
					$scope.proDetails.proNum = i;
					$scope.proDetails.adjustPrice = skuPriceList[i];
					$scope.proDetailobj.proNum = i;
					$scope.proDetailobj.adjustPrice = skuPriceList[i];
					$scope.proDetails.proModelnum = $scope.proModelnum;
					$scope.proDetails.brandId = $scope.brandId;
					$scope.proDetailobj.proModelnum = $scope.proModelnum;
					for(var j = 0; j < $scope.skuList.length; j++) {
						if($scope.proDetails.proNum == $scope.skuList[j].proNum) {
							$scope.proDetails.sizeId = $scope.skuList[j].colorId;
							$scope.proDetails.colorId = $scope.skuList[j].proSize;
						}
					}
					$scope.proDetailsList.push($scope.proDetails);
					$scope.propriceArr.push($scope.proDetailobj);

				}
			} else {
				$scope.helloArr = [];
				for(var m = 0; m < $scope.proDetailsList.length; m++) {
					if($scope.proDetailsList[m].proModelnum != $scope.kuproModelNum) {
						$scope.helloArr.push($scope.proDetailsList[m]);
					}
				};
				$scope.proDetailsList = $scope.helloArr;
				for(var i in skuPriceList) {
					$scope.proDetails = {};
					$scope.proDetailobj = {};
					$scope.proDetails.proNum = i;
					$scope.proDetails.adjustPrice = skuPriceList[i];
					$scope.proDetailobj.proNum = i;
					$scope.proDetailobj.adjustPrice = skuPriceList[i];
					$scope.proDetails.proModelnum = $scope.proModelnum;
					$scope.proDetails.brandId = $scope.brandId;
					$scope.proDetailobj.proModelnum = $scope.proModelnum;
					for(var j = 0; j < $scope.skuList.length; j++) {
						if($scope.proDetails.proNum == $scope.skuList[j].proNum) {
							$scope.proDetails.sizeId = $scope.skuList[j].colorId;
							$scope.proDetails.colorId = $scope.skuList[j].proSize;
						}
					}
					$scope.proDetailsList.push($scope.proDetails);
					$scope.propriceArr.push($scope.proDetailobj);
				}
			}
			$scope.obj.showSetPrice = 'hide';
			$scope.setAllPrice = "";
			$scope.obj.showSetpriceTogether = "show";
		}
		//创建零售调价单的确认按钮
	$scope.adjustNumber = "";
	$scope.createPriceList = function() {
			//	ajax里面的传参jsonObject
			$scope.totalJsonObject = $("#createDateTime").serializeJson();
			//	ajax里面的传参jsonObject里面的生效日期以及proDetails
			$scope.totalJsonObject = JSON.parse($scope.totalJsonObject);
			$scope.totalJsonObject.proDetails = $scope.proDetailsList;
			$scope.totalJsonObject.shopList = $scope.newShopInfoArr;
			$scope.totalJsonObject.createDate = "";
			$scope.effectiveDate = $scope.totalJsonObject.effectiveDate.split("-");
			$scope.effectiveDate = $scope.effectiveDate[0] + $scope.effectiveDate[1] + $scope.effectiveDate[2];
			$scope.totalJsonObject.effectiveDate = $scope.effectiveDate;
			if($scope.obj.resetflag == "add") {
				$scope.totalJsonObject.adjustNo = "";
			} else {
				$scope.totalJsonObject.adjustNo = $scope.adjustNumber;
			}
			if($scope.totalJsonObject.effectiveDate == "undefinedundefined") {
				alertmsg("请选择生效日期", "error");
				return;
			}
			if($scope.totalJsonObject.shopList.length == 0) {
				alertmsg("请添加生效门店", "error");
				return;

			}
			if($scope.totalJsonObject.proDetails.length == 0) {
				alertmsg("请添加商品并设定商品价格", "error");
				return;
			} else {
				var jsonObject = JSON.stringify($scope.totalJsonObject);
				$http({
					method: 'post',
					url: pos + 'adjustPriceDetail/addOrUpdateAdjustPrice',
					params: {
						keyParams: getKeyParams(jsonObject, keyParams),
						jsonObject: getJsonObject(jsonObject)
					}
				}).success(function(data, stauts, headers, config) {
					if(data.code == 1) {
						$scope.obj.showAddList = true;
						$scope.searchPriceList();
					} else {
						alertmsg("失败", "error");
					}
				})
			}

		}
		//取消生效弹框
	$scope.concelCheckTime = function() {
			$scope.obj.showCheckTimeFrame = "hide";
		}
		//确认审核通过
	$scope.sureCheckPass = function() {
			$scope.obj.showCheckTimeFrame = "hide";
			var jsonObject = {
				"status": 1,
				"adjustNo": $scope.adjustNo,
				"effectiveDate": $scope.effectiveDate
			};
			jsonObject = JSON.stringify(jsonObject);
			$http({
				method: 'post',
				url: pos + 'adjustPrice/updateAdjustPrice',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					$scope.searchPriceList();
					alertmsg("成功");
				} else {
					alertmsg("失败", "error");
				}
			})
		}
		// 审核或撤销调价单
	$scope.isShow = false;
	$('#DelDialoga').centera();
	$scope.checkOrBackout = function(obj, type) {
			if(type == "1") {
				$scope.effectiveDatea = obj.adjustPrice.effectiveDate;
				$scope.adjustNo = obj.adjustPrice.adjustNo;
				$scope.effectiveDate = obj.adjustPrice.effectiveDate;

				if(obj.adjustPrice.createDate == obj.adjustPrice.effectiveDate) {
					$scope.isShow = true;
				} else {
					$scope.isShow = false;
				}
				$scope.obj.showCheckTimeFrame = "show";
				
			} else {
				var jsonObject = {
					"status": type,
					"adjustNo": obj.adjustPrice.adjustNo,
					"effectiveDate": obj.adjustPrice.effectiveDate
				};
				jsonObject = JSON.stringify(jsonObject);
				$http({
					method: 'post',
					url: pos + 'adjustPrice/updateAdjustPrice',
					params: {
						keyParams: getKeyParams(jsonObject, keyParams),
						jsonObject: getJsonObject(jsonObject)
					}
				}).success(function(data, stauts, headers, config) {
					if(data.code == 1) {
						$scope.searchPriceList();
						alertmsg("成功");
					} else {
						alertmsg("失败", "error");
					}
				})
			}
		}
		//编辑或则查看零售调价单
	$scope.editOrScan = function(obj, type) {
		$scope.editOrScantype = type;
		$scope.obj.showCode = true;
		if($scope.editOrScantype == "0") {
			$scope.obj.scan = true;
		}
		if($scope.editOrScantype == "1") {
			$scope.obj.scan = false;
			$scope.obj.resetflag = "edit";
		}
		$scope.loadDetailjsonObject = {
			"adjustNo": obj.adjustPrice.adjustNo
		};
		$scope.loadDetail($scope.loadDetailjsonObject);
	}
	$scope.loadDetail = function(obj) {
		jsonObject = JSON.stringify(obj);
		$http({
			method: 'post',
			url: pos + 'adjustPriceDetail/getAdjustPriceDetail',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.newShopInfoArr = data.data.shopList;
				$scope.effectiveDate = data.data.effectiveDate;
				$scope.createDateA = data.data.createDate;
				$("#effectdatatime").val($scope.effectiveDate);
				$scope.adjustNo = data.data.adjustNo;
				//$scope.productArr是产品数组,里面有proDetails，是SKU的价格
				$scope.productArr = data.data.products;
				$scope.obj.showAddList = false;
				$scope.proDetailsList = [];
				//将查询回来的products.proDetails中加入proModelnum,并转化成修改时传给后台的数据格式
				for(var i = 0; i < data.data.products.length; i++) {
					for(var j = 0; j < data.data.products[i].proDetails.length; j++) {
						data.data.products[i].proDetails[j].proModelnum = data.data.products[i].proModelnum
						data.data.products[i].proDetails[j].brandId = data.data.products[i].brandId
						$scope.proDetailsList.push(data.data.products[i].proDetails[j])
					}
					$scope.proModelnumSelected += "," + data.data.products[i].proModelnum;
				}
				$scope.proModelnumSelectedA = $scope.proModelnumSelected
				$scope.adjustNumber = $scope.adjustNo;
			} else {
				alertmsg("失败", "error");
			}
		})
	}
	//	点击重置按钮对内容进行清空
	$scope.reset = function() {
		if($scope.obj.resetflag == "add") {
			$scope.clearData();
		}
		if($scope.obj.resetflag == "edit") {
			$scope.loadDetail($scope.loadDetailjsonObject);
			$scope.proModelnumSelected = $scope.proModelnumSelectedA;
		}
	}
	laydate({
		elem: '#effectdatatime',
		format: 'YYYY-MM-DD', // 分隔符可以任意定义，该例子表示只显示年月
		festival: true, //显示节日
		min: laydate.now(0)
	});
	//分页效果
	//	分页
	$scope.createPagePlugin = function(total, pageSize, usedUrl, selectorId) {
		$("#" + selectorId + "").empty();
		paging = pagePlugin.createPaging({
			renderTo: selectorId,
			total: total,
			pageSize: pageSize
		});
		paging.goPage = function(from, to) {
			$scope.page(from - 1, pageSize, usedUrl);
		}
	};
	$scope.page = function(from, pageSize, usedUrl) {

			$scope.jsonPage = {
				"nub": "" + from + "",
				"size": "" + pageSize + ""
			};
			$.extend($scope.jsonPage, $scope.param);
			$scope.jsonObject = JSON.stringify($scope.jsonPage);
			$http({
				method: 'post',
				url: pos + usedUrl,
				params: {
					keyParams: getKeyParams($scope.jsonObject, keyParams),
					jsonObject: getJsonObject($scope.jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					$scope.adjustPriceList = data.data.adjustPriceList;
					angular.forEach($scope.adjustPriceList, function(ele) {
						if(ele.status == "0") {
							ele.status = "未审核";
						}
						if(ele.status == "1") {
							ele.status = "已审核";
						}
					})
				} else {
					alertmsg("获取颜色失败", "error");
				}
			})
		}
		//		$scope.page(from, pageSize,'adjustPrice/getAdjustPrice');
}])