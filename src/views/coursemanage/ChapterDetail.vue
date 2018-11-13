<template>
  <div class="chapter-details">
    <div>
      <span class="chapter-lesson">Lesson1</span>
      <span>Jone大战奥特曼</span>
      <span>顺序：01</span>
      <span>类型：普通课程</span>
    </div>
    <div>
      <div class="label">课程封面</div>
      <img src="@/assets/imgs/course-fenmian.jpg" alt="" class="fenmian">
    </div>
    <div>
      <div class="label">章节介绍</div>
      <div>Joe最爱他的好基友Maxim</div>
    </div>
    <div>
      <div class="label">学习目标</div>
      <div>掌握介个社交用的词语和短句，了解社交文化</div>
    </div>
    <div>
      <div class="label">课程预习</div>
      <div>标签图</div>
      <img src="@/assets/imgs/course-prev.png" alt="" class="label-img">
    </div>
    <div>
      <div v-for="(item,index) in audioJson" :key="index" class="chapter-content">
        <div class="enword">{{item.enword}}<span :class="[item.status ? 'audio-state-playing':'audio']" @click="audioPlaying(item.src)" :key="index"></span></div> 
        <div class="zhword">{{item.znword}}</div>
      </div>
    </div>

    <div>
      <div class="label">视频课程</div>
      <div>标签图</div>
      <img src="@/assets/imgs/course-prev.png" alt="" class="label-img">
    </div>
    <div>
      <video-play></video-play>
    </div>
  </div>
</template>

<script>
import audioJson from "./Chapter.js";
import videoPlay from '@/components/Video/video.vue'
export default {
  data() {
    return {
      audioJson: audioJson,
      audio: document.createElement("audio")
    };
  },
  created() {
    this.audioJson.forEach(item => (item.status = false));
  },
  mounted() {},
  methods: {
    audioPlaying(src) {
      this.audioJson.forEach(element => {
        element.status = false;
        if (element.src == src) {
          element.status = true;
          this.$forceUpdate();
          this.audio.controls = true; //这样控件才能显示出来
          this.audio.src = src; //音乐的路径
          this.audio.play();
          this.audio.addEventListener(
            "ended",
            () => {
              element.status = false;
              this.$forceUpdate();
            },
            false
          );
        }
      });
    }
  },
  components:{
    videoPlay
  }
};
</script>

<style scoped lang="scss">
.chapter-details {
  > div {
    line-height: 50px;
    border-bottom: 1px solid $borderColor;
    > .chapter-lesson,
    .label {
      font-weight: bold;
    }
    .fenmian{
      width: 360px;
    }
    .label-img{
      width: 360px;
    }
  }
  .chapter-content {
    line-height: 20px;
    margin: 0 0 6px;
    font-size: 14px;
    .enword {
      color: #666;
      .audio {
        display: inline-block;
        width: 20px;
        height: 20px;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        vertical-align: middle;
        background: url("../../assets/imgs/audio.png") no-repeat -40px 0 / auto 100%;
      }
      .audio-state-playing {
        display: inline-block;
        width: 20px;
        height: 20px;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        vertical-align: middle;
        background: url("../../assets/imgs/audio.png") no-repeat -40px 0 / auto 100%;
      }

      .audio-state-playing {
        -webkit-animation: audio-playing 0.6s steps(3) infinite alternate;
        animation: audio-playing 0.6s steps(3) infinite alternate;
      }

      @-webkit-keyframes audio-playing {
        0% {
          background-position: 0 0;
        }

        to {
          background-position: -60px 0;
        }
      }

      @keyframes audio-playing {
        0% {
          background-position: 0 0;
        }

        to {
          background-position: -60px 0;
        }
      }
    }
    .zhword {
      color: #999;
    }
  }
}
</style>