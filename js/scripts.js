
// user interface logic
$(document).ready(function() {
  $("form#piglatin").submit(function(event) {
    event.preventDefault();

    var userWords = $("#userInput").val();

      function removeNonLetters(anything) {
        return anything.replace(/[^a-zA-Z]/g, "");
      };



console.log(removeNonLetters(userWords));
console.log(userWords);


  });
});
