/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-06-05 03:18:04 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.pos.brand;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class brandManage_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<!--------------- Content start ----------------->\r\n");
      out.write("   <!-- Main content -->\r\n");
      out.write("    <div class=\"content-wrapper newbrand-wrapper\">\r\n");
      out.write("    \t<!--------我的品牌-------->\r\n");
      out.write("\t    <div class=\"col-md-11 pageTitl\">\r\n");
      out.write("\t        <h2 class=\"am-ft-16 fn-left\">我的品牌（{{brandCount}}）</h2>\r\n");
      out.write("\t    </div>\r\n");
      out.write("\t    <!-- Main content -->\r\n");
      out.write("\t    <div class=\"ManColTable col-lg-12\">\r\n");
      out.write("\t    \t<div class=\"new-mybrand\">\r\n");
      out.write("\t    \t\t<!--我的品牌-->\r\n");
      out.write("\t    \t\t<div ng-repeat=\"brand in brandList\" ng-if=\"brand.brandJoinType=='1'\" class=\"brand-item\">\r\n");
      out.write("\t    \t\t\t<div class=\"brand-item-top\">\r\n");
      out.write("\t    \t\t\t\t<a href=\"javascript:;\" ng-click=\"goRoute('brandDet',this)\"><img ng-src=\"{{brand.logo}}\" /></a>\r\n");
      out.write("\t    \t\t\t\t<a href=\"javascript:;\" ng-click=\"goRoute('brandDet',this)\" class=\"brand-titl\">{{brand.brandName}}</a>\r\n");
      out.write("\t    \t\t\t\t<p >自有品牌</p>\r\n");
      out.write("\t    \t\t\t</div>\r\n");
      out.write("\t    \t\t\t<div class=\"brand-item-mid\">{{brand.brandInfo}}</div>\r\n");
      out.write("\t    \t\t\t<p>\r\n");
      out.write("\t    \t\t\t\t<span class=\"am-ft-black fn-left mgl10\">授权码：{{brand.brandLicense}}</span>\r\n");
      out.write("\t    \t\t\t\t<a href=\"javascript:;\" class=\"fn-right mgr10\" ng-click=\"goRoute('brandDet',this)\">查看详情</a>\r\n");
      out.write("\t    \t\t\t</p>\r\n");
      out.write("\t    \t\t\t<img class=\"icon-brand-type\" src=\"http://static.qineasy.com/base/images/icon_brand_self.png\" />\r\n");
      out.write("\t    \t\t</div>\r\n");
      out.write("\t    \t\t<div ng-repeat=\"brand in brandList\" ng-if=\"brand.brandJoinType=='2'\" class=\"brand-item\">\r\n");
      out.write("\t    \t\t\t<div class=\"brand-item-top\">\r\n");
      out.write("\t    \t\t\t\t<a href=\"javascript:;\" ng-click=\"goRoute('brandDet',this)\"><img ng-src=\"{{brand.logo}}\" /></a>\r\n");
      out.write("\t    \t\t\t\t<a href=\"javascript:;\" ng-click=\"goRoute('brandDet',this)\" class=\"brand-titl\">{{brand.brandName}}</a>\r\n");
      out.write("\t    \t\t\t\t<p >自主加盟品牌</p>\r\n");
      out.write("\t    \t\t\t</div>\r\n");
      out.write("\t    \t\t\t<div class=\"brand-item-mid\">{{brand.brandInfo}}</div>\r\n");
      out.write("\t    \t\t\t<p>\r\n");
      out.write("\t    \t\t\t\t<span class=\"am-ft-black fn-left mgl10\">授权码：{{brand.brandLicense}}</span>\r\n");
      out.write("\t    \t\t\t\t<a href=\"javascript:;\" class=\"fn-right mgr10\" ng-click=\"goRoute('brandDet',this)\">查看详情</a>\r\n");
      out.write("\t    \t\t\t</p>\r\n");
      out.write("\t    \t\t\t<img class=\"icon-brand-type\" src=\"http://static.qineasy.com/base/images/icon_brand_join.png\" />\r\n");
      out.write("\t    \t\t</div>\r\n");
      out.write("\t    \t\t<div ng-repeat=\"brand in brandList\" ng-if=\"brand.brandJoinType=='3'\" ng-class=\"{true:'brand-item',false:'brand-item brand-item-wait'}[brand.brandReviewStatus=='2']\">\r\n");
      out.write("\t    \t\t\t<div class=\"brand-item-top\">\r\n");
      out.write("\t    \t\t\t\t<a href=\"javascript:;\" ng-click=\"goRoute('brandDet',this)\"><img ng-src=\"{{brand.logo}}\" /></a>\r\n");
      out.write("\t    \t\t\t\t<a href=\"javascript:;\" ng-click=\"goRoute('brandDet',this)\" class=\"brand-titl\">{{brand.brandName}}</a>\r\n");
      out.write("\t    \t\t\t\t<p >授权加盟品牌</p>\r\n");
      out.write("\t    \t\t\t\t<p >授权方：{{brand.pOrgName}}</p>\r\n");
      out.write("\t    \t\t\t</div>\r\n");
      out.write("\t    \t\t\t<div ng-if=\"brand.brandReviewStatus=='2'\">\r\n");
      out.write("\t\t    \t\t\t<div class=\"brand-item-mid\">{{brand.brandInfo}}</div>\r\n");
      out.write("\t\t    \t\t\t<p>\r\n");
      out.write("\t\t    \t\t\t\t<span class=\"am-ft-black fn-left mgl10\">授权码：{{brand.brandLicense}}</span>\r\n");
      out.write("\t\t    \t\t\t\t<a href=\"javascript:;\" class=\"fn-right mgr10\" ng-click=\"goRoute('brandDet',this)\">查看详情</a>\r\n");
      out.write("\t\t    \t\t\t</p>\r\n");
      out.write("\t\t    \t\t\t<img class=\"icon-brand-type\" src=\"http://static.qineasy.com/base/images/icon_brand_join.png\" />\r\n");
      out.write("\t    \t\t\t</div>\r\n");
      out.write("\t    \t\t\t<div ng-if=\"brand.brandReviewStatus=='1'\">\r\n");
      out.write("\t    \t\t\t\t<p class=\"impower-tip\">等待授权方审核</p>\r\n");
      out.write("\t    \t\t\t</div>\r\n");
      out.write("\t    \t\t</div>\r\n");
      out.write("\t    \t\t<!--添加品牌-->\r\n");
      out.write("\t    \t\t<div class=\"brand-item brand-item-add\">\r\n");
      out.write("\t    \t\t\t<a href=\"javascript:;\" ng-click=\"addtr(this)\">+&nbsp;添加品牌</a>    \t\t\t\t   \t\t\t\r\n");
      out.write("\t    \t\t</div>\r\n");
      out.write("\t    \t\t<div class=\"fn-clear\"></div>\r\n");
      out.write("\t    \t</div>\r\n");
      out.write("\t    \t<!-----------品牌授权申请审核------------>\r\n");
      out.write("\t    \t<div class=\"col-md-11 pageTitl brandmgt_pagetitl\" ng-if=\"applyCount>0\">\r\n");
      out.write("\t\t        <h2 class=\"am-ft-16 fn-left\">品牌授权申请审核（{{applyCount}}）</h2>\r\n");
      out.write("\t\t    </div>\r\n");
      out.write("\t\t    <div class=\"newBrandTable\">\r\n");
      out.write("\t\t    \t<table class=\"table table-hover table-striped\" ng-if=\"applyCount>0\">\r\n");
      out.write("\t\t    \t\t<tr>\r\n");
      out.write("\t\t    \t\t\t<th>品牌名称</th>\n");
      out.write("\t\t    \t\t\t<th>申请商户</th>\n");
      out.write("\t\t    \t\t\t<th>申请时间</th>\n");
      out.write("\t\t    \t\t\t<th>操作</th>\r\n");
      out.write("\t\t    \t\t</tr>\r\n");
      out.write("\t\t    \t\t<tr class=\"activeUse\" ng-repeat=\"apply in applys\">\r\n");
      out.write("\t\t    \t\t\t<td><img ng-src=\"{{apply.logo}}\" />{{apply.brandName}}</td>\n");
      out.write("\t\t    \t\t\t<td>{{apply.applyOrgName}}</td>\n");
      out.write("\t\t    \t\t\t<td>{{apply.createTime}}</td>\n");
      out.write("\t\t    \t\t\t<td ng-if=\"apply.brandApplyStatus=='1'\">\r\n");
      out.write("\t\t    \t\t\t\t<a href=\"javascript:;\" class=\"line-btn fn-left\" ng-click=\"refused(this)\">拒绝</a>\n");
      out.write("\t\t    \t\t\t\t<a href=\"javascript:;\" class=\"fn-left btn btn-primary\" ng-click=\"adopted(this)\">通过</a>\r\n");
      out.write("\t\t    \t\t\t</td>\r\n");
      out.write("\t\t    \t\t\t<td class=\"am-ft-green\" ng-if=\"apply.brandApplyStatus=='2'\">已通过</td>\r\n");
      out.write("\t\t    \t\t\t<td ng-if=\"apply.brandApplyStatus=='3'\">已拒绝</td>\r\n");
      out.write("\t\t    \t\t</tr>\r\n");
      out.write("\t\t    \t</table>\r\n");
      out.write("\t\t    \t<!--分页 start-->\r\n");
      out.write("\t\t\t    <div class=\"pagelist priv-pagelist\">\r\n");
      out.write("\t\t\t    \t<div id=\"paging\"></div>    \r\n");
      out.write("\t\t\t    </div>\r\n");
      out.write("\t\t\t    <!--分页 end-->\r\n");
      out.write("\t\t    </div>\r\n");
      out.write("\t        <!--<form id=\"brandForm\">\r\n");
      out.write("\t            <div class=\"table-responsive  brandTable \">\r\n");
      out.write("\t\r\n");
      out.write("\t                <table class=\"table table-hover table-striped table-bordered\">\r\n");
      out.write("\t                    <tr>\r\n");
      out.write("\t                        <th scope=\"col\" class=\"col-lg-3\">品牌名称</th>\r\n");
      out.write("\t                        <th scope=\"col\" class=\"col-lg-3\">申请方名称</th>\r\n");
      out.write("\t                        <th scope=\"col\" class=\"col-lg-3\">审核状态</th>\r\n");
      out.write("\t                        <th scope=\"col\" class=\"col-lg-3\">操作</th>\r\n");
      out.write("\t                    </tr>\r\n");
      out.write("\t                   <tr ng-repeat=\"apply in applys\" ng-model=\"apply\" >\r\n");
      out.write("\t                        <td id=\"brandName\">\r\n");
      out.write("\t                       \r\n");
      out.write("\t                        <input type=\"hidden\"  value=\"{{apply.brandId}}\" disabled />\r\n");
      out.write("\t                        \t{{apply.brandName}}\r\n");
      out.write("\t                        </td>\r\n");
      out.write("\t                        <td>\r\n");
      out.write("\t                       \r\n");
      out.write("\t\t\t\t\t\t\t\t{{apply.applyOrgName}}\r\n");
      out.write("\t\t\t\t\t\t\t</td>\r\n");
      out.write("\t                        <td>\r\n");
      out.write("\t                        \r\n");
      out.write("\t                        \t<input   value=\"待审核\" ng-if=\"apply.brandApplyStatus == 1\" class=\"brandCheck\"  disabled />\r\n");
      out.write("\t                       \t\t<input   value=\"已通过\" ng-if=\"apply.brandApplyStatus == 2\" class=\"brandPass\" disabled />\r\n");
      out.write("\t                       \t\t<input   value=\"已拒绝\" ng-if=\"apply.brandApplyStatus == 3\" class=\"brandRefused\" disabled />\r\n");
      out.write("\t                        </td>\r\n");
      out.write("\t                        <td ng-if=\"apply.brandApplyStatus == 1\">\r\n");
      out.write("\t                        \t<div class=\"brandBtnCenter fn-clear\">\r\n");
      out.write("\t                        \t\t <button type=\"button\" class=\"brandBtnPass   fn-left\" ng-click=\"adopted(this)\">通过</button>\r\n");
      out.write("\t                                 <button type=\"button\" class=\"brandBtnRefused  fn-left \"  ng-click=\"refused(this)\">拒绝</button>\r\n");
      out.write("\t                        \t</div>\r\n");
      out.write("\t                          \r\n");
      out.write("\t                        </td>\r\n");
      out.write("\t                        <td ng-if=\"apply.brandApplyStatus != 1\">\r\n");
      out.write("\t                        </td>\r\n");
      out.write("\t                    </tr>\r\n");
      out.write("\t                    \r\n");
      out.write("\t                </table>\r\n");
      out.write("\t                <div class=\"fn-clear\"></div>\r\n");
      out.write("\t            </div>\r\n");
      out.write("\t        </form>-->\r\n");
      out.write("\t        <div class=\"fn-clear\"></div>\r\n");
      out.write("\t    </div>\r\n");
      out.write("\t    <div class=\"fn-clear\"></div>\r\n");
      out.write("\t</div>\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("<!--添加品牌弹窗-->\r\n");
      out.write("\t<div class=\"maskBga\" ng-show=\"show\"></div>\r\n");
      out.write("\t<div class=\"sure-to-join\" ng-show=\"show\">\r\n");
      out.write("\t\t<div class=\"top clearfix\">\r\n");
      out.write("\t\t\t<div class=\"warning\">提示</div>\r\n");
      out.write("\t\t\t<div class=\"close-log\" ng-click=\"close()\">\r\n");
      out.write("\t\t\t\t<img src=\"http://static.qineasy.com/base/images/closelogo.png\"/>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<div class=\"join-text\">\r\n");
      out.write("\t\t\t<p>请选择添加:</p>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<div class=\"type-select clearfix\">\r\n");
      out.write("\t\t\t<a href=\"javascript:;\" class=\"join-brand\" ng-click=\"ownBrandSelect()\">自有品牌</a>\r\n");
      out.write("\t\t\t<a href=\"javascript:;\" class=\"own-brand\" ng-click=\"joinBrandSelect()\">加盟品牌</a>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</div>\r\n");
      out.write("<!--/添加品牌弹窗-->\r\n");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "../../public/accredit_join_brand_step_join.jsp", out, false);
      out.write(' ');
      out.write('\r');
      out.write('\n');
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
