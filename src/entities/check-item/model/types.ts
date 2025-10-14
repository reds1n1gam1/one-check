export interface ICheckItem {
    id: number,
    title: string,
    icon: string,
    state: boolean,
}

export interface CheckItemModel {
    categories: string[],
    items: ICheckItem[]
}