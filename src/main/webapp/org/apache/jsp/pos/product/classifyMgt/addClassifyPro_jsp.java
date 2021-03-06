/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-06-05 11:25:37 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.pos.product.classifyMgt;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class addClassifyPro_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<!-- 主要 -->\n");
      out.write("<div class=\"wrapper\" style=\"position: inherit;\">\n");
      out.write("<!--------------- Content start ----------------->\n");
      out.write("\n");
      out.write("  <div class=\"content-wrapper\" >\n");
      out.write("  \t  <div class=\"col-md-11 pageTitl\">\n");
      out.write("\t\t<h2 class=\"am-ft-16 fn-left\">分类详情</h2>\n");
      out.write("\t\t <a href=\"javascript:;\" class=\"line-btn fn-right\" ng-click=\"goback('')\">返回</a>\n");
      out.write("\t</div>\n");
      out.write("        <!-- content info start -->\n");
      out.write("        <section class=\"container-fluid\">\n");
      out.write("           <div class=\"proList-nav classifyList-nav\" style=\"margin-top: 68px;width: 94%; margin-left: 0px;\">\n");
      out.write("            <div class=\"proTop\">\n");
      out.write("                <span class=\"fn-left\">类别：<span class=\"am-ft-black\">{{modelGroup.groupName}}</span>（共{{modelGroup.modelCount}}个商品)</span>\n");
      out.write("                <button  type=\"button\" class=\"line-btn fn-right width100\" ng-click=\"addProduct()\">添加商品</button>\n");
      out.write("                <div class=\"fn-clear\"></div>\n");
      out.write("            </div>\n");
      out.write("                <table width=\"100%\" class=\"mgb0 table-hover table-condensed productTable\">\n");
      out.write("                  <tr>\n");
      out.write("                  \t <th width=\"30%\"  align=\"center\" valign=\"middle\" scope=\"col\">商品</th>\n");
      out.write("                   \t <th width=\"12%\" align=\"center\" valign=\"middle\" scope=\"col\">价格</th>\n");
      out.write("                   \t <th width=\"12%\" align=\"center\" valign=\"middle\" scope=\"col\">品类</th>\n");
      out.write("                   \t <th width=\"12%\" align=\"center\" valign=\"middle\" scope=\"col\">库存</th>\n");
      out.write("                  \t <th width=\"12%\" align=\"center\" valign=\"middle\" scope=\"col\">销量</th>\n");
      out.write("                  \t <th  align=\"center\" valign=\"middle\" scope=\"col\">操作</th>\n");
      out.write("                  </tr>\n");
      out.write("                  <tr ng-repeat=\"pro in groupProList\">\n");
      out.write("\t                  <td class=\"classifyProBox\">\n");
      out.write("\t                  \t<div class=\"fn-clear\">\n");
      out.write("\t\t                  \t<div class=\"fn-left \">\n");
      out.write("\t\t\t                  \t<input type=\"checkbox\" id=\"\" data=\"\" name=\"modelId\" class=\"code_checkbox\" value=\"\" ng-click=\"selectAddProduct(this)\"/>\n");
      out.write("\t\t                  \t</div>\n");
      out.write("\t\t                  \t<div class=\"fn-left mgr10\">\n");
      out.write("\t\t                         <img ng-src=\"{{pro.imageList[0].url}}\" class=\"classifyProImg\" style=\"width:60px;height:60px;\"/>\n");
      out.write("\t\t                  \t</div>\n");
      out.write("\t\t                  \t<div class=\"fn-left\">\n");
      out.write("\t\t                  \t\t<p class=\"productTitl\" ng-if=\"pro.proName.length<8\">{{pro.proName}}</p>\n");
      out.write("\t\t                  \t\t<p class=\"productTitl\" ng-if=\"pro.proName.length>8\">{{pro.proName |limitTo:8}}...</p>\n");
      out.write("\t\t                        <!--<p >口味：甜</p>-->\n");
      out.write("\t\t                  \t</div>\n");
      out.write("\t                  \t</div>\n");
      out.write("\t                  </td>\n");
      out.write("\t                    <td >\n");
      out.write("\t                        <p ng-if=\"pro.maxPrice==pro.minPrice\">¥{{pro.minPrice}}</p>\n");
      out.write("\t                        <p ng-if=\"pro.maxPrice!=pro.minPrice\">¥{{pro.minPrice}}~{{pro.maxPrice}}</p>\n");
      out.write("\t                   </td>\n");
      out.write("\t                   <td >\n");
      out.write("\t                  \t\t{{pro.sortName}}\n");
      out.write("\t                    </td> \n");
      out.write("\t                   <td >\n");
      out.write("\t                  \t\t{{pro.sumStkOnHand}}\n");
      out.write("\t                    </td> \n");
      out.write("\t                   <td >\n");
      out.write("\t                  \t\t{{pro.sumQtyCmtd}}\n");
      out.write("\t                    </td> \n");
      out.write("\t                    <td class=\"setClassify_span\">\n");
      out.write("\t                    \t<span class=\"am-ft-black mgr15 cursor-pointer\">查看</span>\n");
      out.write("\t                    \t<span class=\"am-ft-gray\" ng-dblclick=\"deleteOne(this)\">删除</span>\n");
      out.write("\t                    </td>\n");
      out.write("                  </tr>\n");
      out.write("              </table>\n");
      out.write("              <!-- List end -->\n");
      out.write("            <div class=\"fn-clear\"></div>\n");
      out.write("        </div>\n");
      out.write("         <div class=\"soldOut-batch fn-left\">\n");
      out.write("          \t\t<label class=\"label-input am-ft-black\">\n");
      out.write("                    <input type=\"checkbox\" id=\"selectDeleteAll\" name=\"\"  value=\"\"  ng-click=\"setDeleteCheckAll()\"/>全选\n");
      out.write("          \t\t</label>\n");
      out.write("                    <button type=\"button\" class=\"btn btn-default  white-blue-btn\" ng-click=\"deleteBatch()\">批量删除</button>\n");
      out.write("                <div class=\"fn-clear\"></div>\n");
      out.write("            </div>\n");
      out.write("        </section>\n");
      out.write("\t    <!--分页 start-->\n");
      out.write("\t    <div class=\"pagelist priv-pagelist\" style=\"width: 92.5% !important;\">\n");
      out.write("\t    \t<div id=\"paging\"></div>    \n");
      out.write("\t    </div>\n");
      out.write("\t    <!--分页 end-->\n");
      out.write("   </div>\n");
      out.write("   <!--添加商品弹框-->\n");
      out.write("   <div class=\"addGoodsAndStoreCover\" ng-if='model.isShowFrame==\"1\"' >\n");
      out.write("\t\t<div class=\"AddGoodsAndStoreItem fn-clear \" >\n");
      out.write("\t\t\t<div class=\"addItemTitle\">\n");
      out.write("\t\t\t\t<span>从商品中添加至分类</span>\n");
      out.write("\t\t\t\t<div>\n");
      out.write("\t\t\t\t\t<img src=\"../static/base/images/closelogo.png\" class=\"closeDia\" ng-click=\"closeDia()\"/>\n");
      out.write("\t\t\t\t</div>\t\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div class=\"col-md-12 AddsGoodsscreeningConditionBox \">\n");
      out.write("\t\t\t\t<div class=\"col-md-5 AddsGoodsscreeningCondition\">\n");
      out.write("\t\t\t\t\t<div>商品名称：</div>\n");
      out.write("\t\t\t\t\t<input type=\"text\" name=\"\" ng-model=\"model.proName\" />\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"col-md-4 AddsGoodsscreeningCondition\">\n");
      out.write("\t\t\t\t\t<button class=\"search-btn\" ng-click=\"getModelProList()\">查询</button>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div class=\"col-md-12 addGoodsTableBox\" style=\"max-height:320px;\">\n");
      out.write("\t\t\t<form id=\"proInfo\">\t\n");
      out.write("\t\t\t\t<table class=\"addGoodsTable\">\n");
      out.write("\t\t\t\t\t<tr>\n");
      out.write("\t\t\t\t\t\t<th scope=\"col\" width=\"5%\"></th>\n");
      out.write("\t\t\t\t\t\t<th scope=\"col\" width=\"20%\">商品名称</th>\n");
      out.write("\t\t\t\t\t\t<th scope=\"col\" width=\"15%\">价格</th>\n");
      out.write("\t\t\t\t\t\t<th scope=\"col\" width=\"15%\">品类</th>\n");
      out.write("\t\t\t\t\t\t<th scope=\"col\" width=\"15%\">库存</th>\n");
      out.write("\t\t\t\t\t\t<th scope=\"col\" width=\"15%\">销量</th>\n");
      out.write("\t\t\t\t\t</tr>\n");
      out.write("\t\t\t\t\t<tr ng-repeat=\"pro in proList\">\n");
      out.write("\t\t\t\t\t\t<td style=\"border-right: none;\">\n");
      out.write("\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"mgr0 code_addcheckbox\" name=\"productInfo\" ng-click=\"selectAddProduct(this)\" />\n");
      out.write("\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t<td style=\"border-left: none;\">{{pro.proName}}</td>\n");
      out.write("\t\t\t\t\t\t<td >\n");
      out.write("\t\t\t\t\t\t\t<p ng-if=\"pro.maxPrice==pro.minPrice\">¥{{pro.minPrice}}</p>\n");
      out.write("\t                        <p ng-if=\"pro.maxPrice!=pro.minPrice\">¥{{pro.minPrice}}~{{pro.maxPrice}}</p>\n");
      out.write("\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t<td >{{pro.sortName}}</td>\n");
      out.write("\t\t\t\t\t\t<td >\n");
      out.write("\t                  \t\t{{pro.sumStkOnHand}}\n");
      out.write("\t                    </td> \n");
      out.write("\t                   <td >\n");
      out.write("\t                  \t\t{{pro.sumQtyCmtd}}\n");
      out.write("\t                    </td> \n");
      out.write("\t\t\t\t\t</tr>\n");
      out.write("\t\t\t\t</table>\n");
      out.write("\t\t\t\t</form>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div class=\"col-md-12 checkAllBar\">\n");
      out.write("\t\t\t\t<!--<label >\r\n");
      out.write("\t\t\t\t\t<input  type=\"checkbox\" ng-model=\"currentPage\" ng-checked=\"currentPage\" ng-click=\"selectProduct(products,'2')\"/>\r\n");
      out.write("\t\t\t\t\t全选当前页\r\n");
      out.write("\t\t\t\t</label>-->\n");
      out.write("\t\t\t\t<label >\n");
      out.write("\t\t\t\t\t<input type=\"checkbox\" id=\"selectAddAll\" ng-click=\"setAddCheckAll()\"/>\n");
      out.write("\t\t\t\t\t全选\n");
      out.write("\t\t\t\t</label>\n");
      out.write("\t\t\t\t<div class=\"priv-pagelist fn-left\" style=\"margin: 0;width: 85%;\">\n");
      out.write("\t\t\t\t<div id=\"paging1\"></div>    \n");
      out.write("   \t\t\t\t </div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div class=\"fn-clear\"></div>\n");
      out.write("\t\t\t<div class=\"AddsGoodsItemBoundary\"></div>\n");
      out.write("\t\t\t<div class=\"AddsGoodsBtnBox\">\n");
      out.write("\t\t\t\t<button ng-click=\"closeDia()\">取消</button>\n");
      out.write("\t\t\t\t<button ng-click=\"saveModelGroupDetail()\">添加</button>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t</div>\n");
      out.write("\t\t</div>\n");
      out.write("   <!--/添加商品弹框-->\n");
      out.write("    <!--下架弹框-->\n");
      out.write("    <div class=\"maskbgCover fn-hide\" id=\"downProduct\">\n");
      out.write("\t<div class=\"isTipsFrame \">\n");
      out.write("\t\t<div class=\"isTipsFrameTitle\">\n");
      out.write("\t\t\t<span class=\"am-ft-14 am-ft-black\">提示</span>\n");
      out.write("\t\t\t<img class=\"fn-right closeDia\" ng-click=\"closeDia()\" src=\"../static/base/images/closelogo.png\" />\n");
      out.write("\t\t</div>\n");
      out.write("\t\t<div class=\"isTipsFrameContent am-ft-14 fn-clear\">\n");
      out.write("\t\t\t<div class=\"fn-left wdpro-frameL\">\n");
      out.write("\t\t\t\t<img src=\"../static/base/images/icon_cue.png\" />\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div class=\"fn-left wdpro-frameR\">\n");
      out.write("\t\t\t\t<p class=\"am-ft-black am-ft-14\">确认下架</p>\n");
      out.write("\t\t\t\t<p class=\"am-ft-black am-ft-12\">下架后，商品不对用户可见，是否确认下架？ </p>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t</div>\n");
      out.write("\t\t<div class=\"isTipsFrameFooter\">\n");
      out.write("\t\t\t<button class=\"closeDia whiteGroundBlueBtn\" ng-click=\"\">取消</button>\n");
      out.write("\t\t\t<button class=\"blueGroundWhiteBtn\" ng-click=\"\">下架</button>\n");
      out.write("\t\t</div>\n");
      out.write("\t</div>\n");
      out.write("</div>\n");
      out.write("    <!--/下架弹框-->\n");
      out.write("<script type=\"text/javascript\">\n");
      out.write("    //搜索方式\n");
      out.write("    $(\".isTipsFrame\").center();\n");
      out.write("  //二维码尺寸滑块选择\n");
      out.write("    $('.set-codeSize').click(function(){\n");
      out.write("        $('.codeSize-dialog').toggle();\n");
      out.write("    });\n");
      out.write("   \t\t $(\".AddGoodsAndStoreItem\").center();\n");
      out.write("\t\t$('.addGoodsAndStoreCover').click(function(e) {\n");
      out.write("\t\tif(e.target.className == \"addGoodsAndStoreCover ng-scope\") {\n");
      out.write("\t\t\t$('.addGoodsAndStoreCover').hide();\n");
      out.write("\t\t}\n");
      out.write("\t\t});\n");
      out.write("//\t\t$(\".closeDia\").click(function(){\r\n");
      out.write("//\t\t\t$(\".AddGoodsAndStoreItem,.addGoodsAndStoreCover\").hide();\r\n");
      out.write("//\t\t}); \n");
      out.write("</script>\n");
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
