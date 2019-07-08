<template>
    <v-toolbar fixed flat dark>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Title</v-toolbar-title>
            <v-btn flat @click="navigateTo({name:'songs'})">browse</v-btn>
            <v-btn flat @click="navigateTo({name:'profile'})">Profile</v-btn>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <!-- <router-link to="/">Home</router-link> -->
            <v-btn flat @click="navigateTo({name:'root'})">Home</v-btn>
            <v-btn flat v-if="!$store.state.isLoggedIn" @click="navigateTo({name:'grid'})">grid</v-btn>
            <v-btn flat v-if="!$store.state.isLoggedIn" @click="navigateTo({name:'register'})">Sign Up</v-btn>
            <v-btn flat v-if="!$store.state.isLoggedIn" @click="navigateTo({name:'login'})">Login</v-btn>
            <v-btn flat v-if="$store.state.isLoggedIn" @click="logout()">Logout</v-btn>
            <v-btn flat>Link Three</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default 
    {
        data () {
            return {
            }
        },
        methods: {
            navigateTo(route){
                this.$router.push(route)
            },
            logout(){
                this.$store.dispatch('setToken', null);
                this.$store.dispatch('setUser', null);
                this.$router.push({
                    name: 'root'
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
