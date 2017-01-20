// * The program should count up to the provided number
// * The program should replace numbers divisible by 3 with "ping"
// * The program should replace numbers divisible by 5 with "pong"
// * The program should replace numbers divisible by 15 with "pingpong"
// * The program should allow user to enter a new number and see new results over and over again

// BACK-END / BUSINESS LOGIC
var convertNumber = function(number) {
  if (number) {
    console.log(number)
  } else {
    alert("Enter a number")
  }
};

// FRONT-END / USER LOGIC
$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("#userInput").val());
    var result = convertNumber(number);
    $("#result").text(result);
  });
});
