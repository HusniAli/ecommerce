import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import 'jquery/dist/jquery.min';
import $ from 'jquery';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/js/all.js';

$(function () {

    $('[data-toggle="tooltip"]').tooltip()

    $(".add-to-cart-btn").click(function() {
      alert( "Add product to cart" );
    });

  });
  