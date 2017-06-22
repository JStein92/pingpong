
$(function(){

  $("form").submit(function(e){
    e.preventDefault();
    var userInput = parseInt($("#input").val());
    $("#output").text(userInput);
  });

});
