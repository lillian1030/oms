/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-02-19 08:37:21 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.pos.stock;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class stock_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<!--遮罩 end-->\r\n");
      out.write("<!----------------- Content Wrapper start ------------------->\r\n");
      out.write("<div class=\"content-wrapper\">\r\n");
      out.write("    <div class=\"col-md-11 pageTitl\">\r\n");
      out.write("        <h2 class=\"am-ft-16 fn-left\">查看库存</h2>\r\n");
      out.write("    </div>\r\n");
      out.write("    <div class=\"fn-clear\"></div>\r\n");
      out.write("    <!-- search -->\r\n");
      out.write("    <section class=\"container-fluid\">\r\n");
      out.write("        <div class=\"row\">\r\n");
      out.write("            <div class=\"prodet-nav\">\r\n");
      out.write("                <div class=\"prodet-box pb0\">\r\n");
      out.write("                    <!----row1---->\r\n");
      out.write("                    <div class=\"row Pro-Sorts\">\r\n");
      out.write("                    \t\r\n");
      out.write("                        <div class=\"col-md-1 inprodet-titl am-ft-12\">品牌：</div>\r\n");
      out.write("                        <div class=\"col-md-2 form-group needValInfo\">\r\n");
      out.write("                            <select class=\"col-md-12\" ng-options=\"brand.brandId as brand.brandName for brand in brands\" ng-model=\"brand\" ng-change=\"getConditions()\">\r\n");
      out.write("                            <option value=\"\">请选择</option>\r\n");
      out.write("                            </select>\r\n");
      out.write("                        </div>\r\n");
      out.write("                    \t<div class=\"col-md-1 inprodet-titl am-ft-12\">季节：</div>\r\n");
      out.write("                        <div class=\"col-md-2 form-group needValInfo\">\r\n");
      out.write("                            <select class=\"col-md-12\" ng-options=\"season.proSeason for season in seasons\" ng-model=\"season1\">\r\n");
      out.write("                            <option value=\"\">请选择</option>\r\n");
      out.write("                            </select>\r\n");
      out.write("                        </div>\r\n");
      out.write("                        <div class=\"col-md-1 inprodet-titl am-ft-12\">年份：</div>\r\n");
      out.write("                        <div class=\"col-md-2 form-group needValInfo\">\r\n");
      out.write("                            <select class=\"col-md-12\" ng-options=\"year.proYear for year in years\" ng-model=\"year1\">\r\n");
      out.write("                            <option value=\"\">请选择</option>\r\n");
      out.write("                            </select>\r\n");
      out.write("                        </div>                                    \r\n");
      out.write("                    </div>\r\n");
      out.write("                    <!请选择--row2---->\r\n");
      out.write("                    <div class=\"row\">\r\n");
      out.write("                   \t\t<div class=\"col-md-1 inprodet-titl am-ft-12\">大品类：</div>\r\n");
      out.write("                         <div class=\"col-md-2 form-group needValInfo\">\r\n");
      out.write("                            <select class=\"col-md-12\" ng-options=\"gps.proGrandparentSortId as gps.grandparentSortName for gps in grandparentSorts\" ng-model=\"gps\" ng-change=\"getParentSort()\">\r\n");
      out.write("                            <option value=\"\">请选择</option>\r\n");
      out.write("                            </select>\r\n");
      out.write("                        </div>\r\n");
      out.write("                        <div class=\"col-md-1 inprodet-titl am-ft-12\">中品类：</div>\r\n");
      out.write("                         <div class=\"col-md-2 form-group needValInfo\">\r\n");
      out.write("                            <select class=\"col-md-12\" ng-options=\"ps.proParentSortId as ps.parentSortName for ps in parentSorts\" ng-model=\"ps\" ng-change=\"getSort()\">\r\n");
      out.write("                            <option value=\"\">请选择</option>\r\n");
      out.write("                            </select>\r\n");
      out.write("                        </div>\r\n");
      out.write("                        <div class=\"col-md-1 inprodet-titl am-ft-12\">小品类：</div>\r\n");
      out.write("                         <div class=\"col-md-2 form-group needValInfo\">\r\n");
      out.write("                            <select class=\"col-md-12\" ng-options=\"sort.proSortId as sort.sortName for sort in sorts\" ng-model=\"sort\">\r\n");
      out.write("                            <option value=\"\">请选择</option>\r\n");
      out.write("                            </select>\r\n");
      out.write("                        </div>           \r\n");
      out.write("                        <div class=\"fn-clear\"></div>\r\n");
      out.write("                    </div>\r\n");
      out.write("                    <!-- row3 -->\r\n");
      out.write("                    <div class=\"row\">\r\n");
      out.write("                    <div class=\"col-md-1 inprodet-titl am-ft-12\">商品款号：</div>\r\n");
      out.write("                        <div class=\"col-md-2 form-group needValInfo\">\r\n");
      out.write("                            <input type=\"text\" class=\"col-md-12 text-overflow\" name=\"\" id=\"proModelid\" placeholder=\"\" value=\"\"/>\r\n");
      out.write("                        </div>\r\n");
      out.write("                        <div class=\"col-md-1 inprodet-titl am-ft-12\">库存：</div>\r\n");
      out.write("                        <div class=\"col-md-3 form-group needValInfo\">\r\n");
      out.write("                            <input type=\"text\" class=\"col-md-5 text-overflow\" name=\"\" id=\"startStock\" placeholder=\"\" value=\"\"/>\r\n");
      out.write("                            <span class=\"am-ft-center fn-left\">--</span>\r\n");
      out.write("                            <input type=\"text\" class=\"col-md-5 text-overflow\" name=\"\" id=\"endStock\" placeholder=\"\" value=\"\"/>\r\n");
      out.write("                        </div>\r\n");
      out.write("                        <div class=\"col-md-1 am-ft-center searchBox\">\r\n");
      out.write("                            <button type=\"button\" class=\"btn fn-left btn-primary\" ng-click=\"getStock(this)\">查询</button>\r\n");
      out.write("                        </div>\r\n");
      out.write("                    \t<div class=\"fn-clear\"></div>\r\n");
      out.write("                    </div>\r\n");
      out.write("                </div>\r\n");
      out.write("            </div>\r\n");
      out.write("        </div>\r\n");
      out.write("    </section>\r\n");
      out.write("\r\n");
      out.write("    <!-- /search -->\r\n");
      out.write("\r\n");
      out.write("    <!-- Main content -->\r\n");
      out.write("    <div class=\"ManColTable col-lg-12\">\r\n");
      out.write("        <form>\r\n");
      out.write("            <div class=\"PrivTable\">\r\n");
      out.write("                <table class=\"table table-hover table-striped table-bordered\">\r\n");
      out.write("                \t\r\n");
      out.write("                    <tr>\r\n");
      out.write("                        <th scope=\"col\">大品类</th>\r\n");
      out.write("                        <th scope=\"col\">中品类</th>\r\n");
      out.write("                        <th scope=\"col\">小品类</th>\r\n");
      out.write("                        <th scope=\"col\">款号</th>\r\n");
      out.write("                        <th scope=\"col\">款名</th>\r\n");
      out.write("                        <th scope=\"col\">品牌</th>\r\n");
      out.write("                        <th scope=\"col\">年份</th>\r\n");
      out.write("                        <th scope=\"col\">季节</th>\r\n");
      out.write("                        <th scope=\"col\">库存量</th>\r\n");
      out.write("                    </tr>\r\n");
      out.write("                    \r\n");
      out.write("                    <tr ng-repeat=\"pro in products\" class=\"{{pro.proModelid}}\">\r\n");
      out.write("                      <td>{{pro.grandparentSortName}}</td>\r\n");
      out.write("                      <td>{{pro.parentSortName}}</td>\r\n");
      out.write("                      <td>{{pro.sortName}}</td>\r\n");
      out.write("                      <td>{{pro.proModelid}}</td>\r\n");
      out.write("                      <td>{{pro.proName}}</td>\r\n");
      out.write("                      <td>{{pro.brandName}}</td>\r\n");
      out.write("                      <td>{{pro.proYear}}</td>\r\n");
      out.write("                      <td>{{pro.proSeason}}</td>\r\n");
      out.write("                       <td>\r\n");
      out.write("                           <a href=\"javascript:;\" class=\"detPanel\" ng-click=\"getStockDetail(this)\" >{{pro.stkOnHand}}<i class=\"fa fa-angle-down\"></i></a>\r\n");
      out.write("                       </td>\r\n");
      out.write("                    </tr>\r\n");
      out.write("                </table>\r\n");
      out.write("\t\t<!--分页 start-->\r\n");
      out.write("\t    <div class=\"pagelist priv-pagelist\">\r\n");
      out.write("\t    \t<div id=\"paging\"></div>    \r\n");
      out.write("\t    </div>\r\n");
      out.write("\t    <!--分页 end-->\r\n");
      out.write("        </div>\r\n");
      out.write("\r\n");
      out.write("        </form>\r\n");
      out.write("        <div class=\"fn-clear\"></div>\r\n");
      out.write("    </div>\r\n");
      out.write("</div>\r\n");
      out.write("\t\t\r\n");
      out.write("</div>\r\n");
      out.write("\t\t\r\n");
      out.write("<!----------------- Content Wrapper end ------------------->\r\n");
      out.write("<script>\r\n");
      out.write("\r\n");
      out.write("    $(function(){\r\n");
      out.write("        //库存详情面板\r\n");
      out.write("       $('.detPanel').click(function(){\r\n");
      out.write("           var thisIcon = $(this).children('.fa');\r\n");
      out.write("           var thisPanel = $(this).parents('tr').next('.detPanel-info');\r\n");
      out.write("           thisPanel.toggle();\r\n");
      out.write("           thisPanel.siblings('.detPanel-info').hide();\r\n");
      out.write("           thisIcon.toggleClass('fa-angle-down fa-angle-up');\r\n");
      out.write("           $(this).parents('tr').siblings().find('.fa').removeClass('fa-angle-up').addClass('fa-angle-down');\r\n");
      out.write("       })\r\n");
      out.write("\r\n");
      out.write("    })\r\n");
      out.write("\r\n");
      out.write("</script>\r\n");
      out.write("<!-- 尾部 -->\r\n");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "../../public/footstyle.jsp", out, false);
      out.write(' ');
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
