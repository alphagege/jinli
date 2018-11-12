<template>
  <div class="working_table">
    <div class="working_table_up">
      <div class="time_now">
        {{getNowFormatDate}}
      </div>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
          <div class="working_table_card">
            <div class="working_table_icon">
              <svg-icon icon-class="tree"></svg-icon>
            </div>
            <div class="working_table_content">
              新增用户: <v-countup start-value="0" end-value="21" ></v-countup>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
          <div class="working_table_card">
            <div class="working_table_icon">
              <svg-icon icon-class="tree"></svg-icon>
            </div>
            <div class="working_table_content">
              新增用户: <v-countup start-value="0" end-value="1000" ></v-countup>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
          <div class="working_table_card">
            <div class="working_table_icon">
              <svg-icon icon-class="tree"></svg-icon>
            </div>
            <div class="working_table_content">
              新增用户:<v-countup start-value="0" end-value="1000" ></v-countup>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
          <div class="working_table_card">
            <div class="working_table_icon">
              <svg-icon icon-class="tree"></svg-icon>
            </div>
            <div class="working_table_content">
              新增用户: <v-countup start-value="0" end-value="1000" ></v-countup>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="working_table_bottom">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
          <div class="charts_title">本日用户数据</div>
          <ve-histogram :data="chartData"></ve-histogram>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
          <div class="working_news">
            <div class="working_news_title"><svg-icon icon-class="tree"></svg-icon><b>待办事项</b></div>
             <ul class="working_news_info">
               <li>订单001000申请退货</li>
               <li>课程4级技巧编号0001马上开课</li>
             </ul>
          </div>
          <div class="working_news">
            <div class="working_news_title"><svg-icon icon-class="tree"></svg-icon><b>最热产品</b></div>
             <ul class="working_news_info">
               <li><span>01</span>口语课第一季</li>
               <li><span>02</span>4级写作技巧</li>
             </ul>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      chartData: {
          columns: ['日期', '新增用户','新增订单', '新增营收', '退单申请'],
          rows: [
            { '日期': '2018-11-11', '新增用户': 1393, '新增订单': 1093, '新增营收': 0.32, '退单申请':85 },
            { '日期': '2018-11-12', '新增用户': 3530, '新增订单': 3230, '新增营收': 0.26, '退单申请':855 },
            { '日期': '2018-11-13', '新增用户': 2923, '新增订单': 2623, '新增营收': 0.76, '退单申请':436 },
            { '日期': '2018-11-14', '新增用户': 1723, '新增订单': 1423, '新增营收': 0.49, '退单申请':856 },
            { '日期': '2018-11-15', '新增用户': 3792, '新增订单': 3492, '新增营收': 0.323, '退单申请':346 },
            { '日期': '2018-11-16', '新增用户': 4593, '新增订单': 4293, '新增营收': 0.78, '退单申请':660 }
          ]
        }
      }
    },
  computed:{
    getNowFormatDate(){
       var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
      }
   }
}
</script>

<style scoped lang="scss">

@import '../../styles/variables.scss'; //全局scss样式变量定义
  .working_table{
    .working_table_up{
      width: 100%;
      left: 215px;
      line-height: 20px;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      padding:0px 20px 0px 20px;

      .time_now{
        height: 50px;
        line-height: 50px;
        border-bottom:2px solid $borderColor;
        margin-bottom: 20px;
      }
      .working_table_card{
        padding: 12px 20px 20px 12px;
        height: 110px;
        border: 1px solid $borderColor;
        margin-bottom: 20px;
        .working_table_content{
          line-height: 60px;
          text-align:center;
        }
      }
    }
    .working_table_bottom{
      padding:20px;
      width: 100%;
      margin-top: 20px;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      .charts_title{
        height: 36px;
        color: rgba(140, 140, 140, 1);
        font-size: 20px;
        text-align: center;
        font-family: SourceHanSansSC-regular;

      }
      .working_news{
        height: 170px;
        margin-bottom: 20px;
        box-shadow: 2px 2px 7px 0px rgba(170, 170, 170, 1);
        padding:5px 15px;
        .working_news_title{
          line-height: 26px;
          height: 26px;
          >b{
            margin-left: 10px;
          }
        }
        .working_news_info{
          li{
            font-size: 14px;
            line-height: 35px;
          }
          span{
            margin-right: 10px;
            border:1px solid $borderColor;
            padding:4px;
            border-radius: 50%;
          }
        }
      }
    }
  }
</style>
