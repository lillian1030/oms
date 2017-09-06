<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
<!--     <a href="javascript:;" class="line-btn forwardTop-goBack" ng-click="">返回</a> -->
    <!--商户-->
    <div class="content-wrapper fn-clear" ng-if="roleType=='1'">
        <div class="col-md-11 pageTitl">
            <h2 class="am-ft-16 fn-left">店铺管理（共{{count1}}个）</h2>
            <a href="javascript:;" class="btn btn-primary fn-right" ng-click="goRoute('storeAdd','')">添加店铺</a>
        </div>
        <div class="fn-clear"></div>
        <!--缺省-->
        <div class="col-md-12 dafaultWapper" ng-if="count1==0">
			<div class="loadingFormal">
				<img src="../static/base/images/icon_notice.png">
				<span style="font-size:16px;">您还没有添加店铺<a href="javascript:;" ng-click="goRoute('storeAdd','')">立即添加</a></span>
			</div>
		</div>
		
        <div class="ManColTable col-lg-12">
            <form>
                <div class="table-responsive PrivTable storesMgt-Table">
                    <table class="table table-hover table-striped table-bordered">
                        <tr>
                            <th scope="col" width="5%">序号</th> 
                            <th scope="col" width="15%">店铺名称</th>
                            <th scope="col" width="10%">所属商户</th>
                            <th scope="col" width="20%">运营人员</th>
                            <th scope="col" width="20%">店铺网址</th>
							<th scope="col" width="10%">状态</th>
							<th scope="col" width="10%">授权</th>
							<th scope="col" width="10%">操作</th>
                        </tr>
                        <tr ng-repeat="shop in shopList1">
                             <td>{{startIndex+$index+1}}</td> 
                            <td style="text-align: left;">
                            	<input type="hidden" value="shop.orgId" />
                                <img  ng-if="shop.shopType=='2'" class="miniBrand-logo" src="../static/base/images/icon_logo_taobao.png" />
                                <img  ng-if="shop.shopType=='3'" class="miniBrand-logo" src="../static/base/images/icon_logo_tmall.png" />
                                <img  ng-if="shop.shopType=='4'" class="miniBrand-logo" src="../static/base/images/icon_logo_jindong.png" />
                                <img  ng-if="shop.shopType=='0'" class="miniBrand-logo" src="../static/base/images/icon_1688.png" />
                                <img  ng-if="shop.shopType=='1'" class="miniBrand-logo" src="../static/base/images/icon_AliExpress.png" />
                                <img  ng-if="shop.shopType=='5'" class="miniBrand-logo" src="../static/base/images/icon_amazon.png" />
                                <span class="miniBrand-name">{{shop.orgName}}</span>
                            </td>
                            <td>{{shop.merchantName}}</td>
                            <td>{{shop.trueName}}</td>
                            <td>
								<a ng-href="{{shop.shopUrl}}" class="webUrl text-overflow" target="_blank">{{shop.shopUrl}}</a>
							</td>
							<td ng-if="shop.authInfoId==''">未授权</td>
							<td class="am-ft-orange" ng-if="shop.authInfoId!=''">已授权</td>
							<td ng-if="shop.authInfoId==''">
								<a href="javascrpt:;" ng-click="goAuth(this)">申请授权</a>
							</td>
							<td ng-if="shop.authInfoId!=''"></td>
							<td>
								<a href="javascript:;" ng-click="goRoute('storeEdit',this)">编辑</a>
								<a href="javascript:;" class="mgl10 am-ft-red" ng-click="deleteShop(this)">删除</a>
							</td>
                        </tr>
                    </table>
                </div>

            </form>
            <div class="fn-clear"></div>
              <!--分页 start-->
			    <div class="pagelist priv-pagelist">
			    	<div id="paging1"></div>    
			    </div>
		    <!--分页 end-->
        </div>
              
    </div>
		<!--/商户-->
		<!--代运-->
    <div class="content-wrapper" ng-if="roleType=='2'">
        <div class="ManColTable col-lg-12">
            <div class="forwardTop-content fn-left">
                <div class="forwardTop-left">
                    <img ng-src="{{commercialInfo[0].shopLogo}}" />
                </div>
                <div class="forwardTop-right">
                    <div class="forwardTop-righttop">
                        <a href="javascript:;" class="forwardTop-rightTitl">{{commercialInfo[0].shopName}}</a>
                        <p class="fn-right">运营人员：李思思 <a href="javascript:;" class="mgl5 allotOprate" ng-click="change()">更换</a></p>
                        <div class="fn-clear"></div>
                    </div>
                    <p class="am-ft-black">店铺数：<a href="javascript:;">{{commercialInfo[0].count}}个</a></p>
                    <p>联系电话：{{commercialInfo[0].shopTel}}</p>
                    <p>详细地址：{{commercialInfo[0].shopAddr}}</p>
                </div>
            </div>

            <div class="table-responsive PrivTable storesMgt-Table">
                <p class="am-ft-14 am-ft-black mgb10">店铺列表({{count}})</p>
                <table class="table table-hover table-striped table-bordered">
                    <tr>
                        <th scope="col" width="20%">店铺名称</th>
                        <th scope="col" width="35%">店铺网址</th>
                        <th scope="col">状态</th>
                        <th scope="col">授权</th>
                    </tr>
                     <tr ng-repeat="shop in shopList">
                            <td>
                            	<input type="hidden" value="shop.orgId" />
                                <span class="miniBrand-name">{{shop.shopName}}</span>
                                <img  ng-if="shop.shopType=='3'" class="miniBrand-logo" src="../static/base/images/icon_logo_taobao.png" />
                                <img  ng-if="shop.shopType=='4'" class="miniBrand-logo" src="../static/base/images/icon_logo_tmall.png" />
                                <img  ng-if="shop.shopType=='5'" class="miniBrand-logo" src="../static/base/images/icon_logo_taobao.png" />
                                <img  ng-if="shop.shopType=='0'" class="miniBrand-logo" src="../static/base/images/icon_1688.png" />
                                <img  ng-if="shop.shopType=='1'" class="miniBrand-logo" src="../static/base/images/icon_AliExpress.png" />
                                <img  ng-if="shop.shopType=='2'" class="miniBrand-logo" src="../static/base/images/icon_amazon.png" />
                            </td>
                            <td><a href="javascript:;" class="webUrl text-overflow">{{shop.shopUrl}}</a></td>
                            <td ng-if="shop.authInfoId==''">未授权</td>
                            <td class="am-ft-orange" ng-if="shop.authInfoId!=''">已授权</td>
                            <td>———</td>
                    </tr>
                   
                </table>
            </div>
				
            <div class="fn-clear"></div>
        </div>
        
    </div>
    <!--/代运 -->

<!-- 分配运营人员弹窗  -->
<div class="am-dialog forwardMgt-Dialog fn-hide" id="forwardMgt-Dialog3" >
    <i class="fa fa-close closeDia" id="closeDia"></i>
    <div class="am-dialog-wrap">
        <div class="am-dialog-header">
            <h3>选择运营人员</h3>
        </div>
        <div class="note-Dialog">请选择<strong>“杭州勤易科技有限公司”</strong>的运营人员：</div>
        <div class="am-dialog-body">
            <div class="table-responsive forwComMgt-table">
                <table class="table table-striped addInvinfo">
                    <tr>
                        <th scope="col" width="50">&nbsp;</th>
                        <th scope="col">手机号</th>
                        <th scope="col">昵称</th>
                        <th scope="col">负责商户</th>
                        <th scope="col">已完成商品</th>
                        <th scope="col">未完成商品</th>
                    </tr>
                    <tr>
                        <td><i class="fa fa-line-check-white"></i></td>
                        <td>13575455021</td>
                        <td>张三</td>
                        <td>30个</td>
                        <td>300个</td>
                        <td>20个</td>
                    </tr>
                    <!--选中效果-->
                    <tr class="current-operate">
                        <td><i class="fa fa-line-check-white"></i></td>
                        <td>13575455021</td>
                        <td>张三</td>
                        <td>30个</td>
                        <td>300个</td>
                        <td>20个</td>
                    </tr>
                    <tr>
                        <td><i class="fa fa-line-check-white"></i></td>
                        <td>13575455021</td>
                        <td>张三</td>
                        <td>30个</td>
                        <td>300个</td>
                        <td>20个</td>
                    </tr>
                </table>
            </div>
            <div class="fn-clear"></div>

        </div>
        <div class="am-dialog-footer">
            <a href="javascript:;" class="btn btn-default closedialog">取消</a>
            <a href="javascript:;" class="btn btn-primary mgl20">确定</a>
        </div>
    </div>
</div>
<!-- /分配运营人员弹窗  -->
	 <!--删除弹窗-->
    <div class="am-dialog DelDialog fn-hide" id="logOutDialog">
        <div class="am-dialog-wrap">
            <div class="am-dialog-body">
                <h2 class="am-dialog-brief">是否确定删除</h2>
            </div>
            <div class="dialogBtn am-flexbox">
                <button type="button" class="am-flexbox-item btn am-button confirmExecute" am-bg="blue" ng-click="sureDelete()">确认</button>
                <button type="button" class="am-flexbox-item btn am-button closedialog" am-bg="white" ng-click="concelDelete()">取消</button>
                <div class="fn-clear"></div>
            </div>
        </div>
    </div>
    <!--/删除弹窗-->
    <!--申请授权-->
<div class="show-depotdia" id="authConfirm1" ng-show="showAuthorizeDialog=='show'">

	<div class="am-dialog" id="authorizeDialog">
		<div class="am-dialog-wrap">
			<div class="am-dialog-body">
				<h2 class="am-dialog-brief">该功能正在开发中，敬请期待！</h2>
			</div>
			<div class="dialogBtn am-flexbox">
				<button type="button" class="am-flexbox-item btn am-button" ng-click="closeauthorizeDialog()" am-bg="blue">确认</button>
				<div class="fn-clear"></div>
			</div>
		</div>
	</div>
</div>
<!--/申请授权-->
<!--授权提示弹窗-->
<div class="show-depotdia" id="authConfirm2" style="display: none;">
	<div class="accredit-content" id="authConfirm">
		<div class="warn">
			请确认店铺
			<span>[{{AuthShopName}}]</span> 是否授权完成！
		</div>
		<div class="buttonbox fn-clear">
			<button class="yes fn-left" ng-click="finishAuth()">是</button>
			<button class="no fn-left" ng-click="finishAuth()">否</button>
		</div>
	</div>
</div>
