<template>
  <div>
    <template>
      <NavBar/>
    </template>
    <br>
    <h2>Resend Confirmation Email</h2>
    <br>
    <template>
      <Flash :info='info' :success='success' :warning='warning' :error='error' :errors='errors' />
    </template>

    <div v-if='success'>
      <p><strong>Email</strong> {{email}} </p>
      <hr>
      <p><router-link to='/'>Home</router-link> | <router-link to='/Login'>Login</router-link></p>
    </div>
    <div v-else>
      <form @submit.prevent="resend" class="form">
        <div class="form-group">
          <input type="email" v-model="email" :class="emailValidationClass" id="email" placeholder="Email">
        </div>
        <button class="btn btn-primary">Submit</button>
      </form>
      <hr>
      <p>
        <router-link to='/'>Home</router-link> | <router-link to='Login'>Login</router-link> | <router-link to='register'>Create account</router-link>
      </p>
    </div>

  </div>
</template>

<script>

import NavBar from './NavBar'
import Flash from './includes/Flash'

export default {
  components: {
    NavBar,
    Flash
  },
  data () {
    return {
      info: '',
      email: '',
      error: '',
      warning: '',
      success: '',
      errors: [],
      emailValidationClass: '',
      validFieldClass: 'form-control is-valid',
      inValidFieldClass: 'form-control is-invalid'
    }
  },
  methods: {
    clearValidationClasses: function () {
      this.emailValidationClass = 'form-control'
    },
    setEmailError: function (error) {
      this.errors.push(error)
      this.emailValidationClass = this.inValidFieldClass
    },
    validate: function (e) {
      this.clearValidationClasses()
      if (!this.email) {
        this.setEmailError('Email is blank')
      } else if (!this.validEmail(this.email)) {
        this.setEmailError('Email is invalid')
      }
    },
    validEmail: function (email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    resend: function (e) {
      while (this.errors.length > 0) { this.errors.pop() }
      this.validate(e)
      if (this.errors.length === 0) {
        let data = {
          email: this.email
        }
        this.$store.dispatch('resend', data)
        .then(() => {
          this.success = 'If your email address exists on our system you will shortly receive a confirmation email'
        })
        .catch(err => {
          // for security reasons, do not let the user know that there is an error
          err = null
          this.success = 'If your email address exists on our system you will shortly receive a confirmation email'
        })
      }
    }
  }
}

</script>
