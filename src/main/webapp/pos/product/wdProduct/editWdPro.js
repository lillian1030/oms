qyApp.controller("editWdProController", function($scope, $http, Upload, $compile, $route, $state, $stateParams,$timeout) {
	$scope.userInfo=JSON.parse(localStorage.userInfo);
	$scope.orgName=$scope.userInfo.orgName;
	//返回
	$scope.SizeNumAndName=[];
	$scope.ColorNumAndName=[];
	//图片数组
	$scope.imagesList=[];
	if($stateParams.uiParams.type == "1") {
		$stateParams.uiParams.source.push({
			level: $stateParams.uiParams.source.length,
			name: "editWdPro"
		})
		$scope.pro = $stateParams.uiParams.pro;
		$scope.logiticTemplateId=$scope.pro.logiticTemplateId;
		$scope.productList=$scope.pro.productList;
		$scope.proAttrArr=$scope.pro.attrArr;
		$scope.proSortId=$scope.pro.proSortId;
		if($scope.pro.sortName=="服装"){
			$scope.itemList=["颜色","尺码"];
			for(var i=0;i<$scope.productList.length;i++){
				$scope.productList[i].proNum=$scope.productList[i].proNum.substring($scope.productList[i].proNum.length-5);
			}
		}else{
			$scope.itemList=[];
			if($scope.pro.itemLists.item1Data!=undefined){
				$scope.itemList.push($scope.pro.itemLists.item1Data.specGroupName1);
			}
			if($scope.pro.itemLists.item2Data!=undefined){
				$scope.itemList.push($scope.pro.itemLists.item2Data.specGroupName2);
			}
			if($scope.pro.itemLists.item3Data!=undefined){
				$scope.itemList.push($scope.pro.itemLists.item3Data.specGroupName3);
			}
		}
		for(var i=0;i<$scope.pro.imageList.length;i++){
			$("#main"+$scope.pro.imageList[i].index).attr("src", $scope.pro.imageList[i].url);
			var object= new Object();
			object.imgId="main"+$scope.pro.imageList[i].index;
			object.url=$scope.pro.imageList[i].url;
			$scope.imagesList.push(object);
		}
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
	
	$scope.editCategory=function(){
		var json={
			"sortId":$scope.proSortId
		};
		if(json.sortId=="130906331"){
			json.sortName="服装";
		}else if(json.sortId=="130906332"){
			json.sortName="食品";
		}else if(json.sortId=="130906333"){
			json.sortName="玩具";
		}else if(json.sortId=="130906334"){
			json.sortName="美妆";
		}else{
			return;
		}
		if($scope.proSortId=='130906331'){
			json.colorList=$scope.colorList;
			json.sizeList=$scope.sizeList;
			json.groupId=$scope.groupId;
		}else{
			json.productSpecGroup=$scope.productSpecGroup;
		}
		var params={
			"source": $stateParams.uiParams.source,
			"type": "1",
			"sortInfo":json
		};
		$state.go("editCategory", {
			uiParams: params
		});
	}
	
	//规格切换
	$scope.tabType='0';//初始化
	$scope.shiftStandardTab=function(type){
		$("."+$scope.tabType).hide();
		$scope.tabType=type;
		$("."+$scope.tabType).show();
		
	}
	
	$scope.shiftStandardTab1=function(type){
		$scope.tabType=type;
		if(type=="0"){
			$(".color").show();
			$(".size").hide();
		}else{
			$(".size").show();
			$(".color").hide();
		}
		
	}
	
	/*获取大品类*/
	var jsonSortPid = JSON.stringify({
//		"orgId": JSON.parse(keyParams).orgId,
		//"orgId":"-1",
		"sortPid": 0
	});//获取大品类
	$http({
		method: 'post',
		url: pos + 'sort/getBaseAndCustomSortWD',
		params: {
			keyParams: getKeyParams(jsonSortPid, keyParams),
			jsonObject: getJsonObject(jsonSortPid)
		}
	}).success(function(data, stauts, headers, config) {
		if(data.code == "1") {
			$scope.item0 = data.data.sortList;
			$scope.proSortId=$scope.pro.proSortId;
			$scope.changeSort($scope.proSortId);
		} else {
			alertmsg('获取大品类失败', "error");
		}
	});
	
	//年份数组
	$scope.queryYears = function() {
			var dt = new Date();
			year = dt.getFullYear();
			$scope.years = [];
			for(var i = 0; i < 7; i++) {
				$scope.years.push(year - 5 + i);
			}
			$scope.proYear = year + "";
		}
	$scope.queryYears();
	
	//拼规格数据
	$scope.getItems=function(json,productJson){
		var Arr1=productJson.proSizeId;
		var Arr2=productJson.proSizeName;
		var Arr3=productJson.proColorId;
		var Arr4=productJson.proColorName;
		var products=[];
		for(var i=0;i<Arr1.length||(Arr1.length==0&&i==0);i++){
			for(var j=0;j<Arr2.length||(Arr2.length==0&&j==0);j++){
				for(var k=0;k<Arr3.length||(Arr3.length==0&&k==0);k++){
					for(var l=0;l<Arr4.length||(Arr4.length==0&&l==0);l++){
						var obj={
							"proColorId":"",
							"proColorName":"",
							"proSizeId":"",
							"proSizeName":"",
							"adjustPrice":productJson.adjustPrice,
							"stkOnHand":productJson.stkOnHand,
						}
						if(Arr1.length!=0){
							obj.proColorId=Arr1[i];
						}
						if(Arr2.length!=0){
							obj.proColorName=Arr2[j];
						}
						if(Arr3.length!=0){
							obj.proSizeId=Arr3[k];
						}
						if(Arr4.length!=0){
							obj.proSizeName=Arr4[l];
						}
						obj.proNum=obj.proColorId+obj.proSizeId;
						products.push(obj);
					}
				}
			}
		}
		json.products=products;
		return json;
	}
	
	//修改服装商品
	$scope.updateProudctWd=function(){
		var json=JSON.parse($("#addproductForm").serializeJson());
		if(checkProduct(json)){
			return;
		}
		json.modelid=$scope.pro.proModelid;
		json.products=$scope.productList;
		var proDescription="";
		var imgArr=$($scope.ue.getContent()).find("img");
		for(var i=0;imgArr!=undefined&&i<imgArr.length;i++){
			if(proDescription==""){
				proDescription=imgArr[i].src;
			}else{
				proDescription=proDescription+"@"+imgArr[i].src;
			}
		}
		json.proDescription=proDescription;
		//品类
		if($scope.proSortId==undefined||$scope.proSortId==""){
			alertmsg('品类不能为空', "error");
			return;
		}
		json.proSortId=$scope.proSortId;
		if($scope.proSortId=='130906331'){
			if(json.proModelnum==undefined||json.proModelnum==""){
				alertmsg('货号不能为空', "error");
				return;
			}
			$.each(json.products,function(i,n){
				n.proModelnum=json.proModelnum;
				n.proNum=json.proModelnum+n.proNum
			})
		}else{
			$.each($scope.proAttrArr,function(i,n){
				if(n.attrValue==""){
					n.attrValue==" ";
				}
			})
			json.proAttrArr=$scope.proAttrArr;
		}
		//价格信息
		json.priceInfo=[];
		$.each(json.products,function(i,n){
			json.priceInfo.push(n);
		})
		//图片信息
		json.imageArr=$scope.imagesList;
		//库存信息
		json.warehStkInfo=[];
		$.each(json.products,function(i,n){
			json.warehStkInfo.push(n);
		})
		//运费模板
		if($scope.logiticTemplateId){
			json.logiticTemplateId=$scope.logiticTemplateId;
			json.logiticTemplateName=$("#logiticTemplateId").text();
		}else{
			json.logiticTemplateId="0";
			json.logiticTemplateName="包邮";
		}
		//默认上架商品
		if($("[name=publishStatus]").prop("checked")){
			json.publishStatus="1";
		}
		json=JSON.stringify(json);
		console.log(json);
		$http({
			method: 'post',
			url: pos + 'product/updateProductWD',
			params: {
				keyParams: getKeyParams(json, keyParams),
				jsonObject: getJsonObject(json)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				alertmsg('保存商品成功');
				$scope.goback();
			} else {
				alertmsg('添加商品失败', "error");
			}
		});
	}
	
	//获取自定义规格
	$scope.getProductSpec=function(sortId){
		$('#productSpecGroup').empty();
		var json=JSON.stringify({"sortId":sortId});
		$http({
			method: 'post',
			url: pos + 'product/getProductSpec',
			params: {
				keyParams: getKeyParams(json, keyParams),
				jsonObject: getJsonObject(json)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.productSpecGroup=data.data.productSpecGroup;
				if($scope.productSpecGroup.length>0){
					var html=[];
					var htmlTable=[];
					$.each($scope.productSpecGroup,function(i,n){
						
						$.each(n.productSpec,function(j,k){
							if(i==0){
								html.push('<label class="label-input '+n.specGroupIndex+'">');
								if(checkSpecExit(n.specGroupIndex,k)){
									html.push('<input type="checkbox" dataGroupName="'+n.specGroupName+'" dataGroupIndex="'+n.specGroupIndex+'" dataId="'+k.specIndex+'" dataName="'+k.specName+'" ng-click="checkSpec($event)" name="spec'+n.specGroupIndex+'" value="'+k.productSpecId+'" checked="checked"/>'+k.specName);
								}else{
									html.push('<input type="checkbox" dataGroupName="'+n.specGroupName+'" dataGroupIndex="'+n.specGroupIndex+'" dataId="'+k.specIndex+'" dataName="'+k.specName+'" ng-click="checkSpec($event)" name="spec'+n.specGroupIndex+'" value="'+k.productSpecId+'"/>'+k.specName);
								}
								html.push('</label>');
							}else{
								html.push('<label class="label-input '+n.specGroupIndex+'" style="display:none">');
								if(checkSpecExit(n.specGroupIndex,k)){
									html.push('<input type="checkbox" dataGroupName="'+n.specGroupName+'" dataGroupIndex="'+n.specGroupIndex+'" dataId="'+k.specIndex+'" dataName="'+k.specName+'" ng-click="checkSpec($event)" name="spec'+n.specGroupIndex+'" value="'+k.productSpecId+'" checked="checked"/>'+k.specName);
								}else{
									html.push('<input type="checkbox" dataGroupName="'+n.specGroupName+'" dataGroupIndex="'+n.specGroupIndex+'" dataId="'+k.specIndex+'" dataName="'+k.specName+'" ng-click="checkSpec($event)" name="spec'+n.specGroupIndex+'" value="'+k.productSpecId+'"/>'+k.specName);
								}
								html.push('</label>');
							}								
						})
						
					})
			         var template=angular.element(html.join(""));
			         var newHtml=$compile(template)($scope);
			         angular.element($('#productSpecGroup').append(newHtml));
				}else{
					$('#productSpecGroup').empty();
				}
			} else {
				alertmsg('获取自定义规格失败', "error");
			}
		});
	}
	
	$scope.specNumAndName1=[];
	$scope.specNumAndName2=[];
	$scope.specNumAndName3=[];
	//选择规格
	$scope.checkSpec=function($event){
		var obj=$($event.target);
		var groupIndex=obj.attr("dataGroupIndex");
		var groupName=obj.attr("dataGroupName");
		var id=obj.attr("value");
		var num=obj.attr("dataId");
		var name=obj.attr("dataName");
		var s=0
		for(;s<$scope.itemList.length;s++){
			if($scope.itemList[s]==groupName){
				break;
			}
		}
		if(s==$scope.itemList.length)
			$scope.itemList.push(groupName);
//		$("#"+id).val(name);？
		if(groupIndex=="0"){
			if ($(obj).prop("checked")) {
				var object = new Object();
		        object.specId=id;
		        object.specName=name;
		        object.num=num;
		        $scope.specNumAndName1.push(object);
			} else {
				for(var x=0;x<$scope.specNumAndName1.length;x++){
					if($scope.specNumAndName1[x].specId==id){
						$scope.specNumAndName1.splice(x,1);
						break;
					}
				}
				if($scope.specNumAndName1.length==0){
					for(var x=0;x<$scope.itemList.length;x++){
						if($scope.itemList[x]==groupName){
							$scope.itemList.splice(x,1);
							break;
						}
					}
				}
			}
		}else if(groupIndex=="1"){
			if ($(obj).prop("checked")) {
				var object = new Object();
		        object.specId=id;
		        object.specName=name;
		        object.num=num;
		        $scope.specNumAndName2.push(object);
			} else {
				for(var x=0;x<$scope.specNumAndName2.length;x++){
					if($scope.specNumAndName2[x].specId==id){
						$scope.specNumAndName2.splice(x,1);
						break;
					}
				}
				if($scope.specNumAndName2.length==0){
					for(var x=0;x<$scope.itemList.length;x++){
						if($scope.itemList[x]==groupName){
							$scope.itemList.splice(x,1);
							break;
						}
					}
				}
			}
		}else if(groupIndex=="2"){
			if ($(obj).prop("checked")) {
				var object = new Object();
		        object.specId=id;
		        object.specName=name;
		        object.num=num;
		        $scope.specNumAndName3.push(object);
			} else {
				for(var x=0;x<$scope.specNumAndName3.length;x++){
					if($scope.specNumAndName3[x].specId==id){
						$scope.specNumAndName3.splice(x,1);
						break;
					}
				}
				if($scope.specNumAndName3.length==0){
					for(var x=0;x<$scope.itemList.length;x++){
						if($scope.itemList[x]==groupName){
							$scope.itemList.splice(x,1);
							break;
						}
					}
				}
			}
		}
		dealSpec();
	}
	
	dealSpec=function(){
		var adjustPrice="";
		var stkOnHand="";
		if(!$scope.unifyAdjustPriceDis){
			adjustPrice=$scope.adjustPrice;
		}
		if(!$scope.unifyStkOnHandDis){
			stkOnHand=$scope.stkOnHand;
		}
		var tempProductList=[];
		for(var i=0;i<$scope.specNumAndName1.length||($scope.specNumAndName1.length==0&&i==0);i++){
			for(var j=0;j<$scope.specNumAndName2.length||($scope.specNumAndName2.length==0&&j==0);j++){
				for(var k=0;k<$scope.specNumAndName3.length||($scope.specNumAndName3.length==0&&k==0);k++){
					var json={
						    "proSize": "",
						    "proSizeName": "",
						    "proNum": "",
						    "proName": "",
						    "proColorId": "",
						    "proColorName": "",
						    "colorId": "",
						    "sizeId": "",
						    "proModelnum": "",
						    "proPic": "",
						    "item1": "",
						    "item1Name": "",
						    "item2": "",
						    "item2Name": "",
						    "item3": "",
						    "item3Name": "",
						    "adjustPrice":adjustPrice,
						    "stkOnHand":stkOnHand
						}
						if($scope.specNumAndName1.length!=0){
							json.item1=$scope.specNumAndName1[i].specId;
							json.item1Name=$scope.specNumAndName1[i].specName;
							json.proNum=json.proNum+$scope.specNumAndName1[i].num;
						}else{
							json.proNum=json.proNum+"00";
						}
					
						if($scope.specNumAndName2.length!=0){
							json.item2=$scope.specNumAndName2[j].specId;
							json.item2Name=$scope.specNumAndName2[j].specName;
							json.proNum=json.proNum+$scope.specNumAndName2[j].num;
						}else{
							json.proNum=json.proNum+"00";
						}
						
						if($scope.specNumAndName3.length!=0){
							json.item3=$scope.specNumAndName3[k].specId;
							json.item3Name=$scope.specNumAndName3[k].specName;
							json.proNum=json.proNum+$scope.specNumAndName3[k].num;
						}else{
							json.proNum=json.proNum+"00";
						}
						tempProductList.push(json);
				}
			}
		}
		//合并数据
		for(var i=0;i<tempProductList.length;i++){
			for(var j=0;j<$scope.productList.length;j++){
				if(tempProductList[i].item1==$scope.productList[j].item1
					&&tempProductList[i].item2==$scope.productList[j].item2
					&&tempProductList[i].item3==$scope.productList[j].item3){
					tempProductList[i].adjustPrice=$scope.productList[j].adjustPrice;
					tempProductList[i].stkOnHand=$scope.productList[j].stkOnHand;
				}
			}
		}
		$scope.productList=tempProductList;
	
	}
	
	//获取服装规格
	$scope.getColorAndSize=function(sortId){
		$('#productSpecGroup').empty();
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
				if($scope.colorList.length>0){
					var html=[];
					$.each($scope.colorList,function(i,n){
						html.push('<label class="label-input color">');
						if(checkColorExit(n.colorId)){
							var pushFlag=true;
							for(var x=0;x<$scope.ColorNumAndName.length;x++){
								if($scope.ColorNumAndName[x].colorId==n.colorId){
									pushFlag=false;
									break;
								}
							}
							if(pushFlag){
								var object = new Object();
						        object.colorId=n.colorId;
						        object.colorName=n.colorName;
						        object.num=n.colorNum;
						        $scope.ColorNumAndName.push(object);
							}
							html.push('<input type="checkbox" dataId="'+n.colorNum+'" dataName="'+n.colorName+'" ng-click="checkColor($event)" name="proColorId" value="'+n.colorId+'" checked="checked"/>'+n.colorName);
						}else{
							html.push('<input type="checkbox" dataId="'+n.colorNum+'" dataName="'+n.colorName+'" ng-click="checkColor($event)" name="proColorId" value="'+n.colorId+'"/>'+n.colorName);
						}
						html.push('<input type="hidden" id="proColorId'+i+'" name="proColorName"/>');
						html.push('</label>');
					});
					var template=angular.element(html.join(""));
					var newHtml=$compile(template)($scope);
					angular.element($('#productSpecGroup').append(newHtml));
				}else{
					$('#productSpecGroup').empty();
				}

				if($scope.sizeList.length>0){
					var html=[];
					$.each($scope.sizeList,function(i,n){
						html.push('<label class="label-input size" style="display:none">');
						if(checkSizeExit(n.sizeId)){
							var pushFlag=true;
							for(var x=0;x<$scope.SizeNumAndName.length;x++){
								if($scope.SizeNumAndName[x].sizeId==n.sizeId){
									pushFlag=false;
									break;
								}
							}
							if(pushFlag){
								var object = new Object();
						        object.sizeId=n.sizeId;
						        object.sizeName=n.sizeName;
						        object.num=n.sizeNum;
						        $scope.SizeNumAndName.push(object);
							}
							html.push('<input type="checkbox" ng-click="checkPro($event)" dataId="'+n.sizeNum+'"  dataName="'+n.sizeName+'" name="proSizeId" value="'+n.sizeId+'" checked="checked"/>'+n.sizeName);
						}else{
							html.push('<input type="checkbox" ng-click="checkPro($event)" dataId="'+n.sizeNum+'"  dataName="'+n.sizeName+'" name="proSizeId" value="'+n.sizeId+'"/>'+n.sizeName);
						}
						html.push('<input type="hidden" id="proSizeId'+i+'" name="proSizeName"/>');
						html.push('</label>');
					})
					var template=angular.element(html.join(""));
					var newHtml=$compile(template)($scope);
					angular.element($('#productSpecGroup').append(newHtml));
				}else{
					$('#productSpecGroup').empty();
				}
				$timeout(function(){
					for(var i=0;i<$scope.pro.productList.length;i++){
						$("#colorPic"+$scope.pro.productList[i].proColorId).attr("src", $scope.pro.productList[i].proPic);
					}
				},500);
				
			} else {
				alertmsg('获取自定义规格失败', "error");
			}
		});
	}
	
	//品类change事件
	$scope.changeSort=function(proSortId){
		$scope.SizeNumAndName=[];
		$scope.ColorNumAndName=[];
		$scope.specNumAndName1=[];
		$scope.specNumAndName2=[];
		$scope.specNumAndName3=[];
		if(proSortId=="130906331"){
			//服装
			$scope.getColorAndSize(proSortId);
		}else{
			$scope.getProductSpec(proSortId);
		}
	}
	
	$scope.SizeNumAndName=[];
	$scope.checkPro=function($event){
		var obj=$($event.target);
		var id=obj.attr("value");
		var num=obj.attr("dataId");
		var name=obj.attr("dataName");
		$("#"+id).val(name);
		if ($(obj).prop("checked")) {
			var object = new Object();
	        object.sizeId=id;
	        object.sizeName=name;
	        object.num=num;
	        $scope.SizeNumAndName.push(object);
		} else {
			for(var x=0;x<$scope.SizeNumAndName.length;x++){
				if($scope.SizeNumAndName[x].sizeId==id){
					$scope.SizeNumAndName.splice(x,1);
				}
			}
		}
		dealColorAndSize();
	}
	
	$scope.ColorNumAndName=[];
	$scope.checkColor=function($event){
		var obj=$($event.target);
		var id=obj.attr("value");
		var num=obj.attr("dataId");
		var name=obj.attr("dataName");
		if ($(obj).prop("checked")) {
			var object = new Object();
	        object.colorId=id;
	        object.colorName=name;
	        object.num=num;
	        $scope.ColorNumAndName.push(object);
		} else {
			for(var x=0;x<$scope.ColorNumAndName.length;x++){
				if($scope.ColorNumAndName[x].colorId==id){
					$scope.ColorNumAndName.splice(x,1);
				}
			}
		}
		dealColorAndSize();
	}
	
	function dealColorAndSize(){
		$scope.itemList=["颜色","尺码"];
		var adjustPrice="";
		var stkOnHand="";
		if(!$scope.unifyAdjustPriceDis){
			adjustPrice=$scope.adjustPrice;
		}
		if(!$scope.unifyStkOnHandDis){
			stkOnHand=$scope.stkOnHand;
		}
		if($scope.SizeNumAndName.length==0&&$scope.ColorNumAndName.length==0){
			$scope.productList=[];
		}else{
			var tempProductList=[];
			for(var j=0;j<$scope.SizeNumAndName.length;j++){
				for(var k=0;k<$scope.ColorNumAndName.length;k++){
					var json={
					    "proSize": $scope.SizeNumAndName[j].sizeId,
					    "proSizeName": $scope.SizeNumAndName[j].sizeName,
					    "proNum": $scope.ColorNumAndName[k].num+$scope.SizeNumAndName[j].num,
					    "proName": $scope.ColorNumAndName[k].colorName+"+"+$scope.SizeNumAndName[j].sizeName,
					    "proColorId": $scope.ColorNumAndName[k].colorId,
					    "proColorName": $scope.ColorNumAndName[k].colorName,
					    "colorId": $scope.ColorNumAndName[k].colorId,
					    "sizeId": $scope.SizeNumAndName[j].sizeId,
					    "proModelnum": "",
					    "proPic": "",
					    "item1": "",
					    "item2": "",
					    "item3": "",
					    "adjustPrice":adjustPrice,
					    "stkOnHand":stkOnHand
					}
					tempProductList.push(json);
				}
			}
			//合并数据
			for(var i=0;i<tempProductList.length;i++){
				for(var j=0;j<$scope.productList.length;j++){
					if(tempProductList[i].proSize==$scope.productList[j].proSize
						&&tempProductList[i].proColorId==$scope.productList[j].proColorId){
						tempProductList[i].adjustPrice=$scope.productList[j].adjustPrice;
						tempProductList[i].stkOnHand=$scope.productList[j].stkOnHand;
					}
				}
			}
			$scope.productList=tempProductList;
		}
	}
	
	//加载运费模板
	$scope.getLogiticTemplate=function(){
		$http({
			method: 'post',
			url: pos + 'logiticTemplate/getLogiticTemplateForUse',
			params: {
				keyParams: getKeyParams("{}", keyParams),
				jsonObject: getJsonObject("{}")
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.logiticTemplateList=data.data.logiticTemplateList;
			} else {
				alertmsg('获取运费模板失败', "error");
			}
		});
	}
	$scope.getLogiticTemplate();
	
	//初始化编辑器
	//Uedit插件的配置代码
	//	图片上传路径的选择
	UE.Editor.prototype._bkGetActionUrl = UE.Editor.prototype.getActionUrl;
	UE.Editor.prototype.getActionUrl = function(action) {
		if(action == 'config') {
			return qineasy + "oms/static/base/ueditor1_4_3_3-utf8-jsp/utf8-jsp/jsp/controller.jsp?action=config";
		} else if(action == 'uploadimage' || action == 'uploadscrawl' || action == 'uploadimage') {
			return pos + 'imageUpload/addProDetailImage';
		} else if(action == 'listimage') {
			return pos + 'product/getProDtailInServerTB';
		} else {
			return this._bkGetActionUrl.call(this, action);
		}
	}
	$scope.ue = UE.getEditor('myEditor', {
		autoHeightEnabled: true,
		autoFloatEnabled: true
	});
	//	点击事件获取Uedit里面的代码
	$scope.ue.ready(function() {
		var imageUrl = JSON.parse(keyParams).orgId + "/product/";
		jsonObject = JSON.stringify({
			'imageUrl': imageUrl,
			"proAttrName": "b"
		});
		$scope.ue.execCommand('serverparam', function(editor) {
			return {
				jsonObject: getJsonObject(jsonObject),
				keyParams: getKeyParams(jsonObject, keyParams)
			};
		});
	});
	
	$scope.$on('$stateChangeStart', function() {
		$scope.ue.destroy();
	});
	
	$timeout(function() {
		var imgArr=$scope.pro.proDescription.split("@");
		var html="";
		for(var i=0;imgArr!=undefined&&i<imgArr.length;i++){
			if(html==""){
				html="<p><img src='"+imgArr[i]+"'/></p>";
			}else{
				html=html+"<p><img src='"+imgArr[i]+"'/></p>";
			}
		}
		$scope.ue.setContent(html);
	}, 500)
	
		
	
	
	//	上传图片方法
//	上传图片方法
	$scope.uploadMain = function (files,imgId,type) { 
		var imageUrl = JSON.parse(keyParams).orgId + "/product/";
		jsonObject = "{\"imageUrl\":\""+imageUrl+"\"}";
		if (files && files.length) {
			$scope.files = files;
			for (var i = 0; i < files.length; i++) {		       
				Upload.upload({
					//服务端接收
					url: pos+'imageUpload/addProductImage',
					//上传的同时带的参数
					data:{
						keyParams:getKeyParams(jsonObject,keyParams),
						jsonObject:getJsonObject(jsonObject)},
						file: files[i]
				}).success(function (data, status, headers, config) {
					//上传成功
					if(data.code=="1"){
						$scope.imagesPath = data.data.imagesPath;
						if(type=="0"){
							//上传颜色图片
							$("#colorPic"+imgId).attr("src", $scope.imagesPath);
							for(var i=0;i<$scope.productList.length;i++){
								if($scope.productList[i].proColorId==imgId){
									$scope.productList[i].proPic=$scope.imagesPath;
								}
							}
						}else{
							//上传主图
							$("#"+imgId).attr("src", $scope.imagesPath);
							var object= new Object();
							object.imgId=imgId;
							object.url=$scope.imagesPath;
							for(var i=0;i<$scope.imagesList.length;i++){
								if($scope.imagesList[i].imgId==object.imgId){			        	   
									$scope.imagesList.splice(i,1);
									break;
								}
							}
							$scope.imagesList.push(object);
						}
						
						
						
					}else{
						alertmsg("上传图片失败","error");
					}
				}).error(function (data, status, headers, config) {
					//上传失败
					console.log('error status: ' + status);
				});		        		        
			}
		}
	}    
//	清除图片
	$scope.clearImage=function(position,type){
		$("#"+position).attr("src", "http://static.qineasy.com/base/images/photobg.jpg");
		if(type=="0"){
			for(var i=0;i<$scope.productList.length;i++){
				if($scope.productList[i].proColorId==imgId){
					$scope.productList[i].proPic="";
				}
			}
		}else{
			//上传主图
			for(var i=0;i<$scope.imagesList.length;i++){
				if($scope.imagesList[i].imgId==position){			        	   
					$scope.imagesList.splice(i,1);
					break;
				}
			}
		}
	}
	//移动图片
	$scope.moveImage=function(position1,position2,positionType){
		var url1 =$("#"+position1)[0].src;
		var url2 =$("#"+position2)[0].src;
		$("#"+position1).attr("src", url2);
		$("#"+position2).attr("src", url1);
		var f=0;
		var k=0;	
		for(var h=0;h<$scope.imagesList.length;h++){
			if(position1==$scope.imagesList[h].proAttrValue+positionType+$scope.imagesList[h].index){
				$scope.imagesList[h].url=url2;
				f++;
			}
			if(position2==$scope.imagesList[h].proAttrValue+positionType+$scope.imagesList[h].index){
				$scope.imagesList[h].url=url1;
				k++;
			}
		}
		if(f==0){
			var object= new Object();
	//		object.proModelid=$scope.proModelid;
			object.proAttrValue=position1.substring(0,position1.length-1);
			object.url=url2;
			object.index=position1.substring(position1.length-1,position1.length);
			$scope.imagesList.push(object);
		}
		if(k==0){
			var object= new Object();
	//		object.proModelid=$scope.proModelid;
			object.proAttrValue=position2.substring(0,position2.length-1);
			object.url=url1;
			object.index=position2.substring(position2.length-1,position2.length);
			$scope.imagesList.push(object);
		}
	}    	

	//统计设置价格开关
	$scope.unifyAdjustPriceDis=true;
	$scope.unifyAdjustPriceFlag=function($event,obj){
		$scope.adjustPrice="";
		obj.adjustPrice="";
		var obj=$($event.target);
		if ($(obj).prop("checked")) {
			$scope.unifyAdjustPriceDis=false;
		} else {
			$scope.unifyAdjustPriceDis=true;
		}
	}
	
	//统计设置价格
	$scope.unifyAdjustPrice=function(obj){
		$scope.adjustPrice=obj.adjustPrice;
		for(var i=0;i<$scope.productList.length;i++){
			$scope.productList[i].adjustPrice=obj.adjustPrice;
		}
	}
	
	$scope.unifyStkOnHandDis=true;
	//统计设置库存开关
	$scope.unifyStkOnHandFlag=function($event,obj){
		$scope.stkOnHand="";
		obj.stkOnHand="";
		var obj=$($event.target);
		if ($(obj).prop("checked")) {
			$scope.unifyStkOnHandDis=false;
		} else {
			$scope.unifyStkOnHandDis=true;
		}
	}
	
	//统计设置库存
	$scope.unifyStkOnHand=function(obj){
		$scope.stkOnHand=obj.stkOnHand;
		for(var i=0;i<$scope.productList.length;i++){
			$scope.productList[i].stkOnHand=obj.stkOnHand;
		}
	}
	
	checkColorExit=function(colorId){
		for(var i=0;i<$scope.productList.length;i++){
			if($scope.productList[i].proColorId==colorId)
				return true;
		}
		return false;
	}
	
	checkSizeExit=function(sizeId){
		for(var i=0;i<$scope.productList.length;i++){
			if($scope.productList[i].proSizeId==sizeId)
			return true;
		}
		return false;
	}
	
	checkSpecExit=function(specGroupIndex,productSpecInfo){
		for(var i=0;i<$scope.productList.length;i++){
			var pushFlag=true;
			if(specGroupIndex=="0"&&$scope.productList[i].item1==productSpecInfo.productSpecId){
				for(var x=0;x<$scope.specNumAndName1.length;x++){
					if($scope.specNumAndName1[x].specId==productSpecInfo.productSpecId){
						pushFlag=false;
						break;
					}
				}
				if(pushFlag){
			        var object = new Object();
			        object.specId=productSpecInfo.productSpecId;
			        object.specName=productSpecInfo.specName;
			        object.num=productSpecInfo.specIndex;
			        $scope.specNumAndName1.push(object);
				}
				return true;
			}
			if(specGroupIndex=="1"){
				if($scope.productList[i].item2==productSpecInfo.productSpecId
				||($scope.productList[i].item2==""&&$scope.productList[i].item1==productSpecInfo.productSpecId)){
					for(var x=0;x<$scope.specNumAndName2.length;x++){
						if($scope.specNumAndName2[x].specId==productSpecInfo.productSpecId){
							pushFlag=false;
							break;
						}
					}
					if(pushFlag){
				        var object = new Object();
				        object.specId=productSpecInfo.productSpecId;
				        object.specName=productSpecInfo.specName;
				        object.num=productSpecInfo.specIndex;
				        $scope.specNumAndName2.push(object);
					}
					return true;
				}
			}
			if(specGroupIndex=="2"){
				if($scope.productList[i].item3==productSpecInfo.productSpecId
					||($scope.productList[i].item3==""&&$scope.productList[i].item2==productSpecInfo.productSpecId)
					||($scope.productList[i].item2==""&&$scope.productList[i].item1==productSpecInfo.productSpecId)){
					for(var x=0;x<$scope.specNumAndName3.length;x++){
						if($scope.specNumAndName3[x].specId==productSpecInfo.productSpecId){
							pushFlag=false;
							break;
						}
					}
					if(pushFlag){
				        var object = new Object();
				        object.specId=productSpecInfo.productSpecId;
				        object.specName=productSpecInfo.specName;
				        object.num=productSpecInfo.specIndex;
				        $scope.specNumAndName3.push(object);
					}
					return true;
				}
			}
		}
		return false;
	}
	
	function checkProduct(json){
		if(json.proName==""){
			alertmsg("商品名称不能为空","error");
			return true;
		}
		if($scope.imagesList==undefined||$scope.imagesList.length==0){
			alertmsg("商品主图不能为空","error");
			return true;
		}
		if($scope.productList==undefined||$scope.productList.length==0){
			alertmsg("商品规格不能为空","error");
			return true;
		}
		for(var i=0;i<$scope.productList.length;i++){
			if($scope.productList[i].adjustPrice==undefined||$scope.productList[i].adjustPrice==''){
				alertmsg("商品价格不能为空","error");
				return true;
			}
			if($scope.productList[i].stkOnHand==undefined||$scope.productList[i].stkOnHand==''){
				alertmsg("商品库存不能为空","error");
				return true;
			}
		}
		if($scope.proSortId=="130906331"){
			if(json.brandName==""){
				alertmsg("品牌不能为空","error");
				return true;
			}
			if(json.proModelnum==""){
				alertmsg("货号不能为空","error");
				return true;
			}
		}else if($scope.proSortId=="130906332"){
			//食品
			if($scope.proAttrArr[2].attrValue==undefined||$scope.proAttrArr[2].attrValue==""){
				alertmsg("净重不能为空","error");
				return true;
			}
			if($scope.proAttrArr[7].attrValue==undefined||$scope.proAttrArr[7].attrValue==""){
				alertmsg("产地","error");
				return true;
			}
		}else if($scope.proSortId=="130906333"){
			//玩具
			if($scope.proAttrArr[2].attrValue==undefined||$scope.proAttrArr[2].attrValue==""){
				alertmsg("材质不能为空","error");
				return true;
			}
			if($scope.proAttrArr[4].attrValue==undefined||$scope.proAttrArr[4].attrValue==""){
				alertmsg("适用年龄","error");
				return true;
			}
		}else if($scope.proSortId=="130906334"){
			//美妆
			if($scope.proAttrArr[1].attrValue==undefined||$scope.proAttrArr[1].attrValue==""){
				alertmsg("品牌不能为空","error");
				return true;
			}
			if($scope.proAttrArr[2].attrValue==undefined||$scope.proAttrArr[2].attrValue==""){
				alertmsg("产地","error");
				return true;
			}
		}
		return false;
	}
	
	
});

