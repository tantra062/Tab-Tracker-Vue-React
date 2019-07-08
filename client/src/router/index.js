import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Profile from '@/components/profile/index';

import Songs from '@/components/song/index';
import viewSong from '@/components/song/show';
import CreateSong from '@/components/song/create';
import UpdateSong from '@/components/song/update';

import cheatSheet from '@/components/assets/cheatSheet';

Vue.use(Router)

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'root',
            component: HelloWorld
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/songs',
            name: 'songs',
            component: Songs
        },
        {
            path: '/songs/create',
            name: 'addSongs',
            component: CreateSong
        },
        {
            path: '/songs/:id',
            name: 'song',
            component: viewSong
        },
        {
            path: '/songs/:id/edit',
            name: 'updateSong',
            component: UpdateSong
        },
        {
            path: '/grid',
            name: 'grid',
            component: cheatSheet
        },
        {
            path: '/user/profile',
            name: 'profile',
            component: Profile
        }
    ]
})
