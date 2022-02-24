# Free Party Cli

版本 1.0.0

目前是初期版本，只能通过默认配置进行配置，后期会添加一个自由配置选项，当前是拉取默认配置进行配置；目前只支持 react 全家桶，后期会添加 vue less stylus nuxt 等配置，向更加自由配置方向发展

默认配置为 `vite react redux redux-toolkit immer react-router axios mockjs sass`


```node
下载包
pnpm install | yarn install | npm install

启动方式，推荐使用 pnpm 包管理工具
pnpm dev | yarn dev | npm run dev

打包方式
pnpm build | yarn build | npm run build
```


```javascript
项目目录
|-- README-zh.md
|-- README.md
|-- envs------------------环境变量
|-- favicon.svg
|-- index.html------------html入口
|-- mock------------------mock模拟请求
|   |-- index.ts        
|-- package.json
|-- src
|   |-- App.tsx-----------react主组件
|   |-- common
|   |   |-- fonts---------字体文件
|   |   |-- images--------图片文件
|   |   |-- style---------公共样式文件
|   |   |-- ts------------公共ts方法
|   |-- components--------组件
|   |   |-- counter-------示例计算组件
|   |   |-- sidebar
|   |-- main.tsx----------入口文件
|   |-- pages-------------路由页面
|   |   |-- about
|   |   |-- home
|   |-- router------------react-router
|   |   |-- index.tsx
|   |   |-- router-view---封装的 router-view
|   |-- store-------------redux
|   |-- vite-env.d.ts-----vite环境变量的类型
|-- tsconfig.json---------ts配置
|-- tsconfig.node.json
|-- types-----------------类型
|-- vite.config.ts--------vite 配置文件
```