//创建文件夹弹窗接受的数据
import { DataKingCreateFolderReciveParam } from "@/constant/data-king/DataKingCreateFolderRecive";
import { defineStore } from "pinia";

export const CloseCreateFolder = defineStore(DataKingCreateFolderReciveParam.CreateFolder, {
    state: () => {
        return {
            delFlag: false//是否隐藏创建问价节点
        }
    },
    //类似于computed 可以帮我们去修饰我们的值
    getters: {

    },
    //可以操作异步 和 同步提交state
    actions: {
    }
})