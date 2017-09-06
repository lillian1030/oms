<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<div class="content-wrapper content-wrapper-post">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">发布商品</h2>
		<a href="javascript:;" class="line-btn fn-right" ng-click="showPostProductList()">返回</a>
	</div>

	<div class="col-md-11 pageTitl removeBottom">
		<div class="col-md-9">
			<div class="storeProLeftImg fn-left">
				<img ng-src="{{model.mainPic}}" ng-if="model.mainPic != '' " />
				<img src="http://static.qineasy.com/base/images/img_default_goods.png" ng-if="model.mainPic == '' " />
			</div>
			<div class="storeProLeftDetil fn-left">
				<p class="forwardTop-rightTitl">{{model.proName}}</p>
				<p class="inDetil">款号：{{model.proModelnum}}</p>
				<span class="">吊牌价：￥{{model.proPrice}}</span>
				<span class="mgr5 mgl20">品类：{{model.sortName}}</span>
			</div>
		</div>
	</div>
	<div class="fn-clear"></div>

	<p class="am-ft-red post-note">发布前，请为该商品补充必要的扩展属性</p>
	<!--已选店铺-->
	<div class="stores-selcect">
		<span class="fn-left">已选要发布的店铺：</span>
		<div class="stores-selcect-list" ng-repeat="pub in publishs">
			<img ng-if="pub.shopType == '3'" src="../static/base/images/logo_tmall.png" />
			<img ng-if="pub.shopType == '2'" src="../static/base/images/logo_taobao.png" />
			<img ng-if="pub.shopType == '4'" src="../static/base/images/logo_jindong.png" />
			<img ng-if="pub.shopType == '0'" src="../static/base/images/logo_1688.png" />
			<img ng-if="pub.shopType == '1'" src="../static/base/images/logo_AliExpress.png" />
			<img ng-if="pub.shopType == '5'" src="../static/base/images/logo_amazon.png" />
			<p>{{pub.shopName}}</p>
		</div>
		<div class="fn-clear"></div>
	</div>

	<!-- =============== 信息填写 start ======================= -->
	<div class="extent-content">
		<!---------扩展信息-------->
		<h3>填写基本的扩展信息</h3>
		<div class="prodet-nav prodet-content">
			<div id="proInfo" class="prodet-box prodet-box-bg">
				<div id="ashow" class="row" ng-repeat="attr in attrList" ng-if="attr.required == '0'">
					<div class="nowraps-text inprodet-titl"><em class="am-ft-red mgr5">*</em><input type="hidden" value="{{attr.attrId}}"><span>{{attr.attrName}}</span>：</div>
					<div class="col-md-2 form-group" ng-if="attr.attrValue.length > 0">
						<select class="col-md-12" name="attrValue" ng-model="attr.value">
							<option ng-repeat="value in attr.attrValue" value="{{value.attrValueName}}">{{value.attrValueName}}</option>
						</select>
					</div>
					<div class="col-md-2 form-group" ng-if="attr.attrValue.length == 0">
						<input class="col-md-10 mgr5" type="text" name="attrValue" value="" ng-model="attr.value" />
					</div>
				</div>
				<hr />
				<div id="otherAttr" class="row new-property" ng-repeat="cust in customAttr" ng-if="customAttr.length > 0">
					<input class="col-md-1" type="text" name="" value="" placeholder="属性" ng-model="cust.attrId" />
					<em class="fn-left">:</em>
					<input class="col-md-2" type="text" name="" value="" placeholder="属性值" ng-model="cust.attrValue" />
					<a href="javascript:;" class="fn-left" ng-click="delCustomSort($event)">删除</a>
				</div>
				<p id="addCustomSort">
					<a href="javascript:;" ng-click="addCustomSort()">+添加商品属性</a>
					<span class="am-ft-gray mgl10">如果您觉得我们提供的属性无法满足您的需求，您可以手动添加产品属性</span>
				</p>
				<div class="fn-clear"></div>
			</div>
			<div class="prodet-nav prodet-content">
			<div id="proInfo" class="prodet-box prodet-box-bg" ng-show="clothesSkuInfoFlag == 0">
				<div class="fn-clear" style="line-height: 30px;">
						<span class="am-ft-black mgl10 fn-left">颜色:</span>
					<div class="fn-left pdl15">
						<input type="text" ng-model="showSku" ng-change="change();"/>
					</div>
					<a href="javascript:;" class="fn-left pdl15">+添加自定义项</a>
				</div>
				<span class="am-ft-gray">
					(最多选100个)
				</span>
			</div>
			</div>
		</div>
		<!---------销售信息-------->
		<h3 class="mgt30">填写销售信息<span>设置一件起批可能导致零售买家下单，为避免不必要的纠纷，请慎重操作。</span></h3>
		<div class="prodet-nav prodet-content">
			<div class="prodet-box prodet-box-bg">
				<div class="row">
					<div class="nowraps-text inprodet-titl"><em class="am-ft-red mgr5">*</em>网上订购：</div>
					<div class="col-md-10 form-group">
						<div class="radio col-md-2">
							<label>
						      <input type="radio" id="supportOnlineTradeT" name="supportOnlineTrade" value="true" checked="checked"/> 支持
						    </label>
						</div>
						<div class="radio col-md-2">
							<label>
						      <input type="radio" id="supportOnlineTradeF" name="supportOnlineTrade" value="false"/> 不支持
						    </label>
						</div>
						<span class="am-ft-gray online-note">买家更信任支持网上订购的卖家，建议根据产品实际情况，选择支持在线订购！</span>
					</div>
				</div>
				<div id="skuInfoShow" ng-show="clothesSkuInfoFlag != 1 && showFlag == 0">
				<div class="row">
					<div class="nowraps-text inprodet-titl"><em class="am-ft-red mgr5">*</em>建议零售价：</div>
					<div class="col-md-2 form-group">
						<input class="col-md-10 mgr5" type="text" name="retailprice" value="" ng-model="retailprice" /> 元
					</div>
				</div>
				<div class="row">
					<div class="nowraps-text inprodet-titl"><em class="am-ft-red mgr5">*</em>可售总量：</div>
					<div class="col-md-2 form-group">
						<input class="col-md-10 mgr5" type="text" name="amountOnSale" value="" ng-model="amountOnSale" /> 件
					</div>
				</div>
				<div class="row">
					<div class="col-md-10 form-group">
						<div class="nowraps-text inprodet-titl"><em class="am-ft-red mgr5">*</em>价格区间：</div>
						<div id="showPriceRange" class="col-md-9">
							<div class="batchsale-box batchsale-numbox">
								<div class="batchsale-top"><span>购买数量</span><span>产品单价</span></div>
								<div id="priceRange" class="row" ng-if="priceRanges.length == 0">
									<div class="col-md-12 form-group">
										<span>起订量</span>
										<input class="col-md-2 mgr5" type="text" name="priceRange" value="" />
										<span>件及以上：</span>
										<input class="col-md-2 mgr5" type="text" name="priceRange" value="" />
										<span>元/件</span>
									</div>
								</div>
								<div id="priceRange" class="row new-price" ng-repeat="pri in priceRanges" ng-if="priceRanges.length > 0">
									<div class="col-md-12 form-group">
										<span>起订量</span>
										<input class="col-md-2 mgr5" type="text" name="" value="" ng-model="pri.startQuantity" />
										<span>件及以上：</span>
										<input class="col-md-2 mgr5" type="text" name="" value="" ng-model="pri.price" />
										<span>元/件</span>
										<a class="fn-left mgl10" href="javascript:;" ng-click="delCustomPrice($event)">删除</a>
									</div>
								</div>
								<div class="addPrice-row">
									<a href="javascript:;" ng-click="addPriceRange();">+增加价格区间</a>
								</div>

							</div>
						</div>
					</div>
				</div>
				</div>
				
				<div class="row">
					<div class="nowraps-text inprodet-titl"><em class="am-ft-red mgr5">*</em>计量单位：</div>
					<div class="col-md-2 form-group">
						<select class="col-md-8" name="unit" ng-model="unit">
							<option value="{{unit.attrValueName}}" ng-repeat="unit in unitAry">{{unit.attrValueName}}</option>
						</select>
					</div>
				</div>
				<div class="row" ng-show="clothesSkuInfoFlag == 1 || showFlag != 0">
					<div class="nowraps-text inprodet-titl"><em class="am-ft-red mgr5">*</em>报价方式：</div>
					<div class="col-md-6 form-group">
						<div class="col-md-4">
							<label for="priceType1">
								<!--<input type="radio" ng-change="type='count'" ng-model="type" name="priceType" id="priceType1"/>-->
								<input type="radio"  ng-model="quoteType" value="2" name="quoteType" checked="checked"/>
								按产品数量报价
							</label>
						</div>
						<div class="col-md-4">
							<label for="priceType2">
								<!--<input type="radio" ng-change="type='size'" ng-model="type" name="priceType" id="priceType2"/>-->
								<input type="radio"   ng-model="quoteType" value="1" name="quoteType" />
								按产品规格报价
							</label>
						</div>
					</div>
				</div>
				<div id="skuInfoShow1" ng-show="(clothesSkuInfoFlag == 1 && quoteType=='2') || (showFlag != 0 && quoteType=='2')"><!--按产品数量报价-->
					<div class="row">
						<div class="nowraps-text inprodet-titl"><em class="am-ft-red mgr5">*</em>可售总量：</div>
						<div class="col-md-5 form-group" >
							<span>{{saleTotalCount}}{{unit}}</span>
							<span class="am-ft-gray">可售总量是各规格可售数量的总和</span>
						</div>
					</div>
					<div id="priceRange" class="row">
						<div class="nowraps-text inprodet-titl"><em class="am-ft-red mgr5">*</em>价格区间：</div>
						<div class="col-md-5 form-group">
							<table class="mgb0">
								<tr>
									<th style="text-align: center;">购买数量</th>
									<th style="text-align: center;">产品单价</th>
								</tr>
								<tr id="priceRange1" ng-if="priceRanges.length ==0">
									<td colspan="2" style="text-align: left;" class="pdl15">
										起订量<input type="text" style="width:100px" /> {{unit}}及以上：
										<input type="text" style="width:100px" /> 元/{{unit}}
									</td>
								</tr>
								<tr id="priceRange1" ng-repeat="priceRange in priceRanges" ng-if="priceRanges.length > 0">
									<td colspan="2" style="text-align: left;" class="pdl15">
										起订量<input type="text" style="width:100px"  value="{{priceRange.startQuantity}}" /> {{unit}}及以上：
										<input type="text" style="width:100px" value="{{priceRange.price}}"/> 元/{{unit}}
									</td>
								</tr>
								<!-- 
								<tr>
									<td colspan="2" class="am-ft-red pdl15" style="text-align: left;">
										<i class="fa fa-exclamation-circle" aria-hidden="true" style="color:orange"></i> 请至少设置一组价格区间，信息才能正常发布
									</td>
								</tr> -->
								<tr id="addPrice-tr">
									<td colspan="2" class="am-ft-blue pdl15" style="text-align: left;">
										<a href="javascript:;"  ng-click="addPriceRange1();"> 增加价格区间</a>
									</td>
								</tr>
							</table>
						</div>
						<div class="col-md-5 form-group fn-clear postscan pl0 pr0">
							<div class="fn-left postscanleft">
								预<br />览
							</div>
							<div class="fn-left col-md-11 postscanright pl0 pr0 mgt10 mgb10">
								可根据买家采购的不同数量设置不同的价格
							</div>
						</div>
					</div>
					<div id="quoteNum" class="row">
						<div class="nowraps-text inprodet-titl"><em class="am-ft-red mgr5">*</em>可售数量：</div>
						<div class="col-md-5 form-group">
							<table class="mgb0">
								<tr>
									<th style="text-align: center;">颜色{{skuInfos.length}}</th>
									<th style="text-align: center;">尺码</th>
									<th style="text-align: center;">
										<em class="am-ft-red mgr5">*</em>可售数量（{{unit}}）
										<label for="allsame" style="height: 20px;line-height: 20px" ;>
										<input type="checkbox" id="allsame" ng-click="selectAll($event,1);"/>
										全部相同 
									</label>
									</th>
									<th style="text-align: center; ">
										单品货号
										<br />
										<label for="allsame1" style="height: 20px; line-height: 20px" ;>
									<input type="checkbox" id="allsame1" ng-click="selectAll($event,2);" /> 全部相同
									</label>
									</th>
								</tr>
								<tr id="skuInfo1" ng-repeat="skuInfo in skuInfos">
									<td rowspan="{{index}}" ng-if="$index == 0 && index != 1">{{skuInfo.proColorName}}</td>
									<td rowspan="{{index}}" ng-if="($index != 0 && ($index+1) % index == 1) || (index ==1)">{{skuInfo.proColorName}}</td>
									<td>{{skuInfo.proSizeName}}</td>
									<td>
										<input id="saleNum1" type="text" ng-model="skuInfo.amountOnSale" ng-change="saleCount(2);"/>
									</td>
									<td>
										<input id="cargoNumber1" type="text" value="{{skuInfo.cargoNumber}}" />
									</td>
								</tr>
							</table>
						</div>
					</div>
					<div class="row">
						<div class="nowraps-text inprodet-titl"><em class="am-ft-red mgr5">*</em>建议零售价：</div>
						<input class="col-md-1" type="text" name="retailprice" value="" ng-model="retailprice" />
						<span style="line-height: 30px;">元</span>

						<span class="mgl10 am-ft-gray" style="line-height: 30px;">让您的买家了解货品市场行情</span>
					</div>
				</div><!--按产品规格报价-->
				<div id="skuInfoShow2" ng-show="(clothesSkuInfoFlag == 1 && quoteType=='1' )|| (showFlag != 0 && quoteType=='1')"><!--按产品规格报价-->
					<div class="row">
						<div class="nowraps-text inprodet-titl"><em class="am-ft-red mgr5">*</em>可售总量：</div>
						<div class="col-md-5 form-group">
							<span>{{saleTotalCount}}{{unit}}</span>
							<span class="am-ft-gray">可售总量是各规格可售数量的总和</span>
						</div>
					</div>
					<div class="row">
						<div class="nowraps-text inprodet-titl"><em class="am-ft-red mgr5">*</em>规格报价：</div>
						<div id="quoteNum1" class="col-md-8 form-group">
							<table class="mgb0">
								<tr>
									<th style="text-align: center;">颜色</th>
									<th style="text-align: center;">尺码</th>
									<th style="text-align: center;">
										<em class="am-ft-red mgr5">*</em>单价（元）
										<label for="allsame" style="height: 20px;line-height: 20px" ;>
										<input type="checkbox" id="allsame" ng-click="selectAll($event,3);"/>
										全部相同 
									</label>
									</th>
									<th style="text-align: center;">
										<em class="am-ft-red mgr5">*</em>可售数量（{{unit}}）
										<label for="allsame1" style="height: 20px;line-height: 20px" ;>
										<input type="checkbox" id="allsame1" ng-click="selectAll($event,4);"/>
										全部相同 
									</label>
									</th>
									<th style="text-align: center;">
										建议零售价（{{unit}}）
										<label for="allsame2" style="height: 20px;line-height: 20px" ;>
										<input type="checkbox" id="allsame2" ng-click="selectAll($event,5);"/>
										全部相同 
									</label>
									</th>
									<th style="text-align: center;">
										单品货号
										<label for="allsame3" style="height: 20px;line-height: 20px" ;>
										<input type="checkbox" id="allsame3" ng-click="selectAll($event,6);"/>
										全部相同 
									</label>
									</th>
								</tr>
								<tr id="skuInfo2" ng-repeat="skuInfo in skuInfos">
									<td rowspan="{{index}}" ng-if="$index == 0 && index != 1">{{skuInfo.proColorName}}</td>
									<td rowspan="{{index}}" ng-if="($index != 0 && ($index+1) % index == 1) || (index ==1)">{{skuInfo.proColorName}}</td>
									<td>{{skuInfo.proSizeName}}</td>
									<td>
										<input id="salePrice1" type="text" ng-model="skuInfo.price"/>
									</td>
									<td>
										<input id="saleNum1" type="text" ng-model="skuInfo.amountOnSale" ng-keyup="saleCount(1);"/>
									</td>
									<td>
										<input id="retailPrice1" type="text" ng-model="skuInfo.retailPrice" />
									</td>
									<td>
										<input id="cargoNumber1" type="text" ng-model="skuInfo.cargoNumber" />
									</td>
								</tr>
							</table>
						</div>
					</div>
					<div class="row">
						<div class="nowraps-text inprodet-titl"><em class="am-ft-red mgr5">*</em>最小起订量：</div>
						<input class="col-md-1" type="text" value="" ng-model="minOrderQuantity"/>
						<span style="line-height: 30px;">{{unit}}</span>
					</div>
				</div><!--按产品数量报价-->
				<div class="fn-clear"></div>
			</div>
		</div>

		<!---------其他补充信息-------->
		<h3 class="mgt30">其他补充信息</h3>
		<div class="prodet-nav prodet-content">
			<div class="prodet-box prodet-box-bg pb0">
				<div class="row">
					<div class="nowraps-text inprodet-titl"><em class="am-ft-red mgr5">*</em>信息有效期：</div>
					<div class="col-md-10 form-group mgb0">
						<div class="radio col-md-2">
							<label>
						      <input type="radio" id="periodOfValidity10" name="periodOfValidity" checked="checked" value="10"/> 10天
						    </label>
						</div>
						<div class="radio col-md-2">
							<label>
						      <input type="radio" id="periodOfValidity20" name="periodOfValidity" value="20"/> 20天
						    </label>
						</div>
						<div class="radio col-md-2">
							<label>
						      <input type="radio" id="periodOfValidity30" name="periodOfValidity" value="30"/> 1个月
						    </label>
						</div>
						<div class="radio col-md-2">
							<label>
						      <input type="radio" id="periodOfValidity90" name="periodOfValidity" value="90"/> 3个月
						    </label>
						</div>
						<div class="radio col-md-2">
							<label>
						      <input type="radio" id="periodOfValidity180" name="periodOfValidity" value="180"/> 6个月
						    </label>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="forwarderBasicBtn">
			<button class="btn btn-primary" ng-click="publishProduct();" ng-show="!onlyShow">保存并发布</button>
			<button class="btn btn-primary" ng-click="proInfoSave()">保存</button>
			<button class="btn btn-default" ng-click="showPostProductList()">返回</button>
		</div>
		<div class="fn-clear"></div>
	</div>
	<!-- =============== 信息填写 end ======================= -->

</div>

</div>

<div class="fn-clear"></div>
</div>