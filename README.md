# zhihudaily

> 知乎日报

使用vue2做的知乎日报的webApp, 接口来自[这里](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)

## 问题整理

1. [使用v-html渲染了来自服务端的html代码, 修改这部分DOM的样式](https://github.com/dingtwo/zhihudaily/wiki/%E4%BF%AE%E6%94%B9v-html%E6%B7%BB%E5%8A%A0%E7%9A%84DOM%E5%85%83%E7%B4%A0%E7%9A%84%E6%A0%B7%E5%BC%8F)

2. [fixed元素无法滚动, 滑动穿透](https://github.com/dingtwo/zhihudaily/wiki/fixed%E6%B5%AE%E5%B1%82%E6%97%A0%E6%B3%95%E6%BB%9A%E5%8A%A8,-%E7%A9%BF%E9%80%8F%E6%BB%9A%E5%8A%A8%E5%BA%95%E5%B1%82%E5%86%85%E5%AE%B9)

3. 抽屉组件没有重用, 导致显示隐藏的混乱


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
