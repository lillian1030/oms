<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!-- 主要 -->
<div class="wrapper" style="position: inherit;">
<!--------------- Content start ----------------->

  <div class="content-wrapper" >
  	  <div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">分类详情</h2>
		 <a href="javascript:;" class="line-btn fn-right" ng-click="goback('')">返回</a>
	</div>
        <!-- content info start -->
        <section class="container-fluid">
           <div class="proList-nav classifyList-nav" style="margin-top: 68px;width: 94%; margin-left: 0px;">
            <div class="proTop">
                <span class="fn-left">类别：<span class="am-ft-black">{{modelGroup.groupName}}</span>（共{{modelGroup.modelCount}}个商品)</span>
                <button  type="button" class="line-btn fn-right width100" ng-click="addProduct()">添加商品</button>
                <div class="fn-clear"></div>
            </div>
                <table width="100%" class="mgb0 table-hover table-condensed productTable">
                  <tr>
                  	 <th width="30%"  align="center" valign="middle" scope="col">商品</th>
                   	 <th width="12%" align="center" valign="middle" scope="col">价格</th>
                   	 <th width="12%" align="center" valign="middle" scope="col">品类</th>
                   	 <th width="12%" align="center" valign="middle" scope="col">库存</th>
                  	 <th width="12%" align="center" valign="middle" scope="col">销量</th>
                  	 <th  align="center" valign="middle" scope="col">操作</th>
                  </tr>
                  <tr ng-repeat="pro in groupProList">
	                  <td class="classifyProBox">
	                  	<div class="fn-clear">
		                  	<div class="fn-left ">
			                  	<input type="checkbox" id="" data="" name="modelId" class="code_checkbox" value="" ng-click="selectAddProduct(this)"/>
		                  	</div>
		                  	<div class="fn-left mgr10">
		                         <img ng-src="{{pro.imageList[0].url}}" class="classifyProImg" style="width:60px;height:60px;"/>
		                  	</div>
		                  	<div class="fn-left">
		                  		<p class="productTitl" ng-if="pro.proName.length<8">{{pro.proName}}</p>
		                  		<p class="productTitl" ng-if="pro.proName.length>8">{{pro.proName |limitTo:8}}...</p>
		                        <!--<p >口味：甜</p>-->
		                  	</div>
	                  	</div>
	                  </td>
	                    <td >
	                        <p ng-if="pro.maxPrice==pro.minPrice">¥{{pro.minPrice}}</p>
	                        <p ng-if="pro.maxPrice!=pro.minPrice">¥{{pro.minPrice}}~{{pro.maxPrice}}</p>
	                   </td>
	                   <td >
	                  		{{pro.sortName}}
	                    </td> 
	                   <td >
	                  		{{pro.sumStkOnHand}}
	                    </td> 
	                   <td >
	                  		{{pro.sumQtyCmtd}}
	                    </td> 
	                    <td class="setClassify_span">
	                    	<span class="am-ft-black mgr15 cursor-pointer">查看</span>
	                    	<span class="am-ft-gray" ng-dblclick="deleteOne(this)">删除</span>
	                    </td>
                  </tr>
              </table>
              <!-- List end -->
            <div class="fn-clear"></div>
        </div>
         <div class="soldOut-batch fn-left">
          		<label class="label-input am-ft-black">
                    <input type="checkbox" id="selectDeleteAll" name=""  value=""  ng-click="setDeleteCheckAll()"/>全选
          		</label>
                    <button type="button" class="btn btn-default  white-blue-btn" ng-click="deleteBatch()">批量删除</button>
                <div class="fn-clear"></div>
            </div>
        </section>
	    <!--分页 start-->
	    <div class="pagelist priv-pagelist" style="width: 92.5% !important;">
	    	<div id="paging"></div>    
	    </div>
	    <!--分页 end-->
   </div>
   <!--添加商品弹框-->
   <div class="addGoodsAndStoreCover" ng-if='model.isShowFrame=="1"' >
		<div class="AddGoodsAndStoreItem fn-clear " >
			<div class="addItemTitle">
				<span>从商品中添加至分类</span>
				<div>
					<img src="../static/base/images/closelogo.png" class="closeDia" ng-click="closeDia()"/>
				</div>	
			</div>
			<div class="col-md-12 AddsGoodsscreeningConditionBox ">
				<div class="col-md-5 AddsGoodsscreeningCondition">
					<div>商品名称：</div>
					<input type="text" name="" ng-model="model.proName" />
				</div>
				<div class="col-md-4 AddsGoodsscreeningCondition">
					<button class="search-btn" ng-click="getModelProList()">查询</button>
				</div>
			</div>
			<div class="col-md-12 addGoodsTableBox" style="max-height:320px;">
			<form id="proInfo">	
				<table class="addGoodsTable">
					<tr>
						<th scope="col" width="5%"></th>
						<th scope="col" width="20%">商品名称</th>
						<th scope="col" width="15%">价格</th>
						<th scope="col" width="15%">品类</th>
						<th scope="col" width="15%">库存</th>
						<th scope="col" width="15%">销量</th>
					</tr>
					<tr ng-repeat="pro in proList">
						<td style="border-right: none;">
							<input type="checkbox" class="mgr0 code_addcheckbox" name="productInfo" ng-click="selectAddProduct(this)" />
						</td>
						<td style="border-left: none;">{{pro.proName}}</td>
						<td >
							<p ng-if="pro.maxPrice==pro.minPrice">¥{{pro.minPrice}}</p>
	                        <p ng-if="pro.maxPrice!=pro.minPrice">¥{{pro.minPrice}}~{{pro.maxPrice}}</p>
						</td>
						<td >{{pro.sortName}}</td>
						<td >
	                  		{{pro.sumStkOnHand}}
	                    </td> 
	                   <td >
	                  		{{pro.sumQtyCmtd}}
	                    </td> 
					</tr>
				</table>
				</form>
			</div>
			<div class="col-md-12 checkAllBar">
				<!--<label >
					<input  type="checkbox" ng-model="currentPage" ng-checked="currentPage" ng-click="selectProduct(products,'2')"/>
					全选当前页
				</label>-->
				<label >
					<input type="checkbox" id="selectAddAll" ng-click="setAddCheckAll()"/>
					全选
				</label>
				<div class="priv-pagelist fn-left" style="margin: 0;width: 85%;">
				<div id="paging1"></div>    
   				 </div>
			</div>
			<div class="fn-clear"></div>
			<div class="AddsGoodsItemBoundary"></div>
			<div class="AddsGoodsBtnBox">
				<button ng-click="closeDia()">取消</button>
				<button ng-click="saveModelGroupDetail()">添加</button>
			</div>
		</div>
		</div>
   <!--/添加商品弹框-->
    <!--下架弹框-->
    <div class="maskbgCover fn-hide" id="downProduct">
	<div class="isTipsFrame ">
		<div class="isTipsFrameTitle">
			<span class="am-ft-14 am-ft-black">提示</span>
			<img class="fn-right closeDia" ng-click="closeDia()" src="../static/base/images/closelogo.png" />
		</div>
		<div class="isTipsFrameContent am-ft-14 fn-clear">
			<div class="fn-left wdpro-frameL">
				<img src="../static/base/images/icon_cue.png" />
			</div>
			<div class="fn-left wdpro-frameR">
				<p class="am-ft-black am-ft-14">确认下架</p>
				<p class="am-ft-black am-ft-12">下架后，商品不对用户可见，是否确认下架？ </p>
			</div>
		</div>
		<div class="isTipsFrameFooter">
			<button class="closeDia whiteGroundBlueBtn" ng-click="">取消</button>
			<button class="blueGroundWhiteBtn" ng-click="">下架</button>
		</div>
	</div>
</div>
    <!--/下架弹框-->
<script type="text/javascript">
    //搜索方式
    $(".isTipsFrame").center();
  //二维码尺寸滑块选择
    $('.set-codeSize').click(function(){
        $('.codeSize-dialog').toggle();
    });
   		 $(".AddGoodsAndStoreItem").center();
		$('.addGoodsAndStoreCover').click(function(e) {
		if(e.target.className == "addGoodsAndStoreCover ng-scope") {
			$('.addGoodsAndStoreCover').hide();
		}
		});
//		$(".closeDia").click(function(){
//			$(".AddGoodsAndStoreItem,.addGoodsAndStoreCover").hide();
//		}); 
</script>
