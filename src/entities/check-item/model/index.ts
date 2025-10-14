import { defineStore } from 'pinia'
import type { ICheckItem, CheckItemModel } from './types'
import { checkItemList } from './mock'

export const useCheckItemModel = defineStore('check-item', {
    state: () => <CheckItemModel>{
        categories: [],
        items: [...checkItemList]
    },

    getters: {

    },

    actions: {

    }
})