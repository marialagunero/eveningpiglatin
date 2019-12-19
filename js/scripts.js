// business logic
var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

// user interface logic
$(document).ready(function() {
  $("form#piglatin").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#userInput").val());
    var result = leapYear(year);

    $(".year").text(year);


    $("#result").show();
  });
});
