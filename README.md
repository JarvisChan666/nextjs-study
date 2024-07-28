# What we have learnt

## Chapter 2 CSS

技巧1："hidden与md:block"组合

## Chapter 4 layouts and pages
Layout带来**部分渲染**的优点：当切换导航时，相同的Layout不会重新render，只render组件

## Chapter 5 Routing
1. **Link**按照路由拆分应用，让页面之间隔离起来，解耦。也就意味着某个页面出现问题，不影响其他页面的正常运行

可以想到，能做到这么快的切换，肯定是“偷步”了，**预加载了**Link路由的代码，使得页面“瞬时”过度完成

2. Showing active link
**usePathname**

