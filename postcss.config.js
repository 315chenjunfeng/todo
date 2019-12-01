// postcss是帮助后处理css，就是css已经编译完成了，将stylus编译为css之后，再通过postcss去优化一系列css代码
// 优化的过程就是通过一系列组件去优化，这里使用autoprefixer
// 程序需要一些带浏览器前缀的css属性，autoprefixer会自动去处理这块
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        autoprefixer(),
    ]
};
