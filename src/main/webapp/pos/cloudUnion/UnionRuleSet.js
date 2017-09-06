qyApp.controller('UnionRuleSetController', ['$scope', '$http', '$compile', 'Upload', function($scope, $http, $compile, Upload) {

    //联盟列表
    $scope.getUnions = function(){
        $http({
            method:'post',
            url:pos+'cloudUnion/getCloudUnionList',
            params:{
                keyParams:getKeyParams('{}',keyParams),
                jsonObject:getJsonObject('{}')
            }
        }).success(function(data,stauts,headers,config){
            if (data.code == 1) {
                $scope.unionList = data.data.unionList;
                if(localStorage.cloundId==undefined){
                    $scope.seletedCloudId = $scope.unionList[0].cloudId;
                    $scope.UnionOrgid = $scope.unionList[0].orgId;
                }else{
                    $scope.seletedCloudId = localStorage.cloundId;
                    $scope.UnionOrgid = localStorage.orgid;
                }
                $scope.getUnionsRulesList();
            } else {
                alertmsg("获取信息失败","error");
            }
        });
    };
    $scope.getUnions();

    //初始查询联盟对应规则
    $scope.getUnionsRulesList =function(){
        var jsonObject = "{"+"\"cloudId\":\""+$scope.seletedCloudId+"\"}";
        $http({
            method:'post',
            url:pos+'cloudRule/getCloudRule',
            params:{
                keyParams:getKeyParams(jsonObject,keyParams),
                jsonObject:getJsonObject(jsonObject)
            }
        }).success(function(data,stauts,headers,config){
            if (data.code == 1) {
                if(data.data.cloudRuleList.length > 0){
                    $scope.cloudRuleList = data.data.cloudRuleList;
                    $scope.timeOut = $scope.cloudRuleList[0].timeOut;
                }
            } else {
                alertmsg("获取信息失败","error");
            }
        });
    };

    //查询联盟对应规则列表
    var keyParam = JSON.parse(keyParams);
    $scope.orgid = keyParam.orgId;

    $scope.getUnionsRules = function(obj){
        $('.ruleaddtr').remove();
        for(var i=0;i<$scope.unionList.length;i++){
            if($scope.unionList[i].cloudId == obj.seletedCloudId){
                $scope.UnionOrgid = $scope.unionList[i].orgId;
            }
        }
        var jsonObject = "{"+"\"cloudId\":\""+obj.seletedCloudId+"\"}";
        $http({
            method:'post',
            url:pos+'cloudRule/getCloudRule',
            params:{
                keyParams:getKeyParams(jsonObject,keyParams),
                jsonObject:getJsonObject(jsonObject)
            }
        }).success(function(data,stauts,headers,config){
            if (data.code == 1) {
                $scope.cloudRuleList = data.data.cloudRuleList;
                if(data.data.cloudRuleList.length > 0){
                    $scope.timeOut = $scope.cloudRuleList[0].timeOut;
                }else{
                    $scope.timeOut="";
                }
            } else {
                alertmsg("获取信息失败","error");
            }
        });
    };


    //全部规则
    $scope.getAllRules = '';
    $scope.getallRules = function(){
        $http({
            method:'post',
            url:pos+'rule/getRules',
            params:{
                keyParams:getKeyParams('{}',keyParams),
                jsonObject:getJsonObject('{}')
            }
        }).success(function(data,stauts,headers,config){
            if (data.code == 1) {
                $scope.ruleList = data.data.ruleList;
            } else {
                alertmsg("获取信息失败","error");
            }
        });
    };
    $scope.getallRules();

    //相应的规则描述
    $scope.changeRuleMemo = function(ruleId,obj){
        for(var i=0;i<$scope.ruleList.length;i++){
            if($scope.ruleList[i].ruleId == ruleId){
                $scope.ruleMemo = $scope.ruleList[i].ruleMemo;
            }
        }
        obj.list.ruleMemo = $scope.ruleMemo;
    };
    //新增规则的change事件
    $scope.appendOpt = function() {
        $http({
            method:'post',
            url:pos+'cloudUnion/getCloudUnionList',
            params:{
                keyParams:getKeyParams('{}',keyParams),
                jsonObject:getJsonObject('{}')
            }
        }).success(function(data,stauts,headers,config){
            if (data.code == 1) {
                $scope.unionList = data.data.unionList;
            } else {
                alertmsg("获取信息失败","error");
            }
        });
        for (var i = 0; i < $scope.ruleList.length; i++) {
            var option;
            var ruleId;
            ruleId=$scope.ruleList[i].ruleId;
            option += '<option value="'+ruleId+'">' + $scope.ruleList[i].ruleName + '</option>';
        }
        $('.ruletr .addRuleSel').append(option);
    };

    //新增规则
    $scope.addNewrules=function(obj){
        var Newrules=[];
        Newrules.push('<tr class="ruleaddtr ruletr">');
        Newrules.push('<td><div class="order-set" num=""></div><input type="hidden" name="sortNo" value="" /></td>');
        Newrules.push('<td><select class="addRuleSel" name="ruleId" onchange="changeRuleMemos(this)"><option value="0">请选择</option></select></td>');
        Newrules.push('<td>{{ruleMemo}}</td>');
        Newrules.push('<td class="lasttd"><a href="javascript:;" onclick="cancelAdd(this)">取消</a></td>');
        Newrules.push('</tr>');
        var html=Newrules.join("");
        var template=angular.element(html);
        var newHtml=$compile(template)($scope);
        angular.element($('.addRuleTr').before(newHtml));

        $(obj.target).parents('tr').prev().prev().removeClass('ruletr');

        var prevdiv = $(obj.target).parents('tr').prev().prev().find('.order-set');
        var prevTxt = $(obj.target).parents('tr').prev().prev().find('.order-set').text();
        var prevInput = $(obj.target).parents('tr').prev('tr').find('input');
        if(prevTxt!=""){
            $(obj.target).parents('tr').prev().find('.order-set').text(JSON.parse(prevTxt)+1);
            prevInput.val(JSON.parse(prevTxt)+1);
            prevdiv.attr({"num":JSON.parse(prevTxt)+1})
        }else{
            $(obj.target).parents('tr').prev().find('.order-set').text(1);
            prevInput.val(1);
            prevdiv.attr({"num":1})
        }
        $scope.appendOpt();
    };

    //删除规则
    $scope.deletRules = function($index,obj) {
        $(obj.target).parents('tr').nextAll('tr').each(function(){
            var nextallNum = $(this).find('.order-set').text();
            nextallNum = nextallNum-1;
            $(this).find('.order-set').text(nextallNum);
            $(this).find('.order-set').attr({'num':nextallNum});
            $(this).find('.order-set').next('input').val(nextallNum);
        });
        $(obj.target).parents('tr').remove();
    };


    //保存
    $scope.saveRules = function(){
        var cloudRuleList = [];

        var timeOut = $("#rulesTimeset").val();
        var jsonObject = $("#rulesInfo").serializeJson();

        jsonObject = JSON.parse(jsonObject);
        if(jsonObject.ruleId==undefined||jsonObject.ruleId==0){
            alertmsg("保存失败,请添加派单规则","error");
        }else{
            if(typeof jsonObject.ruleId == 'string'){
                if(jsonObject.ruleId.length>7){
                    $scope.ruleId = jsonObject.ruleId.substr(7);
                }else{
                    $scope.ruleId = jsonObject.ruleId;
                }
                //$scope.ruleId = jsonObject.ruleId.substr(7);
                var cloudRules = {};
                cloudRules.ruleId = $scope.ruleId;
                cloudRules.cloudId = $scope.seletedCloudId;
                cloudRules.timeOut = timeOut;
                cloudRuleList.push(cloudRules);
            }else{
                for(var i=0;i<jsonObject.ruleId.length;i++){
                    //$scope.sortNo = jsonObject.sortNo[i];
                    $scope.sortNo = jsonObject.sortNo[i];

                    if(jsonObject.ruleId[i].length>7){
                        $scope.ruleId = jsonObject.ruleId[i].substr(7);
                    }else{
                        $scope.ruleId = jsonObject.ruleId[i]
                    }

                    var cloudRules = {};
                    cloudRules.sortNo = $scope.sortNo;
                    cloudRules.ruleId = $scope.ruleId;
                    cloudRules.cloudId = $scope.seletedCloudId;
                    cloudRules.timeOut = timeOut;
                    cloudRuleList.push(cloudRules);
                }
            }
            cloudRuleList = JSON.stringify(cloudRuleList);
            jsonObject = "{\"cloudRuleList\":" + cloudRuleList + "}";

            $http({
                method:'post',
                url:pos+'cloudRule/addCloudRule',
                params:{
                    keyParams:getKeyParams(jsonObject,keyParams),
                    jsonObject:getJsonObject(jsonObject)
                }
            }).success(function(data,stauts,headers,config){
                if (data.code == 1) {
                    alertmsg("保存成功");
                    var html ='<a href="javascript:;" class="am-ft-red" onclick="cancelAdd(this)">删除</a>';
                    $('.ruleaddtr .lasttd').html(html);
                } else {
                    alertmsg("保存失败","error");
                }
            });
        }
    };

    //返回
    var nodeId =  localStorage.nodeId;
    $scope.nodeId =  localStorage.nodeId;
    $scope.callback = function(){
        if(nodeId==307){
            window.location.href="../public/home.jsp#/UnionShowShop";
        }else if(nodeId==306){
            window.location.href="../public/home.jsp#/cloudUnion";
        }
    }
}]);

//取消新增规则
function cancelAdd(a){
    $(a).parents('tr').nextAll('.ruleaddtr').each(function(){
        var nextallNum = $(this).find('.order-set').text();
        nextallNum = nextallNum-1;
        $(this).find('.order-set').text(nextallNum);
        $(this).find('.order-set').attr({'num':nextallNum});
        $(this).find('.order-set').next('input').val(nextallNum);
    });
    $(a).parents('tr').remove();
}
//新增规则change事件(绑定规则描述)
function changeRuleMemos(v){
    $.ajax({
        type: "post",
        url: pos+"rule/getRules",
        data:{keyParams:getKeyParams('{}',keyParams),jsonObject:getJsonObject('{}')},
        dataType: "json",
        success: function(data){
            var rulesid =[];
            var rulesInfo =[];
            for (var i = 0; i < data.data.ruleList.length; i++) {
                var ruleInfo =data.data.ruleList[i].ruleMemo;
                var ruleId=data.data.ruleList[i].ruleId;
                rulesid.push(ruleId);
                rulesInfo.push(ruleInfo);
            }
            var selectedVal = $(v).children('option:selected').val();

            for(var i=0;i<rulesid.length;i++){
              if(selectedVal==rulesid[i]){
                  $(v).parent('td').next('td').text(rulesInfo[i]);
              }
            }
        },
        error: function(data){
            console.info(data.msg);
        }
    });
}