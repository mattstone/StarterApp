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

    <template>
      <Footer/>
    </template>

  </div>
</template>

<script>

import NavBar from '../NavBar'
import Footer from '../Footer'

export default {
  name: 'TermsAndConditions',
  components: {
    NavBar,
    Footer
  }
}
</script>
