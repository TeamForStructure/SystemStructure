<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="F0"
      label="F0"
      width="60px">
    </el-table-column>
    <el-table-column
      prop="F1"
      label="F1"
      width="60px">
    </el-table-column>
    <el-table-column
      prop="F2"
      label="F2"
      width="80px">
    </el-table-column>
    <el-table-column
      prop="F3"
      label="F3"
      width="60px">
    </el-table-column>
    <el-table-column
      prop="F4"
      label="F4"
      width="60px">
    </el-table-column>
    <el-table-column
      prop="F5"
      label="F5"
      width="60px">
    </el-table-column>
    <el-table-column
      prop="F6"
      label="F6"
      width="60px">
    </el-table-column>
    <el-table-column
      prop="F7"
      label="F7"
      width="60px">
    </el-table-column>
    <el-table-column
      prop="F8"
      label="F8"
      width="60px">
    </el-table-column>
    <el-table-column
      prop="F9"
      label="F9"
      width="60px">
    </el-table-column>
    <el-table-column
      prop="F10"
      label="F10"
      width="60px">
    </el-table-column>
    <el-table-column
      prop="F11"
      label="F11"
      width="60px">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        //tableData: []//this.$store.state.registers
      }
    },
    computed: {
      tableData(){
        return this.$store.state.registers
      }
    },
  }
</script>