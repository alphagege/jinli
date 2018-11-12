<template>
  <div>
    audio
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="start()">操作按钮</el-button>
      </div>
      <!-- <audio src="http://music.163.com/song/media/outer/url?id=562598065.mp3"/> -->
    </el-card>
    <el-card class="box-card">
      <audio-player :src="src"/>
      <!-- <audio src="http://music.163.com/song/media/outer/url?id=562598065.mp3"/> -->
    </el-card>

    <el-card class="box-card">
      <audio-player2 :src="src"/>
      <!-- <audio src="http://music.163.com/song/media/outer/url?id=562598065.mp3"/> -->
    </el-card>
  </div>
</template>

<script>
import audioPlayer from '@/components/Audio/audio'
import audioPlayer2 from '@/components/Audio/audio2'
export default {
  components: {
    audioPlayer,
    audioPlayer2
  },
  data() {
    return {
      src: 'http://music.163.com/song/media/outer/url?id=562598065.mp3'
    }
  },
  created() {
  },
  methods: {
  }
}
</script>
<style scoped>
</style>
