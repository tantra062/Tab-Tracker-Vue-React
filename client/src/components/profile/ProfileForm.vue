<template>
    <v-form @submit.prevent="submit">
        <v-container grid-list-xl fluid>
            <v-layout wrap>
                <v-flex xs12 sm6>
                    <v-text-field color="purple darken-2" label="First name" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                    <v-text-field color="blue darken-2" label="Last name" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                    <v-text-field color="purple darken-2" label="Nickname" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                    <v-text-field color="pink" label="Email" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                    <v-slider color="orange" label="Age" hint="Be honest" min="1" max="100" thumb-label></v-slider>
                </v-flex>
                <v-flex xs12 sm6>
                    <v-text-field color="pink" label="Address" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-checkbox color="green">
                        <template v-slot:label>
                            <div >
                            Do you accept the
                            <a href="#">terms</a>
                            and
                            <a href="#">conditions?</a>
                            </div>
                        </template>
                    </v-checkbox>
                </v-flex>
            </v-layout>
        </v-container>
        <v-card-actions>
            <v-btn>Cancel</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" type="submit">Register</v-btn>
        </v-card-actions>
    </v-form>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        method: {
        }
    }
</script>
<style scoped>

</style>
