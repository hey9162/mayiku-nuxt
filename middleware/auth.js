export default function ({ store, redirect }) {
  console.log('中间件')
  if (!store.state.auth) {
    return redirect('/login')
  }
}