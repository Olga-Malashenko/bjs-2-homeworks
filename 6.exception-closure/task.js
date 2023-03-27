//  Задача 1

function parseCount(quantity) {
    let result = Number.parseFloat(quantity);
    if (Number.isNaN(result)){
        throw new Error("Невалидное значение");
    }
    return result;
}

function validateCount(quantity) {
    try {
        return parseCount(quantity);
    } catch (error){
        return error;
    }
}

//  Задача 2

class Triangle {
    constructor(sideA, sideB, sideC) {
        if (!(sideA > 0 && sideB > 0 && sideC > 0 && (sideA + sideB) > sideC 
        && (sideA + sideC) > sideB && (sideB + sideC) > sideA)) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    get perimeter() {
        return this.sideA + this.sideB + this.sideC;
    }

    get area() {
        const semiPerimeter = this.perimeter * 0.5;
        return Number(Math.sqrt(semiPerimeter * (semiPerimeter - this.sideA) * 
        (semiPerimeter - this.sideB) * (semiPerimeter - this.sideC)).toFixed(3));
    }  
}

function getTriangle(sideA, sideB, sideC) {
    try {
        return new Triangle(sideA, sideB, sideC);
    } catch(error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует"
            },
            get area() {
                return "Ошибка! Треугольник не существует"
            }
        };
    }
    
}