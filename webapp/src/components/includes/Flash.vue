<template>
  <div>
    <div v-if='info' class='alert alert-info' role='alert'>{{info}}</div>
    <div v-if='success' class='alert alert-success' role='alert'>{{success}}</div>
    <div v-if='warning' class='alert alert-warning' role='alert'>{{warning}}</div>
    <div v-if='error' class='alert alert-danger' role='alert'>{{error}}</div>
    <div v-if='errors.length' class='alert alert-danger' role='alert'>
      <p>Please correct the following errors</p>
      <ul><li v-for="error in errors">{{ error }}</li></ul>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    info: { type: String, default: null },
    success: { type: String, default: null },
    warning: { type: String, default: null },
    error: { type: String, default: null },
    errors: { type: Array, default: null }
  }
}
</script>
