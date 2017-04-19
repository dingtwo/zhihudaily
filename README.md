# zhihudaily

> 知乎日报

使用vue2做的知乎日报的webApp, 接口来自[这里](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)

## 问题整理

1. [使用v-html渲染了来自服务端的html代码, 修改这部分DOM的样式]()

2. fixed元素无法滚动, 滑动穿透

3. 抽屉组件没有重用, 导致显示隐藏的混乱


### 使用v-html渲染了来自服务端的html代码, 修改这部分DOM的样式

知乎日报详情页长这样

<img src="http://7xr09w.com1.z0.glb.clouddn.com/2017046B5A824E-E1A4-42D8-924E-0026526515A4.png" />

这页的数据长这样

``` json
{
  "body": "<div class=\"main-wrap content-wrap\">\n<div class=\"headline\">\n\n<div class=\"img-place-holder\"><\/div>\n\n\n\n<\/div>\n\n<div class=\"content-inner\">\n\n\n\n<div class=\"question\">\n<h2 class=\"question-title\">新零售的投资逻辑<\/h2>\n<div class=\"answer\">\n\n<div class=\"meta\">\n<img class=\"avatar\" src=\"http:\/\/pic2.zhimg.com\/v2-b3da97a1d74fbc4cab863eff99c0b505_is.jpg\">\n<span class=\"author\">曲凯，<\/span><span class=\"bio\">海归创投人。42章经（ID：MyFortyTwo）有企图心的人都在关注这个公号<\/span>\n<\/div>\n\n<div class=\"content\">\n<p><strong>一）服务与产品的售卖组合<\/strong><\/p>\r\n<p>我觉得所有线下经营业态都可以被放到一个坐标系中，坐标系中的一条轴是服务、另一条轴是产品。<\/p>\r\n<p>服务型商家的售卖单位一般是时间，服务质量非标化；而产品型商家的售卖单位是件数，产品质量标准化。<\/p>\r\n<p>比如按摩、健身房等是典型的按时间售卖，衣服首饰等是典型的按产品售卖。餐饮和奶茶等商家，在客单价相对稳定的前提下，最终也是偏向服务型售卖时间的（所以对于餐饮行业来说，翻台率是最重要的指标）。<\/p>\r\n<p>那么在线上渠道崛起之后，售卖产品的线下业态是被打击得最厉害的，因为产品是标准化的，可以在网上买的就没必要去线下。而售卖服务的商家相对来说影响偏小。<\/p>\r\n<p>所以，现在线下业态都在谈一个词 &ldquo;体验&rdquo;。零售业态都在往自己的模式中加入更多体验和服务的元素，试图给标准化的产品加上一层非标的外衣，吸引人们进店消费。<\/p>\r\n<p>（比如，餐饮和零售的最明显体验差异就是食物的 &ldquo;温度&rdquo; 属性。所以最常见的关东煮、包子、烤肠等，都是对零售的标准化产品进行加温，带来更好地体验和更高的毛利。）<\/p>\r\n<p>也由于线下实体商店和客户的接触点更多，所以更容易营造全方位的体验，并且和用户产生更多地互动，最终就在用户心中留下了一个 360&deg; 的品牌形象。<\/p>\r\n<p>但是，服务型商家也有一个瓶颈，就是售卖时间的生意天花板极低，难以扩量，所以这些商家呢也开始研究和推出标准化的产品。<\/p>\r\n<p>于是，上海的全家开始出现餐饮区，而餐饮商家开始推出标品的外卖套餐选择，这就是所谓的 &ldquo;餐饮零售化，零售餐饮化&rdquo; 的典型例子。（其实这套宜家早就玩的很溜了，有多少人去宜家是为了餐区而不是家具？）<\/p>\r\n<p>所以，我相信由于获取流量和持续增长的双重需求，最终新零售的一个很大的特点就是服务和产品的售卖结合。<\/p>\r\n<p><strong>二）线上与线下的结合<\/strong><\/p>\r\n<p>对于所有线下业态来说，最终的账都可以用一个公式来算：<\/p>\r\n<p>利润 = 进店人数 * 转化率 * 客单价 * 利润率<\/p>\r\n<p>我们上面已经讲了，线下服务型消费的坏处之一是服务人数是有上限的，所以要用产品化来解决。<\/p>\r\n<p>这也是为什么喜茶现在已经开始卖软欧包。<\/p>\r\n<p>当一个品牌火到排队人数那么多的时候，就说明供给能力跟不上需求端了，而且由于喜茶这类产品需要现做的特性（售卖服务，有附加体验，时间属性产品），决定了供给能力注定是有上限的。<\/p>\r\n<p>所以企业的盈利能力实际已经达到瓶颈了，那要赚更多的钱，最好的方式就是扩产品线，让每个用户的客单价提高，那么售卖奶茶配套产品，而且是标品产品就是最好的选择。<\/p>\r\n<p>但是，线下服务的另一个问题是，流量上限（也就是进店人数）也是有天花板的。<\/p>\r\n<p>一般来说，一个商圈的自然流量，就是一家店能够获取的最大流量上限了。这和互联网业态也是不同的，每家互联网公司理论来讲流量上线都是无穷的。<\/p>\r\n<p>所以，新零售的另一个特点就是线上与线下的流量结合，全渠道获客与变现。<\/p>\r\n<p>过去，各种餐饮零售公司的营业增速往往和投入是成正比的，且并没有边际效应递减。所以互联网公司的单位经济模型是不断变化的，而餐饮零售公司是基本固定的。<\/p>\r\n<p>这就是说，一家餐饮企业，能赚多少钱基本取决于开多少家店。每开一家店都要付出等比的房租成本、人力成本和原材料成本，而且获得预期内的回报。<\/p>\r\n<p>所以很多 VC 觉得，线下的生意仍然是 PE 的投资机会，不适合 VC 投资。但在新零售时代，如果全渠道问题解决了，线下的流量获取后可以继续导流到线上消费，用户终身价值也会显著提高。<\/p>\r\n<p>那么最终，也许增长潜力和速度的问题可以被部分解决，企业的估值也就会更高了。<\/p>\r\n<p>（比如喜茶既然这么招客户喜欢，又形成了一定的品牌认知，以后何不趁势出个自己的线上平台，在其上售卖奶茶、面包之外的标准化产品组合呢？）<\/p>\r\n<p><strong>三）新零售的终极状态<\/strong><\/p>\r\n<p>我之前有段时间在观察美团的布局，发现他们用或自营或投资的方式，布局了一整条生态链上的企业，从最上游的进货方、到中间的餐饮企业管理工具、再到最后的外送等等。<\/p>\r\n<p>我觉得美团在做的就是餐饮业态中底层服务设施的搭建，最终一整个链条上都是美团的生态。<\/p>\r\n<p>那么想象一下，从进货开始到最后的外送环节都已经搭建完成，中间还有一整套 ERP 系统，那么每一个餐饮商家，其实都是美团的虚拟服务商，都是外层的服务顾客的触手。<\/p>\r\n<p>那么新零售的极致也是一样的，每一家实体店，都是具备基本销售能力的体验中心和品牌养成馆，每家店也都是一个大体系中的库存外包，也是线上售卖的区域分拣中心。<\/p>\r\n<p>所以，最终不论是阿里还是京东，最终的终极状态都应该是把基础设施做到最好，让每一个生意人都成为变相的打工者。<\/p>\r\n<p>而这个事情确实挺适合便利店来发挥的，写到这里，长远来看还真是更对便利蜂有所期待了。<\/p>\r\n<p><strong>四）新零售的投资逻辑<\/strong><\/p>\r\n<p>最后，基于以上这些分析，对于投资人（尤其是早期投资人）来说，我觉得有两个投资机会存在：<\/p>\r\n<p>1）投中有线上线下协同效应的，有服务和产品结合点的，能够快速通过单点做出口碑和品牌的商家和团队。（虽然还是很难，但假设能部分满足这些，之后就可以交给 PE 来投资扩张了）<\/p>\r\n<p>2）能够在线下零售生态链条中进行赋能的，比如类 ERP 系统等。<\/p>\r\n<hr \/>\r\n<p>&nbsp;<\/p>\r\n<p>欢迎关注微信公众号：42 章经<\/p>\n\n<div class=\"view-more\"><a href=\"http:\/\/zhuanlan.zhihu.com\/p\/26188691\">查看知乎讨论<\/a><\/div>\n\n<\/div>\n<\/div>\n<\/div>\n\n\n<\/div>\n<\/div>",
  "image_source": "Yestone.com 版权图片库",
  "title": "马云常说的「新零售」会带来哪些新的机会？",
  "image": "https:\/\/pic3.zhimg.com\/v2-b5f946e6b4ef368aa965d9391802c2b2.jpg",
  "share_url": "http:\/\/daily.zhihu.com\/story\/9338357",
  "js": [],
  "ga_prefix": "040607",
  "images": [
    "https:\/\/pic2.zhimg.com\/v2-8fe914d7c0392ec7d3bbd4e05253afd5.jpg"
  ],
  "type": 0,
  "id": 9338357,
  "css": [
    "http:\/\/news-at.zhihu.com\/css\/news_qa.auto.css?v=4b3e3"
  ]
}
```

后端返回了整页的html, 顶部的图片给了一个class为img-place-holder的空div, 为了偷懒, 我直接拿它用来做图片的容器, 准备给这个元素添加backgroundImage, 于是引出来这个问题

首先要获取到这个DOM元素, 只能在mounted中, 代码
``` javascript
mounted() {
    let xx = this.$el.getElementsByClassName('img-place-holder')
    console.log(xx)
    console.log(xx[0])
}
```

结果

<img src="https://sfault-image.b0.upaiyun.com/672/528/672528916-58f5b7bf7e851" />

xx的结果是一个DOM元素的集合, 类数组对象, length是1, 第一个元素就是我想要的东西, 然而下一行打印的`xx[0]`却是`undefined`
这个地方到现在也没有搞明白, 现在可以确定的是在代码里无法拿个这个DOM元素, 那可能是因为在mounted方法中, vue组件的结构挂载完毕了, 但是由v-html的内容只是以字符串的形式添加进去的, 可能此时完整的DOM还没有load结束,
所以把获取这个结构的方法放在setTimeout(0)里, 在事件队列的最后获取

``` javascript
mounted() {
	setTimeout(function () {
		let xx = this.$el.getElementsByClassName('img-place-holder')
        console.log(xx)
        console.log(xx[0])
	}, 0)
}
```

第一次成功的获取到了, 然而发现有时候能获取有时候不能获取, 由于html是由ajax异步请求的, 所以可能当前ajax的结果还没有返回, 解决方法是在created方法中给ajax的promise设置一个变量, 然后在mounted方法中执行

``` javascript
this.promise.then(
	() => {
		setTimeout(function () {
			let placeholder1 = _this.$el.getElementsByClassName('img-place-holder')[0]
			console.log(placeholder1)
			placeholder1.style.backgroundImage = "url(" + _this.proxyImg(_this.data.image) + ")";
		}, 0)
	})
```




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
