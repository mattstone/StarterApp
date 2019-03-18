<template>

  <div>
    <template>
      <NavBar/>
    </template>

    <template>
      <AdminSidebar/>
    </template>

    <!-- Page content -->
    <div class="content">
      ..
    </div>

  </div>
</template>


<script>

import NavBar from '../NavBar'
import AdminSidebar from '../admin/SideBar'

export default {
  name: 'admin_dashboard',
  components: {
    NavBar,
    AdminSidebar
  }
}

</script>

<style scoped>

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

/* On screens that are less than 700px wide, make the sidebar into a topbar */
@media screen and (max-width: 700px) {
  div.content {margin-left: 0;}
}

</style>
