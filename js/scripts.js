
function palindrome(word) {
 var arr1 = word.split("");
 var arr2 = word.split("").reverse();
     
  if (arr1 === arr2) {
    return true;
  }
  if (arr1 == " " || arr2 == " ") {
    return false;
  }
  if (arr1.length != arr2.length) {
    return false;
  }
  for (var i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}



$(document).ready(function(){

  $("form#palindrome").submit(function(event){
    event.preventDefault();
    var word = $("input#word").val();
    var result = palindrome(word);
    $(".not").text(" ");
    $(".number").text(" ");
   
    if(!result) {
      $(".number").text(word);
      $(".not").text("not");
    } else {
      $(".number").text(word);
    }

    $("#result").show();

  });//end of submit event
});//end of file