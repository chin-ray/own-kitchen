import { useCounterStore } from 'path/to/src/stores/counterStore'

export default {
    setup() {
        const counterStore = useCounterStore()
        // 这里在视图里使用 counterStore.j 和 counterStore.k
        // 但你不能解构 counterStore，只能像下面这样解构：storeToRefs()
        const { j, k } = counterStore
        return {
            counterStore, j, k,
        }
    },
}
