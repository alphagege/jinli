
<template>
  <div class="certificate-container">
    <div class="course-info">
      <div class="signin-course">
        <span>课程类型：</span>口语课
      </div>
      <div class="signin-course">
        <span>课程编号：</span>0001
      </div>
    </div>
    <div class="course-info">
      <div class="signin-course">
        <span>课程标题：</span>办公室英语狂人第一季
      </div>
    </div>
    <div class="certificate-form">
      <!-- <el-form ref="certificate">
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
      </el-form> -->
      <el-form :model="certificate" >
        <el-form-item label="结业证书">
          <el-select v-model="certificate.cardName" placeholder="请选择" @change="changeImgSrc">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="certificate-book">
        <img :src="certificateImgSrc" alt="">
        <div>{{selectedCardName}}</div>
      </div>
      
    </div>

    <div class="button-list"> 
      <el-button type="primary" @click="saveCardType()">保存</el-button>
      <el-button @click="resetCardType()">重置</el-button>
    </div>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      certificateImgSrc:
        "https://img1.mukewang.com/szimg/583e42fb0001e04f05400300-360-202.jpg",
      certificate: {
        cardName: 0
      },
      selectedCardName:"毕业证书0",
      options: [
        {
          value: 0,
          label: "毕业证书0"
        },
        {
          value: 1,
          label: "毕业证书1"
        },
        {
          value: 2,
          label: "毕业证书2"
        }
      ],
      certificateCardOption: [
        {
          name:'毕业证书0',
          imgSrc:"https://img1.mukewang.com/szimg/583e42fb0001e04f05400300-360-202.jpg"
        },
        {
          name:"毕业证书1",
          imgSrc:"https://img2.mukewang.com/szimg/5ac2dfe100014a9005400300-360-202.jpg",
        },
        {
          name:"毕业证书2",
          imgSrc:"https://img3.mukewang.com/szimg/5baf3f0a000180df06000338-360-202.jpg"
        }
      ]
    };
  },
  created() {},
  methods: {
    changeImgSrc(params) {
      this.certificateImgSrc = this.certificateCardOption[params].imgSrc;
      this.selectedCardName = this.certificateCardOption[params].name;

    },
    saveCardType(){
      this.$message({
        message: '保存成功',
        type: 'success'
      });
    }
  }
};
</script>

<style scoped lang="scss">
.certificate-container {
  .course-info {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid $borderColor;
  }
  .signin-course:first-of-type {
    margin-right: 20px;
  }
  .signin-course {
    span{
      font-weight: bold;
    }
    display: inline-block;
  }
  .certificate-form {
    margin: 20px 0;
    .certificate-book{
      display: inline-block;
      div{
        height: 25px;
        line-height: 25px;
        text-align: center;
      }
    }
    img {
      animation-name: fadeIn; /*动画名称*/
      animation-duration: 0.5s; /*动画持续时间*/
      animation-iteration-count: 1; /*动画次数*/
      animation-delay: 0s; /*延迟时间*/
    }
    @keyframes fadeIn {
      0% {
        opacity: 0; /*初始状态 透明度为0*/
      }
      50% {
        opacity: 0; /*中间状态 透明度为0*/
      }
      100% {
        opacity: 1; /*结尾状态 透明度为1*/
      }
    }
  }

  .button-list{
    margin-top: 20px;
    text-align:center;
  }
}
</style>