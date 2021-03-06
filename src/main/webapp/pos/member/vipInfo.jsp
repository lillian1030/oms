<%@ page contentType="text/html; charset=utf-8" language="java" import="java.util.*" errorPage="" %>
<!--------------- Content start ----------------->
<div class="content-wrapper content-wrapper-order saleSumary-wrapper" >
    <!--<div class="col-md-11 pageTitl removeBottom">
        <span class="am-ft-16 ">会员订单</span>
        <button type="button" class="unionBriefReturn" ng-click="goback('memberOrder')">返回</button>
    </div>-->
    <div class="col-md-11 vipList vipInfo_box">
    	<div class="vipDetil vipInfo">
    		<div><img ng-src="{{vipMember.headpicpath}}"/></div>
    		<div class="vipDetildesc vipInfo_nav">
    			<div class="vipInfo_nav_row fn-clear">
    				<div class="vipInfo_nav_l">
    					<span>会员ID：</span>
    					<span>{{vipMember.memberId}}</span>
    				</div>
    				<div class="vipInfo_nav_r">
    					<span>余额：</span>
    					<span>{{vipMember.accountAmount}}元</span>
    				</div>
    			</div>
    			<div class="vipInfo_nav_row fn-clear">
    				<div class="vipInfo_nav_l">
    					<span class="mgl13">昵称：</span>
    					<span>{{vipMember.name}}</span>
    				</div>
    				<div class="vipInfo_nav_r">
    					<span>性别：</span>
    					<span ng-if="vipMember.sex=='M'">男</span>
    					<span ng-if="vipMember.sex=='F'">女</span>
    				</div>
    			</div>
    			<div class="vipInfo_nav_row fn-clear">
    				<div class="vipInfo_nav_l">
    					<span class="mgl13">手机：</span>
    					<span>{{vipMember.telphone}}</span>
    				</div>
    				<div class="vipInfo_nav_r">
    					<span>生日：</span>
    					<span>{{vipMember.birthday}}</span>
    				</div>
    				<div class="vipInfo_nav_r">
    					<span>通讯地址：</span>
    					<span>{{vipMember.province}}{{vipMember.city}}{{vipMember.district}}{{vipMember.address}}</span>
    				</div>
    			</div>
    		</div>
    		<div></div>
    	</div>
    	<div class="fn-clear"></div>
    </div>
    <div class="firstTab col-md-11 mgl20 pl0">
		<ul class="fn-clear">
			<li class="fn-left" ng-class="{true:'tabactive'}[tabType=='1']" ng-click="shiftTab('1')">充值记录</li>
			<li class="fn-left" ng-class="{true:'tabactive'}[tabType=='2']" ng-click="shiftTab('2')">订单记录</li>
			<li class="fn-left" ng-class="{true:'tabactive'}[tabType=='3']" ng-click="shiftTab('3')">评价记录</li>
		</ul>
	</div>
    <!-- Main content -->
    <div class=" col-md-11 offsetPadding vipinfoTable">
            <div class="PrivTable ordersTable o2o-ordersTable mgl0 mgt0">
               <!--充值记录-->
               <table class="table table-hover table-striped unoinListTable vipinfoType" ng-if="tabType=='1'">
                    <tr class="">
                        <th scope="col" style="width: 10%;">卡号</th>
                        <th scope="col" style="width: 18%;">充值时间</th>
                        <th scope="col" style="width: 10%;">金额</th>
                        <th scope="col" style="width: 10%;">密码</th>
                        <th scope="col" style="width: 18%;">录入时间</th>
                        <th scope="col" style="width: 18%;">激活时间</th>
                        <th scope="col" >充值方式</th>
                    </tr>
                    <tr ng-repeat="chargeCard in chargeCardList">
                    	<td>{{chargeCard.cardNum}}</td>
                    	<td>{{chargeCard.useTime}}</td>
                    	<td>{{chargeCard.amount}}</td>
                    	<td>{{chargeCard.password}}</td>
                    	<td>{{chargeCard.createTime}}</td>
                    	<td>{{chargeCard.activiteTime}}</td>
                    	<td>
                    		<span ng-if="chargeCard.useWay=='0'">前台</span>
                    		<span ng-if="chargeCard.useWay=='1'">后台</span>
                    	</td>
                    </tr>
                </table>
                <!--订单记录-->
                <table class="vipinfoType " ng-if="tabType=='2'">
							<tr>
								<th scope="col" width="23%">商品信息</th>
								<th scope="col" width="12%">单价</th>
								<th scope="col" width="8%">数量</th>
								<th scope="col" width="12%">会员昵称</th>
								<th scope="col" width="12%">金额</th>
								<th scope="col" width="10%">订单状态</th>
								<th scope="col" width="12%">操作</th>
							</tr>
							<tr ng-repeat="order in orderList">
								<td colspan="7" class="orderTbReponse orderTbReponsea pt0">
									<table class="" style="border-bottom: none;border-top: none;">
										<tr>
											<td colspan="7" class="orderTbTabelCode" style="background: #E9F8FF;text-align: left; border-top: none;">
												<span class="mgr10 am-ft-gray">订单号：{{order.orderId}} </span>
												<span class="am-ft-gray">{{order.orderTime}}</span>
											</td>
										</tr>
										<tr ng-repeat="orderDetail in order.orderDetails">
											<td scope="col" width="23%" class="orderTbProBox no-border-bottom">
												<div class="orderTbUnit img-set">
													<img ng-src="{{orderDetail.picUrl}}" />
												</div>
												<div class="orderTbPro">
													<p style="box-sizing: border-box;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow: hidden;">{{orderDetail.proName}}</p>
													<p class="mgt5">
														<span ng-if="orderDetail.productSpec.item1!=''">{{orderDetail.productSpec.item1}} </span>
														<span ng-if="orderDetail.productSpec.item2!=''">{{orderDetail.productSpec.item2}} </span>
														<span ng-if="orderDetail.productSpec.item3!=''">{{orderDetail.productSpec.item3}}</span>
														<span ng-if="orderDetail.productSpec.proColorName!=''">{{orderDetail.productSpec.proColorName}} </span>
														<span ng-if="orderDetail.productSpec.proSizeName!=''">{{orderDetail.productSpec.proSizeName}}</span>
													</p>
												</div>
											</td>
											<td rowspan="" class="no-border-bottom" width="12%" scope="col">
												{{orderDetail.unitPrice}}元
											</td>
											<td rowspan="" width="8%" class="no-border-bottom" >
												{{orderDetail.amount}}
											</td>
											<td class="no-border-bottom"  rowspan="{{order.orderDetails.length}}" width="12%" ng-if="$index==0">
												{{order.memberName}}
											</td>
											<td class="no-border-bottom"  rowspan="{{order.orderDetails.length}}" width="12%" ng-if="$index==0">
												<p class="am-ft-orange">{{order.totalPrice}}元</p>
												<p>（运费：{{order.buyPostPrice}}元）</p>
												<p ng-if="order.couponAmt>0">优惠：-{{order.couponAmt}}元</p>
												<p ng-if="order.couponAmt==0">优惠：0.00元</p>
											</td>
											<td class="no-border-bottom"  rowspan="{{order.orderDetails.length}}" width="10%" ng-if="$index==0">
												<p ng-class="{'am-ft-orange':order.orderStatus=='未支付','am-ft-blue':order.orderStatus=='未发货','am-ft-orange':order.orderStatus=='已发货'}">{{order.orderStatus}}</p>
												<p class="am-ft-black">
													<a href="javascript:;" ng-click='checkDetail(this)'>查看详情</a>
												</p>
											</td>
											<td class="no-border-bottom"  rowspan="{{order.orderDetails.length}}" width="12%" ng-if="$index==0">
												<button class="blueGroundWhiteBtn" ng-if="order.orderStatus=='未发货'">确认发货</button>
												<button class="blueGroundWhiteBtn " ng-if="order.orderStatus=='待退款'">同意退款</button>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
						<!--评价列表-->
					<table class="table table-hover table-striped unoinListTable vipinfoType vipinfoType3" ng-if="tabType=='3'">
                    <tr class="">
                        <th scope="col" style="width: 16%;">评价</th>
                        <th scope="col" style="width: 36%;">评论</th>
                        <th scope="col" style="width: 15%;">评论人</th>
                        <th scope="col" >商品信息</th>
                    </tr>
                    <tr ng-repeat="evaluate in evaluateList">
                    	<td>
                    		<div class="star-size">
                    			<i class="fa fa-star starColor"  ng-class="{'starColorGrey':evaluate.evaluateLevel<1}" aria-hidden="true" ></i>	
						   		<i class="fa fa-star starColor"  ng-class="{'starColorGrey':evaluate.evaluateLevel<2}" aria-hidden="true" ></i>	
						   		<i class="fa fa-star starColor"  ng-class="{'starColorGrey':evaluate.evaluateLevel<3}" aria-hidden="true" ></i>	
						   		<i class="fa fa-star starColor "  ng-class="{'starColorGrey':evaluate.evaluateLevel<4}" aria-hidden="true" ></i>	
						   		<i class="fa fa-star starColor "  ng-class="{'starColorGrey':evaluate.evaluateLevel<5}" aria-hidden="true" ></i>	
                    		</div>
                    		<p ng-if="evaluate.evaluateComment == '0'">好评</p>
                    		<p ng-if="evaluate.evaluateComment == '1'">中评</p>
                    		<p ng-if="evaluate.evaluateComment == '2'">差评</p>
                    	</td>
                    	<td>
                    		<p ng-repeat="detail in evaluate.evaluateDetail" ng-if="detail.evaluateType == '0' || detail.evaluateType == '1'">{{detail.evaluateContext}}</p>
                    		<div class="bg-f6" ng-repeat="detail in evaluate.evaluateDetail" ng-if="detail.evaluateType == '2'">
                    			【回复】：{{detail.evaluateContext}}
                    		</div>
                    		<p>
                    			<span>{{evaluate.evaluateTime}}</span>
                    		</p>
                    	</td>
                    	<td>{{evaluate.evaluateDetail[0].memberName}}</td>
                    	<td class="orderTbProBox">
                    		<div class="orderTbUnit img-set">
								<img ng-src="{{evaluate.proPic}}" />
							</div>
							<div class="orderTbPro">
								<p>{{evaluate.proName}}</p>
							</div>
                    	</td>
                    </tr>
                </table>
            </div>
        <!-- 分页 -->
            <div class="pagelist priv-pagelist">
                <div id="cardpaging"></div>
            </div>
        <!-- /分页 -->
        <div class="fn-clear"></div>
    </div>

    <!-- /Main content -->
</div>
<!--------------- Content end ----------------->

