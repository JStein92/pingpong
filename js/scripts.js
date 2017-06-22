function getRange(userNumber){
  var numbers = [];
  for (var i = 0; i <= userNumber; i++) {

    numbers.push(i);

      if (numbers.indexOf(i)%5===0 && numbers.indexOf(i)%3===0){
        numbers[i] = "pingpong";
      }
      else if (numbers.indexOf(i)%3===0){
        numbers[i] = "ping";
      }
      else if(numbers.indexOf(i)%5===0){
        numbers[i] = "pong";
      }


  }
  numbers.splice(0,1);
  return numbers;
}


$(function(){

  $("form").submit(function(e){
    e.preventDefault();
    var userInput = parseInt($("#input").val());
    $("#output").text(getRange(userInput));
  });

});
