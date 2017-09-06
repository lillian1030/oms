<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
<div class="content-wrapper contractCreate-wraper fn-clear contractCreate-wraper-info">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">续签合同</h2>
		<a href="javascript:;" class="line-btn fn-right" ng-click="goback()">返回</a>
	</div>
	<div class="col-md-11 fn-clear addContractBox">
		<!--<form id='contractForm'>-->
			<div class="fn-clear col-md-12 contractBaseInfoBox">
				<div class="contractInfo col-md-12">
					<!-- <div class="infoLine infoLinec fn-clear">
						<div class="fn-left infoTitile">
							<em class="am-ft-red mgr5">*</em>合同编号：
						</div>
						<input type="text" name="contractNum" />
					</div> -->
					<div class="infoLine infoLinea fn-clear">
						<div class="fn-left infoTitile">
							合同类型：
						</div>
						<span class="color333">续签合同</span>
					</div>
					<div class="infoLine infoLineb fn-clear">
						<div class="fn-left infoTitile">
							商戶名称：
						</div>
						{{contractInfo.orgInfo.shopName}}
					</div>
					<div class="infoLine infoLinec fn-clear">
						<div class="fn-left infoTitile">
							店铺列表：
						</div>
						<form id='shopId'>
						<div class="infoLineccd">
							<p ng-repeat="shop in shopList">
								<label>
									<img ng-if="shop.shopType=='2'" src="../static/base/images/icon_logo_taobao.png" />
									<img ng-if="shop.shopType=='3'" src="../static/base/images/icon_logo_tmall.png"/>
									<img ng-if="shop.shopType=='4'" src="../static/base/images/icon_logo_jindong.png"/>
									<img ng-if="shop.shopType=='0'" src="../static/base/images/icon_1688.png"/>
									<img ng-if="shop.shopType=='1'" src="../static/base/images/icon_AliExpress.png"/>
									<img ng-if="shop.shopType=='5'" src="../static/base/images/icon_amazon.png"/>
									<input id="shop{{shop.orgId}}" name="shopId" type="checkbox" value="{{shop.orgId}}" ng-click="shopChecked(shop.orgId)"/>{{shop.shopName}}
								</label>
							</p>
							<button ng-click="goToStreAdd()">新增店铺</button>
						</div>
						</form>
					</div>
					<div class="infoLine infoLinee fn-clear">
						<div class="fn-left infoTitile">
							产品类型：
						</div>
						<div class="proType_box fn-left">
							<div class="proType_box_a" ng-if="taskInfoKF!=undefined">
								<form id="customer">
									<div class="proType_box_nav">
										<input type="checkbox" checked="checked" ng-model="selectCustomer" ng-click="selectFlag('0')" name='prodcutType' value="客服"/>
										<span>客服</span>
									</div>
									<div class="proType_box_under">
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="" ng-class='{false:"colorDisable"}[selectCustomer]'>
													席位数量：
												</div>
												<div class="proType_details fn-clear">
													<input type="text" ng-model="taskInfoKF.serviceNum" class="fn-left" name='serviceNum' placeholder="1" ng-disabled="!selectCustomer" />
													<div class="proType_detailsR">
														<span class="color666 mgl10" ng-class='{false:"colorDisable"}[selectCustomer]'>席位单价：</span>
														<input type="text" ng-model="taskInfoKF.unitPrice" name="unitPrice" placeholder="2" ng-class='{false:"colorDisable"}[selectCustomer]' ng-disabled="!selectCustomer" />
														<span class="color333" ng-class='{false:"colorDisable"}[selectCustomer]'>元</span>
													</div>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="" ng-class='{false:"colorDisable"}[selectCustomer]'>
													服务周期：
												</div>
												<div class="proType_details">
													<select class="fn-left" ng-model="taskInfoKF.months" name="months" ng-disabled="!selectCustomer">
														<option value="1">一个月</option>
														<option value="2">二个月</option>
														<option value="3">三个月</option>
														<option value="4">四个月</option>
														<option value="5">五个月</option>
														<option value="6">六个月</option>
														<option value="7">七个月</option>
														<option value="8">八个月</option>
														<option value="9">九个月</option>
														<option value="10">十个月</option>
														<option value="11">十一个月</option>
														<option value="12">十二个月</option>
													</select>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="" ng-class='{false:"colorDisable"}[selectCustomer]'>
													服务类型：
												</div>
												<div class="proType_details">
													<div class="proType_detailsR">
														<label class="mgr5" ng-class='{false:"colorDisable"}[selectCustomer]'> 
															<input type="radio" id="zh" ng-disabled="!selectCustomer" name='serviceType' ng-model="taskInfoKF.serviceType" value='0' ng-click='changeServiceType()'/>值守
														</label>
														<label class="mgr5" ng-class='{false:"colorDisable"}[selectCustomer]'>
															 <input type="radio" id="ti" ng-disabled="!selectCustomer" name='serviceType' ng-model="taskInfoKF.serviceType" value='1' ng-click='changeServiceType()' />提成
														</label>&nbsp;
														<span ng-if='taskInfoKF.serviceType=="1"' class="color333" ng-class='{false:"colorDisable"}[selectCustomer]'>
															<input type="text" ng-model="taskInfoKF.deductRate" name='deductRate' ng-disabled="!selectCustomer" onkeyup="value=value.replace(/[^\d.]/g,'')"/>
														%</span>
													</div>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="" ng-class='{false:"colorDisable"}[selectCustomer]'>
													服务日期：
												</div>
												<div class="proType_details">
													<input type="text" ng-disabled="!selectCustomer" class="fn-left laydate-icon form-control effectdatatime" id="beginDateKF" name='beginDate' placeholder="开始日期" onclick="laydate()" />
													<span class="fn-left mgl10 mgr10 am-ft-gray">—</span>
													<input type="text" ng-disabled="!selectCustomer" class="fn-left laydate-icon form-control effectdatatime" id="endDateKF" name='endDate' placeholder="结束日期" onclick="laydate()" />
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="" ng-class='{false:"colorDisable"}[selectCustomer]'>
													服务费用：
												</div>
												<div class="proType_details">
														<input type="text" ng-model="taskInfoKF.serviceAmount" ng-disabled="!selectCustomer" name="serviceAmount" placeholder="200" />
														<span ng-class='{false:"colorDisable"}[selectCustomer]'>元</span>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="" ng-class='{false:"colorDisable"}[selectCustomer]'>
													产品备注：
												</div>
												<div class="proType_details">
													<textarea type="text" ng-model="taskInfoKF.taskMemo" name='taskMemo' ng-disabled="!selectCustomer" /></textarea>
													<span class="color999"> <i ng-if="taskInfoKF.taskMemo.length==undefined">0</i> <i
												ng-if="taskInfoKF.taskMemo.length!=undefined">{{taskInfoKF.taskMemo.length}}</i> /200
											</span>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="" ng-class='{false:"colorDisable"}[selectCustomer]'>
													交接单：
												</div>
												<div class="proType_details">
													<div class="checkContractInfo fn-clear">
														<div class="checkContractInfoUpload" ng-repeat="file in taskInfoKF.contractExtendList" ng-if='taskInfoKF.contractExtendList.length>0'>
															<img src="../static/base/images/icon_file.png" />
															<span class="mgl5" id="fileName1" ng-if="file.fileName.length<8">{{file.fileName}}</span>
															<span class="mgl5" id="fileName1" ng-if="file.fileName.length>=8">{{file.fileName |limitTo:8}}...</span>
														</div>
														<div class="checkContractInfoFile checkContractInfoFile_data">
															<input ngf-select="uploadWork($files,'1')" name="files" type="file" value="" ng-disabled="!selectCustomer" />
															<button class="addFileBtn">上传文件</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
							<div class="proType_box_a" ng-if="taskInfoMG!=undefined">
								<form id='art'>
									<div class="proType_box_nav">
										<input type="checkbox" checked="checked" ng-model='selectArt' ng-click="selectFlag('1')" name='prodcutType' value="美工"/>
										<span>美工</span>
									</div>
									<div class="proType_box_under">
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="" ng-class='{false:"colorDisable"}[selectArt]'>
													服务周期：
												</div>
												<div class="proType_details">
													<select class="fn-left" name="months" ng-model="taskInfoMG.months" ng-disabled="!selectArt">
														<option value="1">一个月</option>
														<option value="2">二个月</option>
														<option value="3">三个月</option>
														<option value="4">四个月</option>
														<option value="5">五个月</option>
														<option value="6">六个月</option>
														<option value="7">七个月</option>
														<option value="8">八个月</option>
														<option value="9">九个月</option>
														<option value="10">十个月</option>
														<option value="11">十一个月</option>
														<option value="12">十二个月</option>
													</select>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="" ng-class='{false:"colorDisable"}[selectCustomer]'>
													服务类型：
												</div>
												<div class="proType_details">
													<div class="proType_detailsR">
														<label class="mgr10" ng-class='{false:"colorDisable"}[selectArt]'> 
															<input type="radio" ng-disabled="!selectArt" id="zh" name='serviceType' ng-model="taskInfoMG.serviceType" value='0'/>单项
														</label>
														<label class="mgr5" ng-class='{false:"colorDisable"}[selectArt]'>
															<input type="radio" ng-disabled="!selectArt" id="ti" name='serviceType' ng-model="taskInfoMG.serviceType"  value='1'/>包月
														</label>&nbsp;
													</div>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="" ng-class='{false:"colorDisable"}[selectArt]'>
													服务日期：
												</div>
												<div class="proType_details">
													<input type="text" ng-disabled="!selectArt" class="fn-left laydate-icon form-control effectdatatime" id="beginDateMG" name='beginDate' placeholder="开始日期" onclick="laydate()" />
													<span class="fn-left mgl10 mgr10 am-ft-gray">—</span>
													<input type="text" ng-disabled="!selectArt" class="fn-left laydate-icon form-control effectdatatime" id="endDateMG" name='endDate' placeholder="结束日期" onclick="laydate()" />
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="" ng-class='{false:"colorDisable"}[selectArt]'>
													服务费用：
												</div>
												<div class="proType_details">
													<input type="text" ng-disabled="!selectArt" ng-model="taskInfoMG.serviceAmount" name="serviceAmount" placeholder="200" />
													<span ng-class='{false:"colorDisable"}[selectArt]'>元</span>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="" ng-class='{false:"colorDisable"}[selectArt]'>
													产品备注：
												</div>
												<div class="proType_details">
													<textarea type="text" ng-disabled="!selectArt" ng-model="taskInfoMG.taskMemo" name='taskMemo'  /></textarea>
													<span class="color999"> <i ng-if="taskInfoMG.taskMemo.length==undefined">0</i> <i
												ng-if="taskInfoMG.taskMemo.length!=undefined">{{taskInfoMG.taskMemo.length}}</i> /200
											</span>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="" ng-class='{false:"colorDisable"}[selectArt]'>
													交接单：
												</div>
												<div class="proType_details">
													<div class="checkContractInfo fn-clear">
														<div class="checkContractInfoUpload" ng-repeat="file in taskInfoMG.contractExtendList" ng-if='taskInfoMG.contractExtendList.length>0'>
															<img src="../static/base/images/icon_file.png" />
															<span class="mgl5" id="fileName1" ng-if="file.fileName.length<8">{{file.fileName}}</span>
															<span class="mgl5" id="fileName1" ng-if="file.fileName.length>=8">{{file.fileName |limitTo:8}}...</span>
														</div>
														<div class="checkContractInfoFile checkContractInfoFile_data">
															<input ng-disabled="!selectArt" ngf-select="uploadWork($files,'2')" name="files" type="file" value="" />
															<button class="addFileBtn">上传文件</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
							<div class="proType_box_a proType_box_ab" ng-if="taskInfoYY!=undefined">
								<form id='operation'>
									<div class="proType_box_nav">
										<input type="checkbox" checked="checked" ng-model='selectOperation' ng-click="selectFlag('2')" name='prodcutType' value="运营" />
										<span>运营</span>
									</div>
									<div class="proType_box_under">
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="" ng-class='{false:"colorDisable"}[selectOperation]'>
													服务日期：
												</div>
												<div class="proType_details">
													<input type="text" ng-disabled="!selectOperation" class="fn-left laydate-icon form-control effectdatatime" id="beginDateYY" name='beginDate' placeholder="开始日期" onclick="laydate()" />
													<span class="fn-left mgl10 mgr10 am-ft-gray">—</span>
													<input type="text" ng-disabled="!selectOperation" class="fn-left laydate-icon form-control effectdatatime" id="endDateYY" name='endDate' placeholder="结束日期" onclick="laydate()" />
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="" ng-class='{false:"colorDisable"}[selectOperation]'>
													服务费用：
												</div>
												<div class="proType_details">
													<input type="text" name="serviceAmount" ng-model="taskInfoYY.serviceAmount" ng-disabled="!selectOperation" placeholder="200" />
													<span ng-class='{false:"colorDisable"}[selectOperation]'>元</span>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="" ng-class='{false:"colorDisable"}[selectOperation]'>
													产品备注：
												</div>
												<div class="proType_details">
													<textarea ng-disabled="!selectOperation" type="text" ng-model="taskInfoYY.taskMemo" name='taskMemo'  /></textarea>
													<span class="color999"> <i ng-if="taskInfoYY.taskMemo.length==undefined">0</i> <i
												ng-if="taskInfoYY.taskMemo.length!=undefined">{{taskInfoYY.taskMemo.length}}</i> /200
											</span>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="" ng-class='{false:"colorDisable"}[selectOperation]'>
													交接单：
												</div>
												<div class="proType_details">
													<div class="checkContractInfo fn-clear">
														<div class="checkContractInfoUpload" ng-repeat="file in taskInfoYY.contractExtendList" ng-if='taskInfoYY.contractExtendList.length>0'>
															<img src="../static/base/images/icon_file.png" />
															<span class="mgl5" id="fileName1" ng-if="file.fileName.length<8">{{file.fileName}}</span>
															<span class="mgl5" id="fileName1" ng-if="file.fileName.length>=8">{{file.fileName |limitTo:8}}...</span>
														</div>
														<div class="checkContractInfoFile checkContractInfoFile_data">
															<input ng-disabled="!selectOperation" ngf-select="uploadWork($files,'3')" name="files" type="file" value="" />
															<button class="addFileBtn">上传文件</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
							<div class="proType_box_a proType_box_ab" ng-if="taskInfoPX!=undefined">
								<form id='train'>
									<div class="proType_box_nav">
										<input type="checkbox" checked="checked" ng-model='selectTrain' ng-click="selectFlag('3')" name='prodcutType' value="培训" />
										<span>培训</span>
									</div>
									<div class="proType_box_under">
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="" ng-class='{false:"colorDisable"}[selectTrain]'>
													服务日期：
												</div>
												<div class="proType_details">
													<input ng-disabled="!selectTrain" type="text" class="fn-left laydate-icon form-control effectdatatime" id="endDatePX" name='beginDate' placeholder="开始日期" onclick="laydate()" />
													<span class="fn-left mgl10 mgr10 am-ft-gray">—</span>
													<input ng-disabled="!selectTrain" type="text" class="fn-left laydate-icon form-control effectdatatime" id="endDatePX" name='endDate' placeholder="结束日期" onclick="laydate()" />
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="" ng-class='{false:"colorDisable"}[selectTrain]'>
													服务费用：
												</div>
												<div class="proType_details">
													<input ng-disabled="!selectTrain" ng-model="taskInfoPX.serviceAmount" name="serviceAmount" type="text" placeholder="200" />
													<span ng-class='{false:"colorDisable"}[selectTrain]'>元</span>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="" ng-class='{false:"colorDisable"}[selectTrain]'>
													产品备注：
												</div>
												<div class="proType_details">
													<textarea ng-disabled="!selectTrain" type="text" ng-model="taskInfoPX.taskMemo" name='taskMemo'  /></textarea>
													<span class="color999"> <i ng-if="taskInfoPX.taskMemo.length==undefined">0</i> <i
												ng-if="taskInfoPX.taskMemo.length!=undefined">{{taskInfoPX.taskMemo.length}}</i> /200
											</span>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="" ng-class='{false:"colorDisable"}[selectTrain]'>
													交接单：
												</div>
												<div class="proType_details">
													<div class="checkContractInfo fn-clear">
														<div class="checkContractInfoUpload" ng-repeat="file in taskInfoPX.contractExtendList" ng-if='taskInfoPX.contractExtendList.length>0'>
															<img src="../static/base/images/icon_file.png" />
															<span class="mgl5" id="fileName1" ng-if="file.fileName.length<8">{{file.fileName}}</span>
															<span class="mgl5" id="fileName1" ng-if="file.fileName.length>=8">{{file.fileName |limitTo:8}}...</span>
														</div>
														<div class="checkContractInfoFile checkContractInfoFile_data">
															<input ng-disabled="!selectTrain" ngf-select="uploadWork($files,'4')" name="files" type="file" value="" />
															<button class="addFileBtn">上传文件</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div class="infoLine infoLinec fn-clear">
						<div class="fn-left infoTitile">
							合同费用：
						</div>
						<div class="contractCost fn-left">
							<input type="text" name="totalAmount" ng-model="newContract.totalAmount" class="mgr5 " style="width: 75px;" />
							<span>元</span><br />
							<span class="fn-left color333">客户可结转余额：</span>
							<span class="fn-left color333">{{accountAmount|number:2}}元</span>
							<label ng-show="accountAmount>0">
								<input type="checkbox" ng-model='isDeduction' />结转抵扣
							</label>
							<span ng-if='isDeduction'>
							<input type="text" placeholder="0" name="carryAmount" ng-model="newContract.carryAmount"  class="mgr5" style="width: 75px;" />
							 元</span>
						</div>
					</div>
					<div class="infoLine infoLineg fn-clear">
						<div class="fn-left infoTitile">
							合同备注：
						</div>
						<textarea type="text" name='memo' ng-model="newContract.memo"/></textarea>
						<span class="color999"> <i ng-if="newContract.memo.length==undefined">0</i> <i
							ng-if="newContract.memo.length!=undefined">{{newContract.memo.length}}</i> /200
						</span>
					</div>
					<div class="infoLine infoLinec fn-clear infoLine_bill">
						<div class="fn-left infoTitile">
							签单人：
						</div>
						<span class="fn-left" />{{userInfo.trueName}}</>
						<!--<input type="text" name='signName' class="fn-left" ng-model="signName" style="width: 70px;"/>-->
						<!--<div class="proType_details" style="display: inline;">
							<span class="fn-left mgl10 mgr10 am-ft-gray">签订时间：</span> 
							<input type="text" class="fn-left laydate-icon form-control effectdatatime" name='beginDate' placeholder="开始日期" onclick="laydate()" /> 
						</div>-->
					</div>
					<div class="infoLine infoLinec fn-clear mgt15 mgb15">
						<div class="fn-left infoTitile">
							签订时间：
						</div>
						<input type="text" class="fn-left laydate-icon form-control effectdatatime" name='signDate' id="signDate" placeholder="签单日期" onclick="laydate()" />
					</div>
					<div class="infoLine infoLinec fn-clear">
						<div class="fn-left infoTitile" style="height: 1px;">
						</div>
						<button type="button" class="btn btn-primary " ng-click="reSignContract()">确认</button>
						<button type="button" class="btn btn-default mgl10" ng-click="goback()">取消</button>
					</div>
				</div>
			</div>
		<!--</form>-->
	</div>
</div>
</div>
<div class="fn-clear"></div>

<script>
	$(function() {
		var formArray = [];
		formArray.push('{"contractForm":"/contract/addContract"}');
		initValidate(formArray, pos);
		$('.selectpicker').selectpicker('refresh');
	})
</script>