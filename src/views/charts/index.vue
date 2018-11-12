<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="6">
        <div>
          <bar-pic></bar-pic>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="6">
        <div>
          <bar-pic></bar-pic>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="6">
        <div>
          <bar-pic></bar-pic>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="6">
        <div>
          <bar-pic></bar-pic>
        </div>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import barPic from "@/components/Vcharts/bar.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    barPic
  }
};
</script>

<style scoped>
</style>