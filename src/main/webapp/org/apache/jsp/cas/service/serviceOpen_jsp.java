/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-06-05 03:18:11 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.cas.service;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class serviceOpen_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<!--Ztree-->\r\n");
      out.write("\r\n");
      out.write("<!--遮罩 start-->\r\n");
      out.write("\r\n");
      out.write("<!--遮罩 end-->\r\n");
      out.write("\r\n");
      out.write("<!--------------- Content start ----------------->\r\n");
      out.write("<div class=\"content-wrapper commercia-content commercia-open-content\">\r\n");
      out.write("    <div class=\"col-md-11 pageTitl\">\r\n");
      out.write("        <h2 class=\"am-ft-16 fn-left\">开通服务</h2>\r\n");
      out.write("    </div>\r\n");
      out.write("    <div class=\"fn-clear\"></div>\r\n");
      out.write("    <div class=\"line\"></div>\r\n");
      out.write("    <!-- search -->\r\n");
      out.write("    <div class=\"listSearch OderlistSearch commercia-note\">\r\n");
      out.write("        <div class=\"row\">\r\n");
      out.write("            <div class=\"col-md-8 mgt10\">\r\n");
      out.write("                <p class=\"col-sm-4 control-label\">现在的套餐：<span class=\"mgr5\">体验版</span><a href=\"javascript:;\" ng-click=\"warn()\">去升级</a></p>\r\n");
      out.write("            </div>\r\n");
      out.write("            <div class=\"col-md-4 am-ft-right\" style=\"padding-left: 46px;\">\r\n");
      out.write("                <span>当前余额：<i>0.00</i></span>\r\n");
      out.write("                <button type=\"button\" class=\"btn btn-danger mgl5 mgt-8\" ng-click=\"warn()\">充值</button>\r\n");
      out.write("            </div>\r\n");
      out.write("            <div class=\"fn-clear\"></div>\r\n");
      out.write("        </div>\r\n");
      out.write("    </div>\r\n");
      out.write("    <!-- /search -->\r\n");
      out.write("\r\n");
      out.write("    <!-- Main content -->\r\n");
      out.write("    <div class=\"ManColTable col-lg-12\">\r\n");
      out.write("        <form>\r\n");
      out.write("            <div class=\"table-responsive PrivTable\">\r\n");
      out.write("                <table class=\"table table-striped table-opServ\">\r\n");
      out.write("                    <tr>\r\n");
      out.write("                        <th scope=\"col\">服务名称</th>\r\n");
      out.write("                        <th scope=\"col\">服务描述</th>\r\n");
      out.write("                        <th scope=\"col\">用户数量</th>\r\n");
      out.write("                        <th scope=\"col\">使用时间</th>\r\n");
      out.write("                        <th scope=\"col\">费用</th>\r\n");
      out.write("                        <th scope=\"col\">开通服务</th>\r\n");
      out.write("                    </tr>\r\n");
      out.write("                    <tr ng-repeat=\"service in services\">\r\n");
      out.write("                        <td><label>{{service.name}}</label></td>\r\n");
      out.write("                        <td><label>{{service.serviceInfo}}</label></td>\r\n");
      out.write("                        <td><label>{{service.accountNum}}个</label></td>\r\n");
      out.write("                        <td><label>{{service.duration}}个月</label></td>\r\n");
      out.write("                        <td class=\"deline\"><i class=\"mgr5\" ng-hide=\"service.oriPrice==undefined||service.oriPrice==''||service.oriPrice=='0'\">{{service.oriPrice}}元</i><span ng-hide=\"service.price==undefined||service.price==''\">{{service.price}}元</span></td>\r\n");
      out.write("                        <td>\r\n");
      out.write("                        \t<button type=\"button\" class=\"btn btn-primary\" ng-show=\"service.openNum==0&&(service.price==undefined||service.price==0||service.price=='')\" ng-click=\"openServce(this)\">立即免费开通</button>\r\n");
      out.write("                        \t<button type=\"button\" class=\"btn btn-primary\" ng-hide=\"service.openNum>0||(service.price==undefined||service.price==0||service.price=='')\" ng-click=\"openServce(this)\">马上开通</button>\r\n");
      out.write("                        \t<button type=\"button\" class=\"btn alterBtn\" ng-show=\"service.openNum>0\" ng-click=\"openWarn()\">已开通</button>\r\n");
      out.write("                        </td>\r\n");
      out.write("                    </tr>\r\n");
      out.write("                </table>\r\n");
      out.write("\r\n");
      out.write("            </div>\r\n");
      out.write("\r\n");
      out.write("        </form>\r\n");
      out.write("        <div class=\"fn-clear\"></div>\r\n");
      out.write("    </div>\r\n");
      out.write("    <div class=\"fn-clear\"></div>\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("<!-- 尾部 -->\r\n");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "../../public/footstyle.jsp", out, false);
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