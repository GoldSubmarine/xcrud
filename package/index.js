import xForm from './xForm/'
import xTable from './xTable/'
import globalConfig from './common/config'
const components = [
  xForm,
  xTable
]

function install(Vue, opts = {}) {
  globalConfig.set(opts)
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  xForm,
  xTable
}
