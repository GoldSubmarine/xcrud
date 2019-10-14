<template>
  <div class="api-wrap">
    <h2>
      <a :href="'#'+title" aria-hidden="true" class="header-anchor">#</a>
      {{title}}
    </h2>
    <el-table v-if="type === 'attr'" :data="apiData" style="width: 100%">
      <el-table-column prop="params" label="参数" width="100"></el-table-column>
      <el-table-column prop="describe" label="说明">
        <template slot-scope="scope">
          <span>
            {{ describeFilter(scope.row.describe) }}
            <el-link v-if="LinkRegx.test(scope.row.describe)" :href="getLink(scope.row.describe)" :target="getLink(scope.row.describe).indexOf('http') ? '_blank' : ''" type="primary">{{ getLinkWord(scope.row.describe) }}</el-link>
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="类型" width="120"></el-table-column>
      <el-table-column prop="optionValue" label="可选值" width="120"></el-table-column>
      <el-table-column prop="defaultValue" label="默认值" width="100"></el-table-column>
    </el-table>
    <el-table v-else :data="apiData" style="width: 100%">
      <el-table-column prop="params" label="事件名称" width="140"></el-table-column>
      <el-table-column prop="describe" label="说明"></el-table-column>
      <el-table-column prop="cbparams" label="回调参数"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'DemoApi',
  props: {
    type: {
      type: String,
      default: 'attr'
    },
    title: {
      type: String,
      default: '属性'
    },
    apiData: Array
  },
  data() {
    return {
      LinkRegx: /\[(.+)\]\((.+)\)/  //分组，$1,$2
    }
  },
  methods: {
    describeFilter(data) {
      if(this.LinkRegx.test(data)) {
        data = data.replace(this.LinkRegx, '')
      }
      return data
    },
    getLink(data) {
      this.LinkRegx.test(data)
      return RegExp.$2
    },
    getLinkWord(data) {
      this.LinkRegx.test(data)
      return RegExp.$1
    }
  }
}
</script>

<style lang="scss">
// .api-wrap {
//   margin: 40px 0;
//   &:first-child {
//     margin-top: 80px;
//   }
//   &:last-child {
//     margin-bottom: 80px;
//   }
// }
// .el-table {
//   table {
//     border-collapse: collapse;
//     margin: 0;
//   }

//   th, td, th.is-leaf {
//     border: none;
//   }

//   .el-table__body, .el-table__footer, .el-table__header{
//     border-collapse: collapse;
//   }
// }
.api-wrap{
  h2 {
    padding: 0;
    margin: 55px 0 20px;
    font-weight: 400;
    color: #1f2f3d;
    border-bottom: none;
    font-size: 22px;
  }

  table {
    display: table;
    border-collapse: separate;
    margin: 0;
  }

  th, td {
    border: inherit;
  }

  td {
    border-bottom: 1px solid #EBEEF5;
  }

  tr {
    border-top: initial;
  }

  tr:nth-child(2n) {
    background-color: initial;
  }
}
</style>
