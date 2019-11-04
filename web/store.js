import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = { //要设置的全局访问的state对象
    instructions: [],
    functionUnits: [],
    registers: []
        //要设置的初始属性值
};
const getters = { //实时监听state值的变化(最新状态)
    getInstructions(state) {
        return state.instructions
    },
    getFunctionUnits(state) {
        return state.functionUnits
    },
    getRegisters(state) {
        return state.registers
    }
};
const mutations = {
    setInstructions(state, instructions) {
        state.instructions = instructions;
    },
    setFunctionUnits(state, functionUnits) {
        state.functionUnits = functionUnits;
    },
    setRegisters(state, registers) {
        state.registers = registers;
    }
};
const actions = {
    commitInstructions(context, instructions) { //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
        context.commit('setInstructions', instructions);
    },
    commitFunctionUnits(context, functionUnits) { //同上注释
        context.commit('setFunctionUnits', functionUnits);
    },
    commitRegisters(context, registers) { //同上注释，num为要变化的形参
        context.commit('setRegisters', registers)
    }
};
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store;