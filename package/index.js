import xForm from './xForm/';
import xTable from './xTable/';
const components = [
    xForm,
    xTable
];

function install(Vue, opts = {}) {
    components.map(component => {
        Vue.component(component.name, component);
    });
}

if (window.Vue) {
    install(window.Vue);
}

export default {
    install,
    xForm,
    xTable
};