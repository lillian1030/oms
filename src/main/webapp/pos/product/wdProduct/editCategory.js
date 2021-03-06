qyApp.controller("editCategoryController", function($scope, $http, Upload, $compile, $route, $state, $stateParams) {

	if ($stateParams.uiParams.type == "1") {
		$stateParams.uiParams.source.push({
			level: $stateParams.uiParams.source.length,
			name: "editCategory"
		})
		$scope.sortInfo = $stateParams.uiParams.sortInfo;
		if($scope.sortInfo.sortId=="130906331"){
			$scope.colorList=$scope.sortInfo.colorList;
			$scope.sizeList=$scope.sortInfo.sizeList;
			$scope.groupId=$scope.sortInfo.groupId;
		}else{
			$scope.productSpecGroup=$scope.sortInfo.productSpecGroup; 
		}
	} 
	/* 点击返回按钮 */
	$scope.goback = function() {
		$stateParams.uiParams.source.splice(
		$stateParams.uiParams.source.length - 1, 1);
		$state.go(
		$stateParams.uiParams.source[$stateParams.uiParams.source.length - 1].name, {
			uiParams: {
				"source": $stateParams.uiParams.source,
				"type": "2"
			}
		})
	}
	
	/**
	 * js方法
	 * addColor:服装类添加颜色
	 * addSize:服装类添加尺码
	 * PrefixInteger:左补0
	 * save:保存
	 * addProductSpec:添加自定义规格组
	 * addSpec:添加自定义规格
	 */
	function PrefixInteger(num, n) {
        return (Array(n).join(0) + num).slice(-n);
    }
	
	var colorNumLength=3;
	$scope.addColor=function(){
		var newColorNum=PrefixInteger($scope.colorList.lengh,colorNumLength);
		if(newColorNum<$scope.colorList.lengh){
			alertmsg('最大支持999个颜色', "error");
			return;
		}
		var json={
			"colorId":"",
			"colorNum":newColorNum,
			"colorName":"",
			"imagePath":"",
			"selected":"0"
		}
		$scope.colorList.push(json);
	}
	
	var sizeNumLength=2;
	$scope.addSize=function(){
		var newSizeNum=PrefixInteger($scope.sizeList.lengh,sizeNumLength);
		if(newSizeNum<$scope.sizeList.lengh){
			alertmsg('最大支持99个尺码', "error");
			return;
		}
		var json={
				"sizeId":"",
				"sizeNum":newSizeNum,
				"sizeName":"",
				"sizeIndex":"",
				"selected":"0"
		}
		$scope.sizeList.push(json);
	}
	
	$scope.save=function(){
		if($scope.sortInfo.sortId=="130906331"){
			addAndUpdateColorAndSize();
		}else{
			addProductSpecBatch();
		}
	}
	
	$scope.addProductSpec=function(){
		var json={
			"specGroupName":"",
			"specGroupIndex":$scope.productSpecGroup.length,
			"productSpec":[]
		}
		$scope.productSpecGroup.push(json);
	}
	
	var specIndexLength=2;
	$scope.addSpec=function(type){
		var specIndex=PrefixInteger($scope.productSpecGroup[type].productSpec.length,specIndexLength);
		var json={
			"productSpecId":"",
			"specName":"",
			"specIndex":specIndex
		}
		$scope.productSpecGroup[type].productSpec.push(json);
	}

	$scope.model = {
		'isTab': '1'
	}

	/* 品类选项卡切换 */
	$scope.shiftCategoryTab = function(type) {
		$scope.model.isTab = type;
	}
	
	
	/**
	 * 调用接口
	 * addAndUpdateColorAndSize:服装更新颜色尺码
	 * addProductSpecBatch:保存自定义规格
	 */
	function addAndUpdateColorAndSize(){
		var json={
			"proModelid":"",
			"sortId":$scope.sortInfo.sortId,
			"colorGroup":$scope.colorList,
			"groupId":$scope.groupId,
			"sizeGroup":$scope.sizeList
		}
		json=JSON.stringify(json);
		$http({
			method: 'post',
			url: pos + 'product/addAndUpdateColorAndSize',
			params: {
				keyParams: getKeyParams(json, keyParams),
				jsonObject: getJsonObject(json)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				alertmsg('保存成功');
				getColorAndSize($scope.sortInfo.sortId);
			} else {
				alertmsg('保存失败', "error");
			}
		});
	}
	
	function addProductSpecBatch(){
		var json={
			"sortId":$scope.sortInfo.sortId,
			"productSpecGroup":$scope.productSpecGroup
		}
		json=JSON.stringify(json);
		$http({
			method: 'post',
			url: pos + 'product/addProductSpecBatch',
			params: {
				keyParams: getKeyParams(json, keyParams),
				jsonObject: getJsonObject(json)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				alertmsg('保存成功');
				getProductSpec($scope.sortInfo.sortId);
			} else {
				alertmsg('保存失败', "error");
			}
		});
	}
	
	function getProductSpec(sortId){
		var jsonSortPid = JSON.stringify({
			"sortId": sortId
		});
		$http({
			method: 'post',
			url: pos + 'product/getProductSpec',
			params: {
				keyParams: getKeyParams(jsonSortPid, keyParams),
				jsonObject: getJsonObject(jsonSortPid)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.productSpecGroup=data.data.productSpecGroup;
			} else {
				alertmsg('获取大品类失败', "error");
			}
		});
	}
	
	function getColorAndSize(sortId){
		var json=JSON.stringify({"proModelid":"","sortId":sortId,"nub":"0","size":"0"});
		$http({
			method: 'post',
			url: pos + 'product/getColorAndSize',
			params: {
				keyParams: getKeyParams(json, keyParams),
				jsonObject: getJsonObject(json)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.colorList=data.data.colorInfo.colorList;
				$scope.sizeList=data.data.sizeInfo.sizeList;
				$scope.groupId=data.data.sizeInfo.groupId;
			} else {
				alertmsg('获取服装规格失败', "error");
			}
		});
	}

});