<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--Ztree-->

<!--遮罩 start-->

<!--遮罩 end-->

<!---- Content Wrapper start ---->
<div class="content-wrapper">
	<!-- Main content -->
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">添加品类</h2>
	</div>
	<div class="fn-clear"></div>
		<section class="container-fluid">
			<div class="row">
				<div class="prodet-nav prodet-content">
					<div class="prodet-box">
					<form id="addproductForm">
						<!--row1-->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14 color666">
								品类名称：
							</div>
							<div class="col-md-2 form-group am-ft-14">
								<input type="text" class="text-overflow" name="proModelnum"
									placeholder="请输入品类名称" />
							</div>
						</div>
						<!----row2---->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14 color666">
								品类规格：
							</div>
							<div class="col-md-5 form-group am-ft-14">
								<div class="addCategoryBox fn-clear pb0">
									<div class="fn-left fn-clear addCategory_main">
										<div class="paddingl10" ng-click="shiftCategoryTab('1')" ng-class="{false:'addBg_fa'}[model.isTab=='1']">
											<input type="text" />	
										</div>
										<div  class="paddingl10" ng-click="shiftCategoryTab('2')" ng-class="{false:'addBg_fa'}[model.isTab=='2']">
											<input type="text" />	
										</div>
										<div class="addCategory_btn paddl0">
											 <button>＋添加规格</button>
										</div>
									</div>
									<div class="fn-left addCategory_detail" ng-if="model.isTab=='1'">
										<div class="mgb10">
											<input type="text" placeholder=""  class="width120"/>
										</div>
										<button class="">＋添加规格属性</button>
									</div>
									<div class="fn-left addCategory_detail" ng-if="model.isTab=='2'">
										<div class="mgb10">
											<input type="text" placeholder="" class="width120"/>
										</div>
										<button class="">＋添加规格属性</button>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14" style="height: 1px;"></div>
							<div class="col-md-10">
								<button type="button" class="btn btn-primary mgr10" ng-click="addProudctWd()">保存</button>
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
