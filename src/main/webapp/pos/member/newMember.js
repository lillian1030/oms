qyApp.controller('newMemberController', function($timeout,$state,$stateParams,$scope, $http, $compile, Upload) {
	$stateParams.uiParams.sourceArr=new Array();
$stateParams.uiParams=new Object();

	$scope.size = "0";
	$scope.member = {
		headpicpath: '',
		telphone: '',
		name: '',
		sex: 'M',
		birthday: '',
		province: '',
		city: '',
		district: '',
		address: '',
		memberNo: '',
		gradeId: '',
		cloudId: $scope.id,
		salesId: ''
			//        memberId:'',
			//        brandId: '',
			//        orgId: '',
			//        discount:'0'
	};
	$scope.addmember = {
		headpicpath: '',
		telphone: '',
		name: '',
		sex: 'M',
		birthday: '',
		province: '',
		city: '',
		district: '',
		address: '',
		memberNo: '',
		gradeId: '',
		cloudId: '',
		salesId: ''
	};
	$scope.memberQuery = {
		telphone: '',
		cloudId: '',
		gradeId: '',
		orgId: '',
		//memberNo: '',
		nub: '0',
		size: '10'
	};
	$scope.memberGrade = {
		orgId: '',
		gradeId: '',
		brandId: '',
		discount: '0',
		gradeName: '',
		level: ''
	}
	$scope.membera = "show";
	$scope.newAddmember = "hide";
	$scope.newMemberEdit = "hide";
	$scope.newMemberOrder = "hide";
	$scope.vipInfo = "hide";
	//	在页面上点击返回按钮
	$scope.goback = function(type) {
			if(type == "addmember") {
				$scope.membera = "show";
				$scope.newAddmember = "hide";
			} else if(type == "memberEdit") {
				$scope.membera = "show";
				$scope.newMemberEdit = "hide";
			} else if(type == "memberOrder") {
				$scope.membera = "show";
				$scope.newMemberOrder = "hide";
			}
		}
		//	function init(user) {
		////		$scope.memberGrade.orgId = user.orgId;
		////		$scope.memberQuery.orgId = user.orgId;
		//		$scope.member.orgId = user.orgId;
		//	}
		//	init(userInfo);
	$scope.grade;
	$scope.province;
	$scope.city;
	$scope.district;
	//	加载导购员
	//导购员
	$scope.getGui = function() {
		var userInfo = JSON.parse(localStorage.userInfo);
	var orgId = userInfo.orgId;
		var jsonObject = "{\"orgId\":\"" + orgId + "\"}";
		$http({
			method: 'post',
			url: cas + 'user/findGuideByOrgId',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.guides = data.data.guideList;
			} else {
				alertmsg(data.msg, "error")
			}
		})
	};

	//	图片上传
	$scope.uploadHeadpicPath = function(files) {
		var userInfo = JSON.parse(localStorage.userInfo);
	var orgId = userInfo.orgId;
			if(files && files.length) {
				$scope.files = files;
				var imageUrl = orgId + "/headpic/";
				jsonObject = "{\"imageUrl\":\"" + imageUrl + "\"}";
				for(var i = 0; i < files.length; i++) {
					Upload.upload({
						//服务端接收
						url: pos + 'imageUpload/addMemberImage',
						//上传的同时带的参数
						data: {
							keyParams: getKeyParams(jsonObject, keyParams),
							jsonObject: getJsonObject(jsonObject)
						},
						file: files[i]
					}).success(function(data, status, headers, config) {
						if(data.code == "1") {
							//上传成功
							$scope.member.headpicpath = data.data.imagesPath;
							$("#headpicpath").attr("src", $scope.member.headpicpath);
							$scope.addmember.headpicpath = data.data.imagesPath;
							$("#addheadpicpath").attr("src", $scope.addmember.headpicpath);
						} else {
							alertmsg(data.msg)
						}
					}).error(function(data, status, headers, config) {
						//上传失败
						console.log('error status: ' + status);
					});
				}

			}
		}
		//请求省文件
	$http.get('/oms/static/base/json/province.json').success(function(data) {
		$scope.provinces = data;
	})
	//请求市文件
	$http.get('/oms/static/base/json/city.json').success(function(data) {
			$scope.citys = data;
		})
		//请求区文件
	$http.get('/oms/static/base/json/district.json').success(function(data) {
		$scope.districts = data;
	})

	$scope.reset = function() {
		$scope.memberGrade.level = '';
		$scope.memberGrade.gradeId = '';
		$scope.memberGrade.brandId = '';
		$scope.memberGrade.discount = '0';
		$scope.memberGrade.gradeName = '';
	}

	function resetMember() {
		$scope.member.headpicpath = '';
		$scope.member.memberNo = '';
		$scope.member.memberId = '';
		$scope.member.name = '';
		$scope.member.sex = 'M';
		$scope.member.gradeId = '';
		$scope.member.telphone = '';
		$scope.member.province = '';
		$scope.member.city = '';
		$scope.member.district = '';
		$scope.member.address = '';
		$scope.member.birthday = '';
		$scope.member.salesId = '';
		$scope.member.brandId = '';
		$scope.member.discount = '0';
	}
	//获取卡类型
	$scope.getMemberGrade = function() {
		var userInfo = JSON.parse(localStorage.userInfo);
	var orgId = userInfo.orgId;
		var jsonObject = {
			"orgId": orgId
		};
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
//			url: 'http://10.0.17.83:8080/pos-api/membergrade/getMemberGrades',
			url: pos + 'membergrade/getMemberGrades',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.gradeTypes = data.data.memberGradeList;
			} else {
				alertmsg(data.msg, "error")
			}
		})
	};
	$scope.getMemberGrade();

	//	设置卡号默认类型(自动获取卡号)
	$scope.cardNumType = '1';
	$('.searchtp').click(function() {
		if($(this).prop('checked') && $(this).attr('num') == 1) {
			$scope.cardNumType = '1';
		} else if($(this).prop('checked') && $(this).attr('num') == 2) {
			$scope.cardNumType = '2';
		} else if($(this).prop('checked') && $(this).attr('num') == 3) {
			$scope.cardNumType = '3';
		}
	});
	// (保存)添加会员
	$scope.addMember = function() {
		if($scope.memberWarn == true){
			alertmsg("该会员已经存在", "error");
		}else{
			$scope.guide=$scope.selectguide
			$scope.gradeId=$scope.selectgrade.split(",")[0];
			$scope.memberUnionId=$scope.selectgrade.split(",")[1];
				$scope.addmember.cloudId = $scope.id;
				if($scope.memberNoWarn) {
					alertmsg("该会员号已存在", 'error');
					return;
				}
				//if(validateForm("memberForm", "msg") == true) {
				//判断memberNo（会员卡号）
				if($scope.cardNumType == '1') {
					$scope.memberNo = $scope.autoMemberNo;
				} else if($scope.cardNumType == '2') {
					$scope.memberNo = $scope.addmember.telphone;
				} else if($scope.cardNumType == '3') {
					if($scope.member.memberNo != "") {
						$scope.memberNo = $scope.addmember.memberNo;
					} else {
						alertmsg("请输入实物卡卡号", "error")
					}
				}
				$scope.addmember.memberNo = $scope.memberNo;
				$scope.birthday = $("#birthday").val();
				$scope.birthday = $scope.birthday.split("-");
				$scope.addmember.birthday = "";
				angular.forEach($scope.birthday, function(ele) {
					$scope.addmember.birthday += ele;
				});
				if($scope.province != undefined) {
					$scope.addmember.province = $scope.province.name;
				}
				if($scope.city != undefined) {
					$scope.addmember.city = $scope.city.name;
				}
				if($scope.district != undefined) {
					$scope.addmember.district = $scope.district.name;
				}
					$scope.addmember.salesId= $scope.guide;
					$scope.addmember.gradeId = $scope.gradeId;
					$scope.addmember.memberUnionId = $scope.memberUnionId;
				$scope.addmember.headpicpath = $('#addheadpicpath').attr('src');
				var jsonObject = JSON.stringify($scope.addmember);
				$http({
					method: 'post',
					url: pos + 'member/addMember',
					params: {
						keyParams: getKeyParams(jsonObject, keyParams),
						jsonObject: getJsonObject(jsonObject)
					}
				}).success(function(data, stauts, headers, config) {
					if(data.code == "1") {
						alertmsg(data.msg);
						$scope.numA = 0;
						$scope.memberNo = "";
						$scope.queryMember();
						$scope.membera = "show";
						$scope.newAddmember = "hide";
					} else {
						alertmsg(data.msg, "error")
					}
				})
		}
	}
		//查询会员列表
	$scope.from = "0";
	$scope.pageSize = "10";
	 $scope.memberNoa="";
	$scope.queryMember = function() {
		var jsonObject = {
			"telphone": $scope.memberNoa,
			"memberUnionId": "",
			"orgId": "",
			"gradeId": "",
			"nub": $scope.from,
			"size": $scope.pageSize
		}
		var jsonObject = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'member/getMembers',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.members = data.data.memberList;
				if(undefined !== $scope.members && $scope.members.length > 0) {
					$scope.size = parseInt($scope.members[0].count);
					if($scope.size > $scope.memberQuery.size || $scope.size == $scope.memberQuery.size) {
						$scope.createPagePlugin($scope.size, $scope.memberQuery.size);
					} else {
						$scope.createPagePlugin("0", $scope.memberQuery.size);
					}
				} else {
					$scope.size = "0";
					$scope.createPagePlugin("0", $scope.memberQuery.size);
				}
			} else {
				alertmsg(data.msg, "error")
			}
		})
	}
	$scope.queryMember();
	//查看会员详情
	$scope.getMemberDetail = function(obj) {
		$scope.memberId = obj.member.memberId;
		$scope.updateUser = obj.member.name;
		$scope.updatetelPhone = obj.member.telphone;
		var oldMemberId = $("#oldMemberId").val();
		var jsonObject = {
			"memberId": obj.member.memberId
		};
		jsonObject = angular.toJson(jsonObject);
		$http({
				method: 'post',
				url: pos + 'memberCard/getMemberCards',
//				url: 'http://10.0.17.83:8080/pos-api/memberCard/getMemberCards',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					data.data.memberCardList.forEach(function(ele) {
						if(ele.isattention == "Y") {
							ele.isattention = "已绑定";
						} else {
							ele.isattention = "";
						}
					});
					$scope.memberCards = data.data.memberCardList;
					$(".detPanel-info").remove();
		if(oldMemberId != $scope.memberId) {
			var addLineMember = [];
			addLineMember.push('<tr class="detPanel-info"  style="display: table-row;">');
			addLineMember.push('<td class="detailTd" colspan="9">');
			addLineMember.push('<table class="table inventDetail mgb0">');
			addLineMember.push('<tr id="memCardTable"><th scope="col">会员卡号</th><th scope="col">卡类型</th><th scope="col">累计积分</th><th scope="col">可用积分</th><th scope="col">发卡人</th><th scope="col">发卡商户</th><th scope="col">绑定公众号</th><th scope="col">状态</th><th scope="col">操作</th></tr>');
			addLineMember.push('<tr id="memCardTable1" ng-class="{true:\'activemember\',false:\'notactivemember\'}[memberCard.stat!=\'2\']" ng-repeat="memberCard in memberCards"><td>{{memberCard.memberNo}}</td><td>{{memberCard.memberUnionName}}<span ng-if="memberCard.memberUnionName!=\'\'">&nbsp;&nbsp;&nbsp;&nbsp;</span>{{memberCard.gradeName}}<input type="hidden" id="oldMemberId" ng-value="memberId"></td><td>{{memberCard.totalpoints}}</td><td>{{memberCard.points}}</td><td>{{memberCard.salesName}}</td><td>{{memberCard.orgName}}</td><td>{{memberCard.isattention}}</td><td ng-if="memberCard.stat==\'0\'">正常使用</td><td class="am-ft-red" ng-if="memberCard.stat==\'1\'">已挂失</td><td class="am-ft-gray" ng-if="memberCard.stat==\'2\'">已注销</td><td ng-if="memberCard.stat==\'0\'"><a href="javascript:;" ng-if="memberCard.updateStat==\'0\'" ng-click="updateCard(memberCard)">升级</a><a href="javascript:;" ng-click="readyToChangeCard(this.memberCard)">换卡</a><a href="javascript:;" ng-click="reportLost(this.memberCard)">挂失</a><a href="javascript:;" class="am-ft-red" ng-click="cancelCard(this.memberCard)">注销</a></td><td ng-if="memberCard.stat==\'1\'"><a href="javascript:;" ng-click="readyToChangeCard(this.memberCard)">换卡</a><a href="javascript:;" ng-click="recoverCard(this.memberCard)">恢复</a><a href="javascript:;" class="am-ft-red" ng-click="cancelCard(this.memberCard)">注销</a></td><td ng-if="memberCard.stat==\'2\'">&nbsp;</td></tr>');
			addLineMember.push('</table></td></tr>');
			var html = addLineMember.join("");
			var template = angular.element(html);
			var newHtml = $compile(template)($scope);
			angular.element($('#member' + $scope.memberId).after(newHtml));
		} else {
			$(".detPanel-info").remove();
		}
				} else {
					$scope.size = "0";
					$scope.createPagePlugin("0", $scope.memberQuery.size);
				}
			})
	};
	//	点击会员列表的发卡按钮后点击确认创建卡，（创建新卡）

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
			var jsonObject = {
				"telphone": "",
				"memberUnionId": "",
				"orgId": "",
				"gradeId": "",
				"nub": from + "",
				"size": pageSize
			}
			var jsonObject = JSON.stringify(jsonObject);
			$http({
				method: 'post',
				url: pos + 'member/getMembers',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					$scope.members = data.data.memberList;
				} else {
					alertmsg(data.msg, "error")
				}
			})
		}
		//添加会员
	$scope.toaddMember = function(id) {
			$scope.membera = "hide";
			$scope.newAddmember = "show";
			$scope.id = id;
			$scope.getMemberNo();
			$('#typeName1').show();
			$scope.getGui();
			$scope.getMemberGrade();
//			$stateParams.uiParams.params={};
//	    	$stateParams.uiParams.type="1";
//			$stateParams.uiParams.sourceArr.push({leval:"0",name:"managerUser"});
//	    	$state.go("addNewMember",{uiParams:$stateParams.uiParams})
			
		}
		//在编辑会员信息页面点击取消按钮

	$scope.returnMember = function(type) {
			if(type == "addMember") {
				$scope.membera = "show";
				$scope.newAddmember = "hide";
			} else if(type == "editMember") {
				$scope.membera = "show";
				$scope.newMemberEdit = "hide";
			}
		}
		//  点击办卡按钮
	$scope.transactCardMask = "hide";
	$(".mask-container").centera();
	$scope.transactCard = function(obj) {
			$scope.name = obj.name;
			$scope.telphone = obj.telphone;
			$scope.memberId = obj.memberId;
			$scope.transactCardMask = "show";
			$scope.getGui();
			$scope.getMemberNo();
			$('#typeName1').show();
			$scope.getMemberGrade();
		}
		//	点击取消关闭弹窗
	$scope.closedialog = function() {
			$scope.transactCardMask = "hide";
			$scope.updateDialog = "hide";
			$scope.updateDialog = "hide";
			$scope.changeCardDialog = "hide";
			$scope.cancelCardDialog = "hide";
			$scope.reportLossDialog = "hide";
			$scope.recoverCardDialog = "hide";
			$scope.isRecharge='0';

		}
	//点击充值
	$scope.isRecharge='0';
	$scope.recharge=function(obj){
		$scope.isRecharge='1';
		$scope.editCard={
			cardNum:"",
			password:"",
			memberId:obj.member.memberId,
			useWay:"1",
			status:"2"
		}
	}
	//查看订单详情
	$scope.checkDetail=function(obj){
		var sourceArr = [{
			level: 0,
			name: "newMember"
		}];
		var params={
			"source": sourceArr,
			"type": "1",
			"orderInfo":obj.order,
		};
		$state.go("wdOrderDetail", {
			uiParams: params
		});
	}
	//点击查看
	$scope.checkrecharge=function(obj){
		$scope.membera='hide';
		$scope.vipInfo='show';
		$scope.vipMember=obj.member;
		$scope.shiftTab("1");
	}
		//自动获取卡号
	$scope.getMemberNo = function() {
		$http({
			method: 'post',
			url: pos + 'member/getmemberNo',
			params: {
				keyParams: getKeyParams('{}', keyParams),
				jsonObject: getJsonObject('{}')
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.autoMemberNo = data.data.memberNo;
			} else {
				alertmsg("获取失败", "error");
			}
		});
	};
	//	在发卡弹窗出选择会员卡类型
	$scope.sureToCreateCard = function() {
		if($scope.cardNumType == '1') {
			$scope.memberNo = $scope.autoMemberNo;
		} else if($scope.cardNumType == '2') {
			$scope.memberNo = $scope.telphone;
		} else if($scope.cardNumType == '3') {
			if($scope.member.memberNo != "") {
				$scope.memberNo = $scope.memberNoa;
			} else {
				alertmsg("请输入实物卡卡号", "error")
			}
		}
		$scope.gradeIdas=$scope.gradeIda.split(",")[0];
		$scope.memberUnionIda=$scope.gradeIda.split(",")[1];
		var jsonObject = {
			"memberId": $scope.memberId,
			"memberNo": $scope.memberNo,
			"gradeId": $scope.gradeIdas,
			"memberUnionId": $scope.memberUnionIda,
			"salesId": $scope.guideId,
		};
		$scope.showDialogA = '$scope.transactCardMask="hide"';
		jsonObject = angular.toJson(jsonObject);
		$scope.saveCardInfo(jsonObject, $scope.showDialogA);
	}
	$scope.saveCardInfo = function(jsonObject, showDialog) {
			$http({
				method: 'post',
				url: pos + 'memberCard/addMemberCard',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					eval(showDialog);
					alertmsg(data.msg);
					$scope.queryMember();
				} else {
					alertmsg("获取失败", "error");
				}
			});
		}
		//	点击每张会员卡的升级按钮
	$scope.updateDialog = "hide";
	$scope.updateCard = function(obj) {
		$scope.memberCardId = obj.memberCardId;
		$scope.gradeId = obj.gradeId;
		$scope.memberUnionName = obj.memberUnionName;
		$scope.gradeName = obj.gradeName;
		$scope.memberNo = obj.memberNo;
		$scope.totalconsumption = obj.totalconsumption;
		$scope.memberUnionName = obj.memberUnionName;
		$scope.points = obj.points;
		$scope.newMemberNo = "";
		$scope.tochangeCard = true;
		var jsonObject = {
			"gradeId": $scope.gradeId
		}
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'membergrade/getNextGrade',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.memberGrade = data.data.memberGrade;
				$scope.changeCarda = 'show';
				$scope.updateDialog = "show";
				alertmsg(data.msg);
			} else {
				alertmsg("您的卡已为最高卡", "error");
			}
		});
	}
	$scope.tochangeCard = true;
	$scope.changeCarda = 'show';
	$scope.changeCard = function() {
		if($scope.tochangeCard == true) {
			$scope.newMemberNo = "";
			$scope.changeCarda = 'show';
		} else if($scope.tochangeCard == false) {
			$scope.newMemberNo = "";
			$scope.changeCarda = 'hide';
		}
	}
	$scope.newMemberNo = "";
	$scope.sureToUpdateCard = function(nextGradeId) {
		var jsonObject = {
			"memberCardId": $scope.memberCardId,
			"memberNo": $scope.newMemberNo,
			"gradeId": nextGradeId
		}
		jsonObject = angular.toJson(jsonObject);
		$scope.showDialogB = "$scope.updateDialog='hide'"
		$scope.commitUpdateCard(jsonObject, $scope.showDialogB)
	}
	$scope.commitUpdateCard = function(jsonObject, showDialog) {
			$http({
				method: 'post',
				url: pos + 'memberCard/upgradeMemberCard',
				//			url: 'http://10.0.17.64:8080/pos-api/memberCard/upgradeMemberCard',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					eval(showDialog);
					alertmsg(data.msg);
					$scope.queryMember();
				} else {
					alertmsg("获取失败", "error");
				}
			});
		}
		//	点击换卡按钮
	$scope.changeCardDialog = "hide";
	$("#changeCardDialog").centera();
	$scope.readyToChangeCard = function(obj) {
			$scope.changeCardDialog = "show";
			$scope.gradeName = obj.gradeName;
			$scope.memberNo = obj.memberNo;
			$scope.memberUnionName = obj.memberUnionName;
//			增加会员联盟名字
			$scope.memberNo = obj.memberNo;
			$scope.memberCardId = obj.memberCardId;
		}
		//	在换卡弹窗点击确认按钮
	$scope.sureToChangeCard = function(memberCardId, newMemberNo) {
		var jsonObject = {
			"memberCardId": memberCardId,
			"memberNo": newMemberNo
		}
		jsonObject = angular.toJson(jsonObject);
		$scope.showDialogC = "$scope.changeCardDialog='hide';"
		$scope.changeCardAjax(jsonObject, $scope.showDialogC);
	}
	$scope.changeCardAjax = function(jsonObject, showDialog) {
			$http({
				method: 'post',
				url: pos + 'memberCard/changeMemberCard',
				//			url: 'http://10.0.17.64:8080/pos-api/memberCard/upgradeMemberCard',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					eval(showDialog);
					alertmsg(data.msg);
					$scope.queryMember();
				} else {
					alertmsg("获取失败", "error");
				}
			});
		}
		//	点击会员卡列表的注销按钮
	$scope.cancelCardDialog = "hide";
	$("#cancelCardDialog").centera();
	$scope.cancelCard = function(obj) {
			$scope.cancelCardDialog = "show";
			$scope.gradeName = obj.gradeName;
			$scope.memberNo = obj.memberNo;
			$scope.memberCardId = obj.memberCardId;
			$scope.totalconsumption = obj.totalconsumption;
			$scope.memberUnionName = obj.memberUnionName;
			$scope.points = obj.points;
			//	点击注销会员弹窗的确认按钮
		}
		//	点击注销会员弹窗的确认按钮
	$scope.sureToCancelCard = function(memberCardId) {
			var jsonObject = {
				"memberCardId": memberCardId,
				"stat": "2"
			};
			jsonObject = angular.toJson(jsonObject);
			$scope.showDialogD = "$scope.cancelCardDialog='hide';"
			$scope.cancelCardAjax(jsonObject, $scope.showDialogD);
		}
		//	注销会员的AJAX请求
	$scope.cancelCardAjax = function(jsonObject, showDialog) {
			$http({
				method: 'post',
				url: pos + 'memberCard/cancellationMemberCard',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					eval(showDialog);
					alertmsg(data.msg);
					$scope.queryMember();
				} else {
					alertmsg("获取失败", "error");
				}
			})
		}
		//	点击挂失按钮
	$scope.reportLossDialog = "hide";
	$scope.reportLost = function(obj) {
			$scope.reportLossDialog = "show";
			$scope.gradeName = obj.gradeName;
			$scope.memberNo = obj.memberNo;
			$scope.memberCardId = obj.memberCardId;
			$scope.totalconsumption = obj.totalconsumption;
			$scope.memberUnionName = obj.memberUnionName;
			$scope.points = obj.points;
		}
		//	点击挂失会员卡弹窗上的确认按钮进行挂失
	$scope.sureToreportLost = function(memberCardId) {
		var jsonObject = {
			"memberCardId": memberCardId,
			"stat": "1"
		};
		jsonObject = angular.toJson(jsonObject);
		$scope.showDialogE = '$scope.reportLossDialog="hide"';
		$scope.reportLostAjax(jsonObject, $scope.showDialogE);
	}
	$scope.reportLostAjax = function(jsonObject, showDialog) {
			$http({
				method: 'post',
				url: pos + 'memberCard/cancellationMemberCard',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					eval(showDialog);
					alertmsg(data.msg);
					$scope.queryMember();
				} else {
					alertmsg("获取失败", "error");
				}
			})
		}
		//	恢复会员卡/
	$scope.recoverCardDialog = "hide";
	$scope.recoverCard = function(obj) {
		$scope.recoverCardDialog = "show";
		$scope.gradeName = obj.gradeName;
		$scope.memberNo = obj.memberNo;
		$scope.memberCardId = obj.memberCardId;
		$scope.totalconsumption = obj.totalconsumption;
		$scope.memberUnionName = obj.memberUnionName;
		$scope.points = obj.points;
	}
	$scope.sureToRecoverCard = function(memberCardId) {
		var jsonObject = {
			"memberCardId": memberCardId,
			"stat": "0"
		};
		jsonObject = angular.toJson(jsonObject);
		$scope.showDialogF = "$scope.recoverCardDialog='hide';"
		$scope.cancelCardAjax(jsonObject, $scope.showDialogF);
	}
	$scope.recoverCardAjax = function(jsonObject, showDialog) {
			$http({
				method: 'post',
				url: pos + 'memberCard/cancellationMemberCard',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					eval(showDialog);
					alertmsg(data.msg);
					$scope.queryMember();
				} else {
					alertmsg("获取失败", "error");
				}
			})
		}
		//编辑会员信息
	$scope.toupdateMember = function(obj) {
			$scope.membera = "hide";
			$scope.newMemberEdit = "show";
			$scope.member = obj.member;
			//请求省文件
			$scope.initprovinces = function() {
				for(var i = 0; i < $scope.provinces.length; i++) {
					if($scope.provinces[i].name == $scope.member.province) {
						$scope.provinceId = $scope.provinces[i].id;
					}
				}
			};
			$http.get('/oms/static/base/json/province.json').success(function(data) {
				$scope.provinces = data;
				$scope.initprovinces();
			});
			//请求市文件
			$scope.initcitys = function() {
				if("" != $scope.provinceId) {
					for(var i = 0; i < $scope.citys[$scope.provinceId].length; i++) {
						if($scope.citys[$scope.provinceId][i].name == $scope.member.city) {
							$scope.cityId = $scope.citys[$scope.provinceId][i].id;
						}
					}
				}
			};
			$http.get('/oms/static/base/json/city.json').success(function(data) {
				$scope.citys = data;
				$scope.initcitys();
			});
			//请求区文件
			$http.get('/oms/static/base/json/district.json').success(function(data) {
				$scope.districts = data;
			});
		}
		//保存编辑/修改的会员信息
	$scope.updateMember = function(obj) {
			delete obj.cardNum;
			delete obj.count;
			delete obj.$$hashKey;
			obj.birthday = $('#updatebirthday').val();
			var jsonObject = JSON.stringify(obj);
			$http({
				method: "post",
				url: pos + "member/updateMember",
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, status, header, config) {
				if(data.code == "1") {
					alertmsg("修改成功");
					$scope.numB = 0;
					$scope.membera = "show";
					$scope.newMemberEdit = "hide";
					$scope.queryMember();
				} else {
					alertmsg(data.msg, "error")
				}
			})
		}
		//  点击会员列表上的会员订单按钮
		//点击会员订单
	$scope.vipOrderList = function(obj) {
		$scope.memberId = obj.member.memberId;
		jsonObject = {
			memberId: $scope.memberId
		};
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: "post",
			url: pos + "order/getOrder",
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, status, header, config) {
			if(data.code == "1") {
				$scope.membera = "hide";
				$scope.newMemberOrder = "show";
			} else {
				alertmsg(data.msg, "error")
			}
		})

	}
	
	
	$scope.checkMember = function() {
		if($scope.addmember.telphone == "") {
			return;
		}
		checkMemberByTel($scope.addmember.telphone);
	}

	function checkMemberByTel(telphone) {
		var jsonObject = "{\"telphone\":\"" + telphone + "\"}";
		$http({
			method: 'post',
			url: pos +
				'member/memberExistence',
			params: {
				keyParams: getKeyParams(
					jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				var flag = data.data.flag;
				if(flag == undefined) {
					$scope.memberWarn = true;
				}
				if("true" == flag) {
					$scope.memberWarn = true;
				} else {
					$scope.memberWarn = false;
				}
			} else {
				alertmsg(data.msg);
			}
		})
	}
	/*会员充值查看*/
	$scope.shiftTab=function(type){
		$scope.tabType=type;
		if(type=="1"){
			//获取充值记录
			$scope.getChargeCard();
		}else if(type=="2"){
			//获取评价信息
			$scope.getWdOrderList();
		}else if(type=="3"){
			//获取评价信息
			$scope.getEvaluate();
		}
	}
	/*充值卡充值*/
	$scope.showResult="0";
	$scope.updateChargeCard=function(){
		if($scope.editCard.cardNum==""){
			$scope.warn="卡号不能为空";
			return;
		}
		if($scope.editCard.password==""){
			$scope.warn="密码不能为空";
			return;
		}
		var jsonObject=JSON.stringify($scope.editCard);
		$http({
			method: 'post',
			url: pos + 'chargeCard/useChargeCard',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.closedialog();
//				$scope.getChargeCard();
				$scope.queryMember();
				$scope.showResult="1";
				$timeout(function(){
					$scope.showResult="0";
				},500);
			} else {
				if(data.code < 0) {
					$scope.warn="充值失败";
				}else{
					$scope.warn=data.msg;
				}
			}
		})
	}
	
	var cardfrom=0;
	var cardPageSize=10;
	$scope.getChargeCard=function(){
		var jsonObject={
			"nub":""+cardfrom+"",
			"size":""+cardPageSize+"",
			"memberId":$scope.vipMember.memberId
		};
		var jsonObject=JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'chargeCard/getChargeCard',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.chargeCardList=data.data.chargeCardList;
				$scope.createPagePlugin0(data.data.count,cardPageSize);
			} else {
				alertmsg("获取充值卡列表失败", "error");
			}
		})
	}
	
	$scope.createPagePlugin0 = function(total, pageSize) {
		$("#cardpaging").empty();
		paging = pagePlugin.createPaging({
			renderTo: 'cardpaging',
			total: total,
			pageSize: pageSize
		});
		paging.goPage = function(from, to) {
			$scope.page0(from - 1, pageSize);
		}
	};
	
	$scope.page0 = function(from, pageSize) {
		var jsonObject={
			"nub":""+from+"",
			"size":""+pageSize+"",
			"memberId":$scope.vipMember.memberId
		};
		var jsonObject=JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'chargeCard/getChargeCard',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.chargeCardList=data.data.chargeCardList;
			} else {
				alertmsg("获取充值卡列表失败", "error");
			}
		})
	}
	
	$scope.getEvaluate=function(){
		var jsonObject={
			"nub":""+cardfrom+"",
			"size":""+cardPageSize+"",
			"evaluateMemberId":$scope.vipMember.memberId,
			"pOrgId":keyParams.orgId
		};
		var jsonObject=JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'evaluateDetail/getEvaluate',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.evaluateList=data.data.evaluateList;
				$scope.createPagePlugin1(data.data.count,cardPageSize);
			} else {
				alertmsg("获取评价列表失败", "error");
			}
		})
	}
	
	$scope.createPagePlugin1 = function(total, pageSize) {
		$("#cardpaging").empty();
		paging = pagePlugin.createPaging({
			renderTo: 'cardpaging',
			total: total,
			pageSize: pageSize
		});
		paging.goPage = function(from, to) {
			$scope.page1(from - 1, pageSize);
		}
	};
	
	$scope.page1 = function(from, pageSize) {
		var jsonObject={
			"nub":""+from+"",
			"size":""+pageSize+"",
			"evaluateMemberId":$scope.vipMember.memberId,
			"pOrgId":keyParams.orgId
		};
		var jsonObject=JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'evaluateDetail/getEvaluate',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.evaluateList=data.data.evaluateList;
			} else {
				alertmsg("获取评价列表失败", "error");
			}
		})
	}
	
	$scope.getWdOrderList=function(){
		var jsonObject={
			"nub":""+cardfrom+"",
			"size":""+cardPageSize+"",
			"evaluateMemberId":$scope.vipMember.memberId
		};
		var jsonObject=JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'order/getWdOrderList',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.orderList=data.data.orders;
				$scope.createPagePlugin2(data.data.count,cardPageSize);
			} else {
				alertmsg("获取订单列表失败", "error");
			}
		})
	}
	
	$scope.createPagePlugin2 = function(total, pageSize) {
		$("#cardpaging").empty();
		paging = pagePlugin.createPaging({
			renderTo: 'cardpaging',
			total: total,
			pageSize: pageSize
		});
		paging.goPage = function(from, to) {
			$scope.page2(from - 1, pageSize);
		}
	};
	
	$scope.page2 = function(from, pageSize) {
		var jsonObject={
			"nub":""+from+"",
			"size":""+pageSize+"",
			"evaluateMemberId":$scope.vipMember.memberId
		};
		var jsonObject=JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'order/getWdOrderList',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.orderList=data.data.orders;
			} else {
				alertmsg("获取订单列表失败", "error");
			}
		})
	}
	
});