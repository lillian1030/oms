/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2016-12-22 09:39:14 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.cas.register;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class register_005fhome_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<!--遮罩 start-->  \r\n");
      out.write("\r\n");
      out.write("<div class=\"contentNav\">\r\n");
      out.write("    <div class=\"content-section\">\r\n");
      out.write("    \t<div class=\"content content-register-success\" >\r\n");
      out.write("    \t  \t<div class=\"register-success\">\r\n");
      out.write("    \t\t<h3>恭喜您注册成功</h3>\r\n");
      out.write("    \t\t   <p>尊敬的用户：<b class=\"register-success-user\">{{showUserInfo.userName}}</b><b class=\"register-success-user\">[{{showUserInfo.trueName}}]</b>，您好！</p>\r\n");
      out.write("    \t\t   <p>您已经成功注册帐户，您可以选择加入商户或者注册新商户:</p>\r\n");
      out.write("    \t\t</div>\t\r\n");
      out.write("    \t<div class=\"content-register-box clearfix\" >\r\n");
      out.write("\t        <div class=\"content-left\">\r\n");
      out.write("\t        \t<div class=\"user-logo\">\r\n");
      out.write("\t        \t\t<img src=\"../static/base/images/register-icon-01h.png\">\r\n");
      out.write("\t        \t</div>\r\n");
      out.write("\t        \t<div class=\"text-bz\">\r\n");
      out.write("\t        \t\t<span>如果您已经有隶属的商户，</span><br />\r\n");
      out.write("\t        \t\t<span>请输入商户提供的8位商户授权码：</span>\r\n");
      out.write("\t        \t</div>\r\n");
      out.write("\t        \t<div class=\"showorgname\">\r\n");
      out.write("\t        \t\t<input type=\"text\" ng-model=\"brandLicense\" ng-mouseleave=\"showBrandName()\"  />\r\n");
      out.write("\t        \t\t<p>{{name.name}}</p>\r\n");
      out.write("\t        \t</div>\r\n");
      out.write("\t        \t<div class=\"\">\r\n");
      out.write("\t        \t\t<a href=\"#/join_commercial\">\r\n");
      out.write("\t        \t\t<a class=\"join-commercial\" ng-click=\"joinCompany()\">加入商户</a>\r\n");
      out.write("\t        \t\t</a>\r\n");
      out.write("\t        \t</div>\r\n");
      out.write("\t        \t\r\n");
      out.write("\t        </div>\r\n");
      out.write("\t         <div class=\"content-right\">\r\n");
      out.write("\t        \t<div class=\"user-logo\">\r\n");
      out.write("\t        \t\t<img src=\"http://static.qineasy.com/base/images/register-icon-02h.png\">\r\n");
      out.write("\t        \t</div>\r\n");
      out.write("\t        \t<div class=\"text-bz  \">\r\n");
      out.write("\t        \t\t<span>如果您还没有创建过商户，</span><br />\r\n");
      out.write("\t        \t\t<span>请您重新注册新商户</span>\r\n");
      out.write("\t        \t</div>\r\n");
      out.write("\t        \t<div class=\"regrister-new\">\r\n");
      out.write("\t        \t\t\t<a class=\"join-commercial join-commercial-right\"  ng-click=\"registerNewShop()\">注册新商户</a>\r\n");
      out.write("\t        \t</div>\r\n");
      out.write("\r\n");
      out.write("\t        \t\r\n");
      out.write("\t        </div>\r\n");
      out.write("\t    </div>\r\n");
      out.write("\t    </div>\r\n");
      out.write("\r\n");
      out.write("\t        <!--<div class=\"fn-clear\"></div>-->\r\n");
      out.write("        </div>\r\n");
      out.write("   </div>\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<!---- JS ---->\r\n");
      out.write("<!---- Content end ---->\r\n");
      out.write("<!--弹框-->\r\n");
      out.write("\t<div class=\"maskBg\" ng-show=\"show\"></div>\r\n");
      out.write("\t<div class=\"sure-to-join\" ng-show=\"show\">\r\n");
      out.write("\t\t<div class=\"top clearfix\">\r\n");
      out.write("\t\t\t<div class=\"warning\">提示</div>\r\n");
      out.write("\t\t\t<div class=\"close-log\" ng-click=\"close()\">\r\n");
      out.write("\t\t\t\t<img src=\"http://static.qineasy.com/base/images/closelogo.png\"/>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<div class=\"middle clearfix\">\r\n");
      out.write("\t\t\t<img src=\"http://static.qineasy.com/base/images/light.png\" alt=\"\" />\r\n");
      out.write("\t\t\t<p>授权商户为“{{organization}}”，您确认加入吗？</p>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<div class=\"middle-line\"></div>\r\n");
      out.write("\t\t<div class=\"join-bottom clearfix\">\r\n");
      out.write("\t\t\t<a href=\"javascript:;\" class=\"accept\" ng-click=\"sureToJoin()\">加入</a>\r\n");
      out.write("\t\t\t<a href=\"javascript:;\" class=\"reject\" ng-click=\"close()\">拒绝</a>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</div>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
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
