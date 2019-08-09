<template>
  <div class="middle-container">
    <div class="layout-container">
      <div class="account-main clearfix">
        <my-nav :active="1" class="pull-left" />
        <div class="pull-left table right">
          <el-table :data="tableData"
           style="width: 100%">
            <el-table-column prop="orderNum" label="订单号" width="180" align="center"></el-table-column>
            <el-table-column prop="commodity" label="商品" width="180" align="center"></el-table-column>
            <el-table-column prop="meal" label="套餐"  align="center"></el-table-column>
            <el-table-column prop="dayNum" label="天数" align="center"></el-table-column>
            <el-table-column prop="pic" label="金额" align="center"></el-table-column>
            <el-table-column prop="way" label="支付方式" align="center"></el-table-column>
            <el-table-column prop="time" label="付款时间" align="center"></el-table-column>
            <el-table-column prop="state" label="状态" align="center"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyNav from '../../../components/nav/main'
export default {
  // middleware: 'auth',
  data: function () {
    return {
        tableData: [{
          orderNum:'9527',
          commodity:'ios企业签名',
          time: '2016-05-02',
          meal: '普通版',
          dayNum: '356',
          pic: '￥1200',
          way: '支付宝',
          state: '已支付'
        },
        {
          orderNum:'9527',
          commodity:'ios企业签名',
          time: '2016-05-02',
          meal: '普通版',
          dayNum: '356',
          pic: '￥1200',
          way: '支付宝',
          state: '已支付'
        },
        {
          orderNum:'9527',
          commodity:'ios企业签名',
          time: '2016-05-02',
          meal: '普通版',
          dayNum: '356',
          pic: '￥1200',
          way: '支付宝',
          state: '已支付'
        }]
      }
  },
  components: {
    MyNav
  },
  methods: {
    onSubmit() {

    }
  }
}
</script>
<style lang="scss">
.table.right{
  padding: 0 !important;
  thead{
    th{
      background-color: #f5f5f5;
    }
  }
}
</style>

