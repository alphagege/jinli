<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-popover
          placement="top-start"
          trigger="hover">
          <div style="text-align: center">
            <el-progress
              :percentage="music.volume"
              color="#67C23A"
              type="circle"/><br>
            <el-button
              icon="el-icon-minus"
              circle
              @click="changeVolume(-10)"/>
            <el-button
              icon="el-icon-plus"
              circle
              @click="changeVolume(10)"/>
          </div>
          <el-button
            id="play"
            slot="reference"
            :icon="music.isPlay?'el-icon-refresh':'el-icon-caret-right'"
            circle
            @click="play"/>
        </el-popover>
      </el-col>
      <el-col :span="14" style="padding-left: 20px">
        <el-slider
          :format-tooltip="formatTime"
          :max="music.maxTime"
          v-model="music.currentTime"
          style="width: 100%;"
          @change="changeTime"/>
      </el-col>
      <el-col :span="6" style="padding: 9px 0px 0px 10px;color:#909399;font-size: 13px">
        {{ formatTime(music.currentTime) }}/{{ formatTime(music.maxTime) }}
      </el-col>
    </el-row>
    <audio ref="music" loop autoplay>
      <source :src="src" type="audio/mpeg">
    </audio>
  </div>
</template>
<script>
export default{
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      music: {
        isPlay: false,
        currentTime: 0,
        maxTime: 0,
        volume: 50
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      setInterval(this.listenMusic, 1000)
    })
  },
  methods: {
    listenMusic() {
      if (!this.$refs.music) {
        return
      }
      if (this.$refs.music.readyState) {
        this.music.maxTime = this.$refs.music.duration
      }
      this.music.isPlay = !this.$refs.music.paused
      this.music.currentTime = this.$refs.music.currentTime
    },
    play() {
      if (this.$refs.music.paused) {
        this.$refs.music.play()
      } else {
        this.$refs.music.pause()
      }
      this.music.isPlay = !this.$refs.music.paused
      this.$nextTick(() => {
        document.getElementById('play').blur()
      })
    },
    changeTime(time) {
      this.$refs.music.currentTime = time
    },
    changeVolume(v) {
      this.music.volume += v
      if (this.music.volume > 100) {
        this.music.volume = 100
      }
      if (this.music.volume < 0) {
        this.music.volume = 0
      }
      this.$refs.music.volume = this.music.volume / 100
    },
    formatTime(time) {
      const it = parseInt(time)
      const m = parseInt(it / 60)
      const s = parseInt(it % 60)
      return (m < 10 ? '0' : '') + parseInt(it / 60) + ':' + (s < 10 ? '0' : '') + parseInt(it % 60)
    }
  }
}
</script>
