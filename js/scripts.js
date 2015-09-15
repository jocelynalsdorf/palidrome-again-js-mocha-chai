
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



// $(document).ready(function(){

//   $("form#factorial").submit(function(event){
//     event.preventDefault();
//     var num = parseInt($("input#num").val());
//     var result = triangle(num);
//     $(".type").text(" ");
//     $(".number").text(" ");
   
//     if(!result) {
//       $(".type").text("factorial of 1 or 0 is always 1.Boring");
//     } else {
//       $(".type").text(result);
//     }

//     $("#result").show();

//   });//end of submit event
// });//end of file