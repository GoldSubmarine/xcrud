import * as selectListAll from './dic'

export default {
  install: function(Vue, options) {
    Vue.mixin({
      methods: {
        importDic(...listName) {
          let arr = []
          listName.forEach(name => {
            if (selectListAll[name]) {
              arr = arr.concat(selectListAll[name])
            } else {
              console.log(`不存在数据字典${name}！！！`)
            }
          })
          return arr
        },
        filterDic(listName, value) {
          const dic = selectListAll[listName]
          if (dic) {
            for (let i = 0; i < dic.length; i++) {
              if (dic[i].value === value) return dic[i].label
            }
          }
          return ''
        }
      }
    })
  }
}
