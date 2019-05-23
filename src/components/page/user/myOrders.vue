<template lang='pug'>
  .order
    el-table(:data="orderList", style="width: 100%", border)
      el-table-column(prop="id", label="ID", width="140")
      el-table-column(prop="orderNO", label="订单号", width="191")
      el-table-column(prop="productName", label="产品名称", width="240")
      el-table-column(prop="price", label="总价", width="179")
      el-table-column(prop="ordMember", label="下单会员", width="220")
      el-table-column(prop="ordTime", label="下单时间", width="220")
      el-table-column(prop="ordStatus", label="订单状态", width="180")
</template>

<script>
export default {
  data() {
    return {
      orderList:[{
        id: 534,
        orderNO: 9527,
        productName: '肾宝片',
        price: 299,
        ordMember: 18392885099,
        ordTime: '2019年4月15日21:47:45',
        ordStatus: '已支付',
        contacts: '张三',
        contactNumber: 18392885099
      },{
        id: 534,
        orderNO: 9527,
        productName: '肾宝片',
        price: 299,
        ordMember: 18392885099,
        ordTime: '2019年4月15日21:47:45',
        ordStatus: '已支付',
        contacts: '张三',
        contactNumber: 18392885099
      },{
        id: 534,
        orderNO: 9527,
        productName: '肾宝片',
        price: 299,
        ordMember: 18392885099,
        ordTime: '2019年4月15日21:47:45',
        ordStatus: '已支付',
        contacts: '张三',
        contactNumber: 18392885099
      },{
        id: 534,
        orderNO: 9527,
        productName: '肾宝片',
        price: 299,
        ordMember: 18392885099,
        ordTime: '2019年4月15日21:47:45',
        ordStatus: '已支付',
        contacts: '张三',
        contactNumber: 18392885099
      },{
        id: 534,
        orderNO: 9527,
        productName: '肾宝片',
        price: 299,
        ordMember: 18392885099,
        ordTime: '2019年4月15日21:47:45',
        ordStatus: '已支付',
        contacts: '张三',
        contactNumber: 18392885099
      },{
        id: 534,
        orderNO: 9527,
        productName: '肾宝片',
        price: 299,
        ordMember: 18392885099,
        ordTime: '2019年4月15日21:47:45',
        ordStatus: '已支付',
        contacts: '张三',
        contactNumber: 18392885099
      }]
    }
  }
}
</script>

<style lang='scss'>
  .order {
    width:1372px;
    height: 600px;
    background-color: #dddddd;
    margin: 10px auto;
  }
</style>
