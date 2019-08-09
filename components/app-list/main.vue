<template>
  <div class="flex app-list">
    <div class="icon-box">
      <img src="./../../assets/images/logo-small.png" alt="">
    </div>
    <div class="info-box">
      <div>
        <!-- <el-badge type="info" :value="'体验版'">
          <span class="name">考试猫</span>
        </el-badge> -->
        <el-badge type="danger" :value="'独立版'">
          <span class="name">考试猫</span>
        </el-badge>
        <!-- <el-badge type="warning" :value="'高级版'">
          <span class="name">考试猫</span>
        </el-badge>
        <el-badge type="primary" :value="'普通版'">
          <span class="name">考试猫</span>
        </el-badge> -->
      </div>
      <p>
        <span>版本： 2.12</span>
        <span>包名： abc.cads.cas</span>
        <span>到期时间：2019-12-12</span>
      </p>
    </div>
    <div class="ctrl-box">
      <nuxt-link to="/user/detail"><el-button circle class="custom-btn"> 查看</el-button></nuxt-link>
      <el-button circle class="custom-btn">更新</el-button>
      <el-button circle class="custom-btn">续费</el-button>
      <el-button circle class="custom-btn danger">删除</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppList',
  props: ['sign'],
  data() {
    return{
    }
  },
  created: function(){
  },
  methods: {
    
  }
}
</script>
<style lang="scss">
  .flex{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap; 
    .name{
      display: inline-block;
      padding-right: 10px;
    }
    .icon-box{
      margin-right: 15px;
      width: 50px;
      img{
        width: 100%;
      }
    }
    .info-box{
      flex-grow: 1;
    }
    .ctrl-box{
      margin-top: 6px;
      .custom-btn{
        color: #21bed1;
        border-color: #21bed1;
        &.danger{
          color: #fd0000;
          border-color: #fd0000;
          &:hover{
            background-color:#fd000014;
          }
        }
      }
    }
    .el-button.is-circle{
      padding: 12px 6px;
    }
    &.app-list{
      border-bottom: 1px solid #ededee;
      padding: 15px;
      line-height: 1.52;
      &:hover{
        box-shadow: #ededed 0 0 4px;
      }
    }
  }
</style>
