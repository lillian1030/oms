<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--添加人员-->
	    <!--------------- Content start ----------------->
    <div class="content-wrapper content-wrapper-commerciaInfo mgb15">
        <div class="col-md-11 pageTitl">
            <h2 class="am-ft-16 fn-left">添加部门</h2>
            <a href="javascript:;" class="line-btn fn-right" ng-click="goBack()">返回</a>
        </div>
        <div class="fn-clear"></div>
		<form id="addDpartForm">
	        <div class="ManColTable col-lg-12">
	            <div class="commercia-info mgb20 pdl15">
	                <!-- row1 -->
	                <div class="row">
	                    <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>部门名称：</div>
	                    <div class="col-md-3 form-group needValInfo">
	                        <input type="text" class="col-md-10 text-overflow" name="departName" placeholder="" value="" ng-model="departName" />
	                    </div>
	                </div>
	                <!-- row2 -->
	                <div class="row">
	                    <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>主管昵称：</div>
	                    <div class="col-md-3 form-group needValInfo">
	                        <input type="text" class="col-md-10 text-overflow" name="trueName" placeholder="" value="" ng-model="trueName" />
	                    </div>
	                </div>
	                <!-- row3 -->
	                <div class="row">            
	                    <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>主管类型：</div>
	                    <div class="col-md-3 form-group">
	                        <select class="col-md-8" name="roleId" ng-model="mgType" ng-options="x.id as x.name for x in departTypea">
								<option value="">请选择</option>
	                        </select>
	                    </div>
	                </div>
	                <!-- row4 -->
	                <div class="row">
	                    <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>主管手机号：</div>
	                    <div class="col-md-5 form-group needValInfo">
	                        <input type="text" class="col-md-8 text-overflow" name="userName" placeholder="" value="" ng-model="userName" ng-blur="checkUserName()"/>
	                        <span class="error mgt10 mgl5" ng-show="userNameWarn" style="display: block;">该用户已存在！</span>
	                    </div>
	                </div>
	                <!-- row5 -->
	                <div class="row">
	                    <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>初始密码：</div>
	                    <div class="col-md-3 form-group needValInfo">
	                        <input type="password" class="col-md-10 text-overflow" name="passWord" placeholder=" " value="" ng-model="passWord" />
	                    </div>
	                </div>
	                <!-- row6 -->
	                <div class="row" ng-hide="showgroupInput">
	                    <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>上级部门：</div>
	                    <div class="col-md-9 form-group needValInfo">
	                        <select class="col-md-3 mgr10" ng-options="n.departId as n.departName for n in parts1" ng-model="selectDepartId1" ng-change="sortIdChange(selectDepartId1,1)">
								<option value="">总部</option>
	                        </select>
	                        <select class="col-md-3 mgr10" ng-show="parts2.length != 0" ng-options="x.departId as x.departName for x in parts2" ng-model="selectDepartId2" ng-change="sortIdChange(selectDepartId2,2)">
								<option value="">请选择</option>
	                        </select>
	                        <select class="col-md-3 mgr10" ng-show="parts3.length != 0" ng-options="a.departId as a.departName for a in parts3" ng-model="selectDepartId3" ng-change="sortIdChange(selectDepartId3,3)">
								<option value="">请选择</option>
	                        </select>
	                        <select class="col-md-2 mgr10" ng-show="parts4.length != 0" ng-options="z.departId as z.departName for z in parts4" ng-model="selectDepartId4" ng-change="sortIdChange(selectDepartId4,4)">
								<option value="">请选择</option>
	                        </select>
	                        <select class="col-md-2 mgr10" ng-show="parts5.length != 0" ng-options="z.departId as z.departName for z in parts5" ng-model="selectDepartId5">
								<option value="">请选择</option>
	                        </select>
	                    </div>
	                </div>
	                <!-- row7 -->
	                <div class="row">
	                    <div class="nowraps-text inprodet-titl am-ft-14">部门区域：</div>	                   
	                    <div class="col-md-2 form-group" ng-show="showAreaSelect">
	                        <select class="col-md-12" name="departArea" ng-model="departArea" ng-options="x.areaName for x in departAreas">
								<option value="">请选择</option>
	                        </select>
	                    </div>
	                    <div class="col-md-2 form-group needValInfo" ng-show="showAreaInput">
	                        <input id="departArea2" type="text" class="col-md-12 text-overflow" style="height: 28px;" name="departArea" placeholder="请输入区域名称" value=""  />
	                    </div>
	                    <a href="javascript:;" class="addNewAraeBtn" ng-click="addNewAraeBtn()">新增区域</a>
	                </div>
	                <!-- row8 -->
	                <div class="row">
	                    <div class="nowraps-text inprodet-titl am-ft-14">部门职责：</div>	                   
	                    <div class="col-md-2 form-group" ng-show="showAreaSelecta">
	                        <select class="col-md-12" name="departType" ng-model="departType" ng-options="x.typeName for x in departTypeList">
								<option value="">请选择</option>
	                        </select>
	                    </div>
	                    <div class="col-md-2 form-group needValInfo" ng-show="showAreaInputa">
	                        <input id="departType" type="text" class="col-md-12 text-overflow" style="height: 28px;" name="departType" placeholder="请输入业务职责" value=""  />
	                    </div>
	                    <a href="javascript:;" class="addNewAraeBtn" ng-click="addNewTypeBtn()">业务职责</a>
	                </div>
	                <!-- row9 -->
	                <div class="row">
	                    <div class="nowraps-text inprodet-titl am-ft-14">主管邮箱：</div>
	                    <div class="col-md-3 form-group needValInfo">
	                        <input type="text" class="col-md-10 text-overflow" name="email" placeholder=" " value="" />
	                    </div>
	                </div>
	                <div class="fn-clear"></div>
	            </div>
	            <button type="button" class="btn btn-primary addBrandBtn" ng-click="addDepart()">确认添加</button>
	            <button type="button" class="btn btn-default mgl10" ng-click="goBack()">取消</button>
	            <div class="fn-clear"></div>
	        </div>
	       </form> 
        <div class="fn-clear"></div>
    </div>

