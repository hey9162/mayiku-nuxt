import request from '@/utils/request'
export function getMy(data) {
  return request({
    url: 'user/paper/my',
    method: 'post',
    data
  })
}
export function setVolume(data) {
  return request({
    url: '/user/paper/assembly',
    method: 'post',
    data
  })
}
export function getQuestionsCount() {
  function inner(obj,source,key,count,score){
    obj.count = count;
    obj.score = score;
    obj.qtype = key;
    obj.total = source[key];
  }
  return request({
    url: '/questions/all',
    method: 'get',
  }).then(res=>{
    let data = {};
    data.title = ''
    data.paper_id = '245768';
    data.paper = [];
    res.data.forEach(item => {
      var obj = {};
      obj.id = item.id;
      obj.name = item.name;
      obj.config = [];
      for(let key in item.questions){
        var configItem = {};
        switch (key) {
          case '1':
            configItem.name = '单选';
            inner(configItem,item.questions,key,10,1)
            break;
          case '2':
            configItem.name = '多选';
            inner(configItem,item.questions,key,10,1)
            break;
          case '3':
            configItem.name = '判断';
            inner(configItem,item.questions,key,10,1)
            break;
          case '4':
            configItem.name = '填空题';
            inner(configItem,item.questions,key,10,1)
            break;
            case '5':
            configItem.name = '简答填空题';
            inner(configItem,item.questions,key,10,1)
            break;
          case '6':
            configItem.name = '简答填';
            inner(configItem,item.questions,key,10,1)
            break;
          case '7':
            configItem.name = '案例分析';
            inner(configItem,item.questions,key,10,1)
            break;
          case '8':
            configItem.name = '工作票改错';
            inner(configItem,item.questions,key,10,1)
            break;
          case '9':
            configItem.name = '组合题';
            inner(configItem,item.questions,key,10,1)
            break;
          default:
            break;
        }
        obj.config.push(configItem);
      }
      data.paper.push(obj);
    });
    return new Promise((resolve)=>{
      resolve(data);
    });
  })
}

/**
 * 
 * @param {Array} ids 
 */
export function deleVolume(ids) {
  return request({
    url: `/user/paper/del?ids=[${ids}]`,
    method: 'get'
  })
}