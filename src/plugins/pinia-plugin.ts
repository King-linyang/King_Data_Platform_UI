// //引入缓存变量
// import { setStorage, getStorage } from '@/utils/local-store-util'
// import { type PiniaPluginContext, createPinia } from 'pinia'
// import { toRaw } from 'vue'
// //定义兜底变量
// const __piniaKey = '__PINIAKEY__'
// //定义入参类型
// type Options = {
//     key?: string
// }
// //利用函数柯丽华接受用户入参
// const piniaPlugin = (options: Options) => {
//     //将函数返回给pinia  让pinia  调用 注入 context
//     return (context: PiniaPluginContext) => {
//         const { store } = context;
//         const data = getStorage(`${options?.key ?? __piniaKey}-${store.$id}`)
//         store.$subscribe(() => {
//             setStorage(`${options?.key ?? __piniaKey}-${store.$id}`, toRaw(store.$state));
//         })
//         //返回值覆盖pinia 原始值
//         return {
//             ...data
//         }
//     }
// }
// //初始化pinia
// const store = createPinia()
// store.use(piniaPlugin({
//     key: "pina"
// }))
// export default store