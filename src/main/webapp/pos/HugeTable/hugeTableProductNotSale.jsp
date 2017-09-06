<%@ page contentType="text/html; charset=utf-8" language="java" import="java.util.*" errorPage="" %>
<div class="cloudUnionCreater content-wrapper content-wrapper-order fn-clear">
	<div class="col-md-11 pageTitl fn-clear">
		<div class="fn-left">
			<h3 class="cloudUnionName">{{cloudName}}</h3>
			<div class="fn-clear">
				<p class="left unionInfo fn-left">
					<span>品牌 : </span>
					<span>{{brandName}}</span>
				</p>
				<p class="center unionInfo fn-left">
					<span>创建者 : </span>
					<span>{{shopName}}</span>
				</p>
				<p class="right unionInfo fn-left">
					<span>状态 : </span>
					<span>{{createOrJoin}}</span>
				</p>
			</div>
		</div>
		<div class="unionProductButton  fn-right">
			<button href="javascript:;" class="fn-left" ng-click="goBackB()">返回</button>
		</div>
	</div>
	<div class="fn-clear"></div>
	<!-- search  -->
	<!-- /search -->
	<!-- Main content -->
	<div class="ManColTable col-lg-12">
		<div class="PrivTable ordersTable">
			<div class="fn-clear notsaleproduct">
				<p class="fn-left">
					云仓下架商品（共{{count}}条记录）
				</p>
				<div class="fn-right">
					<input type="text" ng-model="proNumNotSale" placeholder="款号查询" />
					<button ng-click="searchNotSaleProduct('proNum',proNumNotSale)">查询</button>
					<a href="javascript:;" ng-click="showFilterAdition()">更多筛选条件</a>
				</div>
			</div>
			<!--search-->
			<form class="col-md-12 filterform tidySelect" style="margin-left: 0;" ng-show="defaultObj.moreFiltAdition=='show'">
				<div class="tidySelectRow1">
					<div>
						<span>年份：</span>
						<select ng-model="proYear" class="selectYear">
							<option selected value>请选择</option>
							<option ng-value="queryYear.proYear" ng-repeat="queryYear in queryYears">{{queryYear.proYear}}</option>
						</select>
					</div>
					<div>
						<span>季节：</span>
						<select class="selectSeason" ng-model="proSeason">
							<option selected value>请选择</option>
							<option ng-value="season.proSeason" ng-repeat="season in seasons">{{season.proSeason}}</option>
						</select>
					</div>
				</div>
				<div class="tidySelectRow2">
					<div>
						<span>大品类：</span>
						<select class="selectBig" ng-model="proGrandparentSortId" ng-change="getParentSort()">
							<option selected value>请选择</option>
							<option ng-value="grandparentSort.proGrandparentSortId" ng-repeat="grandparentSort in grandparentSorts">{{grandparentSort.grandparentSortName}}</option>
						</select>
					</div>
					<div>
						<span>中品类：</span>
						<select class="selectMid" ng-model="proParentSortId" ng-change="getSort()">
							<option selected value>请选择</option>
							<option ng-value="parentSort.proParentSortId" ng-repeat="parentSort in parentSorts">{{parentSort.parentSortName}}</option>
						</select>
					</div>
					<div>
						<span>小品类：</span>
						<select class="selectSmall" ng-model="proSortId">
							<option selected value>请选择</option>
							<option ng-value="sort.proSortId" ng-repeat="sort in sorts">{{sort.sortName}}</option>
						</select>
					</div>
					<button class="tidySelectButton" ng-click="searchNotSaleProduct('filter',proNumNotSale)">查询</button>
				</div>
			</form>
			<!--search-->

			<table class="notsaleproducttable table table-hover table-striped">
				<tr>
					<th class="col-lg-6" >商品</th>
					<th class="col-lg-3" >吊牌价</th>
					<th class="col-lg-3" >操作</th>
				</tr>
				<tr ng-repeat="cloudLimitProductList in cloudLimitProductLists">
					<td class="por-info unionProductInfoContent">
						<div class="inner-Info fn-clear">
							<input type="checkbox" ng-checked="cloudLimitProductList.getCheckedB" class="fn-left" ng-click="chooseNotSaleProduct(this,cloudLimitProductLists,'one')">
							<div class="cloudProductImg fn-left">
								<img ng-src="{{cloudLimitProductList.proPic}}" alt="" />
							</div>
							<div class="fn-left">
								<p class="linea productname">{{cloudLimitProductList.proName}}</p>
								<p class="lineb  pronumber"><span>款号 : </span><span>{{cloudLimitProductList.proModelnum}}</span></p>
								<div class="linec fn-clear">
									<p class="fn-left"><span>{{cloudLimitProductList.brandName}}</span></p>
									<p class="fn-left"><span>{{cloudLimitProductList.grandparentSortName}}/{{cloudLimitProductList.parentSortName}}/{{cloudLimitProductList.sortName}}</span></p>
									<p class="fn-left"><span>{{cloudLimitProductList.proYear}}年</span></p>
									<p class="fn-left"><span>{{cloudLimitProductList.proSeason}}</span></p>
								</div>
							</div>
						</div>
					</td>
					<td><strong>{{cloudLimitProductList.proPrice}}</strong>元</td>
					<td class="td_editing">
						<a href="javascript:;" ng-click="putAwayProduct(this,'one')">上架</a>
					</td>
				</tr>
			</table>
			<div class="fn-clear">
				<div class="fn-left fn-clear">
					<input type="checkbox" class="fn-left" id="selectAllPro" ng-model="notSaleGetchecked" ng-click="chooseNotSaleProduct(this,cloudLimitProductLists,'thisPage')"/>
					<label for="selectAllPro" class="fn-left" >全选当前页</label>
					<button class="selectNotSaleProduct fn-left" ng-click="putAwayProduct(this,'selected')">选中商品上架</button>
				</div>
				<div class="page-wrapper fn-right">
		        	<div id="notSaleproductListPage"></div>
				</div>
			</div>
		</div>
		<!-- 分页 -->

		<!-- /分页 -->
		<div class="fn-clear"></div>
	</div>
	<!-- /Main content -->
</div>