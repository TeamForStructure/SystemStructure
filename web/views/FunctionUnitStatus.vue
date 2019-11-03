<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="name"
      label="Name">
    </el-table-column>
    <el-table-column
      prop="busy"
      label="Busy">
    </el-table-column>
    <el-table-column
      prop="Op"
      label="op">
    </el-table-column>
    <el-table-column
      prop="Fi"
      label="Fi">
    </el-table-column>
    <el-table-column
      prop="Fj"
      label="Fj">
    </el-table-column>
    <el-table-column
      prop="Fk"
      label="Fk">
    </el-table-column>
    <el-table-column
      prop="Qj"
      label="Qj">
    </el-table-column>
    <el-table-column
      prop="Qk"
      label="Qk">
    </el-table-column>
    <el-table-column
      prop="Rj"
      label="Rj">
    </el-table-column>
    <el-table-column
      prop="Rk"
      label="Rk">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          name: "Integer",
          busy:"Yes",
          Op:"LD",
          Fi:"F2",
          Fj:"45+",
          Fk:"R3",
          Qj:"",
          Qk:"",
          Rj:"Yes",
          Rk:"Yes"
        }
        ]
      }
    }
  }
</script>