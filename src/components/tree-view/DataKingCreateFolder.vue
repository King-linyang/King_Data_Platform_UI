<template>
    <div class="data-king-tree-create-folder">
        <ul>
            <li><span>新建节点</span></li>
            <li><span>新建文件夹</span></li>
            <li><span>批量操作</span></li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { DataKingCreateFolderReciveStore } from '@/stores/data-king/DataKingCreateFolderRecive'
import { onMounted } from 'vue';
onMounted(() => {
    //监控三级分类树的左击事件变化
    const DataKingCreateFolderReciveStoreF = DataKingCreateFolderReciveStore()
    DataKingCreateFolderReciveStoreF.$subscribe((mutation: any, state: any) => {
        // 订阅 state 值的变化
        console.log("订阅 state 值的变化:" + JSON.stringify(state), state.xPoint, state.yPoint);
        let aa = document.getElementsByClassName('data-king-tree-create-folder')[0]
        aa.setAttribute('style', `top: ` + state.yPoint + `px;left: ` + state.xPoint + `px;`)
    });
})
</script>

<style scoped lang="less">
.data-king-tree-create-folder {
    position: absolute;
    color: #dee1f0;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .2) !important;
    background: #2c2f40 !important;
    border: none !important;
    height: 80px;
    width: 100px;

    li {
        height: 24px;
        line-height: 24px;
        padding: 0 10px;
        color: #dee1f0;
    }

    li:hover {
        cursor: pointer;
    }
}
</style>
