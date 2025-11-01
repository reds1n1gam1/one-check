import { defineStore } from 'pinia'
import type { CategoryItemModel } from './types'
import { categoriesItemList } from './mock'

export const useCategoryModel = defineStore('check-category', {
    state: () => <CategoryItemModel>{
        categories: [...categoriesItemList],
    },

    getters: {
        
    },

    actions: {

    }
})