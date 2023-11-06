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

