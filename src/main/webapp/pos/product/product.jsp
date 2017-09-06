
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--滚动条样式-->
<script src="../static/base/js/jquery.nicescroll.js" type="text/javascript"></script>

<!-- 二维码使用 -->
<script type="text/javascript" src="../static/base/js/jquery.nouislider.js"></script>
<script type="text/javascript" src="../static/base/js/jqprint.0.3.js"></script>
<script type="text/javascript" src="../static/base/js/jquery-migrate-1.1.0.js"></script>

<!--重置滚动条样式-->
<script type="text/javascript">
    $('html,body').niceScroll({
        cursorcolor: "rgb(165, 171, 179)",
        cursoropacitymax: 1,
        touchbehavior: false,
        cursorwidth: "10px",
        cursorborder: "0",
        cursorborderradius: "5px",
        autohidemode: false
    });
</script>
<!-- 主要 -->
<div class="wrapper" style="position: inherit;">
<!--------------- Content start ----------------->
    <div class="content-wrapper" ng-hide="numA==1||numB==1||numC==1">
        <div class="col-md-11 pageTitl">
            <h2 class="am-ft-16 fn-left">商品列表</h2>
        </div>
        <div class="fn-clear"></div>
        <!-- content info start -->
        <section class="container-fluid">
            <div class="row">
                <!-- search start -->

                <div class="searchType-select">
                    <label class="fn-left titl-label">查询类型：</label>
                    <label class="radio-inline">
                        <input class="searchtp" num="1" type="radio" name="searchType" value="" ng-click="choice($event)" /> 按照款号查询
                    </label>
                    <label class="radio-inline">
                        <input class="searchtp" num="2" type="radio" name="searchType" value="" ng-click="choice($event)" checked /> 按照品牌查询
                    </label>
                </div>

                <div class="productSearch productSearch-type1">
                    <form class="form-horizontal">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">款号：</label>
                                    <div class="col-sm-10 pro-search">
                                        <input type="text" class="form-control" id="proModelid" placeholder="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 am-ft-left searchBox">
                                <button type="button" class="btn btn-primary mgr20" ng-click="getStock('1')">查询</button>
                                <button type="button" class="btn btn-default" ng-click="cleaned(this)">清空</button>
                            </div>
                        </div>
                    </form>
                </div>

            <div class="productSearch productSearch-type2">
                <form class="form-horizontal">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="" class="col-sm-3 control-label">品牌：</label>
                                <div class="col-sm-8 pro-search">
                                    <select class="col-md-12" ng-options="queryBrand.brandId as queryBrand.brandName for queryBrand in queryBrands" ng-model="queryBrand" ng-change="getConditions()">
                                        <option value="">请选择</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="" class="col-sm-3 control-label">年份：</label>
                                <div class="col-sm-8 pro-search">
                                    <select class="col-md-12" ng-options="queryYear.proYear for queryYear in queryYears" ng-model="year1">
                                        <option value="">请选择</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="" class="col-sm-3 control-label">季节：</label>
                                <div class="col-sm-8 pro-search">
                                    <select class="col-md-12" ng-options="season.proSeason for season in seasons" ng-model="season1">
                                        <option value="">请选择</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 am-ft-left searchBox">
                            <button type="button" class="btn btn-default" ng-click="cleaned(this)">清空</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="" class="col-sm-3 control-label">大品类：</label>
                                <div class="col-sm-8 pro-search">
                                    <select class="col-md-12" ng-options="gps.proGrandparentSortId as gps.grandparentSortName for gps in grandparentSorts" ng-model="gps" ng-change="getParentSort()">
                                    <option value="">请选择</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="" class="col-sm-3 control-label">中品类：</label>
                                <div class="col-sm-8 pro-search">
                                    <select class="col-md-12" ng-options="ps.proParentSortId as ps.parentSortName for ps in parentSorts" ng-model="ps" ng-change="getSort()">
                                    <option value="">请选择</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="" class="col-sm-3 control-label">小品类：</label>
                                <div class="col-sm-8 pro-search">
                                    <select class="col-md-12" ng-options="sort.proSortId as sort.sortName for sort in sorts" ng-model="sort">
                                    <option value="">请选择</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 am-ft-left fn-right searchBox">
                            <button type="button" class="btn btn-primary" ng-click="getStock('2')">查询</button>
                        </div>
                    </div>
                </form>
            </div>
                <!-- List start -->
                <div class="proList-nav">
            <div class="proTop">
                <span class="fn-left">所有商品(共{{count}}条记录)</span>
                <button  type="button" class="line-btn fn-right" ng-click="toAddProduct()">添加新商品</button>
                <div class="fn-clear"></div>
            </div>
            <form>
                <table width="100%" class="mgb0 table-hover table-condensed productTable">
                  <tr>
                    <th colspan="3" align="center" valign="middle" scope="col">商品</th>
                    <th width="16%" align="center" valign="middle" scope="col">品牌</th>
                    <th width="12%" align="center" valign="middle" scope="col">分类</th>
                    <!-- <th width="7%" align="center" valign="middle" scope="col">设计师</th> -->
                    <th width="12%" align="center" valign="middle" scope="col">年份</th>
                    <th width="8%" align="center" valign="middle" scope="col">季节</th>
                    <!-- <th width="6%" align="center" valign="middle" scope="col">主型</th>
                    <th width="6%" align="center" valign="middle" scope="col">辅型</th>
                    <th width="9%" align="center" valign="middle" scope="col">进仓类型</th>
                    <th width="6%" align="center" valign="middle" scope="col">库存</th> -->
                    <th width="12%" align="center" valign="middle" scope="col">操作</th>
                    <th width="13%" align="center" valign="middle" scope="col" ng-show="showQrFlag">
                        <div class="codeSize-nav">
                            <strong>码上购二维码</strong><br/>
                            <span class="set-codeSize">尺寸:<strong class="code-size" ng-model="codeSize">500px</strong><i class="fa fa-cog"></i></span>
                        </div>
                    </th>
                  </tr>
                  <tr ng-repeat="pro in products">
                   <td width="2%"><input type="checkbox" class="code_checkbox" ng-click="check()" ng-show="showQrFlag"/></td>
                    <td width="5%">
                         <img ng-src="{{pro.proPic}}" class="productImg" title="{{pro.proName}}" alt="{{pro.proName}}" />
                   </td>
                    <td width="20%">
                        <p class="productTitl">{{pro.proName}}</p>
                        <p>款号：{{pro.proModelnum}}</p>
                        <p>吊牌价：￥{{pro.proPrice}}</p>
                    </td>
                    <td>{{pro.brandName}}</td>
                    <td>{{pro.grandparentSortName}}<br>{{pro.parentSortName}}<br>{{pro.sortName}}</td>
                    <!-- <td>王某某</td> -->
                    <td>{{pro.proYear}}</td>
                    <td>{{pro.proSeason}}</td>
                    <!-- <td>成品</td>
                    <td>货品</td>
                    <td>常规</td>
                    <td>10088</td> -->
                    <td>
                        <a ng-if="pro.showEditType=='1'" ng-click="toEditProduct(pro.proModelnum,pro)" href="javascript:;">编辑</a>
                        <a ng-if="pro.showEditType!='1'" ng-click="toProductDetail(pro.proModelnum,pro)" href="javascript:;">查看详情</a>
                       <!--  <button type="button" class="soldOut">下架</button> -->
                    </td>
                    <td class="" ng-show="showQrFlag">
                        <a href="javascript:;" ng-click="download(this)">下载</a>
                        <a href="javascript:;" ng-click="doPrint(this)">打印</a>
                    </td>
                  </tr>
              </table>
              <!-- List end -->
               <!--  <div class="soldOut-batch fn-left">
                    <input type="checkbox" name="" value="" />
                    <button type="button" class="btn btn-default">批量下架</button>
                </div> -->
            </form>
            <div class="fn-clear"></div>
        </div>
                <!-- content info end -->
                <!-------right content end--------->
                <div class="fn-clear"></div>
            </div>
        </section>
	    
	    <!-------right content end--------->
	    <div class="select-batch fn-left" ng-show="showQrFlag">
	        <label class="radio-inline fn-left">
	            <input id="selectAll" class="selectTp" type="checkbox" name="" value="" ng-click="selectAll()"/>全选
	        </label>
	        <a href="javascript:;" class="selectTp select-invert" ng-click="reverseSelect()">反选</a>
	        <a href="javascript:;" class="line-btn" ng-click="batchDownload()">下载选中款二维码</a>
	        <a href="javascript:;" class="line-btn" ng-click="doBatchPrint()">打印选中款二维码</a>
	    </div>
	    
	    <!--分页 start-->
	    <div class="pagelist priv-pagelist" style="width: 92.5% !important;">
	    	<div id="paging"></div>    
	    </div>
	    <!--分页 end-->
	    
    </div>
    
    <!-- 打印 -->
    <div id="qrCodeImgs" style="display:none;">
	
	</div>       

    <!---- Content-wrapper end ---->
<!--商品管理添加和修改-->
<div class="default" ng-hide="numA==0" ng-init="numA=0" ng-show="numA==1">
	<jsp:include page="addproduct.jsp"/> 
</div> 
<div class="default" ng-hide="numB==0" ng-init="numB=0" ng-show="numB==1">
	<jsp:include page="editproduct.jsp" />
</div>
<div class="default" ng-hide="numC==0" ng-init="numC=0" ng-show="numC==1">
	<jsp:include page="productDetail.jsp" />
</div>
<!-- 二维码尺寸选择弹窗 -->
<div class="codeSize-dialog">
    <p class="codeSize-titl">1000px<i class="fa fa-caret-down mgl5"></i></p>
    <div class="slider-minmax1 noUi-target"></div>
</div>
<!-- /二维码尺寸选择弹窗 -->
<!--商品管理添加和修改代码结束-->
<script type="text/javascript">
    //搜索方式
    $('.productSearch-type1').hide();
    
  //二维码尺寸滑块选择
    $('.set-codeSize').click(function(){
        $('.codeSize-dialog').toggle();
    });
  
    function DoSaveAsIMG(proModelid) {  
        if (document.getElementById("IframeReportImg"+proModelid).src != "about:blank")  
            document.frames["IframeReportImg"+proModelid].document.execCommand("SaveAs",true,"C://Users//时爽//Downloads//123.png");          
    }
    
	/* $('.searchtp').change(function(){
	        if($(this).prop('checked') && $(this).attr('num')==1){
	            $('.productSearch-type1').show();
	            $('.productSearch-type2').hide();
	        }else if($(this).prop('checked') && $(this).attr('num')==2 ){
	            $('.productSearch-type2').show();
	            $('.productSearch-type1').hide();
	        }
	 }); */
</script>