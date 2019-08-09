<template>
  <div class="middle-container">
    <div class="layout-container">
      <div class="steps hidden-xs-only">
        <my-steps :active="active" :simple="true">
          <my-step title="上传苹果APP，选择套餐" icon="iconfont iconpl1" >1</my-step>
          <my-step title="等待签名" icon="iconfont iconpl2" >2</my-step>
          <my-step title="下载签名包" icon="iconfont iconpl" >3</my-step>
        </my-steps>
      </div>
      <div class="clearfix app-box">
        <div class="pull-left app-info-box">
          <dl>
            <dt>基本信息</dt>
            <dd><span class="lable">名称</span><span class="detail">神之王者</span></dd>
            <dd><span class="lable">设备</span><span class="detail">苹果（使用于ios7.0以上的设备）</span></dd>
            <dd><span class="lable">版本</span><span class="detail">1.0.1</span></dd>
            <dd><span class="lable">大小</span><span class="detail">541M</span></dd>
          </dl>
          <dl>
            <dt>详细信息</dt>
            <dd><span class="lable">包名</span><span class="detail">神之王者</span></dd>
            <dd><span class="lable">证书</span><span class="detail">苹果签名中文啊</span></dd>
            <dd><span class="lable">签名时间</span><span class="detail">2014-01-01</span></dd>
            <dd><span class="lable">到期时间</span><span class="detail">2012-12-12</span></dd>
          </dl>
        </div>
        <div class="pull-left app-ctrl">
          <img class="logo-icon" src="../../../assets/images/logo-small.png" alt="">
          <div>  
            <el-button type="primary" size="mini" round>下载签名包</el-button>
            <el-button type="primary" size="mini" round>更新</el-button>
            <el-button type="primary" size="mini" round>续费</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyStep from '../../../components/steps/src/step'
import MySteps from '../../../components/steps/src/steps'
  export default {
    // middleware: 'auth', //需要路由拦截的页面
    components:{
      MyStep,
      MySteps
    },
    data() {
      return {
        active: 1,
      };
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      },
    }
  }
</script>
<style lang="scss">
.app-box{
  background-color: #ffffff;
  .app-info-box{
    padding: 40px;
    width: 78%;
    border-right: 1px solid #ededed;
    dl{
      margin-bottom: 40px;
    }
    dt{
      font-weight: 700;
      margin-bottom: 10px;
    }
    dd{
      margin-bottom: 10px;
      span.lable{
        display: inline-block;
        width: 120px;
        text-align: right;
      }
      span.detail{
        display: inline-block;
        margin-left: 100px;
      }
    }
  }
  .app-ctrl{
    width: 22%;
    text-align: center;
    padding-top: 20px;
    .el-button{
      display: block;
      width: 100px;
      margin: 20px auto;
    }
    .logo-icon{
      width: 100px;
      height: 100px;
    }
  }
}
@media only screen and (max-width: 767px) {
  .app-box{
    background-color: #ffffff;
    .app-info-box{
      padding: 20px;
      width: 100%;
      border-right:none;
      dd{
        span.lable{
          width: 80px;
          &::after{
            content: '：'
          }
        }
        span.detail{
          display: inline-block;
          margin-left: 0 ;
        }
      }
    }
    .app-ctrl{
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-top: 1px solid #ededed;
    }
  }
}
</style>
