<template>
    <v-layout row>
        
        <v-flex xs12 sm4>
            <panel title="Song Metadata">                    
                <v-text-field required :rules="[rules.required]" type="text" v-model="song.title" label="Title"></v-text-field>
                <v-text-field required :rules="[rules.required]" type="text" v-model="song.artist" label="Artist"></v-text-field>
                <v-text-field required :rules="[rules.required]" type="text" v-model="song.genre" label="Genre"></v-text-field>
                <v-text-field required :rules="[rules.required]" type="text" v-model="song.album" label="Album"></v-text-field>
                <v-text-field required :rules="[rules.required]" type="text" v-model="song.albumImageUrl" label="Album Image Url"></v-text-field>
                <v-text-field required :rules="[rules.required]" type="text" v-model="song.youtubeId" label="Youtube ID"></v-text-field>
            </panel>
        </v-flex>
        <v-flex xs12 sm8>
            <panel class="ml-2" title="Song Structure">
                <v-textarea required :rules="[rules.required]" type="text" v-model="song.tab" multi-line label="Tab"></v-textarea>
                <v-textarea required :rules="[rules.required]" type="text" v-model="song.lyrics" multi-line label="Lyrics"></v-textarea>
            </panel>
            <div v-if="error" class="error-message">
                {{error}}
            </div>
            <v-btn dark class="cyan" @click="submit">
                Submit
            </v-btn>
        </v-flex>
    </v-layout>
</template>

<script>
//     import { register } from "@/services/SongsService";
    import SongsService from "@/services/SongsService";

    export default {
        data () {
            return {
                song: {
                    title: null,
                    artist: null,
                    genre: null,
                    album: null,
                    albumImageUrl: null,
                    youtubeId: null,
                    lyrics: null,
                    tab: null
                },
                error:null,
                rules:{
                    required: (value) => !!value || 'Required'
                }
            }
        },
        methods: {
            async submit(){
                this.error = null
                const fields = Object
                    .keys(this.song)
                    .every(key => !!this.song[key])
                    console.log(this.song)
                    console.log(fields)
                if(!fields){
                    this.error = 'Please fill in all the required fields.'
                    return
                }
                try{
                    await SongsService.create(this.song)
                    this.$router.push({
                        name: "songs"
                    })
                }catch(err){
                    console.log(err)
                }
                
            }
        },
        components: {
        }
    }
</script>

<style scoped>
    .error-message{
        color:red;
    }
</style>
