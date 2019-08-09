<template>
  <div class="middle-container" style="background:#fff;">
    <div class="layout-container">
      <div class="find-form">
        <div class="find-tit">
          找回密码
        </div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
          <div class="form-pro">
            <div class="inp-group">
              <el-form-item prop="phone">
                <el-input
                  v-model="ruleForm.phone"
                  maxlength="11"
                  type="text"
                  placeholder="请输入手机号码"
                  size="large"
                  prefix-icon="iconfont iconphone"
                >
                </el-input>
              </el-form-item>
            </div>
            <div class="inp-group">
              <el-form-item prop="code">
                <el-input v-model="ruleForm.code"
                prefix-icon="iconfont iconyanzhengma"
                 maxlength="6" placeholder="请输入手机验证码" size="large"></el-input>
                <el-button
                  size="small"
                  class="right-btn"
                  :disabled="view.disabled"
                  type="primary"
                  @click="getCheck('ruleForm')"
                >
                  <span v-if="!view.timeNum">获取验证码</span>
                  <span v-if="view.timeNum">{{ view.timeNum }}秒</span>
                </el-button>
              </el-form-item>
            </div>
            <div class="inp-group">
              <el-form-item prop="password">
                <el-input
                  v-model="ruleForm.password"
                  type="password"
                  placeholder="请输入您的新密码"
                  size="large"
                  prefix-icon="iconfont iconsuo1"
                ></el-input>
              </el-form-item>
            </div>
            <div class="inp-group">
              <el-form-item prop="conPassword">
                <el-input
                  v-model="ruleForm.conPassword"
                  type="password"
                  @keyup.enter.native="submitForm('ruleForm')"
                  placeholder="请再次输入您的新密码"
                  size="large"
                  prefix-icon="iconfont iconsuo1"
                ></el-input>
              </el-form-item>
            </div>
            <div class="inp-group">
              <el-button class="full-btn" type="primary" @click="submitForm('ruleForm')">修改密码</el-button>
            </div>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { validPhone, validPassword } from '@/utils/validate.js'
import { resetPass } from '@/api/login.js'
export default {
  name: 'Reset',
  layout: 'null',
  data() {
    const validatePhone = (rule, value, callback) => {
      if (!validPhone(value)) {
        callback(new Error('手机号码不正确'))
      } else {
        callback()
      }
    }
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (!validPassword(value)) {
        callback(new Error('密码格式不正确'));
      } else {
        if (this.ruleForm.conPassword !== '') {
          this.$refs.ruleForm.validateField('conPassword');
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      isShowCapt: false,
      view: {
        timeNum: '',
        disabled: false
      },
      token: '',
      ruleForm: {
        phone: '',
        code: '',
        password: '',
        conPassword: ''
      },
      rules: {
        phone: [
          { required: true, message: '手机号不能为空', trigger: 'blur', validator: validatePhone }
        ],
        code: [
          { required: true, message: '验证码不能为空', trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        conPassword: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  created: function () {
    this.ruleForm.phone = this.$route.query.phone
    this.token = this.$route.query.token
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const data = {
            token: this.token,
            password: this.ruleForm.password,
            repassword: this.ruleForm.conPassword
          }
          resetPass(data).then(response => {
            this.$router.push('/login');
          })
        } else {
          return false;
        }
      });
    }
  }
}
</script>
<style lang="scss">
  .find-form{
    position: absolute;
    margin: auto;
    padding: 45px;
    top: 0;left: 0;right: 0;bottom: 0;
    width: 500px;
    height: 545px;
    border: 1px solid #ededed;
    box-shadow: #ededed 0px 0px 10px;
  }
  .find-tit{
    color: #21bed1;
    font-size: 36px;
    text-align: center;
    margin: 20px 0;
  }
  @media only screen and (max-width: 767px) {
    .el-form-item__content{
      margin-left: 0 !important;
    }
    .find-form{
      position: absolute;
      margin: auto;
      padding: 15px;
      width: 100%;
      height: 420px;
      top: -60px;
      border: 1px solid #ededed;
      box-shadow: #ededed 0px 0px 10px;
    }
    .find-tit{
      color: #21bed1;
      font-size: 36px;
      text-align: center;
      margin: 20px 0;
    }
  }
</style>
