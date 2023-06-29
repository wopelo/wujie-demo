## 无界 React + Vite demo

### 开发指南
``` shell
# 安装依赖
yarn

# 启动项目，需要分别启动主应用和子应用
yarn dev

# 构建项目
yarn build

# 本地预览项目
yarn preview
```

### 说明
在主应用中进行了处理，使得可以在主应用中打开 react-devtools 调试子应用
用了点不优雅的方式，解决遇到的两个问题：
1. 本地开发时，主应用 App 被执行了两次，一个表现就是 useEffect(() => { // ... }, []) 这种语句被执行了两次，如果不处理的话，appWindow.\_\_REACT_DEVTOOLS_GLOBAL_HOOK\_\_ = window.\_\_REACT_DEVTOOLS_GLOBAL_HOOK\_\_ 被重复执行，导致 react-devtools 中同一个子应用出现多次。解决方法就是只在最后一次执行时挂载 \_\_REACT_DEVTOOLS_GLOBAL_HOOK\_\_。
2. 习惯上，将 react 应用命名为 APP，这会导致 react-devtools 中出现多个 App 标签，解决方案是子应用不命名为 APP。