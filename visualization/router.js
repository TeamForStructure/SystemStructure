var routers = [{
        path: '/',
        redirect: '/InstructionStatus'
    },
    {
        path: '/InstructionStatus',
        meta: {
            title: '指令状态表'
        },
        component: (resolve) => require(['./views/InstructionStatus.vue'], resolve)
    },
    {
        path: '/FunctionUnitStatus',
        meta: {
            title: '功能部件状态表'
        },
        component: (resolve) => require(['./views/FunctionUnitStatus.vue'], resolve)
    },
    {
        path: '/RegisterResultStatus',
        meta: {
            title: '寄存器使用状态表'
        },
        component: (resolve) => require(['./views/RegisterResultStatus.vue'], resolve)
    }
]

module.exports = routers;