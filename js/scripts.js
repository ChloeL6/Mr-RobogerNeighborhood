//Test1
const userInput = 5;
const startNum = [0];

function beepBoop() {
  newUserInput = startNum.concat(userInput);
  return newUserInput;
}


//Test 2
const userInput = 5;
const startNum = [0];
let numArr = [];

function beepBoop(userInput) {
for( let i = 0; i <= userInput; i++) {
  numArr.push(i);
}
return numArr;
}

//Test 3
const userInput = 5;
const startNum = [0];
let numArr = [];

function beepBoop(userInput) {
  for( let i = 0; i <= userInput; i++) {
    numArr.push(i);
  }
  if (numArr[1] === 1) {
    numArr[1] = "Beep!";
  };
  return numArr;
}

//Test4
const userInput = 5;
const startNum = [0];
let numArr = [];

function beepBoop(userInput) {          
  for( let i = 0; i <= userInput; i++) {
    numArr.push(i);
  }
  numArr.forEach(function(i) {
    if ( i === 1 ) {
      return numArr[i] = "Beep!";
    };
  });
    return numArr;
}


//Test5

function beepBoop(userInput) { 
  let numArr = [];         
  for( let i = 0; i <= userInput; i++) {
    numArr.push(i);
  }
  numArr.forEach(function(num, index) {
    if (num.toString().includes("1")) {
      numArr[index] = "Beep!";
    }
  });
  return numArr;
}

//Test 6

function beepBoop(userInput) { 
  let numArr = [];         
  for( let i = 0; i <= userInput; i++) {
    numArr.push(i);
  }
  numArr.forEach(function(num, index) {
    if (num.toString().includes("2")) {
      numArr[index] = "Boop!";
    } else if (num.toString().includes("1")) {
      numArr[index] = "Beep!"
    }
  });
  return numArr;
}


























  
