<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--添加人员-->
	    <!--------------- Content start ----------------->
    <div class="content-wrapper content-wrapper-commerciaInfo mgb15">
        <div class="col-md-11 pageTitl">
            <h2 class="am-ft-16 fn-left">添加人员</h2>
            <a href="javascript:;" class="line-btn fn-right" ng-click="goBack()">返回</a>
        </div>
        <div class="fn-clear"></div>
		<form id="memberAdd">
        <div class="ManColTable col-lg-12">
            <div class="commercia-info mgb20 pdl15">
            	<!-- row1 -->
                <!--<div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>角色类型：</div>
                    <div class="col-md-4 form-group">
                         <select class="col-md-8" ng-model="addMembers.memberType" ng-options="x.id as x.name for x in memberTypes">
							<option value="">请选择</option>
                        </select>
                    </div>
                </div>-->
                <!-- row1 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>手机号：</div>
                    <div class="col-md-4 form-group needValInfo">
                        <input type="text" class="col-md-7 text-overflow" name="" placeholder="" value="" ng-model="addMembers.userName" ng-blur="checkUserName()"/>
	                    <span class="error" ng-show="userNameWarn">该用户已存在！</span>
	                    <%--<p class="morenote mgl10">请输入11位手机号</p>--%>
                    </div>
                </div>
                <!-- row2 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>初始密码：</div>
                    <div class="col-md-4 form-group needValInfo">
                        <input type="password" class="col-md-8 text-overflow" name="" placeholder="" value="" ng-model="addMembers.password" />
                    </div>
                </div>
                <!-- row3 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>昵称：</div>
                    <div class="col-md-4 form-group needValInfo">
                        <input type="text" class="col-md-7 text-overflow" name="" placeholder=" " value="" ng-model="addMembers.trueName" />
                    </div>
                </div>
                <!-- row4 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14">邮箱：</div>
                    <div class="col-md-4 form-group needValInfo">
                        <input type="text" class="col-md-8 text-overflow" name="" placeholder=" " value="" ng-model="addMembers.email" />
                    </div>
                </div>
                <!-- row5 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>部门：</div>
                    <div class="col-md-4 form-group needValInfo" ng-show="departNameInput">
                        <input type="text" class="col-md-8 text-overflow" name="departName" placeholder="" value="" />
                    </div>
                    <div class="col-md-9 form-group needValInfo" ng-hide="departNameInput">
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
                <!-- row6 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>职位：</div>
                    <div class="col-md-4 form-group needValInfo">
                        <select ng-options="role.roleId as role.roleName for role in roles" ng-model="roleId" class="col-md-8">

                        </select>
                    </div>
                </div>
                <div class="fn-clear"></div>
            </div>
            </form>
            <button type="button" class="btn btn-primary addBrandBtn" ng-click="addUser()">确认添加</button>
            <button type="button" class="btn btn-default mgl10" ng-click="goBack()">取消</button>
            <div class="fn-clear"></div>
        </div>
        <div class="fn-clear"></div>
    </div>

