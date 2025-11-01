import type { ICategoryItem } from "./types";

export const categoriesItemList: ICategoryItem[] = [
    {
        id: 1,
        title: 'Home check',
        description: 'Main things to check before leave home',
        icon: 'house',
        lastCheck: new Date(),
        state: false,
        code:"home",
    },
    {
        id: 1,
        title: 'Car check',
        description: 'Check car before leave',
        icon: 'car',
        lastCheck: new Date(),
        state: false,
        code:"car",
    },
]