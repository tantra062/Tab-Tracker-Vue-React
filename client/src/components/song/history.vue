<template>
    <div>
        <panel title="History">
            <v-data-table :headers="headers" :pagination.sync="pagination" :items="histories">
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
    import HistoriesService from "@/services/HistoriesService";
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
                histories:[]
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
                    this.histories = (await HistoriesService.index({
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
