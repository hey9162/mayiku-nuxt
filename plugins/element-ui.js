import Vue from 'vue'
import Element from 'element-ui'
import zhLocale from 'element-ui/lib/locale/lang/en'
Vue.use(Element, { zhLocale })
Vue.prototype.isPhone = function (){
  if(process.client){
    let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    return flag;
  }
  
}