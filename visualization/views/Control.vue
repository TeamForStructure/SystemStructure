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
            <el-button type="success" plain>提交指令</el-button>
        </div>
        <div>
            <el-input v-model="input" placeholder="请输入周期数"></el-input>
        </div>
        <div >
            <el-button type="success" plain>提交周期</el-button>
        </div>
        <div >
            <el-button type="primary" icon="el-icon-arrow-left">上一周期</el-button>
            <el-button type="primary">下一周期  <i class="el-icon-arrow-right"></i></el-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            textarea: '',
            cycle: 12,
            input:''
        }
  }
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