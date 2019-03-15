<template>

  <div>
    <template>
      <NavBar/>
    </template>
    
    <h1>I am dashboard</h1>
    <h4>I am a secure component</h4>
  </div>
</template>


<script>

import NavBar from './NavBar'

export default {
  name: 'Dashboard',
  components: {
    NavBar
  }
}

</script>
