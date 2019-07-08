<template>
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
            <v-card dark>
                <v-card-title class="blue white--text">
                    <span class="headline">Login</span>
                    <v-spacer></v-spacer>
                </v-card-title>
                <v-flex justify-center align center xs10 offset-xs1>
                    <v-text-field type="email" v-model="email" label="Email" required></v-text-field>
                    <v-text-field type="password" v-model="password" label="Password"></v-text-field>    
                    
                    <v-spacer></v-spacer><v-btn @click="login">Send</v-btn>
                    <div class="error" v-html="err">
                    </div>
                <v-spacer></v-spacer>
                </v-flex>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
//     import { register } from "@/services/AuthenticationService";
    import AuthenticationService from "@/services/AuthenticationService";

    export default {
        data () {
            return {
                email: '',
                password: '',
                err: null
            }
        },
        methods: {
            async login() {
                try{
                    const response = await AuthenticationService.login({
                        email: this.email,
                        password: this.password,
                    })
                    console.log(response)
                    this.$store.dispatch('setToken', response.data.token)
                    this.$store.dispatch('setUser', response.data.user)
                    this.$router.push({
                        name: 'root'
                    })
                }catch(err){
                    console.log(err)
                    this.err = err.response.data
                    console.log(this.err)
                }

            }
        },
        components: {
        },
        async mounted() {
            try{
                const csrftokena = (await AuthenticationService.logincs()).data
                this.$store.dispatch('setCsrf', csrftokena)
                console.log(csrftokena)
            }catch(err){
                console.log(err)
            }
        }
    }
</script>

<style scoped>
    .error{
        color:red;
    }
</style>
