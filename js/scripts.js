function playPingPong(userNumber){
  var numbers = [];
  for (var i = 0; i <= userNumber; i++) {
    numbers.push(i);
    var index = numbers.indexOf(i);

    if (canDivide(index,3) && !canDivide(index,15)){
      numbers.splice(i,1,"ping");
    }
    else if(canDivide(index,5) && !canDivide(index,15)){
      numbers.splice(i,1,"pong");
    }
    else if (canDivide(index,15)){
      numbers.splice(i,1,"pingpong");
    }
    else {
     //do nothing
    }
  }
  numbers.splice(0,1);
  return numbers;
}

function canDivide(num, factor){
  if (num%factor==0){
    return true;
  }
  else {
    return false;
  }
}

$(function(){

  $("form").submit(function(e){
    e.preventDefault();
    var userInput = parseInt($("#input").val());
    $("#output").text(playPingPong(userInput));
  });

});
