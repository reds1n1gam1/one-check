export interface ICategoryItem {
    id: number,
    title: string,
    code: string,
    description: string,
    icon: string,
    lastCheck: Date,
    state: boolean,
}

export interface CategoryItemModel {
    categories: ICategoryItem[],
}