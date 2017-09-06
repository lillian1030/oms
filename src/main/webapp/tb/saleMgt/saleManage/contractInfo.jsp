<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<div class="content-wrapper content-wrapper-itemshow content-wrapper-itemshow2 saleSumary-wrapper fn-clear">
<div  class="col-md-11 artDes_nav">
	<p class="fn-left">
		<span class="am-ft-gray" ng-if="contractInfo.contractType==0">新签-</span>
		<span class="am-ft-gray" ng-if="contractInfo.contractType==1">续签-</span>
		<span class="am-ft-black">{{contractInfo.contractNum}}</span>
	</p>
	<a href="javascript:;" class="line-btn" ng-click="goback()" >返回</a>
</div>
<div  class="col-md-11 artDes_info">
	<div class="fn-left proDetaild_commerical" >
		<img ng-src="{{contractInfo.orgInfo.shopLogo}}" />
		<img class="constractLogo" src="../static/base/images/icon_seal.png" />
	</div>
	<div class="fn-left" style="width:90%;">
		<div class="artDes_info_r1">
			<span class="am-ft-gray">商户名称：</span>
			<span class="am-ft-black">{{contractInfo.orgInfo.shopName}}</span>
			<span class="fn-right am-ft-14 am-ft-orangeS">{{contractInfo.contractStatus}}</span>
		</div>
		<!-- <div class="artDes_info_r2 fn-clear">
			<div class="">
				<span class="am-ft-gray">服务日期：</span>
				<span class="am-ft-black">2017-01-04 至 2017-02-03</span>
			</div>
		</div> -->
		<div class="artDes_info_r3">
			<div class="fn-left">
				<span class="am-ft-gray">产品类型：</span>
				<button class="proType_Btn" ng-if="contractInfo.productType.indexOf('客服')>=0">客服</button>
				<button class="proType_Btn" ng-if="contractInfo.productType.indexOf('美工')>=0">美工</button>
				<button class="proType_Btn" ng-if="contractInfo.productType.indexOf('运营')>=0">运营</button>
				<button class="proType_Btn" ng-if="contractInfo.productType.indexOf('培训')>=0">培训</button>
			</div>
			<div class="fn-right">
				<span class="am-ft-gray">{{contractInfo.departNameTree}}</span>
				<span class="am-ft-black">{{contractInfo.userName}}</span>
			</div>
		</div>
		<div class="artDes_info_r4 fn-clear">
			<div class="fn-left">
				<span class="am-ft-gray">店铺列表：</span>
				<span ng-repeat="shop in contractInfo.shopList">
					<img ng-if="shop.shopType=='2'" src="../static/base/images/icon_logo_taobao.png" />
					<img ng-if="shop.shopType=='3'" src="../static/base/images/icon_logo_tmall.png"/>
					<img ng-if="shop.shopType=='4'" src="../static/base/images/icon_logo_jindong.png"/>
					<img ng-if="shop.shopType=='0'" src="../static/base/images/icon_1688.png"/>
					<img ng-if="shop.shopType=='1'" src="../static/base/images/icon_AliExpress.png"/>
					<img ng-if="shop.shopType=='5'" src="../static/base/images/icon_amazon.png"/>
					<span class="mgr20">{{shop.shopName}} </span>
				</span>
			</div>
			<div class="fn-right">
				<span class="am-ft-gray">签单时间：{{contractInfo.signDate}}</span>
			</div>
		</div>
	</div>
</div>
<div class="firstTab col-md-12  mgt10 mgb10">
		<ul class="fn-clear">
			<li class="fn-left" ng-class="{true:'tabactive'}[tabType=='3']" ng-click="shiftProductTab('3')">合同详情</li>
			<li class="fn-left" ng-class="{true:'tabactive'}[tabType=='4']" ng-click="shiftProductTab('4')">财务信息</li>
			<li class="fn-left" ng-class="{true:'tabactive'}[tabType=='5']" ng-click="shiftProductTab('5')">任务分配</li>
			<li class="fn-left" ng-class="{true:'tabactive'}[tabType=='1']" ng-click="shiftProductTab('1')">流程日志({{processCount}})</li>
			<li class="fn-left" ng-class="{true:'tabactive'}[tabType=='2']" ng-click="shiftProductTab('2')">服务日志({{serviceCount}})</li>
		</ul>
</div>
<div class="col-md-12">
		<!--合同详情-->
	<div ng-if="tabType=='3'" >
		<jsp:include page="../saleManage/contactInfoa.jsp" />
	</div>
		<!--/合同详情-->
		<!--财务详情-->
	<div ng-if="tabType=='4'" >
		<jsp:include page="../saleManage/financeInfo.jsp" />
	</div>
		<!--/财务详情-->
		<!--任务分配-->
	<div ng-if="tabType=='5'" >
		<jsp:include page="../saleManage/taskAllocation.jsp" />
	</div>
		<!--/任务分配-->
		<!--流程日志-->
	<div ng-if="tabType=='1'" >
		<div class="flowLog fn-clear mgt20">
			<div class="flowLogL" style="height: 1px;">
				
			</div>
			<div  class="flowLogR flowLogRFirst">
				<button class="grey_bg_black" ng-click="addLog(4)">＋资料审核</button>
				<button class="grey_bg_black" ng-click="addLog(5)">＋服务审核</button>
			</div>
		</div>
		<div class="flowLog fn-clear" ng-repeat="processTask in contractProcessTasks">
			<div class="flowLogL">
				<p>
					<span class="am-ft-gray">{{processTask.createUserDepart}}</span>
					<span class="am-ft-black">{{processTask.createUserName}}</span>
				</p>
				<p class="am-ft-gray">
					{{processTask.createTime}}
				</p>
			</div>
			<div  class="flowLogR">
					<div class="flowLogR1" ng-if="processTask.managerResult==''"><span ng-if="processTask.taskType=='4'">资料审核</span><span ng-if="processTask.taskType!='4'">服务审核</span></div>
					<div class="flowLogR1" style="background: #E9F8FF;" ng-if="processTask.managerResult!=''"><span ng-if="processTask.taskType=='4'">资料审核</span><span ng-if="processTask.taskType!='4'">服务审核</span></div>
					<div class="flowLogR2">
						<p class="am-ft-12 am-ft-black mgb10 mgt10">
							{{processTask.taskMemo}}
						</p>
						<div class="checkContractInfo fn-clear" ng-if="processTask.taskType=='4'">
							<div class="checkContractInfoUpload" ng-repeat="extendList in processTask.contractExtendList">
								<img src="../static/base/images/icon_file.png" />
								<span class="mgl5" ng-if="extendList.fileName.length<8">{{extendList.fileName}}</span>
								<span class="mgl5" ng-if="extendList.fileName.length>=8">{{extendList.fileName |limitTo:8}}
								<a href="{{extendList.fileUrl}}"><img  src="../static/base/images/icon_download1.png"/></a>
							</div>
						</div>
						<div class="checkContractInfo fn-clear" ng-if="processTask.taskType!='4'">
							<span class="am-ft-gray am-ft-14">申请类型：</span>
							<span class="am-ft-red am-ft-14" ng-if="processTask.taskType=='5'">继续服务</span>
							<span class="am-ft-red am-ft-14" ng-if="processTask.taskType=='6'">暂停服务</span>
						</div>
					</div>
					<div class="flowLogR3 fn-clear">
						<span class="am-ft-gray">状态：</span>
						<span class="am-ft-orangeS" ng-if="processTask.dealResult==''">待审核</span>
						<span class="am-ft-orangeS" ng-if="processTask.dealResult=='0'">同意</span>
						<span class="am-ft-orangeS" ng-if="processTask.dealResult=='1'">不同意</span>
						<button class="" ng-if="processTask.dealResult==''" ng-click="dealTask(this)">审核</button>
					</div>
			</div>
		</div>
	</div>
	<!--/流程日志-->	
	<!--服务日志-->	
	<div ng-if="tabType=='2'">
		<div class="flowLog fn-clear mgt20">
			<div class="flowLogL" style="height: 1px;">
			</div>
			<div  class="flowLogR flowLogRFirst">
				<button class="grey_bg_black" ng-click="addLog(7)">＋内部质检</button>
				<button class="grey_bg_black" ng-click="addLog(8)">＋续签反馈</button>
				<button class="grey_bg_black" ng-click="addLog(9)">＋QC抽检</button>
			</div>
		</div>
		<div class="flowLog fn-clear" ng-repeat="serverTask in contractServerTasks">
			<div class="flowLogL">
				<p>
					<span class="am-ft-gray">{{serverTask.createUserDepart}}</span>
					<span class="am-ft-black">{{serverTask.createUserName}}</span>
				</p>
				<p class="am-ft-gray">
					{{serverTask.createTime}}
				</p>
			</div>
			<div  class="flowLogR" style="border: 1px solid #D8E5ED;">
				<div class="flowLogR1" style="background: #E9F8FF;">
					<span class="am-ft-red am-ft-14" ng-if="serverTask.taskType=='7'">内部质检</span>
					<span class="am-ft-red am-ft-14" ng-if="serverTask.taskType=='8'">续签反馈</span>
					<span class="am-ft-red am-ft-14" ng-if="serverTask.taskType=='9'">QC抽检</span>
				</div>
				<div class="flowLogR2 fn-clear" ng-if="serverTask.taskType=='7'">
					<div class="flowLogR2_box fn-clear">
						<div class="flowLogR2_boxL">
							品牌商回访结果：
						</div>
						<div class="flowLogR2_boxR">
							{{serverTask.extend1}}
						</div>
					</div>
					<div class="flowLogR2_box  fn-clear">
						<div class="flowLogR2_boxL">
							服务质检结果：
						</div>
						<div class="flowLogR2_boxR">
							{{serverTask.extend2}}
						</div>
					</div>
					<div class="flowLogR2_box  fn-clear">
						<div class="flowLogR2_boxL">
							店铺操作措施：
						</div>
						<div class="flowLogR2_boxR">
							{{serverTask.extend3}}
						</div>
					</div>
				</div>
				<div class="flowLogR2 fn-clear" ng-if="serverTask.taskType=='8'">
					<div class="flowLogR2_box fn-clear">
						<div class="flowLogR2_boxL">
							品牌商回访结果
						</div>
						<div class="flowLogR2_boxR">
							{{serverTask.extend1}}
						</div>
					</div>
					<div class="flowLogR2_box  fn-clear">
						<div class="flowLogR2_boxL">
							投诉问题处理措施：
						</div>
						<div class="flowLogR2_boxR">
							{{serverTask.extend2}}
						</div>
					</div>
					<div class="flowLogR2_box  fn-clear">
						<div class="flowLogR2_boxL">
							执行措施后效果：
						</div>
						<div class="flowLogR2_boxR">
							{{serverTask.extend3}}
						</div>
					</div>
				</div>
				<div class="flowLogR2 fn-clear" ng-if="serverTask.taskType=='9'">
					<div class="flowLogR2_box fn-clear">
						<div class="flowLogR2_boxL">
							得分：
						</div>
						<div class="flowLogR2_boxR" style="color: #1AAD19;">
							{{serverTask.extend1}}分
						</div>
					</div>
					<div class="flowLogR2_box  fn-clear">
						<div class="flowLogR2_boxL">
							问题：
						</div>
						<div class="flowLogR2_boxR">
							{{serverTask.extend2}}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--/服务日志-->	
	</div>
</div>
<!--资料审核弹窗-->
<div class="maskbgCover" ng-if="showDeal">
	<div class="isTipsFrame ">
		<div class="isTipsFrameTitle">
			<span class="am-ft-14 am-ft-black">提示</span>
			<img class="fn-right closeDia" ng-click="closeDia()" src="../static/base/images/closelogo.png" />
		</div>
		<div class="isTipsFrameContent am-ft-14">
			<img src="../static/base/images/icon_cue.png" />
			<span class="am-ft-gray">是否同意</span>
			<span class="am-ft-black">“{{taskInfo.execDepartName}}{{taskInfo.execUserName}}”</span>	
			<span class="am-ft-gray">提交的 </span>
			<span class="am-ft-black" ng-if="taskInfo.taskType=='4'">《资料审核》</span>
			<span class="am-ft-black" ng-if="taskInfo.taskType=='5'">《继续服务》</span>
			<span class="am-ft-black" ng-if="taskInfo.taskType=='6'">《暂停服务》</span>
			<span class="am-ft-gray">？</span>
		</div>
		<div class="isTipsFrameFooter">
			<button class="closeDia whiteGroundBlueBtn" ng-click="deal(0)">同意</button>
			<button class="blueGroundWhiteBtn" ng-click="deal(1)">不同意</button>
		</div>
	</div>
</div>
<!--/资料审核弹窗-->
<!--资料审核申请-->
<div class="maskbgCover" ng-if="addInfo.taskType==4">
	<div class="isTipsFrame isTipsFrame_Service">
		<div class="isTipsFrameTitle">
			<span class="am-ft-14 am-ft-black">资料审核</span>
			<img class="fn-right closeDia" ng-click="closeDia()" src="../static/base/images/closelogo.png" />
		</div>
		<div class="am-ft-14">
			<div class="serviceCheck_box fn-clear">
				<div>文件：</div>
				<div class="mgb20">
					<div class="checkContractInfo fn-clear">
							<div class="checkContractInfoUpload" >
									<img src="../static/base/images/icon_file.png"/>
									<span class="mgl5" id="fileName" >{{addInfo.fileName}}</span>
									<!--<span class="mgl5" id="fileName" ng-if="fileName.length<8">{{fileName}}</span>
									<span class="mgl5" id="fileName" ng-if="fileName.length>=8">{{fileName |limitTo:8}}...</span>-->
									<!--<img src="../static/base/images/icon_download1.png"/>-->
							</div>
							<div class="checkContractInfoFile checkContractInfoFile_data">
								<input ngf-select="uploadWork($files)" name="files" type="file" value=""  />						
								<button class="addFileBtn">上传附件</button>	
							</div>
					</div>
				</div>
			</div>
			<div class="serviceCheck_box fn-clear">
				<div>备注：</div>
				<div>
					<textarea ng-model="addInfo.taskMemo"></textarea>
					<!--<textarea ng-model='memo1' name="memo" rows="3" cols="3" style="width: 400px;"></textarea>-->
					<!--<span> <i ng-if="memo1.length==undefined">0</i> 
						<i ng-if="memo1.length!=undefined">{{memo1.length}}</i> /200
					</span>-->
				</div>
			</div>
			<div class="serviceCheck_box fn-clear">
				<div style="height: 1px;"></div>
				<div class="mgt20">
					<button class="blueGroundWhiteBtn  mgr20" ng-click="save()">确认</button>
					<button class=" greybtn_black closeDia" ng-click="closeDia()">取消</button>
				</div>
			</div>
		</div>
	</div>
</div>
<!--/资料审核申请-->
<!--服务申请弹框-->
<div class="maskbgCover" ng-if="addInfo.taskType==5||addInfo.taskType==6">
	<div class="isTipsFrame isTipsFrame_Service">
		<div class="isTipsFrameTitle">
			<span  class="am-ft-14 am-ft-black">服务审核</span>
			<img class="fn-right closeDia" ng-click="closeDia()" src="../static/base/images/closelogo.png" />
		</div>
		<div class="am-ft-14">
			<div class="serviceCheck_box fn-clear">
				<div>审核类型：</div>
				<div>
					<label class="mgr10 fn-left">
						<input type="radio" ng-model="addInfo.taskType" name="serviceType" value="5"/>继续服务
					</label>
					<label>
						<input type="radio" ng-model="addInfo.taskType" name="serviceType" value="6"/>暂停服务
					</label>
				</div>
			</div>
			<div class="serviceCheck_box fn-clear">
				<div>备注：</div>
				<div>
					<textarea ng-model="addInfo.taskMemo"></textarea>
				</div>
			</div>
			<div class="serviceCheck_box fn-clear">
				<div style="height: 1px;"></div>
				<div class="mgt20">
					<button class="blueGroundWhiteBtn  mgr20" ng-click="save()">确认</button>
					<button class=" greybtn_black closeDia" ng-click="closeDia()">取消</button>
				</div>
			</div>
		</div>
	</div>
</div>
<!--/服务申请弹框-->
<!--内部质检-->
<div class="maskbgCover" ng-if="addInfo.taskType==7">
	<div class="isTipsFrame isTipsFrame_check">
		<div class="isTipsFrameTitle">
			<span class="am-ft-14 am-ft-black" >内部质检</span>
			<img class="fn-right closeDia" ng-click="closeDia()" src="../static/base/images/closelogo.png" />
		</div>
		<div class="am-ft-14">
			<div class="serviceCheck_box  serviceCheck_box_inner fn-clear">
				<div>品牌商回访结果：</div>
				<div>
					<textarea ng-model="addInfo.extend1"></textarea>
					<!--<textarea ng-model='memo1' name="memo" rows="3" cols="3" style="width: 400px;"></textarea>-->
					<!--<span> <i ng-if="memo1.length==undefined">0</i> 
						<i ng-if="memo1.length!=undefined">{{memo1.length}}</i> /200
					</span>-->
				</div>
			</div>
			<div class="serviceCheck_box serviceCheck_box_inner fn-clear">
				<div>服务质检结果：</div>
				<div>
					<textarea ng-model="addInfo.extend2"></textarea>
					<!--<textarea ng-model='memo1' name="memo" rows="3" cols="3" style="width: 400px;"></textarea>-->
					<!--<span> <i ng-if="memo1.length==undefined">0</i> 
						<i ng-if="memo1.length!=undefined">{{memo1.length}}</i> /200
					</span>-->
				</div>
			</div>
			<div class="serviceCheck_box serviceCheck_box_inner fn-clear">
				<div>店铺操作措施：</div>
				<div>
					<textarea ng-model="addInfo.extend3"></textarea>
					<!--<textarea ng-model='memo1' name="memo" rows="3" cols="3" style="width: 400px;"></textarea>-->
					<!--<span> <i ng-if="memo1.length==undefined">0</i> 
						<i ng-if="memo1.length!=undefined">{{memo1.length}}</i> /200
					</span>-->
				</div>
			</div>
			<div class="serviceCheck_box serviceCheck_box_inner fn-clear">
				<div style="height: 1px;"></div>
				<div class="mgt20">
					<button class="blueGroundWhiteBtn  mgr20" ng-click="save()">确认</button>
					<button class=" greybtn_black closeDia" ng-click="closeDia()">取消</button>
				</div>
			</div>
		</div>
	</div>
</div>
<!--/内部质检-->
<!--续签反馈-->
<div class="maskbgCover" ng-if="addInfo.taskType==8">
	<div class="isTipsFrame isTipsFrame_check">
		<div class="isTipsFrameTitle">
			<span class="am-ft-14 am-ft-black" >续签反馈</span>
			<img class="fn-right closeDia" ng-click="closeDia()" src="../static/base/images/closelogo.png" />
		</div>
		<div class="am-ft-14">
			<div class="serviceCheck_box  serviceCheck_box_inner fn-clear">
				<div>品牌商投诉问题：</div>
				<div>
					<textarea ng-model="addInfo.extend1"></textarea>
					<!--<textarea ng-model='memo1' name="memo" rows="3" cols="3" style="width: 400px;"></textarea>-->
					<!--<span> <i ng-if="memo1.length==undefined">0</i> 
						<i ng-if="memo1.length!=undefined">{{memo1.length}}</i> /200
					</span>-->
				</div>
			</div>
			<div class="serviceCheck_box serviceCheck_box_inner fn-clear">
				<div>投诉问题处理措施：</div>
				<div>
					<textarea ng-model="addInfo.extend2"></textarea>
					<!--<textarea ng-model='memo1' name="memo" rows="3" cols="3" style="width: 400px;"></textarea>-->
					<!--<span> <i ng-if="memo1.length==undefined">0</i> 
						<i ng-if="memo1.length!=undefined">{{memo1.length}}</i> /200
					</span>-->
				</div>
			</div>
			<div class="serviceCheck_box serviceCheck_box_inner fn-clear">
				<div>执行措施后效果：</div>
				<div>
					<textarea ng-model="addInfo.extend3"></textarea>
					<!--<textarea ng-model='memo1' name="memo" rows="3" cols="3" style="width: 400px;"></textarea>-->
					<!--<span> <i ng-if="memo1.length==undefined">0</i> 
						<i ng-if="memo1.length!=undefined">{{memo1.length}}</i> /200
					</span>-->
				</div>
			</div>
			<div class="serviceCheck_box serviceCheck_box_inner fn-clear">
				<div style="height: 1px;"></div>
				<div class="mgt20">
					<button class="blueGroundWhiteBtn  mgr20" ng-click="save()">确认</button>
					<button class=" greybtn_black closeDia" ng-click="closeDia()">取消</button>
				</div>
			</div>
		</div>
	</div>
</div>
<!--续签反馈-->
<!--QC质检反馈-->
<div class="maskbgCover" ng-if="addInfo.taskType==9">
	<div class="isTipsFrame isTipsFrame_Service">
		<div class="isTipsFrameTitle">
			<span  class="am-ft-14 am-ft-black">QC质检反馈</span>
			<img class="fn-right closeDia" ng-click="closeDia()" src="../static/base/images/closelogo.png" />
		</div>
		<div class="am-ft-14">
			<div class="serviceCheck_box fn-clear">
				<div>得分：</div>
				<div>
					<input type="text" ng-model="addInfo.extend1" class="mgr10"/>分
				</div>
			</div>
			<div class="serviceCheck_box fn-clear">
				<div>问题：</div>
				<div>
					<textarea ng-model='addInfo.extend2' rows="3" cols="3" style="width: 400px;"></textarea>
					<!-- <span> <i ng-if="addInfo.extend2.length==undefined">0</i> 
						<i ng-if="addInfo.extend2.length!=undefined">{{addInfo.extend2.length}}</i> /200
					</span>-->
				</div>
			</div>
			<div class="serviceCheck_box fn-clear">
				<div style="height: 1px;"></div>
				<div class="mgt20">
					<button class="blueGroundWhiteBtn  mgr20" ng-click="save()">确认</button>
					<button class=" greybtn_black closeDia" ng-click="closeDia()">取消</button>
				</div>
			</div>
		</div>
	</div>
</div>
<!--QC质检反馈-->
<script type="text/javascript">
	$(function(){
		$(".isTipsFrame").center();
		var formArray = [];
		formArray.push('{"contractForm":"/contract/addContract"}');
		initValidate(formArray, pos);
		$('.selectpicker').selectpicker('refresh');
		
	})
</script>
