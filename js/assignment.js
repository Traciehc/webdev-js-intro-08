"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");


const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];

function findSmallestNumber(numbers) {
  let smallest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }
  return smallest;
}




function findLargestNumber(numbers) {
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++ ) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}


function findAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i ++) {
    sum += numbers[i];
  }
return sum / numbers.length;
}


submissionBtn.addEventListener("click", function () {
  const smallestNumber = findSmallestNumber(myNumbers);
  const largestNumber = findLargestNumber(myNumbers); 
  const averageNumber = findAverage(myNumbers);

  smallestNumberElement.innerHTML = smallestNumber;
  largestNumberElement.textContent = largestNumber;
  averageNumberElement.textContent = averageNumber;
  });

  console.log(findSmallestNumber(myNumbers));
  console.log(findLargestNumber(myNumbers)); 
  console.log(findAverage(myNumbers)); 