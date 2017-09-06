
qyApp.controller("saleSummaryController", function($scope, $http, Upload, $compile, $route, $state, $stateParams) {
	$scope.from = "0";
	$scope.pageSize = "10";
	var myDate = new Date();
	$scope.data = myDate.getFullYear() + "-" + (1 + myDate.getMonth()) + "-" + myDate.getDate();
	$scope.monthDays = new Date(myDate.getFullYear(), myDate.getMonth() + 1, 0);
	$scope.monthDay = $scope.monthDays.getDate();
	/*部门Id*/
	$scope.departId1=JSON.parse(localStorage.userInfo).departId;
	/*计算合同结束日期跟当前日期的差值*/
	$scope.daysBetween = function(DateOne, DateTwo) {
		var OneMonth = DateOne.substring(5, DateOne.lastIndexOf('-'));
		var OneDay = DateOne.substring(DateOne.length, DateOne.lastIndexOf('-') + 1);
		var OneYear = DateOne.substring(0, DateOne.indexOf('-'));
		var TwoMonth = DateTwo.substring(5, DateTwo.lastIndexOf('-'));
		var TwoDay = DateTwo.substring(DateTwo.length, DateTwo.lastIndexOf('-') + 1);
		var TwoYear = DateTwo.substring(0, DateTwo.indexOf('-'));
		var cha = ((Date.parse(OneMonth + '/' + OneDay + '/' + OneYear) - Date.parse(TwoMonth + '/' + TwoDay + '/' + TwoYear)) / 86400000);
		return cha;
	};
	/*默认其他时间查询，汇总框及列表不显示*/
		$scope.isRandom=false;
	/*计算合同结束日期跟当前日期的差值*/
	/*tab选项卡切换*/
	$scope.productTab = "1";
	$scope.shiftProductTab = function(index, type) {
		$('.bread_nav').nextAll().remove();
		$scope.productTab = index;
		switch(type) {
			case "random":
				var start = {
					elem: '#start',
					format: 'YYYY-MM-DD',
					min: '1949-06-16', //设定最小日期为当前日期
					max: '2099-06-16', //最大日期
					istoday: true,
					start: laydate.now(0, "YYYY/MM/DD hh:00:00"),
					choose: function(datas) {
						end.min = datas; //开始日选好后，重置结束日的最小日期
						//				end.start = datas //将结束日的初始值设定为开始日
					}
				};
				var end = {
					elem: '#end',
					format: 'YYYY-MM-DD',
					min: '1949-06-16',
					max: '2099-06-16',
					istoday: true,
					choose: function(datas) {
						start.max = datas; //结束日选好后，重置开始日的最大日期
					}
				};
		 		$scope.isRandom=false;
				 break;
			case "thisMonth":
				var jsonObject = {
					departId:$scope.departId1,
					begindate: $scope.thisMonth + "-01",
					enddate: $scope.thisMonth + "-" + $scope.monthDay
				};
				$scope.begindate = jsonObject.begindate;
				$scope.enddate = jsonObject.enddate;
				jsonObject = angular.toJson(jsonObject);
				console.log(jsonObject)
				$scope.getSummary(jsonObject);
				$scope.departId=$scope.departId1;
				$scope.groupName='';
				$scope.loadList();
				break;
			case "thisYear":
				var jsonObject = {
					departId:$scope.departId1,
					begindate: $scope.thisYear + "-01-01",
					enddate: $scope.thisYear + "-" + "12-31"
				};
				$scope.begindate = jsonObject.begindate;
				$scope.enddate = jsonObject.enddate;
				jsonObject = angular.toJson(jsonObject);
				console.log(jsonObject)
				$scope.getSummary(jsonObject);
				$scope.departId=$scope.departId1;
				$scope.groupName='';
				$scope.loadList();
				break;
			case "other":
				$scope.begindate = "";
				$scope.enddate = $scope.thisDay;
				var jsonObject = {
					departId:$scope.departId1,
					begindate: $scope.begindate,
					enddate: $scope.enddate
				};
				jsonObject = angular.toJson(jsonObject);
				$scope.getSummary(jsonObject);
				$scope.departId=$scope.departId1;
				$scope.groupName='';
				$scope.loadList();
				break;
		}
	}
		/*tab选项卡切换*/
	$scope.dataCacu = function(type, data, str) {
		var date1 = new Date(data);
		switch(type) {
			case "thisMonth":
				//	date1.setDate(date1.getDate() -7);
				/*返回2016-2*/
				$scope.enddate = date1.getFullYear() + "-" + (date1.getMonth() + 1);
				return $scope.enddate;
				break;
			case "thisYear":
				/*返回2016*/
				$scope.enddate = date1.getFullYear();
				return $scope.enddate;
				break;
			case "thidDay":
				/*返回2016-2-1*/
				$scope.enddate = date1.getFullYear()+ "-" + (date1.getMonth() + 1)+ "-"+date1.getDay();
				return $scope.enddate;
				break;
		}
	};
	$scope.thisDay = $scope.dataCacu("thisDay", $scope.data);
	$scope.thisMonth = $scope.dataCacu("thisMonth", $scope.data);
	$scope.thisYear = $scope.dataCacu("thisYear", $scope.data);
	/*查询销售汇总*/
	$scope.getSummary = function(jsonObject) {
		$http({
			method: 'post',
			url: pos + 'contract/getSalesSummary',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			console.log(data)
			if(data.code == "1") {
				if(data.data.salesList[0].addShopCount == "") {
					data.data.salesList[0].addShopCount = "0";
				}
				if(data.data.salesList[0].allTotalprice == "") {
					data.data.salesList[0].allTotalprice = "0";
				}
				if(data.data.salesList[0].contractCount == "") {
					data.data.salesList[0].contractCount = "0";
				}
				if(data.data.salesList[0].notDueCount == "") {
					data.data.salesList[0].notDueCount = "0";
				}
				if(data.data.salesList[0].notPaidAmount == "") {
					data.data.salesList[0].notPaidAmount = "0";
				}
				$scope.salesList = data.data.salesList[0];
			} else {
				alertmsg(data.msg, "error")
			}
		})
	};
	/*初始化部门区域*/
	$scope.departArea='';
	/*点击查询详情，*/
	$scope.queryContractDetil=function(obj){
		$scope.departArea=obj.departArea;
		$scope.departId=obj.departId;
		$scope.groupName=obj.groupName;
		$scope.departName=obj.groupName;
		$scope.loadList();
	}
	/*封装查询详情方法*/
	$scope.loadList = function() {
		if($scope.departId==undefined){
			$scope.departId=JSON.parse(localStorage.userInfo).departId;
		}
//		if($scope.departArea==undefined){
//			 $scope.departArea='';
//			}
		if($scope.departId==$scope.departId1){
			$scope.departName="本级部门";
		}
		var jsonObject = {
			departId:$scope.departId,
			enddate: $scope.enddate,
			begindate: $scope.begindate,
			nub: 0,
			size: 0
		};
		jsonObject = angular.toJson(jsonObject);
		console.log(jsonObject);
		$http({
			method: 'post',
			url: pos + 'contract/getSalesSummaryGroup',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			console.log(data)
			if(data.code == "1") {
				$scope.groupLists = data.data.groupList;
				$scope.listCount = data.data.count;
				if($scope.groupName!=undefined&&$scope.groupName!=''){
						var html = '&nbsp;>&nbsp;<a href="javascript:;" ng-click="getNextDepart('+$scope.departId+','+$scope.groupName+')" onclick="removNext(this)">'+$scope.groupName+'</a>';
		                var template=angular.element(html);
				        var newHtml=$compile(template)($scope);		        
				        angular.element($('.bread_path').append(newHtml)); 
					}
//				$scope.createPagePlugin($scope.listCount, $scope.pageSize, "paging2");
			
			} else {
				alertmsg(data.msg, "error");
			}
		})
	}
		/*默认进入该页面时，查询本月汇总和详情*/
	$scope.loadSummary = function() {
		var jsonObject = {
			departId:$scope.departId1,
			begindate: $scope.thisMonth + "-01",
			enddate: $scope.thisMonth + "-" + $scope.monthDay
		  };
		$scope.begindate=jsonObject.begindate;
		$scope.enddate=jsonObject.enddate;
		jsonObject = angular.toJson(jsonObject);
		$scope.getSummary(jsonObject);
		$scope.loadList();
	};
	$scope.loadSummary();
	/*面包屑跳转*/
	/*部门跳转*/
	$scope.getNextDepart=function(departId,departName){
		$scope.departName=departName;
		$scope.departId=departId;
		var jsonObject = {
				departArea:'',
				departId:departId,
				enddate: $scope.enddate,
				begindate: $scope.begindate,
				nub: 0,
				size: 0
			};
		jsonObject = angular.toJson(jsonObject);
		$scope.getDetil(jsonObject);
	}
		$scope.getDetil=function(jsonObject){
			$http({
			method: 'post',
			url: pos + 'contract/getSalesSummaryGroup',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
			}).success(function(data, stauts, headers, config) {
				console.log(data)
				if(data.code == "1") {
					$scope.groupLists = data.data.groupList;
	//				$scope.createPagePlugin($scope.listCount, $scope.pageSize, "paging2");
				} else {
					alertmsg(data.msg, "error");
				}
			})
		}
	/*查询日期代码*/
	setTimeout(function(){
		var start = {
				elem: '#start',
				format: 'YYYY-MM-DD',
				//		min: laydate.now(), //设定最小日期为当前日期
				max: '2099-06-16', //最大日期
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
				format: 'YYYY-MM-DD',
				//		min: laydate.now(),
				max: '2099-06-16',
				istime: true,
				istoday: false,
				choose: function(datas) {
					start.max = datas; //结束日选好后，重置开始日的最大日期
					$scope.enddatea = datas;
				}
			};
		laydate(start);
		laydate(end);
	},200)
	/*查询日期代码*/

	/*点击查询按钮*/
	$scope.searchData = function() {
		$scope.isRandom=true;
		$scope.departId=JSON.parse(localStorage.userInfo).departId;
		$scope.begindate = $scope.begindatea;
		$scope.enddate = $scope.enddatea;
		var jsonObjectb = {
			begindate: $scope.begindate,
			enddate: $scope.enddate
		};
		jsonObjectb = angular.toJson(jsonObjectb);
		console.log(jsonObjectb)
		$scope.getSummary(jsonObjectb);
		$scope.departId=$scope.departId1;
		$scope.groupName='';
		$scope.loadList();
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
			var jsonObject = {
				enddate: $scope.enddate,
				begindate: $scope.begindate,
				groupType: $scope.groupType,
				/*按什么条件查询(0 按客户汇总, 1 按地区汇总, 2 按销售人员汇总)*/
				nub: from + "",
				size: pageSize
			};
			jsonObject = angular.toJson(jsonObject);
			$http({
				method: 'post',
				url: pos + 'contract/getSalesSummaryGroup',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					$scope.groupLists = data.data.groupList;
					angular.forEach(data.data.groupList, function(ele, index) {
						if($scope.daysBetween($scope.data, ele.enddate) <= 0) {
							ele.status = "服务中";
						} else {
							ele.status = "已到期";
						}
						if(ele.totalprice == "") {
							ele.allTotalprice = "0";
						}
					});
					$scope.listCount = data.data.count;
					//				$scope.createPagePlugin($scope.listCount, $scope.pageSize, "paging2");
				} else {
					alertmsg(data.msg, "error")
				}
			})

		}
		/*分页代码*/

	//路由跳转的时候type为1,不是路由跳转的时候为0
	$scope.type = "0";
	//判读是否路由跳转
	if($stateParams.uiParams.type!=undefined) {
		$scope.type = "1";
	}
	//跳转回工作台
	$scope.gobWorkBench = function() {
		//跳转
		$state.go("bWorkBench", {});		
	}
});