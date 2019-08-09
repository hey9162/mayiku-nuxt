export const state = () => ({
  counter: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}

/**
 * mutations 必须同步执行
 */

/**
 * action 调用异步 API 和分发多重 mutation：
 */
