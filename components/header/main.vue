<template>
  <header class="header" :class="$route.path =='/'?'theme':''">
    <div class="layout-container top-nav hidden-xs-only">
      <div class="pull-left">
        <nuxt-link to="/">
          <img class="logo" v-if="$route.path =='/'" src="@/assets/images/logo-top.png" alt />
          <img class="logo" v-if="$route.path != '/'" src="@/assets/images/logo-top2.png" alt />
        </nuxt-link>
      </div>
      <div class="pull-left header-nav">
        <el-menu mode="horizontal" @select="handleSelect" :default-active="activeIndex">
          <el-menu-item index="/">
            <nuxt-link to="/">首页</nuxt-link>
          </el-menu-item>
          <el-menu-item index="/sign">
            <nuxt-link to="/sign">在线签名</nuxt-link>
          </el-menu-item>
          <el-menu-item index="/user">
            <nuxt-link to="/user">我的签名</nuxt-link>
          </el-menu-item>
          <el-menu-item index="/account">
            <nuxt-link to="/account">账号管理</nuxt-link>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="pull-right">
        <div class="login-ctrl">
          <nuxt-link to="/login">
            <el-button size="small" :class="$route.path=='/'?'trans-btn':''" @click="loginOut(54545)">登录</el-button>
          </nuxt-link>
          <nuxt-link to="/register">
            <el-button size="small" :class="$route.path=='/'?'gay-btn':''">注册</el-button>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="show-xs-only">
      <div class="phone-header clearfix">
        <div class="pull-left">
          <nuxt-link to="/">
            <img class="logo" src="@/assets/images/logo-top2.png" alt />
          </nuxt-link>
        </div>
        <div class="pull-right">
          <i class="el-icon-menu" @click="show = !show"></i>
        </div>
      </div>
      <!-- <el-collapse-transition> -->
        <el-dialog :visible.sync="show"
        width="100%"
        custom-class="nav-dialog"
        :show-close="false"
        top="60px">
        <div>
          <div class="phone-nav" :class="show?'nav-ani-show':'nav-ani-hide'">
            <el-menu mode="vertical" @select="handleSelect" :default-active="activeIndex">
              <el-menu-item index="/">
                <nuxt-link to="/">首页</nuxt-link>
              </el-menu-item>
              <el-menu-item index="/sign">
                <nuxt-link to="/sign">在线签名</nuxt-link>
              </el-menu-item>
              <el-menu-item index="/user">
                <nuxt-link to="/user">我的签名</nuxt-link>
              </el-menu-item>
              <el-menu-item index="/account">
                <nuxt-link to="/account">账号管理</nuxt-link>
              </el-menu-item>
            </el-menu>
            <!-- <div v-show="show" class="v-modal"></div> -->
          </div>
        </div>
        </el-dialog>
      <!-- </el-collapse-transition> -->
    </div>
    <div v-if="$route.path=='/'" class="layout-container banner-nav">
      <div class="pull-left desc">
        <h1>蚂蚁企业证书APP签名</h1>
        <p>
          使用企业签名后，即可立即安装到苹果设备上
          <br />在线7*24小时签名，并提供免费更新
          <br />自助签名，免费补签
        </p>
      </div>
    </div>
  </header>
</template>
<script>
import Sticky from '@/components/Sticky'
import { logout } from "~/api/login";
import { search } from "~/api/online";
import { mapMutations, mapActions } from 'vuex'
export default {
  name: "MyHeader",
  components:{
    Sticky
  },
  data() {
    return {
      show: false,
      activeIndex: this.$route.path
    };
  },
  props: ['current', 'isIndex'],
  computed: {

  },
  created: function () {
  },
  mounted() {
    
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = key
      this.show = false
    },
    ...mapActions({
      loginOut: 'header/loginOut'
    })
  }
};
</script>
<style lang="scss">
$--color-primary: #21bed1;
.header {
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  .logo {
    margin-top: 10px;
    width: 108px;
  }
  .header-nav {
    margin-left: 36px;
  }
  .el-menu.el-menu--horizontal {
    border: none;
  }
  .el-menu-item {
    padding: 0;
    margin-right: 14px;
    a {
      padding: 0 10px;
      display: block;
    }
  }
  .login-ctrl {
    margin-top: 15px;
  }
  .trans-btn {
    background-color: transparent;
    color: #ffffff;
    &:active {
      border-color: #ffffff;
    }
  }
  .gay-btn {
    color: #21bed1;
  }
  button {
    border-radius: 0;
  }
  .banner-nav {
    height: 422px;
  }
  .desc {
    color: #ffffff;
    margin-top: 100px;
    h1 {
      margin: 20px 0;
    }
    p {
      line-height: 1.5;
    }
  }
}
.theme {
  background-image: url("./../../assets/images/banner.png");
  .trans-theme-btn {
    border: 1px solid #ffffff;
    a,
    i,
    span {
      color: #ffffff;
    }
    &:hover {
      border: 1px solid #ffffff !important;
      background-color: transparent;
    }
  }
  .hidden-xs-only .el-menu {
    background-color: transparent;
    li {
      color: #ffffff;
    }
  }
  .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
  .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus {
    background-color: transparent;
    color: #ffffff;
  }
  .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 2px solid #ffffff;
    color: #ffffff;
  }
}
.nav-ani-show{
  top: 60px !important;
  transition: top 0.2s;
}
.nav-ani-hide{
  top: -164 !important;
  transition: top 0.2s;
}
.phone-nav {
  .el-menu {
    background-color: #ffffff !important;
    text-align: center;
    z-index: 99;
    .el-menu-item {
      border-bottom: 1px solid #ededed;
      padding: 0 !important;
      margin: 0;
      &.is-active {
        background-color: #21bed1;
        a {
          color: #ffffff;
        }
      }
    }
  }
}
.nav-dialog{
  border-radius: 0;
  .el-dialog__header{
    display: none;
  }
  .el-dialog__body{
    padding: 0;
  }
}
.phone-header {
  padding: 0 15px;
  line-height: 40px;
  background-color: #ffffff;
  border-bottom: 1px solid #ededed;
  position: fixed;
  width: 100%;
  height: 60px;
  z-index: 9999;
  top: 0;
  .el-icon-menu {
    font-size: 30px;
    color: #21bed1;
    margin-top: 15px;
  }
}
</style>
