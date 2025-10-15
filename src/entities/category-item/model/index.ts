import { defineStore } from 'pinia'
import type { ICategoryItem, CategoryItemModel } from './types'
import { categoriesItemList } from './mock'

export const userCategoryModel = defineStore('check-item', {
    state: () => <CategoryItemModel>{
        categories: [...categoriesItemList],
    },

    getters: {

    },

    actions: {

    }
})