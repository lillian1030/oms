/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-03-25 08:29:54 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.tb.saleMgt.saleManage;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class saleManage_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("\n");
      out.write("<!-- <a href=\"javascript:;\" class=\"line-btn forwardTop-goBack\" ng-if=\"type=='1'\" ng-click=\"gobWorkBench()\" >返回</a> -->\n");
      out.write("<div class=\"content-wrapper content-wrapper-itemshow content-wrapper-itemshow2\">\n");
      out.write("\t<div class=\"forwardTop-content fn-left\" ng-if=\"userInfo.orgType == '6'\">\n");
      out.write("\t\t<div class=\"forwardTop-left\">\n");
      out.write("\t\t\t<img ng-src=\"{{orgInfo.shopLogo}}\" ng-if=\"orgInfo.shopLogo != '' \" />\n");
      out.write("\t\t\t<img src=\"http://static.qineasy.com/base/images/img_default_company.png\" ng-if=\"orgInfo.shopLogo == '' \" />\n");
      out.write("\t\t</div>\n");
      out.write("\t\t<div class=\"forwardTop-right\">\n");
      out.write("\t\t\t<div class=\"forwardTop-righttop\">\n");
      out.write("\t\t\t\t<p href=\"javascript:;\" class=\"forwardTop-rightTitl\">{{orgInfo.shopName}}</p>\n");
      out.write("\t\t\t\t<div class=\"fn-clear\"></div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<p class=\"am-ft-black\">\n");
      out.write("\t\t\t\t<span class=\"stores-count\">店铺数：<a href=\"javascript:;\">{{orgInfo.shopNum}}个</a></span>\n");
      out.write("\t\t\t\t<span class=\"mgl10\">运营人员：{{orgInfo.userName}}<!-- <a href=\"javascript:;\"\n");
      out.write("\t\t\t\t\t\tclass=\"mgl5 allotOprate\">更换</a> --></span>\n");
      out.write("\t\t\t</p>\n");
      out.write("\t\t\t<p>联系电话：{{orgInfo.shopTel}}</p>\n");
      out.write("\t\t\t<p>\n");
      out.write("\t\t\t\t<span class=\"fn-left\">详细地址：{{orgInfo.province}}{{orgInfo.city}}{{orgInfo.district}}{{orgInfo.shopAddr}}</span>\n");
      out.write("\t\t\t\t<span class=\"fn-right am-ft-gray\">商户添加时间：{{orgInfo.openDate}}</span>\n");
      out.write("\t\t\t</p>\n");
      out.write("\t\t</div>\n");
      out.write("\t</div>\n");
      out.write("\t<div class=\"fn-clear\"></div>\n");
      out.write("\t<div class=\"ManColTable col-lg-12\">\n");
      out.write("\t\t<!-- 商品列表 -->\n");
      out.write("\t\t<div>\n");
      out.write("\t\t\t\t<div class=\"AddproTabnav\">\n");
      out.write("\t\t\t\t\t<div class=\"tab-item\" ng-class=\"{true:'tabactive'}[productTab=='1']\" ng-click=\"shiftProductTab('1','3')\">在册店铺</div>\n");
      out.write("\t\t\t\t\t<div class=\"tab-item\" ng-class=\"{true:'tabactive'}[productTab=='2']\" ng-click=\"shiftProductTab('2','5')\">暂停店铺</div>\n");
      out.write("\t\t\t\t\t<div class=\"tab-item\" ng-class=\"{true:'tabactive'}[productTab=='3']\" ng-click=\"shiftProductTab('3','6')\">终止店铺</div>\n");
      out.write("\t\t\t\t\t<div class=\"tab-item\" ng-class=\"{true:'tabactive'}[productTab=='4']\" ng-click=\"shiftProductTab('4')\">区域调动</div>\n");
      out.write("\t\t\t\t\t<div class=\"tab-item\" ng-class=\"{true:'tabactive'}[productTab=='5']\" ng-click=\"shiftProductTab('5','')\">全部店铺</div>\n");
      out.write("\t\t\t\t\t<!--<a href=\"javascript:;\" class=\"btn fn-right btn-primary\" ng-show=\"productTab=='1'\" ng-click=\"addData('saleManage','commercialAdd',{},'1')\">添加商户</a>-->\t\t\n");
      out.write("\t\t\t\t\t<a href=\"javascript:;\" class=\"btn fn-right btn-primary\"  ng-click=\"addData('saleManage','contractAdd',{},'2')\">添加合同</a>\n");
      out.write("\t\t\t\t\t<div class=\"fn-clear\"></div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div>\n");
      out.write("\t\t\t\t\t<div class=\"saleSearch\">\n");
      out.write("\t\t\t\t\t\t<form id='search'>\n");
      out.write("\t\t\t\t\t\t\t<div class=\"clientName\">\n");
      out.write("\t\t\t\t\t\t\t\t<span>合同编号：</span>\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"text\" name='inputId' placeholder=\"请输入合同编号\" />\n");
      out.write("\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t<div class=\"clientInfo fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t<p class=\"fn-left pdr20 mgt20\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<span>区域：</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t<!--<select name=\"\" id=\"\" ng-init=\"province='全部'\" ng-model=\"province\" ng-options=\"provinceList.province as provinceList.province for provinceList in provinceLists\">\n");
      out.write("\t\t\t\t\t\t\t\t</select>-->\n");
      out.write("\t\t\t\t\t\t\t\t\t<select name='serviceArea'>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=''></option>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value='杭州'>杭州</option>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value='武汉'>武汉</option>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value='合肥'>合肥</option>\n");
      out.write("\t\t\t\t\t\t\t\t\t</select>\n");
      out.write("\t\t\t\t\t\t\t\t</p>\n");
      out.write("\t\t\t\t\t\t\t\t<p class=\"fn-left pdr20 mgt20\" >\n");
      out.write("\t\t\t\t\t\t\t\t\t<span>产品：</span> \n");
      out.write("\t\t\t\t\t\t\t\t\t<select name=\"productType\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=''></option>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\"客服\">客服</option>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\"美工\">美工</option>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\"运营<\">运营</option>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\"培训\">培训</option>\n");
      out.write("\t\t\t\t\t\t\t\t\t</select>\n");
      out.write("\t\t\t\t\t\t\t\t</p>\n");
      out.write("\t\t\t\t\t\t\t\t<p class=\"fn-left pdr20 mgt20\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<span>商户名称：</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t<select id=\"comCiaList\" class=\"selectpicker\" data-live-search=\"true\" name=\"orgId\" ng-model=\"orgManage\" ng-change=\"getShopList()\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\" \">请选择</option>\n");
      out.write("\t\t\t\t\t\t\t\t\t</select>\n");
      out.write("\t\t\t\t\t\t\t\t</p>\n");
      out.write("\t\t\t\t\t\t\t\t<!--<p class=\"fn-left mgt20\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<span>状态：</span> <select name='contractStatus'>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\"\"></option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\"0\">待审核</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\"1\">待分配</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\"2\">待确认</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\"3\">服务中</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\"4\">已完成</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\"5\">暂停</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\"6\">终止</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\"7\">暂停待审批</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\"8\">终止待审批</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t</select>\r\n");
      out.write("\t\t\t\t\t\t\t\t</p>-->\n");
      out.write("\t\t\t\t\t\t\t\t<p class=\"fn-left pdl15 mgt20\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<button class=\"selectContractBtn\" ng-click=\"searchData()\">查询</button>\n");
      out.write("\t\t\t\t\t\t\t\t</p>\n");
      out.write("\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t</form>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\"productCenterInfo\" >\n");
      out.write("\t\t\t\t\t\t<table class=\"table contractTable\">\n");
      out.write("\t\t\t\t\t\t<tr>\n");
      out.write("\t\t\t\t\t\t\t<th>类型</th>\n");
      out.write("\t\t\t\t\t\t\t<th>合同编号</th>\n");
      out.write("\t\t\t\t\t\t\t<th>商户名称</th>\n");
      out.write("\t\t\t\t\t\t\t<th>服务区域</th>\n");
      out.write("\t\t\t\t\t\t\t<th>服务类型</th>\n");
      out.write("\t\t\t\t\t\t\t<th>产品类型</th>\n");
      out.write("\t\t\t\t\t\t\t<th>合同金额</th>\n");
      out.write("\t\t\t\t\t\t\t<th>已收金额</th>\n");
      out.write("\t\t\t\t\t\t\t<th>合同期限</th>\n");
      out.write("\t\t\t\t\t\t\t<th>签单人</th>\n");
      out.write("\t\t\t\t\t\t\t<th>服务状态</th>\n");
      out.write("\t\t\t\t\t\t\t<th>处理状态</th>\n");
      out.write("\t\t\t\t\t\t</tr>\n");
      out.write("\t\t\t\t\t\t<tr class=\"inServer\" ng-repeat=\"contract in contractList track by $index\">\n");
      out.write("\t\t\t\t\t\t\t<td ng-if=\"contract.contractType=='0'\">新</td>\n");
      out.write("\t\t\t\t\t\t\t<td ng-if=\"contract.contractType=='1'\">续</td>\n");
      out.write("\t\t\t\t\t\t\t<td>{{contract.contractNum}}</td>\n");
      out.write("\t\t\t\t\t\t\t<td><a href=\"javascript:;\" ng-click=\"contractInfo(contract)\">{{contract.shopName}}</a></td>\n");
      out.write("\t\t\t\t\t\t\t<td>{{contract.serviceArea}}</td>\n");
      out.write("\t\t\t\t\t\t\t<td>{{contract.serviceType}}</td>\t\t\n");
      out.write("\t\t\t\t\t\t\t<td>{{contract.productType}}</td>\n");
      out.write("\t\t\t\t\t\t\t<td>{{contract.totalprice}}</td>\n");
      out.write("\t\t\t\t\t\t\t<td>{{contract.payAmount}}</td>\n");
      out.write("\t\t\t\t\t\t\t<td>{{contract.begindate}}至{{contract.enddate}}</td>\n");
      out.write("\t\t\t\t\t\t\t<td>{{contract.signName}}</td>\n");
      out.write("\t\t\t\t\t\t\t<td class=\"status2\" ng-if='contract.contractStatus==\"0\"'>待审核</td>\n");
      out.write("\t\t\t\t\t\t\t<td class=\"status1\" ng-if='contract.contractStatus==\"1\"'>待分配</td>\n");
      out.write("\t\t\t\t\t\t\t<td class=\"status1\" ng-if='contract.contractStatus==\"2\"'>待确认</td>\n");
      out.write("\t\t\t\t\t\t\t<td class=\"status1\" ng-if='contract.contractStatus==\"3\"'>服务中</td>\n");
      out.write("\t\t\t\t\t\t\t<td class=\"status3\" ng-if='contract.contractStatus==\"4\"'>已完成</td>\n");
      out.write("\t\t\t\t\t\t\t<td class=\"status3\" ng-if='contract.contractStatus==\"5\"'>暂停</td>\n");
      out.write("\t\t\t\t\t\t\t<td class=\"status3\" ng-if='contract.contractStatus==\"6\"'>已终止</td>\n");
      out.write("\t\t\t\t\t\t\t<td class=\"status3\" ng-if='contract.contractStatus==\"7\"'>暂停待审批</td>\n");
      out.write("\t\t\t\t\t\t\t<td class=\"status3\" ng-if='contract.contractStatus==\"8\"'>终止待审批</td>\n");
      out.write("\t\t\t\t\t\t\t\n");
      out.write("\t\t\t\t\t\t\t<td class=\"status2\" ng-if='contract.contractStatus==\"0\"'>待处理</td>\n");
      out.write("\t\t\t\t\t\t\t<td class=\"status1\" ng-if='contract.contractStatus==\"1\"'>待处理</td>\n");
      out.write("\t\t\t\t\t\t\t<td class=\"status1\" ng-if='contract.contractStatus==\"2\"'>待处理</td>\n");
      out.write("\t\t\t\t\t\t\t<td class=\"status1\" ng-if='contract.contractStatus==\"3\"'>已处理</td>\n");
      out.write("\t\t\t\t\t\t\t<td class=\"status3\" ng-if='contract.contractStatus==\"4\"'>已完成</td>\n");
      out.write("\t\t\t\t\t\t\t<td class=\"status3\" ng-if='contract.contractStatus==\"5\"'>暂停</td>\n");
      out.write("\t\t\t\t\t\t\t<td class=\"status3\" ng-if='contract.contractStatus==\"6\"'>已终止</td>\n");
      out.write("\t\t\t\t\t\t\t<td class=\"status3\" ng-if='contract.contractStatus==\"7\"'>暂停待审批</td>\n");
      out.write("\t\t\t\t\t\t\t<td class=\"status3\" ng-if='contract.contractStatus==\"8\"'>终止待审批</td>\n");
      out.write("\t\t\t\t\t\t\t<!-- <td class=\"status2\" ng-if='contract.contractStatus>0'>{{contract.contractStatus}}</td>\n");
      out.write("\t\t\t\t\t\t\t<td class=\"status3\" ng-if='contract.contractStatus==\"0\"'>{{contract.contractStatus}}</td> -->\n");
      out.write("\t\t\t\t\t\t</tr>\t\n");
      out.write("\t\t\t\t\t</table>\n");
      out.write("\t\t\t\t\t<div class=\"pagelist priv-pagelist\">\n");
      out.write("\t\t\t\t\t\t<div id=\"paging1\"></div>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"fn-clear\"></div>\n");
      out.write("\t\t\t<!--分页 start-->\n");
      out.write("\t\t\t<!--分页 end-->\n");
      out.write("\t\t</div>\n");
      out.write("\t\t<!-- /商品列表 -->\n");
      out.write("\t</div>\n");
      out.write("\t<div class=\"fn-clear\"></div>\n");
      out.write("</div>\n");
      out.write("<!--发布商品弹框-->\n");
      out.write("<script type=\"text/javascript\">\n");
      out.write("\t$(function(){\n");
      out.write("\t\t$('.selectpicker').selectpicker('refresh');\n");
      out.write("\t})\n");
      out.write("</script>");
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
