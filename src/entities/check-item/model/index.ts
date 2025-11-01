import { defineStore } from 'pinia'
import type { CheckItemModel } from './types'
import { checkItemList } from './mock'
import { useCategoryModel } from '@/entities/category-item'

export const useCheckItemModel = defineStore('check-item', {
    state: () => <CheckItemModel>{
        checkItems: [...checkItemList]
    },
    getters: {
        getItemsByCategory: (state) => {
            return (categoryCode: string | string[]) => state.checkItems.filter((item) => item.category === categoryCode)
        }
    },
    actions: {
        toggleCheckItemState(id: number) {
            const categoryModel = useCategoryModel();
            let categoryCode: string = '';

            const newCheckItems = this.checkItems.map(item => {
                if (item.id === id) {
                    item.state = !item.state
                    categoryCode = item.category
                }

                return item
            })

            this.checkItems = [...newCheckItems];

            if (this.checkItems.filter(item => item.category === categoryCode).every(item => item.state) && categoryCode) {
                categoryModel.setCategoryState(true, categoryCode)
            }
        }
    }
})