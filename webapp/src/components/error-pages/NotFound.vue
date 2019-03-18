
<div>
  <template>
    <NavBar/>
  </template>

  <p>
    404 SORRY COULDN'T FIND IT!!!
  </p>
</div>

<script>

import NavBar from '../NavBar'

export default {
  name: 'NotFound',
  components: {
    NavBar
  }
}
</script>

<style scoped>
p {
    font-weight: bold;
    font-size: 50px;
    text-align: center;
    color: #f10b0b;
}
</style>
