<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<table class="table contractTable">
	<tr>
		<th>类型</th>
		<th>合同编号</th>
		<th>商户名称</th>
		<th>服务区域</th>
		<th>服务类型</th>
		<th>产品类型</th>
		<th>合同金额</th>
		<th>已收金额</th>
		<th>合同期限</th>
		<th>签单人</th>
		<th>服务状态</th>
		<th>处理状态</th>
	</tr>
	<!--<tr  ng-repeat="contractList in contractLists track by $index" ng-class="{'服务中':'inServer','已到期':'notinServer'}[contractList.status]">
		<td ><a href="javascript:;" ng-click="contractInfo(this.contractList)">{{contractList.contractNum}}</a></td>
		<td class="deepColor">{{contractList.shopName}}</td>
		<td>{{contractList.totalprice}}元</td>
		<td>{{contractList.serviceType}}</td>
		<td>{{contractList.months}}个月</td>
		<td>{{contractList.begindate}}至{{contractList.enddate}}</td>
		<td class="deepColor">{{contractList.payTypeName}}</td>
		<td class="deepColor">{{contractList.notPaidAmount}}</td>
		<td class="deepColor">{{contractList.userName}}</td>
		<td class="status">{{contractList.status}}</td>
	</tr>-->
	<tr class="inServer" ng-repeat="contract in contractList track by $index">
		<td ng-if="contract.contractType=='0'">新</td>
		<td ng-if="contract.contractType=='1'">续</td>
		<td>{{contract.contractNum}}</td>
		<td><a href="javascript:;" ng-click="contractInfo(contract)">{{contract.shopName}}</a></td>
		<td>{{contract.serviceArea}}</td>
		<td>{{contract.serviceType}}</td>		
		<td>{{contract.productType}}</td>
		<td>{{contract.totalprice}}</td>
		<td>{{contract.payAmount}}</td>
		<td>{{contract.begindate}}至{{contract.enddate}}</td>
		<td>{{contract.signName}}</td>
		<td class="status2" ng-if='contract.contractStatus=="0"'>待审核</td>
		<td class="status1" ng-if='contract.contractStatus=="1"'>待分配</td>
		<td class="status1" ng-if='contract.contractStatus=="2"'>待确认</td>
		<td class="status1" ng-if='contract.contractStatus=="3"'>服务中</td>
		<td class="status3" ng-if='contract.contractStatus=="4"'>已完成</td>
		<td class="status3" ng-if='contract.contractStatus=="5"'>暂停</td>
		<td class="status3" ng-if='contract.contractStatus=="6"'>已终止</td>
		<td class="status3" ng-if='contract.contractStatus=="7"'>暂停待审批</td>
		<td class="status3" ng-if='contract.contractStatus=="8"'>终止待审批</td>
		
		<td class="status2" ng-if='contract.contractStatus=="0"'>待处理</td>
		<td class="status1" ng-if='contract.contractStatus=="1"'>待处理</td>
		<td class="status1" ng-if='contract.contractStatus=="2"'>待处理</td>
		<td class="status1" ng-if='contract.contractStatus=="3"'>已处理</td>
		<td class="status3" ng-if='contract.contractStatus=="4"'>已完成</td>
		<td class="status3" ng-if='contract.contractStatus=="5"'>暂停</td>
		<td class="status3" ng-if='contract.contractStatus=="6"'>已终止</td>
		<td class="status3" ng-if='contract.contractStatus=="7"'>暂停待审批</td>
		<td class="status3" ng-if='contract.contractStatus=="8"'>终止待审批</td>
		<!-- <td class="status2" ng-if='contract.contractStatus>0'>{{contract.contractStatus}}</td>
		<td class="status3" ng-if='contract.contractStatus=="0"'>{{contract.contractStatus}}</td> -->
	</tr>	
</table>
<div class="pagelist priv-pagelist">
	<div id="paging1"></div>
</div>