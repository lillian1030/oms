//库存调整单
qyApp.controller('improvestockController', ['$scope','$http','$compile',function($scope,$http,$compile) {
	
	var from=0;
	var pageSize=5;
	var total=0;
	$scope.jsonPage={"nub":""+from+"","size":""+pageSize+"","status":"1"};

	//分页
	$scope.createPagePlugin=function(total,pageSize){
		 	  $("#paging").empty();
		      paging = pagePlugin.createPaging({
				    renderTo : 'paging',
				    total:total,
				    pageSize:pageSize
			  });
	          paging.goPage = function(from,to){
	            	$scope.page(from-1,pageSize);
	          }			    	
		};
		
	$scope.page=function(from,pageSize){
		 $scope.jsonPage={"nub":""+from+"","size":""+pageSize+"","status":"1"};
		 var jsonObject=$("#inventoryDiffForm").serializeJson();
		 jsonObject=JSON.parse(jsonObject);		 
		 $.extend($scope.jsonPage,jsonObject);
		 jsonObject=JSON.stringify($scope.jsonPage);	
		 
		 $http({
	         method:'post',
	         url:ss+'inventory/getInventoryDiff',
		 	 params:{
	             keyParams:getKeyParams(jsonObject,keyParams),
	             jsonObject:getJsonObject(jsonObject)
	         }
	     }).success(function(data,stauts,headers,config){
	         $scope.inventoryDiffs = data.data.inventorys;	         
	     })
	 }
	
	 //获取差异盘点单
	 $scope.getInventoryDiff=function(){
		var jsonObject=$("#inventoryDiffForm").serializeJson();
		jsonObject=JSON.parse(jsonObject);		 
		$.extend($scope.jsonPage,jsonObject);
		jsonObject=JSON.stringify($scope.jsonPage);	
		$http({
	         method:'post',
	         url:ss+'inventory/getInventoryDiff',
		 	 params:{
	             keyParams:getKeyParams(jsonObject,keyParams),
	             jsonObject:getJsonObject(jsonObject)
	         }
	     }).success(function(data,stauts,headers,config){
	    	 if(data.data.inventorys.length > 0){
	    		 $scope.inventoryDiffs = data.data.inventorys;
		         total=parseInt($scope.inventoryDiffs[0].count);
		         $scope.createPagePlugin(total,pageSize);
	    	 }else{
	    		 alertmsg("没有调整单","error");
	    		 $scope.inventoryDiffs = "";
	    		 $scope.createPagePlugin(0,0);
	    	 }
	        
	     })
	}
	 
	//获取差异盘点详情
	$scope.viewDetail=function($event){
		var data=$($event.target).attr("data").split(",");
		$scope.inventoryId=data[0];
		$scope.createDate=data[1];
		$scope.userName=data[2];		
		$scope.getInventoryDetail();		
		$('.createInvDialog,.maskBg').show();
	}
	
	//获取盘点明细
	$scope.getInventoryDetail=function(){
		 $http({
	         method:'post',
	         url:ss+'inventory/getInventoryDetail',
		 	 params:{
	             keyParams:getKeyParams("{\"inventoryId\":\""+$scope.inventoryId+"\"}",keyParams),
	             jsonObject:getJsonObject("{\"inventoryId\":\""+$scope.inventoryId+"\"}")
	         }
	     }).success(function(data,stauts,headers,config){
	         $scope.inventoryDetails = data.data.inventoryDetails;
	     })
	 }
	
}]);

