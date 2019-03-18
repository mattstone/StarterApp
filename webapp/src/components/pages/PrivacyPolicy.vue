<template>
  <div>

    <template>
      <NavBar/>
    </template>

    <br>
    <h2>Privacy Policy</h2>

    <p>Your privacy policy</p>

    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>

    <template>
      <Footer/>
    </template>

  </div>
</template>

<script>

import NavBar from '../NavBar'
import Footer from '../Footer'

export default {
  name: 'PrivacyPolicy',
  components: {
    NavBar,
    Footer
  }
}
</script>
