  registerApp.controller("applyJoin_successController",["$scope",function($scope){
	$scope.userInfo=JSON.parse(localStorage.userInfo);
	
	$scope.enterSystem=function(){
		window.location.href="../index.jsp";
	}
	
	
}])
