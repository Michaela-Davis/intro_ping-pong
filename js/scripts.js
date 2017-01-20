// * The program should count up to the provided number
// * The program should allow user to enter a new number and see new results over and over again

// BACK-END / BUSINESS LOGIC

var emptyArray = [];
var emptyString = ("");



var convertNumber = function(number) {
  // * The program should replace numbers divisible by 15 with "pingpong"
  if (number % 15 === 0) {
    return "pingpong";
  // * The program should replace numbers divisible by 5 with "pong"
  } else if (number % 5 === 0) {
    return "pong";
  // * The program should replace numbers divisible by 3 with "ping"
  } else if (number % 3 === 0) {
    return "ping";
  } else if (!number) {
    alert("Enter a number");
  } else {
    return number;
  }
};

// FRONT-END / USER LOGIC
$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#userInput").val());
    var result = convertNumber(number);
    $("#result").text(result);
  });
});
