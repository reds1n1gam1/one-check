import { defineStore } from 'pinia'
import type { CheckItemModel } from './types'
import { checkItemList } from './mock'

export const useCheckItemModel = defineStore('check-item', {
    state: () => <CheckItemModel>{
        checkItems: [...checkItemList]
    },
    getters: {
        getItemsByCategory: (state) => {
            return (categoryCode: string) => state.checkItems.filter((item) => item.category === categoryCode)
        }
    },

    actions: {

    }
})