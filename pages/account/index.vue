<template>
  <div class="middle-container">
    <div class="layout-container">
      <div class="account-main clearfix">
        <my-nav :active="0" class="pull-left" />
        <div class="pull-left right">
          <div class="row">
            <p class="tit">修改密码</p>
            <p>修改当前账号的登录密码 <span class="btn-mini"><nuxt-link to="/account/edit">修改</nuxt-link></span> </p>
          </div>
          <div class="row flex">
            <div>
              <p class="tit">设置签名</p>
            允许同一个包名（Bundle ID）签名包上传，同样包名的应用 <br>
            可以生成两条记录不做更新处理 
            </div>
            <div>
              <el-switch
              v-model="state"
              active-color="#21bed1"
              inactive-color="#ff4949">
              </el-switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyNav from '../../components/nav/main'
export default {
  // middleware: 'auth',
  data: function(){
    return {
      state: true
    }
  },
  components: {
    MyNav
  }
}
</script>
<style lang="scss">
  .account-main{
    padding-top: 20px;
    .right{
      width: calc( 100% - 200px);
      min-height: calc( 100vh - 168px);
      height: 100%;
      background-color: #fff;
      padding: 0 20px;
      .row{
        padding: 20px 0;
        line-height: 1.6;
        border-bottom: 1px solid #ededed;
        &:last-child{
          border: none;
        }
      }
      .flex{
        width: 500px;
        align-items: center;
      }
    }
    .tit{
      font-weight: 700;
    }
  }
  .btn-mini{
    border: 1px solid #21bed1;
    border-radius: 20px;
    font-size: 12px;
    margin-left: 10px;
    padding: 0 10px;
    a{
      color: #21bed1;
    }
  }
  @media only screen and (max-width: 767px) {
    .account-main{
      padding-top: 0;
      width: 100%;
      .right{
        width:  100% !important;
        min-height: initial;
        height: 100%;
        .flex{
          width: initial;
          align-items: center;
          flex-wrap: wrap;
        }
      }
    }
  }
</style>

