//将数据存在本地
export const setStorage = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value))
}
//存缓存中读取
export const getStorage = (key: string) => {
    return (localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {})
}