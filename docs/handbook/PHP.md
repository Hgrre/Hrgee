## 变量

#### PHP也是一门弱类型语言，不需要去声明，它不需要像C语言一样，声明它的类型。

```
$num = 123;			//数值
$str = "123";		//字符串
$b = true;			//布尔型
$num = 123.1;		//浮点型

$a = array("123",123,false);		//数组

//常量
defind("USERNAME","admin");			//定义一个叫 username 的常量
echo USERNAME;						//输出admin
```

### 变量的赋值方式

#### 传值赋值方式

```
$num =123;
$test;
$test=$num;
```

#### 传地址赋值方式（也可以说是C语言里的指针）

```
$num = 123;
$test = &$num;			// & 取地址的符号
echo test;				// 输出123
$test=12;
echo $test;				// 输出12
echo $num;				//输出12
```

#### 可变变量(`$`是一个变量 ,如果再加一个`$` 它会去声明一个变量再给它直接进行一个赋值，俗称套娃)在后面做免杀的时候用到

```
//可以用变量的'值',作为变量的'名'
$varname = "age";
$$varname = 20 ;		//声明一个 age 的变量并赋值20
echo $age ;				//输出20
```

####   变量的函数

```
gettype()			// 直接返回变量类型
var_dump()			//返回变量类型和变量的值

isset()				// 检查变量是否被定义，若已被定义返回true 反=反之则返回false

unset()				//取消变量的定义
```

## 运算符

```
比较运算符
$a = = $b				//只要值相等即为true
$a = = = $b				//需要值和数据类型相等才为true

$a ! = $b
$a ! = = $b

逻辑运算符
$a xor $b ;
&&运算符
$a && $b ;				// 如果$a表达式为true 那么就不执行$b表达式

字符连接符 .
$a = 'admin';
$a.'@123';				// 通过 '.' 进行字符串连接，而不是用+

错误抑制符 @    
@mysqli_connet('127.0.0.1','root','root')		//数据库连接失败不报错

执行运算符 `
`ipconfig`				// 执行ipconfig这个系统命令

位运算符
$a & $b					//与的位运算
Sa | $b					//或的位运算
$a ^ $b					//异或的位运算
~$a 					//非的位运算
```

## 数组

#### 数组的创建

#### 下标有两种方式

![138b30663071e60f3b770427f60ac07](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/138b30663071e60f3b770427f60ac07.webp) 

```
$list[] = 'red';
$list[2] = 'green';
$list['blue'] = '蓝色';

//通过函数的创建
$color = array('red'=>'红色','blue'=>'蓝色');

//二维数组
$color = array('color' => array('red'=>'红色','blue'=>'蓝色'));
```

#### 数组的函数 

```
range(start,end)		//快速创建一个从start到end范围的数字或字符数组

count()					//返回数组的个数

max()					//返回最大值
mix()					//返回最小值
判断Ascii码来比较大小
```

#### 数组的遍历（其实就是for循环，改编版的 for each） 

```
//foreach语句
foreach ($array_list as $value){
	echo $value;
}

foreach ($array_list as $key => $value){
	echo $key.'->'.$value;
}

array_keys()				//以数组形式返回数组的key
array_values()				//以数组形式返回数组的value
in_array()					//在数组查找值，成功返回true 反之返回false
```

#### 如：(数组除了值还有键值)

![](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231009113347032.webp)   

## 浏览器数据采集

```
$username = $_POST['username'];			//只可以接收post 请求的数据
$username = $_GET['username'];			//只可以接收get请求的数据
$username = $_REQUEST['username'];		//get和post请求的数据都可以接收
```



#### form表单综合应用

```
<form action="register.php" method="post" enctype="multipart/form-data">
用户名
<input type="text" name="userName" size="20" maxlength="15" value="必须填写用户名"/>
@
<select name="domain">
	<option value="@163.com" select>163.com</option>
	<option value="@126.com">126.com</option>
</select>
<br/>
登录密码:
<input type="password" name="password" size="20" maxlength="15" />
<br/>
确认密码:
<input type="password" na ="confirmPassword" size="20" maxlength="15" />
<br/>
备注信息:
<textarea name="remark" cols="30" rows="4">请填写备注信息</textarea>
<br/>
提交按钮:
<input type="submit" name="submit1" value="普通提交按钮" />
<br/>
图片按钮:
<input type="image" name="submit2" src="http://www.google.cn/intl/zh-CN/image/Login.gif" height="40" />
<br/>
重置按钮:
<input type="reset" name="cancel" value="重新填写" />
</form>
选择性别:
<input name="sex" type="radio" value="male" checked />男
<input name="sex" type="radio" value="female" />女
<br/>
个人爱好:
<input name="interests[]" type="checkbox" value="music" checked />音乐
<br/>
个人相片:
<input type="hidden" name="MAX_FILE_SIZE" value="1024">
<br/>
```

##  文件上传

```
<?php
//可以通过foreach来查看信息
<?php
foreach ($_FILES['myfile'] as $key => $value){
	echo $key.'->'.$value.'<br>';
}
move_uploaded_file($_FILES['myfile']['tmp_name'],'D:\\1.jpg)
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>上传文件</title>
</head>
<body>
    <form action="a.php" method="post" enctype="multipart/form-data">
        <input type="file" name="myfile">
        <input type="submit" value="上传">
    </form>
    
</body>
</html>
```

#### 文件上传

```
post_max_size=100M				//数据大小
upload_max_filesize=100M		//文件上传大小限制
upload_tmp_dir ="c:/wamp/tmp"	//临时文件
max_input_time=60 				//解析数据时间-1为无限制
```

#### 文件上传-预定义变量$_FILE

```
$_FILES['myPicture']['name']:	上传文件的文件名
$_FILES['myPicture']['type']:	上传文件的MIME类型
$_FILES['myPicture']['size']:	上传文件的大小，单位为字节
$_FILES['myPicture']['tmp_name']:	与上传文件相对应的服务器端的临时文件名
$_FILES['myPicture']['error']:		文件上传的状态代码
```

#### 文件上传函数

```
is_upload_file() 			是否产生临时文件
move_uploaded_file() 		将临时文件移动到指定目录
```

## 函数

* **函数就是将我们的一个代码去对它进行一个封装**

#### 做免杀的时候可以用来拼接

![image-20231010151157202](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231010151157202.webp) 

![](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231010151014746.webp) 

```
//自定义函数
functio 函数名(){
	return ;
}
```

## 对象

* **就是存储数据的既可以存储函数还可以存储变量**

```mo
class stu{
		var $name;
		var $age;
		function setname($name){
			$this->name =$name;
		}
		function getname(){
			return $this->name;
		}
	}
$stu_xm = new stu;
$stu_xm -> setname("小明");
	echo $stu_xm->getname();
```

## 魔术方法

 ![image-20231010154439239](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231010154439239.webp) 



