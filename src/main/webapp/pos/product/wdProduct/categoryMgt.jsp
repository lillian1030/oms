<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<div class="wrapper" style="position: inherit;">
<!--------------- Content start ----------------->
    <!--<div class="content-wrapper" ng-hide="numA==1||numB==1||numC==1">-->
    <div class="content-wrapper" >
        <div class="col-md-11 pageTitl">
            <h2 class="am-ft-16 fn-left">品类列表</h2>
        </div>
        <div class="fn-clear"></div>
          <div class="proList-nav" style="width: 67%;">
            <div class="proTop">
                <span class="fn-left">品类列表</span>
                <!-- <button  type="button" class="line-btn fn-right" ng-click="toAddStandard('1')">添加品类</button> -->
                <div class="fn-clear"></div>
            </div>
            <form id="wdProductListForm">
                <table width="80%" class="mgb0 table-hover table-condensed productTable" id="wdProductList">
                  <tr>
                    <th  width="8%"  align="center" valign="middle" scope="col">品类名称</th>
                    <th  width="18%"  align="center" valign="middle" scope="col">品类属性</th>
                    <th  width="13%"  align="center" valign="middle" scope="col">品类规格</th>
                    <th   width="8%" align="center" valign="middle" scope="col">操作</th>
                  </tr>
                  <tr ng-repeat="sortInfo in sortList">
                    <td >
                       		{{sortInfo.sortName}}
                    </td>
                    <td>{{sortInfo.attrArr}}</td>
                    <td>{{sortInfo.itemList}}</td>
                    <td>
                    	<a href="javascripr:;" class="am-ft-d4" ng-click="editSort(this)">编辑</a>
                    </td>
                  </tr>
              </table>
              <!-- List end -->
            </form>
            <div class="fn-clear"></div>
           </div>
             <!--分页 start
		    <div class="pagelist priv-pagelist" style="width: 92.5% !important;">
		    	<div id="paging"></div>    
		    </div>-->
	    <!--分页 end-->
    </div>    
    <!--------------- Content end ----------------->
</div>    
