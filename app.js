// Declaramos la función fromEuroToDollar
const fromEuroToDollar = function(valueInEuro) {

    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Declaramos la función fromDollarToYen
const fromDollarToYen = function(valueInDollar) {

    // Convertimos el valor a yenes japoneses
    let valueInYen = valueInDollar * 156.5;
    // Retornamos el valor en yenes
    return valueInYen;
}

// Declaramos la función fromYenToPound
const fromYenToPound = function(valueInYen) {

    // Convertimos el valor a libras esterlinas
    let valueInPound = valueInYen * 0.87;
    // Retornamos el valor en libras esterlinas
    return valueInPound;
}

// Exportamos todas las funciones en un solo objeto
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
