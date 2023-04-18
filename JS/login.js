$(document).ready(function() {
    // When the "Help" button is clicked
    $("#help-button").click(function() {
      // Toggle the help panel's visibility by changing its left position
      $("#help-panel").toggleClass("help-panel-visible");
    });
  });