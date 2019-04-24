<template>
  <nav class="navbar navbar-default navbar-expand-lg navbar-dark bg-dark justify-content-between">

    <template v-if="isLoggedIn">
      <b-navbar-brand :to="{ name: 'admin_dashboard' }">Admin</b-navbar-brand>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
        </ul>
      </div>

      <a @click='logout' class='text-light'>Logout</a>
    </template>
    <template v-else>
      <a class="navbar-brand" href="/">Starter App</a>
      <form @submit.prevent="login" class="form-inline">
        <div class="form-group">
          <input type="email"  v-model="email" class="form-control" id="email" name="user[email]" placeholder="email address" autocomplete="username" required>
          <input type="password" value="P4ssw0rd!" v-model="password" class="form-control" id="password" name="user[password]" placeholder="password" autocomplete="current-password" required>
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
    isLoggedIn: function () { return this.$store.getters.isLoggedIn },
    isAdmin: function () { return this.$store.getters.user.isAdmin() }
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
      this.$store.dispatch('login', { email: email, password: password })
      .then(() => {
        if (this.$store.getters.user.isAdmin()) {
          this.$router.push({ name: 'admin_dashboard' })
        } else {
          this.$router.push({ name: 'user_dashboard' })
        }
      })
      .catch(err => {
        console.log(err)
        this.$router.push('/login')
      })
    },
    logout: function () {
      this.$store.dispatch('logout')
      .then(() => {
        // this.$router.push('/')
        this.$router.push({ name: 'HomePage' })
      })
    }
  },
  mounted () {
    this.email = 'admin@starterapp.com'
    this.password = 'P4ssw0rd!'
  }
}
</script>
