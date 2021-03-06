<%@ page contentType="text/html; charset=utf-8" language="java" import="java.util.*" errorPage="" %>
<!--云仓商品列表(创建者)-->
<div class="content-wrapper content-wrapper-order fn-clear" ng-hide="showPro==1" ng-init="showPro=0">
	<div class="col-md-11 pageTitl removeBottom">
		<div class="unionBrief ">
			<h2 class="am-ft-16 ">{{cloudName}}</h2>
			<p>
				<span class="descriColor1">品牌：</span><span class="descriColor2">{{brandName}}&nbsp;&nbsp;</span>
				<span class="descriColor1">创建者：</span><span class="descriColor2">{{shopName}}&nbsp;&nbsp;</span>
				<span class="descriColor1">状态：</span><span class="descriColor2">{{createOrJoin}}</span>
			</p>
		</div>
		<button type="button" class="unionBriefReturn" style="margin-top: 30px;" ng-click="gobackA()">返回</button>
	</div>
	<div class="fn-clear"></div>
	<!-- search -->
	<div class="col-md-11  codeSelect fn-clear">
		<span class="fn-left">所有商品（共{{countd}}条记录）</span>
		<span class="fn-left lineDive">|</span>
		<a class="fn-left" href="javascript:;" ng-click="showNotSaleProduct()">云仓下架商品（{{proDown}}）</a>
		<div class="codeSelectRight">
			<input type="text" ng-model="proNum" placeholder="款号查询" />
			<button class="codeSelectBtn" ng-click="searchProduct('proNum')">查询</button>
			<button class="tidySelectBtn" ng-click="showFilterAdition()">精简筛选条件</button>
		</div>
	</div>
	<form class="col-md-11 filterform tidySelect" ng-show="defaultObj.moreFiltAdition=='show'">
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
					<option ng-value="sort.sortId" ng-repeat="sort in sorts">{{sort.sortName}}</option>
				</select>
			</div>
			<button class="tidySelectButton" ng-click="searchProduct('filter')">查询</button>
		</div>
	</form>
	<!-- /search -->
	<!-- Main content -->
	<div class="ManColTable offsetPadding1 col-md-11">
		<div class="col-lg-12 PrivTable ordersTable unionProductTable o2o-ordersTable" style="margin:0px 0px 0px 5px;padding: 0;">
			<form action="" id="unionProductTable">
				<table class="table">
					<tr>
						<th class="col-lg-4">商品</th>
						<th class="col-lg-1">吊牌价</th>
						<th class="col-lg-1">参与成员</th>
						<th class="col-lg-2">O2O结算价</th>
						<th class="col-lg-1">O2O最低限价</th>
						<th class="col-lg-1">云仓总库存</th>
						<th class="col-lg-2">操作</th>
					</tr>
					<tr ng-repeat="eachStockList in stockList" ng-class="{true:'td-notset',false:'td-set'}[eachStockList.minPrice==''&& eachStockList.maxPrice=='']">
						<td style="width:40%;">
							<!--<input type="hidden" ng-model="eachStockList" />-->
							<div class="goodsDesc fn-clear">
								<input type="checkbox" ng-checked="eachStockList.getChecked" ng-click="chooseUnionProduct(this,stockList,'one')" class="selectcheckbox fn-left" id="selectcheckbox">
								<div class="goodsImg fn-left">
									<img ng-src="{{eachStockList.proPic}}" />
								</div>
								<div class="goodsDetil fn-left">
									<p>{{eachStockList.proName}}</p>
									<p>款号：{{eachStockList.proModelnum}}</p>
									<p>{{eachStockList.brandName}} &nbsp;{{eachStockList.grandparentSortName}}/{{eachStockList.parentSortName}}/{{eachStockList.sortName}} &nbsp;{{eachStockList.proYear}}&nbsp;{{eachStockList.proSeason}}</p>
								</div>
							</div>
						</td>
						<td>{{eachStockList.proPrice}}元</td>
						<td>{{eachStockList.attendedShopNum}}</td>
						<td class="ofont">
							<div ng-if="eachStockList.minPrice!=''&&eachStockList.maxPrice!=''">
								<p ng-if="eachStockList.minPrice==eachStockList.maxPrice">
									<span>{{eachStockList.maxPrice}}</span>元
								</p>
								<p ng-if="eachStockList.minPrice!=eachStockList.maxPrice">
									<span>{{eachStockList.minPrice}}</span>元<span>-
										{{eachStockList.maxPrice}}</span>元
								</p>
							</div>
							<p ng-if="eachStockList.minPrice==''&& eachStockList.maxPrice==''">未设置</p>
							<!-- 							<p ng-if="eachStockList.minPrice==''|| eachStockList.maxPrice==''">
								<span ng-if="eachStockList.minPrice == eachStockList.maxPrice">{{eachStockList.minPrice}}元</span>
								<span ng-if="eachStockList.minPrice != eachStockList.maxPrice">{{eachStockList.minPrice}}元-{{eachStockList.maxPrice}}元</span>
							</p> -->
							<img ng-if="eachStockList.allowPriceA!='未设置'" class="limitBtn" src="../static/base/images/icon_limit.png" />
						</td>
						<td>
							<input type="text" name="allowPrice" ng-value="eachStockList.allowPrice" ng-model="eachStockList.allowPrice" ng-disabled="inputDefaultStatus" />
						</td>
						<td class="ofont">
							<p>{{eachStockList.totalNum}}</p>
						</td>
						<td class="unionProductListOperation " id="unionProductListOperation">
							<div ng-if="inputDefaultStatus==true">
								<a class="operationa" href="javascript:;" ng-click="editAllowPrice(this.$parent,$event)">编辑最低限价</a>
							</div>
							<div ng-if="inputDefaultStatus==false">
								<a href="javascript:;" style="display: inline;" ng-click="sureEditAllowPriceOne(this.$parent,eachStockList.allowPrice,eachStockList.minPrice)">确认</a>
								<span style="padding-left:5px ;">|</span>
								<a style="display: inline; padding-left: 5px;" href="javascript:;" ng-click="cancelEditAllowPrice(this.$parent)">取消</a>
							</div>
							<a ng-if="eachStockList.concelLimitBtn" class="operationb" href="javascript:;" ng-click="cancelAllowPrice(this)">取消限价</a>
							<a class="operationb" href="javascript:;" ng-click="viewDetilA(this)">查看详情</a>
							<a class="operationc" href="javascript:;" ng-click="setProductNoteSell(this,'one')">下架</a>
						</td>
					</tr>
				</table>
			</form>
		</div>
		<!-- 分页 -->
		<!--分页 start-->
		<div class="fn-clear col-lg-12">
			<div class="fn-left fn-clear">
				<input type="checkbox" class="fn-left" ng-model="unJoinedgetchecked" ng-checked="unJoinedgetchecked" ng-click="chooseUnionProduct(this,stockList,'thisPage')" id="selectAllPro" />
				<label for="selectAllPro" class="fn-left">全选当前页</label>
				<input type="checkbox" class="fn-left" id="selectAllProA" ng-model="selectedAllData" ng-click="selectedAllUnionProduct()" />
				<label for="selectAllProA" class="fn-left">全选所有页</label>
				<button class="selectNotSaleProduct fn-left" ng-click="toSetAllowPrice()">选中设置最低限价</button>
				<button class="selectNotSaleProduct fn-left" ng-click="setProductNoteSell(this,'selected')">选中商品下架</button>
				<div class="setUnionSaveBox" ng-show="defaultObj.setSelectedPriceBox=='show'">
					<span>批量设置  <em>{{proListlength}}</em> 款云仓商品的 O2O最低限价为：</span>
					<span>吊牌价x</span>
					<input type="text" ng-model="discount" />&nbsp;%
					<button class="batchSet" ng-click="editSelectedAllowPrice()">批量设置</button>
					<button class="batchSetConsel" ng-click="cancelToSetAllowPrice()">取消</button>
				</div>
			</div>
			<div class="page-wrapper fn-right">
				<div id="productListPageA"></div>
			</div>

		</div>

		<!--分页 end-->
		<!-- /分页 -->
		<div class="fn-clear"></div>
	</div>
</div>

<!--限价若高于最低结算价 弹框-->
<div class="joinUnionDialogMask" id="joinUnionDialogMaskB" ng-show="defaultObj.joinUnionDialogMaskB=='show'">
	<div class="joinUnionDialog" id="joinUnionDialoga">
		<div class="top fn-clear">
			<span class="fn-left">设置O2O最低限价</span>
			<span class="fn-right"><img src="http://static.qineasy.com/base/images/closelogo.png" ng-click="cancelLimitPrice()"></span>
		</div>
		<div class="contenta fn-clear">
			<div class="fn-left sureIcon">
				<span>!</span>
			</div>
			<div class="fn-left sureText fn-clear">
				<p>当前设置O2O最低限价为{{changeVal | number:2}}元</p>
				<p>小于{{changeVal | number:2}}元的O2O结算价<span class="limitPrice">将自动修改为{{changeVal | number:2}}元.</span></p>
			</div>
		</div>
		<div class="diaLogButton limitPriceBtn fn-clear">
			<button class="limitPriceSure" ng-click="setLimitPrice(changeVal)">确认设置</button>
			<button class="limitPriceCancel" ng-click="cancelLimitPrice()">取消</button>
		</div>
	</div>
</div>

<!--限价若高于最低结算价 弹框/-->
<script type="text/javascript">
	$("#joinUnionDialoga").center();
</script>