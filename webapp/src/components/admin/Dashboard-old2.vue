
<template>


  <div>
    <template>
      <NavBar/>
    </template>

    <b-row>
      <b-col>
        <template>
          <Sidebar/>
        </template>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>I am router view</p>
        <router-view/>
      </b-col>
    </b-row>
  </div>
</template>

<script>

import NavBar from '../NavBar'
import Sidebar from '../admin/SideBar'

export default {
  name: 'admin_dashboard',
  components: {
    NavBar,
    Sidebar
  }
}

</script>
<style scoped>
.homeText{
    font-size: 35px;
    color: red;
    text-align: center;
    position: relative;
    top:30px;
    text-shadow: 2px 2px 2px gray;
}
</style>
