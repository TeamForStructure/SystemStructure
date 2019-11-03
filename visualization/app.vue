<template>
    <div id='app'>
        <el-row :gutter="20" >
            <el-col :span="16">
                <div class=" grid-content bg-purple">
                    <div 
                    style="
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    justify-content: space-between;
                    margin-bottom:20px;">
                      <router-link to='/InstructionStatus'>指令状态</router-link>
                      <router-link to='/FunctionUnitStatus'>功能部件状态</router-link>
                      <router-link to="/RegisterResultStatus">寄存器使用状态</router-link>
                    </div>
                    
                    <router-view></router-view>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple"> 
                    <control></control>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
import Control from './views/Control.vue'
export default {
    data(){
        return {
            name: 'Vue.js'
        }
    },
    components:{
        control: Control
    }
}
</script>
<style  scoped>
  /* .el-row {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  } */
  .bg-purple {
    background: #d3dce6;
  }
  /* .bg-purple-light {
    background: #e5e9f2;
  } */
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  /* .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  } */
</style>