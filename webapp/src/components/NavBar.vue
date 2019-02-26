<template>
  <nav class="navbar navbar-default navbar-expand-lg navbar-dark bg-dark justify-content-between">
    <a class="navbar-brand" href="/">Starter App</a>

    <template v-if="isLoggedIn">
      <a @click='logout'>Logout</a>
    </template>
    <template v-else>
      <form @submit.prevent="login" class="form-inline">
        <div class="form-group">
          <input type="email" v-model="email" class="form-control" id="email" name="user[email]" placeholder="email address" autocomplete="username" required>
          <input type="password" v-model="password" class="form-control" id="password" name="user[password]" placeholder="password" autocomplete="current-password" required>
        </div>
        <button class="btn btn-primary">Submit</button>
      </form>
    </template>
  </nav>
</template>

<script>

export default {
  name: 'NavBar',
  computed: {
    isLoggedIn: function () { return this.$store.getters.isLoggedIn }
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      let email = this.email
      let password = this.password
      this.$store.dispatch('login', { email, password })
      .then(() => {
        this.$router.push('/dashboard')
      })
      .catch(err => {
        console.log(err)
        this.$router.push('/login')
      })
    },
    logout: function () {
      this.$store.dispatch('logout')
      .then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>
