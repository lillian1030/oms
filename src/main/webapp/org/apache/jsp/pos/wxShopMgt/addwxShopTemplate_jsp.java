/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-02-19 08:37:36 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.pos.wxShopMgt;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class addwxShopTemplate_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<!--添加微店页面-->\r\n");
      out.write("<!--------------- Content start ----------------->\r\n");
      out.write("<div class=\"content-wrapper content-forwardAdd-wrapper pb20\">\r\n");
      out.write("\t<div class=\"col-md-11 pageTitl\">\r\n");
      out.write("\t\t<h2 class=\"am-ft-16 fn-left\">请填写以下信息完成开店，微店开通后可在此平台管理，也可在微信小程序“店易宝”中管理</h2>\r\n");
      out.write("\t\t<!--<a href=\"javascript:;\" class=\"line-btn fn-right\" ng-click=\"goback()\">返回</a>-->\r\n");
      out.write("\t</div>\r\n");
      out.write("\t<div class=\"fn-clear\"></div>\r\n");
      out.write("\t<section class=\"container-fluid col-md-11 pl0 pr0 mgl20 mgt30\">\r\n");
      out.write("\t\t<form id=\"\" name=\"myForm\" novalidate class=\"col-md-8  pl0 pr0  wx-content-left\">\r\n");
      out.write("\t\t\t<div class=\"row\">\r\n");
      out.write("\t\t\t\t<div class=\"prodet-nav\">\r\n");
      out.write("\t\t\t\t\t<div class=\"prodet-box pdl15 pr0\">\r\n");
      out.write("\t\t\t\t\t\t<!-- row1 -->\r\n");
      out.write("\t\t\t\t\t\t<div class=\"row\">\r\n");
      out.write("\t\t\t\t\t\t\t<div class=\"nowraps-text inprodet-titl am-ft-14 mgt25 col-md-3\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<em class=\"am-ft-red mgr5\">*</em>微店logo：\r\n");
      out.write("\t\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t\t<div class=\"col-md-3  memImg mgl0\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"file\"  ngf-select=\"uploadFiles($files)\"/>\r\n");
      out.write("\t\t\t\t\t\t\t\t<!--<img class=\"media-object\" ng-src=\"{{imagesPath}}\" height=\"85\" alt=\"请选择商户logo\">-->\r\n");
      out.write("\t\t\t\t\t\t\t\t<img class=\"media-object\" ng-src=\"{{imagesPath}}\" height=\"85\" alt=\"请选择商户logo\">\r\n");
      out.write("\t\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t\t<p class=\"am-ft-red note-shoplogo fn-left\">(请上传80*80以上图片，小于3M)</p>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t<!-- row2 -->\r\n");
      out.write("\t\t\t\t\t\t<div class=\"row\">\r\n");
      out.write("\t\t\t\t\t\t\t<div class=\"nowraps-text inprodet-titl am-ft-14 col-md-3\"><em class=\"am-ft-red mgr5\">*</em>微店名称：</div>\r\n");
      out.write("\t\t\t\t\t\t\t<div class=\"col-md-8 form-group needValInfo\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"text\" class=\"col-md-6 text-overflow\" name=\"\" ng-model=\"shopName\" placeholder=\"\" value=\"\" required/>\r\n");
      out.write("\t\t\t\t\t\t\t\t<span class=\"am-ft-gray mgl10\">请在1-14个字内输入</span>\r\n");
      out.write("\t\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t<!-- row2 -->\r\n");
      out.write("\t\t\t\t\t\t<div class=\"row\">\r\n");
      out.write("\t\t\t\t\t\t\t<div class=\"nowraps-text inprodet-titl am-ft-14 col-md-3\"><em class=\"am-ft-red mgr5\">*</em>行业类型：</div>\r\n");
      out.write("\t\t\t\t\t\t\t<div class=\"col-md-6 form-group needValInfo\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<select name=\"\" id=\"\" class=\"col-md-8\" ng-model=\"type\"  ng-options=\"type.value as type.name for type in types\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<!--<option value=\"\">请选择</option>-->\r\n");
      out.write("\t\t\t\t\t\t\t\t</select>\r\n");
      out.write("\t\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t<!-- row3 -->\r\n");
      out.write("\t\t\t\t\t\t<div class=\"row\">\r\n");
      out.write("\t\t\t\t\t\t\t<div class=\"nowraps-text inprodet-titl am-ft-14 col-md-3\"><em class=\"am-ft-red mgr5\">*</em>地区：</div>\r\n");
      out.write("\t\t\t\t\t\t\t<div class=\"col-md-9 form-group needValInfo\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<!--<select class=\"col-md-3 mgr5 shopAddr1\" ng-options=\"province.name for province in provinces\" ng-model=\"province\" ng-change=\"member.city='';member.district='';\">-->\r\n");
      out.write("\t\t\t\t\t\t\t\t<select class=\"col-md-5 mgr5 shopAddr1\" ng-model=\"shopList[0].province\" ng-change=\"shopList[0].district='';shopList[0].city='';initprovinces()\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<option value=\"\">请选择省</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<option ng-repeat=\"province in provinces\" value=\"{{province.name}}\">{{province.name}}</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t</select>\r\n");
      out.write("\t\t\t\t\t\t\t\t<select class=\"col-md-5 mgr5 shopAddr2\" ng-model=\"shopList[0].city\" ng-change=\"shopList[0].district='';initcitys()\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<option value=\"\">请选择市</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<option ng-repeat=\"city in citys[provinceId]\" value=\"{{city.name}}\">{{city.name}}</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t</select>\r\n");
      out.write("\t\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t<!--row4-->\r\n");
      out.write("\t\t\t\t\t\t<!-- row5 -->\r\n");
      out.write("\t\t\t\t\t\t<div class=\"row\">\r\n");
      out.write("\t\t\t\t\t\t\t<div class=\"nowraps-text inprodet-titl am-ft-14 col-md-3\"><em class=\"am-ft-red mgr5\">*</em>微店管理者姓名：</div>\r\n");
      out.write("\t\t\t\t\t\t\t<div class=\"col-md-9 form-group needValInfo\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"text\" class=\"col-md-5 text-overflow\" name=\"\" ng-model=\"contacts\" placeholder=\"\" value=\"\" required>\r\n");
      out.write("\t\t\t\t\t\t\t\t<!--<span class=\"am-ft-red mgl10\" ng-show=\"myForm.contacts.$invalid\">联系人是必须的。</span>-->\r\n");
      out.write("\t\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t<!-- row6 -->\r\n");
      out.write("\t\t\t\t\t\t<div class=\"row\">\r\n");
      out.write("\t\t\t\t\t\t\t<div class=\"nowraps-text inprodet-titl am-ft-14 col-md-3\"><em class=\"am-ft-red mgr5\">*</em>微店管理者手机：</div>\r\n");
      out.write("\t\t\t\t\t\t\t<div class=\"col-md-9 form-group needValInfo\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"text\" class=\"col-md-5 text-overflow\" name=\"\" ng-model=\"shopTel\" placeholder=\"\" value=\"\" required>\r\n");
      out.write("\t\t\t\t\t\t\t\t<!--<span class=\"am-ft-red mgl10\" ng-show=\"myForm.shopTel.$invalid\">联系电话是必须的。</span>-->\r\n");
      out.write("\t\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t<div class=\"row\">\r\n");
      out.write("\t\t\t\t\t\t\t<div class=\"nowraps-text inprodet-titl am-ft-14 col-md-3\">&nbsp;</div>\r\n");
      out.write("\t\t\t\t\t\t\t<div class=\"col-md-9\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary addBrandBtn mgl0\" ng-click = \"saveWxShop(shopList[0].province,shopList[0].city)\">确认开通</button>\r\n");
      out.write("\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default mgl10\">取消</button></div>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<!--<button type=\"button\" class=\"btn btn-primary addBrandBtn\" ng-click=\"addDealer(shopList[0].province,shopList[0].city,shopList[0].district)\">确认开通</button>\r\n");
      out.write("\t\t\t<button type=\"button\" class=\"btn btn-default mgl10\" ng-click=\"goback()\">取消</button>-->\r\n");
      out.write("\t\t</form>\r\n");
      out.write("\t\t<div class=\"col-md-4 pl15 pr0  wx-content-right\">\r\n");
      out.write("\t\t\t<p>注册成功后，</p>\r\n");
      out.write("\t\t\t<p>在微信小程序“店易宝”中以管理员手机登录管理微店</p>\r\n");
      out.write("\t\t\t<div class=\"mgt20\">\r\n");
      out.write("\t\t\t\t<img src=\"http://base-static.oss-cn-hangzhou.aliyuncs.com/base/images/icon_code_%20program.png\" alt=\"\" />\r\n");
      out.write("\t\t\t\t<!--<p class=\"tip mgt2\">微信扫一扫进入“店易宝”</p>-->\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</section>\r\n");
      out.write("</div>\r\n");
      out.write("<!--添加微店页面-->");
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
