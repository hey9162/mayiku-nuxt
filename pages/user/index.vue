<template>
  <div class="middle-container">
    <div class="layout-container">
      <div class="user-main">
        <el-form :inline="true" :model="form" class="demo-form-inline">
          <el-form-item>
            <el-input size="small" v-model="form.name" placeholder="请输入应用名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button size="small" type="primary" @click="onSubmit">搜索</el-button>
          </el-form-item>
        </el-form>
        <div class="app-box" v-if="">
          <app-list v-for="item in list" :sign="item" :key="item.id" />
        </div>
        <div class="pager">
          <el-pagination
            background
            layout="total, prev, pager, next, jumper"
            :total="500">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import appList from '@/components/app-list/main.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  // middleware: 'auth', //需要路由拦截的页面
  components:{
    appList
  },
  data:function(){
    return {
      form:{
        name:''
      }
    }
  },
  computed: {
    ...mapState({
      list: state => state.user.list
    })
  },
  created: function(){
  },
  async fetch({ app, store, params}) {
    let data = '1203456'
    store.commit('user/add', data)
  },
  methods:{
    onSubmit(){
    }
  }
}
</script>
<style lang="scss">
  .user-main{
    margin-top: 20px;
    background-color: #ffffff;
    padding: 20px;
    border: 1px solid #ededed;
    .app-box{
      border: 1px solid #ededed;
      .app-list{
        &:last-child{
          border: none;
        }
      }
    }
  }
  .pager{
    margin-top: 20px;
    text-align: center;
  }
  .el-pagination.is-background .btn-prev,
   .el-pagination.is-background .btn-next,
  .el-pagination.is-background .el-pager li{
    margin-bottom: 10px;
  }
  .el-pagination{
    white-space: normal;
  }
@media only screen and (max-width: 767px) {
  .user-main{
    margin-top: 0;
  }
  .user-main{
    .el-form-item__content{
      margin: 0 !important;
    }
  }
}
  
</style>