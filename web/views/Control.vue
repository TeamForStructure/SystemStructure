<template>
    <div class="box" style="margin-top:0px;">
        <div><p>操作</p></div>
        <div >
            <el-tag
            type="success"
            effect="dark" style="margin-right: 50px;">
            当前周期
            </el-tag>
            <el-tag
                type="info"
                effect="dark" style="width: 100px; text-align:center;">
                {{cycle}}
            </el-tag>
        </div>
        <div >
            <el-input
                type="textarea"
                :rows="6"
                placeholder="请输入指令"
                v-model="textarea"
                style="width:360px;">
            </el-input>
        </div>
        <div >
            <el-button type="success" plain @click="submitInstruction">提交指令</el-button>
        </div>
        <div>
            <el-input v-model="input" placeholder="请输入周期数"></el-input>
        </div>
        <div >
            <el-button type="success" plain @click="sub">提交周期</el-button>
        </div>
        <div >
            <el-button type="primary" icon="el-icon-arrow-left" @click="last" >上一周期</el-button>
            <el-button type="primary"  @click="next">下一周期  <i class="el-icon-arrow-right"></i></el-button>
        </div>
    </div>
</template>
<script>
export default {
    
    data() {
        return {
            textarea: '',
            cycle: 0,
            input:null,
            info: {
                "instructions":""
            }
        }
    },
    methods:{
        async submitInstruction(){
            this.info.instructions = this.textarea
            var res = await this.$axios.post("http://127.0.0.1:8000/info/getinstructions/",this.info)
            .catch(function(error){
                console.log(error);
            });
            console.log(res);
            var arr = []
            arr.push(res.data.registerTable)
            this.$store.dispatch('commitInstructions',res.data.insTable);
            this.$store.dispatch('commitFunctionUnits',res.data.funcUTable);
            this.$store.dispatch('commitRegisters',arr);
        },
        async submitCycle(cycle){
            var res = await this.$axios.get('http://127.0.0.1:8000/info/getcycle?cycle='+cycle)
            .catch(function(error){
                console.log(error);
            });
            var arr = []
            arr.push(res.data.registerTable)
            this.$store.dispatch('commitInstructions',res.data.insTable);
            this.$store.dispatch('commitFunctionUnits',res.data.funcUTable);
            this.$store.dispatch('commitRegisters',arr);
            console.log(this.$store.state.registers);
        },
        sub(){
            this.cycle = Number(this.input);
            this.submitCycle(this.cycle);
            this.input = null;
        },
        last(){
            this.cycle = this.cycle - 1;
            this.submitCycle(this.cycle);
        },
        next(){
            this.cycle = this.cycle + 1;
            this.submitCycle(this.cycle);
        }
    },
    mounted() {
        
    },
}
</script>
<style scoped>
    .box{
        display: flex;
        flex-direction:column;
        flex-wrap: wrap;
        align-items: center;
        
    }
    div{
        margin-top: 10px;
        margin-bottom: 10px;
    }

</style>