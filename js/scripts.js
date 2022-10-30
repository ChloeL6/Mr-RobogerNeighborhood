//UI logic

function getData(event) {
  const userInput = document.getElementById("input").value;

  document.getElementById("output").removeAttribute("class");

  document.getElementById("mainOutput").innerText = userInput;

  event.preventDefault();
}

window.addEventListener("load", function() {
  document.getElementById("form").addEventListener("submit", getData);
});

//BU logic

function beepBoop(userInput) {      
  let numArr = []; 
  for( let i = 0; i <= userInput; i++) {
    numArr.push(i);
  }
  numArr.forEach(function(num, index) {
    if (num.toString().includes("3")) {
      numArr[index] = "Won't you be my neighbor?";
    } else if (num.toString().includes("2")) {
      numArr[index] = "Boop!";
    } else if (num.toString().includes("1")) {
      numArr[index] = "Beep!";
    }
  });
  return numArr;
}






















  
