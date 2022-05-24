import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counterStore', {
    // id: 'main',
    state: () => ({
        j: 0, k: 0
    })
})
