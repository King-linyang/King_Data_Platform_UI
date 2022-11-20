//节点树左击单点事件存储的节点class
import { DataKingCreateFolderReciveParam } from "@/constant/data-king/DataKingCreateFolderRecive";
import { defineStore } from "pinia";
import { getCurrentInstance } from "vue";

export const TreeDomClick = defineStore(DataKingCreateFolderReciveParam.TreeDomClick, {
    state: () => {
        return {
            memDom: '',//节点树左击单点事件存储的节点class
        }
    },
    //类似于computed 可以帮我们去修饰我们的值
    getters: {

    },
    //可以操作异步 和 同步提交state
    actions: {
    }
})

