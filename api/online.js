import request from '@/utils/request'
import { setSession,getSession,queryQuestionSession,setQuestionSession } from '../utils/session'
export function getQuestionsCount() {
  return request({
    url: '/questions/all',
    method: 'get',
  })
}
export function getTopic(data) {
  /**
   * 顺序练习上一页下一页
   */
  if(data.mode == 1){
    let topicData;
    if(queryQuestionSession(data)){
      topicData = queryQuestionSession(data)[0]['questionsList'+data.qtype];
    }
    if(topicData && (topicData.length == data.page*10 || topicData.length > data.page*10  )){
      return new Promise((resolve,reject)=>{
        resolve(topicData);
      });
    }else{
      return request({
        url: '/questions/lists',
        method: 'get',
        params: data
      }).then((res)=>{
        setQuestionSession(data,res.data)
        return res.data;
      });
    }
  }
  /**
   * 收藏或错题上一页下一页
   */
  // if(data.mode == 6){
    
  // }
}

export function applyResult(data){
  return request({
    url: '/questions/reportResult',
    method: 'get',
    params: data
  })
}

export function getbyIds(data){
  return request({
    url: `/questions/ids`,
    method: 'post',
    data
  })
}

export function getcollectIds(){
  return request({
    url: `/user/collect/all`,
    method: 'get'
  })
}

export function collectIds(data){
  return request({
    url: `/user/collect/add`,
    method: 'post',
    data
  })
}

export function delCollectIds(data){
  return request({
    url: `/user/collect/del`,
    method: 'post',
    data
  })
}

/**
 * 
 * @param {*} data 查询错题ids
 */
export function getWrongIds(data){
  return request({
    url: `/user/wrong/lists`,
    method: 'post',
    data
  })
}

/**
 * 
 * @param {*} data 查询默认ids
 */
export function getDefIds(data){
  return request({
    url: `/questions/lists`,
    method: 'post',
    data
  })
}


/**
 * 
 * @param {*} data 查询默认ids
 */
export function search(data){
  return request({
    url: `/questions/lists`,
    method: 'post',
    data
  })
}

/**
 * 
 * @param {*} data 查询默认ids
 */
export function applyErr(data){
  return request({
    url: `/report/question`,
    method: 'post',
    data
  })
}
