export interface ICategoryItem {
    id: number,
    title: string,
    categoryCode: string,
    description: string,
    icon: string,
    lastCheck: Date,
    state: boolean,
}

export interface CategoryItemModel {
    categories: ICategoryItem[],
}