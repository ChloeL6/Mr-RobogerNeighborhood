const userInput = [1, 2, 3, 4]; //Test 1
const firstIndex = [0]
let newUserInput; 

function beepBoop() {
  return newUserInput = firstIndex.concat(userInput);
}

/*Test 2: "Replace 1 with "Beep!"
Code:
const userInput = [1, 2, 3, 4]
function beepBoop()
Expected Output: [0, "Beep!", 2, 3, 4]*/

const userInput = [1, 2, 3, 4]; //Test 1
const firstIndex = [0]
let newUserInput; 

function beepBoop() {
  newUserInput = firstIndex.concat(userInput);
  newUserInput[1] = "Beep!";
  return newUserInput;
}
