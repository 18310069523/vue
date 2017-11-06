<template>
<div>
  <el-table
    :data="tableData"
    style="width: 100%"
    size="mini">
    <el-table-column
      label="账号类型"
      prop="text">
    </el-table-column>
    <el-table-column
      label="所得权限"
      prop="data">
    </el-table-column>
    <el-table-column
      label="编辑">
      <template slot-scope="scope">
      <el-button
        type="text"
        size="small"
        disabled
        v-if='scope.row.id == 1'
      >
        权限编辑
      </el-button>
      <el-button
        type="text"
        size="small"
        v-else
      >
        权限编辑
      </el-button>
    </template>
    </el-table-column>
  </el-table>
</div>
</template>
<script>
export default {
  name: 'AuthorityDistribution',
  data () {
    return {
      tableData: []
    }
  },

  created () {
    this.$http.get('/api/getRules', {
      params: {}
    }).then((rules) => {
      console.log(rules)
      this.tableData = rules
      // newRouter.push('/dsfsdfdsfdsf')
    })
  }
}
</script>
<style lang="less">

</style>
