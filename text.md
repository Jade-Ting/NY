### 关闭 eslint 校验

- 在你的项目中找到 build----->webpack.base.conf.js 文件
  ```js
  <!-- 如下做注释 -->
  const createLintingRule = () => ({
    // test: /\.(js|vue)$/,
    // loader: 'eslint-loader',
    // enforce: 'pre',
    // include: [resolve('src'), resolve('test')],
    // options: {
    //   formatter: require('eslint-friendly-formatter'),
    //   emitWarning: !config.dev.showEslintErrorsInOverlay
    // }
  });
  ```
- 重启项目


### Duplicate named routes definition
> [warning] vue-router.esm.js?fe87:16 [vue-router] Duplicate named routes definition: { name: "BigCountry", path: "BigCountry" },路由命名重复


## vue-router
vue-router 会监听浏览器的