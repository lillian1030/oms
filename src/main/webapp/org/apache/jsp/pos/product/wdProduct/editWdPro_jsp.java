/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-06-12 06:00:03 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.pos.product.wdProduct;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class editWdPro_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<!--Ztree-->\n");
      out.write("\n");
      out.write("<!--遮罩 start-->\n");
      out.write("\n");
      out.write("<!--遮罩 end-->\n");
      out.write("\n");
      out.write("<!---- Content Wrapper start ---->\n");
      out.write("<div class=\"content-wrapper\">\n");
      out.write("\t<!-- Main content -->\n");
      out.write("\t<div class=\"col-md-11 pageTitl\">\n");
      out.write("\t\t<h2 class=\"am-ft-16 fn-left\">编辑商品</h2>\n");
      out.write("\t\t<a href=\"javascript:;\" class=\"line-btn fn-right\" ng-click=\"goback()\">返回</a>\n");
      out.write("\t</div>\n");
      out.write("\t<div class=\"fn-clear\"></div>\n");
      out.write("\t\t<section class=\"container-fluid\">\n");
      out.write("\t\t\t<div class=\"row\">\n");
      out.write("\t\t\t\t<div class=\"prodet-nav prodet-content\">\n");
      out.write("\t\t\t\t\t<div class=\"prodet-box\">\n");
      out.write("\t\t\t\t\t<form id=\"addproductForm\">\n");
      out.write("\t\t\t\t\t\t<!----row3---->\n");
      out.write("\t\t\t\t\t\t<div class=\"row\">\n");
      out.write("\t\t\t\t\t\t\t<div class=\"nowraps-text inprodet-titl am-ft-14\">\n");
      out.write("\t\t\t\t\t\t\t\t<em class=\"am-ft-red mgr5\">*</em>品类：\n");
      out.write("\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t<div class=\"col-md-2 form-group pr0 mgr5\" id=\"ProSorts\">\n");
      out.write("\t\t\t\t\t\t\t\t<select class=\"col-md-12\"\n");
      out.write("\t\t\t\t\t\t\t\t\tng-options=\"g.sortId as g.sortName for g in item0\"\n");
      out.write("\t\t\t\t\t\t\t\t\tng-model=\"proSortId\" ng-change=\"changeSort(proSortId)\" ng-disabled=\"true\">\n");
      out.write("\t\t\t\t\t\t\t\t</select>\n");
      out.write("\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t<!--row4\n");
      out.write("\t\t\t\t\t\t<div class=\"row\">\n");
      out.write("\t\t\t\t\t\t\t<div class=\"nowraps-text inprodet-titl am-ft-14\">\n");
      out.write("\t\t\t\t\t\t\t\t<em class=\"am-ft-red mgr5\">*</em>单位：\n");
      out.write("\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t<div class=\"col-md-2 form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"\" value=\"{{pro.proUom}}\" />\n");
      out.write("\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t</div>--row5---->\n");
      out.write("\t\t\t\t\t\t<div class=\"row\" ng-if=\"proSortId=='130906331'\">\n");
      out.write("\t\t\t\t\t\t\t<div class=\"nowraps-text inprodet-titl am-ft-14\">商品属性：</div>\n");
      out.write("\t\t\t\t\t\t\t<div class=\"col-md-10 form-group pro-property\">\n");
      out.write("\t\t\t\t\t\t\t\t<!--inner row1-->\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"row\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 inprodet-titl am-ft-12\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<em class=\"am-ft-red mgr5\">*</em>货号：\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"text-overflow\" name=\"proModelnum\"\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"\" value=\"{{pro.proModelnum}}\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 inprodet-titl am-ft-12\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<em class=\"am-ft-red mgr5\">*</em>品牌：\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"brandName\" placeholder=\"\" value=\"{{pro.brandName}}\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 inprodet-titl am-ft-12\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<em class=\"am-ft-red mgr5\">*</em>年份：\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<select name=\"proYear\" class=\"col-md-8\" ng-model=\"pro.proYear\"\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\tng-change=\"changeProName(itemsSort,itemsSelectSortId)\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<option value=\"{{year}}\" ng-repeat=\"year in years\">{{year}}</option>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</select>\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 inprodet-titl am-ft-12\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<em class=\"am-ft-red mgr5\">*</em>季节：\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<select name=\"proSeason\" class=\"col-md-8\" ng-model=\"pro.proSeason\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<option value=\"春\">春</option>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<option value=\"夏\">夏</option>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<option value=\"秋\">秋</option>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<option value=\"冬\">冬</option>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</select>\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t</div>\t\t\t\t\t\t\n");
      out.write("\n");
      out.write("\t\t\t\t\t\t<div class=\"row\" ng-if=\"proSortId=='130906332'\">\n");
      out.write("\t\t\t\t\t\t\t<div class=\"nowraps-text inprodet-titl am-ft-14\">商品属性：</div>\n");
      out.write("\t\t\t\t\t\t\t<div class=\"col-md-10 form-group pro-property\">\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"row\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 inprodet-titl am-ft-12\">品牌：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"col-md-8 text-overflow\" ng-model=\"proAttrArr[0].attrValue\" name=\"\" placeholder=\"\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 inprodet-titl am-ft-12\">生产产家：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"col-md-8 text-overflow\" ng-model=\"proAttrArr[1].attrValue\" placeholder=\"\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"row\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 inprodet-titl am-ft-12\"><em class=\"am-ft-red mgr5\">*</em>净重(g)：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"col-md-8 text-overflow\" ng-model=\"proAttrArr[2].attrValue\" name=\"\" placeholder=\"\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 inprodet-titl am-ft-12\">生产日期：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"col-md-8 text-overflow\" ng-model=\"proAttrArr[3].attrValue\" placeholder=\"\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"row\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 inprodet-titl am-ft-12\">保质期：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"col-md-8 text-overflow\" ng-model=\"proAttrArr[4].attrValue\" name=\"\" placeholder=\"\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 inprodet-titl am-ft-12\">食品添加剂：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"col-md-8 text-overflow\" ng-model=\"proAttrArr[5].attrValue\" placeholder=\"\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"row\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 inprodet-titl am-ft-12\">适用年龄：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"col-md-8 text-overflow\" ng-model=\"proAttrArr[6].attrValue\" name=\"\" placeholder=\"\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 inprodet-titl am-ft-12\"><em class=\"am-ft-red mgr5\">*</em>产地：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"col-md-8 text-overflow\" ng-model=\"proAttrArr[7].attrValue\" placeholder=\"\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\n");
      out.write("\t\t\t\t\t\t<div class=\"row\" ng-if=\"proSortId=='130906333'\">\n");
      out.write("\t\t\t\t\t\t\t<div class=\"nowraps-text inprodet-titl am-ft-14\">商品属性：</div>\n");
      out.write("\t\t\t\t\t\t\t<div class=\"col-md-10 form-group pro-property\">\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"row\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 inprodet-titl am-ft-12\">货号：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"col-md-8 text-overflow\" name=\"\" ng-model=\"proAttrArr[0].attrValue\" placeholder=\"\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 inprodet-titl am-ft-12\">品牌：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"col-md-8 text-overflow\" name=\"\" ng-model=\"proAttrArr[1].attrValue\" placeholder=\"\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"row\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 inprodet-titl am-ft-12\"><em class=\"am-ft-red mgr5\">*</em>材质：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"col-md-8 text-overflow\" name=\"\" ng-model=\"proAttrArr[2].attrValue\" placeholder=\"\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 inprodet-titl am-ft-12\">尺寸：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"col-md-8 text-overflow\" name=\"\" ng-model=\"proAttrArr[3].attrValue\" placeholder=\"\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"row\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 inprodet-titl am-ft-12\"><em class=\"am-ft-red mgr5\">*</em>适用年龄：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"col-md-8 text-overflow\" name=\"\" ng-model=\"proAttrArr[4].attrValue\" placeholder=\"\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\n");
      out.write("\t\t\t\t\t\t<div class=\"row\" ng-if=\"proSortId=='130906334'\">\n");
      out.write("\t\t\t\t\t\t\t<div class=\"nowraps-text inprodet-titl am-ft-14\">商品属性：</div>\n");
      out.write("\t\t\t\t\t\t\t<div class=\"col-md-10 form-group pro-property\">\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"row\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 inprodet-titl am-ft-12\">货号：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"col-md-8 text-overflow\" name=\"\" ng-model=\"proAttrArr[0].attrValue\" placeholder=\"\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 inprodet-titl am-ft-12\"><em class=\"am-ft-red mgr5\">*</em>品牌：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"col-md-8 text-overflow\" name=\"\" ng-model=\"proAttrArr[1].attrValue\" placeholder=\"\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"row\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 inprodet-titl am-ft-12\"><em class=\"am-ft-red mgr5\">*</em>产地：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"col-md-8 text-overflow\" name=\"\" ng-model=\"proAttrArr[2].attrValue\" placeholder=\"\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 inprodet-titl am-ft-12\">功效：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"col-md-8 text-overflow\" name=\"\" ng-model=\"proAttrArr[3].attrValue\" placeholder=\"\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"row\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 inprodet-titl am-ft-12\">适合肤质：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"col-md-8 text-overflow\" name=\"\" ng-model=\"proAttrArr[4].attrValue\" placeholder=\"\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 inprodet-titl am-ft-12\">适用年龄：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"col-md-8 text-overflow\" name=\"\" ng-model=\"proAttrArr[5].attrValue\" placeholder=\"\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t<!--row6-->\n");
      out.write("\t\t\t\t\t\t<div class=\"row\">\n");
      out.write("\t\t\t\t\t\t\t<div class=\"nowraps-text inprodet-titl am-ft-14\"><em class=\"am-ft-red mgr5\">*</em>商品名称：</div>\n");
      out.write("\t\t\t\t\t\t\t<div class=\"col-md-8 form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"text\" class=\"col-md-8 text-overflow\" name=\"proName\" placeholder=\"\" value=\"{{pro.proName}}\" />\n");
      out.write("\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t<!----row7--\n");
      out.write("\t\t\t\t\t\t<div class=\"row\">\n");
      out.write("\t\t\t\t\t\t\t<div class=\"nowraps-text inprodet-titl am-ft-14\"><em class=\"am-ft-red mgr5\">*</em>价格：</div>\n");
      out.write("\t\t\t\t\t\t\t<div class=\"col-md-2 form-group needValInfo\">\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"text\" class=\"col-md-10 text-overflow\" name=\"proPrice\" placeholder=\"\" value=\"{{pro.proPrice}}\" />&nbsp;元\n");
      out.write("\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t</div>-->\n");
      out.write("\t\t\t\t\t\t</form>\n");
      out.write("\t\t\t\t\t\t<!----row8商品规格---->\n");
      out.write("\t\t\t\t\t\t<form id=\"productListForm\">\n");
      out.write("\t\t\t\t\t\t<div class=\"row\">\n");
      out.write("\t\t\t\t\t\t\t<div class=\"nowraps-text inprodet-titl am-ft-14\"><em class=\"am-ft-red mgr5\">*</em>商品规格：</div>\n");
      out.write("\t\t\t\t\t\t\t<!----innerrow7-1 选择颜色---->\n");
      out.write("\t\t\t\t\t\t\t<div class=\"col-md-10 form-group pro-property saleSumary-wrapper pt10 pb0\">\n");
      out.write("\t\t\t\t\t\t\t\t<!--inner row1-->\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"col-md-8 am-ft-12 am-ft-left paddinglr0 mgb0\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<span class=\"mgl10\">请选择本商品规格</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t<button class=\"addBtnBlue\" ng-click=\"editCategory()\">+添加规格</button>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"firstTab col-md-8  pl0 mgl0 addPro_tab\" style=\"background: none;\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<ul class=\"fn-clear pl0\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<li class=\"fn-left\" ng-repeat=\"sepcGroup in productSpecGroup\" ng-if=\"proSortId!='130906331'\" ng-class='{\"tabactive\":tabType==sepcGroup.specGroupIndex}' ng-click='shiftStandardTab(sepcGroup.specGroupIndex)'>{{sepcGroup.specGroupName}}</li>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<li class=\"fn-left\" ng-if=\"proSortId=='130906331'\" ng-class='{\"tabactive\":tabType==\"0\"}' ng-click='shiftStandardTab1(\"0\")'>颜色</li>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<li class=\"fn-left\" ng-if=\"proSortId=='130906331'\" ng-class='{\"tabactive\":tabType==\"1\"}' ng-click='shiftStandardTab1(\"1\")'>尺码</li>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<!-- <li class=\"fn-left\" ng-class='{\"tabactive\":tabType==\"3\"}' ng-click='shiftStandardTab(\"3\")'>重量</li> -->\n");
      out.write("\t\t\t\t\t\t\t\t\t</ul>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"col-md-12 addStandard_wd\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"fn-clear mgt10\" id=\"productSpecGroup\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<!-- <label class=\"label-input\" ng-repeat=\"productSpec in sepcGroup.productSpec\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" value=\"{{productSpec.productSpecId}}\"/>{{productSpec.specName}}\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</label> -->\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"mgb10\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<button class=\"addBtnBlue mgl10\" ng-click=\"editCategory()\">+添加自定义规格</button>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<span class=\"am-ft-gray\">如果您觉得我们提供的规格无法满足您的需求，您可以手动添加自定义规格</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\n");
      out.write("\t\t\t\t\t\t\t</div>\t\n");
      out.write("\t\t\t\t\t\t\t<!--规格-->\n");
      out.write("\t\t\t\t\t\t\t<div class=\"col-md-1 inprodet-titl\">&nbsp;</div>\n");
      out.write("\t\t\t\t\t\t\t<div ng-if=\"productList.length>0\" class=\"col-md-10 form-group table-responsive corlorSizeTable addPro_wd\" style=\"margin-left: 9px;border:none;\">\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<label class=\"label-input fn-left\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" ng-click=\"unifyAdjustPriceFlag($event,this)\"/>统一设置价格\n");
      out.write("\t\t\t\t\t\t\t\t\t</label>\n");
      out.write("\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"fn-left\" ng-disabled=\"unifyAdjustPriceDis\" ng-model=\"adjustPrice\" ng-change=\"unifyAdjustPrice(this)\"/>\n");
      out.write("\t\t\t\t\t\t\t\t\t<label class=\"label-input mgl10 fn-left\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" ng-click=\"unifyStkOnHandFlag($event,this)\"/>统一设置库存\n");
      out.write("\t\t\t\t\t\t\t\t\t</label>\n");
      out.write("\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"fn-left\" ng-disabled=\"unifyStkOnHandDis\" ng-model=\"stkOnHand\" ng-change=\"unifyStkOnHand(this)\"/>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"mgt10\">\n");
      out.write("\t\t\t\t\t\t\t\t<table  width=\"100%\" class=\"table table-condensed \"  style=\"border: 1px solid #dcdce7;\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<tr id=\"specTable\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<th scope=\"col\" width=\"25%\" ng-repeat=\"item in itemList\">{{item}}</th>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<th scope=\"col\" width=\"25%\">价格</th>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<th scope=\"col\" width=\"25%\">库存</th>\n");
      out.write("\t\t\t\t\t\t\t\t\t</tr>\n");
      out.write("\t\t\t\t\t\t\t\t\t<tr ng-repeat=\"product in productList | orderBy:product.proColorId\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<td ng-if=\"product.item1!=''\">{{product.item1Name}}</td>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<td ng-if=\"product.item2!=''\">{{product.item2Name}}</td>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<td ng-if=\"product.item3!=''\">{{product.item3Name}}</td>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<td ng-if=\"product.proColorId!=''\">{{product.proColorName}}</td>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<td ng-if=\"product.proSize!=''\">{{product.proSizeName}}</td>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<td>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" ng-disabled=\"!unifyAdjustPriceDis\" ng-model=\"product.adjustPrice\"/>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<td>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" ng-disabled=\"!unifyStkOnHandDis\" ng-model=\"product.stkOnHand\"/>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t\t\t\t</tr>\n");
      out.write("\t\t\t\t\t\t\t\t</table>\n");
      out.write("\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t<div class=\"fn-clear\"></div>\n");
      out.write("\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t</form>\t\n");
      out.write("\t\t\t\t\t\t<!----row8商品图片---->\n");
      out.write("\t\t\t\t\t\t<div class=\"row proPic\">\n");
      out.write("\t\t\t\t\t\t\t<div class=\"nowraps-text inprodet-titl am-ft-14 mgl15\">商品图片：</div>\n");
      out.write("\t\t\t\t\t\t\t<div class=\"col-md-10\">\n");
      out.write("\t\t\t\t\t\t\t\t<p class=\"am-ft-red\">(请上传700*700以上图片，小于3M)</p>\n");
      out.write("\t\t\t\t\t\t\t\t<!--row1-->\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"mainPhot\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"row\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<p class=\"am-ft-darkgray mgb15 col-md-12\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-md-2\"><em class=\"am-ft-red mgr5\">*</em>商品主图</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-md-9 mgl35\">细节图<em class=\"line\"></em></span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</p>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\" style=\"width: 20%\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<div class=\"photoBox\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"photoBg\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"files\" ngf-select=\"uploadMain($files,'main1','1')\" value=\"\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"http://static.qineasy.com/base/images/photobg.jpg\" id=\"main1\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"phoboxbt\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<a ng-click=\"clearImage('main1','1')\"><i class=\"fa fa-close\"></i></a>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<a ng-click=\"moveImage('main1','main2','')\"><i class=\"fa fa-chevron-right\"></i></a>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"fn-hide\"><i class=\"fa fa-chevron-left\"></i></a>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-9\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<div class=\"photoBox\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"photoBg\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"files\" ngf-select=\"uploadMain($files,'main2','1')\" value=\"\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"http://static.qineasy.com/base/images/photobg.jpg\" id=\"main2\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"phoboxbt\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<a ng-click=\"clearImage('main2','1')\"><i class=\"fa fa-close\"></i></a>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<a ng-click=\"moveImage('main2','main3','')\"><i class=\"fa fa-chevron-right\"></i></a>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<a ng-click=\"moveImage('main1','main2','')\"><i class=\"fa fa-chevron-left\"></i></a>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<div class=\"photoBox\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"photoBg\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"files\" ngf-select=\"uploadMain($files,'main3','1')\" value=\"\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"http://static.qineasy.com/base/images/photobg.jpg\" id=\"main3\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"phoboxbt\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<a ng-click=\"clearImage('main3','1')\"><i class=\"fa fa-close\"></i></a>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<a ng-click=\"moveImage('main3','main4','')\"><i class=\"fa fa-chevron-right\"></i></a>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<a ng-click=\"moveImage('main2','main3','')\"><i class=\"fa fa-chevron-left\"></i></a>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<div class=\"photoBox\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"photoBg\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"files\" ngf-select=\"uploadMain($files,'main4','1')\" value=\"\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"http://static.qineasy.com/base/images/photobg.jpg\" id=\"main4\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"phoboxbt\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<a ng-click=\"clearImage('main4','1')\"><i class=\"fa fa-close\"></i></a>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<a ng-click=\"moveImage('main4','main5','')\"><i class=\"fa fa-chevron-right\"></i></a>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<a ng-click=\"moveImage('main3','main4','')\"><i class=\"fa fa-chevron-left\"></i></a>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<div class=\"photoBox\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"photoBg\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"files\" ngf-select=\"uploadMain($files,'main5','1')\" value=\"\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"http://static.qineasy.com/base/images/photobg.jpg\" id=\"main5\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"phoboxbt\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<a ng-click=\"clearImage('main5','1')\"><i class=\"fa fa-close\"></i></a>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<a ng-click=\"moveImage('main5','main1','')\"><i class=\"fa fa-chevron-right\"></i></a>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<a ng-click=\"moveImage('main4','main5','')\"><i class=\"fa fa-chevron-left\"></i></a>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t<!--row2-->\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"mainPhot\" ng_repeat=\"colors in ColorNumAndName\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<p class=\"am-ft-darkgray mgb10 col-md-12\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<span class=\"col-md-12\">{{colors.colorName}}<em class=\"line\"></em></span>\n");
      out.write("\t\t\t\t\t\t\t\t\t</p>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"row\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\" style=\"width: 20%\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<div class=\"photoBox\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"photoBg\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" ngf-select=\"uploadMain($files,colors.colorId,'0')\" value=\"\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"http://static.qineasy.com/base/images/photobg.jpg\" id=\"colorPic{{colors.colorId}}\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"phoboxbt\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<a ng-click=\"clearImage(colors.colorId,'0')\"><i class=\"fa fa-close\"></i></a>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t<!--/商品图片-->\n");
      out.write("\t\t\t\t\t\t<!--商品描述-->\n");
      out.write("\t\t\t\t\t\t<!-- 加载编辑器的容器 -->\n");
      out.write("\t\t                <div class=\"row\">\n");
      out.write("\t\t                    <div class=\"nowraps-text inprodet-titl am-ft-14\">商品详情：</div>\n");
      out.write("\t\t                    <div class=\"col-md-10\">\n");
      out.write("\t\t                        <script type=\"text/plain\" id=\"myEditor\"></script>\n");
      out.write("\t\t                        <div class=\"errowTipnav\">\n");
      out.write("\t\t                            <!-- <small class=\"errowTip\">&Cross;&nbsp;&nbsp;输入不能为空</small> -->\n");
      out.write("\t\t                        </div>\n");
      out.write("\t\t                    </div>\n");
      out.write("\t\t                </div>\n");
      out.write("\t\t\t\t\t\t<div class=\"row\">\n");
      out.write("\t\t\t\t\t\t\t<div class=\"nowraps-text inprodet-titl ng-options\"><em class=\"am-ft-red mgr5\">*</em>运费模板：</div>\n");
      out.write("\t\t\t\t\t\t\t<div class=\"col-md-10\">\n");
      out.write("\t\t\t\t\t\t\t\t<select style=\"width: 100px; id=\"logiticTemplateId\" ng-model=\"logiticTemplateId\" ng-options=\"t.logiticTemplateId as t.logiticTemplateName for t in logiticTemplateList\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<option value=\"\">包邮</option>\n");
      out.write("\t\t\t\t\t\t\t\t</select>\n");
      out.write("\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t<div class=\"row\">\n");
      out.write("\t\t\t\t\t\t\t<div class=\"nowraps-text inprodet-titl ng-options\"><em class=\"am-ft-red mgr5\">*</em></div>\n");
      out.write("\t\t\t\t\t\t\t<div class=\"col-md-10\">\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"publishStatus\" value=\"1\" checked/>默认上架商品\n");
      out.write("\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t<div class=\"row\">\n");
      out.write("\t\t\t\t\t\t\t<div class=\"nowraps-text inprodet-titl am-ft-14\" style=\"height: 1px;\"></div>\n");
      out.write("\t\t\t\t\t\t\t<div class=\"col-md-10\">\n");
      out.write("\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary mgr10\" ng-click=\"updateProudctWd()\">保存</button>\n");
      out.write("\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary cancel_btna\" ng-click=\"goback()\">取消</button>\n");
      out.write("\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t<div class=\"fn-clear\"></div>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<!-- /.row -->\n");
      out.write("\t\t</section>\n");
      out.write("\t\n");
      out.write("\t<!-- /.content -->\n");
      out.write("</div>\n");
      out.write("<!----------------- Content Wrapper end ------------------->\n");
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
