<template>
  <div class="order-container">
    <el-dialog
      title="添加新订单"
      :visible.sync="dialogVisible"
      width="50%">
    <el-form ref="orderForm" :model="orderData" :rules="orderRules" class="order-form" auto-complete="on" label-width="120px">
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="课程类型" prop="courseType">
            <el-radio-group v-model="orderData.courseType">
                <el-radio label="口语课" value="0"></el-radio>
                <el-radio label="四六级" value="1"></el-radio>
                <el-radio label="外交1v1" value="2"></el-radio>
                <el-radio label="锦鲤周边" value="3"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
            <el-form-item label="课程名称" prop="courseName">
          <el-input v-model="orderData.courseName" placeholder="请输入课程标题"></el-input>
        </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="购买时间" prop="time">
            <el-date-picker
              v-model="orderData.time"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="课程价格" prop="price">
            <el-input v-model="orderData.price" placeholder="请输入课程标题"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="优惠价格" prop="discountPrice">
            <el-input v-model="orderData.discountPrice" placeholder="请输入课程标题"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="最终价格" pro="finialPrice">
            <el-input v-model="orderData.finialPrice" placeholder="请输入课程标题"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="购买人" prop="customer">
            <el-input v-model="orderData.customer" placeholder="请输入课程标题"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="联系方式" prop="tel">
            <el-input v-model="orderData.tel" placeholder="请输入课程标题"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="联系地址" prop="location">
            <el-input v-model="orderData.location" placeholder="请输入联系地址"></el-input>
          </el-form-item>
        </el-col>
        
      </el-row>
      
    </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible:true,
      orderData: {
        courseType: "0",
        courseName: "",
        time: "",
        price: "",
        discountPrice: "",
        finialPrice: "",
        customer: "",
        tel: "",
        location: ""
      },
      orderRules: {}
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    onSubmit() {
      console.log("submit!");
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped lang="scss">
.order-container {
  .order-form {
    .el-input {
      width: 220px !important;
    }
  }
}
</style>
