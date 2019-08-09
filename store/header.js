export const state = () => ({
  isLogin: false
})

export const mutations = {
  loginOut (state, text) {
    console.log(text)
  }
}

export const actions = {
  loginOut ( { commit, app } , data ) {
    setTimeout(() => {
      commit('loginOut',data)
    }, 1000);
  }
}