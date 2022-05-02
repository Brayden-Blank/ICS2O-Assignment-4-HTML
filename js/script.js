// Copyright (c) 2022 Brayden Blank All rights reserved
//
// Created by: Brayden Blank
// Created on: Apr 2022
// This file contains the JS functions for index.html

"use strict";

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-02-HTML/sw.js", {
    scope: "/ICS2O-Unit-5-02-HTML/",
  });
}

function inputClicked(){
  var largePizza = document.getElementById("large");
  var extraLargePizza = document.getElementById("extra-large");
  var oneTopping = document.getElementById("one-topping");
  var twoTopping = document.getElementById("two-topping");
  var threeTopping = document.getElementById("three-topping");
  var fourTopping = document.getElementById("four-topping");
  var pizzaPrice = 0;
  var toppingPrice = 0;
  var tax = 0;
  var finalPrice = 0;

  //process 
  if(largePizza.checked == true) {
    pizzaPrice = 6.00;
  }
  else if (extraLargePizza.checked == true) {
    pizzaPrice = 6.00;
  }
  else {
   document.getElementById("result").innerHTML = "Please input pizza size"
  }

  if (oneTopping.checked = true) {
    toppingPrice = 1.00
  }
  else if (twoTopping.checked = true) {
    toppingPrice = 1.75
  }
  else if (threeTopping.checked = true) {
    toppingPrice = 2.50
  }
  else if (fourTopping.checked = true) {
    toppingPrice = 3.35
  }
  else 
    document.getElementById("result").innerHTML = "Please input number of toppings"

  tax = (toppingPrice + pizzaPrice) * 0.13;
  finalPrice = toppingPrice + pizzaPrice + tax

  // output
  document.getElementById("result").innerHTML = "Your order will cost $" + finalPrice.toFixed(2) + ", thank you for ordering!"
}
