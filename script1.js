

var score =0;
var question =0;
var name =0;
var counter=0;

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
     //$("input:radio").attr('disabled',true);
    //  $(this).attr('disabled','disabled');
    $("input[name=qRadio1]").attr('disabled', true);
    // $(this).attr('disabled', 'disabled');
    question ++;
});


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
   $("input[name=qRadio2]").attr('disabled', true);
   question ++;
    // $(this).attr('disabled','disabled');
    // $("input:radio").attr('disabled',true);
});
$(".scroll").click(function(event){
   event.preventDefault();
   $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
   name = prompt("Enter name")
   //localStorage.clear();//to clear localStorage
 });


$('.giveup').on('click', function(event) {
  event.preventDefault();

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
