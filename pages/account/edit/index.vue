<template>
  <div class="middle-container">
    <div class="layout-container">
      <div class="account-main clearfix">
        <my-nav :active="0" class="pull-left" />
        <div class="pull-left right">
          <el-form :model="form" class="form-box">
            <div class="row">
              <p class="tit">修改密码</p>
              <el-form-item>
                <el-input v-model="form.old" :type="type1" size="small" placeholder="请输入您的原密码">
                  <i
                    v-if="type1 !== 'password'"
                    class="iconfont iconyanjing"
                    slot="suffix" @click="totalType(1,1)">
                  </i>
                  <i
                    v-if="type1 !== 'text'"
                    class="iconfont iconyanjing1"
                    slot="suffix" @click="totalType(1,2)">
                  </i>
                </el-input>
              </el-form-item>
            </div>
            <div class="row">
              <p class="tit">新密码</p>
              <el-form-item>
                <el-input v-model="form.new1" :type="type2" size="small" placeholder="请输入您的新密码">
                  <i
                  v-if="type2 !== 'password'"
                    class="iconfont iconyanjing"
                    slot="suffix" @click="totalType(2,1)">
                  </i>
                  <i
                  v-if="type2 !== 'text'"
                    class="iconfont iconyanjing1"
                    @click="totalType(2,2)"
                    slot="suffix">
                  </i>
                </el-input>
              </el-form-item>
            </div>
            <div class="row">
              <p class="tit">确认新密码</p>
              <el-form-item>
                <el-input v-model="form.new2" :type="type3" size="small" placeholder="请再次输入您的新密码">
                  <i
                  v-if="type3 !== 'password'"
                    class="iconfont iconyanjing"
                    slot="suffix" @click="totalType(3,1)">
                  </i>
                  <i
                  v-if="type3 !== 'text'"
                    class="iconfont iconyanjing1"
                    slot="suffix" @click="totalType(3,2)">
                  </i>
                </el-input>
              </el-form-item>
            </div>
            <el-form-item>
              <el-button type="primary" size="small" @click="onSubmit">保存</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyNav from '../../../components/nav/main'
export default {
  // middleware: 'auth',
  data: function(){
    return {
      type1:'password',
      type2:'password',
      type3:'password',
      form: {
        old:'',
        new1:'',
        new2:''
      }
    }
  },
  components: {
    MyNav
  },
  methods:{
    onSubmit(){

    },
    totalType(index,isPass){
      if(index == 1){
        if(isPass == 1){
          this.type1 = 'password' 
        }else{
          this.type1 = 'text' 
        }
      }
      if(index == 2){
        if(isPass == 1){
          this.type2 = 'password' 
        }else{
          this.type2 = 'text' 
        }
      }
      if(index == 3){
        if(isPass == 1){
          this.type3 = 'password' 
        }else{
          this.type3 = 'text' 
        }
      }
    }
  }
}
</script>
<style lang="scss">
  .form-box{
    padding-top: 20px;
    .tit{
      margin-bottom: 10px;
    }
    .row{
      border: none !important;
      padding: 0 !important;
    }
    width: 40%;
  }
  @media only screen and (max-width: 767px) {
    .form-box{
      padding-top: 20px;
      width: 100%;
    }
  }
</style>

