<template>
    <panel title="Tab">
        <v-textarea v-model="tab" readonly></v-textarea>
    </panel>
</template>

<script>
    export default {
        components :{
        },
        props: ['tab']
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    textarea {
        width:100%;
        font-family: monospace;
        border:none;
        height: 600%;
        border-style: none;
        border-color: none;
        overflow: auto;
        padding: 20px;
    }
</style>
