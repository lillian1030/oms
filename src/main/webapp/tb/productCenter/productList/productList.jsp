<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<a href="javascript:;" class="line-btn forwardTop-goBack" ng-click="goback()" ng-if="userInfo.orgType == '6'">返回</a>
<div class="content-wrapper content-wrapper-itemshow content-wrapper-itemshow2">
	<div class="ManColTable  col-lg-12">
		<div class="forwardTop-content fn-left" ng-if="userInfo.orgType == '6'">
			<div class="forwardTop-left">
				<img ng-src="{{orgInfo.shopLogo}}" ng-if="orgInfo.shopLogo != '' " />
				<img src="http://static.qineasy.com/base/images/img_default_company.png" ng-if="orgInfo.shopLogo == '' " />
			</div>
			<div class="forwardTop-right">
				<div class="forwardTop-righttop">
					<p href="javascript:;" class="forwardTop-rightTitl">{{orgInfo.shopName}}</p>
					<div class="fn-clear"></div>
				</div>
				<p class="am-ft-black">
					<span class="stores-count">店铺数：<a href="javascript:;">{{orgInfo.shopNum}}个</a></span>
					<span class="mgl10">运营人员：{{orgInfo.userName}}<!-- <a href="javascript:;"
							class="mgl5 allotOprate">更换</a> --></span>
				</p>
				<p>联系电话：{{orgInfo.shopTel}}</p>
				<p>
					<span class="fn-left">详细地址：{{orgInfo.province}}{{orgInfo.city}}{{orgInfo.district}}{{orgInfo.shopAddr}}</span>
					<span class="fn-right am-ft-gray">商户添加时间：{{orgInfo.openDate}}</span>
				</p>
			</div>
		 </div>
	</div>

	<div class="fn-clear"></div>
	<div class="ManColTable col-lg-12">
		<!-- 商品列表 -->
		<div class="table-responsive">
			<div class="">
				<div class="AddproTabnav">
					<div class="tab-item  tabactive" ng-class="{true:'tabactive'}[productTab=='1']" ng-click="shiftProductTab('1')">全部商品({{proCount}})</div>
					<div class="tab-item" ng-class="{true:'tabactive'}[productTab=='2']" ng-click="shiftProductTab('2')">已发布({{publish}})</div>
					<div class="tab-item" ng-class="{true:'tabactive'}[productTab=='3']" ng-click="shiftProductTab('3')">未发布({{notPublish}})</div>
					<a href="javascript:;" class="btn fn-right btn-primary" ng-click="goRoute('productAdd',this)">添加商品</a>
					<div class="fn-clear"></div>
				</div>
				<!--商户缺省-->
				<div class="col-md-12 dafaultWapper" ng-if="proCount==0 && userInfo.orgType == '1'">
					<div class="loadingFormal">
						<img src="../static/base/images/icon_notice.png">
						<span style="font-size:16px;">您还没有添加商品<a href="javascript:;" class="mgl10" ng-click="goRoute('productAdd',this)">立即添加</a></span>
					</div>
				</div>
				<!--代运营缺省-->
				<div class="col-md-12 dafaultWapper" ng-if="proCount==0 && userInfo.orgType == '6'">
					<div class="loadingFormal">
						<img src="../static/base/images/icon_notice.png">
						<span style="font-size:16px;">该商户还没有添加商品</span>
					</div>
				</div>

				<div class="productCenterInfo" ng-show="productTab=='1'">
					<table class="table table-hover table-striped productTable" ng-if="proCount!=0">
						<tr>
							<th width="35%" colspan="2">商品</th>
							<th width="10%">基本信息</th>
							<th width="10%">素材</th>
							<th width="10%">主图</th>
							<th width="15%">PC/手机端展示</th>
							<th width="10%">状态</th>
							<th width="10%">操作</th>
						</tr>
						<!--未发布-->
						<tr ng-repeat="model in modelList" ng-model="model" ng-if="model.proModelid != undefined ">
							<td width="3%">
								<a href="javascript:;" ng-click="goRoute('productBaseInfo',this)">
									<img ng-if="model.mainPic==''" src="http://static.qineasy.com/base/images/img_default_goods.png" class="productImg" title="" alt="">
									<img ng-if="model.mainPic!=''" ng-src="{{model.mainPic}}" class="productImg" title="" alt="">
								</a>
							</td>
							<td class="comProducInfo" width="21%">
								<a href="javascript:;" class="productTitl" ng-click="goRoute('productBaseInfo',this)">{{model.proName}}</a>
								<p class="productTitl">{{model.proModelnum}}</p>
								<p><span>吊牌价：￥{{model.proPrice}}</span>
									<span class="mgl20">
                                		<!--分类：{{model.grandparentSortName}}/{{model.parentSortName}}/-->
                                		{{model.sortName}}</span>
								</p>
							</td>
							<td><i class="fa fa-line-check"></i></td>
							<td ng-if="model.aPic == ''"><img src="../static/base/images/icon_Line.png"></td>
							<td ng-if="model.aPic != ''"><i class="fa fa-line-check"></i></td>
							<td ng-if="model.mainPic == ''"><img src="../static/base/images/icon_Line.png"></td>
							<td ng-if="model.mainPic != ''"><i class="fa fa-line-check"></i></td>
							<td ng-if="model.pcAndMoblie == ''"><img src="../static/base/images/icon_Line.png"></td>
							<td ng-if="model.pcAndMoblie != ''"><i class="fa fa-line-check"></i></td>
							<td class="am-ft-red" ng-if="model.publishOrg == 0">未发布</td>
							<td class="" ng-if="model.publishOrg > 0">已发布<span style="color:#00AFD4;cursor: pointer;" ng-click="goRoute('productBaseInfo',this,'post')">{{model.publishOrg}}个店铺</span></td>
							<td>
								<a href="javascript:;" ng-click="goRoute('productBaseInfo',this)">商品详情</a>
								<a href="javascript:;" class="line-btn storeProRightPublishA" ng-click="getShop(this)">发布</a>
								<!-- <a href="javascript:;" class="line-btn" ng-click="releaseAgain()" ng-if="model.publishOrg > 0">重新发布</a> -->
							</td>
						</tr>
					</table>
				</div>
				<div class="productCenterInfo" ng-show="productTab=='2'">
					<table class="table table-hover table-striped productTable" ng-if="proCount!=0">
						<tr>
							<th width="35%" colspan="2">商品</th>
							<th width="10%">基本信息</th>
							<th width="10%">素材</th>
							<th width="10%">主图</th>
							<th width="15%">PC/手机端展示</th>
							<th width="10%">状态</th>
							<th width="10%">操作</th>
						</tr>
						<!--未发布-->
						<tr ng-repeat="model in modelList" ng-model="model" ng-if="model.proModelid != undefined ">
							<td width="3%">
								<a href="javascript:;" ng-click="goRoute('productBaseInfo',this)">
									<img ng-if="model.mainPic==''" src="http://static.qineasy.com/base/images/img_default_goods.png" class="productImg" title="" alt="">
									<img ng-if="model.mainPic!=''" ng-src="{{model.mainPic}}" class="productImg" title="" alt="">
								</a>
							</td>
							<td class="comProducInfo" width="21%">
								<a href="javascript:;" class="productTitl" ng-click="goRoute('productBaseInfo',this)">{{model.proName}}</a>
								<p class="productTitl">{{model.proModelnum}}</p>
								<p><span>吊牌价：￥{{model.proPrice}}</span><span class="mgl20"><!-- 分类：{{model.grandparentSortName}}/{{model.parentSortName}}/ -->{{model.sortName}}</span></p>
							</td>
							<td><i class="fa fa-line-check"></i></td>
							<td ng-if="model.aPic == ''"><img src="../static/base/images/icon_Line.png"></td>
							<td ng-if="model.aPic != ''"><i class="fa fa-line-check"></i></td>
							<td ng-if="model.mainPic == ''"><img src="../static/base/images/icon_Line.png"></td>
							<td ng-if="model.mainPic != ''"><i class="fa fa-line-check"></i></td>
							<td ng-if="model.pcAndMoblie == ''"><img src="../static/base/images/icon_Line.png"></td>
							<td ng-if="model.pcAndMoblie != ''"><i class="fa fa-line-check"></i></td>
							<td class="am-ft-red" ng-if="model.publishOrg == 0">未发布</td>
							<td class="am-ft-red" ng-if="model.publishOrg > 0">已发布<span style="color:#00AFD4;cursor: pointer;" ng-click="goRoute('productBaseInfo',this)">{{model.publishOrg}}个店铺</span></td>
							<td>
								<a href="javascript:;" ng-click="goRoute('productBaseInfo',this)">商品详情</a>
								<a href="javascript:;" class="line-btn storeProRightPublishA" ng-click="getShop(this)">发布</a>
								<!-- <a href="javascript:;" class="line-btn" ng-click="releaseAgain()" ng-if="model.publishOrg > 0">重新发布</a> -->
							</td>
						</tr>
					</table>
				</div>
				<div class="productCenterInfo" ng-show="productTab=='3'">
					<table class="table table-hover table-striped productTable" ng-if="proCount!=0">
						<tr>
							<th width="35%" colspan="2">商品</th>
							<th width="10%">基本信息</th>
							<th width="10%">素材</th>
							<th width="10%">主图</th>
							<th width="15%">PC/手机端展示</th>
							<th width="10%">状态</th>
							<th width="10%">操作</th>
						</tr>
						<!--未发布-->
						<tr ng-repeat="model in modelList" ng-model="model" ng-if="model.proModelid != undefined ">
							<td width="3%">
								<a href="javascript:;" ng-click="goRoute('productBaseInfo',this)">
									<img ng-if="model.mainPic==''" src="http://static.qineasy.com/base/images/img_default_goods.png" class="productImg" title="" alt="">
									<img ng-if="model.mainPic!=''" ng-src="{{model.mainPic}}" class="productImg" title="" alt="">
								</a>
							</td>
							<td class="comProducInfo" width="21%">
								<a href="javascript:;" class="productTitl" ng-click="goRoute('productBaseInfo',this)">{{model.proName}}</a>
								<p class="productTitl">{{model.proModelnum}}</p>
								<p><span>吊牌价：￥{{model.proPrice}}</span><span class="mgl20"><!-- 分类：{{model.grandparentSortName}}/{{model.parentSortName}}/ -->{{model.sortName}}</span></p>
							</td>
							<td><i class="fa fa-line-check"></i></td>
							<td ng-if="model.aPic == ''"><img src="../static/base/images/icon_Line.png"></td>
							<td ng-if="model.aPic != ''"><i class="fa fa-line-check"></i></td>
							<td ng-if="model.mainPic == ''"><img src="../static/base/images/icon_Line.png"></td>
							<td ng-if="model.mainPic != ''"><i class="fa fa-line-check"></i></td>
							<td ng-if="model.pcAndMoblie == ''"><img src="../static/base/images/icon_Line.png"></td>
							<td ng-if="model.pcAndMoblie != ''"><i class="fa fa-line-check"></i></td>
							<td class="am-ft-red" ng-if="model.publishOrg == 0">未发布</td>
							<td class="am-ft-red" ng-if="model.publishOrg > 0">已发布{{model.publishOrg}}个店铺</td>
							<td>
								<a href="javascript:;" ng-click="goRoute('productBaseInfo',this)">商品详情</a>
								<a href="javascript:;" class="line-btn storeProRightPublishA" ng-click="getShop(this)">发布</a>
								<!-- <a href="javascript:;" class="line-btn" ng-click="releaseAgain()" ng-if="model.publishOrg > 0">重新发布</a> -->
							</td>
						</tr>
					</table>
				</div>

				<div class="fn-clear"></div>
			</div>
			<!--分页 start-->
			<div class="fn-right priv-pagelist">
				<div id="paging"></div>
			</div>
			<!--分页 end-->
		</div>

		<!-- /商品列表 -->
	</div>
	<div class="fn-clear"></div>
</div>
<!--发布商品弹框-->
<div id="showShops5" class="showshopName setDayTargetL publishPro fn-hide">
	<div class="setDayTargetTitle publishTitle">
		<span>发布商品</span>
		<img class="closeDia" src="http://static.qineasy.com/base/images/closelogo.png" />
	</div>
	<div class="setDayTargetContent">
		<p class="willPublishStore">请选择要发布的店铺</p>
		<div class="allStoreName fn-clear">
			<div ng-repeat="x in publishInfoList" ng-click="chooseShop(x.orgId,x.shopType)" ng-if="x.publishStatus== '未发布'">
				<div class="storeName selec-stores {{x.orgId}}">
					<input type="hidden" value="{{x.orgId}}" />
					<img ng-if="x.shopType == 3" class="typelogo" src="../static/base/images/icon_logo_tmall.png" />
					<img ng-if="x.shopType == 2" class="typelogo" src="../static/base/images/icon_logo_taobao.png" />
					<img ng-if="x.shopType == 4" class="typelogo" src="../static/base/images/icon_logo_jindong.png" />
					<img ng-if="x.shopType=='0'" class="typelogo" src="../static/base/images/icon_1688.png" />
					<img ng-if="x.shopType=='1'" class="typelogo" src="../static/base/images/icon_AliExpress.png" />
					<img ng-if="x.shopType=='5'" class="typelogo" src="../static/base/images/icon_amazon.png" />
					<img src="../static/base/images/icon_selected.png" class="iconSelect fn-hide" />
					<span class="shopNameaa">{{x.shopName}}</span>
				</div>
			</div>
		</div>
	</div>
	<div class="publishFrame">
		<!--<button type="button" class="surePublishFrame" ng-click="publishPro()">发布</button>-->
		<button type="button" class="surePublishFrame" ng-click="goRoute2()">发布</button>
		<button type="button" class="publishFrameReset" ng-click="selectReset($event)">重置</button>
	</div>
</div>
<script type="text/javascript">
	$(function() {
		/* $(".storeProRightPublishA").click(function() {
			$('.setDayTargetLA').center().show();
			$('.maskBg').show();
		}) */
		$('.closeDia,.maskBg').click(function() {
			$('.setDayTargetLA,.publishPro,.maskBg').hide();
		});
		//类型选中效果
		/* $('.selec-stores').click(function() {
		    $(this).toggleClass('selectStoreName').siblings('.selec-stores');
		    $(this).children('.iconSelect').toggleClass('fn-hide');
		}); */
	})
	$(function() {
		//关闭弹窗
		$('.closedialog').click(function() {
			$('#updateFile,.maskBg').hide();
			$('.fodderMainTitle').val("")
		})
	})
</script>
<script type="text/javascript">
	$(".storeProBox").on("click", ".scan", function(event) {
		var imgSrc = $(this).parent().prev().attr("src");
		$(".showScanImg").show();
		$(".showScanImg img").attr("src", imgSrc).center();

		var imgindex = $(event.target).parents('.fodderMain').attr("index");
		$(".showScanImg img").attr('index', imgindex);
		if($(this).parents('.fodderMain').index() == 0) {
			$('#prevImg').hide();
			$('#nextImg').show();
		} else if($(this).parents('.fodderMain').index() == $('.fodderMain').length - 1) {
			$('#prevImg').show();
			$('#nextImg').hide();
		}
	});

	//图片预览切换 
	var w = 0;
	//上一张
	$('#prevImg').on("click", function(e) {
		//获取点击次数   
		var i = ++w;
		var imgSrc;
		var showIndex = parseInt($(".showScanImg img").attr('index'));
		$('#nextImg').show();
		console.info(Math.abs(showIndex - 1));
		if(Math.abs(showIndex - 1) == 0 || showIndex == 1) {
			$(".showScanImg img").attr('index', Math.abs(showIndex - 1));
			imgSrc = $('.fodderMain').eq(Math.abs(showIndex - 1)).find('img').attr("src");
			$(".showScanImg img").attr("src", imgSrc).center();
			$('#prevImg').hide();
		} else if(showIndex - 1 < 0) {
			e.stopPropagation();
		} else {
			$(".showScanImg img").attr('index', Math.abs(showIndex - 1));
			imgSrc = $('.fodderMain').eq(Math.abs(showIndex - 1)).find('img').attr("src");
			$(".showScanImg img").attr("src", imgSrc).center();
		}
	});
	//下一张
	$('#nextImg').on("click", function(e) {
		//获取点击次数   
		var i = ++w;
		var imgSrc;
		var showIndex = parseInt($(".showScanImg img").attr('index'));
		var fodLen = $('.fodderMain').length;
		$('#prevImg').show();
		console.info(showIndex + 1);
		if(showIndex + 1 == $('.fodderMain').length) {
			$(".showScanImg img").attr('index', showIndex + 1);
			imgSrc = $('.fodderMain').eq(showIndex + 1).find('img').attr("src");
			$(".showScanImg img").attr("src", imgSrc).center();
			$('#nextImg').hide();
		} else if(showIndex + 1 > $('.fodderMain').length) {
			e.stopPropagation();
			$(".showScanImg img").attr('index', fodLen - 1);
		} else {
			$(".showScanImg img").attr('index', showIndex + 1);
			imgSrc = $('.fodderMain').eq(showIndex + 1).find('img').attr("src");
			$(".showScanImg img").attr("src", imgSrc).center();
		}
	});
	//关闭预览弹窗
	$("#closeScanImg").click(function($event) {
		$(".showScanImg").hide();
		w = 0
	});
</script>