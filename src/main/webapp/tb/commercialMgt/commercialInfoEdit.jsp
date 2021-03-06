<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
<div class="content-wrapper content-forwardAdd-wrapper pb20">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">修改商户</h2>
		<a href="javascript:;" class="line-btn fn-right" ng-click="goback()">返回</a>
	</div>
	<div class="fn-clear"></div>
	<section class="container-fluid">
		<form id="merchantEditForm">
			<div class="row">
				<div class="prodet-nav">
					<div class="prodet-box">
						<!-- row1 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14 mgt25">
								<em class="am-ft-red mgr5">*</em>商户logo：
							</div>
							<div class="col-md-3 memImg mgl0">
								<input type="file" ngf-select="uploadshopLogoa($files)" />
								<img class="media-object" ng-src="{{orgInfo.shopLogo}}"  width="80" alt="请选择商户logo" id="shopLogoa">
							</div>
							<p class="am-ft-red note-brandAdd">(请上传700*700以上图片，小于3M)</p>
						</div>
						<!-- row2 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>商户全称：</div>
							<div class="col-md-3 form-group needValInfo">
								<input type="text" class="col-md-8 text-overflow" name="shopName" placeholder="" ng-value="orgInfo.shopName" />
							</div>
						</div>

						<!-- row2 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14">商户简介：</div>
							<div class="col-md-3 form-group needValInfo">
								<textarea class="mgb0" name="shopInfo">{{orgInfo.shopInfo}}</textarea>
							</div>
						</div>
						<!-- row3 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14">通讯地址：</div>
							<div class="col-md-8 form-group needValInfo">
								<select class="col-md-3 mgr5" ng-model="orgInfo.province" name="province" id="provinceA" ng-change="shopList[0].district='';shopList[0].city='';initprovinces()">
									<option value=""></option>
									<option ng-repeat="province in provinces"  value="{{province.name}}">{{province.name}}</option>
								</select>
								<select class="col-md-3 mgr5" ng-model="orgInfo.city" name="city" id="cityA" ng-change="shopList[0].district='';initcitys()">
									<option value=""></option>
									<option ng-repeat="city in citys[provinceId]" ng-selected="orgInfo.city==city.name" value="{{city.name}}">{{city.name}}</option>
								</select>
								<select class="col-md-3 mgr5" ng-model="orgInfo.district" name="district" id="districtA">
									<option value=""></option>
									<option ng-repeat="district in districts[cityId]" ng-selected="orgInfo.district==district.name" value="{{district.name}}">{{district.name}}</option>
								</select>
							</div>
						</div>
						<!--row4-->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14">详细地址：</div>
							<div class="col-md-3 form-group needValInfo">
								<input type="text" class="col-md-8 text-overflow" value="{{orgInfo.shopAddr}}" name="shopAddr" placeholder="">
							</div>
						</div>
						<!-- row5 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14">联系人：</div>
							<div class="col-md-3 form-group needValInfo">
								<input type="text" class="col-md-8 text-overflow"  ng-value="orgInfo.contacts" name="contacts" placeholder="">
							</div>
						</div>
						<!-- row6 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14">联系电话：</div>
							<div class="col-md-3 form-group needValInfo">
								<input type="text" class="col-md-8 text-overflow" ng-value="orgInfo.shopTel" name="shopTel" placeholder="">
							</div>
						</div>
						<!-- row7 -->
						<!-- row8 -->
						<!-- <div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14">运营人员：</div>
							<div class="col-md-3 form-group needValInfo">
								<select class="col-md-8" name="userIds">
									<option  value="">请选择</option>
									<option ng-repeat="user in userList" ng-selected="orgInfo.userId==user.userId" ng-value="user.userId">{{user.trueName}}</option>
								</select>
							</div>
						</div> -->
					</div>
				</div>
			</div>
			<button type="button" class="btn btn-primary addBrandBtn" ng-click="sureToSaveEdit(orgInfo.shopLogo)">确认修改</button>
			<button type="button" class="btn btn-default mgl10" ng-click="goback()">取消</button>
		</form>
	</section>
</div>