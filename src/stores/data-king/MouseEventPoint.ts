//鼠标点击位置存储
//创建文件夹弹窗接受的数据
import { DataKingCreateFolderReciveParam } from "@/constant/data-king/DataKingCreateFolderRecive";
import { defineStore } from "pinia";

export const MouseEventPoint = defineStore(DataKingCreateFolderReciveParam.Mouse, {
    state: () => {
        return {
            pointX: 0,//鼠标点击x坐标
            pointY: 0,//鼠标点击y坐标
        }
    },
    //类似于computed 可以帮我们去修饰我们的值
    getters: {

    },
    //可以操作异步 和 同步提交state
    actions: {
    }
})