import Vue from 'vue'
import App from './App'
import {Button} from 'mint-ui'

//注册成标签(全局)
Vue.component(Button.name,Button)

//在main.js中引用的文件在任何组件中都有效
new Vue({
  el:'#app',
  components:{App},
  template:'<App/>'
})

