import { createStore  } from 'vuex'

const defaultState = {
  count: 0
}
const store: any = createStore({
  state () {
    return {
      count: 10
    }
  },
  mutations: {
    increment (state: typeof defaultState) {
      state.count++
    }
  }
})
export default store;
