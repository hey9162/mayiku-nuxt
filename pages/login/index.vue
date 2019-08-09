<template>
  <div>
    <el-form
      :model="ruleForm"
      status-icon
      @submit="submitForm('ruleForm')"
      :rules="rules"
      ref="ruleForm"
    >
      <div class="form-pro">
        <div class="inp-group">
          <el-form-item prop="phone">
            <el-input
              v-model="ruleForm.phone"
              maxlength="11"
              type="text"
              placeholder="请输入您的11位手机号码"
              size="large"
              prefix-icon="iconfont iconphone"
            >
            </el-input>
          </el-form-item>
        </div>
        <div class="inp-group">
          <el-form-item prop="password">
            <el-input
              v-model="ruleForm.password"
              maxlength="20"
              @keyup.enter.native="submitForm('ruleForm')"
              type="password"
              placeholder="请输入您的密码"
              prefix-icon="iconfont iconsuo1"
              size="large"
            ></el-input>
          </el-form-item>
        </div>
        <div class="inp-group remaner">
          <el-checkbox v-model="remember" label="2">记住密码</el-checkbox>
        </div>
        <div class="inp-group">
          <el-button class="full-btn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
        <div class="inp-group full-btn clearfix">
          <nuxt-link to="/register" class="pull-left">
            <el-button type="text">免费注册</el-button>
          </nuxt-link>
          <nuxt-link to="/register" class="pull-right">
            <el-button type="text">忘记密码</el-button>
          </nuxt-link>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
/**
 * https://github.com/mazipan/nuxt-storage
 * 便于在Nuxt.js项目中读写浏览器的存储空间
 */
import { getData, setData } from 'nuxt-storage/local-storage'
import { login } from '@/api/login.js'
import { applyResult } from '@/api/online'
import { validPhone, validPassword } from '@/utils/validate'
import { getSession } from '@/utils/session'
export default {
  name: 'Login',
  layout: 'loginOrReg',
  data() {
    const validatePhone = (rule, value, callback) => {
      if (!validPhone(value)) {
        callback(new Error('手机号码不正确'))
      } else {
        callback()
      }
    }
    const validPass = (rule, value, callback) => {
      if (!validPassword(value)) {
        callback(new Error('密码输入不正确'))
      } else {
        callback()
      }
    }
    return {
      data:{},
      isShowCapt: false,
      remember: true,
      view: {
        timeNum: '',
        disabled: false
      },
      ruleForm: {
        phone: '',
        password: ''
      },
      rules: {
        phone: [
          { required: true, trigger: 'blur', message: '手机号不能为空', },
          { required: true, trigger: 'blur', validator: validatePhone }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { trigger: 'blur', validator: validPass }
        ],
      }
    }
  },
  async asyncData({ $axios }) {
    return $axios.$post('/api/questions/all').then((res)=>{
      return {data:res.data}
    })
  },
  created: function(){
    setData('key', 'value')
    console.log(getData('key'))
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      return JSON.stringify(value)
    }
  },
  methods: {
    async submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const data = {
            phone: this.ruleForm.phone,
            password: this.ruleForm.password,
          }
          this.$axios.$post('/api/questions/all')
          // .then(response => {
          //   localStorage.setItem('token', response.data.token);
          //   localStorage.setItem('user', JSON.stringify(response.data.user));
          //   let ids = getSession('wrong');
          //   if (ids) {
          //     applyResult({ question_id: ids, result: -1 })
          //   }
          //   this.$router.push('/');
          // })
        } else {
          return false;
        }
      });
    },
  }
}
</script>
<style lang="scss">
.remaner{
  margin-bottom: 20px !important;
}
</style>
