// Prevent us from attempting to use variables
// that are not declared
"use strict"

/*
Create an array

let arrayOne = [1, 2, 3, 4, 5];

Loop through the array and log each value

for (let i = 0; i < arrayOne.length; i++) {
console.log(arrayOne[i]);
}
OUTPUT:  1 2 3 4 5


FOR OF LOOP  

let arrayOne = [1, 2, 3, 4, 5];

Loop through the array and log each value using a for...of loop

for (let value of arrayOne) {
    console.log(value);
}

OUTPUT:  1 2 3 4 5 


FOR EACH LOOP   

let arrayOne = [1, 2, 3, 4, 5];

Loop through the array and log each value using Array.forEach() method

arrayOne.forEach(function(value) {
    console.log(value);
});

OUTPUT:  1 2 3 4 5 


TRYING TO CHANGE VALUE IN FOR OF LOOP =  NO CHANGE!  


let arrayOne = [1, 2, 3, 4, 5];

Attempt to assign all elements a new value using a for...of loop

for (let value of arrayOne) {
value = value * 2;  Try to change the value
}

Log the array to see if it has changed
console.log(arrayOne); 

    OUTPUT: [1, 2, 3, 4, 5]  NO CHANGE!


CHANGING VALUES IN FOR EACH LOOP = CHANGE!


let arrayOne = [1, 2, 3, 4, 5];

    Attempt to assign all elements a new value using Array.forEach() method

    arrayOne.forEach(function(value, index, array) {
        array[index] = value * 2;  Change the value
    });
    
 Log the array to see the changes
    console.log(arrayOne); 
    
    OUTPUT: Array(5) [ 2, 4, 6, 8, 10 ]
    
    0: 2
    
    1: 4
    
    2: 6
    
    3: 8
    
    4: 10
    
    length: 5   CHANGED!

RESEARCHING FOR IN LOOPS

 Create an object

let person = {
    name: "Tracie",
    age: 30,
    city: "New York"
};

 Loop through the object's properties

 for (let key in person) {
    console.log(key + ": " + person[key]);
}

    OUTPUT:     name: Tracie 
                age: 30 
                city: New York


 The for...in loop in JavaScript is used to iterate over the properties (or keys) of an object.
 
 It's great when you want to go through each key in an object, not just the values.               
  


 for (let key in person) loops through each property (key) in the person object.

 Inside the loop, console.log(key + ": " + person[key]);
 
 prints each key and its corresponding value.    
        
*/
