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
//numRule = 1

function beepBoop(userInput) {          //find index in array contain a 1
  for( let i = 0; i <= userInput; i++) {
    numArr.push(i);
  }
  //let newNumArr = []; 
  numArr.forEach(function(i) {
    if ( i === 1 ) {
      return numArr[i] = "Beep!";
    };
  });
    return numArr;
}






















const userInput = 5;
const startNum = [0];
let numArr = [];

function beepBoop(userInput) {
for( let i = 0; i <= userInput; i++) {
  numArr.push(i);
}
  let numStr = numArr.toString();
  numStr.forEach(function(index) {
    if ((index+'').indexOf('1')) {
      return index === '1';
    };
  })
}



numString.forEach(function(index) {
  if ((index+'').indexOf('1')) {
};
return numArr;
});
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

//Test 4
const userInput = 5;
const startNum = [0];
let numArr = [];

function beepBoop() {
  newUserInput = startNum.concat(userInput);
  for( let i = 0; i <= userInput; i++) {
    numArr.push(i);
  }
  
