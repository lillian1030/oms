<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--商户管理主页-->
<!--------------- Content start ----------------->
<div class="content-wrapper content-member-wrapper sku-content-wrapper content-forward-wrapper">
    <div class="ManColTable col-lg-12">
        <div class="col-lg-12 pl0 pr0">
            <h2 class="am-ft-16 fn-left color666">商户管理（共{{count}}个商户）</h2>
            <a  href="javascript:;" class="btn btn-primary fn-right" style="height:28px;line-height:14px;" ng-click="goRoute('commercialAdd',this)">添加商户</a>
            
	         <div class="OderlistSearch mgt0 col-md-4 fn-right" ng-if="count>0">
                <div class="col-md-12 searchBox pl0">
                    <input type="text" class="col-sm-10 mgt-8" ng-model="shopName" placeholder="商户名称" value="" />
                    <a href="javascript:;" class="fn-left search-icon" ng-click="search(shopName)">查询</a>
                </div>
                <div class="fn-clear"></div>
	        </div>  
	        <div class="fn-clear"></div>
        </div>
		<!--缺省-->
        <div class="col-md-12 dafaultWapper" ng-if="count==0">
			<div class="loadingFormal" ng-if="addShowFlag">
				<img src="../static/base/images/icon_notice.png">
				<span  style="font-size:16px;">您还没有添加商户<a ng-if="userInfo.roleId=='13'||userInfo.roleId=='14'||userInfo.roleId=='5'" href="javascript:;" class="mgl10" ng-click="goRoute('commercialAdd',this)">立即添加</a></span>
			</div>
		</div>

        <!-- 商户列表 -->
        <div class="col-lg-12" style="padding: 0;">
            <div class="productCenterInfo">
                <table class="table table-hover table-striped productTable" ng-if="count>0">
                    <tr ng-if="userInfo.roleId=='1'">
                        <th width="40%" colspan="2">商户</th>
                        <th width="10%">全部商品</th>
                        <th width="10%">未发布商品</th>
                        <th width="10%">素材图片</th>
                        <th width="10%">正式图库</th>
                        <th width="10%" >人员</th>
                        <th width="10%" >操作</th>
                    </tr>
                    <tr ng-if="userInfo.roleId=='5'">
                        <th width="40%" colspan="2">商户</th>
                        <th width="12%">全部商品</th>
                        <th width="12%">未发布商品</th>
                        <th width="12%">素材图片</th>
                        <th width="12%">正式图库</th>
                        <th width="12%" >操作</th>
                    </tr>
                    <tr ng-if="userInfo.roleId=='2'">
                        <th width="40%" colspan="2">商户</th>
                        <th width="15%">全部商品</th>
                        <th width="15%">未发布商品</th>
                        <th width="15%">素材图片</th>
                        <th width="15%">正式图库</th>
                    </tr>
                    <!--未分配-->
                    <tr ng-repeat="orgManage in orgManageList" ng-model="orgManage">
                        <td class="orgManageProImg" ng-if="orgManage.shopLogo==''">
                           <img src="http://static.qineasy.com/base/images/img_default_company.png" class="productImg" title="" alt="" />
                        </td>
                        <td class="orgManageProImg" ng-if="orgManage.shopLogo!=''">
                           <img ng-src="{{orgManage.shopLogo}}" class="productImg" title="" alt="" />
                        </td>
                        <td class="comProducInfo">
                            <a href="javascript:;" class="productTitl" ng-click="goRoute('productList',this)">{{orgManage.shopName}}</a>
                            <p class="am-ft-black">店铺数：<a href="javascript:;" ng-click="goRoute('commercialStore',this)">{{orgManage.shopNum}}个</a></p>
                            <p>联系电话：{{orgManage.shopTel}}</p>
                            <p>详细地址：{{orgManage.province}}{{orgManage.city}}{{orgManage.district}}{{orgManage.shopAddr}}</p>
                        </td>
                        <td><a href="javascript:;" ng-click="goRoute('productList',this)">{{orgManage.allPublishNum}}个</a></td>
                        <td><a href="javascript:;"  ng-click="goRoute('productList',this)">{{orgManage.unPublishNum}}个</a></td>
                        <td><a href="javascript:;" ng-click="goRoute('materiaDet',this)">素材图片</a></td>
                        <td><a href="javascript:;" ng-click="goRoute('mapDepotDet',this)">正式图库</a></td>
                        <td ng-if="orgManage.userName==''&&userInfo.roleId=='1'"><a href="javascript:;" class="allotOprate" ng-click="selectUser(this)">分配</a></td>
                        <td ng-if="orgManage.userName!=''&&userInfo.roleId=='1'">
                        	<a href="javascript:;" class="allotOprate" ng-click="selectUser(this)">分配</a>
                        	<p class="am-ft-gray disNames">{{orgManage.userName}}</p>
                        </td>
                        <td><a ng-if="userInfo.roleId=='1'||userInfo.roleId=='5'" href="javascript:;" style="color:#00afd4;" ng-click="goRoute('commercialInfoEdit',this)">编辑</a></td>
                    </tr>
                </table>
                 <!--分页 start-->
			    <div class="pagelist priv-pagelist">
			    	<div id="pagingMain"></div>    
			    </div>
			    <!--分页 end-->
            </div>
            <div class="fn-clear"></div>
        </div>
        <!-- /商品列表 -->
    </div>
    <div class="fn-clear"></div>
</div>

<!-- 分配运营人员弹窗  -->
<!--<div class="am-dialog forwardMgt-Dialog fn-hide" id="forwardMgt-Dialog">
    <i class="fa fa-close closeDia" id="closeDia"></i>
    <div class="am-dialog-wrap">
        <div class="am-dialog-header">
            <h3>选择运营人员</h3>
        </div>
        <div class="note-Dialog">请选择<strong>“{{selectShopName}}”</strong>的运营人员：</div>
        <div class="am-dialog-body">
            <div class="table-responsive forwComMgt-table">
                <table class="table table-striped addInvinfo" style="max-height:300px;overflow-y:auto">
                    <tr>
                        <th scope="col" width="50">&nbsp;</th>
                        <th scope="col">手机号</th>
                        <th scope="col">昵称</th>
                        <th scope="col">负责商户</th>
                        <th scope="col">已完成商品</th>
                        <th scope="col">未完成商品</th>
                    </tr>
                    <tr ng-repeat="user in userList" ng-click="clickUser(this)">
                        <td><i class="fa fa-line-check-white"></i></td>
                        <td>{{user.telphone}}</td>
                        <td>{{user.trueName}}</td>
                        <td>{{user.orgNum}}个</td>
                        <td>{{user.doneProNum}}个</td>
                        <td>{{user.unDoProNum}}个</td>
                    </tr>
                </table>
            </div>
            <div class="fn-clear"></div>

        </div>
        <div class="am-dialog-footer">
            <a href="javascript:;" class="btn btn-primary " ng-click="doOrgManage()">确定</a>
            <a href="javascript:;" class="btn btn-default closedialog mgl20">取消</a>
        </div>
    </div>
</div>-->
<!-- /分配运营人员弹窗  -->

<!--删除弹窗-->
<div class="am-dialog DelDialog fn-hide">
    <div class="am-dialog-wrap">
        <div class="am-dialog-body">
            <h2 class="am-dialog-brief">是否确定删除</h2>
        </div>
        <div class="dialogBtn am-flexbox">
            <button type="button" class="am-flexbox-item btn am-button" am-bg="blue">确认</button>
            <button type="button" class="am-flexbox-item btn am-button closedialog" am-bg="white">取消</button>
            <div class="fn-clear"></div>
        </div>
    </div>
</div>
<!--/删除弹窗-->

<!-- 新--分配运营人员弹窗  -->
<div class="am-dialog forwardMgt-Dialog allotMemDialog fn-hide" id="forwardMgt-Dialog">
    <i class="fa fa-close closeDia" id="closeDia"></i>
    <div class="am-dialog-wrap">
        <div class="am-dialog-header">
            <h3>人员分配</h3>
        </div>
        <div class="det-top">
			<img src="http://static.qineasy.com/base/images/img_default_company.png">
			<h3>{{selectShopName}}</h3>
		</div>
		
        <div class="am-dialog-body">
        	<div class="dialog-top">
        		<select class="fn-left" ng-model="roleIds">
        			<option value="">所有人员</option>
        			<option value="2">运营人员</option>
        			<option value="5">商务人员</option>
        		</select>
        		<div class="searchBox fn-left">
                    <input type="text" class="fn-left " placeholder="请输入姓名查询" value="" ng-model="userName">
                    <a href="javascript:;" class="fn-left"  ng-click="getUserList()">查询</a>
                </div>
                <div class="fn-clear"></div>
        	</div>
            <div class="new-dialog-container">	
            	<p class="selectednote">已选人员：</p>
				<ul class="data-list" id="lList">
					<li ng-repeat="user in userList" >
						<div ng-dblclick="doOneAdd(this)">
							<input id="l{{user.userId}}" type="checkbox" value=""/>
							<span>{{user.trueName}}</span>
							<span>{{user.roleName}}</span>
							<div class="fn-clear"></div>
						</div>											
					</li>
				</ul>				
				<div class="button-box">
					<button type="button" name="button" id="add" ng-click="doAdd()">添 加</button>
					<button type="button" name="button" id="remove" ng-click="doRemove()">移 除</button>
				</div>
				<ul class="data-list" id="rList">
					<li ng-repeat="user in userCheckList" ng-dblclick="doOneRemove(this)">
						<input id="r{{user.userId}}" type="checkbox" value=""/>
						<span>{{user.trueName}}</span>
						<span>{{user.roleName}}</span>
						<div class="fn-clear"></div>											
					</li>
				</ul>				
			</div>                          
            <div class="fn-clear"></div>
        </div>
        <div class="am-dialog-footer">
            <a href="javascript:;" class="btn btn-primary " ng-click="doOrgManage()">确认</a>
            <a href="javascript:;" class="btn btn-default closedialog mgl20">取消</a>
        </div>
    </div>
</div>
<!-- /新--分配运营人员弹窗  -->

<!--新--分配运营人员JS
<script type="text/javascript">
	$(function(){
		var lList = $("#lList");
		var llList = document.getElementById("lList");
		var rList = $("#rList");
		var items = $(".data-list li");
		for(var i = 0;i<items.length;i++){
			items[i].onclick = itemsclick;
			items[i].ondblclick = itemsdblclick;
		}
		function itemsdblclick(){
			if (this.parentNode === llList) {
				rList.append(this);
			}else{
				lList.append(this);
			}
		}
		function itemsclick(){
			var classname = this.className;
			if(classname === "selected"){
				this.className = "";
				$(this).find('input').prop('checked',false);
			}else{
				this.className="selected";
				$(this).find('input').prop('checked',true);
			}
		}
		function itemsMove(){
			var items = $(".data-list li.selected");
			for(var i = 0;i<items.length;i++){
				if(this.id === "add"){
					rList.append(items[i]);
				}else{
					lList.append(items[i]);
				}
			}
			$(".data-list li").removeClass('selected').end().find('input').prop('checked',false);
		}
		$("#add").on("click",itemsMove);
		$("#remove").on("click",itemsMove);
	});
	
</script>
-->