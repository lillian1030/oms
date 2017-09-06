qyApp.controller("mapDepotDet_modelController", ["$scope", "$http", '$compile', "Upload", "$route", "$state", "$stateParams", function($scope, $http, $compile, Upload, $route, $state, $stateParams) {

	$scope.userInfo = eval('(' + localStorage.userInfo + ')');
	//页面展现，隐藏
	var nub = "0";

	//修改文件名称
	$scope.updateFolder = function(obj) {
		var proAttrFilePath = obj.attr.proAttrFilePath;
		var proAttrId = obj.attr.proAttrId;
		if(proAttrFilePath == '') {
			alertmsg("请输入文件名称", "error")
			$("#newFolder").focus();
		} else {
			var jsonObject = {
				proAttrId: proAttrId,
				proAttrFilePath: proAttrFilePath
			}
			jsonObject = JSON.stringify(jsonObject);
			$http({
				method: 'post',
				url: pos + 'product/updateAttrTB',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}

			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {

				} else {
					alertmsg(data.msg, "error")
				}
			})
		}
	}

	//删除图片
	$scope.delImage = function(id) {
		var jsonObject = {
			proAttrId: id
		}
		jsonObject = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'product/deleteAttrTB',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}

		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.getmeteralModelPic();
			} else {
				alertmsg(data.msg, "error")
			}
		})
	}

	//	单张图片下载 start
	$scope.downloadone = function(obj) {
			var pro = obj;
			if(pro == null) {
				alertmsg("请选择文件！", "error")
			}
			var brower = myBrowser();
			if(brower == "IE") {
				var imgURL = "";
				//如果隐藏IFRAME不存在，则添加  
				if(!document.getElementById("IframeReportImg" + pro.proAttrId))
					$('<iframe style="display:none;" id="IframeReportImg' + pro.proAttrId + '" name="IframeReportImg' + pro.proAttrId + '" onload="DoSaveAsIMG(' + pro.proAttrId + ');" width="0" height="0" src="about:blank"></iframe>').appendTo("body");
				//加载图片
				document.getElementById("IframeReportImg" + pro.proAttrId).src = pro.prcUrl;
			} else if(brower == "DOWNLOAD") {
				var fileName = pro.proAttrId + ".png";
				var aLink = document.createElement('a');
				var evt = document.createEvent("HTMLEvents");
				evt.initEvent("click", false, false);
				aLink.download = fileName;
				aLink.href = pro.proAttrValue;
				//				aLink.dispatchEvent(evt);
				aLink.click();

			}
		}
		//判断浏览器类型
	function myBrowser() {
		if(!!window.ActiveXObject || "ActiveXObject" in window) {
			return "IE";
		}
		if('download' in document.createElement('a')) {
			return "DOWNLOAD";
		}
		return "OTHER";
	}

	function download(pro, i) {
		var brower = myBrowser();
		if(brower == "IE") {
			var imgURL = "";
			//如果隐藏IFRAME不存在，则添加  
			if(!document.getElementById("IframeReportImg" + pro.proAttrId))
				$('<iframe style="display:none;" id="IframeReportImg' + pro.proAttrId + '" name="IframeReportImg' + pro.proAttrId + '" onload="DoSaveAsIMG(' + pro.proAttrId + ');" width="0" height="0" src="about:blank"></iframe>').appendTo("body");
			//加载图片
			document.getElementById("IframeReportImg" + pro.proAttrId).src = pro.prcUrl;
		} else if(brower == "DOWNLOAD") {
			var fileName = pro.proAttrId + "-" + i + ".png";
			var aLink = document.createElement('a');
			var evt = document.createEvent("HTMLEvents");
			evt.initEvent("click", false, false);
			aLink.download = fileName;
			aLink.href = pro.prcUrl;
			aLink.click();
		}
	}
	//	单张图片下载 end

	//选择下载内容
	//选择、取消选择
	$scope.selectPros = new Array();
	//选择效果
	$scope.doSelect = function(obj, type) {
			$scope.typeSelect = type;
			$("#materialcheck" + obj.attr.proAttrId + $scope.typeSelect)[0].checked = !$("#materialcheck" + obj.attr.proAttrId + $scope.typeSelect)[0].checked;
			$("#material" + obj.attr.proAttrId + $scope.typeSelect).removeClass("currentFodderMain");
			if($("#materialcheck" + obj.attr.proAttrId + $scope.typeSelect)[0].checked) {
				$("#material" + obj.attr.proAttrId + $scope.typeSelect).addClass("currentFodderMain");
				var selectPro = {
					proAttrId: obj.attr.proAttrId,
					prcUrl: obj.attr.proAttrValue
				}
				$scope.selectPros.push(selectPro);
			} else {
				$("#" + $scope.selectID).prop('checked', false);
				for(var i = 0; i < $scope.selectPros.length; i++) {
					if($scope.selectPros[i].proAttrId == obj.attr.proAttrId) {
						$scope.selectPros.splice(i, 1);
						i--;
					}
				}
			}
		}
		//全选图片
	$scope.selectAll = function(type) {
			$scope.typeSelect = type;
			if(type == 'P') {
				$scope.selectID = "selectAllP";
			} else if(type == 'S') {
				$scope.selectID = "selectAllS";
			} else if(type == 'M') {
				$scope.selectID = "selectAllM";
			}
			$("#" + $scope.selectID)[0].check = !$("#" + $scope.selectID)[0].check;
			for(var i = 0; i < $scope.attrList.length; i++) {

				if($scope.attrList[i].proAttrValue != '') {
					//判断当前每个图片但是不影响前后选择的图片
					//先取消选择样式
					$("#material" + $scope.attrList[i].proAttrId + $scope.typeSelect).removeClass("currentFodderMain");
					var flag = true;
					for(var j = 0; j < $scope.selectPros.length; j++) {
						//循环所有已选择的图片
						if($("#" + $scope.selectID)[0].check) {
							//全选时,判断是否已选择，已选择不做处理，未选择插入
							if($scope.attrList[i].proAttrId == $scope.selectPros[j].proAttrId) {
								flag = false;
							}
						} else {
							//取消反选时，若已选中，取消选择
							if($scope.attrList[i].proAttrId == $scope.selectPros[j].proAttrId) {
								$scope.selectPros.splice(j, 1);
								j--;
								$("#materialcheck" + $scope.attrList[i].proAttrId + $scope.typeSelect)[0].checked = false;
							}
						}
					}
					if($("#" + $scope.selectID)[0].check) {
						//全选情况下添加选中样式
						$("#material" + $scope.attrList[i].proAttrId + $scope.typeSelect).addClass("currentFodderMain");
						if(flag) {
							//若之前未选中，则添加数据
							$("#materialcheck" + $scope.attrList[i].proAttrId + $scope.typeSelect)[0].checked = true;
							var selectPro = {
								proAttrId: $scope.attrList[i].proAttrId,
								prcUrl: $scope.attrList[i].proAttrValue
							}
							$scope.selectPros.push(selectPro);
						}
					}
				}
			}
		}
		//多选下载
	$scope.downLoadPic = function() {
		if($scope.selectPros.length == 0) {
			alertmsg("请选择下载素材", "error");
		}
		for(var i = 0; i < $scope.selectPros.length; i++) {
			download($scope.selectPros[i], i);
		}
	}

	//翻页完成后样式效果铺设
	function initPage() {
		$("#" + $scope.selectID)[0].check = false;
		$("#" + $scope.selectID).prop('checked', false);
		var flag1 = true;
		for(var i = 0; i < $scope.attrList.length; i++) {
			//先取消选择样式
			$("#material" + $scope.attrList[i].proAttrId + $scope.typeSelect).removeClass("currentFodderMain");
			var flag = false;
			for(var j = 0; j < $scope.selectPros.length; j++) {
				//循环所有已选择的图片,若已选择,加上样式
				if($scope.attrList[i].proAttrId == $scope.selectPros[j].proAttrId) {
					flag = true;
				}
			}
			if(flag && $scope.selectPros.length > 0) {
				$("#material" + $scope.attrList[i].proAttrId + $scope.typeSelect).addClass("currentFodderMain");
				$("#materialcheck" + $scope.attrList[i].proAttrId + $scope.typeSelect)[0].checked = true;
			} else {
				$("#materialcheck" + $scope.attrList[i].proAttrId + $scope.typeSelect)[0].checked = false;
				flag1 = false;
			}
		}
		if(flag1 && $scope.selectPros.length > 0) {
			//若全部选中，勾上选择全部
			$("#" + $scope.selectID)[0].check = true;
			$("#" + $scope.selectID).prop('checked', true);
		}
	}

	//按款号查图片start
	var sizeModel = "19";
	if($scope.userInfo.roleId != '1' && $scope.userInfo.roleId != '2') {
		sizeModel = "20";
	}
	//获取款号文件夹对应图片
	$scope.getmeteralModelPic = function() {
		$scope.proAttrName = 'b';
		var jsonObject = {
			proModelid: $scope.proModelid,
			proAttrName: $scope.proAttrName,
			nub: nub,
			size: sizeModel
		}
		jsonObject = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'product/getProductAttrTB',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}

		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				if(data.data.attrList.length > 0) {
					$scope.attrList = data.data.attrList;
					$scope.countModel = data.data.count;
					if(Number($scope.countModel) > Number(sizeModel)) {
						$scope.createPagePluginModel($scope.countModel, sizeModel);
					} else {
						$("#pagingModel").empty();
					}
				} else {
					$scope.attrList = "";
				}
			} else {
				alertmsg(data.msg, "error")
			}
		})
	}

	//获取款号图片分页
	$scope.createPagePluginModel = function(total, pageSize) {
		$("#pagingModel").empty();
		paging = pagePlugin.createPaging({
			renderTo: 'pagingModel',
			total: total,
			pageSize: pageSize
		});
		paging.goPage = function(from, to) {
			$scope.pageModel(from - 1, pageSize);
		}
	};
	//获取款号图片翻页
	$scope.pageModel = function(from, pageSize) {
		var jsonObject = "{\"proModelid\":\"" + $scope.proModelid + "\",\"proAttrName\":\"" + $scope.proAttrName + "\",\"nub\":\"" + from + "\",\"size\":\"" + pageSize + "\"}";
		$http({
			method: 'post',
			url: pos + 'product/getProductAttrTB',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.attrList = data.data.attrList;
				window.setTimeout(function() {
					initPage();
				}, "200");
			} else {
				alertmsg(data.msg, "error")
			}
		})
	}

	//按款号添加图片
	$scope.addFilesModel = function(files) {
			if(files && files.length) {
				$scope.files = files;
				var imageUrl = $scope.orgId + "/a/";
				jsonObject = "{\"imageUrl\":\"" + imageUrl + "\"}";
				for(var i = 0; i < files.length; i++) {
					Upload.upload({
						url: pos + 'imageUpload/addProductImage',
						data: {
							keyParams: getKeyParams(jsonObject, keyParams),
							jsonObject: getJsonObject(jsonObject)
						},
						file: files[i]
					}).success(function(data, status, headers, config) {
						$scope.imagesPath = data.data.imagesPath;
						$scope.imageName = data.data.imageName;
						var jsonObj = {
							proModelid: $scope.proModelid,
							proAttrName: "b",
							orgId: $scope.orgId,
							proAttrValue: $scope.imagesPath,
							proAttrFilePath: $scope.imageName
						}
						jsonObj = JSON.stringify(jsonObj);
						$http({
							method: 'post',
							url: pos + 'product/addProductAttrTB',
							params: {
								keyParams: getKeyParams(jsonObj, keyParams),
								jsonObject: getJsonObject(jsonObj)
							}

						}).success(function(data, stauts, headers, config) {
							if(data.code == "1") {
								$scope.getmeteralModelPic();
							} else {
								alertmsg(data.msg, "error")
							}
						})
					}).error(function(data, status, headers, config) {
						console.log('error status: ' + status);
					});
				}

			}
		}
		//按款号查图片end

	//判断是否带参数
	if($stateParams.uiParams.proModelid != undefined) {
		$scope.orgId = $stateParams.uiParams.orgId;
		$scope.orgInfo = $stateParams.uiParams.orgManage;
		$scope.proModelid = $stateParams.uiParams.proModelid;
		$scope.materialMod = $stateParams.uiParams.materialMod;
		$scope.source = $stateParams.uiParams.source;
		$scope.getmeteralModelPic();
	} else {
		$scope.orgId = JSON.parse(keyParams).orgId;
		$scope.getmeteralModelPic();
	}

	//路由统一返回方法
	$scope.gobackByRoute = function() {
			$scope.selectPros = new Array();
			$scope.source.splice($scope.source.length - 1, 1);
			$state.go($scope.source[$scope.source.length - 1].name, {
				uiParams: {
					"source": $scope.source,
					"type": "2",
					"orgId": $scope.orgId,
					"orgManage": $scope.orgInfo
				}
			})
		}
		/*图片预览代码*/
		/*图片预览功能*/
		//	计算图片位置的函数
		/*图片预览功能*/
		/*新建一个数组存放当前页的图片链接*/
	var ImgArr, thisImgIndex, thisImgSrc, mulriple;
	var showImgBox = $(".showScanImg img");
	var winWidth = $(window).width();
	var winHeight = $(window).height();
	$(".fodderMainRow").on("click", ".scan", function() {
		ImgArr = [];
		var thisPageImgs = $(this).parents(".fodderMainRow").children(".fodderMain[foldtype='proimg']").find("img");
		thisPageImgs.each(function(index, ele) {
			if(ele.currentSrc) {
				ImgArr.push(ele.currentSrc);
			} else if(ele.href) {
				ImgArr.push(ele.href);
			}
		});
		/*当前选中的图片的序号*/
		thisImgIndex = $(".fodderMainRow").children(".fodderMain[foldtype='proimg']").index($(this).parents(".fodderMain[foldtype='proimg']"));
		thisImgSrc = ImgArr[thisImgIndex];
		if(ImgArr.length == 1) {
			$('#prevImg').hide();
			$('#nextImg').hide();
		} else {
			if(thisImgIndex == 0) {
				$('#prevImg').hide();
				$('#nextImg').show();
			} else if(thisImgIndex == ImgArr.length - 1) {
				$('#prevImg').show();
				$('#nextImg').hide();
			} else {
				$('#prevImg').show();
				$('#nextImg').show();
			}
		}
		$(".showScanImg").show();
		showImgBox.attr("src", thisImgSrc);
		var showImg = new Image();
		showImg.src = thisImgSrc;
		showImgBox.width(showImg.width);
		showImgBox.height(showImg.height);
		/*图片的宽和高*/
		var showImgWid = showImgBox.width();
		var showImgHei = showImgBox.height();
		mulriple = showImgHei / showImgWid;
		if(showImgHei > winHeight) {
			showImgBox.css({
				"position": "absolute",
				"left": (winWidth - showImgWid) / 2 + "px",
				"top": "0px"
			})
		} else if(showImgHei <= winHeight) {
			showImgBox.centera();
		}
		/*图片的位置*/
	});
	/*点击下一张图片*/
	$("#nextImg").on("click", function() {
			thisImgIndex++;
			if(thisImgIndex <= ImgArr.length - 1) {
				$('#prevImg').show();
				$('#nextImg').show();
				showImgBox.attr("src", ImgArr[thisImgIndex]);
				var showImg = new Image();
				showImg.src = ImgArr[thisImgIndex];
				showImgBox.width(showImg.width);
				showImgBox.height(showImg.height);
				/*图片的宽和高*/
				var showImgWid = showImgBox.width();
				var showImgHei = showImgBox.height();
				mulriple = showImgHei / showImgWid;

				if(showImgHei > winHeight) {
					showImgBox.css({
						"position": "absolute",
						"left": (winWidth - showImgWid) / 2 + "px",
						"top": "0px"
					})
				} else if(showImgHei <= winHeight) {
					showImgBox.centera();
				}
				if(thisImgIndex == ImgArr.length - 1) {
					$('#prevImg').show();
					$('#nextImg').hide();
				}
			}
		})
		/*点击下一张图片*/
		/*点击上一张图片*/
	$("#prevImg").on("click", function() {
			thisImgIndex--;
			if(thisImgIndex >= 0) {
				$('#prevImg').show();
				$('#nextImg').show();
				showImgBox.attr("src", ImgArr[thisImgIndex]);
				var showImg = new Image();
				showImg.src = ImgArr[thisImgIndex];
				showImgBox.width(showImg.width);
				showImgBox.height(showImg.height);
				/*浏览器视口的宽和高*/

				/*图片的宽和高*/
				var showImgWid = showImgBox.width();
				var showImgHei = showImgBox.height();
				mulriple = showImgHei / showImgWid;
				if(showImgHei > winHeight) {
					showImgBox.css({
						"position": "absolute",
						"left": (winWidth - showImgWid) / 2 + "px",
						"top": "0px"
					})
				} else if(showImgHei <= winHeight) {
					showImgBox.centera();
				}

				if(thisImgIndex == 0) {
					$('#prevImg').hide();
					$('#nextImg').show();
				}
			}
			//		else{
			//			$('#prevImg').hide();
			//			$('#nextImg').show();
			//		}
		})
		/*点击上一张图片*/
		//关闭预览弹窗
	$("#closeScanImg").click(function($event) {
		$(".showScanImg").hide();
	});
	/*图片预览功能*/
	/*	图片拖拽效果*/
	//	showImgBox.mousedown(function(e) {
	//			e.preventDefault();
	//			showImgBox.on("mousemove", function(e) {
	//				var showImgBoxLeft = showImgBox.position().left;
	//				var showImgBoxTop = showImgBox.position().top;
	//				var showImgWid = showImgBox.width() / 2;
	//				var showImgHei = showImgBox.height() / 2;
	//				var event = e;
	//				showImgBox.offset({
	//					left: event.pageX - showImgWid,
	//					top: event.pageY - showImgHei
	//				})
	//			})
	//			showImgBox.parent().on("mouseup", function() {
	//				showImgBox.unbind("mousemove")
	//			})
	//		})
	/*鼠标滚轮滚动对图片进行缩放*/
	var myimage = document.getElementById('showImg');
	if(myimage.addEventListener) {
		// IE9, Chrome, Safari, Opera   
		myimage.addEventListener("mousewheel", MouseWheelHandler, false);
		// Firefox   
		myimage.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
	}
	// IE 6/7/8   
	else {
		myimage.attachEvent("onmousewheel", MouseWheelHandler);
	}

	function MouseWheelHandler(event) {
		var delta =0;
		if(!event) {
			event = window.event;
		}
		if(event.wheelDelta) {
			var delta = Math.max(-1, Math.min(1,event.wheelDelta));
			delta = event.wheelDelta / 120;
			if(window.opera) delta = -delta;
		} else if(event.detail) {
			delta = Math.max(-1, Math.min(1, -event.detail));
		}
		myimage.style.width = Math.max(50, Math.min(2000, myimage.width + (30 * delta))) + "px";
		myimage.style.height = mulriple * Math.max(50, Math.min(2000, myimage.width + (30 * delta))) + "px";
		var myimageheight = Math.round(myimage.style.height.substr(0, myimage.style.height.indexOf("p")))
		var myimagewidth = Math.round(myimage.style.width.substr(0, myimage.style.width.indexOf("p")))
		if(myimageheight > winHeight) {
			showImgBox.css({
				"position": "absolute",
				"left": (winWidth - myimagewidth) / 2 + "px",
				"top": "0px"
			})
		} else if(myimageheight <= winHeight) {
			showImgBox.css({
				"position": "absolute",
				"left": (winWidth - myimagewidth) / 2 + "px",
				"top": (winHeight - myimageheight) / 2 + "px",
			})
		}
		return false;
	}
	$("#showImg").mouseover(function() {
		if(document.getElementById("showScanImg").addEventListener) {
			document.getElementById("showScanImg").addEventListener('DOMMouseScroll', scrollFunc, false);
		} //W3C  
		document.getElementById("showScanImg").onmousewheel = scrollFunc; //IE/Opera/Chrome  

		function scrollFunc(evt) {
			return false;
		}
	})
	$("#showImg").mouseout(function() {
		if(document.getElementById("showScanImg").addEventListener) {
			document.getElementById("showScanImg").addEventListener('DOMMouseScroll', scrollFunc, false);
		} //W3C  
		document.getElementById("showScanImg").onmousewheel = scrollFunc; //IE/Opera/Chrome  

		function scrollFunc(evt) {
			return true;
		}
	})
}]);