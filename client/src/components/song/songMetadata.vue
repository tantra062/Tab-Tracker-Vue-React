<!-- XS SM MD LG  -->
<template>
    <panel title="Song">
        <v-layout row>
            <v-flex xs12 sm6>
                <div class="title">
                    {{song.title}}
                </div>
                <div class="artist">
                    {{song.artist}}
                </div>
                <div class="genre">
                    {{song.genre}}
                </div>
                <v-btn flat class="green" @click="navigateTo({name:'updateSong'})">Edit</v-btn>
                <v-btn v-if="isLoggedIn && !this.bookmark" flat class="cyan" @click="setAsBookmark()">Bookmark</v-btn>
                <v-btn v-if="isLoggedIn && this.bookmark" flat class="yellow" light @click="unsetAsBookmark()">Bookmarked</v-btn>
            </v-flex>                    
            <v-flex xs12 sm6>
                <div class="title">
                    <img class="album" :src="song.albumImageUrl" />
                    {{song.album}}
                    {{song.id}}
                </div>
            </v-flex>
        </v-layout>
    </panel>
</template>

<script>
import SongService from "@/services/SongsService"
import BookmarkService from "@/services/BookmarksService";
import {mapState} from 'vuex'
import Vue from 'vue'
    export default {
        props: [
            'song'
        ],
        data(){
            return {
                bookmark: null
            }
        },
        //so you wont need to put $store.state.method_name, you just have to put method_name
        computed: {
            ...mapState([
                'isLoggedIn',
                'user'
            ])
        },
        watch:{
            async song(){
                try{
                    if(this.isLoggedIn){
                        const bookmarks = (await BookmarkService.index({
                            SongId: this.song.id,
                            UserId: this.user.id
                        })).data
                        if(bookmarks){
                            this.bookmark = bookmarks[0]
                        }
                    }
                }catch(err){
                    console.log(err)
                }
            }
        },
        methods: {
            navigateTo(route){
                this.$router.push(route)
            },
            async setAsBookmark(){
                try{
                    this.bookmark = (await BookmarkService.post({
                        SongId: this.song.id,
                        UserId: this.$store.state.user.id
                    })).data
                }catch(err){
                    console.log(err)
                }
            },
            async unsetAsBookmark(){
                console.log(this.bookmark)
                try{
                    await BookmarkService.delet(this.bookmark.id)
                    this.bookmark = null
                }catch(err){
                    console.log(err)
                }
            }
        }
    }
    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    img{
        max-height: 300px;
    }
</style>
