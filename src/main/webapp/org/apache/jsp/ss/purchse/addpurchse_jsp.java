/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-02-19 08:37:23 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.ss.purchse;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class addpurchse_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      response.setContentType("text/html;charset=utf-8");
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
      out.write("<div class=\"content-wrapper\">\r\n");
      out.write("\t<div class=\"col-md-11 pageTitl\">\r\n");
      out.write("\t\t<h2 class=\"am-ft-16 fn-left\">添加采购单</h2>\r\n");
      out.write("\t\t<a href=\"javascript:;\"class=\"unionBriefReturn \" ng-click=\"callback()\">返回</a>\r\n");
      out.write("\t</div>\r\n");
      out.write("\t<!-- search -->\r\n");
      out.write("\t<div class=\"listSearch OderlistSearch\">\r\n");
      out.write("\t\t<div class=\"row\">\r\n");
      out.write("\t\t\t<div class=\"col-md-12\">\r\n");
      out.write("\t\t\t\t<p class=\"col-sm-12 control-label mgb10 mgl20\">\r\n");
      out.write("\t\t\t\t\t采购日期: <span>{{createTime | date:'yyyy-MM-dd'}}</span>\r\n");
      out.write("\t\t\t\t</p>\r\n");
      out.write("\t\t\t\t<p class=\"col-sm-12 control-label mgb10 mgl20\">\r\n");
      out.write("\t\t\t\t\t采购单号：<span>{{recievingId}}</span>\r\n");
      out.write("\t\t\t\t</p>\r\n");
      out.write("\t\t\t\t<p class=\"col-sm-12 control-label mgl20\">\r\n");
      out.write("\t\t\t\t\t供货商：<span>{{disWarehName}}</span>\r\n");
      out.write("\t\t\t\t</p>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<div class=\"fn-clear\"></div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</div>\r\n");
      out.write("\t<!-- /search -->\r\n");
      out.write("\r\n");
      out.write("\t<!-- Main content -->\r\n");
      out.write("\t<div class=\"ManColTable col-lg-12\">\r\n");
      out.write("\t\t<form>\r\n");
      out.write("\t\t\t<div class=\"table-responsive PrivTable\">\r\n");
      out.write("\t\t\t\t<table class=\"table table-hover table-striped table-bordered\">\r\n");
      out.write("\t\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t\t<th scope=\"col\">款号</th>\r\n");
      out.write("\t\t\t\t\t\t<th scope=\"col\">款名</th>\r\n");
      out.write("\t\t\t\t\t\t<th scope=\"col\">吊牌价</th>\r\n");
      out.write("\t\t\t\t\t\t<th scope=\"col\">折扣<a href=\"javascript:;\" class=\"mgl5\">批量修改</a></th>\r\n");
      out.write("\t\t\t\t\t\t<th scope=\"col\">采购价</th>\r\n");
      out.write("\t\t\t\t\t\t<th scope=\"col\">数量</th>\r\n");
      out.write("\t\t\t\t\t\t<th scope=\"col\">操作</th>\r\n");
      out.write("\t\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t\t<tr ng-repeat=\"xs in addlist track by $index\">\r\n");
      out.write("                        <td>{{xs.proModelnum}}</td>\r\n");
      out.write("                        <td>{{xs.detail[0].proName}}</td>\r\n");
      out.write("                        <td>{{xs.detail[0].oldunitPrice}}</td>\r\n");
      out.write("                        <td><input class=\"input-mini\" type=\"text\" value=\"{{xs.detail[0].discount}}\" ng-change=\"change(xs.proModelnum,xs.detail[0].discount,'2')\" ng-model=\"xs.detail[0].discount\" /></td>\r\n");
      out.write("                        <td><input class=\"input-mini\" type=\"text\" value=\"{{xs.detail[0].unitPrice}}\" ng-change=\"change(xs.proModelnum,xs.detail[0].unitPrice,'1')\" ng-model=\"xs.detail[0].unitPrice\" /></td>\r\n");
      out.write("                       <td>{{xs.tatil}}</td>\r\n");
      out.write("                        <td>\r\n");
      out.write("                            <a href=\"javascript:;\" class=\"w50 line-btn fn-left\" am-bg=\"blue\"   ng-click=\"editProduct(xs.proModelnum,'0')\" >编辑</a>\r\n");
      out.write("                            <button type=\"button\"  class=\"w50 fn-left line-btn-delete\" ng-click=\"deldetail(this)\" am-bg=\"white\">删除</button>\r\n");
      out.write("                        </td>\r\n");
      out.write("                    </tr>\r\n");
      out.write("                    <tr>\r\n");
      out.write("                        <td colspan=\"7\">\r\n");
      out.write("                            <a href=\"javasctipt:;\" ng-click=\"addproduct('0')\" class=\"fn-left adjBtn\">+&nbsp;选款添加</a>\r\n");
      out.write("                        </td>\r\n");
      out.write("                    </tr>\r\n");
      out.write("\r\n");
      out.write("                </table>\r\n");
      out.write("\r\n");
      out.write("                <div class=\"mgb15 fn-left\">\r\n");
      out.write("                    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"saveProducts('0')\">保存采购单</button>\r\n");
      out.write("                    <button type=\"button\" class=\"btn btn-primary mgl10\" ng-click=\"addAndcommit()\">确定并入库</button>\r\n");
      out.write("                </div>\r\n");
      out.write("                <div class=\"mgt10 mgr5 fn-right\">\r\n");
      out.write("                    <span>共<strong>{{tatilprm}}</strong>款,</span>\r\n");
      out.write("                    <span><strong>{{tatil}}</strong>件,</span>\r\n");
      out.write("                    <span>总计：<strong>{{tatilProce| number:2}}</strong>元</span>\r\n");
      out.write("                </div>\r\n");
      out.write("            </div>\r\n");
      out.write("        </form>\r\n");
      out.write("\r\n");
      out.write("        <div class=\"fn-clear\"></div>\r\n");
      out.write("    </div>\r\n");
      out.write("\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("<!-- 添加采购单--供货商 -->\r\n");
      out.write("<div class=\"am-dialog addColordialog addPurdialog\">\r\n");
      out.write("    <div class=\"am-dialog-wrap\">\r\n");
      out.write("        <div class=\"am-dialog-header\">\r\n");
      out.write("            <h3 class=\"am-ft-center\">添加采购单</h3>\r\n");
      out.write("        </div>\r\n");
      out.write("        <div class=\"am-input needValInfo\">\r\n");
      out.write("            <label class=\"fn-left\">供货商：</label>\r\n");
      out.write("            <input class=\"fn-left am-ft-center\" type=\"text\" id=\"disWarehName\" name=\"disWarehName\" value=\"\" placeholder=\"\" /><br/>\r\n");
      out.write("            <p class=\"am-ft-gray\">提示：请输入采购单的供货商</p>\r\n");
      out.write("            <p class=\"am-ft-red\">确认后，将生成采购单，供货商将不可更改，请慎重！</p>\r\n");
      out.write("            <div class=\"fn-clear\"></div>\r\n");
      out.write("        </div>\r\n");
      out.write("        <div class=\"dialogBtn am-flexbox\">\r\n");
      out.write("            <button type=\"button\" ng-click=\"add()\" class=\"am-flexbox-item btn am-button alterOv \" am-bg=\"blue\">确认</button>\r\n");
      out.write("            <button type=\"button\" ng-click=\"closed()\"class=\"am-flexbox-item btn am-button closeDialog\" am-bg=\"white\">取消</button>\r\n");
      out.write("            <div class=\"fn-clear\"></div>\r\n");
      out.write("        </div>\r\n");
      out.write("    </div>\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("<!-- /添加采购单--供货商 -->\r\n");
      out.write("<!-- /编辑数量弹窗 -->\r\n");
      out.write("<!-- 选款添加弹窗 -->\r\n");
      out.write("<div class=\"am-dialog editInvDialog2 fn-hide addAddDialog\">\r\n");
      out.write("    <i class=\" fa fa-close  closeDia\"></i>\r\n");
      out.write("    <div class=\"am-dialog-wrap\">\r\n");
      out.write("        <!-- search -->\r\n");
      out.write("        <div class=\"listSearch OderlistSearch mgb15\">\r\n");
      out.write("            <form class=\"form-horizontal\">\r\n");
      out.write("                <div class=\"row\">\r\n");
      out.write("                    <div class=\"col-md-12\">\r\n");
      out.write("                        <div class=\"form-group col-md-10 pl0\">\r\n");
      out.write("                            <label class=\"col-sm-4 control-label\">请输入选款号：</label>\r\n");
      out.write("                            <div class=\"col-sm-8 pro-search\">\r\n");
      out.write("                                <input type=\"text\" id=\"addAddId\" class=\"form-control\" placeholder=\"\" />\r\n");
      out.write("                            </div>\r\n");
      out.write("                        </div>\r\n");
      out.write("                        <input type=\"reset\" name=\"reset\" style=\"display: none;\" />\r\n");
      out.write("                        <div class=\"col-md-2 am-ft-center searchBox\">\r\n");
      out.write("                            <button type=\"button\" class=\"btn fn-left btn-primary\" ng-click=\"product('0')\">搜索</button>\r\n");
      out.write("                        </div>\r\n");
      out.write("                        <div class=\"fn-clear\"></div>\r\n");
      out.write("                    </div>\r\n");
      out.write("                </div>\r\n");
      out.write("            </form>\r\n");
      out.write("        </div>\r\n");
      out.write("        <!-- /search -->\r\n");
      out.write("        <ul class=\"media-list\">\r\n");
      out.write("            <li class=\"media\">\r\n");
      out.write("                <div class=\"media-left\">\r\n");
      out.write("                    <a href=\"javascript:;\">\r\n");
      out.write("                        <img id=\"addProUrl\" class=\"media-object\" src=\"../static/base/images/large.png\" width=\"80\" alt=\"商品图片\">\r\n");
      out.write("                    </a>\r\n");
      out.write("                </div>\r\n");
      out.write("                <div class=\"media-body\">\r\n");
      out.write("                    <div class=\"editInvTit\">\r\n");
      out.write("                        <p class=\"col-sm-12 media-heading\">款名:<span>{{mdl.proName}}</span></p>\r\n");
      out.write("                        <p class=\"col-sm-12 media-heading\">款号:<span>{{mdl.proModelnum}}</span></p>\r\n");
      out.write("                        <p class=\"col-sm-3 media-heading\">品类:<span>{{mdl.sortName}}</span></p>\r\n");
      out.write("                        <p class=\"col-sm-4 media-heading\">品牌:<span>{{mdl.brandName}}</span></p>\r\n");
      out.write("                        <p class=\"col-sm-3 media-heading\">年份:<span>{{mdl.proYear}}</span></p>\r\n");
      out.write("                        <p class=\"col-sm-3 media-heading\">季节:<span>{{mdl.proSeason}}</span></p>\r\n");
      out.write("                        <p class=\"col-sm-4 media-heading\">吊牌价:<span>{{mdl.proPrice}}</span></p>\r\n");
      out.write("                        <div class=\"fn-clear\"></div>\r\n");
      out.write("                    </div>\r\n");
      out.write("                </div>\r\n");
      out.write("            </li>\r\n");
      out.write("        </ul>\r\n");
      out.write("           <div class=\"ManColTable col-lg-12\">\r\n");
      out.write("            <form id=\"myform\">\r\n");
      out.write("                <div class=\"table-responsive PrivTable\" style=\"max-height:300px;overflow:auto;\">\r\n");
      out.write("                    <table class=\"table table-hover table-striped table-bordered\">\r\n");
      out.write("                        <tr>\r\n");
      out.write("                            <th width=\"80\" scope=\"col\">颜色/尺码</th>\r\n");
      out.write("                            <th scope=\"col\" ng-repeat=\"xs in cm\">{{xs}}</th>\r\n");
      out.write("                        </tr >\r\n");
      out.write("                    \r\n");
      out.write("                        <tr id=\"tr\">\r\n");
      out.write("<!--                             <th scope=\"row\">合计</th>\r\n");
      out.write("                            <td colspan=\"3\">888</td>\r\n");
      out.write(" -->                        </tr> \r\n");
      out.write(" \t\t\t\t\t\t<input type=\"reset\" name=\"reset\" style=\"display: none;\" />\r\n");
      out.write(" \r\n");
      out.write("                    </table>\r\n");
      out.write("\r\n");
      out.write("                </div>\r\n");
      out.write("\r\n");
      out.write("            </form>\r\n");
      out.write("            <div class=\"fn-clear\"></div>\r\n");
      out.write("        </div>\r\n");
      out.write("    </div>\r\n");
      out.write("    <div class=\"dialogBtn am-flexbox\">\r\n");
      out.write("        <button type=\"button\" class=\"am-flexbox-item btn am-button\" am-bg=\"blue\" ng-click=\"addAddDetail('1')\">确认</button>\r\n");
      out.write("        <button type=\"button\" class=\"am-flexbox-item btn am-button closeDia2\" am-bg=\"white\">取消</button>\r\n");
      out.write("        <div class=\"fn-clear\"></div>\r\n");
      out.write("    </div>\r\n");
      out.write("</div>\r\n");
      out.write("<!-- /选款添加弹窗 -->\r\n");
      out.write("<!-- 编辑数量弹窗 修改-->\r\n");
      out.write("<div class=\"am-dialog addEditInvDialog fn-hide\">\r\n");
      out.write("    <i class=\"fa fa-close closeDia\"></i>\r\n");
      out.write("    <div class=\"am-dialog-wrap\">\r\n");
      out.write("        <ul class=\"media-list\">\r\n");
      out.write("            <li class=\"media\">\r\n");
      out.write("                <div class=\"media-left\">\r\n");
      out.write("                    <a href=\"#\">\r\n");
      out.write("                        <img id=\"addEditProUrl\" class=\"media-object\" src=\"../static/base/images/large.png\" width=\"80\" alt=\"商品图片\">\r\n");
      out.write("                    </a>\r\n");
      out.write("                </div>\r\n");
      out.write("                <div class=\"media-body\">\r\n");
      out.write("                    <div class=\"editInvTit\">\r\n");
      out.write("                        <p class=\"col-sm-12 media-heading\">款名:<span>{{mdl.proName}}</span></p>\r\n");
      out.write("                        <p class=\"col-sm-12 media-heading\">款号:<span>{{mdl.proModelnum}}</span></p>\r\n");
      out.write("                        <p class=\"col-sm-3 media-heading\">品类:<span>{{mdl.sortName}}</span></p>\r\n");
      out.write("                        <p class=\"col-sm-3 media-heading\">品牌:<span>{{mdl.brandName}}</span></p>\r\n");
      out.write("                        <p class=\"col-sm-3 media-heading\">年份:<span>{{mdl.proYear}}</span></p>\r\n");
      out.write("                        <p class=\"col-sm-3 media-heading\">季节:<span>{{mdl.proSeason}}</span></p>\r\n");
      out.write("                        <p class=\"col-sm-3 media-heading\">吊牌价:<span>{{mdl.proPrice}}</span></p>\r\n");
      out.write("                        <input type=\"reset\" name=\"reset\" style=\"display: none;\" />\r\n");
      out.write("                    </div>\r\n");
      out.write("                </div>\r\n");
      out.write("            </li>\r\n");
      out.write("        </ul>\r\n");
      out.write("        <div class=\"ManColTable col-lg-12\">\r\n");
      out.write("            <form>\r\n");
      out.write("                <div class=\"table-responsive PrivTable\" style=\"max-height:300px;overflow:auto;\">\r\n");
      out.write("                    <table class=\"table table-hover table-striped table-bordered\">\r\n");
      out.write("                        <tr>\r\n");
      out.write("                            <th width=\"80\" scope=\"col\">颜色/尺码</th>\r\n");
      out.write("                            <th scope=\"col\" ng-repeat=\"xs in cm\">{{xs}}</th>\r\n");
      out.write("                        </tr >\r\n");
      out.write("                    \r\n");
      out.write("                        <tr id=\"tr2\">\r\n");
      out.write("<!--                             <th scope=\"row\">合计</th>\r\n");
      out.write("                            <td colspan=\"3\">888</td>\r\n");
      out.write(" -->                        </tr> \r\n");
      out.write("                    </table>\r\n");
      out.write("                </div>\r\n");
      out.write("            </form>\r\n");
      out.write("            <div class=\"fn-clear\"></div>\r\n");
      out.write("        </div>\r\n");
      out.write("    </div>\r\n");
      out.write("    <div class=\"dialogBtn am-flexbox\">\r\n");
      out.write("        <button type=\"button\" class=\"am-flexbox-item btn am-button\" am-bg=\"blue\" ng-click=\"UpdateProductDetail('0')\">确认</button>\r\n");
      out.write("        <button type=\"button\" class=\"am-flexbox-item btn am-button closeDia2\" am-bg=\"white\" >取消</button>\r\n");
      out.write("        <div class=\"fn-clear\"></div>\r\n");
      out.write("    </div>\r\n");
      out.write("</div>\r\n");
      out.write("<!-- /编辑数量弹窗 -->\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<!--弹窗 start-->\r\n");
      out.write("<div class=\"am-dialog EditDialog fn-hide\">\r\n");
      out.write("    <form id=\"myform\">\r\n");
      out.write("        <div class=\"am-dialog-wrap\">\r\n");
      out.write("            <div class=\"am-dialog-header\">\r\n");
      out.write("                <h3 class=\"am-ft-center\">确定删除？</h3>\r\n");
      out.write("            </div>\r\n");
      out.write("            <div class=\"dialogBtn am-flexbox\">\r\n");
      out.write("                <button type=\"button\" class=\"am-flexbox-item btn am-button SavEdit deletGroup\" am-bg=\"blue\">确认</button>\r\n");
      out.write("                <button type=\"button\" class=\"am-flexbox-item btn am-button\"  am-bg=\"white\" >取消</button>\r\n");
      out.write("                <div class=\"fn-clear\"></div>\r\n");
      out.write("            </div>\r\n");
      out.write("        </div>\r\n");
      out.write("    </form>\r\n");
      out.write("</div>\r\n");
      out.write("<!--弹窗 end-->\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<script>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("function edit(){\r\n");
      out.write("\t$('.editInvDialog2,.maskBg').show();\r\n");
      out.write("\t};\r\n");
      out.write("\t$('.editInvDialog3').center();\r\n");
      out.write("\t$('.editInvDialog2').center();\r\n");
      out.write("    //输入供货商\r\n");
      out.write("/*     $('.addPurdialog,.maskBg').show(); */\r\n");
      out.write("\r\n");
      out.write("    //弹窗居中\r\n");
      out.write("    $('.EditDialog,.addPurdialog').center();\r\n");
      out.write("    $('.editInvDialog').center();\r\n");
      out.write("    //编辑数量\r\n");
      out.write("/*     $('.adjBtn').click(function(){\r\n");
      out.write("        $('.editInvDialog,.maskBg').show();\r\n");
      out.write("    }); */\r\n");
      out.write("/*     $('.closeDialog').click(function(){\r\n");
      out.write("        $('.maskBg,.addPurdialog').fadeOut();\r\n");
      out.write("        window.location.href='#/purchse';\r\n");
      out.write("    }); */\r\n");
      out.write("\t    //关闭弹窗\r\n");
      out.write("    $('.closeDia').click(function(){\r\n");
      out.write("\t\t  $('.editInvDialog2,.maskBg').hide();\r\n");
      out.write("         $('.editInvDialog3,.maskBg').hide();\r\n");
      out.write("         $('.editInvDialog,.maskBg').hide();\r\n");
      out.write("    });\r\n");
      out.write("     $('.closeDia2').click(function(){\r\n");
      out.write("\t\t  $('.editInvDialog2,.maskBg').hide();\r\n");
      out.write("         $('.editInvDialog3,.maskBg').hide();\r\n");
      out.write("         $('.editInvDialog,.maskBg').hide();\r\n");
      out.write("    });\r\n");
      out.write("    \r\n");
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
