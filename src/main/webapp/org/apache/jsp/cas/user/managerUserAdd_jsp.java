/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-06-09 01:49:16 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.cas.user;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class managerUserAdd_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("\r\n");
      out.write("<!--遮罩 start-->\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<!--------------- Content start ----------------->\r\n");
      out.write("<div class=\"content-wrapper\">\r\n");
      out.write("    <div class=\"col-md-11 pageTitl\">\r\n");
      out.write("        <h2 class=\"am-ft-16 fn-left\">添加人员</h2>\r\n");
      out.write("    </div>\r\n");
      out.write("    <div class=\"fn-clear\"></div>\r\n");
      out.write("\t<form id=\"managerUserForm\">\r\n");
      out.write("\t    <!-- Main content -->\r\n");
      out.write("\t    <section class=\"container-fluid\">\r\n");
      out.write("\t        <div class=\"row\">\r\n");
      out.write("\t            <div class=\"prodet-nav prodet-content\">\r\n");
      out.write("\t                <div class=\"prodet-box\">\r\n");
      out.write("\t                    <!-- row1 -->\r\n");
      out.write("\t                    <div class=\"row\">\r\n");
      out.write("\t                        <div class=\"nowraps-text inprodet-titl am-ft-14\"><em class=\"am-ft-red mgr5\">*</em>手机号:</div>\r\n");
      out.write("\t                        <div class=\"col-md-4 form-group needValInfo\">\r\n");
      out.write("\t                            <input type=\"text\" class=\"col-md-6 text-overflow\" ng-blur=\"checkUserName()\" name=\"userName\" placeholder=\"手机号\" ng-model=\"manager.userName\"/>\r\n");
      out.write("\t\t                        <small class=\"error\" ng-show=\"userNameWarn\">该用户已存在！</small>\r\n");
      out.write("\t                        </div>\r\n");
      out.write("\t                    </div>\r\n");
      out.write("\t                    <!-- row2 -->\r\n");
      out.write("\t                    <div class=\"row\">\r\n");
      out.write("\t                        <div class=\"nowraps-text inprodet-titl am-ft-14\"><em class=\"am-ft-red mgr5\">*</em>姓名:</div>\r\n");
      out.write("\t                        <div class=\"col-md-4 form-group needValInfo\">\r\n");
      out.write("\t                            <input type=\"text\" class=\"col-md-6 text-overflow\" name=\"trueName\" placeholder=\"姓名\" ng-model=\"manager.trueName\"/>\r\n");
      out.write("\t                        </div>\r\n");
      out.write("\t                    </div>\r\n");
      out.write("\t                    <!--row4-->\r\n");
      out.write("\t                    <div class=\"row\">\r\n");
      out.write("\t                        <div class=\"nowraps-text inprodet-titl am-ft-14\"><em class=\"am-ft-red mgr5\">*</em>初始密码:</div>\r\n");
      out.write("\t                        <div class=\"col-md-4 form-group needValInfo\">\r\n");
      out.write("\t                            <input type=\"text\" onfocus=\"this.type='password'\" autocomplete=\"off\" class=\"col-md-6 text-overflow\" name=\"password\" placeholder=\"\" ng-model=\"manager.password\"/>\r\n");
      out.write("\t                        </div>\r\n");
      out.write("\t                    </div>\r\n");
      out.write("\t                    <!-- row5 -->\r\n");
      out.write("\t                    <div class=\"row\">\r\n");
      out.write("\t                        <div class=\"nowraps-text inprodet-titl am-ft-14\"><em class=\"am-ft-red mgr5\">*</em>职位:</div>\r\n");
      out.write("\t                        <div class=\"col-md-2 form-group needValInfo\">\r\n");
      out.write("\t                            <select class=\"col-md-12\" name=\"roleId\" ng-model=\"manager.roleId\">\r\n");
      out.write("\t                                <option value=\"\"></option>\r\n");
      out.write("\t                                <option ng-repeat=\"role in roles\" value=\"{{role.roleId}}\">{{role.roleName}}</option>\r\n");
      out.write("\t                            </select>\r\n");
      out.write("\t                        </div>\r\n");
      out.write("\t                    </div>\r\n");
      out.write("\t                    <!-- row6 -->\r\n");
      out.write("\t                    <div class=\"row\">\r\n");
      out.write("\t                        <div class=\"nowraps-text inprodet-titl am-ft-14\"><em class=\"am-ft-red mgr5\">*</em>店铺/商户:</div>\r\n");
      out.write("\t                        <div class=\"col-md-2 form-group needValInfo\">\r\n");
      out.write("\t                            <select class=\"col-md-12\" name=\"orgId\" ng-model=\"manager.orgId\">\r\n");
      out.write("\t                                <option value=\"\"></option>\r\n");
      out.write("                               \t\t<option ng-repeat=\"org in orgList\" value=\"{{org.orgId}}\">{{org.shopName}}</option>\r\n");
      out.write("\t                            </select>\r\n");
      out.write("\t                        </div>\r\n");
      out.write("\t                    </div>\r\n");
      out.write("\t\r\n");
      out.write("\t                    <div class=\"fn-clear\"></div>\r\n");
      out.write("\t                </div>\r\n");
      out.write("\t            </div>\r\n");
      out.write("\t        </div>\r\n");
      out.write("\t        <button type=\"button\" class=\"btn btn-primary fn-left mgl60\" ng-click=\"add()\">保存</button>\r\n");
      out.write("\t        <button type=\"button\" class=\"btn btn-default mgl10\" ng-click=\"returnhome()\">返回</button>\r\n");
      out.write("\t    </section>\r\n");
      out.write("    </form>\r\n");
      out.write("    <!-- /Main content -->\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<!-- 尾部 -->\r\n");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "../../public/footstyle.jsp", out, false);
      out.write("\r\n");
      out.write("<script>\r\n");
      out.write("\t $(function(){\r\n");
      out.write("\t\tvar formArray=[];\r\n");
      out.write("    \tformArray.push('{\"managerUserForm\":\"/user/addUserOrg\"}');\r\n");
      out.write("    \tinitValidate(formArray,cas);\r\n");
      out.write("\t})\r\n");
      out.write("\tfunction back(){\r\n");
      out.write("\t\twindow.location.href=\"#/managerUser\";\r\n");
      out.write("\t}\r\n");
      out.write("</script>");
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
