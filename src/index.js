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

    $('#copyrigh').text("COPYRIGHT © 2022 ALL RIGHT RESERVED BY COLORLIB " + new Date().getFullYear());

    $('.product-option input[type="radio"]').change(function() {
        $(this).parents('.product-option').siblings().removeClass('active');
        $(this).parents('.product-option').addClass('active');
    });

    // When the product quantity changes 
    $('[data-product-quantity]').on("change", function() {

      //Get the new quantity
      var newQuantity= $(this).val();

      // Find the line containing the information for this product
      var $parent = $(this).parents('[data-product-info]');

      //Fetch the price per piece from the product information
      var pricePerUnit = $parent.attr('data-product-price');

      //The total price is the price of the piece multiplied by its number
      var totalPriceForProduct = newQuantity * pricePerUnit;

      //Set the new price within the Total Price cell for the product on this line
      $parent.find('.total-price-for-product').text(totalPriceForProduct + '$');

      //Update the total price for all products
      calculateTotalPrice();
    });

    $('[data-remove-from-cart]').click(function () {
      $(this).parents('[data-product-info]').remove();
      //Recalculate the total price after deleting a product
      calculateTotalPrice();
    });

    function calculateTotalPrice() {
      // The total price of the products
      var totalPriceForAllProducts = 0;

      //Line format representing product information on a page
      $('[data-product-info]').each(function() {
      
          //Fetch the price per piece from the approval property
          var pricePerUnit = $(this).attr('data-product-price');

          //Fetch the product quantity from the quantity selection field
          var quantity = $(this).find('[data-product-quantity]').val();

          var totalPriceForAllProduct = pricePerUnit * quantity; 

          // Add the total price of this product to the total price of all products. And save the value to the variable itself
          totalPriceForAllProducts = totalPriceForAllProducts + (totalPriceForAllProduct);
      });

      // Update the total price of all products on the page
      $('#total-price-for-all-products').text(totalPriceForAllProducts + '$');
    }

  });
  