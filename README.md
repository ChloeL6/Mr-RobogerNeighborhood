# Mr Roboger's Neighborhood

#### By Chloe Le

#### Return a string of number from user input and replace some numbers with "Beep!", "Boop!" and "Won't you be my neighbor?";

## Technologies Used

- HTML
- CSS
- JavaScripts
- VS Code

## Description

The application will return a string of number up to the number from the user input. If a number has a 3 , it will be replaced with "Won't you be my neighbor?". If it has a 2, it will be replaced with "Boop!". If it has a 1, it will be replaced with "Beep!". 

## Setup/Installation Requirements

- Open your Gitbash
- Navigate to where you want the copy of the project to be saved after cloning, by using cd 'destination'
- $ git clone https://github.com/ChloeL6/Mr-RobogerNeighborhood.git, to clone the project
- After cloning is done, navigate to the folder where the project is saved
- Open the index.html file to see the project in your browser

## Tests

```
Describe : beepboop()

Test 1: "Add 0 to user input"
Code:
const userInput = 5;
const startNum = [0];
function beepBoop()
Expected Output: [0,5]

Test 2: "Return an array of number from user input start with 0"
Code:
const userInput = 5;
const startNum = [0];
function beepBoop()
Expected Output: [0,1,2,3,4,5]

Test 3: "Replace 1 with "Beep!"
Code:
const userInput = 11;
const startNum = [0];
function beepBoop()
Expected Output: [0,"Beep!",2,3,4,5,6,7,8,9,10,11]

Test 4: "Replace 1 with "Beep!" using loop through the array"
Code:
const userInput = 11;
const startNum = [0];
function beepBoop()
Expected Output: [0,"Beep!",2,3,4,5,6,7,8,9,10,11]

Test 5: "Replace any number an a 1 with "Beep!""
Code:
const userInput = 11;
const startNum = [0];
function beepBoop()
Expected Output: [0,"Beep!",2,3,4,5,6,7,8,9,"Beep!","Beep!"]

Test 6: "Replace any number an a 1 with "Beep!" and 2 "Beep!""
Code:
const userInput = 12;
const startNum = [0];
function beepBoop()
Expected Output: [0, 'Beep!', 'Boop!', 3, 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!']

Test 7: "Replace any number an a 1 with "Beep!", 2 with "Beep!", 3 with "Won't you be my neighbor?"
Code:
const userInput = 13;
const startNum = [0];
function beepBoop()
Expected Output: [0, 'Beep!', 'Boop!', 3, 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', "Won't you be my neighbor?" ]

```
## Known Bugs

-
-

## License

Copyright (c) [2022] [Yen Chi Le (Chloe Le)]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
