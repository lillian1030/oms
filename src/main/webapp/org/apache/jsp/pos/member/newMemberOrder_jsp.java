/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-03-28 06:32:56 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.pos.member;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class newMemberOrder_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      response.setContentType("text/html; charset=utf-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			"", true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\r\n");
      out.write("<!--------------- Content start ----------------->\r\n");
      out.write("<div class=\"content-wrapper content-wrapper-order\" >\r\n");
      out.write("    <div class=\"col-md-11 pageTitl removeBottom\">\r\n");
      out.write("        <span class=\"am-ft-16 \">会员订单</span>\r\n");
      out.write("        <button type=\"button\" class=\"unionBriefReturn\" ng-click=\"goback('memberOrder')\">返回</button>\r\n");
      out.write("    </div>\r\n");
      out.write("    <div class=\"col-md-11 vipList\">\r\n");
      out.write("    \t<div class=\"vipDetil\">\r\n");
      out.write("    \t\t<div><img src=\"http://base-static.oss-cn-hangzhou.aliyuncs.com/base/images/%E5%BF%86%E6%9D%91%E5%B1%85logo.jpg\"/></div>\r\n");
      out.write("    \t\t<div class=\"vipDetildesc\">\r\n");
      out.write("    \t\t\t<p class=\"am-ft-16\">李依依&nbsp;&nbsp;15356521561</p>\r\n");
      out.write("    \t\t\t<p>性别:女</p>\r\n");
      out.write("    \t\t\t<p>生日:1990-10-30</p>\r\n");
      out.write("    \t\t\t<p>地址:浙江杭州西湖区文一西路98数娱大厦101室</p>\r\n");
      out.write("    \t\t</div>\r\n");
      out.write("    \t</div>\r\n");
      out.write("    \t<div class=\"vipCard vipCardL\">\r\n");
      out.write("    \t\t<div class=\"vipCardR1\">\r\n");
      out.write("    \t\t\t<span class=\"am-ft-16\">银卡</span>\r\n");
      out.write("    \t\t\t<span>自营门店会员联盟</span>\r\n");
      out.write("    \t\t\t<button class=\"vipCardBtn\">更改</button>\r\n");
      out.write("    \t\t</div>\r\n");
      out.write("    \t\t<div class=\"vipCardR2\">HY12345678</div>\r\n");
      out.write("    \t\t<div class=\"vipCardR3\">\r\n");
      out.write("    \t\t\t<p>可用积分：1500分</p>\r\n");
      out.write("    \t\t\t<p>累积消费：1500.00元</p>\r\n");
      out.write("    \t\t</div>\r\n");
      out.write("    \t</div>\r\n");
      out.write("    \t<div class=\"vipCard\">\r\n");
      out.write("    \t\t<div class=\"vipCardR1\">\r\n");
      out.write("    \t\t\t<span class=\"am-ft-16\">银卡</span>\r\n");
      out.write("    \t\t\t<span>自营门店会员联盟</span>\r\n");
      out.write("    \t\t\t<button class=\"vipCardBtn\">更改</button>\r\n");
      out.write("    \t\t</div>\r\n");
      out.write("    \t\t<div class=\"vipCardR2\">HY12345678</div>\r\n");
      out.write("    \t\t<div class=\"vipCardR3\">\r\n");
      out.write("    \t\t\t<p>可用积分：1500分</p>\r\n");
      out.write("    \t\t\t<p>累积消费：1500.00元</p>\r\n");
      out.write("    \t\t</div>\r\n");
      out.write("    \t</div>\r\n");
      out.write("    \t\r\n");
      out.write("    \t<!--<button class=\"am-ft-blue \">更多卡...</button>-->\r\n");
      out.write("    \t<div class=\"fn-clear\"></div>\r\n");
      out.write("    </div>\r\n");
      out.write("    \r\n");
      out.write("    <!-- search -->\r\n");
      out.write("    <div class=\"col-md-11 codeSelect\">\r\n");
      out.write("    \t<span class=\"am-ft-16\">所有订单(10个)</span>\r\n");
      out.write("    \t<div class=\"codeSelectRight\">\r\n");
      out.write("    \t  <input type=\"text\" placeholder=\"订单号\" ng-model=\"proModelNum\"/>\r\n");
      out.write("    \t  <button class=\"codeSelectBtn\" ng-click=\"searchPro(1)\">查询</button>\r\n");
      out.write("    \t</div>\r\n");
      out.write("    </div>\r\n");
      out.write("    <!-- /search -->\r\n");
      out.write("\r\n");
      out.write("    <!-- Main content -->\r\n");
      out.write("    <div class=\"ManColTable col-lg-12 offsetPadding\">\r\n");
      out.write("        <form>\r\n");
      out.write("            <div class=\"PrivTable ordersTable o2o-ordersTable\">\r\n");
      out.write("                <table class=\"table table-hover table-striped unoinListTable vipListTable\">\r\n");
      out.write("                    <tr>\r\n");
      out.write("                        <th scope=\"col\" style=\"width: 28%;\">商品</th>\r\n");
      out.write("                        <th scope=\"col\" style=\"width: 8%;\">数量</th>\r\n");
      out.write("                        <th scope=\"col\" style=\"width: 8%;\">金额</th>\r\n");
      out.write("                        <th scope=\"col\" style=\"width: 11%;\">总金额</th>\r\n");
      out.write("                        <th scope=\"col\" style=\"width: 18%;\">会员卡号</th>\r\n");
      out.write("                        <th scope=\"col\" style=\"width: 10%;\">导购</th>\r\n");
      out.write("                        <th scope=\"col\" >门店</th>\r\n");
      out.write("                    </tr>\r\n");
      out.write("                </table>\r\n");
      out.write("                <table class=\"table table-hover table-striped  vipListTable\">\r\n");
      out.write("                     <tr class=\"diftr\"   >\r\n");
      out.write("                         <td colspan=\"7\" >\r\n");
      out.write("                         \t<div class=\"fn-left\" style=\"width: 40%;\">\r\n");
      out.write("                                <span>2016-07-04 10:32:42&nbsp;&nbsp;&nbsp;&nbsp;</span>\r\n");
      out.write("                                <span >订单号：20160704103242787100000003</span>\r\n");
      out.write("\t\t\t\t\t\t\t</div>\t\r\n");
      out.write("\t\t\t\t\t\t     <div class=\"fn-left\" style=\"width: 30%;\">\r\n");
      out.write("                                <span class=\"\" >订单类型：门店POS&nbsp;&nbsp;&nbsp;&nbsp;</span>\r\n");
      out.write("                              <span class=\"\" >销售单</span>\r\n");
      out.write("                        \t </div>\r\n");
      out.write("                        \t \r\n");
      out.write("                        <!--</td>\r\n");
      out.write("                         <td colspan=\"2\" style=\"width: 39%;\" >-->\r\n");
      out.write("                                    <!--<span class=\"\" ng-if=\"item.order.orderType == '2'\">云仓020订单</span>\r\n");
      out.write("                                    <span class=\"\" ng-if=\"item.order.orderType == '3'\">微店订单</span>-->\r\n");
      out.write("                                    <!--<span class=\"\" ng-if=\"item.order.oldOrderId !=''\">补单</span>-->\r\n");
      out.write("                        <!--</td>                       \r\n");
      out.write("                        <td >-->\r\n");
      out.write("                        <!--<span class=\"am-ft-red\" ng-if=\"item.order.orderStatus == '4'\">未接单</span>\r\n");
      out.write("                        <span  ng-if=\"item.order.orderStatus == '5'\">已发货</span>\r\n");
      out.write("                        <span class=\"am-ft-red\" ng-if=\"item.order.orderStatus == '6'\">未付款</span>\r\n");
      out.write("                        <span  ng-if=\"item.order.orderStatus == '7'\">已支付</span>\r\n");
      out.write("                        <span class=\"am-ft-red\" ng-if=\"item.order.orderStatus == '8'\">支付失败</span>\r\n");
      out.write("                        <span class=\"am-ft-red\" ng-if=\"item.order.orderStatus == '9'\">已退单</span>-->\r\n");
      out.write("                        <!--</td>-->\r\n");
      out.write("                    </tr>\r\n");
      out.write("                    <tr >\r\n");
      out.write("                        <td  colspan=\"7\" class=\"por-info\"  >\r\n");
      out.write("                            <table class=\"table table-hover table-striped vipListTable chiledo2oTable\">\r\n");
      out.write("                               <tr class=\"childO2oList\">\r\n");
      out.write("                               \t   <td colspan=\"6\" class=\"childO2oDetil\">\r\n");
      out.write("                                     <span class=\"colorGery\"> 子订单号：</span><span class=\"am-ft-blue\">20160704103242787100000031</span>\r\n");
      out.write("                               \t   </td>\r\n");
      out.write("                               \t   <td>已完成</td>\r\n");
      out.write("                               </tr>  \r\n");
      out.write("                               <tr>\r\n");
      out.write("                                \t<td style=\"width: 44%;\" colspan=\"3\" class=\"o2odetil\">\r\n");
      out.write("                               \t\t   <div class=\"proDetialOne\" >\r\n");
      out.write("                                       <!--<div class=\"proDetialOne\" ng-repeat=\"orderDetail in item.orderDetails\">-->\r\n");
      out.write("\t\t\t\t\t\t                 <div class=\"proDetial\" style=\"width: 63%;\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t     <p>2016年春装牛仔短裙淑女风</p>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t     <p>颜色：米白&nbsp;&nbsp;&nbsp;尺码：S</span></p>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t     <p>吊牌价：￥388.00</p>\r\n");
      out.write("\t\t\t\t\t\t     \t\t\t </div>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t      <div style=\"width: 21%;\" class=\"mgt25\"><span>1</span></div>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t      <div class=\"mgt25\"><span >200.00元</span></div>\t\t\t\t\t   \r\n");
      out.write("\t\t\t                              <div class=\"fn-clear\"></div>\r\n");
      out.write("                            \t\t </div>   \r\n");
      out.write("\t\t\t                        <div class=\"proDetialOne\" >\r\n");
      out.write("                                       <!--<div class=\"proDetialOne\" ng-repeat=\"orderDetail in item.orderDetails\">-->\r\n");
      out.write("\t\t\t\t\t\t                 <div class=\"proDetial\" style=\"width: 63%;\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t     <p>2016年春装牛仔短裙淑女风</p>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t     <p>颜色：米白&nbsp;&nbsp;&nbsp;尺码：S</span></p>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t     <p>吊牌价：￥388.00</p>\r\n");
      out.write("\t\t\t\t\t\t     \t\t\t </div>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t      <div style=\"width: 21%;\" class=\"mgt25\"><span>1</span></div>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t      <div class=\"mgt25\"><span >200.00元</span></div>\t\t\t\t\t   \r\n");
      out.write("\t\t\t                              <div class=\"fn-clear\"></div>\r\n");
      out.write("                                 \t</td>\r\n");
      out.write("\t\t\t                        <td style=\"width: 13%;\" class=\"o2oprice\">\r\n");
      out.write("\t\t\t                           <span>400.00元</span>\r\n");
      out.write("\t\t\t                        </td>\r\n");
      out.write("\t\t\t                        <td style=\"width: 15%;\"><span>HY12345678</span></td>\r\n");
      out.write("\t\t\t                        <td style=\"width: 13%;\"><span>张三</span></td>\r\n");
      out.write("\t\t\t                        <td>\r\n");
      out.write("\t\t\t                            <span>黄龙中心一号店</span>\r\n");
      out.write("\t\t\t                        </td>\r\n");
      out.write("                               </tr>\r\n");
      out.write("                             </table>\r\n");
      out.write("                            </td>\r\n");
      out.write("                     </tr>   \r\n");
      out.write("                  </table>  \r\n");
      out.write("                   <table class=\"table table-hover table-striped  vipListTable\">\r\n");
      out.write("                     <tr class=\"diftr\"   >\r\n");
      out.write("                         <td colspan=\"7\" >\r\n");
      out.write("                         \t<div class=\"fn-left\" style=\"width: 40%;\">\r\n");
      out.write("                                <span>2016-07-04 10:32:42&nbsp;&nbsp;&nbsp;&nbsp;</span>\r\n");
      out.write("                                <span >订单号：20160704103242787100000003</span>\r\n");
      out.write("\t\t\t\t\t\t\t</div>\t\r\n");
      out.write("\t\t\t\t\t\t    <div class=\"fn-left\" style=\"width: 30%;\">\r\n");
      out.write("                                <span class=\"\" >订单类型：门店POS&nbsp;&nbsp;&nbsp;&nbsp;</span>\r\n");
      out.write("                              <span class=\"\" >销售单</span>\r\n");
      out.write("                        \t </div>\r\n");
      out.write("                        \t\r\n");
      out.write("                        <!--</td>\r\n");
      out.write("                         <td colspan=\"2\" style=\"width: 39%;\" >-->\r\n");
      out.write("                                    <!--<span class=\"\" ng-if=\"item.order.orderType == '2'\">云仓020订单</span>\r\n");
      out.write("                                    <span class=\"\" ng-if=\"item.order.orderType == '3'\">微店订单</span>-->\r\n");
      out.write("                                    <!--<span class=\"\" ng-if=\"item.order.oldOrderId !=''\">补单</span>-->\r\n");
      out.write("                        <!--</td>                       \r\n");
      out.write("                        <td >-->\r\n");
      out.write("                        <!--<span class=\"am-ft-red\" ng-if=\"item.order.orderStatus == '4'\">未接单</span>\r\n");
      out.write("                        <span  ng-if=\"item.order.orderStatus == '5'\">已发货</span>\r\n");
      out.write("                        <span class=\"am-ft-red\" ng-if=\"item.order.orderStatus == '6'\">未付款</span>\r\n");
      out.write("                        <span  ng-if=\"item.order.orderStatus == '7'\">已支付</span>\r\n");
      out.write("                        <span class=\"am-ft-red\" ng-if=\"item.order.orderStatus == '8'\">支付失败</span>\r\n");
      out.write("                        <span class=\"am-ft-red\" ng-if=\"item.order.orderStatus == '9'\">已退单</span>-->\r\n");
      out.write("                        <!--</td>-->\r\n");
      out.write("                    </tr>\r\n");
      out.write("                    <tr >\r\n");
      out.write("                        <td  colspan=\"7\" class=\"por-info\"  >\r\n");
      out.write("                            <table class=\"table table-hover table-striped vipListTable chiledo2oTable\">\r\n");
      out.write("                               <tr class=\"childO2oList\">\r\n");
      out.write("                               \t   <td colspan=\"6\" class=\"childO2oDetil\">\r\n");
      out.write("                                     <span class=\"colorGery\"> 子订单号：</span><span class=\"am-ft-blue\">20160704103242787100000031</span>\r\n");
      out.write("                               \t   </td>\r\n");
      out.write("                               \t   <td>已完成</td>\r\n");
      out.write("                               </tr>  \r\n");
      out.write("                               <tr>\r\n");
      out.write("                                \t<td style=\"width: 44%;\" colspan=\"3\" class=\"o2odetil\">\r\n");
      out.write("                               \t\t   <div class=\"proDetialOne\" >\r\n");
      out.write("                                       <!--<div class=\"proDetialOne\" ng-repeat=\"orderDetail in item.orderDetails\">-->\r\n");
      out.write("\t\t\t\t\t\t                 <div class=\"proDetial\" style=\"width: 63%;\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t     <p>2016年春装牛仔短裙淑女风</p>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t     <p>颜色：米白&nbsp;&nbsp;&nbsp;尺码：S</span></p>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t     <p>吊牌价：￥388.00</p>\r\n");
      out.write("\t\t\t\t\t\t     \t\t\t </div>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t      <div style=\"width: 21%;\" class=\"mgt25\"><span>1</span></div>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t      <div class=\"mgt25\"><span >200.00元</span></div>\t\t\t\t\t   \r\n");
      out.write("\t\t\t                              <div class=\"fn-clear\"></div>\r\n");
      out.write("                            \t\t </div>   \r\n");
      out.write("\t\t\t                        <div class=\"proDetialOne\" >\r\n");
      out.write("                                       <!--<div class=\"proDetialOne\" ng-repeat=\"orderDetail in item.orderDetails\">-->\r\n");
      out.write("\t\t\t\t\t\t                 <div class=\"proDetial\" style=\"width: 63%;\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t     <p>2016年春装牛仔短裙淑女风</p>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t     <p>颜色：米白&nbsp;&nbsp;&nbsp;尺码：S</span></p>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t     <p>吊牌价：￥388.00</p>\r\n");
      out.write("\t\t\t\t\t\t     \t\t\t </div>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t      <div style=\"width: 21%;\" class=\"mgt25\"><span>1</span></div>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t      <div class=\"mgt25\"><span >200.00元</span></div>\t\t\t\t\t   \r\n");
      out.write("\t\t\t                              <div class=\"fn-clear\"></div>\r\n");
      out.write("                                 \t</td>\r\n");
      out.write("\t\t\t                        <td style=\"width: 13%;\" class=\"o2oprice\">\r\n");
      out.write("\t\t\t                           <span>400.00元</span>\r\n");
      out.write("\t\t\t                        </td>\r\n");
      out.write("\t\t\t                        <td style=\"width: 15%;\"><span>HY12345678</span></td>\r\n");
      out.write("\t\t\t                        <td style=\"width: 13%;\"><span>张三</span></td>\r\n");
      out.write("\t\t\t                        <td>\r\n");
      out.write("\t\t\t                            <span>黄龙中心一号店</span>\r\n");
      out.write("\t\t\t                        </td>\r\n");
      out.write("                               </tr>\r\n");
      out.write("                             </table>\r\n");
      out.write("                            </td>\r\n");
      out.write("                     </tr>   \r\n");
      out.write("                  </table>  \r\n");
      out.write("            </div>\r\n");
      out.write("        </form>\r\n");
      out.write("        <!-- 分页 -->\r\n");
      out.write("            <div class=\"pagelist priv-pagelist\">\r\n");
      out.write("                <div id=\"productListPage\"></div>\r\n");
      out.write("            </div>\r\n");
      out.write("        <!-- /分页 -->\r\n");
      out.write("        <div class=\"fn-clear\"></div>\r\n");
      out.write("    </div>\r\n");
      out.write("\r\n");
      out.write("    <!-- /Main content -->\r\n");
      out.write("</div>\r\n");
      out.write("<!--------------- Content end ----------------->\r\n");
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
