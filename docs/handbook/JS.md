## JS 变量

#### JS是一门弱类型语言，解释性的语言，它是可以直接被浏览器所解释的，它不需要像C语言一样，声明它的类型。

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

```
select column_name from information_schema.columns where table_schema = 'dvwa' and table_name ='users'
```

