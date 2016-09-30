require('./css/common.css');

// require('bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

//路由组件
import index from './App.vue'
// import list from './components/list.vue'
import other from './components/other.vue'

//公用组件
import MyHeader from './components/Header.vue';

// 路由器需要一个根组件。
var App = Vue.extend({
    components: {
        MyHeader
    },
    ready (){
        require.ensure(['jquery'], function(require){
            var $ = require('jquery');
            console.log($(document));
        });
        
    }
});


// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
var router = new VueRouter();

// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。
router.map({
    '/index':{
        name:'index',
        component:index
    },
    '/hello':{
        name: 'hello',
        component: function(resolve){
          require(['./components/hello.vue'], resolve);
        }
    },
    '/list':{
        name: 'list',
        component: function(resolve){
          require(['./components/list.vue'], resolve);
        }
    },
    '/other':{
        name: 'other',
        component: other
    }
});
router.redirect({
    '*':'/index'
});
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app');