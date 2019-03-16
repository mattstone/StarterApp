<template>
  <div class="HomePage">

    <template>
      <NavBar/>
    </template>

    <div class="jumbotron">
      <h1 class="display-4">Starter App</h1>
      <p class="lead">100% Open Source :: Node.js, Express.js, MongoDB, Redis, with Vue, Vuex & Bootstrap 4</p>
      <hr class="my-4">
      <p class="lead">Responsive, designed to scale, out of the box.</p>
      <p class="lead">
        <button v-on:click="gotoRegister" class="btn btn-primary btn-lg">Create Account</button>
      </p>
    </div>

    <div class='container'>
      <div class='row'>
        <div class='col-md-4'>
          <h2>Express</h2>
          <ul>
            <li>A minimal and flexible Node.js web application framework that provides myriad of HTTP utility methods and middleware.</li>
            <li>Provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.</li>
          </ul>
        </div>
        <div class='col-md-4'>
          <h2>Mongo DB</h2>
          <ul>
            <li>MongoDB stores data in flexible, JSON-like documents.</li>
            <li>Powerful ways to access and analyze your data through ad hoc queries, indexing, and real time aggregation.</li>
            <li>Distributed database at its core, high availability, horizontal scaling, and geographic distribution are built in and easy to use.</li>
          </ul>
        </div>
        <div class='col-md-4'>
          <h2>Redis</h2>
          <ul>
            <li>Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker.</li>
            <li>Redis has built-in replication, transactions and different levels of on-disk persistence, with high availability and automatic partitioning.</li>
            <li>Publish and Subscribe features in conjuction with websockets enables scalable & dynamic web experiences.</li>
          </ul>
        </div>
      </div>
      <div class='row'>
        <div class='col-md-4'>
          <h2>Vue & Vuex</h2>
          <ul>
            <li>Lightweigt and blazingly fast webpack based web front-end framework.</li>
          </ul>
        </div>
        <div class='col-md-4'>
          <h2>Bootstrap 4</h2>
          <ul>
            <li>The standard CSS framework.</li>
          </ul>
        </div>
        <div class='col-md-4'>
          <h2>Financial Numbers</h2>
          <ul>
            <li>Allows javascript to handle large numerbers and floating point without error.</li>
          </ul>
        </div>
      </div>

    </div>
    <br>
    <template>
      <Footer/>
    </template>

  </div>

</template>

<script>

import NavBar from './NavBar'
import Footer from './Footer'

export default {
  name: 'HomePage',
  components: {
    NavBar,
    Footer
  },
  methods: {
    gotoRegister: function () {
      this.$router.push('Register')
    }
  }
}

</script>
