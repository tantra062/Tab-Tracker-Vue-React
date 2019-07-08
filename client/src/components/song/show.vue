<!-- XS SM MD LG  -->
<template>
    <v-layout row wrap>
        
        <v-flex xs12 md6>
            <song-metadata :song="song" />
        </v-flex> 
        <v-flex xs12 md6>
            <youtube :youtubeId="song.youtubeId" />
        </v-flex>
        <v-flex xs12 md6 :song="song">
            <tab :tab="song.tab"></tab>
        </v-flex>
        <v-flex xs12 md6>
            <lyrics :lyrics="song.lyrics" />
        </v-flex>
    </v-layout>
</template>

<script>
import SongMetadata from "./songMetadata";
import youtube from "./youtube";
import tab from "./tab";
import lyrics from "./lyrics";
import SongService from "@/services/SongsService";
import HistoriesService from "@/services/HistoriesService";
import {mapState} from 'vuex';

    export default {
        components :{
            SongMetadata,
            youtube,
            lyrics,
            tab
        },
        data() {
            return {
                song: {}
            } 
        },
        //so you wont need to put $store.state.method_name, you just have to put method_name
        computed: {
            ...mapState([
                'isLoggedIn',
                'user'
            ])
        },
        async mounted(){
            const id = this.$store.state.route.params.id
            this.song = (await SongService.show(id)).data
            if(this.isLoggedIn){
                await HistoriesService.post({
                    SongId: this.song.id,
                    UserId: this.user.id
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    textarea {
        width:100%;
        font-family: monospace;
        border:none;
        height: 600%;
        border-style: none;
        border-color: none;
        overflow: auto;
        padding: 20px;
    }
</style>
