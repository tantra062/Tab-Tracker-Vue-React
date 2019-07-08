<!-- XS SM MD LG  -->
<template>
    <panel title="youtube">
        <youtube :video-id="youtubeId"  player-width="100%" class="mt10"></youtube>
        {{youtubeId}}
        <!-- <yout :video-id="youtubeId"  player-width="100%" player-height="100%"></yout> -->
    </panel>
</template>

<script>
import youtube from 'vue-youtube-embed'

import Vue from 'vue'
Vue.use(youtube)
    export default {
        data(){
            return {
                iyottube: "NCuKL1RsN4A"
            }
        },
        components :{
        },
        props: ['youtubeId'],
        methods: {
            ready(event){
                this.player = event.player
            },
            stop () {
                this.player.stopVideo()
            },
            pause () {
                this.player.pauseVideo()    
            }
        },
        mount:{

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .mt10{
        margin:10px;
    }
</style>
