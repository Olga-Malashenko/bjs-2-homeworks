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
    let totalAmount;
  
    if (isNaN(+percent)) {
      return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
    }
    if (isNaN(+contribution)) {
      return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
    }
    if (isNaN(+amount)) {
      return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
    }
  
  
    let percentPerMonth = parseFloat(percent) / 100 / 12;
  
    let loan = parseFloat(amount) - parseFloat(contribution);
  
    let currentDate = new Date();
    let quantityOfYear = date.getFullYear() - currentDate.getFullYear();
    let quantityOfMonth = (date.getMonth() - currentDate.getMonth()) + quantityOfYear * 12;
  
    let payment = loan * (percentPerMonth + percentPerMonth / (Math.pow((1 + percentPerMonth), quantityOfMonth) - 1));
    totalAmount = Number((payment * quantityOfMonth).toFixed(2));
    
    console.log(`Сумма, которую клиент заплатит банку: ${totalAmount}\nВ том числе:\n\tПервоначальный взнос ${contribution}\n\tПогашение основного долга ${loan}\n\tПроценты за пользование кредитом ${(payment * quantityOfMonth - loan).toFixed(2)}`);
  
    return totalAmount;
  }
}