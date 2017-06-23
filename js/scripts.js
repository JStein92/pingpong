function playPingPong(userNumber){

  var numbers = [];
  var pings = 0;
  var pongs = 0;
  var pingPongs= 0;
  for (var i = 0; i <= userNumber; i++) {
    numbers.push(i);
    var index = numbers.indexOf(i);

    if (canDivide(index,3) && !canDivide(index,15)){
      numbers.splice(i,1," ping ");
      $("#output").append("<ping>" + numbers[i].toString() + "</ping>");
      pings++;
    }
    else if(canDivide(index,5) && !canDivide(index,15)){
      numbers.splice(i,1," pong ");
      $("#output").append("<pong>" + numbers[i].toString() + "</pong>");
      pongs++;
    }
    else if (canDivide(index,15)){
      numbers.splice(i,1," pingpong ");
      $("#output").append("<pingpong>" + numbers[i].toString() + "</pingpong>");
      pingPongs++;
    }
    else if (index>0) {
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
  if (num%factor==0 && num>0){
    return true;
  }
  else {
    return false;
  }
}

$(function(){

  $("form").submit(function(e){

    e.preventDefault();
    $('#output').text("");
    var userInput = parseInt($("#input").val());
    playPingPong(userInput);
    $("html, body").animate({ scrollTop: $(document).height() }, 1000); //slide to  bottom of page
  });

  $('#pingCount').hover(function(){
    $('ping,#pingCount').css('background-color', 'white');
    $('ping').css('border', '1px solid black');
  }, function(){
    $('ping,#pingCount').css('background-color', '#ffe7c4');
    $('ping').css('border', '1px solid grey');
  });

  $('#pongCount').hover(function(){
    $('pong,#pongCount').css('background-color', 'white');
    $('pong').css('border', '1px solid black');
  }, function(){
    $('pong,#pongCount').css('background-color', '#bbf3f7');
    $('pong').css('border', '1px solid grey');
  });

  $('#pingPongCount').hover(function(){
    $('pingPong,#pingPongCount').css('background-color', 'white');
    $('pingPong').css('border', '1px solid black');
  }, function(){
    $('pingPong,#pingPongCount').css('background-color', '#fbd6fc');
    $('pingPong').css('border', '1px solid grey');
  });

  $('.form-group').hover(function(){
    $('.form-group,number').css('background-color', 'white');
    $('number').css('border', '1px solid black');
  }, function(){
    $('.form-group,number').css('background-color', '#dbfce0');
    $('number').css('border', '1px solid grey');
  });

});
