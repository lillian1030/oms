/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-03-31 08:04:20 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.pos.freightMgt;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class freightMgt_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<!--运费模板管理页面-->\n");
      out.write("<div class=\"content-wrapper  fn-clear\">\n");
      out.write("\t<div class=\"wx-content pdl20 fn-clear\">\n");
      out.write("\t\t<div class=\"wx-head col-md-10 mgb10 pl0 pr0 fn-clear\">\n");
      out.write("\t\t\t<div class=\"wx-title fn-left\">运费模板管理</div>\n");
      out.write("\t\t\t<button class=\"selectOrderBtn fn-right\" ng-click=\"addFreightTemplate()\">添加运费模版</button>\n");
      out.write("\t\t</div>\n");
      out.write("\t\t<div class=\"freight-none col-md-10 mgb10 pl0 pr0 fn-clear\" ng-if=\"logiticTemplateLists.length == 0\">\n");
      out.write("\t\t\t<span style=\"color:#bbb\">\n");
      out.write("\t\t\t\t<i class=\"fa fa-volume-up\" aria-hidden=\"true\"></i>\n");
      out.write("\t\t\t\t您还没有添加运费模版\n");
      out.write("\t\t\t</span>\n");
      out.write("\t\t\t<a href=\"javascript:;\" ng-click=\"addFreightTemplate()\">立即添加</a>\n");
      out.write("\t\t</div>\n");
      out.write("\t\t<div class=\"freight-list col-md-10 mgb20 pl0 pr0 \" ng-if=\"logiticTemplateLists.length > 0\">\n");
      out.write("\t\t\t<div ng-repeat=\"logiticTemplateList in logiticTemplateLists track by $index\">\n");
      out.write("\t\t\t\t<div class=\"freight-list-top fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"freight-title fn-left\">\n");
      out.write("\t\t\t\t\t\t{{logiticTemplateList.logiticTemplateName}}\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\"freight-time fn-right\">\n");
      out.write("\t\t\t\t\t\t<span class=\"freight-time-a\">最后编辑时间：{{logiticTemplateList.createTime}}</span>\n");
      out.write("\t\t\t\t\t\t<a href=\"javascript:;\" class=\"am-ft-blue mgl10\" ng-click=\"editFreight(logiticTemplateList)\">编辑</a>\n");
      out.write("\t\t\t\t\t\t<a href=\"javascript:;\" class=\"am-ft-gray mgl10\" ng-click=\"deleteFreight(logiticTemplateList)\">删除</a>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<table class=\"table freight-table table-hover table-striped table-bordered\">\n");
      out.write("\t\t\t\t\t<tr>\n");
      out.write("\t\t\t\t\t\t<th class=\"col-md-4\">运送到</th>\n");
      out.write("\t\t\t\t\t\t<th class=\"col-md-2\">\n");
      out.write("\t\t\t\t\t\t\t<span ng-if=\"logiticTemplateList.calType == '1'\">首件(个)</span>\n");
      out.write("\t\t\t\t\t\t\t<span ng-if=\"logiticTemplateList.calType == '0'\">首重(KG)</span>\n");
      out.write("\t\t\t\t\t\t</th>\n");
      out.write("\t\t\t\t\t\t<th class=\"col-md-2\">运费(元)</th>\n");
      out.write("\t\t\t\t\t\t<th class=\"col-md-2\">\n");
      out.write("\t\t\t\t\t\t\t<span ng-if=\"logiticTemplateList.calType == '1'\">续件(个)</span>\n");
      out.write("\t\t\t\t\t\t\t<span ng-if=\"logiticTemplateList.calType =='0'\">续重(KG)</span>\n");
      out.write("\t\t\t\t\t\t</th>\n");
      out.write("\t\t\t\t\t\t<th class=\"col-md-2\">运费(元)</th>\n");
      out.write("\t\t\t\t\t</tr>\n");
      out.write("\t\t\t\t\t<tr ng-repeat=\"detail in logiticTemplateList.details track by $index\">\n");
      out.write("\t\t\t\t\t\t<td>\n");
      out.write("\t\t\t\t\t\t\t<span ng-if=\"$index==0\">\n");
      out.write("\t\t\t\t\t\t\t\t默认运费\n");
      out.write("\t\t\t\t\t\t\t</span>\n");
      out.write("\t\t\t\t\t\t\t<span ng-if=\"$index>0\">\n");
      out.write("\t\t\t\t\t\t\t\t<span ng-repeat=\"location in detail.locationArr track by $index\">\n");
      out.write("\t\t\t\t\t\t\t\t<span>{{location.locationName}}</span>\n");
      out.write("\t\t\t\t\t\t\t<span ng-if=\"$index+1 != detail.locationArr.length\">\n");
      out.write("\t\t\t\t\t\t\t\t\t、\n");
      out.write("\t\t\t\t\t\t\t\t</span>\n");
      out.write("\t\t\t\t\t\t\t</span>\n");
      out.write("\t\t\t\t\t\t\t</span>\n");
      out.write("\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t<td>\n");
      out.write("\t\t\t\t\t\t\t{{detail.baseAmount}}\n");
      out.write("\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t<td>\n");
      out.write("\t\t\t\t\t\t\t{{detail.basePrice}}\n");
      out.write("\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t<td>\n");
      out.write("\t\t\t\t\t\t\t{{detail.addAmount}}\n");
      out.write("\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t<td>\n");
      out.write("\t\t\t\t\t\t\t{{detail.addPrice}}\n");
      out.write("\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t</tr>\n");
      out.write("\t\t\t\t\t<tr>\n");
      out.write("\t\t\t\t\t\t<td colspan=\"5\">\n");
      out.write("\t\t\t\t\t\t\t<span>适用微店:</span>\n");
      out.write("\t\t\t\t\t\t\t<span ng-if=\"logiticTemplateList.orgList.length ==1\">无</span>\n");
      out.write("\t\t\t\t\t\t\t<span ng-if=\"logiticTemplateList.orgList.length>1\" ></span>\n");
      out.write("\t\t\t\t\t\t\t\t<span class=\"freight-user mgl10\" ng-if=\"org.orgId != orgId\" ng-repeat=\"org in logiticTemplateList.orgList\">\n");
      out.write("\t\t\t\t\t\t\t<!--<span class=\"freight-user mgl10\" ng-if=\"org.orgId != orgId\" ng-repeat=\"org in logiticTemplateList.orgList\">-->\n");
      out.write("\t\t\t\t\t\t\t<img ng-src=\"{{org.shopUrl}}\" alt=\"\" />\n");
      out.write("\t\t\t\t\t\t<span>{{org.orgName}}</span>\n");
      out.write("\t\t\t\t\t\t\t</span>\n");
      out.write("\t\t\t\t\t\t\t</span>\n");
      out.write("\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t</tr>\n");
      out.write("\t\t\t\t</table>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t</div>\n");
      out.write("\t</div>\n");
      out.write("</div>\n");
      out.write("\n");
      out.write("<!--运费模板管理页面-->");
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
