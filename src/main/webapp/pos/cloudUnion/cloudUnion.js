qyApp.controller('cloudUnionController', ['$scope', '$http', '$compile', 'Upload', function($scope, $http, $compile, Upload) {
    $scope.defaultObj = {
        "createUnion": "hide",
        "chooseMember": "hide",
        "finishCreateUnion": "hide",
        "joinUnionDialogMask": "hide",
        "joinUnionDialogMaskA": "hide",
        "joinUnionDialogMaskB": "hide",
        "joinUnion": "hide",
        "joinMember": "hide",
        "joinComplete": "hide",
        "UnionShowJoined": "hide",
        "UnionShowUnjoin": "hide",
        "UnionShowShop": "hide",
        "exitUnion_dialog": "hide",
        "UnionExit": "hide",
        "EditDialog": "hide",
        "UnionRuleSet" : "hide",
        "unjoinedTojoin": false
    }
    $scope.getchecked = false;
    var from = "0";
    var pageSize = "10";
    var total = "0";
    // 商户已加入联盟列表
    $scope.getUnionComercia = function() {
        var keyParam = JSON.parse(keyParams);
        $scope.orgid = keyParam.orgId;
        $http({
            method: 'post',
            url: pos + 'cloudUnion/getMerchantCloudUnion',
            params: {
                keyParams: getKeyParams('{}', keyParams),
                jsonObject: getJsonObject('{}')
            }
        }).success(function(data, stauts, headers, config) {
            if (data.code == 1) {
                $scope.data = data.data;
                $scope.unionList = $scope.data.unionList;
                //	当进入联盟管理菜单判断首页进入哪个页面
                if ($scope.unionList.length != 0) {
                    $scope.defaultObj = {
                        "chooseUnionType": "hide",
                        "UnionShowCommercia": "show"
                    }
                } else {
                    $scope.defaultObj = {
                        "chooseUnionType": "show",
                        "UnionShowCommercia": "hide"
                    }
                }
            } else {
                alertmsg("获取信息失败", "error");
            }
        })
    };
    $scope.getUnionComercia();
    //	获取品牌列表,加载下拉框
    $scope.loadBrand = function() {
            $http({
                method: 'post',
                url: pos + 'cloudUnionDetail/getBrandCanCreateUnion',
                params: {
                    keyParams: getKeyParams('{}', keyParams),
                    jsonObject: getJsonObject('{}')
                }
            }).success(function(data, stauts, headers, config) {
                if (data.code == 1) {
                    $scope.brandList = data.data.brandList;
                    angular.forEach($scope.brandList, function(ele) {
                        if (ele.isCanCreateUnion == "1") {
                            ele.brandName += "(已有联盟)"
                        }
                    });
                    $scope.brandList = $scope.brandList;
                    $scope.defaultObj.chooseUnionType = "hide";
                    $scope.defaultObj.createUnion = "show";
                } else {
                    alertmsg("获取品牌失败", "error");
                }
            })
        }
        //点击创建云仓分享联盟
    $scope.createUnion = function() {
            $scope.loadBrand();
        }
        //	点击创建联盟中的下一步
    $scope.startChooseMember = function() {
    		$scope.createUnionDate=new Date();
    		$scope.createUnionDateYear=($scope.createUnionDate.getFullYear())+"";
    		$scope.createUnionDateMonth=$scope.createUnionDate.getMonth()+1;
    		$scope.createUnionDateMonth<10?$scope.createUnionDateMonth="0"+$scope.createUnionDateMonth:$scope.createUnionDateMonth;
    		$scope.createUnionDateDay=$scope.createUnionDate.getDate();
    		$scope.createUnionDateDay<10?$scope.createUnionDateDay="0"+$scope.createUnionDateDay:$scope.createUnionDateDay;
    		$scope.createUnionDateDayTime=($scope.createUnionDate.toLocaleTimeString()).substring(2);
    		$scope.createDate=$scope.createUnionDateYear +"-" +$scope.createUnionDateMonth+"-"+$scope.createUnionDateDay+"   "+$scope.createUnionDate.getHours()+":"+$scope.createUnionDate.getMinutes()+":"+$scope.createUnionDate.getSeconds();
            var jsonObject = $(".createUnionForm").serializeJson();
            var jsonObjectObj = JSON.parse(jsonObject);
            $scope.brandId = jsonObjectObj.brandId.split(",")[0];
            $scope.brandName = jsonObjectObj.brandId.split(",")[1];
            $scope.cloudName = jsonObjectObj.cloudName;
            jsonObjectObj.brandId = $scope.brandId;
            if (jsonObjectObj.brandId == "" || jsonObjectObj.cloudName == "") {
                alertmsg("请输入联盟名字并选择品牌", "error")
            } else {
                jsonObject = JSON.stringify(jsonObjectObj);
                $http({
                    method: 'post',
                    url: pos + 'cloudUnion/establishUnion',
                    params: {
                        keyParams: getKeyParams(jsonObject, keyParams),
                        jsonObject: getJsonObject(jsonObject)
                    }
                }).success(function(data, stauts, headers, config) {
                    if (data.code == 1) {
                        $scope.defaultObj.createUnion = "hide";
                        $scope.defaultObj.chooseMember = "show";
                        $scope.unionCloudId = data.data.cloudId;
                        $scope.loadMember();
                    } else {
                        alertmsg("获取品牌失败", "error");
                    }
                })
            }

        }
        //	加载成员的列表数据方法
    $scope.loadMember = function() {
        var jsonObject = {
            "cloudId": $scope.unionCloudId,
            "brandId": $scope.brandId,
            "nub": from,
            "size": pageSize
        }
        jsonObject = JSON.stringify(jsonObject);
        $http({
            method: 'post',
            url: pos + 'cloudUnionDetail/getUnionMemberList',
            params: {
                keyParams: getKeyParams(jsonObject, keyParams),
                jsonObject: getJsonObject(jsonObject)
            }
        }).success(function(data, stauts, headers, config) {
            if (data.code == 1) {
                $scope.loadMembertype = "firstLoad";
                $scope.cloudUnionCount = data.data.count;
                $scope.joinedCount = data.data.joinedCount;
                $scope.cloudUnionList = data.data.unionMemberList;
                $scope.createPagePlugin($scope.cloudUnionCount, pageSize, "1", "paging");
                $scope.defaultObj.createUnion = "hide";
                $scope.defaultObj.chooseMember = "show";
                angular.forEach($scope.cloudUnionList, function(ele, index) {
                    ele.getchecked = false;
                });
            } else {
                alertmsg("获取店铺列表失败", "error");
            }
        })
    };
    //	点击单选框选择店铺"one 单条" "all 选中当前页"
    $scope.orgIdArr = [];
    $scope.unionListCount = 0;
    $scope.chooseShop = function(obja, orgId, obj, type) {
            if (type == "one") {
                $scope.getchecked = false;
                $scope.orgIdIndex = $scope.orgIdArr.indexOf(orgId);
                if ($scope.orgIdIndex == -1) {
                    $scope.orgIdArr.push(orgId);
                } else if ($scope.orgIdIndex >= 0) {
                    $scope.orgIdArr.splice($scope.orgIdIndex, 1);
                }
            } else if (type == "all") {
                //			判断单选框的状态,"true 选中" "false 未选中"
                $scope.keepOrgIdArr = [];
                $scope.usedOrgIdArr = [];
                angular.forEach(obj, function(ele) {
                    $scope.usedOrgIdArr.push(ele.orgId);
                })
                var unique = {};
                $scope.usedOrgIdArr.forEach(function(gpa) {
                    unique[JSON.stringify(gpa)] = gpa
                });
                $scope.usedOrgIdArr = Object.keys(unique).map(function(u) {
                    return JSON.parse(u);
                });
                if ($scope.getchecked == false) {
                    //		当为false的时候,把这一页的数据清空
                    $scope.cloudUnionList.forEach(function(ele) {
                        ele.getchecked = false;
                    })
                    for (var j = 0; j < $scope.orgIdArr.length; j++) {
                        if ($scope.usedOrgIdArr.indexOf($scope.orgIdArr[j]) == -1) {
                            $scope.keepOrgIdArr.push($scope.orgIdArr[j]);
                        }
                    }
                    $scope.orgIdArr = $scope.keepOrgIdArr;
                } else {
                    $scope.cloudUnionList.forEach(function(ele) {
                            ele.getchecked = true;
                        })
                        //				当为true的时候,把这一页的数据都加上
                    $scope.usedOrgIdArr.forEach(function(ele) {
                        $scope.orgIdArr.push(ele);
                    });
                }
            }
            var unique = {};
            $scope.orgIdArr.forEach(function(gpa) {
                unique[JSON.stringify(gpa)] = gpa
            });
            $scope.orgIdArr = Object.keys(unique).map(function(u) {
                return JSON.parse(u);
            });
            $scope.unionLista = [];
            for (var i = 0; i < $scope.orgIdArr.length; i++) {
                $scope.unionListObj = {};
                $scope.unionListObj.cloudId = $scope.unionCloudId;
                $scope.unionListObj.brandId = $scope.brandId;
                $scope.unionListObj.orgId = $scope.orgIdArr[i];
                $scope.unionLista.push($scope.unionListObj);
            }
            $scope.unionListCount = $scope.unionLista.length;
        }
        //	点击选择成员中的"添加选中成员selected","添加全部成员all"
    $scope.selectMemberA = function(type) {
            $scope.addMemberType = type;
            $scope.defaultObj.joinUnionDialogMaskB = "show";
            $("#joinUnionDialogMaskB").centera();
        }
        //	点击选择成员中的"添加选中成员selected","添加全部成员all"后选择确认按钮
    $scope.sureOperation = function() {
            if ($scope.addMemberType == "selected") {
                var jsonObject = {
                    "unionList": $scope.unionLista
                };
                jsonObject = JSON.stringify(jsonObject);
                $scope.addMemberUrl = "cloudUnionDetail/addSelectedUnionMember"
            } else if ($scope.addMemberType == "all") {
                var jsonObject = {
                    "cloudId": $scope.unionCloudId,
                    "brandId": $scope.brandId
                };
                jsonObject = JSON.stringify(jsonObject);
                $scope.addMemberUrl = "cloudUnionDetail/addAllUnionMember";
                
            }
            $http({
                method: 'post',
                url: pos + $scope.addMemberUrl,
                params: {
                    keyParams: getKeyParams(jsonObject, keyParams),
                    jsonObject: getJsonObject(jsonObject)
                }
            }).success(function(data, stauts, headers, config) {
                if ($scope.addMemberType == "selected") {
                    if (data.code == 1) {
                        $scope.orgIdArr = [];
                        $(".createUnionForm")[0].reset();
                        $scope.defaultObj.finishCreateUnion = "show";
                        $scope.defaultObj.chooseMember = "hide";
                    } else {
                        alertmsg("添加联盟成员失败", "error");
                    }
                } else {
                    if (data.code == 1) {
                        $scope.orgIdArr = [];
                        $(".createUnionForm")[0].reset();
                        $scope.defaultObj.finishCreateUnion = "show";
                        $scope.defaultObj.chooseMember = "hide";
                    } else {
                        alertmsg("添加全部联盟成员失败", "error");
                    }
                }
            })
        }
        //	关闭弹窗
    $scope.closedialog = function() {
            $scope.defaultObj.joinUnionDialogMaskB = "hide";
            $scope.defaultObj.joinUnionDialogMask = "hide";
            $scope.defaultObj.joinUnionDialogMaskA = "hide";
            $scope.defaultObj.exitUnion_dialog = "hide";
            $scope.defaultObj.EditDialog = "hide";
            $('.exitUnion-dialog,.maskBg').hide();
        }
        //	创建云仓联盟结束后点击查看加入会员按钮	

    $scope.scanJoinedMember = function() {
            $scope.userInfo = JSON.parse(localStorage.userInfo);
            $scope.defaultObj.finishCreateUnion = "hide";
            $scope.defaultObj.UnionShowJoined = "show";
            var usedObj = {
                "addedCount": "",
                "brandId": $scope.brandId,
                "brandName": $scope.brandName,
                "cloudId": $scope.unionCloudId,
                "cloudName": $scope.cloudName,
                "cloudStatus": "",
                "createDate": $scope.createDate,
                "jionDate": "",
                "notAddedCount": "",
                "orgId": "",
                "shopName": $scope.userInfo.orgName
            };
            $scope.getJoinedmembers(usedObj);

        }
        //	加入联盟部分
        //	加入联盟部分
        //	点击加入云仓分享联盟
    $scope.joinUnionType = function() {
            $scope.defaultObj.chooseUnionType = "hide";
            $scope.defaultObj.joinUnion = "show";
            $scope.getCloudUnionList();
        }
        //获取联盟列表
    $scope.getCloudUnionList = function() {
            $scope.cloudIdjoin;
            $scope.brandIdjoin;
            $http({
                method: 'post',
                url: pos + 'cloudUnion/getCloudUnionList',
                params: {
                    keyParams: getKeyParams("{}", keyParams),
                    jsonObject: getJsonObject("{}")
                }
            }).success(function(data, stauts, headers, config) {
                if (data.code == 1) {
                    $scope.defaultObj.joinUnion = "show"
                    $scope.defaultObj.UnionShowCommercia = "hide"
                    $scope.unionListB = data.data.unionList;
                } else {
                    alertmsg("获取联盟列表失败", "error");
                }
            })
        }
        //调用获取联盟列表的方法

    // //联盟列表成员分页
    $scope.createPagePlugina = function(total, pageSize) {
        $("#pagingMember").empty();
        $("#paging").empty();
        paging = pagePlugin.createPaging({
            renderTo: 'pagingMember',
            total: total,
            pageSize: pageSize
        });
        paging.goPage = function(from, to) {
            $scope.pagea(from - 1, pageSize);
        }
    };
    $scope.pagea = function(from, pageSize) {
            $scope.jsonPage = {
                "nub": "" + from + "",
                "size": "" + pageSize + ""
            };
            $.extend($scope.jsonPage, $scope.param);
            page = $scope.jsonPage;
            size = page.size;
            nub = page.nub;
            //获取成员列表
            var jsonObject = "{\"cloudId\":\"" + $scope.cloudIdjoin + "\",\"brandId\":\"" + $scope.brandIdjoin +
                "\",\"nub\":" + nub + ",\"size\":\"" + size + "\"}";
            $http({
                method: 'post',
                url: pos + 'cloudUnionDetail/getUnionMemberList',
                params: {
                    keyParams: getKeyParams(jsonObject, keyParams),
                    jsonObject: getJsonObject(jsonObject)
                }
            }).success(function(data, stauts, headers, config) {
                if (data.code == 1) {
                    $scope.unionMemberList = data.data.unionMemberList;
                    $scope.counts = data.data.count;
                    angular.forEach($scope.unionMemberList, function(data) {
                        data.check = false;
                    })
                    $scope.isChecked = false;
                    //回显
                    angular.forEach($scope.unionMemberList, function(ele, index) {
                        if ($scope.orgIdArrM.indexOf(ele.orgId) != -1) {
                            ele.check = true;
                            if (ele.orgId.length == $scope.size) {
                                $scope.isChecked = true;
                            }
                        } else {
                            ele.check = false;
                        }
                    })

                } else {
                    alertmsg("获取订单失败", "error");
                }
            })
        }
        // 选择成员（checkbox）加入联盟		
    $scope.orgIdArrM = [];
    $scope.selectMember = function(orgId, obj, type) {
            //单选
            if (type == "one") {
                //查找orgId 是否存在 若不存在 则添加到orgIdArrM中 存在就删掉
                $scope.orgIdIndexM = $scope.orgIdArrM.indexOf(orgId);
                $scope.isChecked = false;
                if ($scope.orgIdIndexM == -1) {
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
                if ($scope.isChecked == true) {
                    //遍历成员列表中的orgId					
                    angular.forEach(obj, function(data) {
                        data.check = true;
                        $scope.orgIdArrM.push(data.orgId);
                    })
                } else {
                    angular.forEach(obj, function(data) {
                            data.check = false;
                        })
                        //清空当前页的数据	
                    for (var j = 0; j < $scope.orgIdArrM.length; j++) {
                        if ($scope.currentArr.indexOf($scope.orgIdArrM[j]) == -1) {
                            $scope.removeCurrentArr.push($scope.orgIdArrM[j]);
                        }
                    }
                    //清空当前页之后的数据
                    $scope.orgIdArrM = $scope.removeCurrentArr;
                }
                //存放orgId的数组 去重
                $scope.orgIdArrM.sort();
                if ($scope.orgIdArrM.length != 0) {
                    $scope.uniqueArr = [$scope.orgIdArrM[0]];
                    for (var i = 1; i < $scope.orgIdArrM.length; i++) {
                        //比较两个相邻的数
                        if ($scope.orgIdArrM[i] != $scope.uniqueArr[$scope.uniqueArr.length - 1]) {
                            $scope.uniqueArr.push($scope.orgIdArrM[i]);
                        }
                    }
                    $scope.orgIdArrM = $scope.uniqueArr;
                } else {
                    $scope.orgIdArrM = [];
                }
            }
            $scope.selectedCounts = $scope.orgIdArrM.length;
            $scope.notSelectedCounts = $scope.counts - $scope.selectedCounts;
        }
        //	在加入云仓分享联盟页面点击加入联盟
    $scope.joinUnion = function(obj) {
            var keyParam = JSON.parse(keyParams);
            $scope.orgId = keyParam.orgId;
            $scope.shopName = obj.list.shopName;
            $scope.cloudName = obj.list.cloudName;
            $scope.brandName = obj.list.brandName;
            $scope.cloudIdjoin = obj.list.cloudId;
            $scope.brandIdjoin = obj.list.brandId;
            $scope.nub = 0;
            $scope.size = 10;

            var jsonObject = { "unionList": [{ "cloudId": $scope.cloudIdjoin, "brandId": $scope.brandIdjoin, "orgId": $scope.orgId }] };
            jsonObject = JSON.stringify(jsonObject);
            $http({
                method: 'post',
                url: pos + 'cloudUnionDetail/addSelectedUnionMember',
                params: {
                    keyParams: getKeyParams(jsonObject, keyParams),
                    jsonObject: getJsonObject(jsonObject)
                }
            }).success(function(data, stauts, headers, config) {
                if ($scope.addMemberType == "selected") {
                    if (data.code == 1) {
                        $scope.defaultObj.finishCreateUnion = "show";
                        $scope.defaultObj.chooseMember = "hide";
                    } else {
                        alertmsg("添加联盟成员失败", "error");
                    }
                } else {
                    if (data.code == 1) {
                        var jsonObject = "{\"cloudId\":\"" + $scope.cloudIdjoin + "\",\"brandId\":\"" + $scope.brandIdjoin +
                            "\",\"nub\":\"" + $scope.nub + "\",\"size\":\"" + $scope.size + "\"}";
                        $http({
                            method: 'post',
                            url: pos + 'cloudUnionDetail/getUnionMemberList',
                            params: {
                                keyParams: getKeyParams(jsonObject, keyParams),
                                jsonObject: getJsonObject(jsonObject)
                            }
                        }).success(function(data, stauts, headers, config) {
                            if (data.code == 1) {
                                //返回成员列表
                                $scope.defaultObj.joinUnion = "hide";
                                $scope.defaultObj.joinMember = "show";
                                $scope.unionMemberList = data.data.unionMemberList;

//所有成员总数
                                $scope.counts = data.data.count;
                                //已有联盟的单位总数
                                $scope.joinedCounta = data.data.joinedCount;
                                $scope.createPagePlugina($scope.counts, $scope.size);
                            } else {
                                alertmsg("获取联盟列表失败", "error");
                            }
                        })
                    } else {
                        alertmsg("添加全部联盟成员失败", "error");
                    }
                }
            })

        }
        //	在加入云仓联盟部分点击添加成员按钮 "选中selected""全部成员all"
    $scope.addChooseJoinMember = function(type) {
            $scope.defaultObj.joinUnionDialogMaskA = "show";
            $("#joinUnionDialoga").centera();
            if (type == "selected") {
                $scope.partSelect = true;
                $scope.allSelect = false;
            } else {
                $scope.partSelect = false;
                $scope.allSelect = true;
            }
        }
        //	在加入云仓联盟部分点击添加成员 弹出弹框点击确认按钮
    $scope.sureJoinSelectedmen = function() {
            if ($scope.partSelect == true) {
                //准备“添加当前选中联盟成员”接口的入参
                $scope.unionMember = [];
                for (var i = 0; i < $scope.orgIdArrM.length; i++) {
                    $scope.member = {};
                    $scope.member.cloudId = $scope.cloudIdjoin;
                    $scope.member.brandId = $scope.brandIdjoin;
                    $scope.member.orgId = $scope.orgIdArrM[i];
                    $scope.unionMember.push($scope.member);
                }
                $scope.unionMember = JSON.stringify($scope.unionMember);
                var jsonObject = "{\"unionList\":" + $scope.unionMember + "}";
                $http({
                    method: 'post',
                    url: pos + 'cloudUnionDetail/addSelectedUnionMember',
                    params: {
                        keyParams: getKeyParams(jsonObject, keyParams),
                        jsonObject: getJsonObject(jsonObject)
                    }
                }).success(function(data, stauts, headers, config) {
                    if (data.code == 1) {
                        $scope.defaultObj.joinComplete = "show";
                        $scope.defaultObj.joinUnionDialogMaskA = "hide";
                        $scope.defaultObj.joinMember = "hide";
                    } else {
                        alertmsg("添加失败", "error");
                    }
                })
            } else {
                var jsonObject = "{\"cloudId\":\"" + $scope.cloudIdjoin + "\",\"brandId\":\"" + $scope.brandIdjoin + "\"}";
                $http({
                    method: 'post',
                    url: pos + 'cloudUnionDetail/addAllUnionMember',
                    params: {
                        keyParams: getKeyParams(jsonObject, keyParams),
                        jsonObject: getJsonObject(jsonObject)
                    }
                }).success(function(data, stauts, headers, config) {
                    if (data.code == 1) {
                        $scope.defaultObj.joinComplete = "show";
                        $scope.defaultObj.joinUnionDialogMaskA = "hide";
                        $scope.defaultObj.joinMember = "hide";
                    } else {
                        alertmsg("添加失败", "error");
                    }
                })
            }
        }
        //	加入联盟完成后点击产看加入成员
    $scope.scanJoinedMemberA = function() {
        $scope.userInfo = JSON.parse(localStorage.userInfo);
        $scope.defaultObj.joinComplete = "hide";
        $scope.defaultObj.UnionShowJoined = "show";
        var usedObjA = {
            "addedCount": "",
            "brandId": $scope.brandName,
            "brandName": $scope.brandName,
            "cloudId": $scope.cloudIdjoin,
            "cloudName": $scope.cloudName,
            "cloudStatus": "",
            "createDate": "",
            "jionDate": "",
            "notAddedCount": "",
            "orgId": "",
            "shopName": $scope.userInfo.orgName
        };
        $scope.getJoinedmembers(usedObjA);
    }

    //	在显示联盟列表点击创建联盟
    $scope.createNewUnion = function() {
            $scope.defaultObj.createUnion = "show"
            $scope.defaultObj.UnionShowCommercia = "hide"
            $scope.loadBrand();
        }
        //	在显示联盟列表点击加入联盟
    $scope.JoinNewUnion = function() {
        $scope.getCloudUnionList();
    }

    //显示未加入成员列表
    $scope.getUnjoinedmembers = function(cloudId, cloudName, brandName, brandId, shopName, createDate) {
            $scope.unionCloudId = cloudId;
            $scope.cloudName = cloudName;
            $scope.cloudId = cloudId;
            $scope.brandName = brandName;
            $scope.brandId = brandId;
            $scope.shopName = shopName;
            $scope.createDate = createDate;
            var jsonObject = "{\"cloudId\":\"" + $scope.unionCloudId + "\",\"brandId\":\"" + $scope.brandId + "\",\"nub\":" + from + ",\"size\":\"" + pageSize + "\"}";
            $http({
                method: 'post',
                url: pos + 'cloudUnionDetail/getNotJoinedMember',
                params: {
                    keyParams: getKeyParams(jsonObject, keyParams),
                    jsonObject: getJsonObject(jsonObject)
                }
            }).success(function(data, stauts, headers, config) {
                if (data.code == "1") {
                    $scope.defaultObj.UnionShowCommercia = "hide";
                    $scope.defaultObj.UnionShowUnjoin = "show";
                    $scope.defaultObj.UnionShowJoined = "hide";
                    $scope.unJoinedunionMemberList = data.data.unionMemberList;
                    $scope.unionMemberListCount = data.data.count;
                    $scope.createPagePlugin($scope.unionMemberListCount, pageSize, "3", "pagunJoined");
                } else {
                    alertmsg("系统错误", "error");
                }
            })
        }
        //  未加入的成员点击相应的加入按钮
    $scope.unjoinedTojoin = function(obj, type) {
            var jsonObject;
            if (type == "one") {
                $scope.unionOrgId = obj.unJoinedunionMember.orgId;
                jsonObject = { "unionList": [{ "cloudId": $scope.unionCloudId, "brandId": $scope.brandId, "orgId": $scope.unionOrgId }] };
                jsonObject = JSON.stringify(jsonObject)
            }
            if (type == "selected") {
                jsonObject = { "unionList": $scope.unionListB };
                jsonObject = JSON.stringify(jsonObject);
            }
            $http({
                method: 'post',
                url: pos + 'cloudUnionDetail/addSelectedUnionMember',
                params: {
                    keyParams: getKeyParams(jsonObject, keyParams),
                    jsonObject: getJsonObject(jsonObject)
                }
            }).success(function(data, stauts, headers, config) {
                if (data.code == 1) {
                    $scope.getUnjoinedmembers($scope.unionCloudId, $scope.cloudName, $scope.brandName, $scope.brandId, $scope.shopName, $scope.createDate);
                    $scope.defaultObj.unjoinedTojoin=false;
                    $scope.unjoinedMemberArr = [];
                    $scope.unionListCount = 0;
                    $scope.unionListB = [];
                } else {
                    alertmsg("获取信息失败", "error");
                }
            })
        }
        //在未加入成员列表点击单选框复选框添加成员
        //	点击单选框选择店铺"one 单条" "all 选中当前页"
    $scope.unjoinedMemberArr = [];
    $scope.unionListCount = 0;
    $scope.chooseUnJoinedMember = function(obja, orgId, obj, type) {
            if (type == "one") {
                $scope.unJoinedgetchecked = false;
                $scope.orgIdIndex = $scope.unjoinedMemberArr.indexOf(orgId);
                if ($scope.orgIdIndex == -1) {
                    $scope.unjoinedMemberArr.push(orgId);
                } else if ($scope.orgIdIndex >= 0) {
                    $scope.unjoinedMemberArr.splice($scope.orgIdIndex, 1);
                }
                //				orgIdArr
            } else if (type == "all") {
                //			判断单选框的状态,"true 选中" "false 未选中"
                $scope.keepOrgIdArr = [];
                $scope.usedOrgIdArr = [];
                angular.forEach(obj, function(ele) {
                    $scope.usedOrgIdArr.push(ele.orgId);
                })
                var unique = {};
                $scope.usedOrgIdArr.forEach(function(gpa) {
                    unique[JSON.stringify(gpa)] = gpa
                });
                $scope.usedOrgIdArr = Object.keys(unique).map(function(u) {
                    return JSON.parse(u);
                });
                if ($scope.unJoinedgetchecked == false) {
                    //		当为false的时候,把这一页的数据清空
                    $scope.unJoinedunionMemberList.forEach(function(ele) {
                        ele.allunJoinedgetchecked = false;
                    })
                    for (var j = 0; j < $scope.unjoinedMemberArr.length; j++) {
                        if ($scope.usedOrgIdArr.indexOf($scope.unjoinedMemberArr[j]) == -1) {
                            $scope.keepOrgIdArr.push($scope.unjoinedMemberArr[j]);
                        }
                    }
                    $scope.unjoinedMemberArr = $scope.keepOrgIdArr;
                } else {
                    $scope.unJoinedunionMemberList.forEach(function(ele) {
                            ele.allunJoinedgetchecked = true;
                        })
                        //				当为true的时候,把这一页的数据都加上
                    $scope.usedOrgIdArr.forEach(function(ele) {
                        $scope.unjoinedMemberArr.push(ele);
                    });
                }
            }
            var unique = {};
            $scope.unjoinedMemberArr.forEach(function(gpa) {
                unique[JSON.stringify(gpa)] = gpa
            });
            $scope.unjoinedMemberArr = Object.keys(unique).map(function(u) {
                return JSON.parse(u);
            });
            $scope.unionListB = [];
            for (var i = 0; i < $scope.unjoinedMemberArr.length; i++) {
                $scope.unionListObj = {};
                $scope.unionListObj.cloudId = $scope.unionCloudId;
                $scope.unionListObj.brandId = $scope.brandId;
                $scope.unionListObj.orgId = $scope.unjoinedMemberArr[i];
                $scope.unionListB.push($scope.unionListObj);
            }
            $scope.unionListCount = $scope.unionListB.length;
        }
        //	在查看已添加成员页面点击添加成员
    $scope.addMember = function() {
            $scope.getUnjoinedmembers($scope.unionCloudId, $scope.cloudName, $scope.brandName, $scope.brandId, $scope.shopName, $scope.createDate);
        }
        //	分页
    $scope.createPagePlugin = function(total, pageSize, type, pageId) {
        $("#" + pageId + "").empty();
        paging = pagePlugin.createPaging({
            renderTo: pageId,
            total: total,
            pageSize: pageSize
        });
        paging.goPage = function(from, to) {
            if (type == "1") {
                $scope.page(from - 1, pageSize);
            } else if (type == "2") {
                $scope.pageA(from - 1, pageSize);
            } else if (type == "3") {
                $scope.pageB(from - 1, pageSize);
            } else if (type == "4") {
                $scope.pageC(from - 1, pageSize);
            }
        }
    };
    $scope.page = function(from, pageSize) {
            $scope.jsonPage = {
                "cloudId": $scope.cloudId,
                "brandId": $scope.brandId,
                "nub": from,
                "size": pageSize
            }
            $.extend($scope.jsonPage, $scope.param);
            $scope.jsonObject = JSON.stringify($scope.jsonPage);
            $http({
                method: 'post',
                url: pos + 'cloudUnionDetail/getUnionMemberList',
                params: {
                    keyParams: getKeyParams($scope.jsonObject, keyParams),
                    jsonObject: getJsonObject($scope.jsonObject)
                }
            }).success(function(data, stauts, headers, config) {
                if (data.code == 1) {
                    $scope.getchecked = false;
                    $scope.loadMembertype = "pageLoad";
                    $scope.cloudUnionList = data.data.unionMemberList;
                    angular.forEach($scope.cloudUnionList, function(ele, index) {
                        if ($scope.orgIdArr.indexOf(ele.orgId) != -1) {
                            ele.getchecked = true;
                        } else {
                            ele.getchecked = false;
                        }
                    });
                    $scope.cloudUnionListB = $scope.cloudUnionList;
                } else {
                    alertmsg("获取店铺列表失败", "error");
                }
            })
        }
        //	加入联盟分页
        //	分页
    $scope.pageA = function(from, pageSize) {
        $scope.jsonPage = {
            "cloudId": $scope.cloudIdjoin,
            "brandId": $scope.brandIdjoin,
            "nub": from,
            "size": pageSize
        }
        $.extend($scope.jsonPage, $scope.param);
        $scope.jsonObject = JSON.stringify($scope.jsonPage);
        $http({
            method: 'post',
            url: pos + 'cloudUnionDetail/getUnionMemberList',
            params: {
                keyParams: getKeyParams($scope.jsonObject, keyParams),
                jsonObject: getJsonObject($scope.jsonObject)
            }
        }).success(function(data, stauts, headers, config) {
            if (data.code == 1) {
                $scope.getchecked = false;
                $scope.loadMembertype = "pageLoad";
                $scope.unionMemberList = data.data.unionMemberList;
                angular.forEach($scope.unionMemberList, function(ele, index) {
                    if ($scope.orgIdArr.indexOf(ele.orgId) != -1) {
                        ele.getchecked = true;
                    } else {
                        ele.getchecked = false;
                    }
                });
                $scope.cloudUnionListB = $scope.unionMemberList;
            } else {
                alertmsg("获取店铺列表失败", "error");
            }
        })
    };
    //	分页
    $scope.pageB = function(from, pageSize) {
            $scope.jsonPage = {
                "cloudId": $scope.cloudIdjoin,
                "brandId": $scope.brandIdjoin,
                "nub": from,
                "size": pageSize
            }
            $.extend($scope.jsonPage, $scope.param);
            $scope.jsonObject = JSON.stringify($scope.jsonPage);
            $http({
                method: 'post',
                url: pos + 'cloudUnionDetail/getUnionMemberList',
                params: {
                    keyParams: getKeyParams($scope.jsonObject, keyParams),
                    jsonObject: getJsonObject($scope.jsonObject)
                }
            }).success(function(data, stauts, headers, config) {
                if (data.code == 1) {
                    $scope.getchecked = false;
                    $scope.loadMembertype = "pageLoad";
                    $scope.unJoinedunionMemberList = data.data.unionMemberList;
                    angular.forEach($scope.unJoinedunionMemberList, function(ele, index) {
                        if ($scope.unjoinedMemberArr.indexOf(ele.orgId) != -1) {
                            ele.allunJoinedgetchecked = true;
                        } else {
                            ele.allunJoinedgetchecked = false;
                        }
                    });
                    $scope.cloudUnionListB = $scope.unJoinedunionMemberList;
                } else {
                    alertmsg("获取店铺列表失败", "error");
                }
            })
        }
        ////	已加入成员列表分页
    $scope.pageC = function(from, pageSize) {
            $scope.jsonPage = {
                "cloudId": $scope.cloudId,
                "nub": from,
                "size": pageSize
            }
            $.extend($scope.jsonPage, $scope.param);
            $scope.jsonObject = JSON.stringify($scope.jsonPage);
            $http({
                method: 'post',
                url: pos + 'cloudUnionDetail/getJoinedMember',
                params: {
                    keyParams: getKeyParams($scope.jsonObject, keyParams),
                    jsonObject: getJsonObject($scope.jsonObject)
                }
            }).success(function(data, stauts, headers, config) {
                if (data.code == 1) {
                    $scope.data = data.data;
                    $scope.count = data.data.count;
                    $scope.unionMemberList = data.data.unionMemberList;
                } else {
                    alertmsg("获取成员列表失败", "error");
                }
            })
        }
        /*================= Tao ====================*/
        //解散联盟
    $scope.dismissUnion = function(id, name) {
        $("#dismissUnion-dialog").center();
        $('#dismissUnion-dialog,.maskBg').show();
        $('#dismissUnion-dialog').find('.qnote').show();
        $('#dismissUnion-dialog').find('#exitTitl').text('您正在解散联盟"' + name + '"!');
        $('#dismissUnion-dialog').children('.am-dialog-footer').find('a.confmBtn').prop({ "id": "dismissBtn" });
        //确定解散
        $('.am-dialog-footer').delegate('#dismissBtn', 'click', function() {
            var causeContent;
            causeContent = JSON.parse($("#reasonVal").serializeJson());
            var reasonVal = '';
            for (var i = 0; i < causeContent.causeContent.length; i++) {
                if (causeContent.causeContent[i] != '') {
                    reasonVal = reasonVal + causeContent.causeContent[i] + ',';
                }
            }
            reasonVal = reasonVal.substring(0, reasonVal.length - 1);
            jsonObject = "{" + "\"cloudStatus\":\"" + 2 + "\",\"cloudId\":\"" + id + "\"}";
            jsonObject = JSON.parse(jsonObject);
            jsonObject.causeContent = reasonVal;
            jsonObject = JSON.stringify(jsonObject);
            $http({
                method: 'post',
                url: pos + 'cloudUnion/dissolutionUnion',
                params: {
                    keyParams: getKeyParams(jsonObject, keyParams),
                    jsonObject: getJsonObject(jsonObject)
                }
            }).success(function(data, stauts, headers, config) {
                if (data.code == 1) {
                    $('#dismissUnion-dialog,.maskBg').hide();
                    alertmsg("解散成功");
                    $scope.getUnionComercia();
                    $("#quitreasonVal").find('input[type=text]').val('');
                    $("#quitreasonVal").find('input[type=checkbox]').prop("checked", false);
                } else {
                    alertmsg("解散失败", "error");
                }
            })
        });
    };
    //商户退出联盟
    $scope.quitUnion = function(id, name, orgId, brandId) {
        var keyParam = JSON.parse(localStorage.keyParams);
        var orgId = keyParam.orgId;
        var userInfo = JSON.parse(localStorage.userInfo);
        var orgname = userInfo.orgName;
        $("#dismissUnion-dialog").center();
        $('#dismissUnion-dialog,.maskBg').show();
        $('#dismissUnion-dialog').find('.qnote').hide();
        $('#dismissUnion-dialog').find('h3').text('退出联盟');
        $('#dismissUnion-dialog').find('#exitTitl').text('您正在将"' + orgname + '退出"' + name + '"!');
        $('#dismissUnion-dialog').find('#exitSelectrs').text('请选择退出原因');
        $('#dismissUnion-dialog').children('.am-dialog-footer').find('a.confmBtn').prop({ "id": "quitBtn" });

        $('.am-dialog-footer').delegate('#quitBtn', 'click', function() {
            var causeContent;
            causeContent = JSON.parse($("#reasonVal").serializeJson());
            var reasonVal = '';
            for (var i = 0; i < causeContent.causeContent.length; i++) {
                if (causeContent.causeContent[i] != '') {
                    reasonVal = reasonVal + causeContent.causeContent[i] + ',';
                }
            }
            reasonVal = reasonVal.substring(0, reasonVal.length - 1);
            jsonObject = "{" + "\"cloudId\":\"" + id + "\",\"brandId\":\"" + brandId + "\",\"orgId\":\"" + orgId + "\"}";
            jsonObject = JSON.parse(jsonObject);
            jsonObject.causeContent = reasonVal;
            jsonObject = JSON.stringify(jsonObject);
            $http({
                method: 'post',
                url: pos + 'cloudUnionDetail/exitCloudUnion',
                params: {
                    keyParams: getKeyParams(jsonObject, keyParams),
                    jsonObject: getJsonObject(jsonObject)
                }
            }).success(function(data, stauts, headers, config) {
                if (data.code == 1) {
                    $('#dismissUnion-dialog,.maskBg').hide();
                    alertmsg("退出成功");
                    $scope.getUnionComercia();
                    $("#quitreasonVal").find('input[type=text]').val('');
                    $("#quitreasonVal").find('input[type=checkbox]').prop("checked", false);
                } else {
                    alertmsg("退出失败", "error");
                }
            })

        });
    };
    //停用
    $scope.stopUse = function(id) {
        jsonObject = "{" + "\"cloudStatus\":\"" + 1 + "\",\"cloudId\":\"" + id + "\"}";
        $http({
            method: 'post',
            url: pos + 'cloudUnion/updateCloudStatus',
            params: {
                keyParams: getKeyParams(jsonObject, keyParams),
                jsonObject: getJsonObject(jsonObject)
            }
        }).success(function(data, stauts, headers, config) {
            if (data.code == 1) {
                alertmsg("操作成功");
                $scope.getUnionComercia();
            } else {
                alertmsg("操作失败", "error");
            }
        })
    };
    //启用
    $scope.beginUse = function(id) {
        jsonObject = "{" + "\"cloudStatus\":\"" + 0 + "\",\"cloudId\":\"" + id + "\"}";
        $http({
            method: 'post',
            url: pos + 'cloudUnion/updateCloudStatus',
            params: {
                keyParams: getKeyParams(jsonObject, keyParams),
                jsonObject: getJsonObject(jsonObject)
            }
        }).success(function(data, stauts, headers, config) {
            if (data.code == 1) {
                alertmsg("操作成功");
                $scope.getUnionComercia();
            } else {
                alertmsg("操作失败", "error");
            }
        })
    };
    // 已加入成员列表
    $scope.getJoinedmembers = function(obj) {
        $scope.defaultObj.UnionShowCommercia = "hide";
        $scope.defaultObj.UnionShowJoined = "show";
        $scope.cloudId = obj.cloudId;
        $scope.unionCloudId = obj.cloudId;
        $scope.brandId = obj.brandId;
        $scope.cloudName = obj.cloudName;
        $scope.brandName = obj.brandName;
        $scope.shopName = obj.shopName;
        $scope.createDate = obj.createDate;
        jsonObject = "{" + "\"cloudId\":\"" + $scope.cloudId + "\",\"brandId\":\"" + $scope.brandId + "\",\"nub\":\"" + 0 + "\",\"size\":\"" + 10 + "\"}";
        $http({
            method: 'post',
            url: pos + 'cloudUnionDetail/getJoinedMember',
            params: {
                keyParams: getKeyParams(jsonObject, keyParams),
                jsonObject: getJsonObject(jsonObject)
            }
        }).success(function(data, stauts, headers, config) {
            if (data.code == "1") {
                $scope.data = data.data;
                $scope.count = data.data.count;
                $scope.unionMemberList = data.data.unionMemberList;
                $scope.createPagePlugin($scope.count, 10, "4", "joinpaging");
            } else {
                alertmsg("获取信息失败", "error");
            }
        })
    };
    // 已加入成员列表的返回
    $scope.gobackComercia = function() {
        $scope.defaultObj.UnionShowCommercia = "show";
        $scope.defaultObj.UnionShowJoined = "hide";
        $scope.getUnionComercia();
    };
    //成员退出联盟（踢出）
    $scope.menbQuitUnion = function(memblist) {
        $scope.orgId = memblist.orgId;
        $("#exitUnion-dialog").center();
        $('#exitUnion-dialog,.maskBg').show();
        $('#exitUnion-dialog').find('h3').text('退出联盟');
        $('#exitUnion-dialog').find('#exitTitl').text('您正在将"' + $scope.shopName + '退出"' + $scope.cloudName + '"!');
        $('#exitUnion-dialog').find('#exitSelectrs').text('请选择退出原因');
        $('#exitUnion-dialog').children('.am-dialog-footer').find('a.confmBtn').prop({ "id": "quitBtn" });
        $('.am-dialog-footer').delegate('#quitBtn', 'click', function() {
            var causeContent = JSON.parse($("#quitreasonVal").serializeJson());
            var reasonVal = '';
            for (var i = 0; i < causeContent.causeContent.length; i++) {
                if (causeContent.causeContent[i] != '') {
                    reasonVal = reasonVal + causeContent.causeContent[i] + '|';
                }
            }
            reasonVal = reasonVal.substring(0, reasonVal.length - 1);
            jsonObject = "{" + "\"cloudId\":\"" + $scope.cloudId + "\",\"brandId\":\"" + $scope.brandId + "\",\"orgId\":\"" + $scope.orgId + "\"}";
            jsonObject = JSON.parse(jsonObject);
            jsonObject.causeContent = reasonVal;
            jsonObject = JSON.stringify(jsonObject);
            $http({
                method: 'post',
                url: pos + 'cloudUnionDetail/exitCloudUnion',
                params: {
                    keyParams: getKeyParams(jsonObject, keyParams),
                    jsonObject: getJsonObject(jsonObject)
                }
            }).success(function(data, stauts, headers, config) {
                if (data.code == 1) {
                    $('#exitUnion-dialog,.maskBg').hide();
                    alertmsg("退出成功");
                    $scope.getreloadJoinedmembers();
                    $("#quitreasonVal").find('input[type=text]').val('');
                    $("#quitreasonVal").find('input[type=checkbox]').prop("checked", false);
                } else {
                    alertmsg("退出失败", "error");
                }
            })
        });
    };
    $scope.getreloadJoinedmembers = function() {
        jsonObject = "{" + "\"cloudId\":\"" + $scope.cloudId + "\",\"nub\":\"" + 0 + "\",\"size\":\"" + 10 + "\"}";
        $http({
            method: 'post',
            url: pos + 'cloudUnionDetail/getJoinedMember',
            params: {
                keyParams: getKeyParams(jsonObject, keyParams),
                jsonObject: getJsonObject(jsonObject)
            }
        }).success(function(data, stauts, headers, config) {
            if (data.code == "1") {
                $scope.data = data.data;
                $scope.count = data.data.count;
                $scope.unionMemberList = data.data.unionMemberList;
                $scope.createPagePlugin($scope.count, 10, "4", "joinpaging");
            } else if (data.code == "0") {
                $scope.unionMemberList = [];
            } else {
                alertmsg("获取信息失败", "error");
            }
        })
    };
    //派单配置页面跳转
    $scope.rulesSet = function(id,orgid){
        window.location.href="../public/home.jsp#/UnionRuleSet";
    }
   //联盟管理首页 商品管理页面跳转
   $scope.proManagerSet = function(obj){
        var productManageJsonObject = {
				"proModelnum": "",
				"cloudId": obj.cloudId,
				"status": "2",
				"proGrandparentSortId": "",
				"proParentSortId": "",
				"proSortId": "",
				"brandId": obj.brandId,
				"brandName":obj.brandName,
				"cloudName":obj.cloudName,
				"shopName":obj.shopName,
				"proYear": "",
				"proSeason": "",
				"nub":"0",
				"size": "5"
			};
		localStorage.productManage=JSON.stringify(productManageJsonObject);
		 window.location.href="../public/home.jsp#/HugeTableProduct";
   }
}]);
