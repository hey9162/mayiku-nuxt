export default function ({ $axios, redirect, app }) {
  $axios.onRequest(config => {
    // $axios.setHeader('Authorization', 'aiZEA7EINdSvhx9KvG1LPQ==')
    config.headers.Authorization = 'aiZEA7EINdSvhx9KvG1LPQ=='
    // console.log(config)
    // console.log(global)
    // console.log(app)
      
    console.log('Making request to ' + config.url)
    return config
  })
  $axios.onResponse(response => {
    /**
     * 拦截未登录状态请求页面url
     */
    if (process.client) {
      console.log(window.location.href)
    }else{
      console.log(response.config.headers.referer)
    }
  })
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}