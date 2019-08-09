<template>
  <div>
    <ul class="right-float-window" style>
      <li>
        <a href="http://wpa.qq.com/msgrd?v=3&uin=38695299&site=qq&menu=yes" target="_blank">
          <i class="iconfont iconqq"></i>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <i class="iconfont iconwechat"></i>
          <div class="wechat">
            <img src="//pic.dibaqu.com/static/img/weixin.png?20190611" alt />
          </div>
        </a>
      </li>
      <el-backtop>
        <a href="javascript:;">
          <i class="iconfont icontop"></i>
        </a>
      </el-backtop>
    </ul>
    <div>
      <div class="banner" style="background-color: #ffffff;">
        <div class="layout-container">
          <img src="./../assets/images/banner2.png" alt />
        </div>
      </div>
      <div class="banner">
        <div class="layout-container">
          <h2 @click="addTodo">签名流程{{todos}}</h2>
          <img src="./../assets/images/qianming.png" alt />
        </div>
      </div>
      <div class="banner" style="background-color: #ffffff;">
        <div class="layout-container">
          <h2>常见问题</h2>
          <div class="clearfix">
            <div class="pull-left help">
              <dl>
                <dt class="clearfix">
                  <span class="left">Q ：</span>
                  <span class="right">企业签名需要提供APP源码吗？</span>
                </dt>
                <dd class="clearfix">
                  <span class="left">A ：</span>
                  <span class="right">不需要源码，只需要提供IPA安装包。</span>
                </dd>
              </dl>
              <dl>
                <dt class="clearfix">
                  <span class="left">Q ：</span>
                  <span class="right">企业签名需要多长时间？</span>
                </dt>
                <dd class="clearfix">
                  <span class="left">A ：</span>
                  <span class="right">在网站上传iOS APP后，后台会自动根据用户需求，进行签名。正常时间10分钟左右，如有特殊情况，客服将主动联系告知。</span>
                </dd>
              </dl>
              <dl>
                <dt class="clearfix">
                  <span class="left">Q ：</span>
                  <span class="right">企业签名的APP有下载数量限制吗？</span>
                </dt>
                <dd class="clearfix">
                  <span class="left">A ：</span>
                  <span class="right">无限制任意安装。可以使用第八区提供的免费下载次数，如果需要更多下载次数，请购买。</span>
                </dd>
              </dl>
              <dl>
                <dt class="clearfix">
                  <span class="left">Q ：</span>
                  <span class="right">会不会中途掉签？</span>
                </dt>
                <dd class="clearfix">
                  <span class="left">A ：</span>
                  <span
                    class="right"
                  >可能存在，由于一张证书签名的APP过多、下载量过大或者一些不可控的原因，苹果公司将封掉该证书，导致该证书签名的APP全部闪退； 我们将通过给APP分类签名和独立证书签名等方式，尽量规避该风险。如果掉签，免费补签。</span>
                </dd>
              </dl>
            </div>
            <div class="pull-left help">
              <dl>
                <dt class="clearfix">
                  <span class="left">Q ：</span>
                  <span class="right">企业签名后，可以在App Store中搜索到吗？</span>
                </dt>
                <dd class="clearfix">
                  <span class="left">A ：</span>
                  <span
                    class="right"
                  >不能，企业签名是通过下载页去做下载和安装；而在App Store要能支持下载，必须使用99美金的个人账号或者公司账号，提交iOS APP包，通过App Store审核，才可以下载。</span>
                </dd>
              </dl>
              <dl>
                <dt class="clearfix">
                  <span class="left">Q ：</span>
                  <span class="right">签好后，如何给自己的用户去安装APP?</span>
                </dt>
                <dd class="clearfix">
                  <span class="left">A ：</span>
                  <span
                    class="right"
                  >签名好后，请在导航【企业签名-已签名】中下载已签名的文件，然后点击【应用管理】去上传已经签名好的文件，生成下载链接和二维码，发给用户，即可安装。</span>
                </dd>
              </dl>
              <dl>
                <dt class="clearfix">
                  <span class="left">Q ：</span>
                  <span class="right">企业签名是否支持推送通知？</span>
                </dt>
                <dd class="clearfix">
                  <span class="left">A ：</span>
                  <span class="right">企业签名默认不支持推送通知，如果有特殊需要，请选择独立版本季度以上套餐。</span>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sticky from '@/components/Sticky'
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    Sticky
  },
  created: function(){
    
  },
  computed: {
    todos () {
      return this.$store.state.todos.list
    }
  },
  methods: {
    addTodo (e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  },
  created: function () {
    console.log(this.toggle)
  }
}
</script>

<style lang="scss">
.right-float-window {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  z-index: 999;
  .el-backtop {
    right: 0 !important;
    bottom: 0 !important;
    border-radius: 0;
  }
  li,
  .el-backtop {
    width: 80px;
    height: 80px;
    border: 1px solid #eeeeee;
    border-bottom: 0;
    &:last-child {
      border-bottom: 1px solid #eeeeee;
    }
    &:hover {
      background-color: #35b6c6;
      .wechat {
        display: block !important;
      }
    }
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #21bed1;
    cursor: pointer;
    position: relative;
    i {
      font-size: 30px;
      color: #ffffff;
    }
    .wechat {
      width: 146px;
      height: 135px;
      position: absolute;
      top: -18px;
      right: calc(100% + 10px);
      padding: 10px 0 0 10px;
      z-index: 1000;
      display: none;
      transition: all 600ms;
      img {
        background-color: #ffffff;
        padding: 8px;
        width: 100%;
      }
    }
  }
}
.banner {
  padding: 40px 0;
  img {
    width: 100%;
  }
  h2 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 36px;
  }
}
.help {
  text-align: left;
  width: 50%;
  padding: 0 24px;
  dt {
    line-height: 30px;
    font-weight: 600;
  }
  .left {
    float: left;
  }
}
@media only screen and (max-width: 767px) {
  .help {
    width: 100%;
  }
  .right-float-window li,
  .right-float-window .el-backtop {
    width: 40px;
    height: 40px;
    i {
      font-size: 20px;
    }
  }
}
</style>
