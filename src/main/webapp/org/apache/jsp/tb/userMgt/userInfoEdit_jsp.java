/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-02-24 01:16:26 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.tb.userMgt;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class userInfoEdit_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<!--------------- Content start ----------------->\r\n");
      out.write("    <div class=\"content-wrapper content-wrapper-commerciaInfo mgb15\">\r\n");
      out.write("        <div class=\"col-md-11 pageTitl\">\r\n");
      out.write("            <h2 class=\"am-ft-16 fn-left\">帐户资料</h2>\r\n");
      out.write("            <!--<a href=\"javascript:;\" class=\"btn btn-primary fn-right\">编辑</a>-->\r\n");
      out.write("        </div>\r\n");
      out.write("        <div class=\"fn-clear\"></div>\r\n");
      out.write("\r\n");
      out.write("        <div class=\"ManColTable col-lg-12\">\r\n");
      out.write("            <div class=\"commercia-info\">\r\n");
      out.write("                <!-- row1 -->\r\n");
      out.write("                <div class=\"row\">\r\n");
      out.write("                    <div class=\"nowraps-text inprodet-titl am-ft-14\" style=\"line-height: 28px;\">帐户：</div>\r\n");
      out.write("                    <p>{{userName}}</p>\r\n");
      out.write("                </div>\r\n");
      out.write("                <!-- row2 -->\r\n");
      out.write("                <div class=\"row\">\r\n");
      out.write("                    <div class=\"nowraps-text inprodet-titl am-ft-14\"  style=\"line-height: 29px;\">昵称：</div>\r\n");
      out.write("                    <div class=\"col-md-3 form-group needValInfo\" style=\"margin-bottom: 5px;\">\r\n");
      out.write("                        <input type=\"text\" class=\"col-md-8 text-overflow\" name=\"\"  ng-model=\"trueName\" ng-value=\"trueName\">\r\n");
      out.write("                    </div>\r\n");
      out.write("                </div>\r\n");
      out.write("                <!-- row3 -->\r\n");
      out.write("                <div class=\"row\">\r\n");
      out.write("                    <div class=\"nowraps-text inprodet-titl am-ft-14\"  style=\"line-height: 36px;\">邮箱：</div>\r\n");
      out.write("                    <div class=\"col-md-3 form-group needValInfo\" style=\"margin-bottom: 15px;\">\r\n");
      out.write("                        <input type=\"text\" class=\"col-md-8 text-overflow\" name=\"\"  ng-model=\"email\" ng-value=\"email\">\r\n");
      out.write("                    </div>\r\n");
      out.write("                </div>\r\n");
      out.write("                <div class=\"fn-clear\"></div>\r\n");
      out.write("            </div>\r\n");
      out.write("            <button type=\"button\" class=\"btn btn-primary addBrandBtn\" ng-click=\"sureEdit()\">确认修改</button>\r\n");
      out.write("            <button type=\"button\" class=\"btn btn-default mgl10\" ng-click=\"goback()\">取消</button>\r\n");
      out.write("            <div class=\"fn-clear\"></div>\r\n");
      out.write("        </div>\r\n");
      out.write("        <div class=\"fn-clear\"></div>\r\n");
      out.write("    </div>\r\n");
      out.write("\r\n");
      out.write("</div>\r\n");
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
