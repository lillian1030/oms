<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--Ztree-->

<!--遮罩 start-->

<!--遮罩 end-->

<!---- Content Wrapper start ---->
<div class="content-wrapper">
	<!-- Main content -->
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">添加商品</h2>
		<a href="javascript:;" class="line-btn fn-right" ng-click="goback()">返回</a>
	</div>
	<div class="fn-clear"></div>
		<section class="container-fluid">
			<div class="row">
				<div class="prodet-nav prodet-content">
					<div class="prodet-box">
					<form id="addproductForm">
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14">
								<em class="am-ft-red mgr5">*</em>品类：
							</div>
							<div class="col-md-2 form-group pr0 mgr5" id="ProSorts">
								<select class="col-md-12"
									ng-options="g.sortId as g.sortName for g in item0"
									ng-model="proSortId" ng-change="changeSort(proSortId)">
								</select>
							</div>
						</div>
						<!--row4
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14">
								<em class="am-ft-red mgr5">*</em>单位：
							</div>
							<div class="col-md-2 form-group">
								<input type="text" ng-model="proUom" placeholder="" />
							</div>
						</div>--row5---->
						<div class="row" ng-if="proSortId=='130906331'">
							<div class="nowraps-text inprodet-titl am-ft-14">商品属性：</div>
							<div class="col-md-10 form-group pro-property">
								<!--row1-->
								<div class="row">
									<div class="col-md-2 inprodet-titl am-ft-12">
										<em class="am-ft-red mgr5">*</em>货号：
									</div>
									<div class="col-md-4 form-group">
										<input type="text" class="text-overflow" name="proModelnum"
											ng-model="proModelnum" placeholder="" />
									</div>
									<div class="col-md-2 inprodet-titl am-ft-12">
										<em class="am-ft-red mgr5">*</em>品牌：
									</div>
									<div class="col-md-4 form-group">
										<input type="text" name="brandName" placeholder="" />
									</div>
								</div>
								<!--inner row1-->
								<div class="row">
									<div class="col-md-2 inprodet-titl am-ft-12">
										<em class="am-ft-red mgr5">*</em>年份：
									</div>
									<div class="col-md-4 form-group">
										<select name="proYear" class="col-md-8" ng-model="proYear"
											ng-change="changeProName(itemsSort,itemsSelectSortId)">
											<option value="{{year}}" ng-repeat="year in years">{{year}}</option>
										</select>
									</div>
									<div class="col-md-2 inprodet-titl am-ft-12">
										<em class="am-ft-red mgr5">*</em>季节：
									</div>
									<div class="col-md-4 form-group">
										<select name="proSeason" class="col-md-8">
											<option value="春">春</option>
											<option value="夏">夏</option>
											<option value="秋">秋</option>
											<option value="冬">冬</option>
										</select>
									</div>
								</div>
								<!----row3---->
							</div>
						</div>						

						<div class="row" ng-if="proSortId=='130906332'">
							<div class="nowraps-text inprodet-titl am-ft-14">商品属性：</div>
							<div class="col-md-10 form-group pro-property">
								<div class="row">
									<div class="col-md-2 inprodet-titl am-ft-12">品牌：</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" ng-model="proAttrArr[0].attrValue" name="" placeholder="" />
									</div>
									<div class="col-md-2 inprodet-titl am-ft-12">生产产家：</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" ng-model="proAttrArr[1].attrValue" placeholder="" />
									</div>
								</div>
								<div class="row">
									<div class="col-md-2 inprodet-titl am-ft-12"><em class="am-ft-red mgr5">*</em>净重(g)：</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" ng-model="proAttrArr[2].attrValue" name="" placeholder="" />
									</div>
									<div class="col-md-2 inprodet-titl am-ft-12">生产日期：</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" ng-model="proAttrArr[3].attrValue" placeholder="" />
									</div>
								</div>
								<div class="row">
									<div class="col-md-2 inprodet-titl am-ft-12">保质期：</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" ng-model="proAttrArr[4].attrValue" name="" placeholder="" />
									</div>
									<div class="col-md-2 inprodet-titl am-ft-12">食品添加剂：</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" ng-model="proAttrArr[5].attrValue" placeholder="" />
									</div>
								</div>
								<div class="row">
									<div class="col-md-2 inprodet-titl am-ft-12">适用年龄：</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" ng-model="proAttrArr[6].attrValue" name="" placeholder="" />
									</div>
									<div class="col-md-2 inprodet-titl am-ft-12"><em class="am-ft-red mgr5">*</em>产地：</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" ng-model="proAttrArr[7].attrValue" placeholder="" />
									</div>
								</div>
							</div>
						</div>
						
						<div class="row" ng-if="proSortId=='130906333'">
							<div class="nowraps-text inprodet-titl am-ft-14">商品属性：</div>
							<div class="col-md-10 form-group pro-property">
								<div class="row">
									<div class="col-md-2 inprodet-titl am-ft-12">货号：</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" name="" ng-model="proAttrArr[0].attrValue" placeholder="" />
									</div>
									<div class="col-md-2 inprodet-titl am-ft-12">品牌：</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" name="" ng-model="proAttrArr[1].attrValue" placeholder="" />
									</div>
								</div>
								<div class="row">
									<div class="col-md-2 inprodet-titl am-ft-12"><em class="am-ft-red mgr5">*</em>材质：</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" name="" ng-model="proAttrArr[2].attrValue" placeholder="" />
									</div>
									<div class="col-md-2 inprodet-titl am-ft-12">尺寸：</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" name="" ng-model="proAttrArr[3].attrValue" placeholder="" />
									</div>
								</div>
								<div class="row">
									<div class="col-md-2 inprodet-titl am-ft-12"><em class="am-ft-red mgr5">*</em>适用年龄：</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" name="" ng-model="proAttrArr[4].attrValue" placeholder="" />
									</div>
								</div>
							</div>
						</div>
						
						<div class="row" ng-if="proSortId=='130906334'">
							<div class="nowraps-text inprodet-titl am-ft-14">商品属性：</div>
							<div class="col-md-10 form-group pro-property">
								<div class="row">
									<div class="col-md-2 inprodet-titl am-ft-12">货号：</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" name="" ng-model="proAttrArr[0].attrValue" placeholder="" />
									</div>
									<div class="col-md-2 inprodet-titl am-ft-12"><em class="am-ft-red mgr5">*</em>品牌：</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" name="" ng-model="proAttrArr[1].attrValue" placeholder="" />
									</div>
								</div>
								<div class="row">
									<div class="col-md-2 inprodet-titl am-ft-12"><em class="am-ft-red mgr5">*</em>产地：</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" name="" ng-model="proAttrArr[2].attrValue" placeholder="" />
									</div>
									<div class="col-md-2 inprodet-titl am-ft-12">功效：</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" name="" ng-model="proAttrArr[3].attrValue" placeholder="" />
									</div>
								</div>
								<div class="row">
									<div class="col-md-2 inprodet-titl am-ft-12">适合肤质：</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" name="" ng-model="proAttrArr[4].attrValue" placeholder="" />
									</div>
									<div class="col-md-2 inprodet-titl am-ft-12">适用年龄：</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" name="" ng-model="proAttrArr[5].attrValue" placeholder="" />
									</div>
								</div>
							</div>
						</div>
						<!--row6-->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>商品名称：</div>
							<div class="col-md-8 form-group">
								<input type="text" class="col-md-8 text-overflow" name="proName" placeholder="" />
							</div>
						</div>
						<!----row7--
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>价格：</div>
							<div class="col-md-2 form-group needValInfo">
								<input type="text" class="col-md-10 text-overflow" name="proPrice" placeholder="" value="" />&nbsp;元
							</div>
						</div>-->
						</form>
						<!----row8商品规格---->
						<form id="productListForm">
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>商品规格：</div>
							<!----innerrow7-1 选择颜色---->
							<div class="col-md-10 form-group pro-property saleSumary-wrapper pt10 pb0">
								<!--inner row1-->
								<div class="col-md-8 am-ft-12 am-ft-left paddinglr0 mgb0">
									<span class="mgl10">请选择本商品规格</span>
									<button class="addBtnBlue"  ng-click="editCategory()">+添加规格</button>
								</div>
								<div class="firstTab col-md-8  pl0 mgl0 addPro_tab" style="background: none;">
									<ul class="fn-clear pl0">
											<li class="fn-left" ng-repeat="sepcGroup in productSpecGroup" ng-if="proSortId!='130906331'" ng-class='{"tabactive":tabType==sepcGroup.specGroupIndex}' ng-click='shiftStandardTab(sepcGroup.specGroupIndex)'>{{sepcGroup.specGroupName}}</li>
											<li class="fn-left" ng-if="proSortId=='130906331'" ng-class='{"tabactive":tabType=="0"}' ng-click='shiftStandardTab1("0")'>颜色</li>
											<li class="fn-left" ng-if="proSortId=='130906331'" ng-class='{"tabactive":tabType=="1"}' ng-click='shiftStandardTab1("1")'>尺码</li>
										<!-- <li class="fn-left" ng-class='{"tabactive":tabType=="3"}' ng-click='shiftStandardTab("3")'>重量</li> -->
									</ul>
								</div>
								
								<div class="col-md-12 addStandard_wd">
									<div class="fn-clear mgt10" id="productSpecGroup">
										<!-- <label class="label-input" ng-repeat="productSpec in sepcGroup.productSpec">
											<input type="checkbox" value="{{productSpec.productSpecId}}"/>{{productSpec.specName}}
										</label> -->
									</div>
									<div class="mgb10">
										<button class="addBtnBlue mgl10" ng-click="editCategory()">+添加自定义规格</button>
										<span class="am-ft-gray">如果您觉得我们提供的规格无法满足您的需求，您可以手动添加自定义规格</span>
									</div>
								</div>
								
							</div>	
							<!--规格-->
							<div class="col-md-1 inprodet-titl">&nbsp;</div>
							<div ng-if="productList.length>0" class="col-md-10 form-group table-responsive corlorSizeTable addPro_wd" style="margin-left: 9px;border:none;">
								<div class="fn-clear">
									<label class="label-input fn-left">
										<input type="checkbox" ng-click="unifyAdjustPriceFlag($event,this)"/>统一设置价格
									</label>
									<input type="text" class="fn-left" ng-disabled="unifyAdjustPriceDis" ng-model="adjustPrice" ng-change="unifyAdjustPrice(this)"/>
									<label class="label-input mgl10 fn-left">
										<input type="checkbox" ng-click="unifyStkOnHandFlag($event,this)"/>统一设置库存
									</label>
									<input type="text" class="fn-left" ng-disabled="unifyStkOnHandDis" ng-model="stkOnHand" ng-change="unifyStkOnHand(this)"/>
								</div>
								<div class="mgt10">
								<table  width="100%" class="table table-condensed "  style="border: 1px solid #dcdce7;">
									<tr id="specTable">
										<th scope="col" width="25%" ng-repeat="item in itemList">{{item}}</th>
										<th scope="col" width="25%">价格</th>
										<th scope="col" width="25%">库存</th>
									</tr>
									<tr ng-repeat="product in productList | orderBy:product.proColorId">
										<td ng-if="product.item1!=''">{{product.item1Name}}</td>
										<td ng-if="product.item2!=''">{{product.item2Name}}</td>
										<td ng-if="product.item3!=''">{{product.item3Name}}</td>
										<td ng-if="product.proColorId!=''">{{product.proColorName}}</td>
										<td ng-if="product.proSize!=''">{{product.proSizeName}}</td>
										<td>
											<input type="text" ng-disabled="!unifyAdjustPriceDis" ng-model="product.adjustPrice"/>
										</td>
										<td>
											<input type="text" ng-disabled="!unifyStkOnHandDis" ng-model="product.stkOnHand"/>
										</td>
									</tr>
								</table>
							</div>
							<div class="fn-clear"></div>
						</div>
						</form>		
						<!----row8商品图片---->
						<div class="row proPic">
							<div class="nowraps-text inprodet-titl am-ft-14 mgl15">商品图片：</div>
							<div class="col-md-10">
								<p class="am-ft-red">(请上传700*700以上图片，小于3M)</p>
								<!--row1-->
								<div class="mainPhot">
									<div class="row">
										<p class="am-ft-darkgray mgb15 col-md-12">
											<span class="col-md-2"><em class="am-ft-red mgr5">*</em>商品主图</span>
											<span class="col-md-9 mgl35">细节图<em class="line"></em></span>
										</p>
										<div class="col-md-3" style="width: 20%">
											<div class="photoBox">
												<div class="photoBg">
													<input type="file" name="files" ngf-select="uploadMain($files,'main1','1')" value="" />
													<img alt="" src="http://static.qineasy.com/base/images/photobg.jpg" id="main1">
												</div>
												<div class="phoboxbt">
													<a ng-click="clearImage('main1','1')"><i class="fa fa-close"></i></a>
													<a ng-click="moveImage('main1','main2','')"><i class="fa fa-chevron-right"></i></a>
													<a href="javascript:;" class="fn-hide"><i class="fa fa-chevron-left"></i></a>
												</div>
											</div>
										</div>
										<div class="col-md-9">
											<div class="photoBox">
												<div class="photoBg">
													<input type="file" name="files" ngf-select="uploadMain($files,'main2','1')" value="" />
													<img alt="" src="http://static.qineasy.com/base/images/photobg.jpg" id="main2">
												</div>
												<div class="phoboxbt">
													<a ng-click="clearImage('main2','1')"><i class="fa fa-close"></i></a>
													<a ng-click="moveImage('main2','main3','')"><i class="fa fa-chevron-right"></i></a>
													<a ng-click="moveImage('main1','main2','')"><i class="fa fa-chevron-left"></i></a>
												</div>
											</div>
											<div class="photoBox">
												<div class="photoBg">
													<input type="file" name="files" ngf-select="uploadMain($files,'main3','1')" value="" />
													<img alt="" src="http://static.qineasy.com/base/images/photobg.jpg" id="main3">
												</div>
												<div class="phoboxbt">
													<a ng-click="clearImage('main3','1')"><i class="fa fa-close"></i></a>
													<a ng-click="moveImage('main3','main4','')"><i class="fa fa-chevron-right"></i></a>
													<a ng-click="moveImage('main2','main3','')"><i class="fa fa-chevron-left"></i></a>
												</div>
											</div>
											<div class="photoBox">
												<div class="photoBg">
													<input type="file" name="files" ngf-select="uploadMain($files,'main4','1')" value="" />
													<img alt="" src="http://static.qineasy.com/base/images/photobg.jpg" id="main4">
												</div>
												<div class="phoboxbt">
													<a ng-click="clearImage('main4','1')"><i class="fa fa-close"></i></a>
													<a ng-click="moveImage('main4','main5','')"><i class="fa fa-chevron-right"></i></a>
													<a ng-click="moveImage('main3','main4','')"><i class="fa fa-chevron-left"></i></a>
												</div>
											</div>
											<div class="photoBox">
												<div class="photoBg">
													<input type="file" name="files" ngf-select="uploadMain($files,'main5','1')" value="" />
													<img alt="" src="http://static.qineasy.com/base/images/photobg.jpg" id="main5">
												</div>
												<div class="phoboxbt">
													<a ng-click="clearImage('main5','1')"><i class="fa fa-close"></i></a>
													<a ng-click="moveImage('main5','main1','')"><i class="fa fa-chevron-right"></i></a>
													<a ng-click="moveImage('main4','main5','')"><i class="fa fa-chevron-left"></i></a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<!--row2-->
								<div class="mainPhot" ng_repeat="colors in ColorNumAndName">
									<p class="am-ft-darkgray mgb10 col-md-12">
										<span class="col-md-12">{{colors.colorName}}<em class="line"></em></span>
									</p>
									<div class="row">
										<div class="col-md-3" style="width: 20%">
											<div class="photoBox">
												<div class="photoBg">
													<input type="file" name="" ngf-select="uploadMain($files,colors.colorId,'0')" value="" />
													<img alt="" src="http://static.qineasy.com/base/images/photobg.jpg" id="colorPic{{colors.colorId}}">
												</div>
												<div class="phoboxbt">
													<a ng-click="clearImage(colors.colorId,'0')"><i class="fa fa-close"></i></a>
												</div>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
						<!--/商品图片-->
						<!--商品描述-->
						<!-- 加载编辑器的容器 -->
		                <div class="row">
		                    <div class="nowraps-text inprodet-titl am-ft-14">商品详情：</div>
		                    <div class="col-md-10">
		                        <script type="text/plain" id="myEditor"></script>
		                        <div class="errowTipnav">
		                            <!-- <small class="errowTip">&Cross;&nbsp;&nbsp;输入不能为空</small> -->
		                        </div>
		                    </div>
		                </div>
						<div class="row">
							<div class="nowraps-text inprodet-titl ng-options"><em class="am-ft-red mgr5">*</em>运费模板：</div>
							<div class="col-md-10">
								<select style="width: 100px; id="logiticTemplateId" ng-model="logiticTemplateId" ng-options="t.logiticTemplateId as t.logiticTemplateName for t in logiticTemplateList">
									<option value="">包邮</option>
								</select>
							</div>
						</div>
						<div class="row">
							<div class="nowraps-text inprodet-titl ng-options"><em class="am-ft-red mgr5">*</em></div>
							<div class="col-md-10">
								<input type="checkbox" name="publishStatus" value="1" checked/>默认上架商品
							</div>
						</div>
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14" style="height: 1px;"></div>
							<div class="col-md-10">
								<button type="button" class="btn btn-primary mgr10" ng-click="addProudctWd(proSortId)">确认添加</button>
								<button type="button" class="btn btn-primary cancel_btna" ng-click="goback()">取消</button>
							</div>
						</div>
						<div class="fn-clear"></div>
					</div>
				</div>
			</div>
			<!-- /.row -->
		</section>
	
	<!-- /.content -->
</div>
<!----------------- Content Wrapper end ------------------->
