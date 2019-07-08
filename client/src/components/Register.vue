<template>
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
            <panel title="Register">                    
                <v-text-field type="email" v-model="email" label="Email" required></v-text-field>
                <v-text-field type="password" v-model="password" label="Password"></v-text-field>
                
                <v-spacer></v-spacer><v-btn @click="register">Send</v-btn>
                <div class="error" v-html="err">
                </div>

            </panel>
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
            async register() {
                try{
                    this.err = null
                    const response = await AuthenticationService.register({
                        email: this.email,
                        password: this.password
                    })
                // I din't implement token on registration. User have to log in after registering.
                //
                //     this.$store.dispatch('setToken', response.data.token)
                //     this.$store.dispatch('setUser', response.data.user)
                //     console.log(response.data.token)
                //     console.log(response.data.user)
                }catch(err){
                    this.err = err.response.data.error
                }

            }
        },
        components: {
        }
    }
</script>

<style scoped>
    .error{
        color:red;
    }
</style>
