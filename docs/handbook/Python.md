## 变量类型

* **Python 是一门弱类型语言，不需要去声明它的类型**

```python
i=0			#整数型
f=1.11		#浮点型
b=True		#布尔型
s='string'	#字符串型

list_1 = [1,2,3]		#列表
tuple_1 = (1,2,3)		#元组
dict_1 = {'anme':'张三','sex':'男'}		#字典

print(i)	#输出
```

### 列表

```python
list = ['runoob',786, 2.23, 'john', 70.2 ]
tinylist = [123, 'john']

print(list)						# 输出完整列表
print(list[0])					# 输出列表的第一个元素
print(list[1:3])				# 输出第二个至第三个元素
print(list[2:])					# 输出从第三个开始至列表末尾的所有元素
print(tinylist * 2)				# 输出列表两次
print(list + tinylist)			# 打印组合的列表

list.append(value)				# 添加
list.remove(value)				# 删除

# 二元列表
lisst = [[1,2,3],['a','b','c']]
```

### 元组

* **元组被定义完后就不能再被修改**

```python
tuple = ('runoob', 786 , 2.23, 'john', 70.2)
tinytuple = (123, 'john')
```

### 字典

```python
dict = {}
dict['one'] = "This is one"
dict[2] = "This is two"

tinydict = {'name': 'runoob','code':6734, 'dept': 'sales'}

print (dict['one'])				# 输出键为'one' 的值
print (dict[2])					# 输出键为 2 的值
print (tinydict)				# 输出完整的字典
print (tinydict.keys())			# 输出所有键
print (tinydict.values())		# 输出所有值

tinydict.pop('name')			# 删除索引为 'name' 的值
```

## 运算符

### 逻辑运算符

```python
1 and 1			# Ture  与
1 or 0			# Ture  或
not 0			# Ture  非
```

### 成员运算符

```python
list[1，2，3，4]
1 in list			# Ture 1 存在 list 中
0 not list 			# Ture 0 不存在list 中
```

## 条件语句

### if 语句

```python
if 表达式1:
	执行语句1
elif 表达式2:
	执行语句2
else:
	执行语句2
```

### while 语句

```python
while 表达式:
	执行语句
```

### for 语句

```python
# 通过序列数值迭代循环
text="Hello Siri~"
for c in text:
    print("当前字符是:%s"%c)
    
# 通过序列索引迭代循环
fruits = ['banana', 'apple', 'mango']
for index in range(len(fruits[index]))
	print('当前水果 ： %s' % fruits[index]) 
```

## 函数

```python
def 函数名(参数1， 参数2):
	执行语句
	
def printinfo( name, age = 35 ):      # 参数默认值
	print ("Name: ", name)
	print ("Age ", age)
	return

# 调用printinfo 函数
printinfo( age=50, name="miki" )
printinfo( name="miki" )

# 不定长参数
def printinfo(*vartuple ):
    for var in vartuple:
        print(var)
        return
# 调用 printinfo 函数
printinfo( 10 )
printinfo( 70, 60, 50 )

eval(a)
```

## 模块

* Python 模块，是一个Pytho文件，以.py 结尾，包含了Python 对象定义喝Python语句。模块能够让你有逻辑的组织你的Python 得到代码段。 把相关的代码分配到一个模块里能让你的代码更好用，更易懂。 模块能定义函数，类喝变量，模块里也能包含可执行的代码。

```python
def print_func( par ):
	print("Hello : ", par)
	return
```

```python
import 模块名    # 将模块导入
import print_func

from 模块名 import 函数名
from print_f import print_func		# 导入模块的指定函数
```

## 文件I/O流

#### 文件流

```python
fo = open('D:\\foot.txt','w+')				# r 为读 w 为写 a 为追加
fo.write( "你好啊")						 #写入内容
fo.close()								   # 关闭文件流

fo = open('D:\\foot.txt','r+')			   # r 为读 w 为写 a 为追加
print(fo.readline())					   # 读取一行内容
print(fo.read())						   # 读取全部
fo.close()

# with open
with open("python.txt","a+") as fi:
    fi.write("Sometimes i get high , sometimes i get low!")
```

## 小作业

**任意写一个python 的`upper()函数`, 将一个字符串中所有的小写字母变成大写字母**

![image-20231106112740564](https://rtyu-1317440738.cos.ap-guangzhou.myqcloud.com/image-20231106112740564.webp) 

**源码**：

```python
#  方法1 ：字符串小写转大写
a = wo ai pan yi hua"
print(s.upper())


# 方法2：字符串小写转大写
def upper_(str):
    for c in str:
        if c >='a' and c <='z':
            print(chr(ord(c)-32), end='')
            
upper_('abcdefg')


# 字符串大写转小写
a = "WO AI PAN YI HUA"
print(a.lower())"
```

 **任意写一个列表查找值并返回下标的函数**

* **源码**

```python
list = ['赵云','诸葛亮','曹操','孙权','赵云']
def test(str):
    i = 0
    list_ = []
    for n in list:
        if n==str:
            list_.append(i)
        i+=1
    return  list_
print(test('赵云'))

# 输出结果是：[0, 4]
```

**`输出结果是：[0, 4]`**

  **任意写一个列表值替换的函数**

```python
list = ['赵云','诸葛亮','曹操','孙权','赵云']
def test(str,str_1):
    i = 0
    for n in list:			#  可用这个 range(len(list)):
        if n == str:
            list[i] = str_1
        i+= 1
    return list
print(test('赵云','小小白'))

# 输出结果是 ：['小小白', '诸葛亮', '曹操', '孙权', '小小白']
```

**`输出结果是 ：['小小白', '诸葛亮', '曹操', '孙权', '小小白']`**

## 面向对象编程

```python
class stu：   # 定义一个类

	def _init_(self, name, age):
        self.name = name
        self.age = age
    def getname(self):
        print ("name:",self.anme)
        
    def stename(self,name):
        self.name = name
        
class xm(stu):			# 继承stu类
    _money = 100.1
    def _init_(self,name,age,phone):
        stu._init_(self,name,age)
        self.phone = phone
    def setname(self,name):
        self.name = name
        print(self.name)
        
x = xm("小明",16,123456)
x.getname()
x.setname()
```

## 多线程

* **多线程类似于同时执行多个不同程序，多线程运行有如下优点：**

  **1.使用线程可以把占据长时间的程序中的任务放到后台去处理。**

  **2.用户界面可以更加吸引人，这样比如用户点击了一个按钮去触发某些事件的处理，可以弹出一个进度条来显示处理的进度**

  **3.程序的运行速度可能加快**

  **4.在一些等待的任务实现上如用户输入、文件读写和网络收发数据等，线程就比较有用了。在这种情况下我们可以释放一些珍贵的资源如内存占用等等。**

```python
#  第一种方法
import threading   # 导入线程包

def print_list():
    fofr x in range(1000):
        print("你好%d--"%x)
threading.Thread(target=print_list).start()
threading.Thread(target=print_list).start()
# threading.Thread(target=print_list).start()
# 传递给线程函数得参数，他必须是个 tuple 类型

# 第二种方式
import threading

class Thread(threading.Thread):
    def _init_(self):
        threading.Thread._init_(self)
    
    def run(self):
        print_list()
def print_list():

```

* **线程在执行过程中与进程还是有区别的。每个独立的进程有一个程序运行的入口、顺序执行序列和程序的出口。但是线程不能够独立执行，必须依存在应用程序中，由应用程序提供多个线程执行控制。**

* **每个线程都有他自己的一组CPU寄存器，称为线程的上下文，该上下文反映了线程上次运行该线程的CPU寄存器的状态。指令指针和堆栈指针寄存器是线程上下文中两个最重要的寄存器，线程总是在进程得到上下文中运行的，这些地址都用于标志拥有线程的进程地址空间中的内存。**

- **线程可以被抢占（中断）。**
- **在其他线程正在运行时，线程可以暂时搁置（也称为睡眠） -- 这就是线程的退让。**

 

## requests模块

**顾名思义就是通过`requests `去发送请求的有2个方法如何下：**

* **requests.get 请求**
* **requests.podt 请求**

