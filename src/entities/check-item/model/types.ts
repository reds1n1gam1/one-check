export interface ICheckItem {
    id: number,
    title: string,
    icon: string,
    state: boolean,
    category: string
}

export interface CheckItemModel {
    checkItems: ICheckItem[]
}