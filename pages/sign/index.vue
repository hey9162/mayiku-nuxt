<template>
  <div class="middle-container">
    <div class="layout-container">
      <div class="steps hidden-xs-only" >
        <no-ssr>
          <my-steps :active="active" :simple="true">
            <my-step title="上传苹果APP，选择套餐" icon="iconfont iconpl1" ></my-step>
            <my-step title="等待签名" icon="iconfont iconpl2" ></my-step>
            <my-step title="下载签名包" icon="iconfont iconpl" ></my-step>
          </my-steps>
        </no-ssr>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
        <div class="sign-info">
          <div class="sign-item">
            <p class="item-tit">上传应用 <span class="gay">（仅支持.ipa文件，最大支持1G）</span></p>
            <div class="item-content">
              <div class="clearfix">
                <p class="left-lable pull-left"></p>
                <div class="pull-left">
                  <div v-if="!app.icon">
                    <el-upload
                      ref="upload"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="false"
                      :auto-upload="false"
                      accept=".ipa"
                      :on-change="upHandleChange"
                      >
                      <el-button size="small" type="primary"><i class="el-icon-upload"></i>&nbsp;点击上传</el-button>
                    </el-upload>
                  </div>
                  <div v-if="app.icon" class="app-info">
                    <div><img :src="app.icon" alt=""></div>
                    <div>
                      <p>{{app.package}}</p>
                      <p class="detail">
                        <span class="gay">版本: {{ app['versionName']}}</span>
                        <span class="gay">大小：{{(app['size']/1024/1024).toFixed(2)}}M</span>
                        <span class="gay">包名：{{app['package']}}</span>
                      </p>
                    </div>
                  </div>
                  <el-upload
                    v-if="app.icon"
                    ref="upload"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :auto-upload="false"
                    :on-change="upHandleChange"
                    >
                    <el-button size="mini" type="text">重新上传</el-button>
                  </el-upload>
                </div>
              </div>
            </div>
          </div>
          <div class="sign-item">
            <p class="item-tit">选择套餐</p>
            <div class="item-content">
              <el-form-item label="选择套餐" prop="meal">
                <el-radio-group v-model="ruleForm.meal" size="">
                  <el-radio label="1" size="small" border>体验版</el-radio>
                  <el-radio label="2" size="small" border>普通版</el-radio>
                  <el-radio label="3" size="small" border>高级版</el-radio>
                  <el-radio label="4" size="small" border>独立版</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="使用时间" prop="time">
                <el-radio-group v-model="ruleForm.time" size="small">
                  <el-radio label="1">1天</el-radio>
                  <el-radio label="2">2天</el-radio>
                  <el-radio label="3">3天</el-radio>
                  <el-radio label="4">4天</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="支付方式" prop="way">
                <el-radio-group v-model="ruleForm.way" size="">
                  <el-radio label="1" size="small" border class="play">&nbsp;</el-radio>
                  <el-radio label="2" size="small" border class="wechat">&nbsp;</el-radio>
                </el-radio-group>
              </el-form-item>
            </div>
          </div>
          <div class="sign-item">
            <p class="item-tit">账号信息</p>
            <div class="item-content">
              <el-form-item label="联系QQ" :inline-message="true" prop="qq">
                <el-input v-model="ruleForm.qq" size="small" placeholder="请填写您的QQ号码，方便后续工作人员与您联系"></el-input>
              </el-form-item>
              <el-form-item label="测试账号" prop="access">
                <el-input v-model="ruleForm.access" size="small" placeholder="请填写APP的测试登录账号"></el-input>
              </el-form-item>
              <el-form-item label="测试密码" prop="password">
                <el-input v-model="ruleForm.password" size="small" type="password" placeholder="请填写APP的测试登录密码"></el-input>
              </el-form-item>
            </div>
          </div>
          <div class="sign-item">
            <p class="play-pic">应支付 &nbsp; <span class="red big">&yen;&nbsp;0</span></p>
            <div>
              <el-button type="primary" style="width:120px" size="small">去支付</el-button>
            </div>
          </div>
        </div>
      </el-form>
    </div>
    <el-dialog
      :title="app.package"
      :visible="dialog"
      width="25%"
      :show-close="false"
      center
      class="process-dialog"
      >
      <div class="process-box">
        <div><img :src="app.icon" alt="" width="90px" style="margin-bottom:10px;"></div>
        <span>正在上传中，请不要关闭浏览器</span><br>
        <span>(如长时间卡住，请联系：123456789)</span>
        <div class="progress">
          <div class="progress-bar" role="progressbar" style="width: 78%;"></div>
        </div>
        <div style="margin-top:20px;font-weight:700;">78%&nbsp;/&nbsp;50M</div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialog = false">取消上传</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import MyStep from '../../components/steps/src/step'
import MySteps from '../../components/steps/src/steps'
import * as qiniu from 'qiniu-js'
  export default {
    components:{
      MyStep,
      MySteps
    },
    created: function(){
    },
    data() {
      return {
        app:{
          package: '',
          size:'',
          icon: '',
          name:'',
          versionName:''
        },
        dialog: false,
        active: 0,
        radio3: '1',
        radio4: '1',
        ruleForm: {
          meal:'',
          time:'',
          way:'',
          qq:'',
          access:'',
          password:''
        },
        rules: {
          qq: [
            { required: true, message: '请输入QQ', trigger: 'blur' },
            { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
          ],
        }
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            return false;
          }
        });
      },
      upHandleChange(file, fileList){
        console.log(file)
        const parser = new AppInfoParser(file.raw)
        parser.parse().then(result => {
          this.app.package = result['package'] || result['CFBundleName']
          this.app.size = file.raw.size
          this.app.versionName = result['versionName'] || result['CFBundleShortVersionString']
          this.app.icon = result.icon
          this.dialog = true
          this.$refs.upload.submit()
        }).catch(err => {
          
        })
      }
    }
  }
</script>

<style lang="scss">
@keyframes progress-bar-stripes {
  from  { background-position: 40px 0; }
  to    { background-position: 0 0; }
}
.el-icon-upload{
  font-size: 18px;
  margin-right: 5px;
  vertical-align: -2px;
}
.app-info{
  display: flex;
  line-height: 2;
  img{
    margin-right: 20px;
    width: 50px;
  }
  .detail{
    span.gay{
      display: inline-block;
      margin-right: 20px;
    }
  }
}
.process-dialog{
  .el-dialog__body{
    padding: 10px 0 20px 0;
  }
}
.progress{
  height: 12px;
  width: 90%;
  margin: 20px auto 0 auto;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 20px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
  box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
}
.process-box{
  text-align: center;
  .progress-bar{
    border-radius: 20px;
    float: left;
    width: 13%;
    height: 12px;
    font-size: 12px;
    line-height: 20px;
    color: #fff;
    text-align: center;
    background-color: #21bed1;
    -webkit-box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);
    box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);
    -webkit-transition: width .6s ease;
    -o-transition: width .6s ease;
    transition: width .6s ease;
    background-size: 40px 40px;
    background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
    animation: progress-bar-stripes 2s linear infinite;
  }
}
.gay{
  color:#C0C4CC;
  font-weight: normal;
}
.steps{
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  background: #ffffff;
}
.sign-info{
  background-color: #ffffff;
  .item-tit{
    margin-bottom: 20px;
    font-weight: bold;
  }
  .sign-item{
    padding: 20px 40px;
    border-bottom: 1px dashed #C0C4CC;
    &:last-child{
      border: none;
      margin-bottom: 20px;
    }
  }
  .item-content{
    margin-left: 80px;
    .el-form-item__label{
      margin-right: 50px;
    }
    .el-input{
      width: 35%;
    }
  }
}
.is-bordered .el-radio__input{
  display: none;
}
.el-radio.is-bordered.is-checked{
  background-image: url('./../../assets/images/checked.png');
  background-size: 20%,50%;
  background-repeat: no-repeat,no-repeat;
  background-position: bottom right,center center;
  &.play{
    width: 8em;
    background-image: url('./../../assets/images/checked.png'),url('./../../assets/images/paly.png');
    background-size: 20%,50%;
    background-repeat: no-repeat,no-repeat;
    background-position: bottom right,center center;
  }
  &.wechat{
    width: 8em;
    background-image: url('./../../assets/images/checked.png'),url('./../../assets/images/wechat.png');
    background-size: 20%,70%;
    background-repeat: no-repeat,no-repeat;
    background-position: bottom right,center center;
  }
}
.play{
  width: 8em;
  background-image: url('./../../assets/images/paly.png');
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center center;
}
.wechat{
  width: 8em;
  background-image: url('./../../assets/images/wechat.png');
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center center;
}
.play-pic{
  margin-bottom: 20px;
}
.big{
  font-size: 30px;
}
@media only screen and (max-width: 767px) {
  .middle-container .el-dialog {
    width: 90% !important;
  }
  .sign-item{
    padding: 10px !important;
  }
  .sign-info .item-content{
    margin-left: 0;
  }
  .el-radio {
    margin-bottom: 10px;
    margin-left: 0 !important;
  }
  .el-form-item__content{
    margin-left: 20px !important;
  }
  .sign-info .item-content .el-form-item__label{
    margin-right: 20px;
  }
  .sign-info .item-content .el-input{
    width:95%;
  }
}
</style>
