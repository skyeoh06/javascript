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

