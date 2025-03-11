#Arrays
// arrays are essentially lists in python
let numbers =[1,3,5,7,9,11];
let words=['apple', 'banana', 'orange'];
let rojak=[42,3.14,true,'quick brown fox'];

// indexOf
// lets us if an element exists in an array
console.log(numbers.indexOf(11));
>> 5
console.log(words.indexOf('banana'));
>> 1

// this only the returns first occurence
let animals=['dog', 'cat', 'dog', 'cat'];
console.log(animals.indexOf('cat'));
>> 1
console.log(animals.indexOf('dog'));
>> 0

// if the element does not exists, indexOf()
// will return -1
console.log(animals.indexOf('tiger'))
>> -1

/// push and pop
// push allows add something to the back of the array. It's the same as the Python's append
numbers.push(13);
console.log(numbers);
>> [
  1,  3,  5, 7,
  9, 11, 13
]

// pop will remove the last one
let n = numbers.pop();
console.log("popped=",n);
>> popped= 13
console.log(numbers);
>> [ 1, 3, 5, 7, 9, 11 ]

// shift allows us to remove from the front of the array
let n2 = numbers.shift()
console.log(n2);
>> 1
console.log(numbers);
>> [ 3, 5, 7, 9, 11 ]

console.log("Unshift");
>> Unshift
numbers.unshift(33);
console.log(numbers);
>> [ 33, 3, 5, 7, 9, 11 ]

// sorting
let mess = [77,1,25,11,44,33,-22,5,30,2];
mess.sort(function(a,b){
  return a-b;
});
console.log(mess); // give me sorted in string order
>> 
[
  -22,  1,  2,  5, 11,
   25, 30, 33, 44, 77
]
// slicing
// first argument start index
// second argument: end index 
// is like substring, but for arrays
// does not change the array 
let sequence = [11,22,33,44,55,66,77,88]
let s2 = sequence.slice(2,6);
console.log(s2);
>> [ 33, 44, 55, 66 ]
// splice
// first argument: start at which index
// second arugment: length
// splice will change the array
let s3 = sequence.splice(2,6);
console.log("sequence array:", sequence);
>> sequence array: [ 11, 22 ]
console.log("s3:",s3);
>> s3: [ 33, 44, 55, 66, 77, 88 ]
// remove just one element from array by index
// using splice
let pets =['fido','biscuit','fluffy','xiao qiang'];
pets.splice(2, 1);
console.log('pets:', pets);
>> pets: [ 'fido', 'biscuit', 'xiao qiang' ]

let pattern = [0,0,0,0,0,0,0];
pattern.fill(1);
console.log('pattern:', pattern);
>> 
pattern: [
  1, 1, 1, 1,
  1, 1, 1
]
pattern.fill('*',3,6);
console.log('pattern:', pattern)
>>
pattern: [
  1,   1,   1, '*',
  '*', '*', 1
]

#Objects
// known as dictionary in Python
// known as map, hash map, hash tables in C++,Java, etc.
// known as object in JavaScript
// known as associative array in PHP, PERL etc.

// each of the elements has an index
// index is the position in the array 
// (counting from 0)
let primes = [1,3,5,7,9,11];

// we can access an element by its index
console.log('second number', primes[1]);
>> second number 3

// instead of an index, we use a key
// to refer to an element inside the object.
// elemens are also known as 'value'
// hence, sometimes we one pair of index mapping to a value a "key-value" pair.
let fruits={
  'a':'apple',
  'b':'banana',
  'c':'cherry',
  'd':'durian'
  // <key>:<value>  --> key value pair
}

// using an object
// we access what we want by the key
console.log(fruits['a'])
>> apple
console.log(fruits.a);
>> apple

// no need for all the values be of the same data type
let employee={
  'name':'Tan Ah Kow',
  'age':33,
  'title':'HR Manager',
  'single':false
};
// employee.name ==> the name variable belonging to the employee object
console.log('Name:', employee.name);
>> Name: Tan Ah Kow

// the key does not have to be in quotes 
// the quotes are optional
let address={
  // the key does not have to be in string.
  // JavaScript will auto convert to string
  street:'Yishun Ave 4',
  block:'879',
  unit:'#11-243'
}

// the key can be of ANY data type
let lookup = {
  1:'one',
  2:'two',
  3:'three',
  4:'four',
  // does not have to be in sequential order
  44:'fourty-four'
}
// this is using an integer as an index
// keep in mind objects are NOT sequences
// it doesn't care the position of the elements
// in fact, it doesn't even know
console.log(lookup[4]);
>> four

// All keys in an object MUST be unique
let product = {
  sku:'1212A',
  price:3.34,
  name:'Surigcal Mask',
  price:60 // the later key will overwrite the earlier key
}

console.log(product);
>> { sku: '1212A', price: 60, name: 'Surigcal Mask' }
