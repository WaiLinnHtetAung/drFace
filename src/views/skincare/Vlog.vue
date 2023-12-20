<template>
    <div class="video-list">
       <div class="section-header">
      <h2>Our Beauty Vlog</h2>
      <div class="line"></div>

      <div class="video-warpper">
        <div class="video-card row">
            <div class="video col-lg-3 col-md-6 mb-5" v-for="(video , i) in vlog_videos" :key="i">
              <video controls>
                <source :src="video.src">
              </video>
              <div class="content">
                <div class="title">
                    <h2>{{video.title}}</h2>
                </div>
            </div>
            </div>
            
        </div>
      </div>
    </div>
        
    </div>
</template>

<script>
    export default {
        setup(){
            let vlog_videos = [
                {
                    src: require("@/assets/vlog/Akari_Nyein.mp4"),
                    title: "Akari Nyein😍",
                    
                },
                {
                    src: require("@/assets/vlog/Moe's_Creation.mp4"),
                    title: "Moe's Creation✨",
                   
                },
                {
                    src: require("@/assets/vlog/Khattar.mp4"),
                    title: "Khattar👀",
                   
                },
                {
                    src: require("@/assets/vlog/Adam_Aung.mp4"),
                    title: "Adam Aung🤭",
                   
                }
            ]

            return {vlog_videos}
        }
    }
</script>

<style scoped>
 .video-list{
    margin-top: 70px;
    padding: 0 9%;
 }
 .video-list .section-header {
     margin-bottom: 60px;
 }

 .video-warpper{
    margin-top: 20px;
    gap: 20px;
    justify-content: center;
    
 }

 video {
    width: 100%;
    height: 100%;
 }
 .title h2{
    font-size: 25px;
    font-family: 'Dancing Script', sans-serif;
    text-align: center;
 }




</style>
