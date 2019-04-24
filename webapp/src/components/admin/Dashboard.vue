
<template>
  <div>
    <template>
      <NavBar/>
    </template>

    <div class="d-flex" id="wrapper">
      <!-- Page Content -->
      <div id="page-content-wrapper">
        <div class="container-fluid">
          <h5 class="mt-4">Admin Dashboard</h5>
          <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
          <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>. The top navbar is optional, and just for demonstration. Just create an element with the <code>#menu-toggle</code> ID which will toggle the menu when clicked.</p>
        </div>
      </div>
    </div>

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
</style>
