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
            <el-button type="success" plain @click="submitCycle">提交周期</el-button>
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
            cycle: 35,
            input:'',
            info: {}
        }
    },
    methods:{
        async submitInstruction(){
            // var res = await this.$axios.get("http://127.0.0.1:8000/info/getinstructions?instructions=LD F6 34%2B R2\n"+
            //         "LD F2 45%2B R3\n"+
            //         "MULT F0 F2 F4\n"+
            //         "SUBD F8 F6 F2\n"+
            //         "DIVD F10 F0 F6\n"+
            //         "ADDD F6 F8 F2")
            var res = await this.$axios.get("http://127.0.0.1:8000/info/getinstructions?instructions="+this.textarea)
            .catch(function(error){
                console.log(error);
            });
            var arr = []
            arr.push(res.data.registerTable)
            this.$store.dispatch('commitInstructions',this.info.insTable);
            this.$store.dispatch('commitFunctionUnits',this.info.funcUTable);
            this.$store.dispatch('commitRegisters',arr);
        },
        async submitCycle(){
            var res = await this.$axios.get('http://127.0.0.1:8000/info/getcycle?cycle='+this.cycle)
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
        last(){
            this.cycle = this.cycle - 1;
            this.submitCycle();
        },
        next(){
            this.cycle = this.cycle + 1;
            this.submitCycle();
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