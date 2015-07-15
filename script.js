var score =0;
var question =0;
var name =0;
var counter=0;

$(document).ready(function(){
// $("#questionID1").hide();
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
   if(result=="Answer2"){
    $("#answerResult1").val("Correct")
    score ++;
    }
    else {
    $("#answerResult1").val("Incorrect")
     }
     $("#answerFinal1").val("Your score is:" +score)

    question ++;
  //$("#div5").delay(4000).fadeIn();
    // $("#questionID2").show();
    $('#questionID2').fadeIn("slow");
    $('#questionID1').replaceWith($(this).next('#questionID2'));

    });

});



$(document).ready(function(){
    $('#questionID2').on('click', function() {
    var result =($('input[name=qRadio2]:checked', '#questionID2').val());
    if(result=="Answer1"){
    $("#answerResult2").val("Correct")
    score++;
    }
    else {
    $("#answerResult2").val("Incorrect")
    }
    $("#answerFinal1").val("Your score is:" +score)
   question ++;
     $('#questionID3').fadeIn("slow");
   $('#questionID2').replaceWith($(this).next('#questionID3'));
    });

});

$(document).ready(function(){
    $('#questionID3').on('click', function() {
    var result =($('input[name=qRadio3]:checked', '#questionID3').val());
    if(result=="Answer1"){
    $("#answerResult3").val("Correct")
    score++;
    }
    else {
    $("#answerResult3").val("Incorrect")
    }
    $("#answerFinal1").val("Your score is:" +score)
   question ++;
  $('#questionID4').fadeIn("slow");
   $('#questionID3').replaceWith($(this).next('#questionID4'));
    });

});

$(document).ready(function(){
    $('#questionID4').on('click', function() {
    var result =($('input[name=qRadio4]:checked', '#questionID4').val());
    if(result=="Answer4"){
    $("#answerResult4").val("Correct")
    score++;
    }
    else {
    $("#answerResult4").val("Incorrect")
    }
    $("#answerFinal1").val("Your score is:" +score)
   question ++;
    $('#questionID5').fadeIn("slow");
   $('#questionID4').replaceWith($(this).next('#questionID5'));
    });

});

$(document).ready(function(){
    $('#questionID5').on('click', function() {
    var result =($('input[name=qRadio5]:checked', '#questionID5').val());
    if(result=="Answer3"){
    $("#answerResult5").val("Correct")
    score++;
    }
    else {
    $("#answerResult5").val("Incorrect")
    }
    $("#answerFinal1").val("Your score is:" +score)
   question ++;
    $('#questionID6').fadeIn("slow");
   $('#questionID5').replaceWith($(this).next('#questionID6'));
    });

});

$(document).ready(function(){
    $('#questionID6').on('click', function() {
    var result =($('input[name=qRadio6]:checked', '#questionID6').val());
    if(result=="Answer4"){
    $("#answerResult6").val("Correct")
    score++;
    }
    else {
    $("#answerResult6").val("Incorrect")
    }
    $("#answerFinal1").val("Your score is:" +score)
   question ++;
  $('#questionID7').fadeIn("slow");
   $('#questionID6').replaceWith($(this).next('#questionID7'));
    });

});


$(document).ready(function(){
    $('#questionID7').on('click', function() {
    var result =($('input[name=qRadio7]:checked', '#questionID7').val());
    if(result=="Answer1"){
    $("#answerResult7").val("Correct")
    score++;
    }
    else {
    $("#answerResult7").val("Incorrect")
    }
    $("#answerFinal1").val("Your score is:" +score)
   question ++;
  $('#questionID8').fadeIn("slow");
   $('#questionID7').replaceWith($(this).next('#questionID8'));
    });

});

$(document).ready(function(){
    $('#questionID8').on('click', function() {
    var result =($('input[name=qRadio8]:checked', '#questionID8').val());
    if(result=="Answer1"){
    $("#answerResult8").val("Correct")
    score++;
    }
    else {
    $("#answerResult8").val("Incorrect")
    }
    $("#answerFinal1").val("Your score is:" +score)
   question ++;
  $('#questionID9').fadeIn("slow");
   $('#questionID8').replaceWith($(this).next('#questionID9'));
    });

});

$(document).ready(function(){
    $('#questionID9').on('click', function() {
    var result =($('input[name=qRadio9]:checked', '#questionID9').val());
    if(result=="Answer1"){
    $("#answerResult9").val("Correct")
    score++;
    }
    else {
    $("#answerResult9").val("Incorrect")
    }
    $("#answerFinal1").val("Your score is:" +score)
   question ++;
    $('#questionID10').fadeIn("slow");
   $('#questionID9').replaceWith($(this).next('#questionID10'));
    });

});
$(document).ready(function(){
    $('#questionID10').on('click', function() {
    var result =($('input[name=qRadio10]:checked', '#questionID10').val());
    if(result=="Answer3"){
    $("#answerResult10").val("Correct")
    score++;
    }
    else {
    $("#answerResult10").val("Incorrect")
    }
    $("#answerFinal1").val("Your score is:" +score)
   question ++;
   $("#questionID10").hide();
  //  $('#questionID10').replaceWith($(this).next('#questionID10'));
    });

});

$(document).ready(function(){
$(".scroll").click(function(event){
  var score =0;
  $("#answerFinal1").val("Your score is:" +score)
   name = prompt("Enter name")
   event.preventDefault();
   $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
     $("#questionID1").show();

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

$('#resetLocal').on('click', function() {

  localStorage.clear();

});
});
