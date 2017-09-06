<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
    <!--------------- Content start ----------------->
    <div class="content-wrapper fn-clear">
        <div class="col-md-11 pageTitl">
            <h2 class="am-ft-16 fn-left">所有部门</h2>
            <a href="javascript:;" class="btn btn-primary fn-right" ng-click="goToAddDepart()">添加部门</a>
        </div>
        <div class="fn-clear"></div>

        <div class="ManColTable col-lg-12">
            <form>
	        	<div class="bread_path">
	        		层级关系：<a href="javascript:;" ng-click="getNextDepart2(0)" onclick="removNext(this)">总部</a>
	        	</div>
                <div class="table-responsive PrivTable storesMgt-Table">
                    <table class="table table-hover table-striped table-bordered">
                        <tr>
                            <th scope="col">部门名称</th>
                            <th scope="col">部门主管</th>
                            <th scope="col">区域</th>
                            <th scope="col">主管邮箱</th>
                            <th scope="col">主管电话</th>
                            <th scope="col">成员数量</th>
                            <th scope="col">操作</th>
                        </tr>
                        <tr ng-repeat="dp in departList">
                            <td><a href="javascript:;" ng-click="getNextDepart(dp)">{{dp.departName}}</a></td>
                            <td>{{dp.trueName}}</td>
                            <td>{{dp.departArea}}</td>
                            <td>{{dp.email}}</td>
                            <td>{{dp.userName}}</td>
                            <!--<td><a href="javascript:;" ng-click="goToMemberList(dp)">{{dp.userCount}}</a></td>-->
                            <td>{{dp.userCount}}</td>
                            <td>
                            	<a href="javascript:;" class="mgr5" ng-click="gotoChooseMg(dp)">更换主管</a>
                            	<a href="javascript:;" class="mgr5" ng-click="goToEditDepart(this)">编辑</a>
                            </td>
                        </tr>                       
                    </table>
                </div>

            </form>
            <div class="fn-clear"></div>
              <!--分页 start-->
		     <div class="pagelist priv-pagelist">
		    	 <div id="pagingDepart"></div>    
		     </div>
	     	<!--分页 end-->
        </div>     
    </div>

    <div class="fn-clear"></div>

<script type="text/javascript">
	function removNext(a){
		$(a).nextAll().remove();
	}
</script>