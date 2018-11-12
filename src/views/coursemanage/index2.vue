<template>
  <div>
    <el-card class="box-card">
      <video id="video"  controls>
          <source src="https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm">

          <track label="英文字幕" kind="subtitles" chapters metadata srclang="eh" src="/static/vtts/captioneh.vtt" default>
          <track label="中文字幕" kind="subtitles" chapters metadata srclang="zh" src="/static/vtts/captionzn.vtt" default>
          <!-- <track label="中文字幕" kind="subtitles" chapters metadata srclang="zh" src="/static/vtts/text4.ass" default> -->

          <!-- <track label="ABC" kind="subtitles" srclang="de" src="/static/vtts/caption1.vtt"> -->
          <!-- <track label="Number" kind="subtitles" srclang="es" src="./caption2.vtt"> -->
      </video>
      <!-- <video-player></video-player> -->
      <!-- <audio src="http://music.163.com/song/media/outer/url?id=562598065.mp3"/> -->
    </el-card>
  </div>
</template>
<script>
// import videoPlayer from '@/components/Video/video'
export default {
  data() {
    return {};
  },
  components: {
    // videoPlayer
  }
};
</script>

<style scoped>
/* 设置字幕的样式 */
::cue {
  background-color: transparent;
  color: white;
  font-weight: bold;
  font-size: 20px;
  align:middle;
}
/* 设置单行字幕的样式 */
::cue(v[voice="aa"]) {
  color: green;
}
::cue(v[voice="bb"]) {
  color: rgb(0, 26, 128);
} 
 ::cue(v[voice=hanmeimei]) {
    line-height: 10px;
   color: red;
   font-family: "Comic Sans MS", cursive, sans-serif;
}

::cue(v[voice=liming]) {
    line-height: 10px;
   color: black;
   font-family: "Comic Sans MS", cursive, sans-serif;
} 
::cue(.red) {
    color: red;
}

video::cue(i) {
    color: skyblue;
    font-family: "Comic Sans MS", cursive, sans-serif;
} 
</style>
