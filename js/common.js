//加载页头页尾
$(()=>{$("#header").html(
   `<!--右侧工具菜单-->
<div id="toolbar">
    <!--右侧内容栏-->
    <ul class="toolbar_show">
        <li class="toolbar_cart">
            <p class="cart_title">
                <i class="iconfont icon-guanbi rt"></i>
                <i class="iconfont icon-gouwuche"></i>
                <span>购物车</span>
            </p>
            <ul class="cart_list">
                <li>
                    <div class="cart_pic">
                        <a >
                            <img src="products/qq/cp_2.jpg" alt="">
                        </a>
                    </div>
                    <div>
                        <p class="cart_p_title">
                            梵迷琳神仙贵妇膏 素颜霜 紧致 淡化细纹 祛痘
                        </p>
                        <p class="cart_p_price">
                            <span>123.00 </span>x2
                        </p>
                    </div>
                </li>
                <li>
                    <div class="cart_pic">
                        <a >
                            <img src="products/qq/cp_2.jpg" alt="">
                        </a>
                    </div>
                    <div>
                        <p class="cart_p_title">
                            梵迷琳神仙贵妇膏 素颜霜 紧致 淡化细纹 祛痘
                        </p>
                        <p class="cart_p_price">
                            <span>123.00 </span>x2
                        </p>
                    </div>
                </li>
            </ul>
            <div class="cart_total">
                <div class="lf">
                    <p><b>2</b> 件商品</p>
                    <p>共计：<b>123.00</b> 元</p>
                </div>
                <button id="btnTotal">去购物车结算</button>
            </div>
        </li>
    </ul>
    <ul class="toolbar_icon">
        <li>
            <a >
                <i class="iconfont icon-yonghu"></i>
                用户
            </a>
        </li>
        <li class="cart_icon">
            <a >
                <b>0</b>
                <i class="iconfont icon-gouwuche"></i>
                购物车
            </a>
        </li>
        <li>
            <a >
                <i class="iconfont icon-shoucang"></i>
                收藏
            </a>
        </li>
        <li>
            <a >
                <i class="iconfont icon-zuji"></i>
                足迹
            </a>
        </li>
        <li>
            <a >
                <i class="iconfont icon-erweima"></i>
                微信
            </a>
        </li>
        <li>
            <a >
                <i class="iconfont icon-kefu"></i>
                客服
            </a>
        </li>
        <li>
            <a >
                <i class="iconfont icon-fankui"></i>
                反馈
            </a>
        </li>
        <li>
            <a href="#">
                <i class="iconfont icon-huidingbu"></i>
                返回顶部
            </a>
        </li>
    </ul>
</div>
<!--页面顶部-->
<header id="top">
    <div class="wrap">
        <!--右侧：文字列表-->
        <ul class="rt">
            <li class="login_link">
                欢迎光临本店！
                <a  href="login.html" class="login">[请登录]</a>
                <a href="register.html" class="register" >[免费注册]</a>
            </li>
            <li>
                <!--边框-->
                <b></b>
                <a href="order_payment.html">我的订单</a>
            </li>
            <li>
                <b></b>
                <a href="cart.html">购物车</a>
            </li>
            <li>
                <b></b>
                <a >联系我们</a>
            </li>
            <li class="client">
                <b></b>
                <a >
                    客户服务
                </a>
                <!--客户服务列表-->
                <ul id="service-items">
                    <li><a >常见问题</a></li>
                    <li><a >在线退换货</a></li>
                    <li><a >在线投诉</a></li>
                    <li><a >配送范围</a></li>
                </ul>
            </li>
            <li class="app">
                <b></b>
                <a >
                    <i class="iconfont icon-shouji"></i>
                    手机版
                </a>
                <div id="QR">
                    <img src="img/QRcode.jpg">
                </div>

            </li>
        </ul>
        <span class="lf">下午好，欢迎光临宏颜知己！ &nbsp;</span>
        <!--图片：五角星-->
        <i class="iconfont icon-wujiaoxing lf"></i>
        <!--链接：收藏-->
        <a  class="lf">收藏我们</a>
    </div>
</header>
<!--logo+搜索栏-->
<div id="top_main">
    <div class="wrap">
        <!--logo-->
        <a  class="lf"><img src="img/logo.png" alt=""></a>
        <!--搜索栏+关键字-->
        <div id="search_box" class="lf">
            <!--上：搜索栏-->
            <div class="search" >
                <input type="text">
                <button id="btnSearch">搜索</button>
            </div>
            <!--下：关键字-->
            <ul class="keyWords">
                <li>
                    <a >保湿</a>
                </li>
                <li>
                    <b></b>
                    <a >美白</a>
                </li>
                <li>
                    <b></b>
                    <a >氨基酸洗面奶</a>
                </li>
                <li>
                    <b></b>
                    <a >补水</a>
                </li>
                <li>
                    <b></b>
                    <a >眼霜</a>
                </li>
                <li>
                    <b></b>
                    <a >口红</a>
                </li>
                <li>
                    <b></b>
                    <a >BB霜</a>
                </li>
                <li>
                    <b></b>
                    <a >美白精华</a>
                </li>
                <li>
                    <b></b>
                    <a >森田</a>
                </li>
            </ul>
        </div>
        <!--购物车-->
        <div class="rt shopping_list">
            <div class="cart">
                <i class="iconfont icon-gouwuche "></i>
                我的购物车
                <em></em>
                <span id="shopping_amount">200</span>
            </div>
            <!--购物车下拉菜单-->
            <div id="cart_items">
                <div class="p_space"></div>
                <!--商品菜单-->
                <ul class="p_list">
                    <li>
                        <div class="p_pic lf">
                            <a >
                                <img src="products/p01.jpg" width="50" >
                            </a>
                        </div>
                        <div class="lf p_info">
                            <p class="p_title">产品名称</p>
                            <p class="p-price">价格 <span>X 数量</span></p>
                        </div>
                    </li>
                    <li>
                        <div class="p_pic lf">
                            <a >
                                <img src="products/p02.jpg"   width="50">
                            </a>
                        </div>
                        <div class="lf p_info">
                            <p class="p_title">产品名称</p>
                            <p class="p_price">价格 <span>X 数量</span></p>
                        </div>
                    </li>
                </ul>
                <!--结算部分-->
                <div class="p_total clear">
                    <div class="p_whole lf">
                        <p>共 <span>2</span> 件商品</p>
                        <p>共计 <span class="p_amount">￥121.9</span> </p>
                    </div>
                    <button id="btnAccount" >去购物车结算</button>
                </div>
            </div>
        </div>
    </div>
</div>
<!--主导航-->
<nav id="nav">
    <div class="wrap clear">
        <!--全部商品分类标签-->
        <div class="cate">
            <a >全部商品分类</a>
            <!--商品分类信息-->
            <ul id="cate_box">
                <li>
                    <div class="menu">
                        <p class="menu_name">
                            <span><</span>
                            <a >面部护理</a>
                        </p>
                        <ul class="link_name clear">
                            <li><a >乳液</a></li>
                            <li><a >面霜</a></li>
                            <li><a >洁面</a></li>
                            <li><a >精华</a></li>
                        </ul>
                    </div>
                    <!--子分类弹出框-->
                    <div class="menu_detail">
                        <dl class="clear">
                            <dt>
                                <a href="product_list.html">
                                    面膜
                                </a>
                                <span>&gt</span>
                            </dt>
                            <dd >
                                <a >撕拉面膜</a>
                                <a >面膜贴</a>
                                <a >免洗面膜</a>
                                <a >水洗面膜</a>
                                <a >睡眠面膜</a>
                                <a >蚕丝面膜</a>
                                <a >泥面膜</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >洁面</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >洁面摩丝</a>
                                <a >洁面乳</a>
                                <a >洁面啫喱/胶</a>
                                <a >面部去角质/磨砂</a>
                                <a >洁面膏/霜</a>
                                <a >手工皂</a>
                                <a >氨基酸洗面奶</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >化妆水</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >喷雾</a>
                                <a >精华水</a>
                                <a >柔肤水</a>
                                <a >爽肤水</a>
                                <a >收敛水/紧肤水</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >眼部护理</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >眼霜</a>
                                <a >眼部凝胶</a>
                                <a >眼部精华</a>
                                <a >蒸汽眼罩</a>
                                <a >眼膜</a>
                                <a >精油护理</a>
                                <a >睫毛滋养液</a>
                                <a >眼部护理套装</a>
                                <a >滴/洗眼液</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >唇部护理</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >润唇膏</a>
                                <a >唇部精华</a>
                                <a >唇膜</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >防晒</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >防晒霜</a>
                                <a >防晒乳液</a>
                                <a >防晒隔离乳</a>
                                <a >防晒喷雾</a>
                                <a >防晒唇膏</a>
                                <a >日常防晒</a>
                                <a >旅行防晒</a>
                                <a >晒后修复</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >乳液</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >美白</a>
                                <a >抗皱</a>
                                <a >抗老化</a>
                                <a >抗糖化</a>
                                <a >补水</a>
                                <a >啫喱</a>
                                <a >凝露/凝胶</a>
                                <a >按摩霜</a>
                                <a >匀净透亮</a>
                                <a >瘦脸</a>
                                <a >提拉紧致</a>
                                <a >排浊</a>
                                <a >修复痘痕</a>
                                <a >排毒</a>
                                <a >收缩毛孔</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >精油</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >花水/纯露</a>
                                <a >基础油</a>
                                <a >香薰用具</a>
                                <a >补水</a>
                                <a >舒缓</a>
                                <a >美体</a>
                                <a >焕肤</a>
                                <a >去黑眼圈</a>
                                <a >愉悦心情</a>
                                <a >增强免疫力</a>
                                <a >深层清洁</a>
                            </dd>
                        </dl>
                    </div>
                </li>
                <li>
                    <div class="menu">
                        <p class="menu_name">
                            <span><</span>
                            <a >身体护理</a>
                        </p>
                        <ul class="link_name clear">
                            <li><a >颈部</a></li>
                            <li><a >沐浴</a></li>
                            <li><a >润肤</a></li>
                            <li><a >精油</a></li>
                        </ul>
                    </div>
                    <!--子分类弹出框-->
                    <div class="menu_detail">
                        <dl class="clear">
                            <dt>
                                <a >
                                    沐浴
                                </a>
                                <span>&gt</span>
                            </dt>
                            <dd >
                                <a >沐浴乳/露</a>
                                <a >香皂/手工皂</a>
                                <a >搓泥浴宝</a>
                                <a >磨砂/浴盐</a>
                                <a >沐浴啫喱</a>
                                <a >其它</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >润肤</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >身体乳/霜</a>
                                <a >润肤水/喷雾</a>
                                <a >精油</a>
                                <a >抑汗/香氛</a>
                                <a >其它</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >颈部</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >补水</a>
                                <a >美白</a>
                                <a >保湿</a>
                                <a >提拉紧致</a>
                                <a >去角质</a>
                                <a >祛皱</a>
                                <a >抗衰</a>
                                <a >祛疤</a>
                                <a >去印</a>
                                <a >劲膜</a>
                                <a >劲部精华</a>
                                <a >乳/霜</a>
                                <a >工具仪器</a>
                                <a >按摩霜/油</a>
                                <a >其它</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >手足</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >护手霜</a>
                                <a >洗手液</a>
                                <a >手膜</a>
                                <a >手部去角质</a>
                                <a >香皂/手工皂</a>
                                <a >手腊膜</a>
                                <a >其它</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >纤体塑形</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >腹部</a>
                                <a >全身</a>
                                <a >腿部</a>
                                <a >臀部</a>
                                <a >胳膊</a>
                                <a >纤体/塑身</a>
                                <a >提拉紧致</a>
                                <a >纤体贴</a>
                                <a >精油</a>
                                <a >按摩霜</a>
                                <a >其它</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >美胸</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >丰满</a>
                                <a >淡化乳晕</a>
                                <a >紧致紧挺</a>
                                <a >产后修护</a>
                                <a >粉嫩</a>
                                <a >滋润</a>
                                <a >弹性</a>
                                <a >精油</a>
                                <a >乳晕护理</a>
                                <a >乳/霜</a>
                                <a >精华</a>
                                <a >喷雾</a>
                                <a >护理套装</a>
                                <a >其它</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >手甲美护</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >指甲油</a>
                                <a >美甲/护手套装</a>
                                <a >手膜</a>
                                <a >洗甲水</a>
                                <a >洗手液</a>
                                <a >美甲工具</a>
                                <a >防冻疮</a>
                                <a >美白</a>
                                <a >滋润</a>
                                <a >保湿</a>
                                <a >补水</a>
                                <a >去角质</a>
                                <a >防晒</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >美足</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >足膜</a>
                                <a >润足霜</a>
                                <a >足部护理工具</a>
                                <a >泡足品</a>
                                <a >足部按摩品</a>
                                <a >足部喷雾</a>
                                <a >足部去角质品</a>
                                <a >足贴</a>
                                <a >足部护理套餐</a>
                                <a >补水</a>
                                <a >防治皲裂</a>
                            </dd>
                        </dl>
                    </div>
                </li>
                <li>
                    <div class="menu">
                        <p class="menu_name">
                            <span><</span>
                            <a >男士护理</a>
                        </p>
                        <ul class="link_name clear">
                            <li><a >男士面膜</a></li>
                            <li><a >洗面奶</a></li>
                            <li><a >剃须护理</a></li>
                        </ul>
                    </div>
                    <div class="menu_detail">
                        <dl class="clear">
                            <dt>
                                <a >
                                    面部护理
                                </a>
                                <span>&gt</span>
                            </dt>
                            <dd >
                                <a >男士润唇膏</a>
                                <a >男士眼部精华</a>
                                <a >男士眼霜</a>
                                <a >男士面霜/乳液</a>
                                <a >男士洁面品</a>
                                <a >男士爽肤水</a>
                                <a >男士精华</a>
                                <a >男士面膜</a>
                                <a >男士防晒霜</a>
                                <a >男士面部护理套装</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >身体护理</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >男士沐浴露</a>
                                <a >男士爽身香体品</a>
                                <a >男士润体乳</a>
                                <a >男士纤体产品</a>
                                <a >男士身体磨砂膏</a>
                                <a >男士私处护理</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >剃须护理</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >剃须刀</a>
                                <a >须后护理品</a>
                                <a >须前护理品</a>
                                <a >补水</a>
                                <a >细致毛孔</a>
                                <a >柔肤</a>
                                <a >滋润</a>
                                <a >控油</a>
                                <a >抗衰老</a>
                                <a >抗菌</a>
                                <a >抗氧化</a>
                                <a >修护</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >面部彩妆</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >男士BB霜</a>
                                <a >男士粉底</a>
                                <a >男士隔离霜</a>
                                <a >男士遮瑕品</a>
                                <a >男士睫毛膏</a>
                                <a >男士散粉/蜜粉</a>
                                <a >控油</a>
                                <a >均匀肤色</a>
                                <a >水油平衡</a>
                                <a >抗衰老</a>
                                <a >保湿</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >唇部护理</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >润唇膏</a>
                                <a >唇部精华</a>
                                <a >唇膜</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >防晒</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >防晒霜</a>
                                <a >防晒乳液</a>
                                <a >防晒隔离乳</a>
                                <a >防晒喷雾</a>
                                <a >防晒唇膏</a>
                                <a >日常防晒</a>
                                <a >旅行防晒</a>
                                <a >晒后修复</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >乳液</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >美白</a>
                                <a >抗皱</a>
                                <a >抗老化</a>
                                <a >抗糖化</a>
                                <a >补水</a>
                                <a >啫喱</a>
                                <a >凝露/凝胶</a>
                                <a >按摩霜</a>
                                <a >匀净透亮</a>
                                <a >瘦脸</a>
                                <a >提拉紧致</a>
                                <a >排浊</a>
                                <a >修复痘痕</a>
                                <a >排毒</a>
                                <a >收缩毛孔</a>
                            </dd>
                        </dl>
                    </div>
                </li>
                <li>
                    <div class="menu">
                        <p class="menu_name">
                            <span><</span>
                            <a >洗发护发</a>
                        </p>
                        <ul class="link_name clear">
                            <li><a >洗发</a></li>
                            <li><a >护发</a></li>
                            <li><a >染发</a></li>
                            <li><a >造型</a></li>
                        </ul>
                    </div>
                    <div class="menu_detail">
                        <dl class="clear">
                            <dt>
                                <a >
                                    洗发
                                </a>
                                <span>&gt</span>
                            </dt>
                            <dd >
                                <a >去屑</a>
                                <a >止痒</a>
                                <a >无硅油</a>
                                <a >防脱</a>
                                <a >清爽</a>
                                <a >控油</a>
                                <a >补水</a>
                                <a >保湿</a>
                                <a >柔顺</a>
                                <a >滋养</a>
                                <a >深层修护</a>
                                <a >烫染修护</a>
                                <a >丰盈蓬松</a>
                                <a >其它</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >护发</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >护发素/乳</a>
                                <a >发膜</a>
                                <a >精华乳/油</a>
                                <a >营养水</a>
                                <a >其它</a>
                                <a >补水</a>
                                <a >保湿</a>
                                <a >烫染修护</a>
                                <a >柔顺</a>
                                <a >滋养</a>
                                <a >止脱</a>
                                <a >深层修护</a>
                                <a >头皮护理</a>
                                <a >生发</a>
                                <a >锁色</a>
                                <a >护色</a>
                                <a >其它</a>
                                <a >清爽</a>
                                <a >控油</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >造型</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >啫喱水</a>
                                <a >发蜡/发泥</a>
                                <a >弹力素</a>
                                <a >发胶</a>
                                <a >蓬松喷雾</a>
                                <a >啫喱膏</a>
                                <a >摩丝</a>
                                <a >蓬蓬粉</a>
                                <a >卷发</a>
                                <a >直发</a>
                                <a >通用</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >假发</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >短发</a>
                                <a >长发</a>
                                <a >中长发</a>
                                <a >中发</a>
                                <a >发套</a>
                                <a >刘海</a>
                                <a >发束/发片</a>
                                <a >丸子头发包</a>
                                <a >马尾</a>
                                <a >接发</a>
                                <a >其它</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >美发工具</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >美发剪</a>
                                <a >卷发器</a>
                                <a >卷发工具</a>
                                <a >梳子</a>
                                <a >直板夹</a>
                                <a >电烫帽</a>
                                <a >吹风机</a>
                                <a >其它</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >发用喷雾</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >保湿</a>
                                <a >去屑</a>
                                <a >受损恢复</a>
                                <a >定型</a>
                                <a >柔顺</a>
                                <a >洗发</a>
                                <a >滋养</a>
                                <a >生发</a>
                                <a >防晒</a>
                                <a >黑发</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >头部按摩</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >保湿</a>
                                <a >去屑</a>
                                <a >受损恢复</a>
                                <a >定型</a>
                                <a >柔顺</a>
                                <a >洗发</a>
                                <a >滋养</a>
                                <a >生发</a>
                                <a >防晒</a>
                                <a >黑发</a>
                            </dd>
                        </dl>
                    </div>
                </li>
                <li>
                    <div class="menu">
                        <p class="menu_name">
                            <span><</span>
                            <a >香水彩妆</a>
                        </p>
                        <ul class="link_name clear">
                            <li><a >BB霜</a></li>
                            <li><a >化妆棉</a></li>
                            <li><a >女士香水</a></li>
                        </ul>
                    </div>
                    <div class="menu_detail">
                        <dl class="clear">
                            <dt>
                                <a >
                                    BB霜
                                </a>
                                <span>&gt</span>
                            </dt>
                            <dd >
                                <a >白色</a>
                                <a >透明色</a>
                                <a >象牙色</a>
                                <a >绿色</a>
                                <a >防晒</a>
                                <a >美白</a>
                                <a >细致毛孔</a>
                                <a >滋润</a>
                                <a >隔离</a>
                                <a >控油</a>
                                <a >防水</a>
                                <a >修护</a>
                                <a >定妆</a>
                                <a >干湿两用</a>
                                <a >遮瑕</a>
                                <a >补水/保湿</a>
                                <a >提亮肤色</a>
                                <a >其它</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >女士香水</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >花木香调</a>
                                <a >木质香调</a>
                                <a >海洋香调</a>
                                <a >东方香调</a>
                                <a >森林香调</a>
                                <a >混合香调</a>
                                <a >皮革调</a>
                                <a >美食调</a>
                                <a >淡香水</a>
                                <a >古龙水</a>
                                <a >浓香水</a>
                                <a >香精</a>
                                <a >香体走珠</a>
                                <a >固体香水</a>
                                <a >香体乳</a>
                                <a >发香雾</a>
                                <a >其它</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >眉笔</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >眉笔</a>
                                <a >眉粉</a>
                                <a >染眉膏</a>
                                <a >眉毛雨衣</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >眼线</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >眼线笔</a>
                                <a >眼线膏/胶</a>
                                <a >眼线液</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >睫毛膏</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >睫毛增长液</a>
                                <a >单头睫毛膏</a>
                                <a >两只组合型睫毛膏</a>
                                <a >双头睫毛膏</a>
                                <a >睫毛底膏</a>
                                <a >睫毛雨衣</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >眼影</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >自然</a>
                                <a >闪光/珠光</a>
                                <a >哑光</a>
                                <a >烟熏</a>
                                <a >金属/光泽</a>
                                <a >其它</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >唇膏</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >唇膏/口红</a>
                                <a >唇彩/唇蜜</a>
                                <a >润唇膏/啫喱</a>
                                <a >唇线笔</a>
                                <a >唇膜</a>
                                <a >其它</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >腮红</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >粉状</a>
                                <a >膏状</a>
                                <a >泡沫</a>
                                <a >啫喱/凝胶</a>
                                <a >乳状</a>
                                <a >液/露状</a>
                                <a >其它</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >底妆</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >BB霜/CC霜</a>
                                <a >粉饼</a>
                                <a >粉底液/膏/霜</a>
                                <a >遮瑕膏/笔</a>
                                <a >隔离霜/妆前乳</a>
                                <a >修容/高光/阴影粉</a>
                                <a >其它</a>
                            </dd>
                        </dl>
                    </div>
                </li>
                <li>
                    <div class="menu">
                        <p class="menu_name">
                            <span><</span>
                            <a >口腔护理</a>
                        </p>
                        <ul class="link_name clear">
                            <li><a >牙膏/牙粉</a></li>
                            <li><a >牙刷</a></li>
                            <li><a >漱口水</a></li>
                        </ul>
                    </div>
                    <!--子分类弹出框-->
                    <div class="menu_detail">
                        <dl class="clear">
                            <dt>
                                <a >
                                    牙膏
                                </a>
                                <span>&gt</span>
                            </dt>
                            <dd >
                                <a >亮白</a>
                                <a >牙周护理</a>
                                <a >抗敏感</a>
                                <a >口气清新</a>
                                <a >清火</a>
                                <a >去烟渍</a>
                                <a >抗菌</a>
                                <a >去牙渍</a>
                                <a >其它</a>
                                <a >牙龈护理</a>
                                <a >孕妇专用</a>
                                <a >口腔敏感专用</a>
                                <a >牙粉</a>
                                <a >牙贴</a>

                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >牙刷</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >细毛</a>
                                <a >纳米</a>
                                <a >中毛</a>
                                <a >炭丝</a>
                                <a >硬毛</a>
                                <a >其它</a>
                                <a >牙线</a>
                                <a >牙线棒</a>
                                <a >替换刷头</a>
                                <a >牙签</a>
                                <a >电动牙刷</a>
                                <a >超声波牙刷</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >漱口水</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >漱口水</a>
                                <a >口腔喷雾</a>
                                <a >假牙护理</a>
                                <a >其它</a>
                                <a >防蛀</a>
                                <a >固齿</a>
                                <a >深层清洁</a>
                                <a >亮白</a>
                                <a >抗敏感</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >套装</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >搭配套装</a>
                                <a >牙刷</a>
                                <a >牙膏</a>
                                <a >牙贴</a>
                                <a >牙线</a>
                                <a >漱口水</a>
                                <a >牙粉</a>
                                <a >洁白</a>
                                <a >抗敏感</a>
                                <a >防蛀</a>
                                <a >牙龈护理</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >护理仪器</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >牙齿美白仪</a>
                                <a >口腔护理仪</a>
                                <a >智能刷牙指导仪</a>
                                <a >超声波口腔护理仪</a>
                                <a >电动牙刷</a>
                                <a >离子护理仪</a>
                                <a >洁白</a>
                                <a >抗敏感</a>
                                <a >防蛀</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >牙套</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >正畸矫正</a>
                                <a >隐形矫正</a>
                                <a >护齿</a>
                                <a >运动</a>
                                <a >双面</a>
                                <a >硅胶</a>
                                <a >防磨</a>
                                <a >定型</a>
                                <a >散打专用</a>
                                <a >透明/单色</a>
                                <a >夜间防磨</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >洗牙笔</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >去烟渍</a>
                                <a >去黄</a>
                                <a >美白</a>
                                <a >提亮</a>
                                <a >牙线</a>
                                <a >漱口水</a>
                                <a >牙粉</a>
                                <a >洁白</a>
                                <a >抗敏感</a>
                                <a >防蛀</a>
                                <a >牙龈护理</a>
                            </dd>
                        </dl>
                    </div>
                </li>
                <li>
                    <div class="menu">
                        <p class="menu_name">
                            <span><</span>
                            <a >品牌</a>
                        </p>
                        <ul class="link_name clear">
                            <li><a >倩碧</a></li>
                            <li><a >香奈儿</a></li>
                            <li><a >迪奥</a></li>
                        </ul>
                    </div>
                    <div class="menu_detail">
                        <dl class="clear">
                            <dt>
                                <a >
                                    欧美品牌
                                </a>
                                <span>&gt</span>
                            </dt>
                            <dd >
                                <a >雅芳</a>
                                <a >雅漾</a>
                                <a >安娜苏</a>
                                <a >HR赫莲娜</a>
                                <a >贝佳斯</a>
                                <a >碧欧泉</a>
                                <a >博姿</a>
                                <a >宝格丽</a>
                                <a >兰蔻</a>
                                <a >贝玲妃</a>
                                <a >碧欧泉</a>
                                <a >科颜氏</a>
                                <a >羽西</a>
                                <a >巴黎欧莱雅</a>
                                <a >卡尼尔</a>
                                <a >小护士</a>
                                <a >薇姿</a>
                                <a >理肤泉</a>
                                <a >修丽可</a>
                                <a >阿玛尼</a>
                                <a >迪奥</a>
                                <a >香奈儿</a>
                                <a >卡夏尔</a>
                                <a >卡诗</a>
                                <a >e.l.f</a>
                                <a >MAKE UP FOR EVER</a>
                                <a >NARS</a>
                                <a >OLAY</a>
                                <a >强生</a>
                                <a >丝塔芙</a>
                                <a >苏黎氏</a>
                                <a >清扬</a>
                                <a >飘柔</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >亚洲品牌</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >欧珀莱</a>
                                <a >爱茉莉</a>
                                <a >KOSE</a>
                                <a >ALBION</a>
                                <a >城野医生</a>
                                <a >资生堂</a>
                                <a >黛珂</a>
                                <a >雪肌精</a>
                                <a >Kanebo佳丽宝</a>
                                <a >Curel珂润</a>
                                <a >Fancl</a>
                                <a >ARSOA安露莎</a>
                                <a >SK-II</a>
                                <a >无印良品</a>
                                <a >药师堂</a>
                                <a >Placenta</a>
                                <a >FreePlus芙丽芳丝</a>
                                <a >Pola</a>
                                <a >索菲娜</a>
                                <a >芳凯尔</a>
                                <a >肌肤之钥</a>
                                <a >IPSA茵肤莎</a>
                                <a >JOICO嘉珂</a>
                                <a >丝蓓绮</a>
                                <a >植村秀</a>
                                <a >茵菲妮</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >澳洲品牌</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a > Jurlique 茱莉蔻</a>
                                <a >Aesop 伊索</a>
                                <a >Sukin Organics</a>
                                <a >Mukti Botancials 慕迪</a>
                                <a >A'kin 爱肯</a>
                                <a >MooGoo</a>
                                <a >Swisse</a>
                                <a >trilogy</a>
                                <a >ultraceuticals</a>
                                <a >moogoo</a>
                                <a >Lush</a>
                                <a >Dr.Lewinn's </a>
                                <a >Ultra Ceuticals</a>
                                <a >Mukti</a>
                                <a >布鲁姆（bloom）</a>
                                <a >慕迪（Mukti Botancials）</a>
                                <a >尤晳（ultraceuticals</a>
                                <a >Botani</a>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>
                                <a >其它品牌</a>
                                <span>&gt</span>
                            </dt>
                            <dd>
                                <a >ALOEMASTERCARE</a>
                                <a >纳缇诺</a>
                                <a >Akamuti</a>
                                <a >伊莎珂丝</a>
                                <a >百洛</a>
                                <a >Fatima Lopez</a>
                                <a >Elie Saab</a>
                                <a >Gosia Baczynska</a>
                                <a >Rafael Cennamo</a>
                                <a >瓦伦丁·尤达什金</a>
                                <a >Katya Zol</a>
                                <a >David Tlale</a>
                                <a >乔治·荷拜卡</a>
                                <a >Debeers</a>
                            </dd>
                        </dl>
                    </div>
                </li>
            </ul>
        </div>
        <!--导航栏-->
        <ul class="nav">
            <li>
                <a href="index.html">首页</a>
            </li>
            <li>
                <a >日常护理</a>
            </li>
            <li>
                <a >女士专区</a>
            </li>
            <li>
                <a >男士专区</a>
            </li>
            <li class="on">
                <a >限时团购</a>
            </li>
            <li>
                <a >国际大牌</a>
            </li>
            <li>
                <em></em>
                <a >礼品DIY</a>
            </li>
            <li>
                <a >联系我们</a>
            </li>
        </ul>
    </div>
</nav>`
)});
$(()=>{
    <!--页面底部-->
    $("#footer").html(
    `<footer id="footer_box">
        <!--slogan-->
        <div id="slogan" class="clear wrap">
        <ul>
        <li>
        <a ><img src="img/slogan_1.png" alt=""></a>
        <div>
        <h1>安全保证</h1>
        <span>多重保障机制 认证商城</span>
    </div>
    </li>
    <li>
    <a ><img src="img/slogan_2.png" alt=""></a>
        <div>
        <h1>正品保证</h1>
        <span>正品行货 放心选购</span>
    </div>
    </li>
    <li>
    <a ><img src="img/slogan_3.png" alt=""></a>
        <div>
        <h1>七天无理由退换货</h1>
        <span>七天无理由保障消费权益</span>
        </div>
        </li>
        <li>
        <a ><img src="img/slogan_4.png" alt=""></a>
        <div>
        <h1>天天低价</h1>
        <span>价格更低，质量更可靠</span>
    </div>
    </li>
    </ul>
    </div>
    <!--客服电话-->
    <div id="service_tel">
        <h1 class="wrap"><i class="iconfont icon-dianhua"></i>400-4565-345 <span> 客服热线 7 x 24小时 贴心服务</span></h1>
    </div>
    <!--帮助信息-->
    <ul id="help_list" class="wrap clear">
        <li>
        <p>新手上路</p>
        <ul class="help_list_item">
        <li>
        <a >售后流程</a>
        </li>
        <li>
        <a >购物流程</a>
        </li>
        <li>
        <a >订购方式</a>
        </li>
        <li>
        <a >隐私声明</a>
        </li>
        <li>
        <a >推荐分享说明</a>
        </li>
        </ul>
        </li>
        <li>
        <p>配送与支付</p>
        <ul class="help_list_item">
        <li>
        <a >保险需求测试</a>
        </li>
        <li>
        <a >专题及活动</a>
        </li>
        <li>
        <a >挑选保险产品</a>
        </li>
        <li>
        <a >常见问题</a>
        </li>
        </ul>
        </li>
        <li>
        <p>售后保障</p>
        <ul class="help_list_item">
        <li>
        <a >售后政策</a>
        </li>
        <li>
        <a >价格保护</a>
        </li>
        <li>
        <a >退款说明</a>
        </li>
        <li>
        <a >返修/退换货</a>
        </li>
        <li>
        <a >取消订单</a>
        </li>
        </ul>
        </li>
        <li>
        <p>支付方式</p>
        <ul class="help_list_item">
        <li>
        <a >货到付款</a>
        </li>
        <li>
        <a >在线支付</a>
        </li>
        <li>
        <a >分期付款</a>
        </li>
        <li>
        <a >邮局汇款</a>
        </li>
        <li>
        <a >公司转账</a>
        </li>
        </ul>
        </li>
        <li>
        <p>帮助中心</p>
        <ul class="help_list_item">
        <li>
        <a >常见问题</a>
        </li>
        <li>
        <a >使用帮助</a>
        </li>
        <li>
        <a >用户协议</a>
        </li>
        <li>
        <a >联系客服</a>
        </li>
        </ul>
        </li>
        </ul>
        <!--备案号等-->
        <div id="links" class="wrap">
        <a >关于我们</a>|<a >公开信息披露</a>|<a >加入我们</a>|<a >联系我们</a>|<a >版权声明</a>|<a >隐私声明</a>|<a >网站地图</a>
        </div>
        <p id="copyright" class="wrap"> XXXXXX All Rights Reserved. Technical support:CDDGG Group</p>
    </footer>`)
});
// 主导航
$(()=>{
    var $ul=$("#nav .nav");
    $ul.on("mouseover","li",e=> {
            var $li = $(e.target);
            $li.addClass("on").siblings().removeClass("on")
        }
    )
});
//自动登录
$(()=>{
    var str=$.cookie("uName");
    if(str){
    $("#top .login_link").html(`<span style="color:#666">欢迎您，</span>${str}[<a class="exit" style="color:#EC124A">退出</a>]`).css("color","#EC124A");
    }
});
// 退出 清空cookie，并返回登录前样式
$(()=>{
    $("#top .exit").click(e=>{
        $("#top .login_link").html(`欢迎光临本店！
                <a href="login.html" class="login">[请登录]</a>
                <a href="register.html" class="register" >[免费注册]</a>`)
            .css("color","#666");
        $.cookie("uName","");
        $.cookie("uId","");
    }
    )
});

