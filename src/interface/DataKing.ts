//三级分类树参数类型
export interface DataKingTreeParamType {
    name: string,//三级分类名字
    checked: boolean,//选择框
    show: boolean,//是否展现
    showChildren: boolean,//是否展开儿子节点
    itemIconId: number,//当前三级分类的id号,唯一
    itemCount?: number,//三级分类所有的分类数量
    itemType: number,//节点类型  1:文件夹  2:文件
    children?: DataKingTreeParamType[]//子类元素
}
//创建文件夹弹窗的文件夹类型
export interface DataKingCreateFolderParamType {
}