function parseCount(quantity) {
    let result = Number.parseFloat(quantity);
    if (Number.isNaN(result)){
        throw new Error("Невалидное значение");
    }
    return result;
}

function validateCount(quantity) {
    try {
        parseCount(quantity);
    } catch (error){
        return error;
    }
}