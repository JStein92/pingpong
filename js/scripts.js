function playPingPong(userNumber){
  var numbers = [];
  var pings = 0;
  var pongs = 0;
  var pingPongs= 0;
  for (var i = 0; i <= userNumber; i++) {
    numbers.push(i);
    var index = numbers.indexOf(i);

    if (canDivide(index,3) && !canDivide(index,15)){
      numbers.splice(i,1,"ping ");
      $("#output").append("<ping>" + numbers[i].toString() + " - </ping>");
      pings++;
    }
    else if(canDivide(index,5) && !canDivide(index,15)){
      numbers.splice(i,1,"pong ");
      $("#output").append("<pong>" + numbers[i].toString() + " - </pong>");
      pongs++;
    }
    else if (canDivide(index,15)){
      numbers.splice(i,1,"pingpong ");
      $("#output").append("<pingpong>" + numbers[i].toString() + " - </pingpong>");
      pingPongs++;
    }
    else {
      numbers[i] += " - ";
      $("#output").append("<number>" + numbers[i] + "</number>");
      //do nothing
    }

  }
  $('#pings').text(pings);
  $('#pongs').text(pongs);
  $('#pingPongs').text(pingPongs);
  return;
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
