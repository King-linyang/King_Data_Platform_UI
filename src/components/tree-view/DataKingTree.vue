<template>
    <div v-for="item in data" class="data-king-tree-item" @click.stop="dataKingTreeItem(item, $event)"
        @contextmenu.prevent.stop="rightClick(item, $event)">
        <div class="data-king-tree-line" :class="`data-king-tree-select-` + item.itemIconId">
            <i class="data-king-tree-icon" :class="`data-king-tree-icon-` + item.itemIconId"
                :style="iconTranformF(item)">
                <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12L31 24L19 36" stroke="#fff" stroke-width="4" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </i>
            <input v-model="item.checked" type="checkbox">
            <span class="data-king-tree-line-span">{{ item.name }}--{{ item.show }}</span>
        </div>
        <DataKingTree v-if="item.showChildren" :data="item.children"></DataKingTree>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { DataKingTreeParamType } from '@/interface/DataKing'
import { DataKingCreateFolderReciveStore } from '@/stores/data-king/DataKingCreateFolderRecive'
import { CloseCreateFolder } from '@/stores/data-king/CloseCreateFolder'
import { TreeDomClick } from '@/stores/data-king/TreeDomClick'

defineProps<{
    data?: DataKingTreeParamType[]
}>()
const emits = defineEmits(['CloseBox'])
//折叠箭头旋转
const iconTranformF = (item: DataKingTreeParamType) => {
    if (!item.showChildren) {
        return {
            transform: 'rotate(0deg)',
        }
    } else if (item.showChildren) {
        return {
            transform: 'rotate(90deg)',
        }
    }
}
//处理是否隐藏创建文件夹盒子
const CloseCreateFolderF = CloseCreateFolder()
//用来存储选择的dom class
// let memDom = ''
const TreeDomClickF = TreeDomClick()
//节点树左击事件
const dataKingTreeItem = (item: DataKingTreeParamType, e: any) => {
    if (!item.showChildren) {
        let aa = document.getElementsByClassName(`data-king-tree-icon-` + item.itemIconId)[0]
        aa.setAttribute('style', 'transform: rotate(90deg)')
        item.showChildren = !item.showChildren
    } else {
        let aa = document.getElementsByClassName(`data-king-tree-icon-` + item.itemIconId)[0]
        aa.setAttribute('style', 'transform: rotate(0deg)')
        item.showChildren = !item.showChildren
    }
    if (!(TreeDomClickF.memDom === '')) {
        console.log('TreeDomClickF.memDom', TreeDomClickF.memDom);
        //选中节点
        //把上一次选中的节点样式归为
        let bbMTOld = document.getElementsByClassName(TreeDomClickF.memDom)[0]
        bbMTOld.setAttribute('style', 'background: #1e202d;')
        //当前节点样式改变
        let bbMT = document.getElementsByClassName(`data-king-tree-select-` + item.itemIconId)[0]
        bbMT.setAttribute('style', 'background: #e4e6f226;')
        //跟换存储
        TreeDomClickF.memDom = `data-king-tree-select-` + item.itemIconId
    } else {
        //初次选中,存储数据为空,将当前节点样式改变,当前节点存储
        console.log('TreeDomClickF.memDom--------', TreeDomClickF.memDom);
        let bbMT = document.getElementsByClassName(`data-king-tree-select-` + item.itemIconId)[0]
        bbMT.setAttribute('style', 'background: #e4e6f226;')
        TreeDomClickF.memDom = `data-king-tree-select-` + item.itemIconId
    }
    console.log('item--->', item, e)
    pointXX.value = e.x
    pointYY.value = e.y
    console.log('pointXX->', DataKingCreateFolderReciveStoreM.xPoint, pointXX.value, 'pointYY->', pointYY.value);
    if (DataKingCreateFolderReciveStoreM.xPoint > e.x || DataKingCreateFolderReciveStoreM.xPoint < (e.x + 100) || DataKingCreateFolderReciveStoreM.yPoint > e.y || DataKingCreateFolderReciveStoreM.yPoint < (e.y + 80)) {
        console.log('儿子要隐藏节点');
        CloseCreateFolderF.delFlag = !CloseCreateFolderF.delFlag
    }
}
const pointXX = ref(0)
const pointYY = ref(0)
//监控三级分类树的左击事件变化
const DataKingCreateFolderReciveStoreM = DataKingCreateFolderReciveStore()
//节点树数据右击事件
const rightClick = (item: DataKingTreeParamType, e: any) => {
    DataKingCreateFolderReciveStoreM.xPoint = e.x
    DataKingCreateFolderReciveStoreM.yPoint = e.y

}
</script>

<style scoped lang="less">
.data-king-tree-item {
    margin-left: 10px;

    .data-king-tree-line:hover {
        cursor: pointer;
        background: #e4e6f226;
        // background: #fff;
        // opacity: 0.3;
    }

    .data-king-tree-line {
        height: 28px;
        align-items: center;
        display: flex;

        .data-king-tree-icon {
            width: 16px;
            height: 16px;
            line-height: 16px;
            font-size: 16px;
        }

        .data-king-tree-line-span {
            align-items: center; //垂直居中
        }
    }
}
</style>
