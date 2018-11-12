<template>
  <div class="sigin-config">
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
    <el-card>
       <div class="course-puke">
      <div class="course-puke-left">
        <div class="course-puke-title">选择打卡图片库</div>
        <div class="course-puke-info">最多选择3个图库随机打卡</div>
        <div class="course-puke-image">
          <el-row>
            <transition-group name="fade-transform" mode="out-in">
              <el-col :span="6" v-for="(item,index) in selectedpuke" :key='index'>
                <div class="puke-container">
                  <img src="@/assets/imgs/puke.png" alt="">
                  <div>
                    <span>{{item.name}}</span>
                    <span>
                      <el-button type="text" @click="deleteSelectedpuke(index)">删除</el-button>
                    </span>
                  </div>
                </div>
              </el-col>
            </transition-group>
          </el-row>
        </div>
      </div>
      <!-- <div class="course-puke-center">
        <el-button type="text" icon="el-icon-d-arrow-left" circle @click="showSelectedpuke()"></el-button>  
      </div> -->
      <div class="course-puke-right">
          <el-checkbox-group v-model="selectedpuke" size="small">
            <el-checkbox v-for="(item,index) in pukekind" :key='index' :label="item">{{item.name}}</el-checkbox>
          </el-checkbox-group>
      </div>
    </div>
    <div class="button-list"> 
      <el-button type="primary" @click="saveCardType()">保存</el-button>
      <el-button @click="resetCardType()">重置</el-button>
    </div>
    </el-card>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      pukekind:[{id:0,name:"扑克牌"},{id:1,name:"塔罗牌"},{id:2,name:"高逼格"}],
      selectedpuke:[],
    };
  },
  created() {},
  methods:{
    //点击puke删除按钮
    deleteSelectedpuke(index){
      this.selectedpuke.splice(0,1)
    },
    //点保存提交数据
    saveCardType(){
      this.$message({
        message: '保存成功',
        type: 'success'
      });
    },
    //点重置删除已选
    resetCardType(){
      this.selectedpuke = []
    }
  }
};
</script>

<style scoped lang="scss">
.sigin-config {
   .course-info {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid $borderColor;
  }
  .signin-course:first-of-type {
    margin-right: 20px;
  }
  .signin-course {
    display: inline-block;
    span{
      font-weight: bold;
    }
  }
  .course-puke{
    height: 400px;
    width: 800px;
    display: flex;
    margin: 20px auto;
    .course-puke-left{

      .course-puke-title{
        height: 36px;
        line-height: 36px;
        color: rgba(138, 138, 138, 1);
        font-size: 16px;
        font-weight: bold;
        text-align: left;
      }
      .course-puke-info{
        height: 30px;
        line-height: 30px;
        margin-bottom: 50px;
        
      }
      .course-puke-image{
        .puke-container{
          width: 160px;
          >div{
            span:first-of-type{
              float: left;
            }
            span:last-of-type{
              float: right;
              .el-button{
                padding: 0;
              }
            }
          }
        }
        img{
          border-radius: 5px;
          width: 160px;
        }
      }
    }
    // .course-puke-center{
    //   position: relative;
    //   background-color: rgba(225, 223, 223, 1);
    //   .el-button{
    //     position: absolute;
    //     top:50%;
    //     left:50%;
    //     transform: translate(-50%,-50%)
    //   }
    // }
    .course-puke-right{
      background-color: rgba(242, 242, 242, 1);
      text-align: center;
      line-height: 30px;
      padding: 5px 10px 5px;
      .el-checkbox+.el-checkbox{
        margin-left: 0px;
        
      }
    }
    >div:nth-of-type(1){
      flex:200
    }
    >div:nth-of-type(2){
      flex:10
    }
    >div:nth-of-type(3){
      flex:15
    }
  }
  .button-list{
    margin-top: 20px;
    text-align:center;
  }
}
</style>