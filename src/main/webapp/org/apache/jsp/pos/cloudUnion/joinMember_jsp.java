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

public final class joinMember_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("   <!--content-->\r\n");
      out.write(" <div class=\"content-wrapper content-wrapper-order\">\r\n");
      out.write("    \t<div class=\"col-md-11 pageTitl\">\r\n");
      out.write("\t\t<h2 class=\"am-ft-16 fn-left\">加入云仓分享联盟</h2>\r\n");
      out.write("\t    </div>\r\n");
      out.write("         <div class=\"col-md-12 joinNav\">\r\n");
      out.write("            <div class=\"joinUion01  \">\r\n");
      out.write("            \t<span class=\"joinUNav1\">1</span>\r\n");
      out.write("            \t<span class=\"joinUNav2\">加入联盟</span>\r\n");
      out.write("            </div> \r\n");
      out.write("             <div class=\"joinUion02 joinUion02active\">\r\n");
      out.write("            \t<span class=\"joinUNav1 activespan\">2</span>\r\n");
      out.write("            \t <span class=\"joinUNav2\">选择成员</span>\r\n");
      out.write("            </div> \r\n");
      out.write("             <div class=\"joinUion03 \">\r\n");
      out.write("            \t<span class=\"joinUNav1\">3</span>\r\n");
      out.write("            \t<span class=\"joinUNav2\">完成</span>    \r\n");
      out.write("            </div>          \r\n");
      out.write("        </div>\r\n");
      out.write("        <div class=\"fn-clear\"></div>\r\n");
      out.write("        <p class=\"join-titl-note \">\r\n");
      out.write("        \t<span class=\"joinMber\">您正在加入</span><span >&nbsp;{{shopName}}&nbsp;</span>\r\n");
      out.write("        \t<span class=\"joinMber\">创建的云仓分享联盟：</span><span >{{cloudName}}&nbsp;&nbsp;</span>\r\n");
      out.write("        \t<span class=\"joinMber\">品牌：</span><span>{{brandName}}</span>\r\n");
      out.write("        </p>\r\n");
      out.write("        <div class=\"ManColTable col-lg-12\">\r\n");
      out.write("            <div class=\"table-responsive\">\r\n");
      out.write("                <div class=\"joinMemberList\">\r\n");
      out.write("                \t<p >接下来请选择一起加入的成员：</p>\r\n");
      out.write("                \t<p>&nbsp;</p>\r\n");
      out.write("                    <table class=\"table table-hover table-striped\">\r\n");
      out.write("                        <tr class=\"unionList\">\r\n");
      out.write("                            <th scope=\"col\" colspan=\"2\" width=\"23%\">成员编号</th>\r\n");
      out.write("                            <th scope=\"col\" width=\"20%\">成员名称</th>\r\n");
      out.write("                            <th scope=\"col\" width=\"35%\">地址</th>\r\n");
      out.write("                            <th scope=\"col\">已有联盟</th>                                  \r\n");
      out.write("                        </tr>\r\n");
      out.write("                        <tr class=\"unionMemberList\" ng-repeat=\"unionMember in unionMemberList\">              \r\n");
      out.write("                            <td width=\"3%\">\r\n");
      out.write("                                <input type=\"checkbox\" ng-checked=\"unionMember.check\" ng-value=\"unionMember.orgId\" ng-model=\"orgId\" ng-click=\"selectMember(unionMember.orgId,unionMemberList,'one')\"/>\r\n");
      out.write("                            </td>\r\n");
      out.write("                            <td width=\"20%\"><span class=\"\">{{unionMember.shopNum}}</span></td>\r\n");
      out.write("                            <td width=\"20%\">\r\n");
      out.write("                                <span>{{unionMember.shopName}}</span>\r\n");
      out.write("                            </td>\r\n");
      out.write("                            <td width=\"35%\">\r\n");
      out.write("                                <span>{{unionMember.province}}{{unionMember.city}}\r\n");
      out.write("                                \t{{unionMember.district}}{{unionMember.shopAddr}}</span>\r\n");
      out.write("                            </td>\r\n");
      out.write("                            <td >\r\n");
      out.write("                              <span>{{unionMember.cloudName}}</span>\r\n");
      out.write("                            </td>\r\n");
      out.write("                        </tr>\r\n");
      out.write("                            \r\n");
      out.write("                    </table>\r\n");
      out.write("                    <div class=\"fn-clear\"></div>\r\n");
      out.write("                </div>\r\n");
      out.write("              <!--分页 start-->\r\n");
      out.write("            <div class=\"pagelist priv-pagelist\">\r\n");
      out.write("              <div class=\"fullsel fn-clear\">\r\n");
      out.write("\t\t\t\t<input type=\"checkbox\" class=\"fn-left\" id=\"fullsel\"\r\n");
      out.write("\t\t\t\t\tng-click=\"selectMember(unionMember.orgId,unionMemberList,'all')\" ng-checked=\"isChecked\" ng-model=\"isChecked\"/>\r\n");
      out.write("\t\t\t\t<label for=\"fullsel\" style=\"margin-top: 3px\" class=\"fn-left\">全选当前页</label>\r\n");
      out.write("\t\t\t   </div>     \r\n");
      out.write("                <div id=\"pagingMember\"></div>\r\n");
      out.write("            </div>\r\n");
      out.write("              <!--分页 end-->\r\n");
      out.write("            <div class=\"fn-clear\">\r\n");
      out.write("            \t<button class=\"fn-left addSeletedMember addMemberbuttom\r\n");
      out.write("                      \" ng-click=\"addChooseJoinMember('selected')\">添加选中成员</button>\r\n");
      out.write("            \t<button class=\"fn-left addAllMember addMemberbuttom\r\n");
      out.write("                 \" ng-click=\"addChooseJoinMember('all')\">添加全部成员</button>\r\n");
      out.write("            </div>\r\n");
      out.write("          \r\n");
      out.write("            </div>\r\n");
      out.write("            <div class=\"fn-clear\"></div>\r\n");
      out.write("            <!-- /加盟联盟 -->\r\n");
      out.write("        </div>\r\n");
      out.write("        <!-- /content -->\r\n");
      out.write("    </div>\r\n");
      out.write("    \r\n");
      out.write("    <!--添加弹框-->\r\n");
      out.write(" <div class=\"joinUnionDialogMask\" id=\"joinUnionDialogMaskA\" ng-show=\"defaultObj.joinUnionDialogMaskA=='show'\">\r\n");
      out.write("    <div class=\"joinUnionDialog\" id=\"joinUnionDialoga\">\r\n");
      out.write("        <div class=\"top fn-clear\">\r\n");
      out.write("            <span class=\"fn-left\">加入成员</span>\r\n");
      out.write("            <span class=\"fn-right\"  ng-click=\"closedialog()\"><img src=\"http://static.qineasy.com/base/images/closelogo.png\" alt=\"\"></span>\r\n");
      out.write("        </div>\r\n");
      out.write("        <div class=\"contenta fn-clear\">\r\n");
      out.write("            <div class=\"fn-left sureIcon\">\r\n");
      out.write("                <span>!</span>\r\n");
      out.write("            </div>\r\n");
      out.write("            <div class=\"fn-left sureText fn-clear\">\r\n");
      out.write("            \t<div ng-if=\"partSelect\">\r\n");
      out.write("            \t\t<p>请确认是否加入当前选中成员？</p>\r\n");
      out.write("            \t\t <div class=\"selectedMenber\">\r\n");
      out.write("            \t\t \t<span>已选成员：</span>\r\n");
      out.write("            \t\t \t<span>{{selectedCounts}}个</span>\r\n");
      out.write("            \t\t </div>             \r\n");
      out.write("                    <div class=\"unSelectedMenber selectedMenber\" >\r\n");
      out.write("                    \t<span>未选成员：</span>\r\n");
      out.write("                    \t<span>{{notSelectedCounts}}个</span>\r\n");
      out.write("                    \t<span>其中有<i>{{joinedCounta}}个</i>成员因为已有联盟无法加入</span>\r\n");
      out.write("                    </div>\r\n");
      out.write("            \t</div>\r\n");
      out.write("            \t<div ng-if=\"allSelect\">\r\n");
      out.write("            \t\t <p >请确认是否加入全部成员？</p>\r\n");
      out.write("            \t\t <div class=\"selectedMenber\">\r\n");
      out.write("            \t\t \t<span>全部成员：</span>\r\n");
      out.write("            \t\t \t<span>{{counts}}个</span>\r\n");
      out.write("            \t\t </div>\r\n");
      out.write("                     <div class=\"unSelectedMenber selectedMenber\" >\r\n");
      out.write("                 \t    <span>其中有<i>{{joinedCounta}}个</i>成员因为已有联盟无法加入</span>\r\n");
      out.write("                     </div>                 \r\n");
      out.write("            \t</div>\r\n");
      out.write("        </div>\r\n");
      out.write("      </div>\r\n");
      out.write("        <div class=\"diaLogButton fn-clear\">\r\n");
      out.write("            <button class=\"cancelButton fn-right\" ng-click=\"closedialog()\">取消</button>\r\n");
      out.write("            <button class=\"sureButton fn-right\" ng-click=\"sureJoinSelectedmen()\" ng-if=\"allSelect\">确认</button>\r\n");
      out.write("            <button class=\"sureButton fn-right\" ng-click=\"sureJoinSelectedmen()\" ng-if=\"partSelect\">确认</button>\r\n");
      out.write("            \r\n");
      out.write("        </div>\r\n");
      out.write("  </div>\r\n");
      out.write("</div>\r\n");
      out.write("  <!--/添加弹框-->\r\n");
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