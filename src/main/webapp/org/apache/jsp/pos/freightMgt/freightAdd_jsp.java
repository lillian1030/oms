/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-06-13 05:58:40 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.pos.freightMgt;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class freightAdd_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<!--运费模板管理页面-->\n");
      out.write("<div class=\"content-wrapper  fn-clear\">\n");
      out.write("\t<div class=\"wx-content pdl20 fn-clear\">\n");
      out.write("\t\t<div class=\"wx-head freight-header col-md-10 mgb15 pl0 pr0 fn-clear\">\n");
      out.write("\t\t\t<div class=\"wx-title fn-left\">添加运费模板</div>\n");
      out.write("\t\t\t<button type=\"button\" class=\"unionBriefReturn\" ng-click=\"goback()\">返回</button>\n");
      out.write("\t\t</div>\n");
      out.write("\t\t<div class=\"col-md-10 mgb15 pl0 pr0 freight-edit-content\">\n");
      out.write("\t\t\t<div class=\"freight-name freight-row\">\n");
      out.write("\t\t\t\t<span class=\"freight-info-item\">模板名称:</span>\n");
      out.write("\t\t\t\t<input type=\"text\" ng-model=\"logiticTemplateName\" />\n");
      out.write("\t\t\t\t<span class=\"am-ft-gray\">请在1-12个字内输入</span>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div class=\"freight-type fn-clear freight-row\">\n");
      out.write("\t\t\t\t<span class=\"fn-left freight-info-item\">计价方式:</span>\n");
      out.write("\t\t\t\t<label for=\"count\" class=\"fn-left\">\n");
      out.write("\t\t\t\t\t<input type=\"radio\" class=\"mg0\"  value=\"1\" ng-model=\"calType\"  name=\"type\" id=\"count\"/>\n");
      out.write("\t\t\t\t\t按件数\n");
      out.write("\t\t\t\t</label>\n");
      out.write("\t\t\t\t<label for=\"weight\" class=\"fn-left mgl15\">\n");
      out.write("\t\t\t\t\t<input type=\"radio\" name=\"type\" value=\"0\" ng-model=\"calType\" class=\"mg0\" id=\"weight\"/>\n");
      out.write("\t\t\t\t\t按重量\n");
      out.write("\t\t\t\t</label>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div class=\"freight-name freight-row fn-clear\">\n");
      out.write("\t\t\t\t<span class=\"freight-info-item fn-left\">运费设置:</span>\n");
      out.write("\t\t\t\t<span class=\"am-ft-red\">除限定城市区域外其他按默认运费</span>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div class=\"freight-set-wraper col-md-12 pr0 mgb20\" ng-show=\"calType=='1'\">\n");
      out.write("\t\t\t\t<div class=\"freight-set-content\">\n");
      out.write("\t\t\t\t\t<div class=\"freight-set-top mgb10\">\n");
      out.write("\t\t\t\t\t\t<span>默认运费：</span>\n");
      out.write("\t\t\t\t\t\t<span>数量在</span>\n");
      out.write("\t\t\t\t\t\t<input type=\"text\" ng-model=\"details_default_count.baseAmount\" />\n");
      out.write("\t\t\t\t\t\t<span>件内</span>\n");
      out.write("\t\t\t\t\t\t<input type=\"text\" ng-model=\"details_default_count.basePrice\" />\n");
      out.write("\t\t\t\t\t\t<span>元运费，每增加</span>\n");
      out.write("\t\t\t\t\t\t<input type=\"text\" ng-model=\"details_default_count.addAmount\" />\n");
      out.write("\t\t\t\t\t\t<span>件加</span>\n");
      out.write("\t\t\t\t\t\t<input type=\"text\" ng-model=\"details_default_count.addPrice\" />\n");
      out.write("\t\t\t\t\t\t<span>元运费。</span>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<table class=\"table freight-set-table table-hover table-striped table-bordered mgb20\">\n");
      out.write("\t\t\t\t\t\t<tr>\n");
      out.write("\t\t\t\t\t\t\t<th class=\"col-md-3\">运送到</th>\n");
      out.write("\t\t\t\t\t\t\t<th class=\"col-md-2\">首件(个)</th>\n");
      out.write("\t\t\t\t\t\t\t<th class=\"col-md-2\">运费(元)</th>\n");
      out.write("\t\t\t\t\t\t\t<th class=\"col-md-2\">续件(个)</th>\n");
      out.write("\t\t\t\t\t\t\t<th class=\"col-md-2\">运费(元)</th>\n");
      out.write("\t\t\t\t\t\t\t<th class=\"col-md-1\">操作</th>\n");
      out.write("\t\t\t\t\t\t</tr>\n");
      out.write("\t\t\t\t\t\t<tr ng-repeat=\"detail in detail_countArr track by $index\">\n");
      out.write("\t\t\t\t\t\t\t<td>\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"fn-left\" ng-if=\"detail.locationArr.length!=0\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<span ng-repeat=\"location in detail.locationArr track by $index\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<span>{{location.locationName}}</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t<span ng-if=\"$index+1 != detail.locationArr.length\">\n");
      out.write("\t\t\t\t\t\t\t\t\t、\n");
      out.write("\t\t\t\t\t\t\t\t\t</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t</span>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"fn-left\" ng-if=\"detail.locationArr.length==0\">未添加地区</div>\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"fn-right\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" ng-click=\"addArea($index)\">编辑</a>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t\t<td>\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"text\" ng-model=\"detail.baseAmount\" />\n");
      out.write("\t\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t\t<td>\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"text\" ng-model=\"detail.basePrice\" />\n");
      out.write("\t\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t\t<td>\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"text\" ng-model=\"detail.addAmount\" />\n");
      out.write("\t\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t\t<td>\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"text\" ng-model=\"detail.addPrice\" />\n");
      out.write("\t\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t\t<td>\n");
      out.write("\t\t\t\t\t\t\t\t<a href=\"javascript:;\" ng-click=\"deletedetail_countArr($index)\">删除</a>\n");
      out.write("\t\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t</tr>\n");
      out.write("\t\t\t\t\t</table>\n");
      out.write("\t\t\t\t\t<a href=\"javascript:;\" ng-click=\"addCity_count()\">为指定地区城市设置运费</a>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div class=\"freight-set-wraper col-md-12 pr0 mgb20\" ng-show=\"calType=='0'\">\n");
      out.write("\t\t\t\t<div class=\"freight-set-content\">\n");
      out.write("\t\t\t\t\t<div class=\"freight-set-top mgb10\">\n");
      out.write("\t\t\t\t\t\t<span>默认运费：</span>\n");
      out.write("\t\t\t\t\t\t<span>重量在</span>\n");
      out.write("\t\t\t\t\t\t<input type=\"text\" ng-model=\"details_default_weight.baseAmount\" />\n");
      out.write("\t\t\t\t\t\t<span>KG内</span>\n");
      out.write("\t\t\t\t\t\t<input type=\"text\" ng-model=\"details_default_weight.basePrice\" />\n");
      out.write("\t\t\t\t\t\t<span>元运费，每增加</span>\n");
      out.write("\t\t\t\t\t\t<input type=\"text\" ng-model=\"details_default_weight.addAmount\" />\n");
      out.write("\t\t\t\t\t\t<span>KG加</span>\n");
      out.write("\t\t\t\t\t\t<input type=\"text\" ng-model=\"details_default_weight.addPrice\" />\n");
      out.write("\t\t\t\t\t\t<span>元运费。</span>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<table class=\"table freight-set-table table-hover table-striped table-bordered mgb20\">\n");
      out.write("\t\t\t\t\t\t<tr>\n");
      out.write("\t\t\t\t\t\t\t<th class=\"col-md-3\">运送到</th>\n");
      out.write("\t\t\t\t\t\t\t<th class=\"col-md-2\">首重(KG)</th>\n");
      out.write("\t\t\t\t\t\t\t<th class=\"col-md-2\">运费(元)</th>\n");
      out.write("\t\t\t\t\t\t\t<th class=\"col-md-2\">续重(KG)</th>\n");
      out.write("\t\t\t\t\t\t\t<th class=\"col-md-2\">运费(元)</th>\n");
      out.write("\t\t\t\t\t\t\t<th class=\"col-md-1\">操作</th>\n");
      out.write("\t\t\t\t\t\t</tr>\n");
      out.write("\t\t\t\t\t\t<tr ng-repeat=\"detail in detail_weightArr track by $index\">\n");
      out.write("\t\t\t\t\t\t\t<td>\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"fn-left\" ng-if=\"detail.locationArr.length!=0\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<span ng-repeat=\"location in detail.locationArr track by $index\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<span>{{location.locationName}}</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t<span ng-if=\"$index+1 != detail.locationArr.length\">\n");
      out.write("\t\t\t\t\t\t\t\t\t、\n");
      out.write("\t\t\t\t\t\t\t\t\t</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t</span>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"fn-left\" ng-if=\"detail.locationArr.length==0\">未添加地区</div>\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"fn-right\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" ng-click=\"addArea($index)\">编辑</a>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t\t<td>\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"text\" ng-model=\"detail.baseAmount\" />\n");
      out.write("\t\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t\t<td>\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"text\" ng-model=\"detail.basePrice\" />\n");
      out.write("\t\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t\t<td>\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"text\" ng-model=\"detail.addAmount\" />\n");
      out.write("\t\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t\t<td>\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"text\" ng-model=\"detail.addPrice\" />\n");
      out.write("\t\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t\t<td>\n");
      out.write("\t\t\t\t\t\t\t\t<a href=\"javascript:;\" ng-click=\"deletedetail_weightArr($index)\">删除</a>\n");
      out.write("\t\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t</tr>\n");
      out.write("\t\t\t\t\t</table>\n");
      out.write("\t\t\t\t\t<a href=\"javascript:;\" ng-click=\"addCity_weight()\">为指定地区城市设置运费</a>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div class=\" freight-row fn-clear\">\n");
      out.write("\t\t\t\t<span class=\"freight-info-item fn-left\">适用微店:</span>\n");
      out.write("\t\t\t\t<div class=\"fn-left fn-clear col-md-11 pl0 pr0\">\n");
      out.write("\t\t\t\t\t<div class=\"fn-left fn-clear freight-useshop mgr20 mgb15\" ng-repeat=\"shopList in shopLists\">\n");
      out.write("\t\t\t\t\t\t<input type=\"checkbox\" class=\"mgr5 mgt0\" ng-click=\"chooseOrgId(shopList.orgId)\">\n");
      out.write("\t\t\t\t\t\t<img ng-src=\"{{shopList.shopLogo}}\" alt=\"\" />\n");
      out.write("\t\t\t\t\t\t<span class=\"mgl10\">{{shopList.shopName}}</span>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div style=\"padding-left: 70px;\">\n");
      out.write("\t\t\t\t<button type=\"button\" class=\"btn btn-primary addBrandBtn mgl0\" ng-click=\"saveFreightTemp()\">保存</button>\n");
      out.write("\t\t\t\t<button type=\"button\" class=\"btn btn-default mgl10\" ng-click=\"goback()\">取消</button>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t</div>\n");
      out.write("\t</div>\n");
      out.write("\n");
      out.write("\t<!--选择区域的弹窗-->\n");
      out.write("\t<div class=\"area-dialog-content\" ng-show=\"showAreaDialog == 'show'\">\n");
      out.write("\t\t<!--<div class=\"area-dialog-content\">-->\n");
      out.write("\t\t<div class=\"area-dialog\">\n");
      out.write("\t\t\t<div class=\"area-dialog-top fn-clear\">\n");
      out.write("\t\t\t\t<span class=\"fn-left\">选择区域</span>\n");
      out.write("\t\t\t\t<a href=\"javascript:;\" ng-click=\"closeDia()\"><img src=\"../static/base/images/closelogo.png\" alt=\"\" class=\"fn-right\" /></a>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div class=\"area-list fn-clear\" ng-repeat=\"arrList in areaArr track by $index\">\n");
      out.write("\t\t\t\t<div class=\"fn-left area-name\">\n");
      out.write("\t\t\t\t\t<input type=\"checkbox\" ng-model=\"arrList.pArea.doSelect\" ng-click=\"selectArea('1',arrList,$index)\" />\n");
      out.write("\t\t\t\t\t<span>\n");
      out.write("\t\t\t\t\t\t<span>{{arrList.pArea.locationName}}</span>\n");
      out.write("\t\t\t\t\t<!--<i class=\"fa fa-caret-down\" ng-if=\"$index!=0\" aria-hidden=\"true\"></i>-->\n");
      out.write("\t\t\t\t\t</span>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"fn-left area-name\" ng-repeat=\"arr in arrList.cArea track by $index\">\n");
      out.write("\t\t\t\t\t<input type=\"checkbox\" ng-model=\"arr.doSelect\" ng-click=\"selectArea('2',arrList,$index)\" />\n");
      out.write("\t\t\t\t\t<span ng-click=\"loadCity(arr,arrList,$event,$index)\">\n");
      out.write("\t\t\t\t\t\t<span>{{arr.locationName}}\n");
      out.write("\t\t\t\t\t\t\t<em class=\"am-ft-red\" ng-if=\"arr.selectCount != 0 \">({{arr.selectCount}})</em>\n");
      out.write("\t\t\t\t\t\t</span>\n");
      out.write("\t\t\t\t\t<i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n");
      out.write("\t\t\t\t\t</span>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div class=\"area-list fn-clear\" ng-repeat=\"specialArea in specialAreaArr track by $index\">\n");
      out.write("\t\t\t\t<div class=\"fn-left area-name\">\n");
      out.write("\t\t\t\t\t<input type=\"checkbox\" ng-model=\"specialArea.pArea.doSelect\" ng-click=\"selectArea('1',specialArea,$index)\" />\n");
      out.write("\t\t\t\t\t<span>{{specialArea.pArea.locationName}}</span>\n");
      out.write("\t\t\t\t\t<!--<i class=\"fa fa-caret-down\" ng-if=\"$index!=0\" aria-hidden=\"true\"></i>-->\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"fn-left area-name\" ng-repeat=\"arr in specialArea.cArea track by $index\" ng-click=\"selectArea('2',specialArea,$index)\">\n");
      out.write("\t\t\t\t\t<input type=\"checkbox\" ng-model=\"arr.doSelect\" />\n");
      out.write("\t\t\t\t\t<span>{{arr.locationName}}</span>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div class=\"area-dialog-bottom\">\n");
      out.write("\t\t\t\t<!--显示城市的弹窗-->\n");
      out.write("\t\t\t\t<div class=\"area-city-content fn-clear fn-hide\" id=\"area-city-content\">\n");
      out.write("\t\t\t\t\t<div class=\"fn-clear\">\n");
      out.write("\t\t\t\t\t\t<div class=\"fn-left mgr15 mgb10\" ng-repeat=\"cityList in cityLists track by $index\">\n");
      out.write("\t\t\t\t\t\t\t<input type=\"checkbox\" ng-model=\"cityList.doSelect\" ng-click=\"selectArea('3',cityList,$index)\" />\n");
      out.write("\t\t\t\t\t\t\t<span>{{cityList.locationName}}</span>\n");
      out.write("\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\"fn-clear\">\n");
      out.write("\t\t\t\t\t\t<button class=\"fn-right\" ng-click=\"closeCityDialog()\">\n");
      out.write("\t\t\t\t\t关闭\n");
      out.write("\t\t\t\t\t\t</button>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"buttondiv\">\n");
      out.write("\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary addBrandBtn mgl0\" ng-click=\"sureAddArea()\">确认</button>\n");
      out.write("\t\t\t\t\t<button type=\"button\" class=\"btn btn-default mgl10\" ng-click=\"closeDia()\">取消</button>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t</div>\n");
      out.write("\n");
      out.write("\t</div>\n");
      out.write("\n");
      out.write("\t<!--选择区域的弹窗-->\n");
      out.write("</div>\n");
      out.write("\n");
      out.write("</div>\n");
      out.write("<script>\n");
      out.write("\t$(\".area-dialog\").center();\n");
      out.write("</script>\n");
      out.write("<!--添加运费模板页面-->\n");
      out.write("\n");
      out.write("<!--添加运费模板页面-->");
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
