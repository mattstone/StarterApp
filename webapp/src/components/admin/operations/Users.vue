<template>
<div>
  <div class="row">
    <div class="col-md-11">
      <h2>Users</h2>
    </div>
    <div class="col-md-1">
      Add
    </div>
  </div>

  <template>
    <Flash :info='info' :success='success' :warning='warning' :error='error' :errors='errors' />
  </template>

  <div class="row">
    <table class="table">
    <thead>
      <th scope="col">Email</th>
      <th scope="col">Created</th>
      <th scope="col">Updated</th>
      <th scope="col">Actions</th>
    </thead>
    <tbody>
      <template v-if="users.length === 0">
        <tr>
          <td colspan="4">There are no users</td>
        </tr>
      </template>
      <template v-else>
        <tr v-for="user in users">
          <td>{{user.email}}</td>
          <td>{{user.created_at}}</td>
          <td>{{user.updated_at}}</td>
          <td>add/edit/delete</td>
        </tr>
      </template>

    </tbody>
    </table>
  </div>
</div>
</template>

<script>

import Flash from '../../includes/Flash'
import User from '../../../../models/User.js'

// import axios from 'axios'

export default {
  name: 'AdminUsers',
  components: {
    Flash
  },
  data () {
    return {
      info: '',
      success: '',
      warning: '',
      error: '',
      errors: [],
      isShowSpinner: false,
      user: null,
      users: []
    }
  },
  mounted: function () {
    this.user = new User()
    this.get()
  },
  methods: {
    clearFlash: function () {
      this.info = ''
      this.success = ''
      this.warning = ''
      this.error = ''
      this.errors = []
    },
    showSpinner: function () {
      this.isShowSpinner = true
    },
    hideSpinner: function () {
      this.isShowSpinner = false
    },
    get: function () {
      this.clearFlash()
      // console.log('get')
      // console.log(this.$store.getters.user)
      // console.log(this.$store.getters.token)
      const params = { access_token: this.$store.getters.token }
      this.user.get(params, function (errors, response) {
        console.log('users')
        console.log(errors)
        console.log(response)
      })
    }
  }

}

</script>
