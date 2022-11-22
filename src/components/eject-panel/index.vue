<template>
    <div class="king-data-eject-panel">
        <el-button key="plain" type="success" text v-if="receiveParentData.datas.nodeType === 4"
            @mouseup="createSQLFile()">
            <span>创建SQL文件</span>
        </el-button>
        <el-button key="plain" type="success" text v-if="receiveParentData.datas.nodeType === 4">
            <span>创建文件夹</span>
        </el-button>
    </div>
</template>

<script setup lang="ts">

//接受外部传参
const receiveParentData = defineProps<{
    datas: {
        top: string,
        left: string,
        show: boolean,
        nodeType: number,
        data: {},//右击节点详细信息
    }
}>()
//父组件方法
const emit = defineEmits(['createSQLFile'])

//通知老父亲创建SQLFile
const createSQLFile = () => {
    emit('createSQLFile', receiveParentData.datas.data)
    console.log('receiveParentData', receiveParentData);

}

//监控鼠标点击事件,如果不在盒子上就关闭盒子
if (receiveParentData.datas.show) {
    document.onmouseup = (e) => {
        receiveParentData.datas.show = false
    }
}
</script>

<style scoped  lang='less'>
.king-data-eject-panel {
    position: absolute;
    top: v-bind('receiveParentData.datas.top');
    left: v-bind('receiveParentData.datas.left');
    width: 200px;
    height: 200px;
    background: grey;

    .el-button {
        margin-left: 0;
        width: 100%;
    }
}
</style>
