<template>
  <footer>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center">
        <p>
          <router-link :to="{ name: 'terms_and_conditions' }">Terms and Conditions</router-link> |
          <router-link :to="{ name: 'privacy_policy' }">Privacy Policy</router-link> |
          <router-link :to="{ name: 'frequently_asked_questions' }">FAQs</router-link> |
          <router-link :to="{ name: 'contact' }">Contact</router-link> |
        </p>
        <p>
          &copy; All rights reserved. StarterApp
        </p>
      </div>
    </div>
  </footer>
</template>
