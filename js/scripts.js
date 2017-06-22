function getRange(userNumber){
  var numbers = [];
  for (var i = 1; i <= userNumber; i++) {
    numbers.push(i);
  }
  return numbers;
}

$(function(){

  $("form").submit(function(e){
    e.preventDefault();
    var userInput = parseInt($("#input").val());
    $("#output").text(getRange(userInput));
  });

});
