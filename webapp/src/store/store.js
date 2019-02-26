import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    status: '',
    error: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  mutations: {
    auth_request (state) {
      state.status = 'loading'
    },
    auth_success (state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error (state, error) {
      state.status = 'error'
      state.error = error
    },
    clear_error (state) {
      state.error = ''
    },
    logout (state) {
      state.status = ''
      state.token = ''
      state.error = ''
    }
  },
  actions: {
    login ({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: 'http://localhost:4000/login', data: user, method: 'POST'})
        .then(resp => {
          if (resp.status !== 200) {
            commit('auth_error', 'Unable to connect')
            reject('Unable to connect')
            return
          }

          if (resp.data.error) {
            commit('auth_error', resp.data.error)
            reject(resp.data.error)
            return
          }

          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', token, user)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    register ({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: 'http://localhost:4000/signup', data: user, method: 'POST' })
        .then(resp => {
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', token, user)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error', err)
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    resend ({commit}, data) {
      return new Promise((resolve, reject) => {
        // commit('auth_request')
        axios({ url: 'http://localhost:4000/resend-confirmation-code/' + data.email, method: 'GET' })
        .then(resp => {
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    reset ({commit}, data) {
      return new Promise((resolve, reject) => {
        axios({ url: 'http://localhost:4000/reset-password/' + data.email, method: 'GET' })
        .then(resp => {
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    logout ({commit}) {
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        if (axios.defaults.headers.commit['Authorization']) {
          delete axios.defaults.headers.commit['Authorization']
        }
        resolve()
      })
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  }
})
