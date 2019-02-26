<template>
  <div>

    <template>
      <NavBar/>
    </template>

    <br>
    <h2>Create Account</h2>
    <br>
    <template>
      <Flash :info='info' :success='success' :warning='warning' :error='error' :errors='errors' />
    </template>

    <br>
    <form @submit.prevent="register" class="form">
      <div class="form-group">
        <label for="emailInput">Email</label>
        <input type="email" v-model="email" :class="emailValidationClass" id="email" aria-describedby="emailHelp" placeholder="Email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

      <div class="form-group">
        <label for="passwordInput">Password</label>
        <input type="password" v-model="password" :class="passwordValidationClass" id="password" aria-describedby="passwordHelp" placeholder="Password">
        <small id="emailHelp" class="form-text text-muted">Password must be greater than 6 characters with at least one number.</small>

      </div>

      <div class="form-group">
        <label for="confirmPasswordInput">Confirm Password</label>
        <input type="password" v-model="password_confirmation" :class="passwordConfirmationValidationClass" id="confirmPassword" placeholder="Confirm Password">
      </div>

      <button class="btn btn-primary">Create Account</button>
    </form>
    <hr>
    <p>
      <router-link to='/'>Home</router-link> | <router-link to='/Login'>Login</router-link>
    </p>
  </div>
</template>

<script>

import NavBar from './NavBar'
import Password from 'vue-password-strength-meter'
import Flash from './includes/Flash'

export default {
  components: {
    NavBar,
    Password,
    Flash
  },
  data () {
    return {
      email: '',
      password: '',
      password_confirmation: '',
      error: '',
      errors: [],
      emailValidationClass: '',
      passwordValidationClass: '',
      passwordConfirmationValidationClass: '',
      validFieldClass: 'form-control is-valid',
      inValidFieldClass: 'form-control is-invalid'
    }
  },
  methods: {
    clearValidationClasses: function () {
      this.emailValidationClass = 'form-control'
      this.passwordValidationClass = 'form-control'
      this.passwordConfirmationValidationClass = 'form-control'
    },
    setEmailError: function (error) {
      this.errors.push(error)
      this.emailValidationClass = this.inValidFieldClass
    },
    setPasswordError: function (error) {
      this.errors.push(error)
      this.passwordValidationClass = this.inValidFieldClass
    },
    setPasswordConfirmationError: function (error) {
      this.errors.push(error)
      this.passwordConfirmationValidationClass = this.inValidFieldClass
    },
    validate: function (e) {
      this.clearValidationClasses()
      if (!this.email) {
        this.setEmailError('Email is blank')
      } else if (!this.validEmail(this.email)) {
        this.setEmailError('Email is invalid')
      }
      if (!this.password) { this.setPasswordError('Password is blank') }
      if (this.password.length < 7) { this.setPasswordError('Password must be longer than 6 characters') }
      if (!/\d/.test(this.password)) { this.setPasswordError('Password must contain one number') }
      if (!this.password_confirmation) { this.setPasswordConfirmationError('Password Confirmation is blank') }

      if (this.password !== this.password_confirmation) {
        this.setPasswordConfirmationError('Password does not match Password Confirmation')
      }

      e.preventDefault()
    },
    validEmail: function (email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    register: function (e) {
      while (this.errors.length > 0) { this.errors.pop() }
      this.validate(e)

      if (this.errors.length === 0) {
        let data = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('register', data)
        .then(() => {
          this.$router.push('/register-success')
        })
        .catch(err => {
          this.errors.push(err)
        })
      }
    }
  },
  mounted: function () {
    this.clearValidationClasses()
  }
}
</script>
