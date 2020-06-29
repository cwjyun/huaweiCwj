// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/img/favicon.png'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/icofont/icofont.min.css'
import './assets/vendor/aos/aos.css'
import './assets/vendor/owlcarousel/assets/owl.carousel.min.css'
import './assets/css/style.css'

import './assets/vendor/jquery/jquery.min.js'
import './assets/vendor/jquery/jquery-migrate.min.js'
// import './assets/vendor/easing/easing.min.js'
// import './assets/vendor/isotope/isotope.pkgd.min.js'
import './assets/vendor/aos/aos.js'
import './assets/vendor/owlcarousel/owl.carousel.js'
// import './assets/js/main.js'

// <!-- Vendor JS Files -->
// <script src="vendor/jquery/jquery.min.js"></script>
//   <script src="vendor/jquery/jquery-migrate.min.js"></script>
//   <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
//   <script src="vendor/easing/easing.min.js"></script>
//
//   <script src="vendor/isotope/isotope.pkgd.min.js"></script>
//   <script src="vendor/aos/aos.js"></script>
//   <script src="vendor/owlcarousel/owl.carousel.min.js"></script>
//
//   <!-- Template Main JS File -->
//   <script src="js/main.js"></script>

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
