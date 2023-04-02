module.exports = {
        base: '/Hrgee/', // 这个路径名称就是你刚才所配置的项目名！！！，斜杠不能漏！！！
         themeConfig: {
            nav: [
                { text: '首页', link: '/' },
                {
                    text: 'Ling blog',
                    items: [
                        { text: 'Github', link: 'https://github.com/Hgrre/Hrgee.git' },
                    ]
                }
            ],
            sidebar: [
                {
                    title: '欢迎学习',
                    path: '/',
                    collapsable: false, // 是否折叠
                    children: [
                        { title: "博客介绍", path: "/" }
                    ]
                },
            {
                  title: "CTF-WP",
                  path: '/handbook/1',
                  collapsable: true, // 是否折叠
                  children: [
                    { title: "图片隐写", path: "/handbook/1" },
                    { title: "密码学", path: "/handbook/3" },
                    { title: "流量分析", path: "/handbook/4" },
                    { title: "Web", path: "/handbook/5" },
                  ],
                },
                {
                      title: "Python基础",
                      path: '/handbook/2',
                      collapsable: true, // 是否折叠
                      children: [
                        { title: "Python笔记", path: "/handbook/2" }
                        // { title: "博客搭建", path: "/handbook/3" }
                      ],
                    }
              ]
        }
    }