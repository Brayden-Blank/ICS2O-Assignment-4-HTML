// Copyright (c) 2022 Brayden Blank All rights reserved
//
// Created by: Brayden Blank
// Created on: Apr 2022
// This file contains the JS functions for index.html

"use strict";

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-02-HTML/sw.js", {
    scope: "/ICS2O-Unit-5-02-HTML/",
  });
}

/**
 * This function compares slider with random number.
 */
function determineClicked() {
  const chosenNumber = parseInt(document.getElementById("chosen").value);

  // true
  if (chosenNumber > -1) {
    document.getElementById("result").innerHTML =
      "You chose " + chosenNumber + ", which is a positive number.";
  }
  //  false
  if (chosenNumber < -1) {
    document.getElementById("result").innerHTML =
      "You chose " + chosenNumber + ", which is a negative number.";
  }
}
