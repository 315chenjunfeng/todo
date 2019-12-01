// 入口文件
// .vue文件是一个组件，组件是不能直接挂载到html中的，所以需要在js文件中使用下面的方式处理

// 引入vue类库
import Vue from 'vue'
// 引入App
import App from './app.vue'


// 引入css和images
import './assets/styles/global.styl'

// 创建html挂载节点
const root = document.createElement('div');
document.body.appendChild(root);

// new 一个vue对象
new Vue({
    // 这里是声明组件渲染出来的是挂载App的内容
    // 这里接收的h参数是vue里面createApp的参数，通过这个把App挂载到html里面
    // 具体挂载的时候需要调用$mount()方法，挂载到html的一个节点上
    render: (h) => h(App)
}).$mount(root)
