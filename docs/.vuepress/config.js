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
                path: '/handbook/图片隐写',
                collapsable: true, // 是否折叠
                children: [
                    { title: "图片隐写", path: "/handbook/图片隐写" },
                    // { title: "密码学", path: "/handbook/密码学" },
                    // { title: "流量分析", path: "/handbook/流量分析" },
                    // { title: "web", path: "/handbook/web" },
                    // { title: "", path: "/handbook/5" },
                    ],
                },
                {
                title: "Python基础",
                path: '/handbook/Python笔记',
                collapsable: true, // 是否折叠
                children: [
                    { title: "python笔记", path: "/handbook/python笔记" }
                    ],
                },
                {
                title: "Linux基础",
                path: '/handbook/Linux笔记',
                collapsable: true, // 是否折叠
                children: [
                    { title: "linux笔记", path: "/handbook/Linux笔记" }
                    ],
                },
                {
                title: "渗透",
                path: '/handbook/sql',
                collapsable: true, // 是否折叠
                children: [
                    { title: "SQL注入", path: "/handbook/sql" }
                    ],
                },
                {
                title: "逆向",
                path: '/handbook/C笔记',
                collapsable: true, // 是否折叠
                children: [
                    { title: "C语言笔记", path: "/handbook/C笔记" }
                    ],
                },
                {
                title: "网络通讯基础",
                path: '/handbook/NA',
                collapsable: true, // 是否折叠
                children: [
                    { title: "NA基础", path: "/handbook/NA" }
                    ],
                },
                {
                title: "操作系统",
                path: '/handbook/windows',
                collapsable: true, // 是否折叠
                children: [
                    { title: "windows命令", path: "/handbook/windows" },
                ],
            },
            {
                title: "Web渗透",
                path: '/handbook/JS',
                collapsable: true, // 是否折叠
                children: [
                    { title: "JS基础", path: "/handbook/JS" },
                ],
            },
        ]
    }
}
      