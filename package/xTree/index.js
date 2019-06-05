import xTree from './src/xTree';

xTree.install = function(Vue) {
  Vue.component(xTree.name, xTree);
};

export default xTree;