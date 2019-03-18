<template>
  <div>

    <template>
      <NavBar/>
    </template>

    <br>
    <h2>Contact</h2>

    <p>Your contact details</p>

    <ol>
      <li>email</li>
      <li>telephone</li>
      <li>address</li>
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
  name: 'Contact',
  components: {
    NavBar,
    Footer
  }
}
</script>
