## Quick Start
### 安装

 ```js
    npm install live-cat-vue --save
 ```
 或者

 ```js
    yarn add live-cat-vue
 ```

### 使用

#### 1、按需引用
 ```js
    import { LivePlayer } from "live-cat-vue";
    components: { LivePlayer },
 ```

 ```html
  <live-player :appKey="xxxxx"></live-player>
 ```

#### 2、全局引用

 ```js 
    import  LivePlayer  from "live-cat-vue";
    Vue.use(liveCat)
 ```

 ```html
  <live-player :appKey="xxxxx"></live-player>
 ```

### 参数
| 名称      | 类型     | 默认                     | 描述    |
| ------- | ------ | ---------------------- | ----- |
| appKey  | String | ''                     | 应用key |
| address | String | https://app.3dcat.live | 地址     |

