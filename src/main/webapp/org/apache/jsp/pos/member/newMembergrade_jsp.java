/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-03-28 11:30:39 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.pos.member;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class newMembergrade_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<div class=\"content-wrapper content-memgrade-wrapper\">\r\n");
      out.write("\t<div class=\"col-md-11 pageTitl\">\r\n");
      out.write("\t\t<h2 class=\"am-ft-16 fn-left\">会员卡类型设置</h2>\r\n");
      out.write("\t</div>\t\r\n");
      out.write("\t<div class=\"col-md-11 offsetMargin\">\r\n");
      out.write("\t<!-- Main content -->\r\n");
      out.write("\t<div class=\"col-md-12 typeTitle\">\r\n");
      out.write("\t\t<span>直营门店会员联盟</span>\r\n");
      out.write("\t\t<!--<button>会员卡类型设置</button>-->\r\n");
      out.write("\t</div>\r\n");
      out.write("    <form id=\"memberGradeForm\">\r\n");
      out.write("\t<div class=\"col-md-12 setVipType\">\r\n");
      out.write("\t\t<div class=\"table-responsive cardTypeSet\">\r\n");
      out.write("\t\t\t<table class=\"table table-hover table-striped cardTypeSetbig table-bordered\">\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("                    <th scope=\"col\" width=\"20%\">卡类型名称</th>\r\n");
      out.write("                    <th scope=\"col\" width=\"5%\">等级</th>\r\n");
      out.write("                    <th scope=\"col\" width=\"14%\">已参与会员</th>\r\n");
      out.write("                    <th scope=\"col\" width=\"25%\">品牌</th>\r\n");
      out.write("                    <th scope=\"col\" width=\"20%\">折扣(范围0-10)</th>\r\n");
      out.write("                    <th scope=\"col\" width=\"20%\" ng-if=\"userInfo.orgType != 4\">操作</th>\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr ng-repeat=\"directInfo in directInfos | orderBy:'level'\">\r\n");
      out.write("\t\t\t\t\t<td>\r\n");
      out.write("                        <input type=\"text\" placeholder=\"\" name=\"gradeName\" ng-value=\"directInfo.gradeName\" disabled=\"disabled\"/>\r\n");
      out.write("                    </td>\r\n");
      out.write("\t\t\t\t\t<td>\r\n");
      out.write("                        <input type=\"text\" placeholder=\"1\" name=\"level\" ng-value=\"directInfo.level\" disabled=\"disabled\"/>\r\n");
      out.write("                    </td>\r\n");
      out.write("\t\t\t\t\t<td>{{directInfo.countMember}}个</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"nufourtd\">\r\n");
      out.write("\t\t\t\t\t\t<table class=\"cardTypeSetsmall\">\r\n");
      out.write("\t\t\t\t\t\t\t<tr ng-repeat=\"brandList in directInfo.brandList\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<td id=\"{{brandList.brandId}}\">{{brandList.brandName}}</td>\r\n");
      out.write("\t\t\t\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t\t\t</table>\r\n");
      out.write("\t\t\t\t\t</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"nufourtd\">\r\n");
      out.write("\t\t\t\t\t\t<table class=\"cardTypeSetsmall\">\r\n");
      out.write("\t\t\t\t\t\t\t<tr ng-repeat=\"brandList in directInfo.brandList\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<td>\r\n");
      out.write("                                    <input type=\"text\" name=\"brandDiscount\" ng-value=\"brandList.discount|number:1\" disabled=\"disabled\"/>\r\n");
      out.write("                                </td>\r\n");
      out.write("\t\t\t\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t\t\t</table>\r\n");
      out.write("\t\t\t\t\t</td>\r\n");
      out.write("                    <td class=\"td_edit\" ng-if=\"userInfo.orgType != 4\">\r\n");
      out.write("                        <a href=\"javascript:;\" class=\"delTypeBtn am-ft-blue\" onclick=\"edit_btn(this)\">编辑</a>\r\n");
      out.write("                        <span>|</span>\r\n");
      out.write("                        <a href=\"javascript:;\" class=\"delTypeBtn am-ft-red\" ng-click=\"deleteMemrGrade(directInfo.gradeId)\">删除</a>\r\n");
      out.write("                    </td>\r\n");
      out.write("                    <td class=\"td_editing fn-hide\" ng-if=\"userInfo.orgType != 4\">\r\n");
      out.write("                        <a href=\"javascript:;\" class=\"delTypeBtn am-ft-blue\" ng-click=\"saveEditMemrGrade(directInfo)\">保存</a>\r\n");
      out.write("                        <span>|</span>\r\n");
      out.write("                        <a href=\"javascript:;\" class=\"delTypeBtn am-ft-red\" onclick=\"cancel_btn(this)\">取消</a>\r\n");
      out.write("                    </td>\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr ng-if=\"userInfo.orgType != 4\">\r\n");
      out.write("\t\t\t\t   <td colspan=\"6\">\r\n");
      out.write("\t\t\t\t\t\t<button class=\"addCardType\" ng-click=\"addMemberCardType($event)\">+添加卡类型</button>\r\n");
      out.write("\t\t\t\t\t</td>\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t </table>\t\t\t\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t </form>\r\n");
      out.write("\t\t<div class=\"fn-clear\"></div>\r\n");
      out.write("\t</div>\r\n");
      out.write("    <!--------- 会员联盟 --------->\r\n");
      out.write("    <div class=\"col-md-11 offsetMargin\" brandid=\"{{unionInfo.brandId}}\" memid=\"{{unionInfo.memberUnionId}}\" orgid=\"{{unionInfo.orgId}}\" ng-repeat=\"unionInfo in unionInfos\" ng-if=\"unionInfo.memberUnionStatus != 2\">\r\n");
      out.write("\t<!-- Main content -->\r\n");
      out.write("        <div class=\"col-md-12 typeTitle\">\r\n");
      out.write("            <span>{{unionInfo.memberUnionName}}</span>\r\n");
      out.write("        </div>\r\n");
      out.write("        <form id=\"memberCloudGradeForm{{unionInfo.memberUnionId}}\">\r\n");
      out.write("        <div class=\"col-md-12 setVipType\">\r\n");
      out.write("            <div class=\"table-responsive\">\r\n");
      out.write("                <table class=\"table table-hover table-striped table-bordered cardTypeDetil\">\r\n");
      out.write("                    <tr>\r\n");
      out.write("                        <th scope=\"col\" style=\"width:20%;\">卡类型名称</th>\r\n");
      out.write("                        <th scope=\"col\" style=\"width: 5%;\">等级</th>\r\n");
      out.write("                        <th scope=\"col\" style=\"width: 20%;\">已参与会员</th>\r\n");
      out.write("                        <th scope=\"col\" style=\"width: 20%;\">折扣(范围0-10)</th>\r\n");
      out.write("                        <th scope=\"col\" style=\"width: 20%;\" ng-if=\"unionInfo.orgId==orgId\">操作</th>\r\n");
      out.write("                    </tr>\r\n");
      out.write("                    <tr ng-repeat=\"unionlist in unionInfo.unionList | orderBy:'level'\" ng-if=\"unionlist.gradeId!=undefind\">\r\n");
      out.write("                        <td><input type=\"text\" name=\"gradeName\" ng-value=\"unionlist.gradeName\" disabled=\"disabled\"/></td>\r\n");
      out.write("                        <td><input type=\"text\" name=\"level\" ng-value=\"unionlist.level\" disabled=\"disabled\"/></td>\r\n");
      out.write("                        <td>{{unionlist.countMember}}个</td>\r\n");
      out.write("                        <td><input type=\"text\" name=\"discount\" ng-value=\"unionlist.discount|number:1\" disabled=\"disabled\"/></td>\r\n");
      out.write("                        <td class=\"td_edit\" ng-if=\"unionInfo.orgId==orgId\">\r\n");
      out.write("                            <a href=\"javascript:;\" class=\"delTypeBtn am-ft-blue\" onclick=\"edit_btn(this)\">编辑</a>\r\n");
      out.write("                            <span>|</span>\r\n");
      out.write("                            <a href=\"javascript:;\" class=\"delTypeBtn am-ft-red\" ng-click=\"deleteMemrGrade(unionlist.gradeId)\">删除</a>\r\n");
      out.write("                        </td>\r\n");
      out.write("                        <td class=\"td_editing fn-hide\" ng-if=\"unionInfo.orgId==orgId\">\r\n");
      out.write("                            <a href=\"javascript:;\" class=\"delTypeBtn am-ft-blue\" ng-click=\"saveEditMemrCloudGrade(unionlist,unionInfo.brandId)\">保存</a>\r\n");
      out.write("                            <span>|</span>\r\n");
      out.write("                            <a href=\"javascript:;\" class=\"delTypeBtn am-ft-red\" onclick=\"cancel_btn(this)\">取消</a>\r\n");
      out.write("                        </td>\r\n");
      out.write("                    </tr>\r\n");
      out.write("                    <tr ng-if=\"unionInfo.orgId==orgId\">\r\n");
      out.write("                       <td colspan=\"6\">\r\n");
      out.write("                            <button class=\"addCardType\" ng-click=\"addCloudMemberCardType($event)\">+添加卡类型</button>\r\n");
      out.write("                        </td>\r\n");
      out.write("                    </tr>\r\n");
      out.write("                 </table>\r\n");
      out.write("                </div>\r\n");
      out.write("            </div>\r\n");
      out.write("         </form>\r\n");
      out.write("            <div class=\"fn-clear\"></div>\r\n");
      out.write("        </div>\r\n");
      out.write("    </div>\r\n");
      out.write("\r\n");
      out.write("<!--弹窗 start-->\r\n");
      out.write("<div class=\"am-dialog DelDialog fn-hide\">\r\n");
      out.write("\t\t<div class=\"am-dialog-wrap\">\r\n");
      out.write("\t\t\t<div class=\"am-dialog-header\">\r\n");
      out.write("\t\t\t\t<h3 class=\"am-ft-center\">确定删除？</h3>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<div class=\"dialogBtn am-flexbox\">\r\n");
      out.write("\t\t\t\t<button type=\"button\" class=\"am-flexbox-item btn am-button SavEdit\" am-bg=\"blue\">确认</button>\r\n");
      out.write("\t\t\t\t<button type=\"button\" class=\"am-flexbox-item btn am-button\" id=\"closeDialog\" am-bg=\"white\">取消</button>\r\n");
      out.write("\t\t\t\t<input type=\"reset\" name=\"reset\" style=\"display: none;\" />\r\n");
      out.write("\t\t\t\t<div class=\"fn-clear\"></div>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("</div>\r\n");
      out.write("<!--弹窗 end-->\r\n");
      out.write("\r\n");
      out.write("<!-- 尾部 -->\r\n");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "../../public/footstyle.jsp", out, false);
      out.write("\r\n");
      out.write("\r\n");
      out.write("<script>\r\n");
      out.write("\t$(function(){\r\n");
      out.write("\t\tvar formArray=[];\r\n");
      out.write("    \tformArray.push('{\"memberGradeForm\":\"/membergrade/addMemberGrade\"}');\r\n");
      out.write("    \tinitValidate(formArray,pos);\r\n");
      out.write("\t});\r\n");
      out.write("\t\r\n");
      out.write("\t//编辑按钮\r\n");
      out.write("\tfunction edit_btn(a) {\r\n");
      out.write("\t\t$('.td_edit').show().next().hide().parent().find('input,select').prop('disabled',true);\r\n");
      out.write("\t\t$(a).parent().hide().next().show().parents('tr').find('input,select').prop('disabled',false);\r\n");
      out.write("\t}\r\n");
      out.write("\t//取消按钮\r\n");
      out.write("\tfunction cancel_btn(a) {\r\n");
      out.write("\t\t$(a).parent().hide().prev().show().parents('tr').find('input,select').prop('disabled',true);\r\n");
      out.write("\t}\r\n");
      out.write("\r\n");
      out.write("\t//弹窗居中及隐藏\r\n");
      out.write("\t$('.DelDialog').center();\r\n");
      out.write("    $(function(){\r\n");
      out.write("        $('#closeDialog').click(function(){\r\n");
      out.write("            $('.DelDialog,.maskBg').hide();\r\n");
      out.write("        });\r\n");
      out.write("    });\r\n");
      out.write("\r\n");
      out.write("</script>\r\n");
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
