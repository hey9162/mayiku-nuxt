/**
 * 
 * @param {string} key string
 * @param {object} value object
 */
export function setSession(key,value) {
  const val = JSON.stringify(value);
  if (process.browser){
    localStorage.setItem(key,val);
  }
  
}
/**
 * 
 * @param {string} key string
 */
export function getSession(key) {
  if (process.browser){
    const json = localStorage.getItem(key)
    return JSON.parse(json);
  }
}


export function setStateIdsSession(key,id) {
  let ids;
  getSession(key)?ids = getSession(key):ids=[];
  ids.push(id)
  setSession(key,ids);
}






/**
 * 
 * @param {object} data object {paperid:科目,qtype:题型,page:页码};
 */
export function queryQuestionSession(data) {
  let questionBank = getSession('questionBank');
  if(questionBank){
    let newArr = questionBank.filter((item)=>{
      return item.id === data.paperid;
    });
    return newArr;
  }
}
/**
 * 
 * @param {object} data onject {paperid:科目,qtype:题型,page:页码};
 * @param {object} value
 */
export function setQuestionSession(data,value) {
  let questionBank = getSession('questionBank');
  if(questionBank){
    let newArr = questionBank.filter((item)=>{
      return item.id === data.paperid;
    });
    if(newArr[0]['questionsList'+data.qtype]){
      newArr[0]['questionsList'+data.qtype].rows.length = (data.page-1)*10
      value.rows.forEach(item => {
        newArr[0]['questionsList'+data.qtype].rows.push(item);
      });
    }else{
      newArr[0]['questionsList'+data.qtype] = value;
    }
    setSession('questionBank',questionBank);
  }
}
/**
 * 
 * @param {number} type 1 错题 2 收藏
 * @param {*} id 题目id
 */
export function setQuestionIds(type,id){
  let errIds = getSession('errIds');
  let collecIds = getSession('collecIds');
  if(type === 1){
    if(errIds){
      errIds.push(id)
      setSession('errIds',errIds);
    }else{
      setSession('errIds',[id]);
    }
  }
  if(type === 2){
    if(collecIds){
      collecIds.push(id)
      setSession('collecIds',collecIds);
    }else{
      setSession('collecIds',[id]);
    }
  }
};