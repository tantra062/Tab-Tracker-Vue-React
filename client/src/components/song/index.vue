<template>
    <v-layout row wrap>
        <v-flex xs12 sm6 v-if="isLoggedIn">
            <bookmark />
            <history />
        </v-flex>
        <v-flex :class="{ xs12:! isLoggedIn,sm6: !isLoggedIn, sm6:isLoggedIn}">
            
            <search />

            <panel title="Songs">
                <v-btn @click="navigateTo({name: 'addSongs'})" slot="action" class="cyan accent-2" light small absolute right middle fab>
                    <!-- <v-icon>add</v-icon>
                    index   view song list
                    show    view song
                    update  update song
                    delete  delete song -->
                </v-btn>                    
                <div v-for="song in songs" v-bind:key="song.id" class="song">
                    <v-flex xs12 sm6>
                        <div class="title">
                            {{song.title}}
                        </div>
                        <div class="artist">
                            {{song.artist}}
                        </div>
                        <div class="genre">
                            {{song.genre}}

                            {{song.id}}
                        </div>
                        <v-btn dark class="cyan" @click="navigateTo({name: 'song', params:{id: song.id}})">View</v-btn>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <img class="album" :src="song.albumImageUrl" />
                    </v-flex>
                </div>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
import bookmark from "@/components/song/bookmarks";
import search from '@/components/song/search';
import history from "@/components/song/history";
import SongsServices from "@/services/SongsService";
import {mapState} from 'vuex';

export default {
    components: {
        search,
        bookmark,
        history

    },
    computed: {
        ...mapState([
            "isLoggedIn"

        ])
    },
    data() {
        return {
            songs: null
        } 
    },
    methods: {
        navigateTo(route){
            this.$router.push(route)
        }
    },
    watch: {
        '$route.query.search': {
            immediate:true,
            async handler(value){
                this.songs = (await SongsServices.index(value)).data;
            }
        }
    }, 
    // async mounted() {
    //     //.data because of how axios ruturn our data
    //     this.songs = (await SongsServices.index()).data  
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
    color:black;
}
.artist{
    color:black;
}
.genre{
    color:black;
}
.album{
    color:black;
}

</style>
