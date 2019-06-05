import * as selectListAll from './dictionary';

export default {
	install: function(Vue, options) {
		Vue.mixin({
			methods: {
				importDic(...listName) {
					let arr = [];
					listName.forEach(name => {
						if(selectListAll[name]) {
							arr = arr.concat(selectListAll[name]);
						} else {
							console.log(`不存在数据字典${name}！！！`)
						}
					});
					return arr;
				},
				filterDict(listName, value) {
					let dict = selectListAll[listName];
					if(dict) {
						for(let i = 0; i < dict.length; i++) {
							if(dict[i].value == value) return dict[i].label;
						}
					}
					return '';
				},
			}
		})
	}
};