/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-04-01 01:56:38 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.pos.promotion;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class addDiscountCardstep1_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("\t\t\t<div class=\"content-wrapper content-wrapper-order disCountCard-content-wrapper\">\r\n");
      out.write("\t\t\t  \t<div class=\"col-md-11  addDiscountNav fn-clear\">\r\n");
      out.write("\t\t\t  \t\t<div class=\"addDiscountNav_01 fn-left\">\r\n");
      out.write("\t\t\t  \t\t\t<span class=\"discound_nav\">卡券信息输入</span>\n");
      out.write("\t\t\t  \t\t</div>\r\n");
      out.write("\t\t\t\t    <div class=\"addDiscountNav_02\">\r\n");
      out.write("\t\t\t  \t\t\t<span class=\"discound_nav\">卡券数量及范围数量</span>\n");
      out.write("\t\t\t\t    </div>\r\n");
      out.write("\t\t\t\t    <div class=\"addDiscountNav_03\">\n");
      out.write("\t\t\t  \t\t\t<span class=\"discound_nav\">添加成功</span>\r\n");
      out.write("\t\t\t\t    </div>\r\n");
      out.write("\t\t\t    </div>\r\n");
      out.write("\t\t\t    <div class=\"fn-clear\"></div>\r\n");
      out.write("\t\t\t\t<div class=\"col-md-11 newDisCountBox fn-clear\">\r\n");
      out.write("\t\t\t\t\t<form id=\"step1\">\r\n");
      out.write("\t\t\t\t\t<div class=\"col-md-12 newDisCountComon fn-clear\">\r\n");
      out.write("\t\t\t\t\t\t<div>卡券名称:</div>\r\n");
      out.write("\t\t\t\t\t\t<div >\r\n");
      out.write("\t\t\t\t\t\t\t<input type=\"text\" ng-model=\"disCountName\" name='disCountName' />\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<div class=\"col-md-12 newDisCountComon fn-clear\">\r\n");
      out.write("\t\t\t\t\t\t<div >类别:</div>\r\n");
      out.write("\t\t\t\t\t\t<div>\r\n");
      out.write("\t\t\t\t\t\t\t<select class=\"discountType\"  ng-model=\"couponModality\" ng-change=\"changeType()\"  name=\"couponModality\">\n");
      out.write("\t\t\t\t\t\t\t\t<option value=\"1\">优惠券</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t<option value=\"0\">折扣券</option>\r\n");
      out.write("\t\t\t\t\t\t\t</select>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<div class=\"col-md-12 newDisCountComon fn-clear\" ng-show=\"showDiscountType=='1'\">\r\n");
      out.write("\t\t\t\t\t\t<div >卡券额度:</div>\r\n");
      out.write("\t\t\t\t\t\t<div>\r\n");
      out.write("\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<input type=\"radio\" class=\"\" value=\"1\"  ng-model=\"amount\" id=\"fixedLimit\" name=\"amount\" ng-click=\"setLimit('1')\">固定额度\r\n");
      out.write("\t\t\t\t\t\t\t</label>\r\n");
      out.write("\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<input type=\"radio\" class=\"\" id=\"randomLimit\" value=\"0\"  ng-model=\"amount\" name=\"amount\" ng-click=\"setLimit('2')\">随机额度\r\n");
      out.write("\t\t\t\t\t\t\t</label>\r\n");
      out.write("\t\t\t\t\t\t\t<div ng-show=\"isLimitshow=='1'\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"text\" class=\"inputSize\" ng-value=\"\" ng-model=\"fixedLimit\" name=\"fixedLimit\" ng-change=\"isNum('2')\"/>&nbsp;元\r\n");
      out.write("\t\t\t\t\t\t\t\t<span ng-show=\"showmess2=='1'\" class=\"am-ft-red\">*请输入合理数字</span>\r\n");
      out.write("\t\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t\t<div ng-show=\"isLimitshow=='0'\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"text\"  class=\"inputSize\" ng-value=\"\" ng-model=\"randomMIn\" name=\"randomMIn\" ng-change=\"isNum('3')\" />&nbsp;元&nbsp;\r\n");
      out.write("\t\t\t\t\t\t\t\t<span class=\"limitLine\">——</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"text\" class=\"inputSize\" ng-value=\"\" ng-model=\"randomMax\" name=\"randomMax\" ng-change=\"isNum('3')\"/>&nbsp;元\r\n");
      out.write("\t\t\t\t\t\t\t\t<span ng-show=\"showmess3=='1'\" class=\"am-ft-red\">*请输入合理数字</span>\n");
      out.write("\t\t\t\t\t\t\t\t<span ng-show=\"showmess3=='2'\" class=\"am-ft-red\">*随机最大值不能小于最小值</span>\r\n");
      out.write("\t\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<div class=\"col-md-12 newDisCountComon fn-clear\" ng-show=\"showDiscountType=='0'\">\r\n");
      out.write("\t\t\t\t\t\t<div >折扣:</div>\r\n");
      out.write("\t\t\t\t\t\t<div>\r\n");
      out.write("\t\t\t\t\t\t\t<input type=\"text\"  class=\"inputWidth\" ng-model=\"discount\" name=\"discount\" placeholder=\"0-10\" ng-change=\"isNum('5')\"/>&nbsp;折&nbsp;\r\n");
      out.write("\t\t\t\t\t\t\t<span ng-show=\"showmess7=='1'\" class=\"am-ft-red\">*请输入0-10范围数字</span>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<div class=\"col-md-12 newDisCountComon fn-clear\">\r\n");
      out.write("\t\t\t\t\t\t<div>满额条件:</div>\r\n");
      out.write("\t\t\t\t\t\t<div >\r\n");
      out.write("\t\t\t\t\t\t\t<span>满</span>\r\n");
      out.write("\t\t\t\t\t\t\t<input type=\"text\" id=\"fullAmount\" class=\"inputSize\" name=\"fullAmounta\" ng-model=\"fullAmounta\" ng-change=\"isNum('1')\" />\r\n");
      out.write("\t\t\t\t\t\t\t<span>元使用</span>\r\n");
      out.write("\t\t\t\t\t\t\t<label class=\"checkbox-inline mgl10\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"notfullAmount\"  ng-model=\"notFullAmount\" />\r\n");
      out.write("\t\t\t\t\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无门槛使用\r\n");
      out.write("\t\t\t\t\t\t\t</label>\r\n");
      out.write("\t\t\t\t\t\t\t<span ng-show=\"showmess6=='1'\" class=\"am-ft-red\">*请输入满额条件</span>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<div class=\"col-md-12 newDisCountComon fn-clear\">\r\n");
      out.write("\t\t\t\t\t\t<div >有效时间:</div>\r\n");
      out.write("\t\t\t\t\t\t<div class=\"setEffectTime\">\r\n");
      out.write("\t\t\t\t\t\t\t<input class=\"laydate-icon \" placeholder=\"开始时间\" type=\"text\" id=\"start\"  ng-model=\"activeTime\" name=\"activeTime\"   style=\"height: 31px;\"/>\r\n");
      out.write("\t\t\t\t\t\t\t<span class=\"setEffectTimeTitl\">——</span>\r\n");
      out.write("\t\t\t\t\t\t\t<input class=\"laydate-icon \" placeholder=\"结束时间\" name=\"lapsedTime\"  ng-model=\"lapsedTime\" type=\"text\" id=\"end\"   style=\"height: 31px;\"/>\n");
      out.write("\t\t\t\t\t\t\t<span ng-show=\"showmess5=='1'\" class=\"setEffectTimeTitl1\">*请选择生效日期或者结束日期</span>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<div class=\"col-md-12 newDisCountComon fn-clear\">\r\n");
      out.write("\t\t\t\t\t\t<div >会员限领:</div>\r\n");
      out.write("\t\t\t\t\t\t<div >\r\n");
      out.write("\t\t\t\t\t\t\t<input type=\"text\" class=\"inputSize\" ng-value=\"\" name=\"limitCollar\" ng-model=\"limitCollar\" ng-change=\"isNum('4')\" />&nbsp;份\r\n");
      out.write("\t\t\t\t\t\t\t<span ng-show=\"showmess4=='1'\" class=\"am-ft-red\">*请输入合理数字</span>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<div class=\"col-md-12 newDisCountComon fn-clear\" ng-show=\"showDiscountType=='1'\">\r\n");
      out.write("\t\t\t\t\t\t<div class=\"\" >可否叠加:</div>\r\n");
      out.write("\t\t\t\t\t\t<div class=\"\">\r\n");
      out.write("\t\t\t\t\t\t\t<label class=\"checkbox-inline\" style=\"width: 162px;\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"isAdd\" name=\"superposition\" ng-model=\"superposition\"  value=\"y\"/>可以与促销活动叠加\r\n");
      out.write("\t\t\t\t\t\t\t</label>\r\n");
      out.write("\t\t\t\t\t\t\t<label class=\"checkbox-inline\" style=\"width: 162px;\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"radio\"  id=\"notAdd\"  ng-model=\"superposition\"  name=\"superposition\" value=\"n\"/>不可与促销活动叠加\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t\t\t\t</label>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<div class=\"col-md-12 newDisCountComon fn-clear\">\r\n");
      out.write("\t\t\t\t\t\t<div class=\"\">卡券类型:</div>\r\n");
      out.write("\t\t\t\t\t\t<div class=\"\">\r\n");
      out.write("\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"radio\" ng-model=\"couponType\" id=\"virtual\" value=\"0\" name=\"couponType\"/>虚拟券\r\n");
      out.write("\t\t\t\t\t\t\t</label>\r\n");
      out.write("\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"object\" ng-model=\"couponType\"  name=\"couponType\" value=\"1\"/>实物券\r\n");
      out.write("\t\t\t\t\t\t\t</label>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<div class=\"col-md-12 newDisCountComon fn-clear\" ng-if=\"couponType=='0'\">\r\n");
      out.write("\t\t\t\t\t\t<div class=\"\" >是否自动发放:</div>\r\n");
      out.write("\t\t\t\t\t\t<div class=\"\">\r\n");
      out.write("\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"radio\"  value=\"y\" id=\"virtual\" ng-model=\"autoProviding\"  name=\"autoProviding\"/>是\r\n");
      out.write("\t\t\t\t\t\t\t</label>\r\n");
      out.write("\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"object\" value=\"n\" ng-model=\"autoProviding\" name=\"autoProviding\"/>否\r\n");
      out.write("\t\t\t\t\t\t\t</label>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t</form>\r\n");
      out.write("\t\t\t\t\t<div class=\"col-md-12 newDisCountComon fn-clear\">\r\n");
      out.write("\t\t\t\t\t\t<div class=\"col-md-2\"></div>\r\n");
      out.write("\t\t\t\t\t\t<div class=\"col-md-10 discountNextBtn\">\r\n");
      out.write("\t\t\t\t\t\t\t<button class=\"upStep whiteGroundBlueBtn mgr5\" ng-click=\"goBack()\">上一步</button>\r\n");
      out.write("\t\t\t\t\t\t\t<button ng-click=\"nextStep(activeTime)\">下一步</button>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t<!--------------- Content end ----------------->\r\n");
      out.write("\t\t\t<script>\r\n");
      out.write("\t\t\t\t$(function(){\r\n");
      out.write("\t\t\t\t\t//选择限量\r\n");
      out.write("\t\t\t\t\t$(\"#fullAmount\").click(function(){\r\n");
      out.write("\t\t\t\t\t\t$(\"#notfullAmount\").removeAttr(\"checked\");\r\n");
      out.write("\t\t\t\t\t});\r\n");
      out.write("\t\t\t\t\t//选择限量\r\n");
      out.write("\t\t\t\t\t$(\"#notfullAmount\").click(function(){\r\n");
      out.write("\t\t\t\t\t\t$(\"#fullAmount\").val(\"\");\r\n");
      out.write("\t\t\t\t\t})\r\n");
      out.write("\t\t\t\t})\r\n");
      out.write("\t\t\t</script>\r\n");
      out.write("\t\t");
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
