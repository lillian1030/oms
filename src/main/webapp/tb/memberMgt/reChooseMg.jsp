<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
	<!--------------- Content start ----------------->
    <div class="content-wrapper content-wrapper-commerciaInfo mgb15">
        <div class="col-md-11 pageTitl">
            <h2 class="am-ft-16 fn-left">更换主管</h2>
            <a href="javascript:;" class="line-btn fn-right" ng-click="goBack()">返回</a>
        </div>
        <div class="fn-clear"></div>        
		<form id="chosDepartMg">
	        <div class="ManColTable col-md-12">
	        	<div class="AddproTabnav">
		        <div class="tab-item" ng-class="{true:'tabactive'}[productTab=='1']" ng-click="shiftProductTab('1')">添加新主管</div>
		        <div class="tab-item" ng-class="{true:'tabactive'}[productTab=='2']" ng-click="shiftProductTab('2')">选择新主管</div>
			</div>
			<div class="fn-clear"></div> 
            <div class="commercia-info depart-info" ng-show="departInfoTab">
                <!-- row1 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>部门主管昵称：</div>
                    <div class="col-md-3 form-group needValInfo">
                        <input type="text" class="col-md-10 text-overflow" name="trueName" value=""  />
                    </div>
                </div>
                <!-- row2 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>主管手机号：</div>
                    <div class="col-md-5 form-group needValInfo">
                        <input type="text" class="col-md-6 text-overflow" name="userName" ng-model="userName" value=""  ng-blur="checkUserName()"/>
                        <span class="error mgt10 mgl5" ng-show="userNameWarn" style="display: block;">该用户已存在！</span>
                    </div>
                </div>
                <!-- row3 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>初始密码：</div>
                    <div class="col-md-3 form-group needValInfo">
                        <input type="text" class="col-md-10 text-overflow" name="passWord" value=""  />
                    </div>
                </div>
                <!-- row4 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14">主管邮箱：</div>
                    <div class="col-md-3 form-group needValInfo">
                        <input type="text" class="col-md-10 text-overflow" name="email" value=""  />
                    </div>
                </div>
                <div class="fn-clear"></div>
            </div>
            
            <div class="commercia-info depart-info" ng-hide="departInfoTab">
                <!-- row1 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>账号选择：</div>
                    <div class="col-md-3 form-group needValInfo">
                       <select class="col-md-12" ng-model="newmanagerUserId" ng-options="x.managerUserId as x.trueName for x in departMg">
						<option value="">请选择</option>
                       </select>
                    </div>
                </div>
            </div>    
            </form>
            <button type="button" class="btn btn-primary addBrandBtn" ng-click="saveChoose()">确认修改</button>
            <button type="button" class="btn btn-default mgl10" ng-click="goBack()">取消</button>
            <div class="fn-clear"></div>
        </div>
        <div class="fn-clear"></div>
    </div>

