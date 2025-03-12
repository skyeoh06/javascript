class Student {
  constructor(fname, lname, gpa){
    this.firstName = fname;
    this.lastName = lname;
    this.gpa = gpa;
  }
}

let roster = [];
roster.push(new Student("Ah Kow", "Tan", 3.0));
roster.push(new Student("Mary", "Loh", 2.95));
roster.push(new Student("Ah Sigh","Lee", 5.0));
roster.push(new Student("John", "Doe", 1.31));
roster.push(new Student("Mary", "Sue", 5.0));
roster.sort(function(s1,s2){
  if (s1.gpa < s2.gpa) {
    return 1; // meaning is s1 is the 'larger one'
  } else if (s1.gpa > s2.gpa) {
    return -1; // meaning is s2 is 'larger' one
  } else {
    return 0;
  }
});
console.log(roster);
>> 
  [
  Student { firstName: 'Ah Sigh', lastName: 'Lee', gpa: 5 },
  Student { firstName: 'Mary', lastName: 'Sue', gpa: 5 },
  Student { firstName: 'Ah Kow', lastName: 'Tan', gpa: 3 },
  Student { firstName: 'Mary', lastName: 'Loh', gpa: 2.95 },
  Student { firstName: 'John', lastName: 'Doe', gpa: 1.31 }
]
console.log("sort by last name:")
>> sort by last name:
roster.sort(function(s1,s2){
  if (s1.lastName > s2.lastName) {
    return 1; // s1 is larger
  } else if (s1.lastName < s2.lastName) {
    return -1; // s2 is larger
  } else {
    return 0;
  }
})
console.log(roster);
>>
[
  Student { firstName: 'John', lastName: 'Doe', gpa: 1.31 },
  Student { firstName: 'Ah Sigh', lastName: 'Lee', gpa: 5 },
  Student { firstName: 'Mary', lastName: 'Loh', gpa: 2.95 },
  Student { firstName: 'Mary', lastName: 'Sue', gpa: 5 },
  Student { firstName: 'Ah Kow', lastName: 'Tan', gpa: 3 }
]

#OOP MEthod
// employee object
// known as literal object syntax
// or javascript object notation
// let jane = {
//   'firstName':'Jane',
//   'lastName':'Doh',
//   'salary':10000,
//   'getTakeHomePay':function(){
//     return this.salary * 0.8;
//   }
// }

class Employee {
  constructor(fname, lname, salary) {
    // all employee objects will have a firstName instance viariable
    this.firstName = fname; // default is blank

    // all employee objects will have a lastName instance variable
    this.lastName = lname; // default is blank

    // all employee objects will have a salary instance variable
    this.salary = salary; // default is 0
  }

  // name of the function()
  getTakeHomePay() {
    return this.salary * 0.8;
  }

  increasePay(increment) {
    this.salary = this.salary + increment;
  }
}

let jane = new Employee("Jane", "Tan", 1000);
let sarah = new Employee("Sarah", "Li", 10000);
console.log(jane);
>> Employee { firstName: 'Jane', lastName: 'Tan', salary: 1000 }
console.log(sarah);
>> Employee { firstName: 'Sarah', lastName: 'Li', salary: 10000 }

console.log(jane.getTakeHomePay());
>> 800
console.log(sarah.getTakeHomePay());
>> 8000

jane.increasePay(500);
console.log(jane);
>> Employee { firstName: 'Jane', lastName: 'Tan', salary: 1500 }


#OOP Class
class Car {
  // everything between these curly braces
  // are part of the Car class.
  
  // constructor is a function that belongs to the Car class
  constructor() {
    // for all objects based on this class, they will have an instance variable named 'model' with the default value of 'N/A'
    this.model = "N/A";

    // for all objects based on this class, they will have an instance variable named 'speed' with the default value of 0
    this.speed = 0;

    // for all objects based on this class, theu will have an instance variable named 'price' with the default value of 0
    this.price = 0;
  }
}

let c1 = new Car(); // new Car() will construct a new instance of the object and return it
console.log(c1);
>> Car { model: 'N/A', speed: 0, price: 0 }

let c2 = new Car();
c2.model = "Ford";
c2.speed = 120;
c2.price = 50000;

let c3 = new Car();

console.log(c2);
>> Car { model: 'Ford', speed: 120, price: 50000 }
console.log(c3);
>> Car { model: 'N/A', speed: 0, price: 0 }

// defintion of object (technical):
// contains data
// also contains functionality

// a string is an object

// why? it contains data
let sentence="a quick brown fox jumps over the lazy dog";

// sentence also contains functions (i.e, methods)
console.log(sentence.toUpperCase());
>> A QUICK BROWN FOX JUMPS OVER THE LAZY DOG

// array is also an object

// array contains data
let a = [1,3,5,7,9,11];
console.log(a);
>> [ 1, 3, 5, 7, 9, 11 ]

// array contains function
a.reverse();
console.log(a);
>> [ 11, 9, 7, 5, 3, 1 ]

// therefore an array is an object

let b = [33,44,11,22,55];
b.sort(function(a,b){
  return a - b;
})
console.log(b);
>> [ 11, 22, 33, 44, 55 ]

// define an object with three instance
// variables
// i.e an instance variable is a variable that is inside an object
let product={
  'name':'Carton of Coke Zero',
  'price':29.99,
  'qty':30
};

// console.log --> use the console's log function (use the log function that belongs to the console object)

// console log the product's name
console.log(product.name);
>> Carton of Coke Zero

// product's name is set to carton of masks
product.name = "Carton of Masks";
console.log(product.name);
>> Carton of Masks

let table = {
  'name':'Dining Table for 6',
  'width':300,
  'height':120,
  'cost':700
};

let employee = {
  'firstName':'John',
  'lastName':'Doe',
  'salary':8000,
  'getTakeHomePay':function(){
    return this.salary * 0.8;
  }
}

console.log(employee.getTakeHomePay())
>> 6400

let employee2 = {
  'firstName':'Mary',
  'lastName':'Loh',
  'salary':7500,
  'getTakeHomePay':function(){
    return this.salary * 0.8;
  }
}

console.log(employee2.getTakeHomePay())
>> 6000
