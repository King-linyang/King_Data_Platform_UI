<template>
    <div class="king-data-left-main">
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClickLeft"
            @node-contextmenu="handleNodeClickRight" />
    </div>
</template>
    
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import type Node from 'element-plus/es/components/tree/src/model/node'

interface Tree {
    label: string
    children?: Tree[],
    typeId: number
}
//左击
const handleNodeClickLeft = (data: Tree) => {
    console.log('data', data)
}
//右击
const handleNodeClickRight = (e: any, data: Tree) => {
    console.log('data', data)
}

const data: Tree[] = [
    {
        label: '业务分类',
        typeId: 1,
        children: [
            {
                label: '测试全流程业务',
                typeId: 2,
                children: [
                    {
                        label: 'KingCompute',
                        typeId: 3,
                        children: [
                            {
                                label: '数据开发',
                                typeId: 4,
                            }, {
                                label: '表',
                                typeId: 4,
                            }
                        ]
                    }, {
                        label: '数据库',
                        typeId: 3,
                    },
                ],
            },
        ],
    }
]

const defaultProps = {
    children: 'children',
    label: 'label',
}
</script>
    
<style scoped lang='less'>
.king-data-left-main {
    float: left;
    height: calc(100vh - 80px);
    width: 350px;
    background: yellow;
}
</style>