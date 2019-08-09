export const state = () => ({
  list: []
})

export const mutations = {
  remove (state, { sign }) {
    state.list.splice(state.list.indexOf(sign), 1)
  },
  add (state, sign)  {
    state.list.push(sign)
  }
}
