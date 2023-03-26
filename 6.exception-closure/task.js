function parseCount(quantity) {
    let result = parseFloat(quantity);
    if (isNaN(result)){
        throw new Error("Невалидное значение");
    }
    return result;
}

function validateCount(quantity) {
    try {
        parseCount(quantity);
    } catch (error){
        console.log(error);
    }
}