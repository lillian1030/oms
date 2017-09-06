<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!-- <a href="javascript:;" class="line-btn forwardTop-goBack" ng-if="type=='1'" ng-click="gobWorkBench()" >返回</a> -->
<div class="content-wrapper content-wrapper-itemshow content-wrapper-itemshow2 saleSumary-wrapper">
	<div class="fn-clear"></div>
	<div class="ManColTable col-lg-12 saleDetail">
		
		<div class="col-lg-12 saleSummary service-nav" >
			<ul class="fn-clear">
				<li class="fn-left constractCount" >
					<p class="am-ft-18 am-ft-black">{{count}}</p>
					<p class="am-ft-12 am-ft-66">合同总数</p>
				</li>
				<li class="fn-left newclient " >
					<p class="am-ft-18 am-ft-black">{{calRs.sumServiceNum}}</p>
					<p class="am-ft-12 am-ft-66">席位总数</p>
				</li>
				<li class="fn-left moneyAmount" >
					<p class="am-ft-18 am-ft-f6">¥{{calRs.avgUnitPrice}}</p>
					<p class="am-ft-12 am-ft-66">席位平均单价</p>
				</li>
				<li class="fn-left moneyAmount " >
				<p class="am-ft-18 am-ft-f6">¥{{calRs.sumServiceAmount}}</p>
					<p class="am-ft-12 am-ft-66">服务费用总额</p>
				</li>
				
			</ul>
		</div>
		<!-- 商品列表 -->
		<div>
			<div class="AddproTabnav">
				<div class="tab-item " ng-class="{true:'tabactive'}[model.isShiftTab=='1']"  ng-click="shiftShopTab('1')">在册商户<span ng-if="model.isShiftTab=='1'">({{count1}})</span></div>
				<div class="tab-item" ng-class="{true:'tabactive'}[model.isShiftTab=='2']" ng-click="shiftShopTab('2')">暂停商户<span ng-if="model.isShiftTab=='2'">({{count2}})</span></div>
				<div class="tab-item" ng-class="{true:'tabactive'}[model.isShiftTab=='3']" ng-click="shiftShopTab('3')">完结商户<span ng-if="model.isShiftTab=='3'">({{count3}})</span></div>
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
									<p class="fn-left pdr20 " >
										<span>负责商务：</span>
										<input type="text"  ng-model='search.signName'/>
									</p>
									<p class="fn-left pdr20 " style="margin-left: 23px;">
										<span>类型：</span> 
										<select ng-model="search.serviceType">
											<option value=" ">请选择</option>
											<option value="0">值守</option>
											<option value="1">提成</option>
										</select>
									</p>
								</div>
								<div  class="artDes_seach fn-clear">
									<p class="fn-left pdr20 mgt10" >
										<span>服务区域：</span>
										<select ng-options="n.areaName as n.areaName for n in departAreaList" ng-model="search.serviceArea" ng-change="getDepart()">
											<option value=" ">请选择</option>
										</select>
									</p>
									<p class="fn-left pdr20 mgt10" style="margin-left: 10px; margin-right: 56px;">
										<span class="fn-left">服务部门：</span> 
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
									<p class="fn-left mgt10" style="margin-left: -28px;">
										<span>服务周期：</span> 
										<select ng-model="search.months">
											<option value=" ">请选择</option>
											<option value="1">一个月</option>
											<option value="2">二个月</option>
											<option value="3">三个月</option>
											<option value="4">四个月</option>
											<option value="5">五个月</option>
											<option value="6">六个月</option>
											<option value="7">七个月</option>
											<option value="8">八个月</option>
											<option value="9">九个月</option>
											<option value="10">十个月</option>
											<option value="11">十一个月</option>
											<option value="12">十二个月</option>
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
								<th scope="col" >类型</th>
								<th scope="col" >席位数</th>
								<th scope="col" >单价</th>
								<th scope="col" >服务周期</th>
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
								<td>
									<span ng-if='contract.taskInfo.serviceType=="0"'>值守</span>
									<span ng-if='contract.taskInfo.serviceType=="1"'>提成{{contract.taskInfo.deductRate}}%</span>
								</td>
								<td class="deepColor">{{contract.taskInfo.serviceNum}}</td>
								<td>{{contract.taskInfo.unitPrice}}</td>
								<td >{{contract.taskInfo.months}}</td>
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