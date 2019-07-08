import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    plugins: [createPersistedState()],
    state: {
        token: null,
        user: null,
        isLoggedIn: false,
        csrfToken: null
    },
    mutations: {
        setToken(state, token){
            state.token = token
            if(token){
                state.isLoggedIn = true
            }else{
                state.isLoggedIn = false
            }
        },
        setUser(state, user){
            state.user = user
        },
        setCsrf(state, csrfToken){
            state.csrfToken = csrfToken
        }
    },
    actions: {
        setToken({commit}, token){
            commit('setToken', token)
        },
        setUser({commit}, user){
            commit('setUser', user)
        },
        setCsrf({commit}, csrfToken){
            commit('setCsrf', csrfToken)
        }
    }
})