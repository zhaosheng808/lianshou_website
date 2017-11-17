This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).



### `npm start` doesn’t detect changes

## 项目结构

```
.
├── build                      # 项目输出目录
│   └── ...
├── config                     # 配置文件
├── public
│   ├── favicon.ico
│   └── index.html
├── scripts
│   ├── build.js
│   └── start.js
├── src
│   ├── assets                # 项目资源
│   │   └── ...
│   ├── components            # 组件
│   │   └── ...
│   ├── containers            # 页面容器
│   │   └── ...
│   ├── redux                 # redux
│   │   ├── create.js         # 初始化store
│   │   ├── reducers.js       # 初始化store
│   │   └── models            # actions
│   │       └── ...
│   ├── router                # 路由
│   │   └── ...
│   ├── theme                 # 主题
│   │   └── ...
│   │── utils                 # 其他工具类
│   │   └── ...
│   ├── index.js              # webpack打包入口文件
│   └── Main.js               # 组件入口
├── package.json                          # 项目信息
└── README.md                             # README.md
```