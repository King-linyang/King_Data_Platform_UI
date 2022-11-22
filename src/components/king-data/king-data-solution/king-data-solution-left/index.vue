<template>
    <div class="king-data-left-main">
        <el-tree :data="dataSource" node-key="id" :props="defaultProps" @node-click="handleNodeClickLeft"
            @node-contextmenu="handleNodeClickRight" :default-expanded-keys="unFold" />
    </div>
    <EjectPanel v-if="panelDatas.show === true" :datas="panelDatas" @createSQLFile="createSQLFile"></EjectPanel>
    <el-dialog v-model="dialogVisible" :title="createTips" width="30%">
        <span>文件的名字:</span>
        <el-input v-model="createFileName" class="w-50 m-2" placeholder="Please Input" />
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="createHandler()">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>
    
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import type Node from 'element-plus/es/components/tree/src/model/node'
import EjectPanel from '@/components/eject-panel/index.vue'


interface Tree {
    id: number,//节点唯一主键
    label: string//节点的名称
    children?: Tree[],//子节点
    typeId: number,//节点类型
}
//面板数据
const panelDatas = reactive({
    top: '0',//看板位置
    left: '0',//看板位置
    show: false,//看板是否显示
    nodeType: -1,//传入的点击tree节点的类型
    data: {},//右击节点详细信息
})
//已经展开的节点集合
const unFold = reactive<number[]>([])
//左击
const handleNodeClickLeft = (data: Tree) => {
    panelDatas.show = false
    unFold.push(data.id)
    console.log('data', data)
}
//右击
const handleNodeClickRight = (e: any, data: Tree) => {
    panelDatas.show = true
    panelDatas.left = e.x + 'px'
    panelDatas.top = e.y + 'px'
    panelDatas.nodeType = data.typeId
    panelDatas.data = data
    console.log(e.x, e.y, 'data', data)
}
//对话框
const dialogVisible = ref(false)
//对话框主题
const createTips = ref('')
//创建的文件名字
const createFileName = ref('')
//节点点击存储数据
let dataCent = {
    id: 0,
    label: '',
    typeId: 0,
}
//创建SQLFile类型
const createSQLFile = (data: Tree) => {
    dialogVisible.value = true
    console.log('data---------->', data);
    dataCent = data
}
//创建文件处理器
const createHandler = () => {
    append(dataCent)
    dialogVisible.value = false
    dataCent = {
        id: 0,
        label: '',
        typeId: 0,
    }
    createFileName.value = ''
}
let id = 1000

const append = (data: Tree) => {
    const newChild = { id: id++, label: createFileName.value, typeId: data.typeId + 1, children: [] }
    if (!data.children) {
        data.children = []
    }
    data.children.push(newChild)
    dataSource.value = [...dataSource.value]
}
const dataSource = ref<Tree[]>([
    {
        label: '业务分类',
        typeId: 1,
        id: 1,
        children: [
            {
                id: 2,
                label: '测试全流程业务',
                typeId: 2,
                children: [
                    {
                        id: 3,
                        label: 'KingCompute',
                        typeId: 3,
                        children: [
                            {
                                id: 4,
                                label: '数据开发',
                                typeId: 4,
                            }, {
                                id: 4,
                                label: '表',
                                typeId: 4,
                            }
                        ]
                    }, {
                        id: 5,
                        label: '数据库',
                        typeId: 3,
                    },
                ],
            },
        ],
    }
])

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

.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>