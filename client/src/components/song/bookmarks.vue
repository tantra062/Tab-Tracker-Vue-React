<template>
    <div>
        <panel title="Bookmarks">
            <v-data-table :headers="headers" :pagination.sync="pagination" :items="bookmarks">
                <!-- same as <template slot="items" slot-scope="props" ></template> -->
                <template v-slot:items="props">
                    <td>
                        {{props.item.title}}
                    </td>
                    <td>
                        {{props.item.artist}}
                    </td>
                </template>
            </v-data-table>
        </panel>
    </div>
</template>
<script>

    import BookmarksService from "@/services/BookmarksService";
    import {mapState} from 'vuex';
    export default {
        data() {
            return {
                headers: [
                    {
                        text: "Title",
                        value: "title"
                    },
                    {
                        text: "Artist",
                        value: "artist"
                    }
                ],
                pagination:{
                    sortBy: "date",
                    descending: true
                },
                bookmarks:[]
            }
        },
        computed: {
            ...mapState([
                'isLoggedIn',
                'user'
            ])
        },
        async mounted(){
            try{
                if(this.isLoggedIn){
                    this.bookmarks = (await BookmarksService.index({
                        UserId: this.user.id
                    })).data
                }

            }catch(err){
                console.log(err)
            }
        }
    }
</script>
<style>

</style>
