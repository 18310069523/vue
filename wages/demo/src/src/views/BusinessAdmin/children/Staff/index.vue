<template>
  <div class="page-content">
    <Tool @getStaffList="getStaffList"/>
    <TableBox :tableData5="tableData5" @getStaffList="getStaffList"/>
  </div>
</template>

<script>
import Tool from './components/Tool'
import TableBox from './components/TableBox'

export default {
  name: 'Home',
  data () {
    return {
      tableData5: [],
      filters: {}
    }
  },
  components: {
    TableBox,
    Tool
  },

  created () {
    this.getStaffList({})
  },

  methods: {
    getStaffList ({page = 1, pageSize = 10, filters}) {
      this.filters = !filters ? this.filters : filters

      this.$http.get('/api/getStaffList', {
        params: {
          page: page - 1,
          pageSize,
          filters: this.filters
        }
      }).then((data) => {
        console.log(data)
        this.tableData5 = data
      })
    }
  }
}
</script>

<style scoped lang="less">
.page-content{
  width: 100%;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
