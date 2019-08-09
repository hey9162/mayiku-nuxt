<template>
  <div class="page phone">
    <div class="login-layout">
      <div class="login-main">
        <div class="log">
          <nuxt-link to="/"><img src="./../assets/images/login-logo.png" alt=""></nuxt-link>
        </div>
        <nuxt :key="key" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoginOrReg',
  data() {
    return {
      key: ''
    }
  },
}
</script>

<style lang="scss">
.page{
    background-image: url('./../assets/images/bj.png');
    height: 100vh;
    width: 100vw;
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .login-layout{
      min-width: 1200px;
      height: 620px;
      display: inline-block;
      background-image: url('./../assets/images/login.png');
      background-position: center center;
      background-size: cover;
    }
    .login-main{
      padding: 50px;
      width: 50%;
      margin-left: 50%;
      .log{
        margin-bottom: 20px;
        text-align: center;
        img{
          width: 50%;
        }
      }
    }
  }
  @media only screen and (max-width: 767px) {
    .phone{
      .login-layout{
        min-width: initial;
        height: initial;
        background-color: #ffffff;
        background-image: none;
        border-radius: 10px;
        width: 90%;
        .login-main{
          padding: 15px;
          width: 100%;
          margin-left:0;
        }
      }
    }
  }
</style>

