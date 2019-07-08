<template>
    <v-layout>
        <v-flex>
            <panel title="Profile">
                <profile-form />
            </panel>
        </v-flex>
    </v-layout>
</template>
<script>
import {mapState} from "vuex";
import ProfileForm from '@/components/profile/ProfileForm';

export default {
    data(){
        return {
            user: null
        }
    },
    components: {
        ProfileForm
    }
}
</script>
<style scoped>

</style>
