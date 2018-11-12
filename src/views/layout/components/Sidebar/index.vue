<template>
  <div>
    <div v-if="sidebar.opened">
      <div class="logo">
      </div>
      <div class="sys_name">
        后台管理系统
      </div>
    </div>
    <div class="logo_close" v-else>
      heheda
    </div>
    
    <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      background-color="#3f51b5"
      text-color="#fff"
      active-text-color="#409EFF"
    >
      <sidebar-item v-for="(route,index) in routes" :key="index" :item="route" :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
<style scoped>
    .logo{
      position: absolute;
      top:0;
      width: 100%;
      height: 50px;
      background: #3f51b5;
      background-image: url("../../../../assets/imgs/logo.png");
      background-repeat: no-repeat;
      background-size:100px;
      background-position: center center;
    }
    .sys_name{
      text-align: center;
      color:#fff;
      background:#3f51b5;
      font-size:16px !important;
      margin-top: 50px;
      height: 33px;
      white-space:nowrap;
      font-family:SourceHanSansSC; font-weight:400; font-size:20px;
    }
    .logo_close{
      background:#3f51b5;
      background-image: url('../../../../assets/imgs/sidebar-close.png');
      background-size:35px;
      background-repeat: no-repeat;
      background-position: center center;
      top:0;
      height: 83px;
      width: 100%;
    }
</style>
