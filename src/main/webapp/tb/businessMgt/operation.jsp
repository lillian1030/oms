<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!-- <a href="javascript:;" class="line-btn forwardTop-goBack" ng-if="type=='1'" ng-click="gobWorkBench()" >返回</a> -->
<div class="content-wrapper content-wrapper-itemshow content-wrapper-itemshow2">
	<div class="fn-clear"></div>
	<div class="ManColTable col-lg-12">
		<!-- 商品列表 -->
		<div>
			<div class="AddproTabnav">
				<div class="tab-item " ng-class="{true:'tabactive'}[model.isShiftTab=='1']"  ng-click="shiftShopTab('1')">在册商户<span ng-if="model.isShiftTab=='1'">({{count1}})</span></div>
				<div class="tab-item" ng-class="{true:'tabactive'}[model.isShiftTab=='2']" ng-click="shiftShopTab('2')">暂停商户<span ng-if="model.isShiftTab=='2'">({{count2}})</span></div>
				<div class="tab-item" ng-class="{true:'tabactive'}[model.isShiftTab=='3']" ng-click="shiftShopTab('3')">终止商户<span ng-if="model.isShiftTab=='3'">({{count3}})</span></div>
				<div class="tab-item" ng-class="{true:'tabactive'}[model.isShiftTab=='4']" ng-click="shiftShopTab('4')">全部商户<span ng-if="model.isShiftTab=='4'">({{count4}})</span></div>
				<div class="fn-clear"></div>
			</div>
			<div>
			<div class="saleSearch">
						<form id='search'>
							<div class="clientInfo  fn-clear">
								<div class="artDes_seach fn-clear">
									<p class="fn-left pdr20 ">
										<span>商户名称：</span>
										<select id="comCiaList" class="selectpicker" data-live-search="true" name="orgId" ng-model="search.orgId">
											<option value=" ">请选择</option>
										</select>
									</p>
									<p class="fn-left pdr20 ">
										<span>负责商务：</span>
										<input type="text"  ng-model='search.signName'/>
									</p>
								</div>
								<div  class="artDes_seach fn-clear">
									<p class="fn-left pdr20 mgt10" >
										<span>服务区域：</span>
										<select ng-options="n.areaName as n.areaName for n in departAreaList" ng-model="search.serviceArea" ng-change="getDepart()">
											<option value=" ">请选择</option>
										</select>
									</p>
									<p class="fn-left pdr20 mgt10" >
										<span>服务部门：</span> 
										<select class="col-md-2 mgr10" ng-options="n.departId as n.departName for n in parts1" ng-model="selectKe1" ng-change="departSelect(selectKe1,1)">
											<option value="">请选择</option>
				                        </select>
				                        <select class="col-md-2 mgr10" ng-show="parts2.length != 0" ng-options="x.departId as x.departName for x in parts2" ng-model="selectKe2" ng-change="departSelect(selectKe2,2)">
											<option value="">请选择</option>
				                        </select>
				                        <select class="col-md-2 mgr10" ng-show="parts3.length != 0" ng-options="a.departId as a.departName for a in parts3" ng-model="selectKe3" ng-change="departSelect(selectKe3,3)">
											<option value="">请选择</option>
				                        </select>
				                         <select class="col-md-2 mgr10" ng-show="parts4.length != 0" ng-options="a.departId as a.departName for a in parts4" ng-model="selectKe4" ng-change="departSelect(selectKe4,4)">
											<option value="">请选择</option>
				                        </select>
									</p>
									<p class="fn-left pdl15 mgt10">
										<button class="selectContractBtn" ng-click="getContracts()">查询</button>
									</p>
								</div>
							</div>
						</form>
					</div>
					<div class="productCenterInfo" >
						<table class="table clientTable">
							<tr>
								<th scope="col" >合同编号</th>
								<th scope="col" >商户名称</th>
								<th scope="col" >服务费用</th>
								<th scope="col" >服务日期</th>
								<th scope="col" >负责商务</th>
								<th scope="col" >服务区域</th>
								<th scope="col" >服务部门</th>
								<th scope="col" >任务状态</th>
								<th scope="col" >操作</th>
							</tr>
							<tr  ng-repeat='contract in contractList'>
								<td>{{contract.contractNum}}</td>
								<td class="fn-clear pl0 pr0 pt0 pb0">
									{{contract.orgInfo.shopName}}
								</td>
								<td>{{contract.taskInfo.serviceAmount}}</td>
								<td>
									{{contract.taskInfo.beginDate}}至{{contract.taskInfo.endDate}}
								</td>
								<td class="deepColor">{{contract.userName}}</td>
								<td >{{contract.taskInfo.serviceArea}}</td>
								<td >{{contract.taskInfo.departNameTree}}</td>
								<td ng-if="contract.taskInfo.taskStatus=='0'">待财务确认</td>
								<td ng-if="contract.taskInfo.taskStatus=='1'">待分配区域</td>
								<td ng-if="contract.taskInfo.taskStatus=='2'">待分配人员</td>
								<td ng-if="contract.taskInfo.taskStatus=='3'">待人员确认</td>
								<td ng-if="contract.taskInfo.taskStatus=='4'">服务中</td>
								<td ng-if="contract.taskInfo.taskStatus=='5'">暂停申请</td>
								<td ng-if="contract.taskInfo.taskStatus=='6'">已暂停</td>
								<td ng-if="contract.taskInfo.taskStatus=='7'">已完成</td>
								<td ng-if="contract.taskInfo.taskStatus=='8'">已续签</td>
								<td><a href="javascript:;" ng-click="showLog(this)">查看</a></td>
							</tr>
						</table>
						<div class="pagelist priv-pagelist">
							<div id="paging"></div>
						</div>
					</div>
				</div>
				<div class="fn-clear"></div>
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