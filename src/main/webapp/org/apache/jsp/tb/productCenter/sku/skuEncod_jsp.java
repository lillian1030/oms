/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-02-24 06:02:16 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.tb.productCenter.sku;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class skuEncod_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<!--商户管理主页-->\n");
      out.write("<!--------------- Content start ----------------->\n");
      out.write("<div class=\"content-wrapper content-member-wrapper sku-content-wrapper content-forward-wrapper\">\n");
      out.write("\t<div class=\"col-lg-8\">\n");
      out.write("\t\t<div class=\"col-md-12 pl0 pr0\">\n");
      out.write("\t\t\t<h2 class=\"am-ft-16 fn-left\">SKU编码管理（共{{count}}个商户）</h2>\n");
      out.write("\t\t\t<div class=\"OderlistSearch skulistSearch mgt0 fn-right \" ng-if=\"count>0\">\n");
      out.write("\t\t\t\t<!--<div class=\"\">-->\n");
      out.write("\t\t\t\t\t<div class=\"fn-clear pl0 pr0\" style=\"width:350px\">\n");
      out.write("\t\t\t\t\t\t<a href=\"javascript:;\" style=\"line-height: 14px;\" class=\"fn-right search-button\" ng-click=\"search(shopName)\">查询</a>\n");
      out.write("\t\t\t\t\t\t<input type=\"text\" class=\"col-sm-8 agentSearch fn-right\" ng-model=\"shopName\" placeholder=\"请输入商户名称查询\" value=\"\" />\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\"fn-clear\"></div>\n");
      out.write("\t\t\t\t<!--</div>-->\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t</div>\n");
      out.write("\t\t<div class=\"fn-clear\"></div>\n");
      out.write("\t\t<!--缺省-->\n");
      out.write("\t\t<div class=\"col-md-11 pageTitl\" ng-if=\"count==0\">\n");
      out.write("\t\t\t<div class=\"col-md-12 dafaultWapper\">\n");
      out.write("\t\t\t\t<div class=\"loadingFormal\">\n");
      out.write("\t\t\t\t\t<img src=\"../static/base/images/icon_notice.png\">\n");
      out.write("\t\t\t\t\t<span style=\"font-size:16px;\">暂无商户</span>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t</div>\n");
      out.write("\n");
      out.write("\t\t<!-- 品牌列表 -->\n");
      out.write("\t\t<div class=\"mgl0 col-md-12\" style=\"padding: 0;\">\n");
      out.write("\t\t\t<div class=\"productCenterInfo\">\n");
      out.write("\t\t\t\t<table class=\"table table-hover table-striped productTable\" ng-if=\"count>0\">\n");
      out.write("\t\t\t\t\t<tr>\n");
      out.write("\t\t\t\t\t\t<th width=\"40%\" colspan=\"2\">商户</th>\n");
      out.write("\t\t\t\t\t\t<th width=\"40%\">管理</th>\n");
      out.write("\t\t\t\t\t</tr>\n");
      out.write("\t\t\t\t\t<!--未分配-->\n");
      out.write("\t\t\t\t\t<tr ng-repeat=\"orgManageList in orgManageLists\">\n");
      out.write("\t\t\t\t\t\t<td class=\"orgManageProImgC\">\n");
      out.write("\t\t\t\t\t\t\t<img ng-if=\"orgManageList.shopLogo!=''\" ng-src=\"{{orgManageList.shopLogo}}\" class=\"productImg\" title=\"\" alt=\"\" />\n");
      out.write("\t\t\t\t\t\t\t<img ng-if=\"orgManageList.shopLogo==''\" src=\"http://static.qineasy.com/base/images/img_default_company.png\" class=\"productImg\" title=\"\" alt=\"\" />\n");
      out.write("\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t<td class=\"comProducInfo\">\n");
      out.write("\t\t\t\t\t\t\t<p class=\"productTitl\">{{orgManageList.shopName}}</p>\n");
      out.write("\t\t\t\t\t\t\t<p>联系电话：{{orgManageList.shopTel}}</p>\n");
      out.write("\t\t\t\t\t\t\t<p>详细地址：{{orgManageList.province}}{{orgManageList.city}}{{orgManageList.district}}{{orgManageList.shopAddr}}</p>\n");
      out.write("\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t<td>\n");
      out.write("\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"mgr20\" ng-click=\"goRoute('skuSize',this.orgManageList)\">尺码管理</a>\n");
      out.write("\t\t\t\t\t\t\t<a href=\"javascript:;\" ng-click=\"goRoute('skuColor',this.orgManageList)\">颜色管理</a>\n");
      out.write("\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t</tr>\n");
      out.write("\t\t\t\t</table>\n");
      out.write("\t\t\t\t<!--分页 start-->\n");
      out.write("\t\t\t\t<div class=\"pagelist priv-pagelist\">\n");
      out.write("\t\t\t\t\t<div id=\"pagingMain\"></div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<!--分页 end-->\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div class=\"fn-clear\"></div>\n");
      out.write("\t\t</div>\n");
      out.write("\t\t<!-- /品牌列表 -->\n");
      out.write("\t</div>\n");
      out.write("\t<div class=\"fn-clear\"></div>\n");
      out.write("</div>\n");
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