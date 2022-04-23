//Covert arry into a string of comma-separated array values

//Array.prototype.toString

let names = ["Dennis", "Sam", "Ivy", "nathan"]

let strNames = names.toString() //[Dennis, Sam, Ivy, nathan]

//Array.prototype.join //Specifies the string separator

let strNames = names.join(" and ")  //[Dennis and Sam and Ivy and nathan]

//Array.prototype.concat
 // concatenating existing arrays

let nums = [1, 2, 3]
let nums2 = [4, 5, 6]
let nums3 = [7, 8, 9]

let concatArr = nums.concat(nums2, nums3)  //[1, 2, 3, 4, 5, 6, 7, 8, 9]

//Array.prototype.splice 
 //splice() method used to add new items

let arr = ["Dennis", "Sam"]

arr.splice(1, 0, "Ivy", "Nathan")  

console.log(arr); //['Dennis', 'Ivy', 'Nathan', 'Sam' ]

//Array.prototype.slice  
//slices out a piece of an array

let arr = ["Dennis", "Sam", "Ivy"]

let slice = arr.slice(1) //['Sam' 'Ivy']

//Array.prototype.indexOf
 // finds the first index that contains a value

let arr = ["Dennis", "Sam", "Ivy", "Sam"] 

let index = arr.indexOf("joe")  //1

//Array.prototype.lastIndexOf
 //find the last index that contains a certain value
 //searches from right to reft

 let Arr = ["Dennis", "Sam", "Ivy", "Sam"] 

 let index = arr,lastIndexOf("Sam") //3

 //Higher-order array methods in Javascript
 //High-order function is a function that accepts a function as an argument and/or returns a function
 //high-order functions operate on other function

 //Array.prototype.forEach 
 //finds the last index that contains a certain value

 let numbers = [1, 2, 3, 4]

 numbers.forEach(n => console.log(n)) //1 //2 //3 //4


 //Array.prototype.map 
 //finds the last index that contains a certain value

 let numbers = [1, 2, 3, 4]

 //Double all numbers
 let doubleNumbers = numbers.map(n => n * 2) //[2, 4, 6, 8]

 //only double numbers at odd indexes
 let doubledOddIndexNumbers = numbers.map((n, i) => {
     if (i % 2 ===1) return n * 2
     else return n
 }) //[1, 4, 3, 8]

 //Array.prototype.filter
 //filter method used to filter out array elements that fail a boolean test

 let cities = [
     {name: "Nairobi", rivers: 3 },
     {name: "New York", rivers: 2 },
     {name: "Miami", rivers: 4 },
 ]

 let moreThanTwoRivers = cities.filter(c => c.rivers > 2) 
 //[
//{ name: 'Nairobi', rivers: 3 }
//{name: "Miami", rivers: 4 }
 //];

 //Array.prototype.reduce
 //the reduce method runs the call-back function on each array element and reduces the array down into a single value

 let numbers = [1, 2, 3, 4]

 let total = numbers.reduce((total, currentNum) => total + currentNum) //10


 //Array.prototype.some 
 //the some method checks if some array pass a test

 let numbers = [4, 6, 14, 16]

 let isSomeGreatorThan6 = numbers.some(n => n > 6) //true
 let isSomeLessThan4 = numbers.some(n => n > 6) //false


 //Array.prototype.find
 //find method returns the first element in the array that passes the test
 
 let stock = [
     { item: "Laptop", quantity: 32},
     { item: "Watch", quantity: 9},
     { item: "Laptop", quantity: 12},
 ]
 let watch = stock.find(s => s.items === "Watch") //{ item: "Watch", quantity: 9}

 //Array.prototype.findIndex
 //returns the index of the value

 let stock = [
    { item: "Laptop", quantity: 32},
    { item: "Watch", quantity: 9},
    { item: "Laptop", quantity: 12},
]
let WatchIndex = stock.findIndex(s => s.items === "Watch") //1

//Array.Prototype.sort
//sort puts  array elements in ascending order

let names = ["Dennis", "Sam", "Ann"]

names.sort()

console.log(names) //['Ann', 'Dennis', 'Sam']


//for numbers we need to pass a comparison call-back function

let numbers = [3, 1, 7, 2]

numbers.sort((a,b) => a - b)

console.log(numbers) //[1, 2, 3, 7]