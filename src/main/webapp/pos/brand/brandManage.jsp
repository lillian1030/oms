<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--Ztree-->

<!--遮罩 start-->

<!--遮罩 end-->
<!--------------- Content start ----------------->
   <!-- Main content -->
    <div class="content-wrapper newbrand-wrapper">
    	<!--------我的品牌-------->
	    <div class="col-md-11 pageTitl">
	        <h2 class="am-ft-16 fn-left">我的品牌（{{brandCount}}）</h2>
	    </div>
	    <!-- Main content -->
	    <div class="ManColTable col-lg-12">
	    	<div class="new-mybrand">
	    		<!--我的品牌-->
	    		<div ng-repeat="brand in brandList" ng-if="brand.brandJoinType=='1'" class="brand-item">
	    			<div class="brand-item-top">
	    				<a href="javascript:;" ng-click="goRoute('brandDet',this)"><img ng-src="{{brand.logo}}" /></a>
	    				<a href="javascript:;" ng-click="goRoute('brandDet',this)" class="brand-titl">{{brand.brandName}}</a>
	    				<p >自有品牌</p>
	    			</div>
	    			<div class="brand-item-mid">{{brand.brandInfo}}</div>
	    			<p>
	    				<span class="am-ft-black fn-left mgl10">授权码：{{brand.brandLicense}}</span>
	    				<a href="javascript:;" class="fn-right mgr10" ng-click="goRoute('brandDet',this)">查看详情</a>
	    			</p>
	    			<img class="icon-brand-type" src="http://static.qineasy.com/base/images/icon_brand_self.png" />
	    		</div>
	    		<div ng-repeat="brand in brandList" ng-if="brand.brandJoinType=='2'" class="brand-item">
	    			<div class="brand-item-top">
	    				<a href="javascript:;" ng-click="goRoute('brandDet',this)"><img ng-src="{{brand.logo}}" /></a>
	    				<a href="javascript:;" ng-click="goRoute('brandDet',this)" class="brand-titl">{{brand.brandName}}</a>
	    				<p >自主加盟品牌</p>
	    			</div>
	    			<div class="brand-item-mid">{{brand.brandInfo}}</div>
	    			<p>
	    				<span class="am-ft-black fn-left mgl10">授权码：{{brand.brandLicense}}</span>
	    				<a href="javascript:;" class="fn-right mgr10" ng-click="goRoute('brandDet',this)">查看详情</a>
	    			</p>
	    			<img class="icon-brand-type" src="http://static.qineasy.com/base/images/icon_brand_join.png" />
	    		</div>
	    		<div ng-repeat="brand in brandList" ng-if="brand.brandJoinType=='3'" ng-class="{true:'brand-item',false:'brand-item brand-item-wait'}[brand.brandReviewStatus=='2']">
	    			<div class="brand-item-top">
	    				<a href="javascript:;" ng-click="goRoute('brandDet',this)"><img ng-src="{{brand.logo}}" /></a>
	    				<a href="javascript:;" ng-click="goRoute('brandDet',this)" class="brand-titl">{{brand.brandName}}</a>
	    				<p >授权加盟品牌</p>
	    				<p >授权方：{{brand.pOrgName}}</p>
	    			</div>
	    			<div ng-if="brand.brandReviewStatus=='2'">
		    			<div class="brand-item-mid">{{brand.brandInfo}}</div>
		    			<p>
		    				<span class="am-ft-black fn-left mgl10">授权码：{{brand.brandLicense}}</span>
		    				<a href="javascript:;" class="fn-right mgr10" ng-click="goRoute('brandDet',this)">查看详情</a>
		    			</p>
		    			<img class="icon-brand-type" src="http://static.qineasy.com/base/images/icon_brand_join.png" />
	    			</div>
	    			<div ng-if="brand.brandReviewStatus=='1'">
	    				<p class="impower-tip">等待授权方审核</p>
	    			</div>
	    		</div>
	    		<!--添加品牌-->
	    		<div class="brand-item brand-item-add">
	    			<a href="javascript:;" ng-click="addtr(this)">+&nbsp;添加品牌</a>    				   			
	    		</div>
	    		<div class="fn-clear"></div>
	    	</div>
	    	<!-----------品牌授权申请审核------------>
	    	<div class="col-md-11 pageTitl brandmgt_pagetitl" ng-if="applyCount>0">
		        <h2 class="am-ft-16 fn-left">品牌授权申请审核（{{applyCount}}）</h2>
		    </div>
		    <div class="newBrandTable">
		    	<table class="table table-hover table-striped" ng-if="applyCount>0">
		    		<tr>
		    			<th>品牌名称</th>
		    			<th>申请商户</th>
		    			<th>申请时间</th>
		    			<th>操作</th>
		    		</tr>
		    		<tr class="activeUse" ng-repeat="apply in applys">
		    			<td><img ng-src="{{apply.logo}}" />{{apply.brandName}}</td>
		    			<td>{{apply.applyOrgName}}</td>
		    			<td>{{apply.createTime}}</td>
		    			<td ng-if="apply.brandApplyStatus=='1'">
		    				<a href="javascript:;" class="line-btn fn-left" ng-click="refused(this)">拒绝</a>
		    				<a href="javascript:;" class="fn-left btn btn-primary" ng-click="adopted(this)">通过</a>
		    			</td>
		    			<td class="am-ft-green" ng-if="apply.brandApplyStatus=='2'">已通过</td>
		    			<td ng-if="apply.brandApplyStatus=='3'">已拒绝</td>
		    		</tr>
		    	</table>
		    	<!--分页 start-->
			    <div class="pagelist priv-pagelist">
			    	<div id="paging"></div>    
			    </div>
			    <!--分页 end-->
		    </div>
	        <!--<form id="brandForm">
	            <div class="table-responsive  brandTable ">
	
	                <table class="table table-hover table-striped table-bordered">
	                    <tr>
	                        <th scope="col" class="col-lg-3">品牌名称</th>
	                        <th scope="col" class="col-lg-3">申请方名称</th>
	                        <th scope="col" class="col-lg-3">审核状态</th>
	                        <th scope="col" class="col-lg-3">操作</th>
	                    </tr>
	                   <tr ng-repeat="apply in applys" ng-model="apply" >
	                        <td id="brandName">
	                       
	                        <input type="hidden"  value="{{apply.brandId}}" disabled />
	                        	{{apply.brandName}}
	                        </td>
	                        <td>
	                       
								{{apply.applyOrgName}}
							</td>
	                        <td>
	                        
	                        	<input   value="待审核" ng-if="apply.brandApplyStatus == 1" class="brandCheck"  disabled />
	                       		<input   value="已通过" ng-if="apply.brandApplyStatus == 2" class="brandPass" disabled />
	                       		<input   value="已拒绝" ng-if="apply.brandApplyStatus == 3" class="brandRefused" disabled />
	                        </td>
	                        <td ng-if="apply.brandApplyStatus == 1">
	                        	<div class="brandBtnCenter fn-clear">
	                        		 <button type="button" class="brandBtnPass   fn-left" ng-click="adopted(this)">通过</button>
	                                 <button type="button" class="brandBtnRefused  fn-left "  ng-click="refused(this)">拒绝</button>
	                        	</div>
	                          
	                        </td>
	                        <td ng-if="apply.brandApplyStatus != 1">
	                        </td>
	                    </tr>
	                    
	                </table>
	                <div class="fn-clear"></div>
	            </div>
	        </form>-->
	        <div class="fn-clear"></div>
	    </div>
	    <div class="fn-clear"></div>
	</div>
</div>

<!--添加品牌弹窗-->
	<div class="maskBga" ng-show="show"></div>
	<div class="sure-to-join" ng-show="show">
		<div class="top clearfix">
			<div class="warning">提示</div>
			<div class="close-log" ng-click="close()">
				<img src="http://static.qineasy.com/base/images/closelogo.png"/>
			</div>
		</div>
		<div class="join-text">
			<p>请选择添加:</p>
		</div>
		<div class="type-select clearfix">
			<a href="javascript:;" class="join-brand" ng-click="ownBrandSelect()">自有品牌</a>
			<a href="javascript:;" class="own-brand" ng-click="joinBrandSelect()">加盟品牌</a>
		</div>
	</div>
<!--/添加品牌弹窗-->
<jsp:include page="../../public/accredit_join_brand_step_join.jsp"/> 
<jsp:include page="../../public/footstyle.jsp"/> 