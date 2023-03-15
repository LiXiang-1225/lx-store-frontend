import { createStore } from 'vuex'

const defaultState = {
    count: 0
}

// Create a new store instance
export default createStore({
    state() {
        return defaultState
    },
    mutations: {
        countAdd(state: typeof defaultState) {
            state.count += 1
        }
    },
    // actions: {
    //     countAdd(context) {
    //         context.commit('countAdd')
    //     }
    // },
    // getters: {
    //     filterCount(state: typeof defaultState) {
    //         return 2 * state.count
    //     }
    // }
})
