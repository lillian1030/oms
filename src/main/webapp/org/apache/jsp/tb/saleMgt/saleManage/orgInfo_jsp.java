/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-03-02 09:27:20 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.tb.saleMgt.saleManage;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class orgInfo_jsp extends org.apache.jasper.runtime.HttpJspBase
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

      out.write("\r\n");
      out.write("<a href=\"javascript:;\" class=\"line-btn forwardTop-goBack ng-scope\" ng-click=\"gobackByRoute()\" >返回</a>\r\n");
      out.write("<div class=\"content-wrapper content-wrapper-itemshow content-wrapper-itemshow2 fn-clear\">\r\n");
      out.write("<div class=\"col-lg-11 col-lg-11 pl0 pr0 mgl20 mgb10\">\r\n");
      out.write("\t<div class=\"forwardTop-content fn-left\">\r\n");
      out.write("\t\t<div class=\"forwardTop-left\">\r\n");
      out.write("\t\t\t<img ng-src=\"{{pageInfo.shopLogo}}\" />\r\n");
      out.write("\t\t\t<!--<img src=\"http://static.qineasy.com/base/images/img_default_company.png\"/>-->\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<div class=\"forwardTop-right fn-clear\" style=\"width:80%\">\r\n");
      out.write("\t\t\t<div class=\"fn-left\">\r\n");
      out.write("\t\t\t\t<div class=\"forwardTop-righttop\">\r\n");
      out.write("\t\t\t\t\t<p href=\"javascript:;\" class=\"forwardTop-rightTitl\">{{pageInfo.shopName}}</p>\r\n");
      out.write("\t\t\t\t\t<div class=\"fn-clear\"></div>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t<p>\r\n");
      out.write("\t\t\t\t\t<span>联系电话：{{pageInfo.contacts}}&nbsp;&nbsp;{{pageInfo.shopTel}}</span>\r\n");
      out.write("\t\t\t\t</p>\r\n");
      out.write("\t\t\t\t<p>\r\n");
      out.write("\t\t\t\t\t<span class=\"fn-left\">详细地址：{{pageInfo.province}}  {{pageInfo.city}}  {{pageInfo.district}}{{pageInfo.shopAddr}}</span>\r\n");
      out.write("\t\t\t\t</p>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<div class=\"fn-right info-right\" style=\"margin-right: 0px;\">\r\n");
      out.write("\t\t\t\t<p>\r\n");
      out.write("\t\t\t\t\t<span class=\"am-ft-gray\">销售人员：{{pageInfo.businessUserName}} </span>\r\n");
      out.write("\t\t\t\t</p>\r\n");
      out.write("\t\t\t\t<p>\r\n");
      out.write("\t\t\t\t\t<span class=\"am-ft-gray\">添加时间：{{pageInfo.createTime}}</span>\r\n");
      out.write("\t\t\t\t</p>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</div>\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("\t<div class=\"contractSummmary fn-clear col-lg-11 pl0 pr0 mgl20 mgb10\">\r\n");
      out.write("\t\t<div class=\"fn-left contractCount\">\r\n");
      out.write("\t\t\t合同列表({{count}})\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<div class=\"fn-right fn-clear\">\r\n");
      out.write("\t\t\t<p class=\"fn-left  mgr5\">\r\n");
      out.write("\t\t\t\t<span>总金额：</span>\r\n");
      out.write("\t\t\t\t<span class=\"moneyAmount\"> {{contractAmount}}元</span>\r\n");
      out.write("\t\t\t</p>\r\n");
      out.write("\t\t\t<a href=\"javascript:;\" class=\"btn fn-right btn-primary\" ng-click=\"goRoute('orgInfo','contractAdd',{},'1')\">添加合同</a>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</div>\r\n");
      out.write("\r\n");
      out.write("\t<div class=\"col-lg-11 pl0 pr0 mgl20\">\r\n");
      out.write("\t\t<table class=\"table contractTable\">\r\n");
      out.write("\t\t\t<tr>\r\n");
      out.write("\t\t\t\t<th>类型</th>\r\n");
      out.write("\t\t\t\t<th>合同编号</th>\r\n");
      out.write("\t\t\t\t<th>商户名称</th>\r\n");
      out.write("\t\t\t\t<th>服务区域</th>\r\n");
      out.write("\t\t\t\t<th>服务类型</th>\r\n");
      out.write("\t\t\t\t<th>产品类型</th>\r\n");
      out.write("\t\t\t\t<th>合同金额</th>\r\n");
      out.write("\t\t\t\t<th>已收金额</th>\r\n");
      out.write("\t\t\t\t<th>合同期限</th>\r\n");
      out.write("\t\t\t\t<th>签单人</th>\r\n");
      out.write("\t\t\t\t<th>服务状态</th>\r\n");
      out.write("\t\t\t\t<th>处理状态</th>\r\n");
      out.write("\t\t\t</tr>\r\n");
      out.write("\t\t\t<tr class=\"inServer\" ng-repeat=\"contract in contractList track by $index\">\r\n");
      out.write("\t\t\t\t<td ng-if=\"contract.contractType=='0'\">新</td>\r\n");
      out.write("\t\t\t\t<td ng-if=\"contract.contractType=='1'\">续</td>\r\n");
      out.write("\t\t\t\t<td>{{contract.contractNum}}</td>\r\n");
      out.write("\t\t\t\t<td><a href=\"javascript:;\" ng-click=\"contractInfo(contract)\">{{contract.shopName}}</a></td>\r\n");
      out.write("\t\t\t\t<td>{{contract.serviceArea}}</td>\r\n");
      out.write("\t\t\t\t<td>{{contract.serviceType}}</td>\t\t\r\n");
      out.write("\t\t\t\t<td>{{contract.productType}}</td>\r\n");
      out.write("\t\t\t\t<td>{{contract.totalprice}}</td>\r\n");
      out.write("\t\t\t\t<td>{{contract.payAmount}}</td>\r\n");
      out.write("\t\t\t\t<td>{{contract.begindate}}至{{contract.enddate}}</td>\r\n");
      out.write("\t\t\t\t<td>{{contract.signName}}</td>\r\n");
      out.write("\t\t\t\t<td class=\"status2\" ng-if='contract.contractStatus==\"0\"'>待审核</td>\r\n");
      out.write("\t\t\t\t<td class=\"status1\" ng-if='contract.contractStatus==\"1\"'>待分配</td>\r\n");
      out.write("\t\t\t\t<td class=\"status1\" ng-if='contract.contractStatus==\"2\"'>待确认</td>\r\n");
      out.write("\t\t\t\t<td class=\"status1\" ng-if='contract.contractStatus==\"3\"'>服务中</td>\r\n");
      out.write("\t\t\t\t<td class=\"status3\" ng-if='contract.contractStatus==\"4\"'>已完成</td>\r\n");
      out.write("\t\t\t\t<td class=\"status3\" ng-if='contract.contractStatus==\"5\"'>暂停</td>\r\n");
      out.write("\t\t\t\t<td class=\"status3\" ng-if='contract.contractStatus==\"6\"'>已终止</td>\r\n");
      out.write("\t\t\t\t<td class=\"status3\" ng-if='contract.contractStatus==\"7\"'>服务暂停</td>\r\n");
      out.write("\t\t\t\t<td class=\"status3\" ng-if='contract.contractStatus==\"8\"'>服务终止</td>\r\n");
      out.write("\t\t\t\t\r\n");
      out.write("\t\t\t\t<td class=\"status2\" ng-if='contract.contractStatus==\"0\"'>待处理</td>\r\n");
      out.write("\t\t\t\t<td class=\"status1\" ng-if='contract.contractStatus==\"1\"'>待处理</td>\r\n");
      out.write("\t\t\t\t<td class=\"status1\" ng-if='contract.contractStatus==\"2\"'>待处理</td>\r\n");
      out.write("\t\t\t\t<td class=\"status1\" ng-if='contract.contractStatus==\"3\"'>已处理</td>\r\n");
      out.write("\t\t\t\t<td class=\"status3\" ng-if='contract.contractStatus==\"4\"'>已完成</td>\r\n");
      out.write("\t\t\t\t<td class=\"status3\" ng-if='contract.contractStatus==\"5\"'>暂停</td>\r\n");
      out.write("\t\t\t\t<td class=\"status3\" ng-if='contract.contractStatus==\"6\"'>已终止</td>\r\n");
      out.write("\t\t\t\t<td class=\"status3\" ng-if='contract.contractStatus==\"7\"'>服务暂停</td>\r\n");
      out.write("\t\t\t\t<td class=\"status3\" ng-if='contract.contractStatus==\"8\"'>服务终止</td>\r\n");
      out.write("\t\t</tr>\t\r\n");
      out.write("\t\t</table>\r\n");
      out.write("\t</div>\r\n");
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