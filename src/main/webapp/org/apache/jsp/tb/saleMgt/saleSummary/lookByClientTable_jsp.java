/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-02-22 03:10:04 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.tb.saleMgt.saleSummary;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class lookByClientTable_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<table class=\"table lookByClientTable contractTable\">\n");
      out.write("\t<tr>\n");
      out.write("\t\t<th>客户</th>\n");
      out.write("\t\t<th> \n");
      out.write("\t\t\t<div class=\"thBox fn-clear\">\n");
      out.write("\t\t\t\t<span class=\"fn-left\">销售总金额</span>\n");
      out.write("\t\t\t\t<div class=\"arrowPart fn-left mgl5\">\n");
      out.write("\t\t\t\t\t<i class=\"fa fa-angle-up arrowActive\"></i>\n");
      out.write("\t\t\t\t\t<i class=\"fa fa-angle-down\"></i>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t</th>\n");
      out.write("\t\t<th>\n");
      out.write("\t\t\t<div class=\"thBox fn-clear\">\n");
      out.write("\t\t\t\t<span class=\"fn-left\">合同数</span>\n");
      out.write("\t\t\t\t<div class=\"arrowPart fn-left mgl5\">\n");
      out.write("\t\t\t\t\t<i class=\"fa fa-angle-up arrowActive\"></i>\n");
      out.write("\t\t\t\t\t<i class=\"fa fa-angle-down\"></i>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t</th>\n");
      out.write("\t\t<th>\n");
      out.write("\t\t\t<div class=\"thBox fn-clear\">\n");
      out.write("\t\t\t\t<span class=\"fn-left\">未到期合同数</span>\n");
      out.write("\t\t\t\t<div class=\"arrowPart fn-left mgl5\">\n");
      out.write("\t\t\t\t\t<i class=\"fa fa-angle-up arrowActive\"></i>\n");
      out.write("\t\t\t\t\t<i class=\"fa fa-angle-down\"></i>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t</th>\n");
      out.write("\t\t<th>\n");
      out.write("\t\t\t<div class=\"thBox fn-clear\">\n");
      out.write("\t\t\t\t<span class=\"fn-left\">待收金额</span>\n");
      out.write("\t\t\t\t<div class=\"arrowPart fn-left mgl5\">\n");
      out.write("\t\t\t\t\t<i class=\"fa fa-angle-up arrowActive\"></i>\n");
      out.write("\t\t\t\t\t<i class=\"fa fa-angle-down\"></i>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t</th>\n");
      out.write("\t\t<th>状态</th>\n");
      out.write("\t</tr>\n");
      out.write("\t<tr class=\"inServer\" ng-repeat=\"groupList in groupLists\">\n");
      out.write("\t\t<td class=\"deepColor\">{{groupList.shopName}}</td>\n");
      out.write("\t\t<td class=\"deepColor\">￥{{groupList.allTotalprice}}</td>\n");
      out.write("\t\t<td>{{groupList.contractCount}}</td>\n");
      out.write("\t\t<td>{{groupList.notDueCount}}</td>\n");
      out.write("\t\t<td class=\"deepColor\">￥{{groupList.notPaidAmount}}</td>\n");
      out.write("\t\t<td>{{groupList.status}}</td>\n");
      out.write("\t</tr>\n");
      out.write("\t<!--<tr class=\"inServer\">\n");
      out.write("\t\t<td class=\"deepColor\">南京小小服饰有限公司</td>\n");
      out.write("\t\t<td class=\"deepColor\">￥70,000</td>\n");
      out.write("\t\t<td>10</td>\n");
      out.write("\t\t<td>10</td>\n");
      out.write("\t\t<td>￥30,000</td>\n");
      out.write("\t\t<td>服务中</td>\n");
      out.write("\t</tr>\n");
      out.write("\t<tr class=\"inServer\">\n");
      out.write("\t\t<td class=\"deepColor\">南京小小服饰有限公司</td>\n");
      out.write("\t\t<td class=\"deepColor\">￥70,000</td>\n");
      out.write("\t\t<td>10</td>\n");
      out.write("\t\t<td>10</td>\n");
      out.write("\t\t<td>￥30,000</td>\n");
      out.write("\t\t<td>服务中</td>\n");
      out.write("\t</tr>\n");
      out.write("\t<tr class=\"inServer\">\n");
      out.write("\t\t<td class=\"deepColor\">南京小小服饰有限公司</td>\n");
      out.write("\t\t<td class=\"deepColor\">￥70,000</td>\n");
      out.write("\t\t<td>10</td>\n");
      out.write("\t\t<td>10</td>\n");
      out.write("\t\t<td>￥30,000</td>\n");
      out.write("\t\t<td>服务中</td>\n");
      out.write("\t</tr>\n");
      out.write("\t<tr class=\"inServer\">\n");
      out.write("\t\t<td class=\"deepColor\">南京小小服饰有限公司</td>\n");
      out.write("\t\t<td class=\"deepColor\">￥70,000</td>\n");
      out.write("\t\t<td>10</td>\n");
      out.write("\t\t<td>10</td>\n");
      out.write("\t\t<td>￥30,000</td>\n");
      out.write("\t\t<td>服务中</td>\n");
      out.write("\t</tr>\n");
      out.write("\t<tr class=\"notinServer\">\n");
      out.write("\t\t<td>南京小小服饰有限公司</td>\n");
      out.write("\t\t<td class=\"deepColor\">￥70,000</td>\n");
      out.write("\t\t<td>10</td>\n");
      out.write("\t\t<td>10</td>\n");
      out.write("\t\t<td>￥30,000</td>\n");
      out.write("\t\t<td>服务中</td>\n");
      out.write("\t</tr>\n");
      out.write("\t<tr class=\"notinServer\">\n");
      out.write("\t\t<td>南京小小服饰有限公司</td>\n");
      out.write("\t\t<td class=\"deepColor\">￥70,000</td>\n");
      out.write("\t\t<td>10</td>\n");
      out.write("\t\t<td>10</td>\n");
      out.write("\t\t<td>￥30,000</td>\n");
      out.write("\t\t<td>服务中</td>\n");
      out.write("\t</tr>\n");
      out.write("\t<tr class=\"notinServer\">\n");
      out.write("\t\t<td>南京小小服饰有限公司</td>\n");
      out.write("\t\t<td class=\"deepColor\">￥70,000</td>\n");
      out.write("\t\t<td>10</td>\n");
      out.write("\t\t<td>10</td>\n");
      out.write("\t\t<td>￥30,000</td>\n");
      out.write("\t\t<td>服务中</td>\n");
      out.write("\t</tr>\n");
      out.write("\t<tr class=\"notinServer\">\n");
      out.write("\t\t<td>南京小小服饰有限公司</td>\n");
      out.write("\t\t<td class=\"deepColor\">￥70,000</td>\n");
      out.write("\t\t<td>10</td>\n");
      out.write("\t\t<td>10</td>\n");
      out.write("\t\t<td>￥30,000</td>\n");
      out.write("\t\t<td>服务中</td>\n");
      out.write("\t</tr>\n");
      out.write("\t<tr class=\"notinServer\">\n");
      out.write("\t\t<td>南京小小服饰有限公司</td>\n");
      out.write("\t\t<td class=\"deepColor\">￥70,000</td>\n");
      out.write("\t\t<td>10</td>\n");
      out.write("\t\t<td>10</td>\n");
      out.write("\t\t<td>￥30,000</td>\n");
      out.write("\t\t<td>服务中</td>\n");
      out.write("\t</tr>-->\n");
      out.write("</table>");
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
