const userInput = [1, 2, 3, 4]; //Test 1
const firstIndex = [0]
let newUserInput; 

function beepBoop() {
  return newUserInput = firstIndex.concat(userInput);













function beepBoop() {
  newUserInput = firstIndex.concat(userInput);
for (i = 0; i < userInput.length; i +=1) {
  if ( userInput[i] === 1) {
    console.log("looped");
  return true;
    };
  }
}











}

/*Test 2: "Replace 1 with "Beep!"
Code:
const userInput = [1, 2, 3, 4]
function beepBoop()
Expected Output: [0, "Beep!", 2, 3, 4]*/

const userInput = [1, 2, 3, 4];
const firstIndex = [0]
let newUserInput; 

function beepBoop() {
  newUserInput = firstIndex.concat(userInput);
  newUserInput[1] = "Beep!";
  return newUserInput;
}

/*Test 3: "For numbers that contain a 1, all digits are replaced with "Beep!"
Code:
const userInput = [1, 2, 3, 4, 11]
function beepBoop()
Expected Output: [0, "Beep!", 2, 3, 4, "Beep"]*/

const userInput = [1, 2, 3, 4];
const firstIndex = [0]
let newUserInput; 

function beepBoop() {
  newUserInput = firstIndex.concat(userInput);
  newUserInput[1] = "Beep!";
  return newUserInput;
}