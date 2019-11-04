<template>
    <div id='app'>
        <el-row :gutter="20" >
            <el-col :span="16">
                <div class=" grid-content bg-purple"
                style="
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    align-items: center;
                    margin-bottom:20px;">
                    <!-- <div 
                    style="
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    justify-content: space-between;
                    margin-bottom:20px;">
                      <router-link to='/InstructionStatus'>指令状态</router-link>
                      <router-link to='/FunctionUnitStatus'>功能部件状态</router-link>
                      <router-link to="/RegisterResultStatus">寄存器使用状态</router-link>
                    </div> -->
                    
                    <!-- <router-view></router-view> -->
                    <div><p>指令状态</p></div>
                    <div>
                        
                        <instable></instable>
                    </div>
                    <div><p>功能部件状态</p></div>
                    <div>
                        <functable></functable>
                    </div>
                    <div><p>寄存器使用状态</p></div>
                    <div>
                        <restable></restable>
                    </div>
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
import InstructionStatus from './views/InstructionStatus.vue'
import FunctionUnitStatus from './views/FunctionUnitStatus.vue'
import RegisterResultStatus from './views/RegisterResultStatus.vue'

export default {
    data(){
        return {
            name: 'Vue.js',
        }
    },
    components:{
        control: Control,
        instable: InstructionStatus,
        functable: FunctionUnitStatus,
        restable: RegisterResultStatus
    }
}
</script>
<style  scoped>
  .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>