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

//UI logic

function handleSelect(event) {

  event.preventDefault();

  const userInput = parseInt(document.getElementById("input").value);
  let result = beepBoop(userInput);

  document.getElementById("output").removeAttribute("class");

  document.getElementById("mainOutput").innerText = result;
}

window.addEventListener("load", function() {
  document.getElementById("form").addEventListener("submit", handleSelect);
});






















  
