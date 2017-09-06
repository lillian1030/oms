<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>


<!--<div class="construction">
	<div class="const-content">
		<div class="const-info">
			<img class="const-word" src="http://static.qineasy.com/base/images/consWord.png" />
		</div>		
	</div>
</div>-->
<!--------------- Content start ----------------->
<!--订单列表-->
<div  class="content-wrapper content-member-wrapper content-forward-wrapper" ng-show="orderTbListDia">
    <div class="ManColTable col-lg-12">
        <div class="col-md-12 orderNav_Tab">
        	<div ng-class="{'orderClassifySelect':type=='1'}" class="orderClassify " ng-click="orderClassify('1')">全部订单</div>
        	<div ng-class="{'orderClassifySelect':type=='2'}" class="orderClassify" ng-click="orderClassify('2')">待付款<span>({{orderStatusCount.waitBuyerPayCount}})</span></div>
        	<div ng-class="{'orderClassifySelect':type=='3'}" class="orderClassify" ng-click="orderClassify('3')">待发货<span>({{orderStatusCount.waitSellerSendCount}})</span></div>
        	<div ng-class="{'orderClassifySelect':type=='4'}" class="orderClassify" ng-click="orderClassify('4')">待收货<span>({{orderStatusCount.waitBuyerReceiveCount}})</span></div>
        	<div ng-class="{'orderClassifySelect':type=='5'}" class="orderClassify" ng-click="orderClassify('5')">已完成<span>({{orderStatusCount.successCount}})</span></div>
	        <div class="allOrderLeft">
	        	<button ng-click="synchronizationOrder()">手工下载订单</button>
		 	</div>
	        <div class="fn-clear"></div>
        </div>
		<div class="col-md-12 orderNavbar">
			<div class="orderNavbarSin">
				<div>平台：</div>
				<div>
					<select class="orderControlDetil" ng-model="orderSource">
						<option value="">全部平台</option>
						<option value="0">阿里巴巴</option>
					</select>
				</div>
			</div>
			<div class="orderNavbarSin" style="text-align: left;">
				<div>店铺：</div>
				<div>
					<select class="orderControlDetil" ng-model="shopOrgId">
						<option value="">全部店铺</option>
						<option ng-repeat="shop in shopList" value="{{shop.orgId}}">{{shop.shopName}}</option>
					</select>
				</div>
			</div>
			<div class="orderNavbarSin">
				<div>买家：</div>
				<div>
					<input class="orderControlDetil" type="text" placeholder="买家账号/手机号" ng-model="memberName"/>
				</div>
			</div>
			<div class="orderNavbarSin">
				<div>订单号：</div>
				<div>
					<input class="orderControlDetil" type="text" ng-model="outOrderId"/>
				</div>
			</div>
			<div class="orderNavbarSin" style="text-align: left;">
				<div>订单时间：</div>
				<div>
					<input class="laydate-icon setOrderTime" placeholder="开始时间" type="text" id="start"  ng-model="queryStartTime"/>
					<span class="lineto">-</span>
					<input class="laydate-icon setOrderTime" placeholder="结束时间" ng-model="queryEndTime" type="text" id="end" />
				</div>
			</div>
			<div class="orderNavbarSin">
				<div>订单状态：</div>
				<div>
					<select class="orderControlDetil" ng-model="orderStatus">
						<option value="">全部</option>
						<option value="11">等待买家付款</option>
						<option value="12">等待卖家发货</option>
						<option value="13">等待买家确认收货</option>
						<option value="14">交易成功</option>
						<option value="15">交易关闭</option>
					</select>
				</div>
				<button ng-click="search();">查询</button>
			</div>
		</div>
        <div class="col-md-12 orderTbTabel">
        	<table>
        		<tr>
        			<th scope="col" width="24%">商品</th>
        			<th scope="col" width="8%">单价</th>
        			<th scope="col" width="8%">数量</th>
        			<th scope="col" width="15%">实付金额</th>
        			<th scope="col" width="26%">买家信息</th>
        			<th>备注</th>
        		</tr>
        		<tr ng-repeat="order in orderList">
        			<td colspan="6" class="orderTbReponse">
        				<table>
        					<tr>
        						<td colspan="6" class="orderTbTabelCode" ng-show="order.outOrderId != orderList[$index-1].outOrderId">
        							<span class="mgl15">{{order.orderTime.substring(0,19)}}</span>
			        				<span class="mgl15">订单号：</span>
			        				<span class="ooafd4" ng-click="orderDetil(order)">{{order.outOrderId}}</span>
			        				<span class="orderTbShop">{{order.shopName}}</span>
			        				<img  ng-if="order.shopType=='3'" class="miniBrand-logo" src="../static/base/images/icon_logo_taobao.png" />
	                                <img  ng-if="order.shopType=='4'" class="miniBrand-logo" src="../static/base/images/icon_logo_tmall.png" />
	                                <img  ng-if="order.shopType=='5'" class="miniBrand-logo" src="../static/base/images/icon_logo_taobao.png" />
	                                <img  ng-if="order.shopType=='0'" class="miniBrand-logo" src="../static/base/images/icon_1688.png" />
	                                <img  ng-if="order.shopType=='1'" class="miniBrand-logo" src="../static/base/images/icon_AliExpress.png" />
	                                <img  ng-if="order.shopType=='2'" class="miniBrand-logo" src="../static/base/images/icon_amazon.png" />
			        				<span class="orderTbStaus" >{{order.orderStatus}}</span>
        						</td>
        					</tr>
        					<tr ng-repeat="orderDetails in order.orderDetails">
        						<td colspan="3" width="41%" class="orderTbProBox">
        							<div class="orderTbPro">
        								<p>{{orderDetails.proName}}</p>
        								<p>款号：{{orderDetails.proNum}}</p>
        								<p>{{orderDetails.proColorName}} {{orderDetails.proSizeName}}</p>
        							</div>
        							<div class="orderTbUnit">
        								<p>{{orderDetails.unitPrice}}元</p>
        								<p class="am-ft-orange" ng-show="orderDetails.refundStatus != ''">退款处理中</p>
        								<p class="am-ft-orange" ng-show="orderDetails.refundStatus != ''">({{orderDetails.refundStatus}})</p>
        							</div>
        							<div class="orderTbNum">{{orderDetails.amount.substring(0,orderDetails.amount.indexOf('.'))}}件</div>
        						</td>
        						<td rowspan="{{order.count}}" width="13%" ng-show="orderDetails.orderId != order.orderDetails[$index-1].orderId">
        							<p class="orderTbTotal">{{order.discount}}元</p>
        							<p>（含快递费：{{order.postPrice}}元）</p>
        						</td>
        						<td rowspan="{{order.count}}" width="26%" class="orderTbAddress" ng-show="orderDetails.orderId != order.orderDetails[$index-1].orderId">
        							<div style="width:24%">
	        							<p>买家：</p><br />
	        							<p>收货信息：</p>
        							</div>
        							<div style="width:60%">
	        							<p class="color333">{{order.memberName}}</p><br />
	        							<p class="color333">{{order.consignee}}，{{order.province}}{{order.city}}{{order.district}}{{order.address}}，{{order.mobile}}</p>
        							</div>
        						</td>
        						<td rowspan="{{order.count}}" class="orderTbAPs" ng-show="orderDetails.orderId != order.orderDetails[$index-1].orderId">
        							<span>买家留言：</span><span class="color333">{{order.orderBuyMemo}}</span><br />
        							<span>卖家备注：</span><span class="color333">{{order.orderSellerMemo}}</span><br />
        							<span>系统备注：</span><span class="color333"></span>
        						</td>
        					</tr>
        					
        				</table>
        			</td>
        		</tr>
        				</table>
        			</td>
        		</tr>
        	</table>
        </div>
         <div class="fn-right priv-pagelist">
                <div id="paging"></div>
            </div>
<div class="fn-clear"></div>
</div>
</div>
<!--同步订单弹框-->
<div class="synchronizationBox" ng-show="showDialog">
	<div class="orderTb_dialog">
		<span>手工下载订单</span>
		<img src="http://base-static.oss-cn-hangzhou.aliyuncs.com/base/images/closelogo.png" ng-click="closeDialog()"/>
	</div>
	<div class="orderTb_dialog_content">
		<div class="orderTb_dialogRow fn-clear">
    	  	<div>订单时间：</div>
    	  	<div>
    	  		<input class="laydate-icon setOrderTime " placeholder="开始时间" type="text" id="start1"/>&nbsp;至&nbsp;
				<input class="laydate-icon setOrderTime " placeholder="结束时间"  type="text"  id="end1"/>
    	  	</div>
    	  </div>
    	  <div class="orderTb_dialogRow fn-clear">
	    	  	<div>店铺：</div>
	    	  	<div>
		    	  	<select class="orderTb_dialogRow_shop" ng-model="downShopOrgId">
		    	  		<option ng-repeat="shop in shopList" value="{{shop.orgId}},{{shop.shopType}}">{{shop.shopName}}</option>
		    	  	</select><span id="showError" style="display:none;color:red">请选择一个店铺</span>
	    	  	</div>
    	  </div>
    	   <div class="orderTb_dialogRow fn-clear">
	    	  	<div>订单状态：</div>
	    	  	<div>
		    	  	<select class="orderTb_dialogRow_status" ng-model="downOrderStatus">
		    	  		<option value="">全部</option>
		    	  		<option value="WAIT_BUYER_PAY">等待买家付款</option>
						<option value="WAIT_SELLER_SEND">等待卖家发货</option>
						<option value="WAIT_BUYER_RECEIVE">等待买家确认收货</option>
						<option value="SUCCESS">交易成功</option>
						<option value="CANCEL">交易关闭</option>
		    	  	</select>
	    	  	</div>
    	  </div>
    	   <div class="orderTb_dialogRow fn-clear">
	    	  	<div>下载进度：</div>
	    	  	<div class="orderTbLoading">
	    	  		<div class="fn-clear orderTbLoadingOuter">
	    	  			<div class="orderTbLoadingInner"></div>
	    	  		</div>
		    	  	<span>{{progressVal}}%</span>
    	  </div>
	</div>
	<div class="orderTb_dialogRow_btn">
	  	<button class="color666" ng-click="closeDialog()">取消</button>	
	  	<button class="am-ft-white" ng-click="downloadOrder()">下载</button>	
<!-- 
	  	<button class="am-ft-white" ng-click="progress()">下载</button>	
 -->
	</div>
</div>
</div>
<script type="text/javascript">
$(".maskBg").click(function(){
$(".synchronizationBox,.maskBg").hide();
})
</script>
<!--同步订单弹框-->
<!--订单列表-->
	<!--订单详情-->
	<div class="content-wrapper content-member-wrapper content-forward-wrapper" id="orderInfo" ng-show="showOrderDetil">
    <div class="ManColTable col-lg-12">
        <div class="col-md-12 orderTbDetilNav">
			<span class="">订单号：</span>
			<span >{{orderDetail.outOrderId}}</span>
        	<span class="mgl15">{{orderDetail.orderTime.substring(0,19)}}</span>
			<img  ng-if="orderDetail.shopType=='3'" class="miniBrand-logo" src="../static/base/images/icon_logo_taobao.png" />
            <img  ng-if="orderDetail.shopType=='4'" class="miniBrand-logo" src="../static/base/images/icon_logo_tmall.png" />
            <img  ng-if="orderDetail.shopType=='5'" class="miniBrand-logo" src="../static/base/images/icon_logo_taobao.png" />
            <img  ng-if="orderDetail.shopType=='0'" class="miniBrand-logo" src="../static/base/images/icon_1688.png" />
            <img  ng-if="orderDetail.shopType=='1'" class="miniBrand-logo" src="../static/base/images/icon_AliExpress.png" />
            <img  ng-if="orderDetail.shopType=='2'" class="miniBrand-logo" src="../static/base/images/icon_amazon.png" />
			<span class="">{{orderDetail.shopName}}</span>
			<span class="orderTbDetilStauts">{{orderDetail.orderStatus}}</span>
			<button class="orderTbStaus" ng-click="goBack()">返回</button>
    	 </div>
    	 <div class="col-md-10" class="orderTbProDetil">
    	 	<p class="orderTbProTitle">商品信息</p>
    	 	<table class="orderTbProTable">
    	 		<tr>
    	 			<th scope="col" width="30%">商品</th>
        			<th scope="col" width="20%">单价</th>
        			<th scope="col" width="20%">数量</th>
        			<th scope="col" >实付金额</th>
    	 		</tr>
    	 		<tr ng-repeat="detail in orderDetail.orderDetails">
					<td colspan="3"  class="orderTbProBox">
						<div class="orderTbPro" style="width: 47%;">
							<p>{{detail.proName}}</p>
							<p>款号：{{detail.proNum}}</p>
							<p>{{detail.proColorName}} {{detail.proSizeName}}</p>
						</div>
						<div class="orderTbUnit" style="width: 23%;">{{detail.unitPrice}}元</div>
						<div class="orderTbNum" style="width: 30%;">{{detail.amount.substring(0,detail.amount.indexOf('.'))}}件</div>
					</td>
					<td rowspan="{{orderDetail.count}}" ng-show="detail.orderId != orderDetail.orderDetails[$index-1].orderId">
						<p class="orderTbTotal">{{orderDetail.discount}}元</p>
						<p>（含快递费：{{orderDetail.postPrice}}元）</p>
					</td>
				</tr>
    	 	</table>
    	 </div>
    	 <div class="col-md-11 orderTbDetile">
    	 	<div class="col-md-4 orderDetileBox">
    	 		<p>买家信息</p>
    	 		<p>{{orderDetail.memberName}}</p>
    	 	</div>
    	 	<div class="col-md-4 orderDetileBox">
    	 		<p>收货信息</p>
    	 		<p>{{orderDetail.consignee}} {{orderDetail.mobile}}</p>
    	 		<p>{{orderDetail.province}}{{orderDetail.city}}{{orderDetail.district}}{{orderDetail.address}}</p>
    	 	</div>
    	 	<div class="col-md-4 orderDetileBox">
    	 		<p>物流信息</p>
    	 		<p>物流公司：{{orderDetail.logiticCompanyName}}</p>
    	 		<p>快递单号：{{orderDetail.logiticNum}}</p>
    	 	</div>
    	 </div>
       <div class="col-md-11 orderTbProDetil">
    	  <p class="orderTbProTitle">订单时间</p>
    	  <div>
    	  	<span>下单时间：</span>
    	  	<span>{{orderDetail.orderTime.substring(0,19)}}</span>
    	  </div>
    	  <div>
    	  	<span>发货时间：</span>
    	  	<span>{{orderDetail.orderSendTime.substring(0,19)}}</span>
    	  </div>
    	  <div class="orderTbFlow fn-clear">
    	  	<div style="width:74px;">物流时间：</div>
    	  	<div>
    	  		<p ng-repeat="logitic in logiticTraceList">{{logitic.stepTime}} &nbsp;<span class="color333">{{logitic.stepName}}</span></p>
    	  	</div>
    	  </div>
    	  <div>
    	  	<span>收货时间：</span>
    	 	<span>{{orderDetail.orderConfirmTime.substring(0,19)}}&nbsp;</span>
    	  	<span>{{orderDetail.consignee}} 确认收货</span><br />
    	  </div>
    	</div>
<div class="fn-clear"></div>
</div>
</div>
	<!--订单详情-->
