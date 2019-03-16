<template>
  <div>

    <template>
      <NavBar/>
    </template>

    <br>
    <h2>Terms and conditions</h2>

    <p>Your terms and conditions</p>

    <ol>
      <li>Condition one</li>
      <li>Condition two</li>
    </ol>

  </div>
</template>

<script>

import NavBar from './NavBar'

export default {
  name: 'Login',
  components: {
    NavBar,
  }
}
</script>
