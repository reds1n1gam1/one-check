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
        setCategoryState(state: boolean, categoryCode: string) {
            const newCategories = this.categories.map(category => {
                if (category.code === categoryCode) {
                    category.state = state
                }

                return category
            })

            this.categories = [...newCategories]
        }
    }
})