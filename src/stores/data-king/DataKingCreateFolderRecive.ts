//创建文件夹弹窗接受的数据
import { DataKingCreateFolderReciveParam } from "@/constant/data-king/DataKingCreateFolderRecive";
import { defineStore } from "pinia";

export const DataKingCreateFolderReciveStore = defineStore(DataKingCreateFolderReciveParam.Param, {
    state: () => {
        return {
            xPoint: 0,//盒子展示的x坐标
            yPoint: 0,//盒子展示的y坐标
        }
    },
    //类似于computed 可以帮我们去修饰我们的值
    getters: {

    },
    //可以操作异步 和 同步提交state
    actions: {
    }
})