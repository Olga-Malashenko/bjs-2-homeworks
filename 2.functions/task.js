//  Задача 1.

function getArrayParams(...arr) {
  
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const sum = arr.reduce((acc, item) => acc + item, 0);
    const avg = Number((sum / arr.length).toFixed(2));
  
    return { min, max, avg };
}

//  Задача 2.


function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((acc, element) => acc + element, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  const arrOfEven = arr.filter(number => number % 2 === 0);
  const sumOfEven = arrOfEven.reduce((acc, number) => acc + number, 0);
  const sumOfOdd = arr.filter(number => number % 2 === 1).reduce((acc, number) => acc + number, 0);
  return sumOfEven - sumOfOdd;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  const arrOfEven = arr.filter(number => number % 2 === 0);
  return arrOfEven.reduce((acc, element) => acc + element, 0) / arrOfEven.length;
}

//  Задача 3.

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  
  for (let element of arrOfArr) {
    let comparable = func(element)
    if (comparable > maxWorkerResult) {
      maxWorkerResult = comparable;
    }
  }
  return maxWorkerResult;
}
