<template>
  <div class="course_management">
    <el-card>
      <el-form ref="form" :model="form" :inline="formModel" size="small">
        <el-form-item>
         <el-input v-model="form.name" placeholder="按照关键词搜索"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button v-waves type="primary" size="small">搜索</el-button>
        </el-form-item>
        <div class="operation">
          <el-form-item>
            <svg-icon icon-class="xiazai"></svg-icon>
            <span>下载</span>
          </el-form-item>
          <el-form-item>
            <svg-icon icon-class="dayin"></svg-icon>
            <span>打印</span>
          </el-form-item>
        </div>
      </el-form>

    </el-card>
    <div class="course_list">课程列表</div>
    <el-tabs type="border-card">
      <el-tab-pane label="口语课">
        <el-table
          size="mini"
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="number"
            label="课程编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="productName"
            label="产品名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="courseName"
            label="课程名称">
          </el-table-column>
           <el-table-column
            prop="coursePic"
            label="课程封面">
          </el-table-column>
          <el-table-column
            prop="coursePrice"
            label="课程价格">
          </el-table-column>
          <el-table-column
            prop="courseStatic"
            label="状态">
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
             <el-button @click="handleClick(scope.row)" type="text">详情</el-button>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  更多<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="jumpSignConfig()">打卡配置</el-dropdown-item>
                  <el-dropdown-item @click.native="jumpCertificate()">结业证书</el-dropdown-item>
                  <el-dropdown-item>编辑</el-dropdown-item>
                  <el-dropdown-item>课程数据</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </template>
          </el-table-column>
        </el-table>
        <div class="el-pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
        
      </el-tab-pane>
      <el-tab-pane label="四六级">四六级</el-tab-pane>
      <el-tab-pane label="外教1v1">外教1v1</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import waves from "@/directive/waves/index.js"; //按钮波纹效果
export default {
  data() {
    return {
      formModel: true,
      form: {
        name: ""
      },
      tableData: [
        {
          number:'0001',
          productName:'产品001',
          courseName:'雅思英语',
          coursePic:'1.png',
          coursePrice:666,
          courseStatic:'进行中'
        },
        {
          number:'0001',
          productName:'产品001',
          courseName:'雅思英语',
          coursePic:'1.png',
          coursePrice:666,
          courseStatic:'进行中'
        },
        {
          number:'0001',
          productName:'产品001',
          courseName:'雅思英语',
          coursePic:'1.png',
          coursePrice:666,
          courseStatic:'进行中'
        },
        {
          number:'0001',
          productName:'产品001',
          courseName:'雅思英语',
          coursePic:'1.png',
          coursePrice:666,
          courseStatic:'进行中'
        },
        {
          number:'0001',
          productName:'产品001',
          courseName:'雅思英语',
          coursePic:'1.png',
          coursePrice:666,
          courseStatic:'进行中'
        },
        {
          number:'0001',
          productName:'产品001',
          courseName:'雅思英语',
          coursePic:'1.png',
          coursePrice:666,
          courseStatic:'进行中'
        },
        {
          number:'0001',
          productName:'产品001',
          courseName:'雅思英语',
          coursePic:'1.png',
          coursePrice:666,
          courseStatic:'进行中'
        },
        {
          number:'0001',
          productName:'产品001',
          courseName:'雅思英语',
          coursePic:'1.png',
          coursePrice:666,
          courseStatic:'进行中'
        },
        {
          number:'0001',
          productName:'产品001',
          courseName:'雅思英语',
          coursePic:'1.png',
          coursePrice:666,
          courseStatic:'进行中'
        },
        {
          number:'0001',
          productName:'产品001',
          courseName:'雅思英语',
          coursePic:'1.png',
          coursePrice:666,
          courseStatic:'进行中'
        }
      ],
      currentPage:1
    };
  },
  methods:{
    handleClick(row){
      this.$router.push("/coursemanage/coursedet")
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    jumpSignConfig(){
      this.$router.push("/coursemanage/signinconfig")
      
    },
    jumpCertificate(){
      this.$router.push("/coursemanage/certificate")
    }
  },
  components: {},
  directives: {
    waves
  }
};
</script>

<style scoped lang="scss">
.course_management {
  .course_list {
    height: 50px;
    line-height: 50px;
    font-weight: bold;
  }
  .svg-icon {
    width: 2em;
    height: 2em;
    vertical-align: middle;
  }
  .operation {
    float: right;
    margin-right: 50px;
  }
  .el-pagination{
    margin-top: 20px;
    float: right;
  }
}
</style>
