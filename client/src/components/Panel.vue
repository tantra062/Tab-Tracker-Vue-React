<template>
    <v-card dark>
        <v-card-title class="blue white--text">
            <span class="headline">{{title}}</span>
            <v-spacer></v-spacer>
            <slot name="action" />
        </v-card-title>
        <v-flex justify-center align center xs10 offset-xs1>
            <slot>
                No Component has been defined.
            </slot>
            <v-spacer></v-spacer>
        </v-flex>
    </v-card>
</template>

<script>
export default {
    props:[
        'title'
    ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
