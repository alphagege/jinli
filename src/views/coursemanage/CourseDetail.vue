<template>
  <div class="course-detail">
    <div class="course-title">课程信息</div>
    <div class="course-list">
      <el-row :gutter="20">
        <el-col :span="12">
          <span>课程类型：</span>口语课
        </el-col>
        <el-col :span="12">
          <span>课程编号：</span>0001
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <span>产品内容：</span>01办公室英语狂人
        </el-col>
        <el-col :span="12">
          <span>课程标题：</span>办公室英语狂人第一季
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <span>移动端封面：</span>英语狂人.JPG
        </el-col>
        <el-col :span="12">
          <span>web封面：</span>英语狂人.JPG
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <span>报名时间：</span>起始时间：2018-10-31  终止时间：2018-10-31
        </el-col>
        <el-col :span="12">
          <span>开课时间：</span>起始时间：2018-10-31  终止时间：2018-10-31
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <span>课程价格：</span>199.00
        </el-col>
        <el-col :span="12">
          <span>课程特价：</span>99.00
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <span>外教课抵用卷：</span>5
        </el-col>
        <el-col :span="12">
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <span>引导页设置：</span>
        </el-col>
        <el-col :span="24">
          <span>微信账号：</span>DWJ0053
        </el-col>
        <el-col :span="24">
          <span>二维码：</span>
          <img class="erweima" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542009873725&di=7da2d0d2c2f7c7488afde7a8ccb37dfb&imgtype=0&src=http%3A%2F%2Fy3.ifengimg.com%2Fnews_spider%2Fdci_2013%2F09%2Fb85234c4801f8b2d7771353867a7a0f8.jpg" alt="">
        </el-col>
      </el-row>
    </div>
    <div class="course-title">产品信息</div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="产品介绍" name="first">
        <div class="course-title-sub">预告片</div>
        <video src="https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm" width="300" controls="controls"></video>
        <div class="course-title-sub">课程介绍</div>
        <div>
          课程介绍包括课程简介，教师介绍，学员评论等。可以用文字/图片/音频/视频
          等多种形式展示课程介绍，不做详细的样式
        </div>

      </el-tab-pane>
      <el-tab-pane label="章节详情" name="second" class="second-tablepane">
        <el-row :gutter="12">
          <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
            <el-card shadow="hover" @click.native="jumpCaptureDetail()">
              <div>
                <img src="https://n1image.hjfile.cn/hjclass/public/upload/201707/87eb5a10-8949-44a1-a7b5-a83d56648879.jpg" alt="">
              </div>
               
               <div class="course-text">
                  <div class="course-capture">Lesson1</div>
                  <div class="course-content">大战奥特曼</div>
               </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
            <el-card shadow="hover">
              <div>
                <img src="https://n1image.hjfile.cn/hjclass/public/upload/201707/87eb5a10-8949-44a1-a7b5-a83d56648879.jpg" alt="">
              </div>
               
               <div class="course-text">
                  <div class="course-capture">Lesson1</div>
                  <div class="course-content">大战奥特曼</div>
               </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
            <el-card shadow="hover">
              <div>
                <img src="https://n1image.hjfile.cn/hjclass/public/upload/201707/87eb5a10-8949-44a1-a7b5-a83d56648879.jpg" alt="">
              </div>
               
               <div class="course-text">
                  <div class="course-capture">Lesson1</div>
                  <div class="course-content">大战奥特曼</div>
               </div>
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        activeName: 'second'
      }
    },
    created(){

    },
    methods:{
       handleClick(tab, event) {
        console.log(tab, event);
      },
      //跳转章节详情
      jumpCaptureDetail(){
        this.$router.push("/coursemanage/ChapterDetail")
      }
    }
  }
</script>

<style scoped lang="scss">
  .course-detail{
    .el-tab-pane{
      min-height: 600px;
      overflow: auto;
    }
    .course-title{
      margin-bottom: 10px;
      height: 50px;
      line-height: 50px;
      font-weight: bold;
      border-bottom: 1px solid $borderColor;
    }
    .course-title-sub{
      margin-bottom: 10px;
      height: 50px;
      line-height: 50px;
      font-weight: bold;
      border-bottom: 1px solid $borderColor;
    }
    .course-list{
      font-size: 14px;
      .el-row{
        min-height: 50px;
        line-height: 50px;
        border-bottom: 1px solid $borderColor;
        span{
          font-weight: bold;
          display: inline-block;
          width: 120px;
        }
      }
      .erweima{
        width: 160px;
        vertical-align: top;
      }
    }
    .second-tablepane{
      /deep/ .el-card__body {
        cursor:pointer;
        display: flex;
        div{
          flex:1;
        }
        img{
          border-radius: 12px;
          width: 240px;
          vertical-align: top;
        }
        .course-text{
          .course-capture{
            
            color:#666;
            font-weight:bold;
            margin-bottom: 10px;
          }
          div{
            line-height: 20px;
            padding-left:10px;
          }
        }
      }
      /deep/ .el-card__body:hover{

        .course-capture{
            transition:all .3s;
            color:#F01414;
            font-weight:bold;
            margin-bottom: 10px;
            
          }
      }
    }
  }
</style>