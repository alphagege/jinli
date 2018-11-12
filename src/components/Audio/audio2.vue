<template>
  <div>
    <aplayer
      :music="{
        title: 'あっちゅ～ま青春!',
        artist: '七森中☆ごらく部',
        src: 'http://183.203.30.29/amobile.music.tc.qq.com/C400003EI9KZ2zX2NX.m4a?guid=1013303900&vkey=396B6F9135746BF782B9914A7D1E11E1BEB8B7DB51ED8BD8CD8CB3984F0FEC2994CF8D7E6C21E3CED80D3A61C6A3094C6EC5408262AE1A3E&uin=0&fromtag=66',
        pic: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004JcuaM1bC1tV.jpg?max_age=2592000',
        lrc:'http://localhost:8080/static/lrcs/yuruyuri.lrc',
      }"
      :showLrc="showLrc"
    />
  </div>
</template>

<script>
import Aplayer from 'vue-aplayer'
export default {
  components: {
    Aplayer
  },
  data() {
    return {
      showLrc: true
    }
  }
}
</script>

<style scoped>

</style>
