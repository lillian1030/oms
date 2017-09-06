/**
 * Created by Zora Tao on 2016/6/12.
 *
 * Please backup before modification
 * 修改前请备份
 **/

//var todoApp = angular.module("manaSizeApp", []);
qyApp.controller("managesizeController", function ($scope, $http,$compile,Upload,$q) {

	$scope.addGroupname = function(){
		if(validateForm("sizeGroupForm","msg")==true){
			var groupNameValue=$('#groupName').val();
			var brandId = $scope.brand;
			var groupName={"groupName":groupNameValue};
			groupName.brandId=brandId;
			var data = JSON.stringify(groupName);
	        $http({
	            method:'post',
	            url:pos+'sizeGroup/addSizeGroup',
	            params:{
	                keyParams:getKeyParams(data,keyParams),
	                jsonObject:getJsonObject(data)
	            }
	        }).success(function(data,stauts,headers,config){
	        	if(data.code=="1"){
	        		$('#newGroup').remove();
	        		$scope.reload();
	        	}else{
	        		alertmsg(data.msg,"error");
	        	}
	        });
		}else{
 			alertmsg(validateForm("sizeGroupForm","msg"),'error')
 		}

	}
	//添加尺码
	$scope.addSize=function(groupId){
		if(validateForm("sizeForm","msg")==true){
			var groupId=groupId+"";
			var sizeNum=$('#newSizeNum').val();
			var sizeName=$('#newSizeName').val();
			var sizeNameUpper=sizeName.toUpperCase();
			var sizeIndex=$('#newSizeIndex').val();
			var json={"groupId":groupId,"sizeNum":sizeNum,"sizeName":sizeNameUpper,"sizeIndex":sizeIndex,"brandId":""};
			var data=JSON.stringify(json);
	        $http({
	            method:'post',
	            url:pos+"size/addSize",
	            params:{
	                keyParams:getKeyParams(data,keyParams),
	                jsonObject:getJsonObject(data)
	            }
	        }).success(function(data,stauts,headers,config){
	        	if(data.code=="1"){
	        		$scope.reload();
	        	}else{
	        		alertmsg(data.msg,"error");
	        	}
	        });		
		}else{
 			alertmsg(validateForm("sizeForm","msg"),'error')
 		}	
	}
	//修改尺码
	$scope.editSize=function(sizeId,sizeName,sizeNum,sizeIndex){
		if(validateForm("sizeForm","msg")==true){
			var sizeNameUpper =sizeName.toUpperCase();
			var json={"sizeId":sizeId,"sizeName":sizeNameUpper,"sizeNum":sizeNum,"sizeIndex":sizeIndex};
			var data=JSON.stringify(json);
	        $http({
	            method:'post',
	            url:pos+"size/updateSize",
	            params:{
	                keyParams:getKeyParams(data,keyParams),
	                jsonObject:getJsonObject(data)
	            }
	        }).success(function(data,stauts,headers,config){
	        	if(data.code=="1"){
	        		$scope.reload();
	        	}else{
	        		alertmsg(data.msg,"error");
	        	}	
	        });	
		}else{
 			alertmsg(validateForm("sizeForm","msg"),'error')
 		}	
	}	
	//删除尺码
	$scope.deletSize=function(sizeId){
		var sizeId=sizeId;
		var json={"sizeId":sizeId};
		var data=JSON.stringify(json);
        $http({
            method:'post',
            url:pos+"size/deleteSize",
            params:{
                keyParams:getKeyParams(data,keyParams),
                jsonObject:getJsonObject(data)
            }
        }).success(function(data,stauts,headers,config){
        	if(data.code=="1"){
        		$scope.reload();
        	}else{
        		alertmsg(data.msg,"error");
        	}	
        });		
	}
	//修改尺码组
	$scope.editGroupname=function(groupId,groupName){
		if(groupName != null && groupName != ''){
			var json={"groupId":groupId,"groupName":groupName};
			var data=JSON.stringify(json);
	        $http({
	            method:'post',
	            url:pos+"sizeGroup/updateSizeGroup",
	            params:{
	                keyParams:getKeyParams(data,keyParams),
	                jsonObject:getJsonObject(data)
	            }
	        }).success(function(data,stauts,headers,config){
	        	if(data.code=="1"){
	        		$scope.reload();
	        		inp();
	        	}else{
	        		alertmsg(data.msg,"error");
	        	}	
	        });	
		}else{
			alertmsg("请输入尺码组名称","error");
		}
			
	}	
	//删除尺码组
	$scope.deletSizeGroup=function(groupId){
		var groupIds={"groupId":groupId};
		var data = JSON.stringify(groupIds);
        $http({
            method:'post',
            url:pos+'sizeGroup/deleteSizeGroup',
            params:{
                keyParams:getKeyParams(data,keyParams),
                jsonObject:getJsonObject(data)
            }
        }).success(function(data,stauts,headers,config){
        	if(data.code == 1){
        		alertmsg(data.msg);
        		$scope.reload();
        	}else if(data.code == "20002"){
        		alertmsg(data.msg,"error");
        		//alertmsg("存在商品使用尺码组不允许删除!");
        	}else if(data.code == "20018"){
        		alertmsg(data.msg,"error");
        		//alertmsg("该尺码组存在尺码不允许删除!");
        	}
        		
        });
	}
    //刷新
    $scope.reload = function(){
        $http({
            method:'post',
            url:pos+'size/getAllSize',
            params:{
                keyParams:getKeyParams('{}',keyParams),
                jsonObject:getJsonObject('{}')
            }
        }).success(function(data,stauts,headers,config){
            var grouplist = data.data.sizeGroup;
            $scope.grouplist = grouplist;
            $http({
	            method:'post',
	            url:pos+'size/getAllSize',
	            params:{
	                keyParams:getKeyParams('{}',keyParams),
	                jsonObject:getJsonObject('{}')
	            }
	        }).success(function(data,stauts,headers,config) {
	        	$scope.updateinput();
	        });
        });
    }
    
    //添加
    $scope.addNewGroup=function(){
	    	//查询品牌
	        $http({
	            method:'post',
	            url:pos+'brand/getBrand',
	            params:{
	                keyParams:getKeyParams('{}',keyParams),
	                jsonObject:getJsonObject('{}')
	            }
	        }).success(function(data,stauts,headers,config){
	       	 	if(data.code == 1) {
	    	         $scope.brands = data.data.brandList;
	       	 	} else {
	       	 		alertmsg("获取品牌失败","error");
	            }
	        })
   	 var addLineGroup=[];
   	 addLineGroup.push('<form id="sizeGroupForm"><table id="newGroup" class="table table-hover table-striped table-bordered newAddGroup">');
   	 addLineGroup.push('<tr> <th scope="col" colspan="4" class="am-ft-left">'
   			 +'<input id="groupName" class="groupTitlName fn-left" type="text" name="groupName" placeholder="新增尺码组" groupid="{{n.groupId}}" />'
//             +'<select class="brandSelect" ng-options="brand.brandId as brand.brandName for brand in brands" ng-model="brand"><option value="">请选择品牌</option></select>'
   			 +'<div class="sizeTitl">'
             +'<a href="javascript:;" class="sizeTitl-edit  fn-hide" onclick="editTitl(this)">编辑</a>'
             +'<a href="javascript:;" id="addGroup" class="sizeTitl-save" ng-click="addGroupname()">保存</a>'
             +'<a href="javascript:;" class="sizeTitl-cancel" onclick="deleteNewGroup(this)">取消</a></div></th></tr>'
             +'<tr><td>尺码名称</td><td>编码（用于SKU编码）</td><td>排序</td><td colspan="2">操作</td></tr>'
             +'<tr class="addTr"><td colspan="4"><a href="javascript:;" class="fn-left addLineColor" onclick="addNewSize()">+&nbsp;增加尺码</a>'
             +'</td></tr></table></form>'
   	 );
   	 var html=addLineGroup.join("");
        var template=angular.element(html);
        var newHtml=$compile(template)($scope);
        angular.element($('#group').append(newHtml));
        var formArray=[];
    	formArray.push('{"sizeGroupForm":"/sizeGroup/addSizeGroup"}');
    	initValidate(formArray,pos);
    }
    //
    $scope.addNewSize=function(obj){
   	 var addLineColor=[];
     addLineColor.push('<tr class="newAdd" sizeindex="">');
     addLineColor.push('<td><input id="newSizeName" type="text" class="sizename" name="sizeName" value="" /></td>');
     addLineColor.push('<td><input id="newSizeNum" type="text" class="sizenum" name="sizeNum" value="" /></td>');
     addLineColor.push('<td><input id="newSizeIndex" type="text" class="sizeindex" name="sizeIndex" value="" /></td>');    
     addLineColor.push('<td class="td_edit" style="display:none"><button type="button" class="line-btn fn-left alterBtn col-md-6" am-bg="blue" onclick="editBtn(this)">编辑</button><button type="button" class="fn-left line-btn-delete col-md-6" am-bg="white" onclick="deletSize(this)">删除</button></td>');
     addLineColor.push('<td class="td_editing" style="display:table-cell"><button type="button" class="line-btn fn-left alterBtn col-md-6" am-bg="blue" ng-click="addSize('+obj+')">保存</button><button type="button" class="fn-left line-btn-delete col-md-6" am-bg="white" onclick="delete_btn(this)">取消</button></td>');
     addLineColor.push('</tr>');
     	var html=addLineColor.join("");
        var template=angular.element(html);
        var newHtml=$compile(template)($scope);
        if(angular.element($('.'+obj)).prev().find('td').find('input').val()==''){
            alertmsg("请填写完整再进行增加",'error')
        }else{
            angular.element($('.'+obj).before(newHtml));
            $(function(){
                var formArray=[];
                formArray.push('{"sizeForm":"/size/updateSize"}');
                initValidate(formArray,pos);
            })
        };

    }
    //查询尺码组
    keyParams=angular.fromJson(keyParams);
    keyParams.brandId ="714,715";
    keyParams=angular.toJson(keyParams)
    $http({
        method:'post',
        url:pos+'size/getAllSize',
        params:{
            keyParams:getKeyParams('{}',keyParams),
            jsonObject:getJsonObject('{}')
        }
    }).success(function(data,stauts,headers,config) {
    	if(data.code == 1) {
	        var grouplist = data.data.sizeGroup;
	        $scope.grouplist = grouplist;
		        $http({
		            method:'post',
		            url:pos+'size/getAllSize',
		            params:{
		                keyParams:getKeyParams('{}',keyParams),
		                jsonObject:getJsonObject('{}')
		            }
		        }).success(function(data,stauts,headers,config) {
		        	if(data.code == 1) {
		        		$scope.updateinput();
		        	}else{
		        		alertmsg(data.msg,"error");
		        	}
		        });
    	}else{
   	 		alertmsg("获取品牌失败","error");
        }     
    })
    $scope.updateinput = function(){
    	angular.forEach($('.groupTitlName'),function(data){
    		var inputWid = $(data).width();
            var inputVal = $(data).val().length;
            (inputVal>5) ? inputWid = inputVal * 15 : inputWid = inputVal * 22;
            $(data).css({'width':inputWid+'px','min-width':inputWid+'px'});
    	})
    }
});


