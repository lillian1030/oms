qyApp.controller("newSummaryController", function($scope, $http, Upload, $compile, $route, $state, $stateParams) {
	$scope.userId=JSON.parse(localStorage.userInfo).userId;
	/*tab选项卡切换*/
	if(sessionStorage.productTab!=undefined&&sessionStorage.productTab!=''){
		$scope.productTab=sessionStorage.productTab;
		sessionStorage.removeItem("productTab");
	}else{
		$scope.productTab = "1";
	}
	/*判断登入账号有无下级部门*/
	$scope.getUserInfoByUserId=function(){
			var jsonObject={
			userId:$scope.userId
		}
	jsonObject=JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: cas + 'user/getUserInfoByUserId',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			console.log(data)
			if(data.code == "1") {
				$scope.childDepartCount=data.data.childDepartCount;
				if($scope.childDepartCount==0){
					$scope.productTab = "2";
				}
			} else {
				alertmsg(data.msg, "error");
			}
		});
	}
	$scope.getUserInfoByUserId();
	/*部门Id*/
	$scope.departId=JSON.parse(localStorage.userInfo).departId;
	//将标准时间转化成日期格式
	var formatDate = function (date) {
	    var y = date.getFullYear();  
	    var m = date.getMonth() + 1;  
	    m = m < 10 ? '0' + m : m;  
	    var d = date.getDate();  
	    d = d < 10 ? ('0' + d) : d;  
	    return y + '-' + m + '-' + d;  
	};  
	/*获取当前日期*/
	var myDate = new Date();
	$scope.year=myDate.getFullYear();
	$scope.months=myDate.getMonth()+1;
	$scope.detailDate=$scope.year+'-'+$scope.months;
	$scope.begindatea=$scope.detailDate;
	$scope.enddatea=$scope.detailDate;
	$scope.taskType='5';
	
	$scope.shiftProductTab = function(index, type) {
		$scope.productTab = index;
		if(index=='1'){
			$scope.getSaleForDepart();
		}else{
			$scope.getSaleSignrUser();
		}
	}
	
	/*点击查询按钮*/
	$scope.searchData = function(type) {
		if($scope.begindatea==undefined&&$scope.enddatea==undefined&&$scope.taskType==undefined){
			alert("请输入查询条件");
			return;
		}
		if($scope.begindatea==$scope.enddatea){
			$scope.detailDate=$scope.begindatea;
		}else{
			$scope.detailDate=($scope.begindatea)+' '+'至'+' '+($scope.enddatea);
		}
		if(type=='1'){
			$scope.getSaleForDepart();
		}else{
			$scope.getSaleSignrUser();
		}
	}
	/*获取部门*/
	$scope.getSaleForDepart=function(){
		/*查当前月*/
		var jsonObject={
			pDepartId:$scope.departId,
			taskType:$scope.taskType,
			beginTime:$scope.begindatea,
			endTime:$scope.enddatea
		}
	jsonObject=JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: stat + 'contractStat/getContractSaleForDepart',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			console.log(data)
			if(data.code == "1") {
					$scope.list=data.data.detailList;
					$scope.sum=data.data.sum;
			} else {
				alertmsg(data.msg, "error");
			}
		});
	}
	$scope.getSaleForDepart();
	/*人员业绩排行销售情况*/
	$scope.nub= '0';
	$scope.pageSize = '6';
	$scope.getSaleSignrUser=function(){
		var jsonObject={
			departId:$scope.departId,
			taskType:$scope.taskType,
			beginTime:$scope.begindatea,
			endTime:$scope.enddatea,
			nub:$scope.nub,
			size:$scope.pageSize
		}
	jsonObject=JSON.stringify(jsonObject);
	console.log(jsonObject);
		$http({
			method: 'post',
			url: stat + 'contractStat/getContractSaleForSignUser',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			console.log(data);
			if(data.code == "1") {
					$scope.count=data.data.count;
					$scope.rsListSign=data.data.rsList;
					$scope.createPagePlugin($scope.count,$scope.pageSize,'paging');
			} else {
				alertmsg(data.msg, "error");
			}
		});
	}
	$scope.getSaleSignrUser();
	/*查询日期代码*/
	setTimeout(function(){
		var start = {
				elem: '#start',
				format: 'YYYY-MM',
				//		min: laydate.now(), //设定最小日期为当前日期
//				max: '2099-06-16', //最大日期
				istime: true,
				istoday: false,
				choose: function(datas) {
					end.min = datas; //开始日选好后，重置结束日的最小日期
					end.start = datas //将结束日的初始值设定为开始日
					$scope.begindatea = datas;
				}
			};
			var end = {
				elem: '#end',
				format: 'YYYY-MM',
				//		min: laydate.now(),
//				max: '2099-06-16',
				istime: true,
				istoday: false,
				choose: function(datas) {
					start.max = datas; //结束日选好后，重置开始日的最大日期
					$scope.enddatea = datas;
				}
			};
		laydate(start);
		laydate(end);
	},300)
	/*查询日期代码*/
	/*分页代码*/
	$scope.createPagePlugin = function(total, pageSize,pageId) {
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
			var jsonObject={
				departId:$scope.departId,
				taskType:$scope.taskType,
				beginTime:$scope.begindatea,
				endTime:$scope.enddatea,
				nub:from+'',
				size:pageSize
			}
		jsonObject=JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: stat + 'contractStat/getContractSaleForSignUser',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.rsListSign=data.data.rsList;
			} else {
				alertmsg(data.msg, "error");
			}
		});

		}
		/*分页代码*/


});