<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
<div class="contractCreate-wraper contractCreate-wraperaa fn-clear contractCreate-wraper-info">
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
							合同编号：
						</div>
						<span class="color333 fn-left">20160912001231</span>
						<div class="fn-left infoTitile">
							合同类型：
						</div>
						<span class="color333">新签</span>
					</div>
					<div class="infoLine infoLineb fn-clear">
						<div class="fn-left infoTitile">
							商戶名称：
						</div>
						<span class="color333">西西小可 潮品女装</span>
					</div>
					<div class="infoLine infoLineb fn-clear">
						<div class="fn-left infoTitile">
							合同费用：
						</div>
						<div class="fn-left infocontentBox fn-clear" style="width: 800px;">
							<div>
								<span class="am-ft-orangeS mgr20">100.00元</span>
								<span class="color666">已结转抵扣：</span>
								<span class="color333">500.00元</span>
							</div>
							<div  class="mgt10 infocontentBox_content infocontentBox_content_info" >
								<div>
									<span class="color999">到账：</span>
									<span class="am-ft-orangeS mgr20">200.00元</span>
									<span class="color999">收款时间：</span>
									<span class="am-ft-black">2017年03月03日</span>
								</div>
								<div>
									<span class="color999">备注：</span>
									<span class="am-ft-black">200.00元</span>
								</div>
								<div>
									<span class="color666 mgl15">杨会计</span>
									<span class="color666 mgl15">财务部</span>
									<span class="color666">2016-10-11</span>
								</div>
							</div>
							<div  class="mgt10 infocontentBox_content infocontentBox_content_info">
								<div>
									<span class="color999">到账：</span>
									<span class="am-ft-orangeS mgr20">200.00元</span>
									<span class="color999">收款时间：</span>
									<span class="am-ft-black">2017年03月03日</span>
								</div>
								<div>
									<span class="color999">备注：</span>
									<span class="am-ft-black">200.00元</span>
								</div>
								<div>
									<span class="color666 mgl15">杨会计</span>
									<span class="color666 mgl15">财务部</span>
									<span class="color666">2016-10-11</span>
								</div>
							</div>
							<div  class="mgt10 infocontentBox_content infocontentBox_content_info">
								<div>
									<span class="color999">到账：</span>
									<span class="am-ft-orangeS mgr20">200.00元</span>
									<span class="color999">收款时间：</span>
									<span class="am-ft-black">2017年03月03日</span>
								</div>
								<div>
									<span class="color999">备注：</span>
									<span class="am-ft-black">200.00元</span>
								</div>
								<div>
									<span class="color666 mgl15">杨会计</span>
									<span class="color666 mgl15">财务部</span>
									<span class="color666">2016-10-11</span>
								</div>
							</div>
						</div>
					</div>
					<div class="infoLine infoLinee fn-clear mgt10">
						<div class="fn-left infoTitile">
							收款状态：
						</div>
						<div class="financeStauts am-ft-gray">已结清</div>
						<div class="financeStauts fn-hide">
							<div >
								<p class="am-ft-14 am-ft-orangeS">待收款</p>
								<div class="proType_box_a proType_box_b" >
										<div class="proType_box_nav" >
											<span>财务收款情况</span>
										</div>
										<div class="proType_box_under">
											<div class="proType_box_contenr">
												<div class="proType_detailsBox fn-clear">
													<!--<div class="" ng-class='{"am-ft-grey":!selectCustomer}'>-->
													<!--<span>{{selectCustomer}}</span>-->
													<div class="" >
														待收金额：
													</div>
													<div class="proType_details fn-clear">
														<span class="am-ft-orangeS">2000.00元</span>
													</div>
												</div>
											</div>
											<div class="proType_box_contenr">
												<div class="proType_detailsBox fn-clear">
													<div class="" ng-class='{false:"colorDisable"}[selectCustomer]'>
														服务类型：
													</div>
													<div class="proType_details">
														<div class="financeType">
															<label class="label-input">
																<input type="radio" />已到账
															</label>
															<label class="label-input">
																<input type="radio" />未到账
															</label>
														</div>
														<div>
															<span>到账金额：</span>
															<input type="text" class="mgr5"/>元
															<span class="mgl15">到账时间：</span>
															<input type="text" class=" laydate-icon form-control effectdatatime"
															name="accountTime" placeholder="到账时间" onclick="laydate()" style="display: inline;"/>
														</div>
													</div>
												</div>
											</div>
											<div class="proType_box_contenr">
												<div class="proType_detailsBox fn-clear">
													<div class="" >
														备注：
													</div>
													<div class="proType_details  proType_memo">
														<textarea></textarea>
													</div>
												</div>
											</div>
											<div class="proType_box_contenr">
												<div class="proType_detailsBox fn-clear">
													<div class="" >
													<span>2017-03-14 </span>
													</div>
													<div class="proType_details">
														<span class="am-ft-gray">财务部</span>
														<span class="am-ft-black">陈主管</span>
													</div>
												</div>
											</div>
											<div class="proType_box_contenr">
												<div class="proType_detailsBox fn-clear">
													<div class="" style="height: 1px;">
													</div>
													<div class="proType_details">
														<button type="button" class="btn btn-primary mgr10 " ng-click="">确认</button>
														<button type="button" class="btn btn-primary cancel_btna" ng-click="">取消</button>
													</div>
												</div>
											</div>
										</div>
								</div>
							</div>
						</div>
					</div>
					<div class="infoLine infoLinec fn-clear infoLine_bill mgb10" style="border-bottom:1px dashed #DDDDDD ;text-align: right;" >
						<span class="am-ft-gray">创建时间：2017-03-10 10:00</span>
					</div>
					<div class="infoLine infoLinec fn-clear">
						<div class="fn-left infoTitile">
							合同状态：
						</div>
						<div class="contractCost fn-left">
							<span class="color333 fn-left am-ft-black">已暂停</span>
							<span class="fn-left am-ft-gray mgl10" >时间：2017-03-10 10:00</span>
						</div>
					</div>
					<div class="infoLine infoLinec fn-clear fn-hide">
						<div class="fn-left infoTitile">
							费用结算：
						</div>
						<div class="proType_box_a fn-left" >
							<!--合同状态已完结-->
									<div class="proType_box_under pro_account">
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="" >
													销售金额：
												</div>
												<div class="proType_details ">
													<span class="am-ft-orangeS fn-left">1000元</span>
													<div class="fn-left mgl60">
														<span class="color666">销售比例：</span>
														<span class="am-ft-orangeS">1%</span>
													</div>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr mgb10">
											<div class="proType_detailsBox fn-clear">
												<div class="" >
													提成金额：
												</div>
												<div class="proType_details ">
													<span class="am-ft-orangeS">1000元</span>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="" >
													临时费用：
												</div>
												<div class="proType_details ">
													<span class="am-ft-orangeS fn-left">1000元</span>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="" >
													备注：
												</div>
												<div class="proType_details ">
													<span class="am-ft-black">到期完结，商家不进行续签了</span>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
					</div>
					<div class="infoLine infoLinec fn-clear">
						<div class="fn-left infoTitile">
							暂停结算：
						</div>
						<div class="proType_box_a fn-left" style="border: none;">
							<!--合同状态暂停-->
									<div class="proType_box_under proType_box_stop">
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="" >
													<span class="am-ft-blue fn-left">-1000.00元</span>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr ">
											<div class="proType_details fn-clear">
												<span class="am-ft-gray ">其中：</span>
												<span class="am-ft-gray ">提成金额 </span>
												<span class="am-ft-orangeS "> 500.00元</span>
												<span class="am-ft-gray mgl60">结算服务费用 </span>
												<span class="am-ft-orangeS">500.00元</span>
											</div>
										</div>
										<div class="proType_box_contenr" >
											<div class="proType_detailsBox fn-clear">
												<div class="fn-hide" >
													不退款，结转至客户余额
												</div>
												<div class="fn-left infocontentBox fn-clear" style="width: 500px;">
													<div  class="mgt10 infocontentBox_content infocontentBox_content_info mgb10" >
														<div>
															<span class="color999">退款：</span>
															<span class="am-ft-orangeS mgr20">200.00元</span>
															<span class="color999">退款时间：</span>
															<span class="am-ft-black">2017年03月03日</span>
														</div>
														<div>
															<span class="color999">备注：</span>
															<span class="am-ft-black">确认退款</span>
														</div>
														<div>
															<span class="color666 mgl15">杨会计</span>
															<span class="color666 mgl15">财务部</span>
															<span class="color666">2016-10-11</span>
														</div>
													</div>
													<div  class="mgt10 infocontentBox_content infocontentBox_content_info">
														<div>
															<span class="color999">到账：</span>
															<span class="am-ft-orangeS mgr20">200.00元</span>
															<span class="color999">收款时间：</span>
															<span class="am-ft-black">2017年03月03日</span>
														</div>
														<div>
															<span class="color999">备注：</span>
															<span class="am-ft-black">200.00元</span>
														</div>
														<div>
															<span class="color666 mgl15">杨会计</span>
															<span class="color666 mgl15">财务部</span>
															<span class="color666">2016-10-11</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
					</div>
					<div class="infoLine infoLinee fn-clear mgt10">
						<div class="fn-left infoTitile">
							收款状态：
						</div>
						<div class="financeStauts fn-hide">
							<div >
								<p class="am-ft-14 am-ft-orangeS">已完结</p>
								<div class="proType_box_a proType_box_b" >
										<div class="proType_box_nav" >
											<span>财务收款情况</span>
										</div>
										<div class="proType_box_under">
											<div class="proType_box_contenr">
												<div class="proType_detailsBox fn-clear">
													<!--<div class="" ng-class='{"am-ft-grey":!selectCustomer}'>-->
													<!--<span>{{selectCustomer}}</span>-->
													<div class="" >
														待退款：
													</div>
													<div class="proType_details fn-clear">
														<span class="am-ft-orangeS">2000.00元</span>
													</div>
												</div>
											</div>
											<div class="proType_box_contenr">
												<div class="proType_detailsBox fn-clear">
													<div class="" ng-class='{false:"colorDisable"}[selectCustomer]'>
														退款情况：
													</div>
													<div class="proType_details">
														<div class="financeType">
															<label class="label-input">
																<input type="radio" />已退款
															</label>
															<span class="mgl15">退款时间：</span>
															<input type="text" class=" laydate-icon form-control effectdatatime"
															name="accountTime" placeholder="退款时间" onclick="laydate()" style="display: inline;"/>
														</div>
													</div>
												</div>
											</div>
											<div class="proType_box_contenr">
												<div class="proType_detailsBox fn-clear">
													<div class="" >
														备注：
													</div>
													<div class="proType_details  proType_memo">
														<textarea></textarea>
													</div>
												</div>
											</div>
											<div class="proType_box_contenr">
												<div class="proType_detailsBox fn-clear">
													<div class="" >
													<span>确认人：</span>
													</div>
													<div class="proType_details">
														<span class="am-ft-gray">财务部</span>
														<span class="am-ft-black">陈主管</span>
													</div>
												</div>
											</div>
											<div class="proType_box_contenr">
												<div class="proType_detailsBox fn-clear">
													<div class="" style="height: 1px;">
													</div>
													<div class="proType_details">
														<button type="button" class="btn btn-primary mgr10 " ng-click="">确认</button>
														<!--<button type="button" class="btn btn-primary cancel_btna" ng-click="">取消</button>-->
													</div>
												</div>
											</div>
										</div>
								</div>
							</div>
						</div>
						<div class="financeStauts ">
							<div >
								<p class="am-ft-14 am-ft-orangeS">已完结</p>
								<div class="proType_box_a proType_box_b" >
										<div class="proType_box_nav" >
											<span>财务收款</span>
										</div>
										<div class="proType_box_under">
											<div class="proType_box_contenr">
												<div class="proType_detailsBox fn-clear">
													<!--<div class="" ng-class='{"am-ft-grey":!selectCustomer}'>-->
													<!--<span>{{selectCustomer}}</span>-->
													<div class="" >
														待收金额：
													</div>
													<div class="proType_details fn-clear">
														<span class="am-ft-orangeS">2000.00元</span>
													</div>
												</div>
											</div>
											<div class="proType_box_contenr">
												<div class="proType_detailsBox fn-clear">
													<div class="" ng-class='{false:"colorDisable"}[selectCustomer]'>
														到账金额：
													</div>
													<div class="proType_details">
														<div class="financeType">
															<input type="text" class="mgr5"/>元
															<span class="mgl15">到账时间：</span>
															<input type="text" class=" laydate-icon form-control effectdatatime"
															name="accountTime" placeholder="到账时间" onclick="laydate()" style="display: inline;"/>
														</div>
													</div>
												</div>
											</div>
											<div class="proType_box_contenr">
												<div class="proType_detailsBox fn-clear">
													<div class="" >
														备注：
													</div>
													<div class="proType_details  proType_memo">
														<textarea></textarea>
													</div>
												</div>
											</div>
											<div class="proType_box_contenr">
												<div class="proType_detailsBox fn-clear">
													<div class="" >
													<span>确认人：</span>
													</div>
													<div class="proType_details">
														<span class="am-ft-gray">财务部</span>
														<span class="am-ft-black">陈主管</span>
													</div>
												</div>
											</div>
											<div class="proType_box_contenr">
												<div class="proType_detailsBox fn-clear">
													<div class="" style="height: 1px;">
													</div>
													<div class="proType_details">
														<button type="button" class="btn btn-primary mgr10 " ng-click="">确认</button>
														<!--<button type="button" class="btn btn-primary cancel_btna" ng-click="">取消</button>-->
													</div>
												</div>
											</div>
										</div>
								</div>
							</div>
						</div>
				</div>
			</div>
		<!--</form>-->
	</div>
</div>


