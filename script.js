

var score =0;
var question =0;
var name =0;
var counter=0;

$(document).ready(function(){
$("#questionID2").hide();
$("#questionID3").hide();
$("#questionID4").hide();
$("#questionID5").hide();
$("#questionID6").hide();
$("#questionID7").hide();
$("#questionID8").hide();
$("#questionID9").hide();
$("#questionID10").hide();
});

$(document).ready(function(){

    for (var i = 0; i< 1; i++){
        $("#play1a").append(localStorage.key(i));
        $("#play1b").append(localStorage.getItem(localStorage.key(i)));
        i++;

        $("#play2a").append(localStorage.key(i));
        $("#play2b").append(localStorage.getItem(localStorage.key(i)));
        i++;
        $("#play3a").append(localStorage.key(i));
        $("#play3b").append(localStorage.getItem(localStorage.key(i)));
      }
      for ( var i = 0; i < 5; i++)   {
      console.log(localStorage.key(i));
      console.log(localStorage.getItem(localStorage.key(i)));
      }
});



$(document).ready(function(){
   $('#questionID1').on('click', function() {
   var result =($('input[name=qRadio1]:checked', '#questionID1').val());
   if(result=="Answer1"){
    $("#answerResult1").val("Correct")
    score ++;
    }
    else {
    $("#answerResult1").val("Incorrect")
     }
     $("#answerFinal1").val("Your score is:" +score)

    question ++;
    $("#questionID2").show();
    $('#questionID1').replaceWith($(this).next('#questionID2'));
    });

});



$(document).ready(function(){
    $('#questionID2').on('click', function() {
    var result =($('input[name=qRadio2]:checked', '#questionID2').val());
    if(result=="Answer4"){
    $("#answerResult2").val("Correct")
    score++;
    }
    else {
    $("#answerResult2").val("Incorrect")
    }
    $("#answerFinal1").val("Your score is:" +score)
   question ++;
   $('#questionID2').replaceWith($(this).next('#questionID3'));
    });

});


$(document).ready(function(){
$(".scroll").click(function(event){
   name = prompt("Enter name")
   event.preventDefault();
   $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);

 });


$('.giveup').on('click', function(event) {
  event.preventDefault();
  $("#questionID2").show();
  $("#questionID3").show();
  $("#questionID4").show();
  $("#questionID5").show();
  $("#questionID6").show();
  $("#questionID7").show();
  $("#questionID8").show();
  $("#questionID9").show();
  $("#questionID10").show();

  $("#answerResult1").val("Correct Answer!!")
  $("#answerResult2").val("Correct Answer!!")

  $("#answerResult3").val("Correct Answer!!")
  $("#answerResult4").val("Correct Answer!!")
  $("#answerResult5").val("Correct Answer!!")
  $("#answerResult6").val("Correct Answer!!")
  $("#answerResult7").val("Correct Answer!!")
  $("#answerResult8").val("Correct Answer!!")
  $("#answerResult9").val("Correct Answer!!")
  $("#answerResult10").val("Correct Answer!!")
});

$('.donegame').on('click', function() {

  localStorage.setItem(name, score);

});
});
