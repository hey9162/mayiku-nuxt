<template>
  <footer class="footer">
    <div class="layout-container">
      <div class="center">
        Copyright &copy; 2019 蚂蚁企业签名服务&emsp;联系我们QQ：123456789
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'MyFooter',
  data() {
    return{

    }
  },
  methods: {
    
  }
}
</script>
<style lang="scss">
  .footer{
    line-height: 60px;
    background-color: #ffffff;
    border-top: 1px solid #ededed;
  }
  @media only screen and (max-width: 767px) {
  .footer {
    padding: 20px 0;
    line-height: 1.5;
  }
}
</style>
