"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let D, x1, x2;

  D = (Math.pow(b, 2)) - (4 * a * c);

  if (D === 0) {
      x1 = (-b) / (2 * a);
      arr[0] = x1; 
  }
  else if (D > 0) {
      x1 = (-b + Math.sqrt(D)) / (2 * a);
      x2 = (-b - Math.sqrt(D)) / (2 * a);
      arr[0] = x1;
      arr[1] = x2;
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  //function calculateTotalMortgage(percent, contribution, amount, date) {
    //let totalAmount;
  
    if (isNaN(+percent)) {
      return false;
    }
    if (isNaN(+contribution)) {
      return false;
    }
    if (isNaN(+amount)) {
      return false;
    }
  
    const percentPerMonth = parseFloat(percent) / 100 / 12;
  
    const loan = parseFloat(amount) - parseFloat(contribution);
  
    const payment = loan * (percentPerMonth + percentPerMonth / (Math.pow((1 + percentPerMonth), countMonths) - 1));
    const totalAmount = Number((payment * countMonths).toFixed(2));
    
    return totalAmount;
  }
