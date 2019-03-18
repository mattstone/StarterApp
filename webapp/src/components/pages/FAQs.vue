<template>
  <div>

    <template>
      <NavBar/>
    </template>

    <br>
    <h2>Frequently Asked Questions</h2>

    <p>Your FAQs</p>

    <ol>
      <li>FAQ one</li>
      <li>FAQ two</li>
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
  name: 'FAQs',
  components: {
    NavBar,
    Footer
  }
}
</script>
