(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{293:function(t,a,o){"use strict";o.r(a);var s=o(14),p=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"封神台ctf高校6月靶场"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#封神台ctf高校6月靶场"}},[t._v("#")]),t._v(" "),a("strong",[t._v("封神台CTF高校6月靶场")])]),t._v(" "),a("p",[a("strong",[t._v("题解：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/202305091958446.webp",alt:"Img"}})]),t._v(" "),a("p",[a("span",{staticStyle:{color:"rgb(255, 41, 65)","font-size":"16px"}},[t._v(">")])]),t._v(" "),a("blockquote",[a("p",[a("span",{staticStyle:{color:"rgb(0, 0, 0)","font-size":"20px"}},[t._v("打开传送门后显示一个页面flag被隐写在了图片里,")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/202305091959396.webp",alt:"Img"}})]),t._v(" "),a("p",[a("span",{staticStyle:{color:"rgb(0, 0, 0)","font-size":"20px"}},[t._v("既然是页面那就先按F12看看有啥东西，浏览一串没啥大发现那就在追踪一下。")]),a("span",{staticStyle:{color:"rgb(0, 0, 0)","font-size":"20px"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/202305091959357.webp",alt:"Img"}})]),t._v(" "),a("span",{staticStyle:{color:"rgb(0, 0, 0)","font-size":"20px"}},[a("p",[t._v("得到一张png打开保存下来。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/202305091959956.webp",alt:"Img"}})]),t._v(" "),a("p",[t._v("再用图片隐写在线工具，"),a("a",{attrs:{href:"http://www.atoolbox.net/Tool.php?Id=699",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击此链接"),a("OutboundLink")],1),t._v("\n最后flag就出来了")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/202305091959889.webp",alt:"Img"}})]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("flag{QOISDJCJIXZ29305JKOSZASOFDKI}")])])]),t._v(" "),a("h1",{attrs:{id:"第二届榕智杯比赛wp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二届榕智杯比赛wp"}},[t._v("#")]),t._v(" 第二届榕智杯比赛WP")]),t._v(" "),a("h2",{attrs:{id:"_1、wiki-某账号信息中存放的flag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、wiki-某账号信息中存放的flag"}},[t._v("#")]),t._v(" 1、wiki-某账号信息中存放的flag")]),t._v(" "),a("p",[a("strong",[t._v("题目地址：http://hackattack.cn:49213")])]),t._v(" "),a("p",[t._v("​        "),a("strong",[t._v("题目给的地址是可以看见这里是要登录后才有功能，并且没有验证码，第一思路就是弱口令，不过一顿弱口令爆破之后无法进入，那应该就是别的方法进入")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129163040853.webp",alt:"image-20231129163040853"}})]),t._v(" "),a("p",[a("strong",[t._v("既然弱口令尝试了无法进入，但是可以看到除了登录还剩一个功能点，也就是注册。盲猜可能是越权，越权就是利用一些方式绕过权限检查，访问或者操作其他用户或者更高权限。那我们就通过注册普通用户越权到管理员用户 先随便注册一下")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129184110870.webp",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("可以看到我们刚刚新建的用户建立成功，然后就是正常的登录进去")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129164131522.webp",alt:"image-20231129164131522"}})]),t._v(" "),a("p",[a("strong",[t._v("进来后看到提示 有一个zip文件下载下来居然报毒了，里面肯定有马")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129184759515.webp",alt:"image-20231129184759515"}})]),t._v(" "),a("p",[a("strong",[t._v("果不其然是一句话木马，看到里面还有提示路劲，但是不知道路径也无法利用起来。还是先去抓包分析一下数据包看看有没有什么新发现")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129165853251.webp",alt:"image-20231129165853251"}})]),t._v(" "),a("p",[a("strong",[t._v("抓包之后发现这个网站的 Cookie 的值有些奇怪，看起来很像base64编码。解码看看")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129184229855.webp",alt:"image-20231129184229855"}})]),t._v(" "),a("p",[a("strong",[t._v("可以看到解码后的信息不就是我创建的用户？可以看到这个 Cookie 的用户名被双层加密了分别是 URL编码 > Base64编码 而用户名后面的那一串乱 码我们不知道是什么，但很大概率只要把用户名改成 admin 然后跟上后面的 = 号部分的内容拼接一下就能越权 到管理员用户")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129184711654.webp",alt:"image-20231129184711654"}})]),t._v(" "),a("p",[t._v("**现在先把 "),a("code",[t._v("admin")]),t._v(" 用base64 编码一下，得到  "),a("code",[t._v("YWRtaW4=")]),t._v("  **")]),t._v(" "),a("p",[a("strong",[t._v("然后把原本的"),a("code",[t._v("dGVzdDEyMw =|0|SHE2ltbjREhhfODdVvqzy432CjUPraIIaWXWCAf0IO8=")]),t._v(" 这个 也就是原先的 Cookie 把 = 号前面的内容替换成 Base64 编码后的 admin")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129171202509.webp",alt:"image-20231129171202509"}})]),t._v(" "),a("blockquote",[a("p",[a("strong",[a("code",[t._v("YWRtaW4=|0|SHE2ltbjREhhfODdVvqzy432CjUPraIIaWXWCAf0IO8=")])])])]),t._v(" "),a("p",[a("strong",[t._v("到这里还没结束因为这里还有一个可疑"),a("code",[t._v("参数 |0|")]),t._v(" 等号前面的内容代表用户名，那这个数字肯定就是代表权 限，我们把他改成 1 然后再抓包替换一下就可以看到现在我们的权限就越权变成了管理员用户")])]),t._v(" "),a("blockquote",[a("p",[a("strong",[a("code",[t._v("YWRtaW4=|1|SHE2ltbjREhhfODdVvqzy432CjUPraIIaWXWCAf0IO8=")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129185057600.webp",alt:"image-20231129185057600"}})]),t._v(" "),a("p",[a("strong",[t._v("那么此时我们就拿着这个 Cookie 在登录界面刷新一下，然后替换掉数据包中本身的 Cookie 即可完成越 权操作就可以进入管理员用户的账号了")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129185126180.webp",alt:"image-20231129185126180"}})]),t._v(" "),a("p",[a("strong",[t._v("随后经过一番尝试发现只有管理里面的上传点知道文件上传路径，其他地方即使传上去了也不知道传去哪里 了。")])]),t._v(" "),a("p",[a("strong",[t._v("如下 http://hackattack.cn:49213/doku.php?id=welcome&do=admin&page=extension&tab=install")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129185224279.webp",alt:"image-20231129185224279"}})]),t._v(" "),a("p",[a("strong",[t._v("可以看到在这里上传的压缩包会被服务器自动解压到指定目录 "),a("code",[t._v("/lib/plugins/packagename/")]),t._v("，于是我就 写了一个1.php 压缩成 1.zip 之后上传 根据提示可以知道我的木马被解压到了"),a("code",[t._v("/lib/plugins/1/1.php")]),t._v(" 拼接访问后即可getshell")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129190117790.webp",alt:"image-20231129190117790"}})]),t._v(" "),a("blockquote",[a("p",[a("strong",[a("code",[t._v("http://hackattack.cn:49213/lib/plugins/e/e.php")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129185312788.webp",alt:"image-20231129185312788"}})]),t._v(" "),a("p",[a("strong",[t._v("flag在网站的目录里翻翻就能看见了")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129185334074.webp",alt:"image-20231129185334074"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129185354199.webp",alt:"image-20231129185354199"}})]),t._v(" "),a("blockquote",[a("p",[a("strong",[a("code",[t._v("flag{hdb2021forphpwiki}")])])])]),t._v(" "),a("h2",{attrs:{id:"_2-wiki-某账号信息中存放的flag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-wiki-某账号信息中存放的flag"}},[t._v("#")]),t._v(" 2.wiki-某账号信息中存放的flag")]),t._v(" "),a("p",[a("strong",[t._v("题目地址： http://hackattack.cn:49213")])]),t._v(" "),a("h4",{attrs:{id:"通过服务器本身的后门连接-getshell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过服务器本身的后门连接-getshell"}},[t._v("#")]),t._v(" 通过服务器本身的后门连接 getshell")]),t._v(" "),a("p",[t._v("**在这个位置有提示。根据我们现在这个文件上传路径可以猜测，服务器本身预留的后门路径为 "),a("code",[t._v("/lib/plugins/e/e.php")]),t._v(" **")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129185743313.webp",alt:"image-20231129185743313"}})]),t._v(" "),a("p",[a("strong",[t._v("然后把路径拼接上域名一样可以连接 如果一开始能猜到这个路径就不需要越权登录管理员账号")])]),t._v(" "),a("p",[a("strong",[t._v("然后在 管理 ——> 用户管理可以拿到第二个flag")])]),t._v(" "),a("p",[a("strong",[a("code",[t._v("http://hackattack.cn:49213/doku.php?id=welcome&do=admin&page=usermanager")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129191036213.webp",alt:""}})]),t._v(" "),a("p",[a("strong",[a("code",[t._v("FlagIs@hdb2021wiki1204")])])]),t._v(" "),a("h2",{attrs:{id:"立春橘-貌似某用户的用户名是flag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#立春橘-貌似某用户的用户名是flag"}},[t._v("#")]),t._v(" 立春橘-貌似某用户的用户名是flag")]),t._v(" "),a("p",[a("strong",[t._v("题目地址：http://hackattack.cn:49215")])]),t._v(" "),a("p",[t._v("来到主页是这样的，是一个个人的博客站点")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129192241399.webp",alt:"image-20231129192241399"}})]),t._v(" "),a("p",[a("strong",[t._v("右上角有一个显眼的登录按钮，老样子试一下常见的弱口令")])]),t._v(" "),a("blockquote",[a("p",[a("strong",[a("code",[t._v("admin admin123")])])])]),t._v(" "),a("p",[a("strong",[t._v("多试试了几个就进来了")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129192625957.webp",alt:"image-20231129192625957"}})]),t._v(" "),a("p",[t._v("题目提示的某用户 ，肯定有东西 既然是用户肯定直接看用户管理，果然就看到了flag")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129192849898.webp",alt:""}})]),t._v(" "),a("blockquote",[a("p",[a("strong",[a("code",[t._v("flag{zhss-caos-u98c-d6cz}")])])])]),t._v(" "),a("blockquote",[a("p",[a("strong",[a("code",[t._v('python dirsearch.py -u "http://hackattack.cn:49215" -e*')]),t._v("是扫全部的意思")])]),t._v(" "),a("p",[a("strong",[a("code",[t._v('python dirsearch.py -u "http://hackattack.cn:49215" -e proxy "http://127.0.0.1"')])])])]),t._v(" "),a("p",[a("strong",[t._v("扫描完之后发现了一个神奇的东西，疑似网站源码泄露")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129212139714.webp",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("可以发现这就是源码泄露，这里还有一个数据库文件，可惜里面没有有价值的信息。 不过在这里可以看见这些代码的意思应该是生成一个验证码 code 一开始没想到可以通过这个方法注册低 权限用户，我直接请求郑总出手。随后他根据这个源码泄露的路径在网站上拼接访问如下")])]),t._v(" "),a("blockquote",[a("p",[a("strong",[a("code",[t._v("http://hackattack.cn:49215/zc/phone.php")])])])]),t._v(" "),a("p",[a("strong",[t._v("这里返回的数据是 json 数据我们只需要看 code 是多少就行了，这个就是验证码")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129213151206.webp",alt:"image-20231129213151206"}})]),t._v(" "),a("p",[a("strong",[t._v("然后来到注册界面注册一下账号")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129213541528.webp",alt:"image-20231129213541528"}})]),t._v(" "),a("p",[a("strong",[t._v("这里的验证码一定要填写刚刚那个地方的验证码才能注册成功")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129213631142.webp",alt:"image-20231129213631142"}})]),t._v(" "),a("p",[t._v("**然后返回登录看看有这个账号有什么新东西 里面一样可以上传文件，但毫无意外的是都被拦了 **")]),t._v(" "),a("p",[a("strong",[t._v("不过却很意外的发现这里多了一个管理员没有的功能")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129214232491.webp",alt:"image-20231129214232491"}})]),t._v(" "),a("p",[a("strong",[t._v("一般看见这种命令执行的地方就很有可能是存在RCE漏洞（远程代码执行漏洞）")])]),t._v(" "),a("p",[a("strong",[t._v("开启抓包然后点一下查看公共文件列表尝试一下 抓到包之后丢到 重放 模块进行测试 这里点一下页面渲染，可能看结果会更清晰")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129221257272.webp",alt:"image-20231129221257272"}})]),t._v(" "),a("p",[a("strong",[t._v("可以看到传递的是path参数，我们把他闭合然后输入其他的Linux系统命令试试")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129221323345.webp",alt:"image-20231129221323345"}})]),t._v(" "),a("p",[a("strong",[t._v("可以看见页面出现whomai的执行结果，此时可以证明这个地方存在RCE漏洞，那我们就可以通过命令执行的 方法写一个shell进入然后连接")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129221359129.webp",alt:"image-20231129221359129"}})]),t._v(" "),a("p",[a("strong",[t._v("相关命令")])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'< = eval($_REQUEST[8]); ?>'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" xyc42b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("php\n")])])]),a("p",[a("strong",[t._v("写完之后点击发送，然后再执行一下 ls 命令查看是否写入 可以看到成功写入了")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129221450788.webp",alt:"image-20231129221450788"}})]),t._v(" "),a("p",[a("strong",[t._v("接下来再执行 pwd 命令查看当前路径，然后拼接域名之后我们就可以使用蚁剑连接了")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129221517362.webp",alt:"image-20231129221517362"}})]),t._v(" "),a("p",[a("strong",[t._v("根据pwd的执行结果可以得知我们的shell写在了服务器的这个位置，随后在浏览器访问一下看看服务器的根 目录是哪个，经过一番探测后得到下面这个路径")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/getfilelist/xyc42b.php\n")])])]),a("p",[a("strong",[t._v("现在可以使用蚁剑开始连接这个路径了")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129221556612.webp",alt:"image-20231129221556612"}})]),t._v(" "),a("p",[a("strong",[t._v("第二个flag的位置在服务器的根目录")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129221613841.webp",alt:"image-20231129221613841"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129221623686.webp",alt:"image-20231129221623686"}})]),t._v(" "),a("blockquote",[a("p",[a("strong",[a("code",[t._v("flag{zhss-coub-98f7-q54w}")])])])]),t._v(" "),a("h2",{attrs:{id:"blog-根目录的flag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blog-根目录的flag"}},[t._v("#")]),t._v(" blog-根目录的flag")]),t._v(" "),a("p",[a("strong",[t._v("题目地址 ：http://hackattack.cn:49214")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231129230715638.webp",alt:"image-20231129230715638"}})]),t._v(" "),a("blockquote",[a("p",[a("strong",[a("code",[t._v("flag{zhss-98yu-1aai-f9qc}")])]),t._v("**")])])])])}),[],!1,null,null,null);a.default=p.exports}}]);