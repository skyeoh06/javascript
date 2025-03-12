// strings in javascript:
// can begin with a single quote or double quote
let sentence = 'the quick brown fox jumps over the lazy dog';
let rhyme="Jack and Jack went up the hill";

// escape sequence
let message="I don't want to go home";
console.log(message);
>> I don't want to go home

let words='She said,"No!"';
console.log(words);
>> She said,"No!"

let combined="She said, \"I didn't sell any seashell at the seashore\"";
console.log(combined);
>> She said, "I didn't sell any seashell at the seashore"

// string literal
// use a backtick (back quote) instead of quotes
let takeThisLiterally = `Hi,
how are you? 
"Merry Christmas"
\\n \\t
`;
console.log(takeThisLiterally);
>> 
Hi,
how are you? 
"Merry Christmas"
\n \t



let firstName = "Tan";
let lastName = "Ah Kow";
let amountDue = 3333;
let formLetter = "Dear "+firstName+" "+lastName+", please be aware that your bill of "+amountDue+" SGD is due."
console.log(formLetter);
>> Dear Tan Ah Kow, please be aware that your bill of 3333 SGD is due.

// easier way of inserting a variables into a string:
let formLetterTemplate =`Dear ${firstName} ${lastName}, please be aware that your bill of ${amountDue} SGD is due.`
console.log(formLetterTemplate);
>> Dear Tan Ah Kow, please be aware that your bill of 3333 SGD is due.

// SLICE STRING
console.log("SLICE STRING >>>>>");
>> SLICE STRING >>>>>
let someWords="The quick brow fox jumps over the lazy dog";

// start from character 5, and slices to the end
console.log(someWords.substring(5));
>> uick brow fox jumps over the lazy dog

// start from 0 and slices to 5
console.log(someWords.substring(0,5));
>> The q

// start from 0, slices till 10, increment 2?
// console.log(someWords.substring(0,10,2)); <-- Doesn't work

// Strings are also immutable in JavaScript, like in Python
let fruit1 = 'aPPle';
let fruit2 = 'apple';
console.log(fruit1.toLowerCase());
>> apple
console.log(fruit1.toLowerCase() == fruit2.toLowerCase());
>> true

// when we do fruit1.toLowerCase(), the original string
// is NOT CHANGED (because strings are immutable, i.e, cannot be changed), but instead a new COPY of the original string is
// converted to lower case and returned from the function

// can access individual index in a string
console.log(fruit1[0]);
>> a
fruit1[0]='b';
console.log(fruit1); // <-- doesn't change, why, because STRINGS are immutable.
>> aPPle
// but JavaScript will be passive aggressive about it and don't give you any errors, misleading you to think it is actually working and I have no idea why they don't know

let score=77.833;
console.log(Math.round(score));
>> 78
// floor always round down
console.log(Math.floor(score));
>> 77
// ceil will always round up
console.log(Math.ceil(score));
>> 78
// truncate
console.log(Math.trunc(score));
>> 77

// toFixed will round to proper decimal point
// but it returns a string
let s = score.toFixed(2);
console.log(s);
>> 77.83
console.log(typeof s); // get the data type of any variable
>> string

// round(2.33,2)

// Take 2 of rounding up numbers to decimal points
let z = parseFloat(score.toFixed(2));
console.log(z);
>> 77.83
console.log(typeof z); // get the data type of any variable
>> number

// If in python:
// x = 4
// print(x/0)
let x = 4;
let y = x/0;
console.log(y+1);
>> Infinity

// If in python, will crash:
let n1 = 4;
let n2 = "two";
let n3 = n1/n2;
n3 = n3 + 4;
n3 = n3 * 200;
n3 = n3 + 500;
console.log(n3);
>> NaN

// NO WAY IT CAN HAPPEN IN python
// print(x) #with x being undefined
let uknownVariable;
console.log(uknownVariable+4);
>> NaN

// write a program that asks the user to enter
// a list of names. As long as the user enters
//a name, we will store it in an array
// But the moment the user enter !quit, we will stop asking for a name and then display the names with the longest length (meaning, the most number of alphabetds)

// we use an array to store all the names
names = []; // [] is an empty array

// while loop is good for checking an arbitary condition

n = prompt("Enter your name: ")
while (n != '!quit') {
  names.push(n); //append = add to the back
  n = prompt("Enter your name: ")
}

// do a temp variable
// this is known as a state variable
let longestNameSoFar="";

// do a for loop to print out everything inside the array
// this is eqv. to Python's:
// for aName in names:
for (let aName of names) {
  console.log(aName);
  // check which of them has the longer length
  if (aName.length > longestNameSoFar.length) {
    longestNameSoFar = aName;
  }
}
console.log(longestNameSoFar);
>>
Enter your name: skyliners
Enter your name: python
Enter your name: keith
Enter your name: yuki
Enter your name: ayu
Enter your name: !quit
skyliners
python
keith
yuki
ayu
skyliners

'use strict'

// to declare a function
// 1. what is the name of the function
// 2. determine what is the result of the function
//   -> will become the return value
// 3. what are the arguments of the function does it need
//  -> if any data is missing, then it must be passed in as arguments
// 4. how do i get from the arguments to the return value

function calculatePerimeterOfRectangle(width, height) {
  let perimeter = width*2 + height*2;
  return perimeter;
}

// step 1: 
// what is the name of the function?
// --> since the function is ask user to enter names
// until he stops by typing '!quit', we can name the function keepAskingForNames()
function keepAskingForNames(){
  let names = [];
  let newName = prompt("Enter a name: ");
  while (newName != '!quit') {
    names.push(newName);
    newName = prompt("Enter a name: ");
  }
  return names; // names is supposed to be an array
}

// purpose: to find longest name in an array
function findLongestName(names) {
  let longestName = "";
  for (let eachName of names) {
    if (eachName.length > longestName.length) {
      longestName = eachName;
    }
  }
  return longestName;
}

// doSomething takes in one argument which is a function
function doSomething(func) {
  return func(); // use func as if it is a function
}


function funcCreator() {
  return doSomething;
}

// 1. can be stored in a variable
let x = keepAskingForNames;

// we use an array to store all the names
let names = []; // [] is an empty array


names = funcCreator()(keepAskingForNames);

// do a temp variable
// this is known as a state variable
let longestNameSoFar=findLongestName(names);

console.log("Longest name is "+longestNameSoFar);
>>
Enter a name: skyliner
Enter a name: qiqi
Enter a name: cincin
Enter a name: cinchao 
Enter a name: baijinting
Enter a name: python
Enter a name: !quit
Longest name is baijinting
