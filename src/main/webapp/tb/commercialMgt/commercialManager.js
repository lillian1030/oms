qyApp.controller("commercialManagerController", function ($scope, $http, Upload, $route, $state,$stateParams) {
	//处理登陆人员信息
	$scope.userInfo = eval('(' + localStorage.userInfo + ')');
	//路由跳转
	$scope.goRoute=function(routeName,obj){
		//公共参数部分
		var sourceArr=[{level:0,name:"commercialManager"}];
		var params={
			"source":sourceArr,
			"type":"1"
		};
		//个性化参数部分
		if(routeName=="commercialAdd"){
			//添加路由
		}else if(routeName=="commercialInfoEdit"){
			$.extend(params,{orgInfo:obj.orgManage});
		}else if(routeName=="commercialStore"){
			$.extend(params,{storeData:obj.orgManage});
		}else if(routeName=="mapDepotDet"){
			var sourceArrDep=[{level:0,name:"commercialManager"}];
			var sourceDep = {level:1,name:"mapDepotDet"}
			sourceArrDep.push(sourceDep);
			var params={
				"source":sourceArrDep,
				"type":"1"
			};
			$.extend(params,{orgId:obj.orgManage.orgId,orgManage:obj.orgManage,pageName:"mapDepotDet"});
		}else if(routeName=="materiaDet"){
			var sourceArrMat=[{level:0,name:"commercialManager"}];
			var sourceMat = {level:1,name:"materiaDet"}
			sourceArrMat.push(sourceMat);
			var params={
				"source":sourceArrMat,
				"type":"1"
			};
			$.extend(params,{orgId:obj.orgManage.orgId,orgManage:obj.orgManage,pageName:"materiaDet"});
		}else if(routeName=="productList"){
			var product = {level:0,name:routeName}
			sourceArr.push(product);
			$.extend(params,{orgId:obj.orgManage.orgId,orgManage:obj.orgManage,pageName:"productList"});
		}
		else{
			return;
		}
		//跳转
		$state.go(routeName, {
			uiParams:params
		});
	}
	//业务数据公共参数
	var nub = 0;
    var size = 10;
    $scope.count = 0;
    $scope.shopName="";
	//查询主数据
    $scope.search = function (shopName) {
        $scope.shopName = shopName;
        nub = 0;
        $scope.initCommercialManager()
    }
    //获取数据
    $scope.addShowFlag=false;
    $scope.initCommercialManager = function () {
        //获取商户信息
        var jsonObject = "{\"userId\":\"" + $scope.userInfo.userId + "\",\"shopName\":\"" + $scope.shopName + "\",\"nub\":\"" + nub + "\",\"size\":\"" + size + "\"}";
        $http({
                method: 'post',
                url: stat +
                    'orgManage/getOrgListTB',
                params: {
                    keyParams: getKeyParams(
                        jsonObject, keyParams),
                    jsonObject: getJsonObject(jsonObject)
                }

            }).success(function (data, stauts, headers, config) {
                if (data.code == "1") {
                    $scope.count = data.data.count;
                    $scope.orgManageList = data.data.orgManageList;
                    if (nub == 0) {
                        if (Number(data.data.count) > Number(size)) {
                            $scope.createPagePluginMain(data.data.count, size);
                        } else {
                            $scope.createPagePluginMain("0", size);
                        }
                    }
                    window.setTimeout(function () {
                        setClick();
                    }, "200");
                    if($scope.count==undefined||$scope.count==0){
                    	$scope.addShowFlag=true;
                    }
                } else {
                    alertmsg(data.msg, "error")
                }
            })
    }
    //分页
    $scope.createPagePluginMain = function (total, pageSize) {
        $("#pagingMain").empty();
        paging = pagePlugin.createPaging({
            renderTo: 'pagingMain',
            total: total,
            pageSize: pageSize
        });
        paging.goPage = function (from, to) {
            $scope.pageMain(from - 1, pageSize);
        }
    };
    //翻页
    $scope.pageMain = function (from, pageSize) {
        nub = from;
        var jsonObject = "{\"userId\":\"" + $scope.userInfo.userId + "\",\"shopName\":\"" + $scope.shopName + "\",\"nub\":\"" + from + "\",\"size\":\"" + size + "\"}";
        $http({
            method: 'post',
            url: stat +
                'orgManage/getOrgListTB',
            params: {
                keyParams: getKeyParams(
                    jsonObject, keyParams),
                jsonObject: getJsonObject(jsonObject)
            }
        }).success(function (data, stauts, headers, config) {
            if (data.code == "1") {
                $scope.orgManageList = data.data.orgManageList;
                window.setTimeout(function () {
                    setClick();
                }, "200");
            } else {
                alertmsg(data.msg, "error")
            }
        })
    }
    //分配运营人员部分
    $scope.roleIds = "";
    $scope.userName = "";
    //初始化已选人员触发标志
    var initUserCheckListFlag=true;
    $scope.userCheckList = new Array();
    //分配人员
    $scope.selectUser = function (obj) {
        $scope.selectShopName = obj.orgManage.shopName;
        $scope.selectShopId = obj.orgManage.orgId;
        //初始化分配人员列表
        $scope.userList=undefined;
        $scope.userCheckList = new Array();
        $scope.roleIds = "";
        $scope.userName = "";
        initUserCheckListFlag=true;
        $scope.getUserList();
    }

    $scope.getUserList=function() {
    	var roleIds=$scope.roleIds;
    	if(roleIds==""){
    		roleIds="2,5"
    	}
        var jsonObject = "{\"orgId\":\"" + $scope.userInfo.orgId + "\",\"manageOrgId\":\"" + $scope.selectShopId+ "\",\"trueName\":\"" + $scope.userName + "\",\"roleIds\":\"" + roleIds + "\",\"nub\":\"0\",\"size\":\"0\"}";
        $http({
            method: 'post',
            url: cas +
                'user/getUserList',
            params: {
                keyParams: getKeyParams(
                    jsonObject, keyParams),
                jsonObject: getJsonObject(jsonObject)
            }
        }).success(function (data, stauts, headers, config) {
            if (data.code == "1") {
                $scope.userList = data.data.userList;
                initUserCheckList();
                initUserCheckListFlag=false;
            } else {
                alertmsg(data.msg, "error")
            }
        })
    }
    //初始化已分配人员列表
    function initUserCheckList() {
		var pushFlag=true;
		var pushedFlag=true;
        for (var i = 0; i < $scope.userList.length; i++) {
        	//判断是否已经选中,重复查询时考虑
        	pushFlag=false;
        	pushedFlag=false;
        	if($scope.userList[i].manageOrgId != ""){
        		pushFlag=true;
        	}
        	for (var j = 0; j < $scope.userCheckList.length; j++) {
        		if($scope.userCheckList[j].userId==$scope.userList[i].userId){
        			pushedFlag=true;
        			break;
        		}
            }
        	if(initUserCheckListFlag){
        		//首次初始化时,只要是已分配的都变成已选中
        		if(pushFlag){
        			$scope.userCheckList.push($scope.userList[i]);
        			$scope.userList.splice(i,1);
            		i--;
        		}
        	}else{
        		//通过筛选条件筛选时,只移除查询结果中已选中的记录
        		if(pushedFlag){
        			$scope.userList.splice(i,1);
            		i--;
        		}
        	}
        }
    }
    //添加人员效果
    $scope.doOneAdd = function (obj) {
        for (var i = 0; i < $scope.userList.length; i++) {
            if ($scope.userList[i].userId == obj.user.userId) {
                //选中的记录移除并添加到已分配人员列表
            	$scope.userCheckList.push($scope.userList[i]);
                $scope.userList.splice(i,1);
                break;
            }
        }
    }
    //批量添加人员效果
    $scope.doAdd = function () {
        for (var i = 0; i < $scope.userList.length; i++) {
            if ($("#l" + $scope.userList[i].userId)[0].checked == true) {
                //选中的记录移除并添加到已分配人员列表
            	$scope.userCheckList.push($scope.userList[i]);
                $scope.userList.splice(i,1);
                i--;
            }
        }
    }
    //移除人员效果
    $scope.doOneRemove = function (obj) {
        for (var i = 0; i < $scope.userCheckList.length; i++) {
            if ($scope.userCheckList[i].userId == obj.user.userId) {
                //选中的记录移除并添加到已分配人员列表
            	$scope.userList.push($scope.userCheckList[i]);
                $scope.userCheckList.splice(i,1);
                break;
            }
        }
    }
    //批量移除人员效果
    $scope.doRemove = function () {
        for (var i = 0; i < $scope.userCheckList.length; i++) {
            if ($("#r" + $scope.userCheckList[i].userId)[0].checked == true) {
                //选中的记录移除并添加到已分配人员列表
            	$scope.userList.push($scope.userCheckList[i]);
                $scope.userCheckList.splice(i,1);
                i--;
            }
        }
    }
    
    //分配商户
    $scope.doOrgManage = function (obj) {
        var userIds="";
        if($scope.userCheckList.length>0){
            userIds = "" + $scope.userCheckList[0].userId + "";
            for (var i = 1; i < $scope.userCheckList.length; i++) {
                userIds = userIds+"," + $scope.userCheckList[i].userId + "";
            }
        }else{
        	if (!confirm("是否确定清除"+$scope.selectShopName+"人员信息")) {
            	return;
            }
        }
        var jsonObject = "{\"userIds\":\"" + userIds + "\",\"orgId\":\"" + $scope.selectShopId + "\"}";
        $http({
            method: 'post',
            url: cas +
                'orgManage/addOrgManageTB',
            params: {
                keyParams: getKeyParams(
                    jsonObject, keyParams),
                jsonObject: getJsonObject(jsonObject)
            }
        }).success(function (data, stauts, headers, config) {
            if (data.code == "1") {
            	$('#forwardMgt-Dialog,.maskBg').hide();
                $scope.initCommercialManager();
            } else {
                alertmsg(data.msg, "error")
            }
        })
    }
    
    //工具类
    function setClick() {
        $('.forwardMgt-Dialog').center();
        $('.DelDialog').center();
        //分配运营人员弹窗
        $('.allotOprate').click(function () {
            $('#forwardMgt-Dialog,.maskBg').show();
        });
        $('#closeDia,.closedialog').click(function () {
            $('#forwardMgt-Dialog,.maskBg').hide();
        });
        //删除弹窗
        $('.deloperateList').click(function () {
            $('.DelDialog,.maskBg').show();
        });
        $('.closedialog').click(function () {
            $('.DelDialog,.maskBg').hide();
        });
        //tr选中效果
        $('.forwComMgt-table').find('tr').click(function () {
            $(this).addClass('current-operate').siblings().removeClass('current-operate');
        })
    }
    
    //初始化列表数据
    $scope.initCommercialManager();
});