<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="name"
      label="Name"
      width="80px">
    </el-table-column>
    <el-table-column
      prop="busy"
      label="Busy"
      width="60px">
    </el-table-column>
    <el-table-column
      prop="Op"
      label="op"
      width="60px">
    </el-table-column>
    <el-table-column
      prop="Fi"
      label="Fi"
      width="60px">
    </el-table-column>
    <el-table-column
      prop="Fj"
      label="Fj"
      width="70px">
    </el-table-column>
    <el-table-column
      prop="Fk"
      label="Fk"
      width="70px">
    </el-table-column>
    <el-table-column
      prop="Qj"
      label="Qj"
      width="70px">
    </el-table-column>
    <el-table-column
      prop="Qk"
      label="Qk"
      width="70px">
    </el-table-column>
    <el-table-column
      prop="Rj"
      label="Rj"
      width="70px">
    </el-table-column>
    <el-table-column
      prop="Rk"
      label="Rk"
      width="70px">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        // tableData: []//this.$store.state.functionUnits
      }
    },
    computed: {
      tableData(){
        return this.$store.state.functionUnits
      }
    },
  }
</script>