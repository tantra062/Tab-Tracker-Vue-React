<template>
    <panel title="SEARCH">
        <v-layout row wrap>
            <v-flex xs12 sm10>
                <v-text-field type="text" v-model="search"></v-text-field>
            </v-flex>
            <v-flex xs12 sm2>
                <v-btn>SEARCH</v-btn>
            </v-flex>
        </v-layout>
    </panel>
</template>
<script>
import _ from "lodash";

export default {
    data() {
        return {
            search: null
        }
    },
    components: {
    },
    watch: {
        search: _.debounce(async function(value)
        {
            const route = 
            {
                name: 'songs'
            }
            if(this.search !== '') //searcch?? can't remember
            {
                route.query = {
                    search: this.search
                }
            }
            this.$router.push(route)
        }, 700),
        '$route.query.search': 
        {
            immediate:true,
            handler(value){
                this.search = value;
            }
        }
    }
}
</script>
<style scoped>

</style>
