
var score =0;
$(document).ready(function(){
    // $("#answerFinal1").val("Your score is:" +score)
   $('#questionID1').on('click', function() {
   var result =($('input[name=qRadio]:checked', '#questionID1').val());
   if(result=="Answer1"){
    $("#answerResult1").val("Correct")
    score ++;

    }
    else {
    $("#answerResult1").val("Incorrect")
     }
     $("#answerFinal1").val("Your score is:" +score)
     //$("input:radio").attr('disabled',true);
     $(this).attr('disabled','disabled');
});


$('#questionID2').on('click', function() {
var result =($('input[name=qRadio]:checked', '#questionID2').val());
if(result=="Answer4"){
 $("#answerResult2").val("Correct")
 score++;
 }
 else {
 $("#answerResult2").val("Incorrect")
  }
   $("#answerFinal1").val("Your score is:" +score)
    // $(this).attr('disabled','disabled');
    // $("input:radio").attr('disabled',true);
});

});
