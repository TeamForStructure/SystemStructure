<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="instruction"
      label="Instruction"
      width="100px">
    </el-table-column>
    <el-table-column
      prop="target"
      label="target"
      width="80px">
    </el-table-column>
    <el-table-column
      prop="j"
      label="j"
       width="60px">
    </el-table-column>
    <el-table-column
      prop="k"
      label="k"
      width="80px">
    </el-table-column>
    <el-table-column
      prop="issue"
      label="Issue"
       width="80px">
    </el-table-column>
    <el-table-column
      prop="readOperand"
      label="Read operand">
    </el-table-column>
    <el-table-column
      prop="ExeComplet"
      label="Execution Completion">
    </el-table-column>
    <el-table-column
      prop="writeResult"
      label="Write Result"
       width="120px">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          instruction: "LD",
          target:"F6",
          j:"34+",
          k:"R2",
          issue:"",
          readOperand:"",
          exeComplet:"",
          writeResult:""
        }
        ]
      }
    }
  }
</script>