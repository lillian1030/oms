/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-02-19 08:37:24 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.pos.cloudUnion;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class finishCreateUnion_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<div class=\"content-wrapper fn-clear\">\r\n");
      out.write("    <div class=\"col-md-11 pageTitl\">\r\n");
      out.write("        <h2 class=\"am-ft-16 fn-left\">创建云仓分享联盟</h2>\r\n");
      out.write("    </div>\r\n");
      out.write("    <div class=\"col-md-12 joinNav\">\r\n");
      out.write("        <div class=\"joinUion01 col-md-4\">\r\n");
      out.write("           <span class=\"joinUNav1\">1</span>\r\n");
      out.write("            <span class=\"joinUNav2\">创建联盟</span>\r\n");
      out.write("        </div> \r\n");
      out.write("        <div class=\"joinUion02 col-md-4\">\r\n");
      out.write("            <span class=\"joinUNav1\">2</span>\r\n");
      out.write("            <span class=\"joinUNav2\">选择成员</span>\r\n");
      out.write("        </div> \r\n");
      out.write("        <div class=\"joinUion03 col-md-4 joinUion03active\">\r\n");
      out.write("           <span class=\"joinUNav1 activespan\">3</span>\r\n");
      out.write("            <span class=\"joinUNav2\">完成</span>    \r\n");
      out.write("        </div>          \r\n");
      out.write("    </div>\r\n");
      out.write("    <div class=\"fn-clear\"></div>\r\n");
      out.write("    <!-- Main content -->\r\n");
      out.write("    <div class=\"chooseMemberContent col-md-11 \">\r\n");
      out.write("        <div class=\"fn-clear chooseMemberTitle\" >\r\n");
      out.write("            <div class=\"fn-left\"><span class=\"unionNameTitle fn-left\">成功创建云仓分享联盟：</span><span class=\"unionName\">{{cloudName}}</span></div>\r\n");
      out.write("            <div class=\"fn-left\"><span class=\"brandNameTitle fn-left\">品牌：</span><span class=\"brandName\">{{brandName}}</span></div>\r\n");
      out.write("        </div>\r\n");
      out.write("        <div class=\"menberSum\" ng-if=\"addMemberType=='selected'\"><span>共加入{{unionListCount}}个成员，</span><a class=\"lookMember\" href=\"javascript:;\" ng-click=\"scanJoinedMember()\">查看加入会员</a></div>\n");
      out.write("        <div class=\"menberSum\" ng-if=\"addMemberType=='all'\"><span>共加入{{cloudUnionCount}}个成员，</span><a class=\"lookMember\" href=\"javascript:;\" ng-click=\"scanJoinedMember()\">查看加入会员</a></div>\r\n");
      out.write("        <div class=\"unionOperation\">\r\n");
      out.write("            <div  class=\"unionOperationA unionOperationlist\"><span>您还没有配置派单规则，</span><a href=\"javascript:;\">立即配置派单规则</a></div>\r\n");
      out.write("            <div  class=\"unionOperationB unionOperationlist\"><span>您还没有设置商品的限价，</span><a href=\"javascript:;\">立即设置限价</a></div>\r\n");
      out.write("            <div  class=\"unionOperationC unionOperationlist\"><span>您还可以管理云仓商品，</span><a href=\"javascript:;\">立即前往</a></div>\r\n");
      out.write("        </div>\r\n");
      out.write("    </div>\r\n");
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
