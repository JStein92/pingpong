function playPingPong(userNumber){
  var numbers = [];
  for (var i = 0; i <= userNumber; i++) {
    numbers.push(i);
    var index = numbers.indexOf(i);

    if (canDivide(index,3) && !canDivide(index,15)){
      numbers.splice(i,1,"ping ");
      $("#output").append("<ping>" + numbers[i].toString() + " - </ping>");
    }
    else if(canDivide(index,5) && !canDivide(index,15)){
      numbers.splice(i,1,"pong ");
      $("#output").append("<pong>" + numbers[i].toString() + " - </pong>");
    }
    else if (canDivide(index,15)){
      numbers.splice(i,1,"pingpong ");
      $("#output").append("<pingpong>" + numbers[i].toString() + " - </pingpong>");
    }
    else {
      numbers[i] += " - ";
      $("#output").append("<number>" + numbers[i] + "</number>");
      //do nothing
    }

  }
  numbers.splice(0,1);
  var finalString = numbers.join('');
  return finalString;
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
    playPingPong(userInput);
  });

});
