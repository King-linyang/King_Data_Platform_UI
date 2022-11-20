<template>
    <div class="data-king-tree-style data-king-common">
        <!-- Data King 主题--用户ID:&nbsp&nbsp{{ userRoute.params.id }} -->
        <DataKingTree :data="data"></DataKingTree>
        <DataKingCreateFolderVue v-show="createFoler"></DataKingCreateFolderVue>
    </div>
    <div class="data-king-common data-king-table">
        <div style="margin-bottom: 20px">
            <el-button size="small" @click="addTab(editableTabsValue)">
                add tab
            </el-button>
        </div>
        <el-tabs v-model="editableTabsValue" type="card" class="demo-tabs" closable @tab-remove="removeTab">
            <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
                {{ item.content }}
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import DataKingTree from '@/components/tree-view/DataKingTree.vue'
import DataKingCreateFolderVue from '@/components/tree-view/DataKingCreateFolder.vue';
import type { DataKingTreeParamType } from '@/interface/DataKing'
import { DataKingCreateFolderReciveStore } from '@/stores/data-king/DataKingCreateFolderRecive'
import { MouseEventPoint } from '@/stores/data-king/MouseEventPoint'
import { CloseCreateFolder } from '@/stores/data-king/CloseCreateFolder'


const userRoute = useRoute()

const data = reactive<DataKingTreeParamType[]>([
    {
        name: '1-1',
        checked: false,
        show: true,
        showChildren: true,
        itemIconId: 1,
        itemCount: 5,
        itemType: 1,
        children: [
            {
                name: '1-1-1',
                checked: false,
                show: true,
                showChildren: true,
                itemIconId: 2,
                itemType: 1,
                children: [
                    {
                        name: '1-1-1-1',
                        checked: false,
                        show: false,
                        showChildren: true,
                        itemIconId: 3,
                        itemType: 2,
                    }, {
                        name: '1-1-1-2',
                        checked: false,
                        show: false,
                        showChildren: true,
                        itemIconId: 4,
                        itemType: 1,
                        children: [{
                            name: '1-1-1-2-1',
                            checked: false,
                            show: false,
                            showChildren: true,
                            itemIconId: 5,
                            itemType: 2,
                        }]
                    },
                ]
            }
        ]
    }
])
//是否创建文件夹
let createFoler = ref(false)

//创建盒子的xy坐标
const xPoint = ref(0)
const yPoint = ref(0)
//监控三级分类树的右击xy点值变化，用于显示创建盒子的位置--pinia
const DataKingCreateFolderReciveStoreF = DataKingCreateFolderReciveStore()
DataKingCreateFolderReciveStoreF.$subscribe((mutation: any, state: any) => {
    // 订阅 state 值的变化
    console.log('mutation', mutation);

    console.log("订阅 state 值的变化1:" + JSON.stringify(state), state.xPoint, state.yPoint);
    xPoint.value = state.xPoint
    yPoint.value = state.yPoint
    createFoler.value = true
});
//关闭创建盒子
const CloseBox = () => {
    console.log('关闭黑子')
    createFoler.value = false
}
//鼠标监听值存储位置
const MouseEventPointF = MouseEventPoint()
const x = ref(0)
const y = ref(0)
const updateMouse = (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
    console.log('updateMouse', x.value, y.value, xPoint.value, yPoint.value);
    //计算鼠标点击区域,不在 DataKingCreateFolderVue 内就隐藏
    if (x.value < xPoint.value || x.value > (xPoint.value + 100) || y.value < yPoint.value || y.value > (yPoint.value + 80)) {
        createFoler.value = false
    }
    MouseEventPointF.pointX = e.pageX
    MouseEventPointF.pointY = e.pageY
}
onMounted(() => {
    document.addEventListener('click', updateMouse)
})
//监听是否隐藏创建文件夹盒子
//监控三级分类树的右击xy点值变化，用于显示创建盒子的位置--pinia
const CloseCreateFolderF = CloseCreateFolder()
CloseCreateFolderF.$subscribe((mutation: any, state: any) => {
    // console.log('关闭盒子老父亲');
    createFoler.value = false
});

//标签页
let tabIndex = 2
const editableTabsValue = ref('2')
const editableTabs = ref([
    {
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content',
    },
    {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content',
    },
])

const addTab = (targetName: string) => {
    const newTabName = `${++tabIndex}`
    editableTabs.value.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content',
    })
    editableTabsValue.value = newTabName
}
const removeTab = (targetName: string) => {
    const tabs = editableTabs.value
    let activeName = editableTabsValue.value
    if (activeName === targetName) {
        tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
                const nextTab = tabs[index + 1] || tabs[index - 1]
                if (nextTab) {
                    activeName = nextTab.name
                }
            }
        })
    }

    editableTabsValue.value = activeName
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
}
</script>

<style scoped lang="less">
.data-king-tree-style {
    height: 100%;
    width: 500px;
    background: #1e202d;
    color: #ffff;
    height: calc(100vh - 64px);
}

.data-king-common {
    float: left;
}

.data-king-table {
    height: calc(100vh - 64px);
    width: calc(100vw - 500px);
}

.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>
