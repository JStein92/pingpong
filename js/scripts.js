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

  //add color to counter subheaders and form group
  $('ping,#pingCount').addClass('ping-background');
  $('pong,#pongCount').addClass('pong-background')
  $('pingPong,#pingPongCount').addClass('pingPong-background');

  $("form").submit(function(e){
    e.preventDefault();
    $('#output').text("");
    var userInput = parseInt($("#input").val());
    playPingPong(userInput);

    $('ping,pong,pingPong,number').addClass('grey-border');
    $('ping').addClass('ping-background');
    $('pong').addClass('pong-background')
    $('pingPong').addClass('pingPong-background');
    $('number').addClass('number-background');

    $("html, body").animate({ scrollTop: $(document).height() }, 1000); //slide to  bottom of page
  });

  $('#pingCount').hover(function(){
    $('ping,#pingCount').removeClass('ping-background')
    $('ping,#pingCount').addClass('white-background');
    $('ping').removeClass('grey-border');
    $('ping').addClass('black-border');
  }, function(){
    $('ping,#pingCount').removeClass('white-background')
    $('ping,#pingCount').addClass('ping-background');
    $('ping').removeClass('black-border');
    $('ping').addClass('grey-border');
  });
  $('#pongCount').hover(function(){
    $('pong,#pongCount').removeClass('pong-background')
    $('pong,#pongCount').addClass('white-background');
    $('pong').removeClass('grey-border');
    $('pong').addClass('black-border');
  }, function(){
    $('pong,#pongCount').removeClass('white-background')
    $('pong,#pongCount').addClass('pong-background');
    $('pong').removeClass('black-border');
    $('pong').addClass('grey-border');
  });
  $('#pingPongCount').hover(function(){
    $('pingPong,#pingPongCount').removeClass('pingPong-background')
    $('pingPong,#pingPongCount').addClass('white-background');
    $('pingPong').removeClass('grey-border');
    $('pingPong').addClass('black-border');
  }, function(){
    $('pingPong,#pingPongCount').removeClass('white-background')
    $('pingPong,#pingPongCount').addClass('pingPong-background');
    $('pingPong').removeClass('black-border');
    $('pingPong').addClass('grey-border');
  });
  $('.form-group').hover(function(){
    $('number,.form-group').removeClass('number-background')
    $('number,.form-group').addClass('white-background');
    $('number').removeClass('grey-border');
    $('number').addClass('black-border');
  }, function(){
    $('number,.form-group').removeClass('white-background')
    $('number,.form-group').addClass('number-background');
    $('number').removeClass('black-border');
    $('number').addClass('grey-border');
  });

});
