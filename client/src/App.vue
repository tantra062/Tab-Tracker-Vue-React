<template>
    <div id="app">
        <v-app>
            <page-header />
            <v-content>
                <v-container>
                    <router-view/>
                </v-container>
            </v-content>
        </v-app>
        <!-- <img src="./assets/logo.png"> -->
    </div>
</template>

<script>
import PageHeader from './components/layouts/Header';
export default {
    name: 'App',
    components: {
        PageHeader
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
