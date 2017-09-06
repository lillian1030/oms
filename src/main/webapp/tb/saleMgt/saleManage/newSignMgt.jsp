<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!-- <a href="javascript:;" class="line-btn forwardTop-goBack" ng-if="type=='1'" ng-click="gobWorkBench()" >返回</a> -->
<div class="content-wrapper content-wrapper-itemshow content-wrapper-itemshow2">
	<div class="fn-clear"></div>
	<div class="ManColTable col-lg-12">
		<!-- 商品列表 -->
		<div>
				<div>
					<div class="AddproTabnav">
						<div class="tab-item tabactive">新签合同({{count}})</div>
						<a href="javascript:;" class="btn fn-right btn-primary"  ng-click="addData('newSignMgt','contractAdd',{},'2')">添加合同</a>
						<div class="fn-clear"></div>
					</div>
					<div class="saleSearch">
						<form id='search'>
							<div class="clientName">
								<span>合同编号：</span>
								<input type="text" ng-model="search.contractNum" name='inputId' placeholder="请输入合同编号" style="width: 200px;"/>
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
								<p class="fn-left pdr20 mgt20">
									<span>商务人员：</span>
									<input type="text" ng-model="search.signName" style="height: 30px;"/>
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
							<th>商务人员</th>
							<th>合同状态</th>
							<th scope="col" width="10%">查看</th>
						</tr>
						<tr class="inServer" ng-repeat="contract in contractList">
							<td>{{contract.contractNum}}</td>
							<td>{{contract.orgInfo.shopName}}</td>
							<td>{{contract.productType}}</td>
							<td>{{contract.totalAmount}}</td>		
							<td>{{contract.sumContractPay}}</td>
							<td>{{contract.userName}}</td>
							<td ng-if="contract.contractStatus=='0'">待审核</td>
							<td ng-if="contract.contractStatus=='1'">已审核</td>
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