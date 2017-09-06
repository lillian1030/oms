<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!-- <a href="javascript:;" class="line-btn forwardTop-goBack" ng-if="type=='1'" ng-click="gobWorkBench()" >返回</a> -->
<div class="content-wrapper content-wrapper-itemshow content-wrapper-itemshow2">
	<div class="fn-clear"></div>
	<div class="ManColTable col-lg-12">
		<!-- 商品列表 -->
		<div>
				<div class="AddproTabnav">
					<div class="tab-item" ng-class="{true:'tabactive'}[productTab=='1']" ng-click="shiftProductTab('1')">待收款合同<span ng-if="productTab=='1'">({{count1}})</span></div>
					<div class="tab-item" ng-class="{true:'tabactive'}[productTab=='2']" ng-click="shiftProductTab('2')">已结清合同<span ng-if="productTab=='2'">({{count2}})</span></div>
					<div class="tab-item" ng-class="{true:'tabactive'}[productTab=='3']" ng-click="shiftProductTab('3')">待退款合同<span ng-if="productTab=='3'">({{count3}})</span></div>
					<div class="tab-item" ng-class="{true:'tabactive'}[productTab=='4']" ng-click="shiftProductTab('4')">全部合同<span ng-if="productTab=='4'">({{count4}})</span></div>
					<div class="fn-clear"></div>
				</div>
				<div>
					<div class="saleSearch">
						<form id='search'>
							<div class="clientName fn-clear">
								<p  class="fn-left pdr20 mgt20">
									<span>合同编号：</span>
									<input type="text" name='inputId' ng-model="search.contractNum" placeholder="请输入合同编号" />
								</p>
								<p class="fn-left pdr20 mgt20">
									<span>商户名称：</span>
									<select id="comCiaList" class="selectpicker" data-live-search="true" name="orgId" ng-model="search.orgId">
										<option value=" ">请选择</option>
									</select>
								</p>
								<p class="fn-left pdr20 mgt20" >
									<span>合同类型：</span> 
									<select name="productType" ng-model="search.contractType" style="width: 100px;">
										<option value=''>请选择</option>
										<option value='0'>新签</option>
										<option value='1'>续签</option>
									</select>
								</p>
							</div>
							<div class="clientInfo fn-clear">
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
									<span>负责商务：</span> 
									<input type="text" ng-model="search.signName" style="height: 30px;"/>
								</p>
								<p class="fn-left pdr20 mgt20" >
									<span>状态：</span> 
									<select name="productType" ng-model="search.contractStatus">
										<option value=''>请选择</option>
										<option value='0'>待审核</option>
										<option value='1'>已审核</option>
									</select>
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
							<th>类型</th>
							<th>合同编号</th>
							<th>商户名称</th>
							<th>产品类型</th>
							<th>合同金额</th>
							<th>已收金额</th>
							<th>商务人员</th>
							<th>合同状态</th>
							<th scope="col" width="10%">操作</th>
						</tr>
						<tr class="inServer" ng-repeat="contract in contractList">
							<td ng-if="contract.contractType=='0'">新</td>
							<td ng-if="contract.contractType=='1'">续</td>
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