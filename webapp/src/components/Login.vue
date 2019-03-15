<template>
  <div>

    <template>
      <NavBar/>
    </template>

    <br>
    <h2>Login</h2>

    <br>
    <template>
      <Flash :info='info' :success='success' :warning='warning' :error='error' :errors='errors' />
    </template>

    <form @submit.prevent="login" class="form">
      <div class="form-group">
        <input type="email" v-model="email" class="form-control" id="email" name="user[email]" placeholder="email address" autocomplete="username" required>
        <input type="password" v-model="password" class="form-control" id="password" name="user[password]" placeholder="password" autocomplete="current-password" required>
      </div>
      <button class="btn btn-primary">Submit</button>
    </form>
    <hr>
    <p>
      <router-link to='reset-password'>Reset password</router-link> | <router-link to='resend-confirmation-email'>Resend confirmation email</router-link> | <router-link to='register'>Create account</router-link>
    </p>
  </div>
</template>

<script>

import NavBar from './NavBar'
import Flash from './includes/Flash'

export default {
  name: 'Login',
  components: {
    NavBar,
    Flash
  },
  data () {
    return {
      email: '',
      password: '',
      info: '',
      success: '',
      warning: '',
      error: '',
      errors: []
    }
  },
  methods: {
    login: function () {
      this.error = ''
      const email = this.email
      const password = this.password

      // this.$store.dispatch('login', { user: { email: email, password: password } })
      this.$store.dispatch('login', { email: email, password: password })
      .then(() => {
        this.$router.push('/dashboard')
      })
      .catch(err => {
        this.error = err
      })
    },
    logout: function () {
      this.$store.dispatch('logout')
      .then(() => {
        this.$router.push('/')
      })
    }
  },
  mounted: function () {
    if (this.$store.state.error) {
      this.error = this.$store.state.error
      this.$store.state.error = ''
    }
  }
}
</script>
