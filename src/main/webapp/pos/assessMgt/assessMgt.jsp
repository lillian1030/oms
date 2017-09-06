<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--评价管理页面-->
<div class="content-wrapper  fn-clear" style="margin-bottom: 150px;">
	<div class="wx-content pdl20 col-md-11 pr0">
		<div class="oms-tab">
			<ul class="fn-clear">
				<li ng-class="{'oms-tab-active':evaluateComment==''}" ng-click="optEvaluateComment('')">全部评价({{evaluate.evaluateCount}})</li>
				<li ng-class="{'oms-tab-active':evaluateComment=='0'}" ng-click="optEvaluateComment('0')">好评({{evaluate.good}})</li>
				<li ng-class="{'oms-tab-active':evaluateComment=='1'}" ng-click="optEvaluateComment('1')">中评({{evaluate.midder}})</li>
				<li ng-class="{'oms-tab-active':evaluateComment=='2'}" ng-click="optEvaluateComment('2')">差评({{evaluate.bad}})</li>
			</ul>
		</div>
		<div class="wx-oms-search fn-clear">
			<div class="fn-left wx-oms-searcha mgr20">
				<span>微店：</span>
				<select ng-options="shops.orgId as shops.shopName for shops in shopList" ng-model="orgId">
                	<option value="">所有店铺</option>
                </select>
			</div>
			<!--<div class="fn-left wx-oms-searchb mgr20 fn-clear">
				<span>评价时间：</span>
				<input class=" laydate-icon form-control" style="display: inline-block;width:120px"  id="startTime" name="startTime" type="text" id="data" onclick="laydate()" name="startTime" ng-value="startTime" ng-model="startTime" readonly="readonly" placeholder="开始时间" style="height:28px;padding-right:0px ;" />
				<span class="">—</span>
				<input class=" laydate-icon form-control" style="display: inline-block;width:120px" id="endTime" name="endTime" type="text" id="data" onclick="laydate()" name="endTime" ng-value="endTime" ng-model="endTime" readonly="readonly" placeholder="结束时间" style="height:28px;padding-right:0px ;" />
			</div>-->
			
			
			<div class="fn-left wx-oms-searchb mgr20 fn-clear">
				<span>评价时间：</span>
				<input class=" laydate-icon form-control" style="display: inline-block;width:120px;height:28px;padding-right:0px ;"  id="startTime" name="startTime" type="text"  placeholder="开始时间" />
				<span class="">—</span>
				<input class=" laydate-icon form-control" style="display: inline-block;width:120px;height:28px;padding-right:0px ;" id="endTime" type="text" placeholder="结束时间"  />
			</div>
			<!-- <div class="fn-left wx-oms-searchc mgr20">
				<span>评价：</span>
				<select name="">
					<option value="">全部</option>
				</select>
			</div> -->
			<button class="search-btn-gray" ng-click="getEvaluate()">
				查询
			</button>
		</div>
		<table class="table assess-table table-hover table-striped table-bordered">
			<tr>
				<th class="col-md-2">评价</th>
				<th class="col-md-4">评论</th>
				<th class="col-md-2">评价人</th>
				<th class="col-md-2">商品信息</th>
				<th class="col-md-2">微店</th>
			</tr>
			<tr ng-repeat="evaluate in evaluateList">
				<td>
					<p ng-if="evaluate.evaluateLevel == '1'">
						<i class="fa fa-star assess-star assess-star-good " aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
					</p>
					<p ng-if="evaluate.evaluateLevel == '2'">
						<i class="fa fa-star assess-star assess-star-good " aria-hidden="true"></i>
						<i class="fa fa-star assess-star assess-star-good " aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
					</p>
					<p ng-if="evaluate.evaluateLevel == '3'">
						<i class="fa fa-star assess-star assess-star-good " aria-hidden="true"></i>
						<i class="fa fa-star assess-star assess-star-good " aria-hidden="true"></i>
						<i class="fa fa-star assess-star assess-star-good " aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
					</p>
					<p ng-if="evaluate.evaluateLevel == '4'">
						<i class="fa fa-star assess-star assess-star-good " aria-hidden="true"></i>
						<i class="fa fa-star assess-star assess-star-good " aria-hidden="true"></i>
						<i class="fa fa-star assess-star assess-star-good " aria-hidden="true"></i>
						<i class="fa fa-star assess-star assess-star-good " aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
					</p>
					<p ng-if="evaluate.evaluateLevel == '5'">
						<i class="fa fa-star assess-star assess-star-good " aria-hidden="true"></i>
						<i class="fa fa-star assess-star assess-star-good " aria-hidden="true"></i>
						<i class="fa fa-star assess-star assess-star-good " aria-hidden="true"></i>
						<i class="fa fa-star assess-star assess-star-good " aria-hidden="true"></i>
						<i class="fa fa-star assess-star assess-star-good " aria-hidden="true"></i>
					</p>
					<p class="mgt15 asses-type" ng-if="evaluate.evaluateComment == '0'">好评</p>
					<p class="mgt15 asses-type" ng-if="evaluate.evaluateComment == '1'">中评</p>
					<p class="mgt15 asses-type" ng-if="evaluate.evaluateComment == '2'">差评</p>
				</td>
				<td class="assessTd">
					<div  ng-class="{'fn-left':evaluate.isReply=='0'}">
						<div ng-repeat="detail in evaluate.evaluateDetail">
							<p class="assess-content asses-type" ng-if="detail.evaluateType == '0' || detail.evaluateType == '1'">{{detail.evaluateContext}}</p>
							<p class="assess-response-content mgt10" ng-if="detail.evaluateType == '2'">
								<span>[回复]:</span>
								<span>{{detail.evaluateContext}}</span>
							</p>
						</div>
						<p class="assess-time mgt10 am-ft-gray">{{evaluate.evaluateTime}}</p>
					</div>
					<button class="response-btn-blue fn-right" ng-if="evaluate.isReply=='0'" ng-click="showReplyWindow(evaluate.evaluateId,evaluate.evaluateDetail[0].evaluateMemberId,$event)">
						回复
					</button>
				</td>
				<td>
					<img ng-src="{{evaluate.evaluateDetail[0].headpicpath}}" class="assess-logo" alt="" />
					<span class="asses-type mgl15">{{evaluate.evaluateDetail[0].memberName}}</span>
				</td>
				<td>
					<p class="assess-pro-name">{{evaluate.proName}}</p>
					<p class="assess-pro-price">{{evaluate.colorName}}&nbsp;&nbsp;&nbsp;{{evaluate.sizeName}}</p>
				</td>
				<td>
					<img ng-src="{{evaluate.shopLogo}}" class="assess-shop-logo" alt="" />
					<span class="asses-type mgl5">{{evaluate.shopName}}</span>
				</td>
			</tr>
		</table>
		<div class="assess-dialog big-triangle fn-hide" >
			<textarea name="" class="assess-response fn-left" rows="" cols="" ng-model="evaluateContext"></textarea>
			<a href="javascript:;" class="fn-right" ng-click="closeResponDialog($event)">
				<img src="../static/base/images/closelogo.png" alt="" />
			</a>
			<span class="word-count">0/500字</span>
			<button class="response-btn-blue assess-dialog-btn mgl10 fn-left" ng-click="reply()">
				发表回复
			</button>
		</div>
		<!--分页 start-->
	<div class="pagelist priv-pagelist">
	    <div id="paging"></div>
	</div>
<!--分页 end-->
	</div>
	
</div>
<!--评价管理页面-->