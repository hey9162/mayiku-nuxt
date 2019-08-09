/**
 * 
 * @param {obj} Object 
 * @param {callBack} function
 */
export function setTimer(object,callBack) {
  const timer = setTimeout(function(){
    if(object.view.timeNum>0){
      object.view.timeNum--;
      setTimer(object,callBack);
    }else{
      clearTimeout(timer);
      callBack()
    }
  },1000);
}

/**
 * 计时器
 * @param {Number} time 初始时间
 * @param {Boolean} type 默认为true正计时，false为倒计时
 */
export function Timer (time, type) {
  this.init(time, type);
}

/**
* 初始化
*/
Timer.prototype.init = function (time, type) {
  this.time = time || 0
  this.timer = undefined;
  this.timeStr = '00:00:00'
  if (type === undefined) {
      this.type = true
  } else {
      this.type = type
  }
}

/**
* 开始计时
*/
Timer.prototype.start = function () {
  this.reTime()
}

/**
* 暂停
*/
Timer.prototype.stop  = function(){
  clearTimeout(this.timer);
}
/**
 * 继续
 */
Timer.prototype.continue  = function(){
  this.reTime()
}

/**
* 刷新时间
* @return {String} 时间
*/
Timer.prototype.reTime = function () {
  if (this.type) {
      this.time++
  } else if (this.time > 0) {
      this.time--
  } else {
      // 等于零结束计时
      this.outputTime('00:00:00')
      return
  }

  // 获取时分秒
  let h = parseInt(this.time/3600)
  let m = parseInt((this.time - h*3600) / 60)
  let s = this.time - h*3600 - m*60

  // 格式化
  h < 10 ? h = `0${h}` : ''
  m < 10 ? m = `0${m}` : ''
  s < 10 ? s = `0${s}` : ''

  // 输出时间
  this.outputTime(`${h}:${m}:${s}`)

  // 递归
  this.timer = setTimeout(this.reTime.bind(this), 1000)
}

/**
* 输出时间
*/
Timer.prototype.outputTime = function (str) {
  this.timeStr = str;
}