<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--遮罩 start-->

<!--遮罩 end-->

<!--------------- Content start ----------------->
<!--<div class="content-wrapper">-->
<!--<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">
		尺码管理
		</h2>
	</div>-->
<!-- Main content -->

<div class="ManColTable ManColTable2 col-lg-12 pl0 mgt20">
	<div id="group" class="table-responsive PrivTable manasizeTable">
		<form id="sizeForm">
			<table class="table table-hover table-striped table-bordered" ng-repeat="n in grouplist">
				<tr>
					<th scope="col" colspan="4" class="am-ft-left">
						<p class="fn-left mgl10" style="line-height: 34px;color:#999999;font-size: 14px;">尺码组{{$index+1}}# ：</p>
						<input class="groupTitlName" type="text" value="{{n.groupName}}" ng-model="n.groupName" name="groupName" id="groupName" disabled style="color:#333333" />
						<a href="javascript:;" class="del-group fn-right" ng-click="deletSizeGroup(n.groupId)">删除组</a>
						<div class="sizeTitl">
							<a href="javascript:;" class="sizeTitl-edit" style="color:#00afd4" onclick="editTitl(this)">编辑</a>
							<a href="javascript:;" class="sizeTitl-save fn-hide" ng-click="editGroupname(n.groupId,n.groupName)">保存</a>
							<a href="javascript:;" class="sizeTitl-cancel fn-hide" onclick="cancelTitl(this)">取消</a>
						</div>

					</th>
				</tr>

				<tr>
					<td><span class="am-ft-red">*</span>尺码名称</td>
					<td><span class="am-ft-red">*</span>编码（用于SKU编码）</td>
					<td>排序</td>
					<td colspan="2">操作</td>
				</tr>
				<tr ng-if="n.sizes[0].sizeId!=''&&n.sizes[0].sizeId!=null" ng-repeat="v in n.sizes" sizeindex="{{v.sizeIndex}}" sizeid="{{v.sizeId}}" class="colortd">
					<td><input type="text" class="sizename" ng-model="v.sizeName" name="sizeName" disabled /></td>
					<td><input type="text" class="sizenum" value="v.sizeNum" ng-model="v.sizeNum" name="sizeNum" disabled /></td>
					<td><input type="text" class="sizeindex" value="v.sizeIndex" ng-model="v.sizeIndex" name="sizeIndex" disabled /></td>
					<td class="td_edit">
						<a href="javascript:;" type="button" name="alter" class="editTarget" am-bg="blue" onclick="editBtn(this)">编辑</a>
						<a href="javascript:;" type="button" class="grey mgl15" am-bg="white" ng-click="deletSize(v.sizeId)">删除</a>
					</td>
					<td class="td_editing" style="display:none">
						<a href="javascript:;" name="alter" class="editTarget" am-bg="blue" ng-click="editSize(v.sizeId,v.sizeName,v.sizeNum,v.sizeIndex)">保存</a>
						<a href="javascript:;" type="button" class="grey mgl15" am-bg="white" onclick="cancel_btn(this)">取消</a>
					</td>
				</tr>
				<tr class="{{n.groupId}}">
					<td colspan="4">
						<a href="javascript:;" class="fn-left addLineColor" ng-click="addNewSize(n.groupId)">+&nbsp;增加尺码</a>
					</td>
				</tr>
			</table>
		</form>
	</div>
	<button type="button" class="btn btn-info addSizeGroup" ng-click="addNewGroup()">增加尺码组</button>

	<div class="fn-clear"></div>
</div>

<!--</div>-->

<!--弹窗 start-->
<div class="am-dialog EditDialog fn-hide">
	<form id="myform">
		<div class="am-dialog-wrap">
			<div class="am-dialog-header">
				<h3 class="am-ft-center">确定删除？</h3>
			</div>
			<div class="dialogBtn am-flexbox">
				<button type="button" class="am-flexbox-item btn am-button SavEdit" id="deletGroup" am-bg="blue">确认</button>
				<button type="button" class="am-flexbox-item btn am-button" onclick="Dialhide()" am-bg="white">取消</button>
				<div class="fn-clear"></div>
			</div>
		</div>
	</form>
</div>
<!--弹窗 end-->

<!-- 工具提示 start-->
<div class="alert alert-danger alert-dismissible fade in fn-hide" role="alert">
	<button type="button" class="close">
        <span>×</span>
    </button>
	<h4>操作失败!</h4>
	<p>输入的内容不能为空</p>
</div>
<!-- 工具提示 end -->

<script>
	$(function() {
			var formArray = [];
			formArray.push('{"sizeForm":"/size/updateSize"}');
			initValidate(formArray, pos);

		})
		//弹窗居中
	$('.EditDialog').center();
	//关闭提示框
	$('.close').click(function() {
		$('.alert').hide();
		Dialhide();
	});
	//弹窗显示/隐藏
	function Dialshow() {
		$('.EditDialog,.maskBg').dialogShow();
	};

	function Dialhide() {
		$('.EditDialog,.maskBg').dialogHide();
	};

	function deleteNewGroup(e) {
		$(e).parents("#sizeGroupForm").remove();
	}

	//编辑按钮
	function editBtn(a) {
		var inp = $(a).parents('tr').siblings().last().prev();
		var inp1 = inp.find('td:first-child').find('input').val();
		var inp2 = inp.find('td:nth-child(2)').find('input').val();
		var inp3 = inp.find('td:nth-child(3)').find('input').val();
		if(inp1 == '' && inp2 == '' && inp3 == '') {
			alertmsg(validateForm("sizeForm", "msg"), 'error')
		} else {
			$('.td_edit').show().next().hide().parent().find('input,select').prop('disabled', true);
			$(a).parent().hide().next().show().parent().find('input,select').prop('disabled', false);
		};
	};
	//取消按钮
	function cancel_btn(a) {
		$(a).parent().hide().prev().show().parent().find('input,select').prop('disabled', true);
	};
	//删除
	function delete_btn(a) {
		$(a).parents('tr').remove();
	};
	//弹窗显示/隐藏
	function Dialshow() {
		$('.EditDialog,.maskBg').dialogShow();
	};

	function Dialhide() {
		$('.EditDialog,.maskBg').dialogHide();
	};
	//表头/尾名称编辑、保存、取消
	function editTitl(e) {
		$(e).hide();
		$(e).parent('.sizeTitl').parent().find('input[type=text]').prop('disabled', false);
		$(e).siblings('a[class^=sizeTitl]').show();
	};

	function cancelTitl(e) {
		$(e).parent('.sizeTitl').parent().find('input[type=text]').prop('disabled', true);
		$(e).hide();
		$(e).siblings('a[class^=sizeTitl]').hide();
		$(e).siblings('.sizeTitl-edit').show();
	};

	function editTitlBotm(e) {
		$(e).hide();
		$(e).parent('.sizeTitl').prev().find('select').prop('disabled', false);
		$(e).siblings('a[class^=sizeTitl]').show();
	};
</script>