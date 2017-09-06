<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<script type="text/javascript" src="../static/base/js/jquery.nouislider.js"></script>
<script type="text/javascript" src="../static/base/js/jqprint.0.3.js"></script>
<script type="text/javascript" src="../static/base/js/jquery-migrate-1.1.0.js"></script>

<!--------------- Content start ----------------->
<div class="content-wrapper binding-wrapper" ng-hide="numA!=0;">
        <section class="container-fluid">
            <!-- content start -->
            <div class="binding-titl" style="width:100%;" >
                <span class="bin-fir">绑定公众号</span>
                <span class="bin-sec" style="padding-left:0; text-align:center" >会员初始等级设定</span>
                <span class="bin-sec">功能配置</span>
            	<span class="bin-sec">完成配置</span>
            </div>

            <h4 class="bin-titl-note">如何绑定微信公众号?</h4>
            <p>每个商户只能添加一个公众号，点击微信公众号授权绑定按钮，进入添加公众号界面，登录微信号并授权绑定。</p>
            <p>要求被绑定的公众号必须为认证通过，且授权权限时务必授权“帐号服务权限”和“自定义菜单权限”。</p>
			
            <a href="javascript:;" class="bind-btn" ng-click="go_binding()"><i class="fa fa-wechat"></i>微信公众号授权绑定</a>
            
            <div class="binding-info">
                <h4 class="bin-titl-note">绑定微信公众号后，可以:</h4>
                <img class="bin-imgtitl" src="../static/base/images/binding-img01.png" />
                <div class="binding-info-step">
                    <img src="../static/base/images/binding-img02.png" />
                    <img src="../static/base/images/binding-img03.png" />
                    <img src="../static/base/images/binding-img04.png" />
                    <div class="fn-clear"></div>
                </div>
                <div class="fn-clear"></div>
            </div>
            <!-- content end -->
        </section>
    </div>
    
    <!---- 第三步内容开始---->
<div class="content-wrapper binding-wrapper" ng-hide="numA!=1">
    <section class="container-fluid">
        <!-- content start -->
        <div class="binding-titl" style="width:100%;" >
            <span class="bin-fir bin-fir-con">绑定公众号</span>
            <span class="bin-sec bin-sec-con" style="padding-left:0; text-align:center" >会员初始等级设定</span>
            <span class="bin-sec">功能配置</span>
            <span class="bin-sec">完成配置</span>
        </div>

        <h4 class="bin-titl-note">请为公众号会员设定初始等级</h4>
        <p class="col-md-11" style="padding-left:0;">如设定初始等级为金卡，则通过扫描公众号二维码成为会员的，初始等级即为金卡，享受金卡对应优惠。</p>
        
        <!------- 卡类型已经设置过_开始--------->
		<div style="width:100%; float:left; margin-top:10px;" ng-hide="numB!='a'">
         		<select id="gradeId" class="col-sm-12" style="width:200px; height:30px;" >
                		<option value="">请选择卡类型</option>
              			<option value="{{grade.gradeId}}" ng-repeat="grade in memberGradeList" >{{grade.gradeName}}</option>
         		</select>
        </div>
        <!------- 卡类型已经设置过_结束--------->
        <!------- 卡类型未设置过_开始--------->
        <div style="width:100%; float:left;margin-top:10px;" ng-hide="numB!='b'">
        		<div class="kuang">
                		<div class="hang" style="margin-bottom:20px;">
                				<span class="leftfont">卡类型：</span><span><input id="gradeName" style="width:144px;"/></span>
                                <div class="tishi" style="margin-left:8px;">如金卡、银卡等</div>
                        </div>
                        <!-- <div class="hang" style="margin-bottom:20px;">
                				<span class="leftfont">折扣力度：</span><span><input id="discount" style="width:144px;" value="1"/></span>
                                <div class="tishi" style="margin-left:8px;">请填写大于0且小于等于1之间数字，至多保留两位小数填1则为无折扣，原价购买</div>
                        </div> -->
                        <div class="hang">
               				<span class="leftfont">折扣力度：</span>
                            <span ng-repeat="brand in brandList" ng-if="$index < 3"><h6>{{brand.brandName}}</h6><input type="hidden" name="brandId" value="{{brand.brandId}}"/><input name="discount" value="1"/></span>
                        </div> 
                        <div class="hang not1" ng-if="brandList.length > 2"><!-----固定三个一行，超过换行，每行------->
               				<span ng-repeat="brand in brandList" ng-if="$index > 2 && $index < 6"><h6>{{brand.brandName}}</h6><input type="hidden" name="brandId" value="{{brand.brandId}}"/><input name="discount" value="1"/></span>
                        </div>
                        <div class="hang not1" ng-if="brandList.length > 5"><!-----固定三个一行，超过换行，每行------->
               				<span ng-repeat="brand in brandList" ng-if="$index > 5 && $index < 9"><h6>{{brand.brandName}}</h6><input type="hidden" name="brandId" value="{{brand.brandId}}"/><input name="discount" value="1"/></span>
                        </div>
                        <div class="hang not1" ng-if="brandList.length > 8"><!-----固定三个一行，超过换行，每行------->
               				<span ng-repeat="brand in brandList" ng-if="$index > 8 && $index < 12"><h6>{{brand.brandName}}</h6><input type="hidden" name="brandId" value="{{brand.brandId}}"/><input name="discount" value="1"/></span>
                        </div>
                        <div class="hang not1" ng-if="brandList.length > 11"><!-----固定三个一行，超过换行，每行------->
               				<span ng-repeat="brand in brandList" ng-if="$index > 11 && $index < 15"><h6>{{brand.brandName}}</h6><input type="hidden" name="brandId" value="{{brand.brandId}}"/><input name="discount" value="1"/></span>
                        </div>
                        <div class="tishi" style=" margin-left:80px; margin-top:10px; width:80%">请填写大于0且小于等于1之间数字，至多保留两位小数填1则为无折扣，原价购买</div>
                         
                </div>
       			
        </div>
        <!------- 卡类型未设置过_结束--------->
       
        <button class="config-btn btn btn-primary" ng-click="addMemberGrade()">确定</button>

        <!-- content end -->
    </section>
</div>
<!---- 第三步内容结束 ---->

<div class="content-wrapper binding-wrapper" ng-hide="numA!=2">
    <section class="container-fluid">
        <!-- content start -->
        <div class="binding-titl" style="width:100%;" >
            <span class="bin-fir bin-fir-con">绑定公众号</span>
            <span class="bin-sec" style="padding-left:0; text-align:center" >会员初始等级设定</span>
            <span class="bin-sec bin-sec-con">功能配置</span>
            <span class="bin-sec">完成配置</span>
        </div>

        <h4 class="bin-titl-note">成功绑定公众号！接下来请进行功能配置</h4>
        <p class="col-md-11 bin-config-note">会员中心为绑定后默认免费功能<span class="am-ft-orange fn-right">试用期为1个月，1个月后为128元/月</span></p>

        <div class="col-md-12 pl0">
            <div ng-if="menu.publicMenuId == 1" class="col-md-3 func-item it-readonly" ng-repeat="menu in allMenuList">
                <i class="fa fa-check-circle"></i>
                <div class="func-item-info">
                    <img ng-src="../static/base/images/{{menu.menuIcon}}" />
                    <div class="func-item-p">
                        <p class="func-titl">{{menu.publicMenuName}}</p>
                        <p>{{menu.remark}}</p>
                    </div>
                    <div class="fn-clear"></div>
                </div>
            </div>
            <div ng-if="menu.publicMenuId != 1" class="col-md-3 func-item " ng-class="changeClass($index)" ng-repeat="menu in allMenuList" ng-click="selected($index)">
            	<i class="fa fa-circle-thin" ng-class="iChangeClass($index)"></i>
                <div class="func-item-info">
                    <img ng-src="../static/base/images/{{menu.menuIcon}}" />
                    <div class="func-item-p">
                        <p class="func-titl">{{menu.publicMenuName}}</p>
                        <p>{{menu.remark}}</p>
                    </div>
                    <div class="fn-clear"></div>
                </div>
            </div>
           
        </div>

        <button class="config-btn btn btn-primary" ng-click="addMenu()">确定</button>

        <!-- content end -->
    </section>
</div>



<div style="display:none;">
<img id="printImg" ng-src="{{qrurl}}">
</div>

<!--<div class="content-wrapper binding-wrapper" ng-hide="numA!=3">-->
<div class="content-wrapper binding-wrapper" >
    <section class="container-fluid">
        <!-- content start -->
        <div class="binding-titl" style="width:100%;" >
            <span class="bin-fir bin-fir-con">绑定公众号</span>
            <span class="bin-sec" style="padding-left:0; text-align:center" >会员初始等级设定</span>
            <span class="bin-sec">功能配置</span>
            <span class="bin-sec bin-sec-con">完成配置</span>
        </div>

        <div class="col-md-10 config-code-wrapper">
            <div class="codebox">
                <p class="codesize-titl">尺寸:<span class="code-size"></span><i class="fa fa-cog" ng-click="changeCodeSize()"></i></p>
                <img class="codesize-img" ng-src="{{qrurl}}" />
                <!-- 二维码尺寸选择弹窗 -->
                <div class="codeSize-dialog fn-hide">
                    <p class="codeSize-titl">1000px<i class="fa fa-caret-down mgl5"></i></p>
                    <div class="slider-minmax1 noUi-target"></div>
                </div>
                <!-- /二维码尺寸选择弹窗 -->
            </div>
            <div class="codeprintbox">
                <h4 class="bin-titl-note">左侧为店铺二维码，可下载打印置于店铺醒目处</h4>
                <p>各导购对应二维码在易导购APP端，登录后即可在会员中心处看到</p>
                <a href="{{qrurl}}" download="dsa.jpg" target="_blank" class="codebtn codebtn-download"><i class="code-download"></i>下载</a>
                <a href="javascript:;" class="codebtn codebtn-print" ng-click="doPrint()"><i class="code-print"></i>打印</a>
                <div class="fn-clear"></div>
            </div>
        </div>

        <!--已有功能编辑-->
        <div class="col-md-12 bin-config-note bin-config-note-has">
            <p class="fn-left">
                <span class="fn-left note-has-titl">公众号已有功能：</span>
                <a href="javascript:;" class="edit-config fn-left line-btn" ng-click="toEditMenu()" ng-hide="editFlag!=0">编辑</a>
            </p>
            <p class="am-ft-right fn-right">
                <span>当前绑定公众号：********</span>
                <a href="javascript:;" class="fn-right re-selectfuncs-btn">重新绑定</a>
            </p>
        </div>
        <!-- 已有功能 -->
        <!--<div class="col-md-12 pl0 show-funcs" >-->
        <div class="col-md-12 pl0 show-funcs" ng-hide="editFlag!=0">
            <div ng-if="menu.flag==1" class="col-md-3 func-item" ng-repeat="menu in allMenuList">
                <div class="func-item-info">
                    <img ng-src="../static/base/images/{{menu.menuIcon}}" />
                    <div class="func-item-p">
                        <p class="func-titl">{{menu.publicMenuName}}</p>
                        <p>{{menu.remark}}</p>
                    </div>
                    <div class="fn-clear"></div>
                </div>
                <div ng-if="!$last && $index != size-1" style="width: 2px;padding: 40px 0;margin: 0 0 20px 20px;background: #e1e1e1;float: left;"></div><!--右侧线，一行中最后一个不显示-->
            </div>
        </div>
        <!-- 重新绑定 -->
        <div class="col-md-12 pl0 re-selectfuncs" ng-hide="editFlag==0">
            <div ng-if="menu.publicMenuId == 1" class="col-md-3 func-item it-readonly" ng-repeat="menu in allMenuList">
                <i class="fa fa-check-circle"></i>
                <div class="func-item-info">
                    <img ng-src="../static/base/images/{{menu.menuIcon}}" />
                    <div class="func-item-p">
                        <p class="func-titl">{{menu.publicMenuName}}</p>
                        <p>{{menu.remark}}</p>
                    </div>
                    <div class="fn-clear"></div>
                </div>
            </div>
            <div ng-if="menu.publicMenuId != 1" class="col-md-3 func-item " ng-class="changeClass($index)" ng-repeat="menu in allMenuList" ng-click="selected($index)">
            	<i class="fa" ng-class="iChangeClass($index)"></i>
                <div class="func-item-info">
                    <img ng-src="../static/base/images/{{menu.menuIcon}}" />
                    <div class="func-item-p">
                        <p class="func-titl">{{menu.publicMenuName}}</p>
                        <p>{{menu.remark}}</p>
                    </div>
                    <div class="fn-clear"></div>
                </div>
            </div>
            
            <div class="fn-clear"></div>
            <button class="config-btn btn btn-primary" style="background-color:#fff; color:#5bbeee;" ng-click="cancle()">取消</button>
            <button class="config-btn btn btn-primary" ng-click="editMenu()">确定</button>
        </div>

        <!-- content end -->
    </section>
</div>

</div>

<div class="am-dialog EditDialog fn-hide">
    <form id="myform">
        <div class="am-dialog-wrap">
            <div class="am-dialog-header">
                <h3 class="am-ft-center">{{confirmInfo}}</h3>
            </div>
            <div class="am-dialog-body mgt15">
                <p class="am-dialog-brief am-ft-red am-ft-center">注:{{remark}}</p>
            </div>
            <div class="dialogBtn am-flexbox">
                <button type="button" class="am-flexbox-item btn am-button am-button-cancel" am-bg="white" ng-click="cancleConfirm()">取消</button>
                <button type="button" class="am-flexbox-item btn am-button" am-bg="blue" ng-click="authorised()">确认</button>
                <div class="fn-clear"></div>
            </div>
        </div>
    </form>
</div>

<!-- 重新绑定 start
<div class="am-dialog EditDialog fn-hide">
    <form id="myform">
        <div class="am-dialog-wrap">
            <div class="am-dialog-header">
                <h3 class="am-ft-center">确定重新绑定？</h3>
            </div>
            <div class="am-dialog-body mgt15">
                <p class="am-dialog-brief am-ft-red am-ft-center">注:重新绑定后原微信绑定的会员不能带过来！</p>
            </div>
            <div class="dialogBtn am-flexbox">
                <button type="button" class="am-flexbox-item btn am-button am-button-cancel" am-bg="white">取消</button>
                <button type="button" class="am-flexbox-item btn am-button" am-bg="blue">确认</button>
                <div class="fn-clear"></div>
            </div>
        </div>
    </form>
</div>-->
<!-- 重新绑定 end-->
