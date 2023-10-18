const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let sumOfPositives = 0;
let countOfPositives = 0;

for (let firstNum = 0; firstNum < array.length; firstNum++) {
  if (array[firstNum] > 0) {
    sumOfPositives += array[firstNum];
    countOfPositives++;
  }
}

document.getElementById('first-demo').innerHTML = 'Summary of positive numbers is ' + sumOfPositives + '<br>Quantity of positive numbers is' + countOfPositives;

let minElement = array[0];
let minElementIndex = 0;

for (let secondNum = 0; secondNum < array.length; secondNum++) {
  if (array[secondNum] < minElement) {
    minElement = array[secondNum];
    minElementIndex = secondNum;
  }
}

document.getElementById('second-demo').innerHTML = 'Minimum element is ' + minElement + '<br>His index is ' + minElementIndex;

let maxElement = array[0];
let maxElementIndex = 0;

for (let thirdNum = 0; thirdNum < array.length; thirdNum++) {
  if (array[thirdNum] > maxElement) {
    maxElement = array[thirdNum];
    maxElementIndex = thirdNum;
  }
}

document.getElementById('third-demo').innerHTML = 'Maximum element is ' + maxElement + '<br>His index is ' + maxElementIndex;

let countOfnegatives = 0;

for (let fourthNum = 0; fourthNum < array.length; fourthNum++) {
  if (array[fourthNum] < 0) {
    countOfnegatives++;
  }
}

document.getElementById('fourth-demo').innerHTML = 'Quantity of negative numbers is ' + countOfnegatives;

let countOfOddPositives = 0;

for (let fifthNum = 0; fifthNum < array.length; fifthNum++) {
  if (array[fifthNum] > 0 && array[fifthNum] % 2 !== 0) {
    countOfOddPositives++;
  }
}

document.getElementById('fifth-demo').innerHTML = 'Quantity of positive odd numbers is ' + countOfOddPositives;

let countOfEvenPositives = 0;

for (let sixthNum = 0; sixthNum < array.length; sixthNum++) {
  if (array[sixthNum] > 0 && array[sixthNum] % 2 === 0) {
    countOfEvenPositives++;
  }
}

document.getElementById('sixth-demo').innerHTML = 'Quantity of positive even numbers is ' + countOfEvenPositives;

let sumOfPositivesEven = 0;

for (let seventhNum = 0; seventhNum < array.length; seventhNum++) {
  if (array[seventhNum] > 0 && array[seventhNum] % 2 === 0) {
    sumOfPositivesEven += array[seventhNum];
  }
}

document.getElementById('seventh-demo').innerHTML = 'Summary of positive even numbers is ' + sumOfPositivesEven;

let sumOfPositivesOdd = 0;

for (let eighthNum = 0; eighthNum < array.length; eighthNum++) {
  if (array[eighthNum] > 0 && array[eighthNum] % 2 !== 0) {
    sumOfPositivesEven += array[eighthNum];
  }
} 

document.getElementById('eighth-demo').innerHTML = 'Summary of posistive odd number is ' + sumOfPositivesEven;

let productOfPositives = 1;

for (let ninthNum = 0; ninthNum < array.length; ninthNum++) {
  if (array[ninthNum] > 0) {
    productOfPositives *= array[ninthNum];
  }
}

document.getElementById('ninth-demo').innerHTML = 'Product of positive numbers is ' + productOfPositives;

let maxElementValue = Math.max(...array);

for (let tenthNum = 0; tenthNum < array.length; tenthNum++) {
  if (array[tenthNum] !== maxElementValue) {
    array[tenthNum] = 0;
  }
}

document.getElementById('tenth-demo').innerHTML = 'Maximum Element is ' + maxElementValue;