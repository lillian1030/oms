<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!-- <a href="javascript:;" class="line-btn forwardTop-goBack" ng-if="type=='1'" ng-click="gobWorkBench()" >返回</a> -->
<div class="content-wrapper content-wrapper-itemshow content-wrapper-itemshow2">
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
	<div class="fn-clear"></div>
	<div class="ManColTable col-lg-12">
		<!-- 商品列表 -->
		<div>
				<div class="AddproTabnav AddproTabnava">
					<div class="tab-item" ng-class="{true:'tabactive'}[productTab=='1']" ng-click="shiftProductTab('1')">待续签合同<span ng-if="productTab=='1'">({{count1}})</span></div>
					<div class="tab-item" ng-class="{true:'tabactive'}[productTab=='2']" ng-click="shiftProductTab('2')">已续签合同<span ng-if="productTab=='2'">({{count2}})</span></div>
					<div class="tab-item" ng-class="{true:'tabactive'}[productTab=='3']" ng-click="shiftProductTab('3')">暂停合同<span ng-if="productTab=='3'">({{count3}})</span></div>
					<div class="tab-item" ng-class="{true:'tabactive'}[productTab=='4']" ng-click="shiftProductTab('4')">完结合同<span ng-if="productTab=='4'">({{count4}})</span></div>
					<div class="tab-item" ng-class="{true:'tabactive'}[productTab=='5']" ng-click="shiftProductTab('5')">全部合同<span ng-if="productTab=='5'">({{count5}})</span></div>
					<a href="javascript:;" class="btn fn-right btn-primary"  ng-click="addData('saleManage','contractAdd',{},'2')">添加合同</a>
					<div class="fn-clear"></div>
				</div>
				<div>
					<div class="saleSearch">
						<form id='search'>
							<div class="clientName">
								<span>合同编号：</span>
								<input type="text" ng-model="search.contractNum" name='inputId' placeholder="请输入合同编号" />
							</div>
							<div class="clientInfo fn-clear">
								<p class="fn-left pdr20 mgt20">
									<span>商户名称：</span>
									<select id="comCiaList" class="selectpicker" data-live-search="true" name="orgId" ng-model="search.orgId">
										<option value=" ">请选择</option>
									</select>
								</p>
								<p class="fn-left pdr20 mgt20" >
									<span>产品类型：</span> 
									<select name="productType" ng-model="search.productType">
										<option value=''></option>
										<option value="客服">客服</option>
										<option value="美工">美工</option>
										<option value="运营<">运营</option>
										<option value="培训">培训</option>
									</select>
								</p>
								<p class="fn-left pdr20 mgt20" >
									<span>续签人员：</span> 
									<input type="text" ng-model="search.reSignUserName" style="height: 30px;"/>
								</p>
								<p class="fn-left pdl15 mgt20">
									<button class="selectContractBtn" ng-click="getContracts()">查询</button>
								</p>
							</div>
						</form>
					</div>
					<div class="productCenterInfo" >
						<table class="table contractTable">
						<tr>
							<th>合同编号</th>
							<th>商户名称</th>
							<th>产品类型</th>
							<th>合同金额</th>
							<th>已收金额</th>
							<th>续签</th>
							<th scope="col" width="10%">操作</th>
						</tr>
						<tr class="inServer" ng-repeat="contract in contractList">
							<td>{{contract.contractNum}}</td>
							<td>{{contract.orgInfo.shopName}}</td>
							<td>{{contract.productType}}</td>
							<td>{{contract.totalAmount}}</td>		
							<td>{{contract.sumContractPay}}</td>
							<td>{{contract.reSignUserName}}</td>
							<td>
								<a href="javascript:;" ng-click="showLog(this)">查看</a>
							</td>
						</tr>	
					</table>
					<div class="pagelist priv-pagelist">
						<div id="paging1"></div>
					</div>
					</div>
				</div>
				<div class="fn-clear"></div>
			<!--分页 start-->
			<!--分页 end-->
		</div>
		<!-- /商品列表 -->
	</div>
	<div class="fn-clear"></div>
</div>
<!--发布商品弹框-->
<script type="text/javascript">
	$(function(){
		$('.selectpicker').selectpicker('refresh');
	})
</script>