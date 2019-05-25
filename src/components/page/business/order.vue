<template lang='pug'>
  .order
    el-table(:data="orderList", style="width: 100%", border)
      el-table-column(prop="id", label="ID", width="95")
      el-table-column(prop="orderNO", label="订单号", width="170")
      el-table-column(prop="productName", label="产品名称", width="240")
      el-table-column(prop="price", label="总价", width="179")
      el-table-column(prop="ordMember", label="下单会员", width="180")
      el-table-column(prop="ordTime", label="下单时间", width="180")
      el-table-column(prop="ordStatus", label="订单状态", width="180")
      el-table-column(prop="contacts", label="联系人", width="160")
      el-table-column(prop="contactNumber", label="联系电话", width="180")
</template>

<script>
export default {
  data() {
    return {
      orderList:[{
        id: 534,
        orderNO: 9527,
        productName: '运动鞋',
        price: 299,
        ordMember: 18392885099,
        ordTime: '2019年4月15日21:47:45',
        ordStatus: '已支付',
        contacts: '张三',
        contactNumber: 18392885099
      },{
        id: 51734,
        orderNO: 9864,
        productName: '大白兔',
        price: 129,
        ordMember: 18392885089,
        ordTime: '2019年4月15日11:47:45',
        ordStatus: '已支付',
        contacts: '李四',
        contactNumber: 18392885089
      },{
        id: 5134,
        orderNO: 9319,
        productName: '书包',
        price: 299,
        ordMember: 18392885079,
        ordTime: '2019年4月15日21:47:45',
        ordStatus: '已支付',
        contacts: '王麻子',
        contactNumber: 18392885079
      },{
        id: 5334,
        orderNO: 9944,
        productName: '书架',
        price: 1299,
        ordMember: 18392885199,
        ordTime: '2019年4月15日21:47:45',
        ordStatus: '已支付',
        contacts: '狗剩',
        contactNumber: 18392885199
      },{
        id: 57734,
        orderNO: 6787,
        productName: '台灯',
        price: 99,
        ordMember: 18392885000,
        ordTime: '2019年4月15日21:07:45',
        ordStatus: '已支付',
        contacts: '张三丰',
        contactNumber: 18392885000
      },{
        id: 1534,
        orderNO: 8827,
        productName: 'iPhoneX',
        price: 7999,
        ordMember: 18392886099,
        ordTime: '2019年4月25日21:47:45',
        ordStatus: '已支付',
        contacts: '刘飞翔',
        contactNumber: 18392886099
      }]
    }
  }
}
</script>

<style lang='scss'>
  .order {
    width: 92%;
    height: 600px;
    // background-color: #dddddd;
    margin: 10px auto;
  }
</style>
