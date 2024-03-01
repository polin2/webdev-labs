// Exercise #1:
// When the user clicks the 'copy' button, copy the user input to the output area

/* 
//javascript:
let userInput1 = document.querySelector('#userInput1');
let copy = document.querySelector('#copy');
let output1 = document.querySelector('#output1');
copy.addEventListener('click', handleClick);
function handleClick(event) {
  console.log('click event', event);
  output1.textContent = userInput1.value;
}*/
$("document").ready(() => {
  $("#copy").on("click", (event) => {
    //console.log("Click event", event);
    $("#output1").text($("#userInput1").val());
  });
});

// Exercise #2:
// When the user enters input text, copy the user input to the output area

/* 
//javascript:
let userInput2 = document.querySelector('#userInput2');
let output2 = document.querySelector('#output2');
userInput2.addEventListener('input', handleInput);
function handleInput(event) {
  console.log('click event', event);
  output2.textContent = userInput2.value;
}*/

$("document").ready(() => {
  $("#userInput2").on("input", (event) => {
    $("#output2").text($("#userInput2").val());
  });
});
