<template>
  <div class="nav-box">
    <div class="nav-item" v-for="(item,index) in navList" :class="index == active?'active':''">
      <nuxt-link  :to="item.link">
        <div>
          <i class="nav-icon" :class="item.icon"></i>
          <span class="">{{item.name}}</span>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyNav',
  data() {
    return{
      navList:[
        {icon:'iconfont iconzhanghao',name:'账号管理',link: '/account'},
        {icon:'iconfont icondingdan',name:'我的订单',link: '/account/order'}
      ]
    }
  },
  props:['active'],
  methods: {
    
  }
}
</script>
<style lang="scss">
  .nav-box{
    width: 180px;
    min-height: calc( 100vh - 168px);
    background-color: #ffffff;
    margin-right: 20px;
    .nav-item{
      line-height: 40px;
      padding: 0 20px;
      &.active{
        background-color: #21bed1;
        a{
          color: #ffffff;
        }
      }
      .nav-icon{
        margin-right: 10px;
      }
    }
  }
  @media only screen and (max-width: 767px) {
    .nav-box{
      display: flex;
      width: 100%;
      min-height: initial;
      border-bottom: 1px solid #ededed;
      text-align: center;
      .nav-item{
        width: 50%;
      }
    }
  }
</style>
