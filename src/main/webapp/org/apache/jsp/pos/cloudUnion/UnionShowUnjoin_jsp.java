/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-02-19 08:37:25 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.pos.cloudUnion;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class UnionShowUnjoin_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<div class=\"content-wrapper\">\n");
      out.write("\t<div class=\"col-md-11 pageTitl\">\n");
      out.write("\t\t<h2 class=\"am-ft-16 fn-left\">联盟管理</h2>\n");
      out.write("\t\t<a href=\"javascript:;\" class=\"line-btn fn-right\" ng-click=\"gobackComercia()\">返回</a>\n");
      out.write("\t</div>\n");
      out.write("\t<div class=\"fn-clear\"></div>\n");
      out.write("\t<!-- search -->\n");
      out.write("\t<div class=\"listSearch OderlistSearch mgt0 pb0\">\n");
      out.write("\t\t<div class=\"row\">\n");
      out.write("\t\t\t<div class=\"col-md-12 mgl20\">\n");
      out.write("\t\t\t\t<p class=\"col-sm-3 control-label mgb10\">联盟名称:<span>{{cloudName}}</span></p>\n");
      out.write("\t\t\t\t<p class=\"col-sm-7 control-label mgb10\">品牌:<span>{{brandName}}</span></p>\n");
      out.write("\t\t\t\t<p class=\"col-sm-3 control-label mgb10\">创建商户：<span>{{shopName}}</span></p>\n");
      out.write("\t\t\t\t<p class=\"col-sm-3 control-label\">创建时间：<span>{{createDate}}</span></p>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div class=\"fn-clear\"></div>\n");
      out.write("\t\t</div>\n");
      out.write("\t</div>\n");
      out.write("\t<!-- /search  -->\n");
      out.write("\t<!-- Main content -->\n");
      out.write("\t<div class=\"ManColTable col-lg-12\">\n");
      out.write("\t\t<div class=\"unionShow-detTitl\">\n");
      out.write("\t\t\t<span class=\"fn-left\">未加入成员共计 {{unionMemberListCount}} 个：</span>\n");
      out.write("\t\t</div>\n");
      out.write("\t\t<form>\n");
      out.write("\t\t\t<div class=\"table-responsive PrivTable\">\n");
      out.write("\t\t\t\t<table class=\"table table-hover table-striped table-bordered\">\n");
      out.write("\t\t\t\t\t<tr>\n");
      out.write("\t\t\t\t\t\t<th scope=\"col\" colspan=\"2\">成员编号</th>\n");
      out.write("\t\t\t\t\t\t<th scope=\"col\">成员名称</th>\n");
      out.write("                        <th scope=\"col\">成员类型</th>\r\n");
      out.write("\t\t\t\t\t\t<th scope=\"col\">地址</th>\n");
      out.write("\t\t\t\t\t\t<th scope=\"col\">操作</th>\n");
      out.write("\t\t\t\t\t</tr>\n");
      out.write("\t\t\t\t\t<tr ng-repeat=\"unJoinedunionMember in unJoinedunionMemberList\">\n");
      out.write("\t\t\t\t\t\t<td><input type=\"checkbox\" value=\"\" ng-checked=\"unJoinedunionMember.allunJoinedgetchecked\"   ng-click=\"chooseUnJoinedMember(this,unJoinedunionMember.orgId,unJoinedunionMemberList,'one')\" /></td>\n");
      out.write("\t\t\t\t\t\t<td>{{unJoinedunionMember.shopNum}}</td>\n");
      out.write("\t\t\t\t\t\t<td>{{unJoinedunionMember.shopName}}</td>\n");
      out.write("\t\t\t\t\t\t<td>\n");
      out.write("\t\t\t\t\t\t\t<span ng-if=\"unJoinedunionMember.orgType=='1'\">商户</span>\n");
      out.write("                            <span ng-if=\"unJoinedunionMember.orgType=='4'\">店铺</span>\n");
      out.write("\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t<td>\n");
      out.write("\t\t\t\t\t\t\t<p>{{unJoinedunionMember.province}} {{unJoinedunionMember.city}} {{unJoinedunionMember.district}}{{unJoinedunionMember.shopAddr}}</p>\n");
      out.write("\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t<td>\n");
      out.write("\t\t\t\t\t\t\t<a href=\"javascript:;\" ng-disabled=\"defaultObj.unjoinedTojoin\" ng-click=\"unjoinedTojoin(this,'one')\">加入</a>\n");
      out.write("\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t</tr>\n");
      out.write("\t\t\t\t\t<tr>\n");
      out.write("\t\t\t\t\t\t<td colspan=\"6\">\n");
      out.write("\t\t\t\t\t\t\t<div class=\"fn-left mg0 checkbox\">\n");
      out.write("\t\t\t\t\t\t\t\t<label class=\"pl0 mgl8\">\n");
      out.write("                                    <input id=\"allUnjoinedMember\" type=\"checkbox\" value=\"\" ng-model=\"unJoinedgetchecked\" ng-checked=\"unJoinedgetchecked\" ng-click=\"chooseUnJoinedMember(this,unJoinedunionMember.orgId,unJoinedunionMemberList,'all')\" >\n");
      out.write("                                    <label for=\"allUnjoinedMember\" class=\"mgl20\">全选当前页</label>\n");
      out.write("                                </label>\n");
      out.write("\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t</tr>\n");
      out.write("\t\t\t\t</table>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t</form>\n");
      out.write("\t\t<div class=\"pagelist priv-pagelist fn-left price-pagelist\">\n");
      out.write("\t\t\t<div id=\"pagunJoined\">分页</div>\n");
      out.write("\t\t</div>\n");
      out.write("\t\t<a href=\"javascript:;\" class=\"btn btn-primary\" ng-disabled=\"defaultObj.unjoinedTojoin\" ng-click=\"unjoinedTojoin(this,'selected')\">添加选中成员</a>\n");
      out.write("\t\t<!-- 分页 -->\n");
      out.write("\t\t<!--ng-click=\"sureToAddMember-->\n");
      out.write("\t</div>\n");
      out.write("\t<!-- /分页 -->\n");
      out.write("\t<div class=\"fn-clear\"></div>\n");
      out.write("</div>\n");
      out.write("\n");
      out.write("</div>\n");
      out.write("\n");
      out.write("</div>\n");
      out.write("\n");
      out.write("<!--弹窗 start-->\n");
      out.write("<div class=\"am-dialog EditDialog fn-hide\">\n");
      out.write("\t<form>\n");
      out.write("\t\t<div class=\"am-dialog-wrap\">\n");
      out.write("\t\t\t<div class=\"am-dialog-header\">\n");
      out.write("\t\t\t\t<h3 class=\"am-ft-center\">确定解散联盟？</h3>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div class=\"dialogBtn am-flexbox\">\n");
      out.write("\t\t\t\t<button type=\"button\" class=\"am-flexbox-item btn am-button SavEdit deletGroup\" am-bg=\"blue\">确认</button>\n");
      out.write("\t\t\t\t<button type=\"button\" class=\"am-flexbox-item btn am-button\" onclick=\"Dialhide()\" am-bg=\"white\">取消</button>\n");
      out.write("\t\t\t\t<div class=\"fn-clear\"></div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t</div>\n");
      out.write("\t</form>\n");
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
