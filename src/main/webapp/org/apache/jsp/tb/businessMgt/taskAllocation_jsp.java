/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-04-12 06:28:11 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.tb.businessMgt;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class taskAllocation_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\n");
      out.write("<!--------------- Content start ----------------->\n");
      out.write("<div class=\"contractCreate-wraper contractCreate-wraperaa fn-clear contractCreate-wraper-info\">\n");
      out.write("\t<div class=\"col-md-11 fn-clear addContractBox\" >\n");
      out.write("\t\t<div class=\"fn-clear col-md-12 contractBaseInfoBox\">\n");
      out.write("\t\t\t<div class=\"contractInfo col-md-12\">\n");
      out.write("\t\t\t\t<div class=\"infoLine infoLinea fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"fn-left infoTitile\">\n");
      out.write("\t\t\t\t\t\t合同编号：\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<span class=\"color333 fn-left\">{{contractTaskInfo.contractNum}}</span>\n");
      out.write("\t\t\t\t\t<div class=\"fn-left infoTitile\">\n");
      out.write("\t\t\t\t\t\t合同类型：\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<span class=\"color333\" ng-if=\"contractTaskInfo.contractType=='0'\">新签</span>\n");
      out.write("\t\t\t\t\t<span class=\"color333\" ng-if=\"contractTaskInfo.contractType=='1'\">续签</span>\n");
      out.write("\t\t\t\t\t<span class=\"color333 mgl25\" ng-if=\"contractTaskInfo.contractType==1\">（原合同：{{contractPayInfo.sourceContractNum}}）</span>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"infoLine infoLineb fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"fn-left infoTitile\">\n");
      out.write("\t\t\t\t\t\t商戶名称：\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<span class=\"color333\">{{contractTaskInfo.orgInfo.shopName}}</span>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"infoLine infoLinee fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"fn-left infoTitile\">\n");
      out.write("\t\t\t\t\t\t任务分配：\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\"fn-left\" style=\"width: 80%;\">\n");
      out.write("\t\t\t\t\t\t<div class=\"task-Info\" ng-repeat=\"contractTask in contractTaskInfo.contractTaskList\">\n");
      out.write("\t\t\t\t\t\t\t<div class=\"infoLineBox fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"task-info-nav\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<span class=\"am-ft-black\" ng-if=\"contractTaskInfo.contractType=='0'&&contractTask.taskType=='0'\">新签分配－客服</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t<span class=\"am-ft-black\" ng-if=\"contractTaskInfo.contractType=='0'&&contractTask.taskType=='1'\">新签分配－美工</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t<span class=\"am-ft-black\" ng-if=\"contractTaskInfo.contractType=='0'&&contractTask.taskType=='2'\">新签分配－运营</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t<span class=\"am-ft-black\" ng-if=\"contractTaskInfo.contractType=='0'&&contractTask.taskType=='3'\">新签分配－培训</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t<span class=\"am-ft-black\" ng-if=\"contractTaskInfo.contractType=='1'&&contractTask.taskType=='0'\">续签分配－客服</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t<span class=\"am-ft-black\" ng-if=\"contractTaskInfo.contractType=='1'&&contractTask.taskType=='1'\">续签分配－美工</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t<span class=\"am-ft-black\" ng-if=\"contractTaskInfo.contractType=='1'&&contractTask.taskType=='2'\">续签分配－运营</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t<span class=\"am-ft-black\" ng-if=\"contractTaskInfo.contractType=='1'&&contractTask.taskType=='3'\">续签分配－培训</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t<span class=\"am-ft-gray\" ng-if=\"contractTask.departNameTree!=''\">（服务部门：{{contractTask.departNameTree}}   {{contractTask.userName}}）</span>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"col-md-12 task-info-content\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"checkContractInfo col-md-11 fn-clear\" ng-repeat=\"contractTrace in contractTask.contractTraceList\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<div class=\"hasContractInfo fn-clear\" ng-if=\"contractTrace.taskStatus=='1'\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<div class=\"hasContractNo\">{{$index+1}}</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<div class=\"infoLineInfo\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"fn-left\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"am-ft-14 am-ft-black\">分配区域</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfo fn-left fn-clear passContractInfo-task\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBox passContractInfoBoxR fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color999\">计划上线时间：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333\">{{contractTrace.planDate}}</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color999\">服务区域：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333\">{{contractTrace.departArea}}</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color999\">服务部门：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333\">{{contractTrace.dealUserDepart}}</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color999\">备注：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333 memoa\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{contractTrace.traceMemo}}</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 task-info-footer  fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"\">{{contractTrace.createUserName}}</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mgl15 mgr15\">{{contractTrace.createUserDepart}}</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"\">{{contractTrace.createTime}}</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<div class=\"hasContractInfo fn-clear\" ng-if=\"contractTrace.taskStatus=='2'||contractTrace.taskStatus=='3'\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<div class=\"hasContractNo\">{{$index+1}}</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<div class=\"infoLineInfo\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"fn-left\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"am-ft-14 am-ft-black\">部门分配</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfo fn-left fn-clear passContractInfo-task\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBox passContractInfoBoxR fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color999\">执行人：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333\">{{contractTrace.dealUserDepart}} {{contractTrace.dealUserName}}</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color999\">服务区域：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333\">{{contractTrace.departArea}}</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color999\">备注：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333 memoa\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{contractTrace.traceMemo}}</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 task-info-footer  fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"\">{{contractTrace.createUserName}}</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mgl15 mgr15\">{{contractTrace.createUserDepart}}</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"\">{{contractTrace.createTime}}</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<div class=\"hasContractInfo fn-clear\" ng-if=\"(contractTrace.taskStatus=='2'||contractTrace.taskStatus=='3')&&contractTrace.dealResult!=''\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<div class=\"hasContractNo\">{{$index+2}}</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<div class=\"infoLineInfo\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"fn-left\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"am-ft-14 am-ft-black\">执行人接收</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfo fn-left fn-clear passContractInfo-task\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBox passContractInfoBoxR fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color999\">接受人意见：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333\" ng-if=\"contractTrace.dealResult=='0'\">同意</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333\" ng-if=\"contractTrace.dealResult=='1'\">不同意</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color999\">实际上线时间：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333\">{{contractTrace.finishTime}}</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 task-info-footer  fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"\">{{contractTrace.dealUserName}}</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mgl15 mgr15\">{{contractTrace.dealUserDepart}} </span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"\">{{contractTrace.dealTime}}</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\"w800 fn-left mgl0 line-cut\" ></div>\t\n");
      out.write("\t\t\t\t\t\t<!--区域分配-->\n");
      out.write("\t<div class=\"fn-clear addContractBox border-blue w800 fn-left mgl0\" ng-if=\"currentTask.taskStatus=='1'&&step=='1'\">\n");
      out.write("\t\t<div class=\"fn-clear col-md-12 contractBaseInfoBox\">\n");
      out.write("\t\t\t<div class=\"contractBaseInfo\">分配区域</div>\n");
      out.write("\t\t</div>\n");
      out.write("\t\t<div class=\"contractInfo col-md-9 \">\n");
      out.write("\t\t\t<div class=\"infoLine infoLinef fn-clear\"></div>\n");
      out.write("\t\t\t<div class=\"infoLineBox mgb15 mgt0 fn-clear\">\n");
      out.write("\t\t\t\t<div class=\"infoTitile\">\n");
      out.write("\t\t\t\t\t计划上线时间：\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"checkContractInfo fn-left\">\n");
      out.write("\t\t\t\t\t<input type=\"text\" name=\"planDate\" id=\"planDate\" class=\"fn-left laydate-icon form-control effectdatatime\" placeholder=\"上线时间\" onclick=\"laydate()\" style=\"width: 120px;\"/>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div class=\"infoLineBox mgb15 mgt0 fn-clear\">\n");
      out.write("\t\t\t\t<div class=\"infoTitile\">\n");
      out.write("\t\t\t\t\t服务部门：\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div>\n");
      out.write("\t\t\t\t\t<select class=\"col-md-2 mgr10\" ng-options=\"n.areaName as n.areaName for n in departAreaList\" ng-model=\"dealContractTask.serviceArea\" ng-change=\"getDepart()\">\n");
      out.write("\t\t\t\t\t\t<option value=\"\"></option>\n");
      out.write("\t\t\t\t\t</select>\n");
      out.write("\t\t\t\t\t<select class=\"col-md-2 mgr10\" ng-show=\"parts1.length != 0\" ng-options=\"n.departId as n.departName for n in parts1\" ng-model=\"selectKe1\" ng-change=\"departSelect(selectKe1,1)\">\n");
      out.write("\t\t\t\t\t\t<option value=\"\">请选择</option>\n");
      out.write("                    </select>\n");
      out.write("                    <select class=\"col-md-2 mgr10\" ng-show=\"parts2.length != 0\" ng-options=\"x.departId as x.departName for x in parts2\" ng-model=\"selectKe2\" ng-change=\"departSelect(selectKe2,2)\">\n");
      out.write("\t\t\t\t\t\t<option value=\"\">请选择</option>\n");
      out.write("                    </select>\n");
      out.write("                    <select class=\"col-md-2 mgr10\" ng-show=\"parts3.length != 0\" ng-options=\"a.departId as a.departName for a in parts3\" ng-model=\"selectKe3\" ng-change=\"departSelect(selectKe3,3)\">\n");
      out.write("\t\t\t\t\t\t<option value=\"\">请选择</option>\n");
      out.write("                    </select>\n");
      out.write("                    <select class=\"col-md-2 mgr10\" ng-show=\"parts4.length != 0\" ng-options=\"a.departId as a.departName for a in parts4\" ng-model=\"selectKe4\" ng-change=\"departSelect(selectKe4,4)\">\n");
      out.write("\t\t\t\t\t\t<option value=\"\">请选择</option>\n");
      out.write("                    </select>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div class=\"infoLineBox mgb15 mgt0 fn-clear\">\n");
      out.write("\t\t\t\t<div class=\"infoTitile\">\n");
      out.write("\t\t\t\t\t<em class=\"am-ft-red mgr5\"></em>备注：\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<textarea  ng-model=\"dealContractTask.traceMemo\" rows=\"3\" cols=\"3\" style=\"width: 68%;\"></textarea>\n");
      out.write("\t\t\t\t<span> <i ng-if=\"dealContractTask.traceMemo.length==undefined\">0</i> <i\n");
      out.write("\t\t\t\t\tng-if=\"dealContractTask.traceMemo.length!=undefined\">{{dealContractTask.traceMemo.length}}</i> /200\n");
      out.write("\t\t\t\t</span>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div class=\"infoLineBox mgb15 mgt0 fn-clear\">\n");
      out.write("\t\t\t\t<div class=\"infoTitile\">\n");
      out.write("\t\t\t\t\t确认人：\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"checkContractInfo fn-left\">\n");
      out.write("\t\t\t\t\t<span class=\"am-ft-gray\">{{userInfo.trueName}}</span>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div class=\"infoLineBox mgb15 mgt0 fn-clear\">\n");
      out.write("\t\t\t\t<div class=\"infoTitile\" style=\"height: 1px;\">\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"fn-left\">\n");
      out.write("\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" ng-click=\"updateContractZJ()\">确认</button>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t</div>\n");
      out.write("\t</div>\n");
      out.write("\t<!--/区域分配-->\n");
      out.write("\t<!--主管分配-->\n");
      out.write("\t<div class=\"col-md-11 fn-clear addContractBox border-blue w800 fn-left mgl0\" ng-if=\"currentTask.taskStatus=='2'&&step=='2'\">\n");
      out.write("\t\t<div class=\"fn-clear col-md-12 contractBaseInfoBox\">\n");
      out.write("\t\t\t<div class=\"contractBaseInfo\">部门主管</div>\n");
      out.write("\t    </div>\n");
      out.write("\t    <div class=\"contractInfo col-md-9 mgt0\">\n");
      out.write("\t\t\t\t<div class=\"infoLineBox mgt15 mgb10 fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"infoTitile\">\n");
      out.write("\t\t\t\t\t\t执行人：\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\"checkContractInfo fn-left\">\n");
      out.write("\t\t\t\t\t\t<div class=\"infoLineInfo\" id=\"assigned\">\n");
      out.write("\t\t\t\t\t\t\t<select ng-model=\"dealContractTask.userId\" ng-options=\"u.userId as u.trueName for u in userList\">\n");
      out.write("\t\t\t\t\t\t\t\t<option value=\"\">请选择</option>\n");
      out.write("\t\t\t\t\t\t\t</select> \n");
      out.write("\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<!--<div class=\"infoLineBox mgt0 mgb10 fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"infoTitile\">\n");
      out.write("\t\t\t\t\t\t工作安排：\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\"checkContractInfo fn-left\">\n");
      out.write("\t\t\t\t\t\t<div class=\"checkContractInfoUpload\" ng-if=\"fileName!=undefined&&fileName!=''\">\n");
      out.write("\t\t\t\t\t\t\t<img src=\"../static/base/images/icon_file.png\"/>\n");
      out.write("\t\t\t\t\t\t\t\t<span class=\"mgl5\" id=\"fileName\" ng-if=\"fileName.length<8\">{{fileName}}</span>\n");
      out.write("\t\t\t\t\t\t\t\t<span class=\"mgl5\" id=\"fileName\" ng-if=\"fileName.length>=8\">{{fileName |limitTo:8}}...</span>\n");
      out.write("\t\t\t\t\t\t\t\t<img src=\"../static/base/images/icon_download1.png\"/>\n");
      out.write("\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t<div class=\"checkContractInfoFile\">\n");
      out.write("\t\t\t\t\t\t\t<input ngf-select=\"uploadWork($files)\" name=\"files\" type=\"file\" value=\"\" />\t\t\t\t\t\t\n");
      out.write("\t\t\t\t\t\t\t<button class=\"addFileBtn\">上传附件</button>\t\n");
      out.write("\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>-->\n");
      out.write("\t\t\t\t<div class=\"infoLineBox mgt0 mgb10 fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"infoTitile\">\n");
      out.write("\t\t\t\t\t\t备注：\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\"checkContractInfo fn-left\">\n");
      out.write("\t\t\t\t\t\t<textarea ng-model='dealContractTask.traceMemo' name=\"memo\" rows=\"3\" cols=\"3\" style=\"width: 400px;\"></textarea>\n");
      out.write("\t\t\t\t\t\t<span> <i ng-if=\"dealContractTask.traceMemo.length==undefined\">0</i> \n");
      out.write("\t\t\t\t\t\t\t<i ng-if=\"dealContractTask.traceMemo.length!=undefined\">{{dealContractTask.traceMemo.length}}</i> /200\n");
      out.write("\t\t\t\t\t\t</span>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"infoLineBox mgb15 mgt0 fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"infoTitile\">\n");
      out.write("\t\t\t\t\t\t确认人：\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\"checkContractInfo fn-left\">\n");
      out.write("\t\t\t\t\t\t<span class=\"am-ft-gray\">{{userInfo.trueName}}</span>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"infoLineBox mgb15 mgt0 fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"infoTitile\" style=\"height: 1px;\">\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\" fn-left\">\n");
      out.write("\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary \" ng-click=\"updateContractZG()\">确认</button>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t</div>\n");
      out.write("\t</div>\n");
      out.write("\t<!--/主管分配-->\n");
      out.write("\t<!--执行人接收-->\n");
      out.write("\t<div class=\"col-md-11 fn-clear addContractBox border-blue w800 fn-left mgl0\" ng-if=\"currentTask.taskStatus=='3'&&step=='3'\">\n");
      out.write("\t\t<div class=\"fn-clear col-md-12 contractBaseInfoBox\">\n");
      out.write("\t\t\t<div class=\"contractBaseInfo\">执行人接收</div>\n");
      out.write("\t    </div>\n");
      out.write("\t    <div class=\"contractInfo col-md-9 mgt0 \">\n");
      out.write("\t\t\t\t<div class=\"infoLineBox mgt15 mgb10 fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"infoTitile\">\n");
      out.write("\t\t\t\t\t\t接收人意见：\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\"checkContractInfo fn-left\">\n");
      out.write("\t\t\t\t\t\t<div class=\"infoLineInfo\">\n");
      out.write("\t\t\t\t\t\t\t<label class=\"fn-left mgr10 \">\n");
      out.write("\t\t\t\t\t\t\t\t<input name=\"managerResult\" type=\"radio\" value=\"0\" ng-model=\"dealContractTask.dealResult\"/>同意\n");
      out.write("\t\t\t\t\t\t\t</label>\n");
      out.write("\t\t\t\t\t\t\t<label>\n");
      out.write("\t\t\t\t\t\t\t\t<input name=\"managerResult\" type=\"radio\" value=\"1\" ng-model=\"dealContractTask.dealResult\"/>不同意\n");
      out.write("\t\t\t\t\t\t\t</label>\n");
      out.write("\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"infoLineBox mgt0 mgb10 fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"infoTitile\">\n");
      out.write("\t\t\t\t\t\t实际上线时间：\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\"checkContractInfo fn-left\">\n");
      out.write("\t\t\t\t\t\t<input type=\"text\" id=\"finishTime\" class=\"fn-left laydate-icon form-control effectdatatime\"\n");
      out.write("\t\t\t\t\t\t\tname='finishTime' placeholder=\"实际上线时间\" onclick=\"laydate()\" style=\"width: 120px;\"/>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"infoLineBox mgb15 mgt0 fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"infoTitile\">\n");
      out.write("\t\t\t\t\t\t确认人：\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\"checkContractInfo fn-left\">\n");
      out.write("\t\t\t\t\t\t<span class=\"am-ft-gray\">{{userInfo.trueName}}</span>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"infoLineBox mgb15 mgt0 fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"infoTitile\" style=\"height: 1px;\">\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\" fn-left\">\n");
      out.write("\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary \" ng-click=\"updateContractQR()\">确认</button>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t</div>\n");
      out.write("\t</div>\n");
      out.write("\t<!--/执行人接收-->\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t</div>\n");
      out.write("\t</div>\n");
      out.write("\t\n");
      out.write("\t\n");
      out.write("</div>");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
