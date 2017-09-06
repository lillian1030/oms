qyApp.controller("wdProductListController", function($scope, $http, Upload, $compile, $route, $state, $stateParams) {
	
	//分页
	var from=0;
	var pageSize=10;
	var total=0;	
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
		$scope.jsonPage={"nub":""+from+"","size":""+pageSize+""};
		$.extend($scope.jsonPage,$scope.param);
		$scope.jsonObject=JSON.stringify($scope.jsonPage);
		$http({
			method: 'post',
			url: pos + 'product/getProductInfoForWd',
			params: {
				keyParams: getKeyParams($scope.jsonObject, keyParams),
				jsonObject: getJsonObject($scope.jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.proList = data.data.modelList;
				$("#wdProductListForm")[0].reset();
			} else {
				alertmsg("获取商品信息失败", "error");
			}
		})
	}
	
	//查询微店商品
	$scope.getProList=function(){
		$scope.jsonPage={"nub":""+from+"","size":""+pageSize+"","proStatus":1};
		$scope.param=JSON.parse($("#wdProductForm").serializeJson());
		if($scope.brandId){
			$scope.param.brandId=$scope.brandId;
		}
		$.extend($scope.jsonPage,$scope.param);
		$scope.jsonObject=JSON.stringify($scope.jsonPage);
		$http({
			method: 'post',
			url: pos + 'product/getProductInfoForWd',
			params: {
				keyParams: getKeyParams($scope.jsonObject, keyParams),
				jsonObject: getJsonObject($scope.jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.proList = data.data.modelList;
				$scope.count = data.data.count;
				$scope.createPagePlugin($scope.count, pageSize);
				$("#wdProductListForm")[0].reset();
			} else {
				alertmsg("获取商品信息失败", "error");
			}
		})
	}
	$scope.getProList();
	
	$scope.choice = function($event) {
		if($($event.target).prop('checked') && $($event.target).attr('num') == 1) {
			$('.productSearch-type1').show();
			$('.productSearch-type2').hide();
		} else if($($event.target).prop('checked') && $($event.target).attr('num') == 2) {
			$('.productSearch-type2').show();
			$('.productSearch-type1').hide();
		}
//		$("#proModelid").val('');
//		$scope.queryBrand = "";
//		$scope.year1 = "";
//		$scope.season1 = "";
//		$scope.gps = "";
//		$scope.ps = "";
//		$scope.sort = "";
//		$scope.products = "";
//		$scope.count = "";
	}
	/*跳转新增和编辑页面*/
	$scope.toAddProduct=function(type,pro){
		var sourceArr = [{
			level: 0,
			name: "wdProductList"
		}];
		var params={
			"source": sourceArr,
			"type": "1",
		};
		var targetRoute="";
		if(type=='1'){
			targetRoute="addWdPro";
		}else{
			targetRoute="editWdPro";
			params.pro=pro;
		}
		$state.go(targetRoute, {
			uiParams: params
		});
	}

	
	$scope.addProductWD=function(){
		
	}
	
	//查询品牌
//	$http({
//		method: 'post',
//		url: pos + 'brand/getBrand',
//		params: {
//			keyParams: getKeyParams('{}', keyParams),
//			jsonObject: getJsonObject('{}')
//		}
//	}).success(function(data, stauts, headers, config) {
//		if(data.code == 1) {
//			$scope.queryBrands = data.data.brandList;
////			var html=[];
////			$.each($scope.queryBrands,function(i,n){
////				html.push('<option value="'+n.brandId+'">'+n.brandName+'</option>')
////			})
////			$('#brand').append(html.join(""));
////			$('.selectpicker').selectpicker('refresh');
//		} else {
//			alertmsg("获取品牌失败", "error");
//		}
//	})
	
	//上架商品
	$scope.addProductWD=function(obj){
		var pOrgId=JSON.parse(localStorage.userInfo).orgId;
		var jsonObject={"pOrgId":pOrgId,"modelid":obj.proModelid,"publishStatus":"1","type":"7","orgIds":""};
		jsonObject=JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'publish/addPublishInfo',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.getProList();
				alertmsg("上架商品成功");
			} else {
				alertmsg("上架商品失败", "error");
			}
		})
	}
	
	//全选商品
	$scope.selProAll=function(){
		 if($("#all").prop("checked")){
			 $("#wdProductList :checkbox").prop("checked", true);  
		 }else{
			 $("#wdProductList :checkbox").prop("checked", false);  
		 }
		 
	}
	
	//选择商品
	$scope.check=function(pro){
		console.log(pro);
	}
	
	//批量上架
	$scope.batchAdd=function(){
		var json=JSON.parse($("#wdProductListForm").serializeJson());
		var modelIds=json.modelId;
		if(!(modelIds instanceof Array)){
			modelIds=[];
			modelIds.push(json.modelId);
		}
		$.each(modelIds,function(i,n){
			if($("#"+n).attr("data")=="0"){
				var pOrgId=JSON.parse(localStorage.userInfo).orgId;
				var jsonObject={"pOrgId":pOrgId,"modelid":n,"publishStatus":"1","type":"7","orgIds":pOrgId};
				jsonObject=JSON.stringify(jsonObject);			
				$http({
					method: 'post',
					url: pos + 'publish/addPublishInfo',
					params: {
						keyParams: getKeyParams(jsonObject, keyParams),
						jsonObject: getJsonObject(jsonObject)
					}
				}).success(function(data, stauts, headers, config) {
					if(data.code == 1) {
						$scope.getProList();
						alertmsg("上架商品成功");
					} else {
						alertmsg("上架商品失败", "error");
						return false;
					}
				})
			}else{
				alertmsg("请选择未上架商品再批量上架");
			}
			
		})
	}
	
	//下架
	$scope.downProductWD=function(obj){
		var pOrgId=JSON.parse(localStorage.userInfo).orgId;
		var jsonObject={"modelid":obj.proModelid,"type":"7"};
		jsonObject=JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'publish/deletePublishInfo',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.getProList();
				alertmsg("下架商品成功");
			} else {
				alertmsg("下架商品失败", "error");
			}
		})
	}
	
	//批量下架
	$scope.batchDown=function(){
		var json=JSON.parse($("#wdProductListForm").serializeJson());
		var modelIds=json.modelId;
		if(!(modelIds instanceof Array)){
			modelIds=[];
			modelIds.push(json.modelId);
		}
		$.each(modelIds,function(i,n){
			if($("#"+n).attr("data")=="1"){
				var pOrgId=JSON.parse(localStorage.userInfo).orgId;
				var jsonObject={"modelid":n,"type":"7"};
				jsonObject=JSON.stringify(jsonObject);
				$http({
					method: 'post',
					url: pos + 'publish/deletePublishInfo',
					params: {
						keyParams: getKeyParams(jsonObject, keyParams),
						jsonObject: getJsonObject(jsonObject)
					}
				}).success(function(data, stauts, headers, config) {
					if(data.code == 1) {
						$scope.getProList();
						alertmsg("下架商品成功");
					} else {
						alertmsg("下架商品失败", "error");
					}
				})
			}else{
				alertmsg("请选择已上架商品再批量下架");
			}
		})
		
	}
	
});
