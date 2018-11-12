<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>
    <breadcrumb />
    <div class="avatar-container">
      <div class="avatar-wrapper">
        <img :src="defaultImg" class="user-avatar">
        <svg-icon icon-class="message"></svg-icon>
        <svg-icon icon-class="setupb"></svg-icon>
        <svg-icon icon-class="dengchu"></svg-icon>
      </div>
    </div>
    <!-- <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <img :src="defaultImg" class="user-avatar">
        <i class="el-icon-caret-bottom"/>
      </div>
      <el-dropdown-menu slot="dropdown" class="user-dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>
            Home
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span style="display:block;" @click="logout">LogOut</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown> -->
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  data(){
    return {
      defaultImg:require('@/assets/imgs/customerDefault.png')
    }
  },
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .svg-icon:first-of-type{
      margin-left: 1rem;
    }
    .svg-icon{
      width: 1.5em;
      height: 1.5em;
      vertical-align: 0.4em;
      margin-right: 1em;
      cursor: pointer;
    }
    .avatar-wrapper {
      img{
        cursor: pointer;
      }
      margin-top: 5px;
      position: relative;
      line-height: initial;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      // .el-icon-caret-bottom {
      //   position: absolute;
      //   right: -20px;
      //   top: 25px;
      //   font-size: 12px;
      // }
     }
  }
}
</style>

